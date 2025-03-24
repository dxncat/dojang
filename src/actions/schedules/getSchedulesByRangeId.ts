'use server';

import prisma from "@/lib/prisma";

interface Props {
    rangeId: number
}

export const getSchedulesByRangeId = async ({ rangeId }: Props) => {
    try {
        const schedules = await prisma.horario.findMany({
            where: {
                rangoId: rangeId
            }
        })

        return schedules
    } catch (error) {
        console.error(error);
        throw new Error('No se pudo obtener los horarios');
    }
}