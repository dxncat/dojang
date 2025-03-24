'use server';

import prisma from "@/lib/prisma";

interface Props {
    userId: string,
    rangeId: number
}

export const getUserHours = async ({ userId, rangeId }: Props) => {
    try {
        const hours = await prisma.hoursRange.findMany({
            where: {
                userId: userId,
                rangeId: rangeId
            }
        })
        return hours[0]
    } catch (error) {
        console.error(error);
        throw new Error('No se pudo obtener los horarios');
    }
}