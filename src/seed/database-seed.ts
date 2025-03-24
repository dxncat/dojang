import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {

    // 1. borrar datos previos
    await prisma.historyRange.deleteMany();
    await prisma.hoursRange.deleteMany();
    await prisma.asistencia.deleteMany();
    await prisma.clase.deleteMany();
    await prisma.horario.deleteMany();
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();
    await prisma.range.deleteMany();

    // 2.traer datos del seed
    const { users, posts, ranges } = initialData;

    // 3. insertar datos en la base de datos

    // rangos
    await prisma.range.createMany({
        data: ranges
    })

    // usuarios
    await prisma.user.createMany({
        data: users
    })

    //posts
    // traer los uuid de los usuarios
    const adminUser = await prisma.user.findFirst({
        where: { isAdmin: true }
    });

    if (!adminUser) {
        throw new Error('Admin user not found');
    }

    // mapear el uuid del admin
    console.log(adminUser.id);


    // insertar los posts
    posts.forEach(async (post) => {
        await prisma.post.create({
            data: {
                ...post,
                authorId: adminUser.id
            }
        })
    })

    console.log('Datos sembrados correctamente');
}

(() => {

    if (process.env.NODE_ENV === 'production') return;

    main();
})();