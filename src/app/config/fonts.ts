import { Bebas_Neue, Roboto } from "next/font/google"

export const titleFont = Bebas_Neue({
    subsets: ["latin"],
    weight: ['400']
})

export const bodyFont = Roboto({
    subsets: ["latin"],
    weight: ['500', '700']
})