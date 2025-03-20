import { Jaini, Roboto } from "next/font/google"

export const titleFont = Jaini({
    subsets: ["latin"],
    weight: ['400']
})

export const bodyFont = Roboto({
    subsets: ["latin"],
    weight: ['500', '700']
})