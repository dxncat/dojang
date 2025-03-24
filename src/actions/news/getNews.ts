'use server';

import prisma from "@/lib/prisma";

export const getNews = async () => {
    try {
        const news = await prisma.post.findMany({
            where: {
                published: true
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 5,
            select: {
                id: true,
                title: true,
                content: true,
                updatedAt: true,
                author: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })

        return news
    } catch (error) {
        console.error(error);
        throw new Error('No se pudo obtener las noticias');
    }
}