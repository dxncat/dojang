import type { Metadata } from "next";
import "./globals.css";
import { bodyFont } from "@/config/fonts";

export const metadata: Metadata = {
    title: "Inicia sesión - Dojang",
    description: "Inicia sesión en Dojang y empieza tu recorrido en el taekwondo con nosotros.",
    openGraph: {
        type: "website",
        locale: "es_CO",
        url: "https://dojang.vercel.com",
        title: "Inicia sesión - Dojang",
        description: "Inicia sesión en Dojang y empieza tu recorrido en el taekwondo con nosotros.",
        images: "/hero.webp",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`flex flex-col items-center justify-center flex-1 px-20 text-center h-screen ${bodyFont.className} antialiased  bg-gray-800 text-white`}
            >
                {children}
            </body>
        </html>
    );
}
