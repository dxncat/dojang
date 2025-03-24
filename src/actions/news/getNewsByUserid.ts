'use server';

import prisma from "@/lib/prisma";

interface Props {
    authorId: string
}

export const getNewsByUserid = async ({ authorId }: Props) => {
    try {
        const news = await prisma.post.findMany({
            where: {
                published: true,
                authorId: authorId
            },
            orderBy: {
                createdAt: 'desc'
            },
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