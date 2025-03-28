import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {
    // 1. Eliminar datos existentes
    await prisma.asistencia.deleteMany();
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

    // 7. Crear horarios con fechas específicas
    const hoy = new Date();
    const horariosCreados = await Promise.all(
        ranges.map(async (range, index) => {
            // Crear 3 horarios por rango en diferentes fechas
            return await Promise.all(
                [0, 7, 14].map(async (diasDespues) => {
                    const fechaClase = new Date(hoy);
                    fechaClase.setDate(hoy.getDate() + diasDespues + index);

                    return await prisma.horario.create({
                        data: {
                            rango: { connect: { id: range.id } },
                            fecha: fechaClase,
                            horaInicio: `${17 + (index % 3)}:00`, // Variar horarios
                            horaFin: `${18 + (index % 3)}:00`,
                            status: true
                        }
                    });
                })
            );
        })
    ).then(arr => arr.flat());

    // 8. Crear asistencias directamente a horarios
    await Promise.all(
        horariosCreados.map(async (horario) => {
            // Seleccionar usuarios cuyo rangoActual coincida con el del horario
            const usuariosDelRango = await prisma.user.findMany({
                where: { rangoActualId: horario.rangoId }
            });

            await Promise.all(
                usuariosDelRango.map(async (user) => {
                    await prisma.asistencia.create({
                        data: {
                            alumno: { connect: { id: user.id } },
                            horario: { connect: { id: horario.id } },
                            asistio: Math.random() > 0.3 // 70% de probabilidad de asistir
                        }
                    });
                })
            );
        })
    );

    console.log('Seed ejecutado correctamente');
}

(() => {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();