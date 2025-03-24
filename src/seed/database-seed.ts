import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {
    // 1. Eliminar datos existentes
    await prisma.asistencia.deleteMany();
    await prisma.clase.deleteMany();
    await prisma.horario.deleteMany();
    await prisma.historyRange.deleteMany();
    await prisma.hoursRange.deleteMany();
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();
    await prisma.range.deleteMany();

    // 2. Obtener datos iniciales
    const { users, posts, ranges } = initialData;

    // 3. Insertar rangos
    await prisma.range.createMany({
        data: ranges
    });

    // 4. Insertar usuarios
    const usuariosCreados = await Promise.all(
        users.map(async (user) => {
            return await prisma.user.create({
                data: {
                    ...user,
                    rangoActualId: 1 // Todos comienzan en el rango 1
                }
            });
        })
    );

    // 5. Encontrar usuario administrador
    const adminUser = usuariosCreados.find(user => user.isAdmin);
    if (!adminUser) {
        throw new Error('No se encontró el usuario administrador');
    }

    // 6. Insertar posts
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

    // 7. Crear historial de rangos para TODOS los usuarios
    await Promise.all(
        usuariosCreados.map(async (user) => {
            const esAdministrador = user.isAdmin;
            // El admin pasa por todos los rangos (1-19), otros usuarios solo algunos
            const rangosParaAsignar = esAdministrador ? ranges.length : Math.min(ranges.length, 3 + Math.floor(Math.random() * 5));

            // Fecha base para el progreso (hace 10 años para admin)
            const fechaBase = esAdministrador
                ? new Date(Date.now() - 10 * 365 * 24 * 60 * 60 * 1000)
                : new Date(Date.now() - 2 * 365 * 24 * 60 * 60 * 1000);

            // Tiempo promedio por rango (3 meses para admin, 6 meses para otros)
            const tiempoPorRango = esAdministrador
                ? 3 * 30 * 24 * 60 * 60 * 1000
                : 6 * 30 * 24 * 60 * 60 * 1000;

            for (let i = 0; i < rangosParaAsignar; i++) {
                const fechaInicio = new Date(fechaBase.getTime() + i * tiempoPorRango);
                const fechaFin = i < rangosParaAsignar - 1
                    ? new Date(fechaInicio.getTime() + tiempoPorRango)
                    : null;

                await prisma.historyRange.create({
                    data: {
                        user: { connect: { id: user.id } },
                        range: { connect: { id: ranges[i].id } },
                        createdAt: fechaInicio,
                        finishedAt: fechaFin
                    }
                });

                // Actualizar rango actual del usuario
                await prisma.user.update({
                    where: { id: user.id },
                    data: { rangoActualId: ranges[i].id }
                });

                // Crear horas de práctica para este rango
                const horasPractica = esAdministrador
                    ? 100 + Math.floor(Math.random() * 50) // Admin tiene más horas
                    : 10 + Math.floor(Math.random() * 40); // Otros usuarios menos horas

                await prisma.hoursRange.create({
                    data: {
                        user: { connect: { id: user.id } },
                        range: { connect: { id: ranges[i].id } },
                        hours: horasPractica
                    }
                });
            }
        })
    );

    // 8. Crear clases de ejemplo
    const clasesEjemplo = await Promise.all(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(async (_, i) => {
            const rangeId = Math.floor(Math.random() * ranges.length) + 1;
            return await prisma.clase.create({
                data: {
                    fecha: new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000),
                    duracion: 60,
                    rango: { connect: { id: rangeId } }
                }
            });
        })
    );

    // 9. Crear asistencias
    await Promise.all(
        clasesEjemplo.map(async (clase) => {
            const usuariosAsistentes = usuariosCreados.filter(() => Math.random() > 0.3);

            await Promise.all(
                usuariosAsistentes.map(async (user) => {
                    await prisma.asistencia.create({
                        data: {
                            alumno: { connect: { id: user.id } },
                            clase: { connect: { id: clase.id } },
                            asistio: Math.random() > 0.2
                        }
                    });
                })
            );
        })
    );

    // 10. Crear horarios
    const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    await Promise.all(
        ranges.map(async (range, index) => {
            const cantidadHorarios = Math.min(3, Math.floor(index / 5) + 1);

            for (let i = 0; i < cantidadHorarios; i++) {
                await prisma.horario.create({
                    data: {
                        rango: { connect: { id: range.id } },
                        diaSemana: diasSemana[(index + i) % diasSemana.length],
                        horaInicio: `${17 + i}:00`,
                        horaFin: `${18 + i}:00`,
                        status: true
                    }
                });
            }
        })
    );

    console.log('Seed ejecutado correctamente');
}

(() => {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();