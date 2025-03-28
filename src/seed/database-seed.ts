import { PrismaClient } from '@prisma/client';
import { initialData } from './seed';

const prisma = new PrismaClient();

async function main() {
    // 1. Eliminar datos existentes (en orden correcto para evitar violaciones de FK)
    await prisma.attendance.deleteMany();
    await prisma.schedule.deleteMany();
    await prisma.packagePurchase.deleteMany();
    await prisma.hoursRange.deleteMany();
    await prisma.historyRange.deleteMany();
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();
    await prisma.package.deleteMany();
    await prisma.range.deleteMany();

    // 2. Crear procedimientos almacenados y triggers
    await createDatabaseProcedures();

    // 3. Obtener datos iniciales
    const { users, posts, ranges, packages } = initialData;

    // 4. Insertar rangos con horas mínimas requeridas
    await prisma.range.createMany({
        data: ranges.map((range, index) => ({
            ...range,
            minHours: calculateMinHoursForRank(index + 1) // Función para calcular horas requeridas
        }))
    });

    // 5. Insertar paquetes de horas
    await prisma.package.createMany({
        data: packages
    });

    // 6. Insertar usuarios
    const createdUsers = await Promise.all(
        users.map(async (user) => {
            return await prisma.user.create({
                data: {
                    ...user,
                    currentRangeId: 1, // Todos comienzan en el rango 1 (10° Kup)
                    availableHours: 0 // Inicialmente sin horas disponibles
                }
            });
        })
    );

    // 7. Asignar paquetes de horas a usuarios aleatoriamente
    await assignRandomPackages(createdUsers);

    // 8. Encontrar usuario administrador
    const adminUser = createdUsers.find(user => user.isAdmin);
    if (!adminUser) {
        throw new Error('No se encontró el usuario administrador');
    }

    // 9. Insertar posts
    await Promise.all(
        posts.map(async (post) => {
            return await prisma.post.create({
                data: {
                    ...post,
                    authorId: adminUser.id
                }
            });
        })
    );

    // 10. Crear historial de rangos y horas para todos los usuarios
    await createUserProgressHistory(createdUsers);

    // 11. Crear horarios de clases
    const createdSchedules = await createClassSchedules();

    // 12. Crear asistencias a clases
    await createClassAttendances(createdSchedules);

    console.log('Seed ejecutado correctamente');
}

// Función para calcular horas mínimas requeridas por rango
function calculateMinHoursForRank(rankIndex: number): number {
    if (rankIndex <= 10) { // Para Kup (1-10)
        return 100 + (10 - rankIndex) * 10; // 100, 110, 120,..., 190
    }
    return 200 + (rankIndex - 10) * 50; // Para Dan: 200, 250, 300,...
}

// Función para asignar paquetes aleatorios a usuarios
async function assignRandomPackages(users: any[]) {
    const packages = await prisma.package.findMany();

    await Promise.all(
        users.map(async (user) => {
            // 70% de probabilidad de que un usuario tenga al menos un paquete
            if (Math.random() > 0.3) {
                const numPackages = Math.floor(Math.random() * 3) + 1; // 1-3 paquetes

                for (let i = 0; i < numPackages; i++) {
                    const randomPackage = packages[Math.floor(Math.random() * packages.length)];

                    await prisma.packagePurchase.create({
                        data: {
                            user: { connect: { id: user.id } },
                            package: { connect: { id: randomPackage.id } },
                            hours: randomPackage.hours,
                            remaining: randomPackage.hours,
                            price: randomPackage.price
                        }
                    });

                    // Actualizar horas disponibles del usuario
                    await prisma.user.update({
                        where: { id: user.id },
                        data: {
                            availableHours: { increment: randomPackage.hours }
                        }
                    });
                }
            }
        })
    );
}

// Función para crear historial de progreso de usuarios
async function createUserProgressHistory(users: any[]) {
    const ranges = await prisma.range.findMany({ orderBy: { id: 'asc' } });

    await Promise.all(
        users.map(async (user) => {
            const isAdmin = user.isAdmin;
            // Admin pasa por todos los rangos, otros usuarios solo algunos
            const ranksToAssign = isAdmin ? ranges.length : Math.min(ranges.length, 3 + Math.floor(Math.random() * 5));

            // Fecha base para el progreso
            const baseDate = isAdmin
                ? new Date(Date.now() - 10 * 365 * 24 * 60 * 60 * 1000) // 10 años atrás para admin
                : new Date(Date.now() - 2 * 365 * 24 * 60 * 60 * 1000); // 2 años atrás para otros

            // Tiempo promedio por rango
            const timePerRank = isAdmin
                ? 3 * 30 * 24 * 60 * 60 * 1000 // 3 meses para admin
                : 6 * 30 * 24 * 60 * 60 * 1000; // 6 meses para otros

            for (let i = 0; i < ranksToAssign; i++) {
                const startDate = new Date(baseDate.getTime() + i * timePerRank);
                const endDate = i < ranksToAssign - 1
                    ? new Date(startDate.getTime() + timePerRank)
                    : null;

                // Crear entrada en el historial
                await prisma.historyRange.create({
                    data: {
                        user: { connect: { id: user.id } },
                        range: { connect: { id: ranges[i].id } },
                        createdAt: startDate,
                        finishedAt: endDate
                    }
                });

                // Actualizar rango actual del usuario
                await prisma.user.update({
                    where: { id: user.id },
                    data: { currentRangeId: ranges[i].id }
                });

                // Crear registro de horas para este rango
                const practiceHours = isAdmin
                    ? ranges[i].minHours + Math.floor(Math.random() * 50) // Admin cumple requisitos
                    : Math.min(ranges[i].minHours, 10 + Math.floor(Math.random() * 90)); // Otros usuarios

                await prisma.hoursRange.create({
                    data: {
                        user: { connect: { id: user.id } },
                        range: { connect: { id: ranges[i].id } },
                        hours: practiceHours
                    }
                });
            }
        })
    );
}

// Función para crear horarios de clases
async function createClassSchedules() {
    const ranges = await prisma.range.findMany();
    const today = new Date();

    const createdSchedules = await Promise.all(
        ranges.map(async (range, index) => {
            // Crear 3 horarios por rango en diferentes fechas
            return await Promise.all(
                [0, 7, 14].map(async (daysAfter) => {
                    const classDate = new Date(today);
                    classDate.setDate(today.getDate() + daysAfter + index);

                    return await prisma.schedule.create({
                        data: {
                            range: { connect: { id: range.id } },
                            date: classDate,
                            startTime: `${17 + (index % 3)}:00`, // Variar horarios
                            endTime: `${18 + (index % 3)}:00`,
                            isActive: true
                        }
                    });
                })
            );
        })
    ).then(arr => arr.flat());

    return createdSchedules;
}

// Función para crear asistencias a clases
async function createClassAttendances(schedules: any[]) {
    await Promise.all(
        schedules.map(async (schedule) => {
            // Seleccionar usuarios cuyo rango actual coincida con el del horario
            const rangeUsers = await prisma.user.findMany({
                where: { currentRangeId: schedule.rangeId }
            });

            await Promise.all(
                rangeUsers.map(async (user) => {
                    const willAttend = Math.random() > 0.3; // 70% de probabilidad de asistir

                    await prisma.attendance.create({
                        data: {
                            user: { connect: { id: user.id } },
                            schedule: { connect: { id: schedule.id } },
                            attended: willAttend
                        }
                    });

                    // Si asiste, descontar horas (esto activaría el trigger)
                    if (willAttend) {
                        const duration = calculateClassDuration(schedule.startTime, schedule.endTime);

                        // Actualizar horas disponibles (el trigger hará el resto)
                        await prisma.user.update({
                            where: { id: user.id },
                            data: { availableHours: { decrement: duration } }
                        });
                    }
                })
            );
        })
    );
}

// Función para calcular duración de clase en horas
function calculateClassDuration(startTime: string, endTime: string): number {
    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);
    return (endHour - startHour) + (endMin - startMin) / 60;
}

// Función para crear procedimientos almacenados y triggers
async function createDatabaseProcedures() {
    // Procedimiento para promover usuario
    // No tiene trigger, solo creamos la función
    await prisma.$executeRaw`
    DROP FUNCTION IF EXISTS promote_user(TEXT);
    `;

    await prisma.$executeRaw`
    CREATE OR REPLACE FUNCTION promote_user(user_id TEXT) 
    RETURNS VOID AS $$
    DECLARE
        current_range_id INT;
        current_hours INT;
        next_range RECORD;
    BEGIN
        -- Obtener rango actual y horas acumuladas
        SELECT "currentRangeId", "hours" 
        INTO current_range_id, current_hours
        FROM "User" u
        JOIN "HoursRange" hr ON u.id = hr."userId" AND u."currentRangeId" = hr."rangeId"
        WHERE u.id = user_id;

        -- Verificar si el usuario tiene suficientes horas
        IF current_hours < (SELECT "minHours" FROM "Range" WHERE id = current_range_id) THEN
            RAISE EXCEPTION 'El usuario no tiene suficientes horas para ascender.';
        END IF;

        -- Obtener el siguiente rango
        SELECT id, "minHours" INTO next_range
        FROM "Range"
        WHERE id > current_range_id
        ORDER BY id ASC
        LIMIT 1;

        IF next_range.id IS NULL THEN
            RAISE EXCEPTION 'No hay un rango superior disponible.';
        END IF;

        -- Actualizar rango del usuario
        UPDATE "User"
        SET "currentRangeId" = next_range.id
        WHERE id = user_id;

        -- Registrar en el historial
        UPDATE "HistoryRange"
        SET "finishedAt" = NOW()
        WHERE "userId" = user_id AND "rangeId" = current_range_id AND "finishedAt" IS NULL;

        INSERT INTO "HistoryRange" ("userId", "rangeId", "createdAt")
        VALUES (user_id, next_range.id, NOW());
    END;
    $$ LANGUAGE plpgsql;
    `;

    // Trigger para sumar horas al comprar paquete
    await prisma.$executeRaw`
    DROP TRIGGER IF EXISTS trigger_add_package_hours ON "PackagePurchase";
    `;

    await prisma.$executeRaw`
    DROP FUNCTION IF EXISTS add_package_hours();
    `;

    await prisma.$executeRaw`
    CREATE OR REPLACE FUNCTION add_package_hours()
    RETURNS TRIGGER AS $$
    BEGIN
      -- Sumar horas al total disponible del usuario
      UPDATE "User"
      SET "availableHours" = "availableHours" + NEW.hours
      WHERE id = NEW."userId";
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
    `;

    await prisma.$executeRaw`
    CREATE TRIGGER trigger_add_package_hours
    AFTER INSERT ON "PackagePurchase"
    FOR EACH ROW
    EXECUTE FUNCTION add_package_hours();
    `;

    // Trigger para descontar horas al marcar asistencia
    await prisma.$executeRaw`
    DROP TRIGGER IF EXISTS trigger_deduct_attendance_hours_insert ON "Attendance";
    `;

    await prisma.$executeRaw`
    DROP TRIGGER IF EXISTS trigger_deduct_attendance_hours_update ON "Attendance";
    `;

    await prisma.$executeRaw`
    DROP FUNCTION IF EXISTS deduct_attendance_hours();
    `;

    await prisma.$executeRaw`
    CREATE OR REPLACE FUNCTION deduct_attendance_hours()
    RETURNS TRIGGER AS $$
    DECLARE
      class_duration INT;
    BEGIN
      -- Obtener duración de la clase en horas
      SELECT EXTRACT(HOUR FROM (s."endTime"::time - s."startTime"::time)) INTO class_duration
      FROM "Schedule" s
      WHERE s.id = NEW."scheduleId";
      
      -- Buscar paquetes con horas disponibles (FIFO)
      WITH applicable_packages AS (
        SELECT id, remaining
        FROM "PackagePurchase"
        WHERE "userId" = NEW."userId" AND remaining > 0
        ORDER BY "createdAt" ASC
        FOR UPDATE
      )
      UPDATE "PackagePurchase" pp
      SET remaining = pp.remaining - class_duration
      FROM applicable_packages ap
      WHERE pp.id = ap.id AND pp.remaining >= class_duration;
      
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
    `;

    await prisma.$executeRaw`
    CREATE TRIGGER trigger_deduct_attendance_hours_insert
    AFTER INSERT ON "Attendance"
    FOR EACH ROW
    WHEN (NEW."attended" = true)
    EXECUTE FUNCTION deduct_attendance_hours();
    `;

    await prisma.$executeRaw`
    CREATE TRIGGER trigger_deduct_attendance_hours_update
    AFTER UPDATE OF "attended" ON "Attendance"
    FOR EACH ROW
    WHEN (NEW."attended" = true AND OLD."attended" = false)
    EXECUTE FUNCTION deduct_attendance_hours();
    `;

    // Trigger para crear historial al registrar usuario
    await prisma.$executeRaw`
    DROP TRIGGER IF EXISTS trigger_create_user_history ON "User";
    `;

    await prisma.$executeRaw`
    DROP FUNCTION IF EXISTS create_user_history();
    `;

    await prisma.$executeRaw`
    CREATE OR REPLACE FUNCTION create_user_history()
    RETURNS TRIGGER AS $$
    BEGIN
      INSERT INTO "HistoryRange" ("userId", "rangeId", "createdAt")
      VALUES (NEW.id, NEW."currentRangeId", NOW());
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
    `;

    await prisma.$executeRaw`
    CREATE TRIGGER trigger_create_user_history
    AFTER INSERT ON "User"
    FOR EACH ROW
    EXECUTE FUNCTION create_user_history();
    `;
}

// Ejecutar seeding
(async () => {
    if (process.env.NODE_ENV === 'production') return;

    try {
        await main();
        await prisma.$disconnect();
    } catch (error) {
        console.error('Error durante el seeding:', error);
        await prisma.$disconnect();
        process.exit(1);
    }
})();