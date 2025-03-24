'use server';

import prisma from "@/lib/prisma";

interface Props {
    userId: string,
}

export const getRangeHistoryByUser = async ({ userId }: Props) => {
    try {
        const rangesHistory = await prisma.historyRange.findMany({
            where: {
                userId: userId
            },
            orderBy: [
                {
                    range: {
                        createdAt: 'desc'
                    }
                }
            ],
            include: {
                range: true
            }
        })
        return rangesHistory
    } catch (error) {
        console.error(error);
        throw new Error('No se pudo obtener los horarios');
    }
}