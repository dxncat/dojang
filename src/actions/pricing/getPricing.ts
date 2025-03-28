'use server';

import prisma from "@/lib/prisma";

export const getPricing = async () => {
    try {
        const pricing = await prisma.package.findMany({})
        return pricing
    } catch (error) {
        console.error(error);
        throw new Error('No se pudo obtener los precios');
    }
}