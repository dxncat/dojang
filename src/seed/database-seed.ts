import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {

    // 1. borrar datos previos
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();

    // 2.traer datos del seed
    const { users, posts } = initialData;

    // 3. insertar datos en la base de datos

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