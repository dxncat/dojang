import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { bodyFont } from "@/config/fonts";
import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: {
        template: '%s - Dojang',
        default: 'Home - Dojang'
    },
    description: 'Una academia de artes marciales en la que podrás aprender y practicar Taekwondo nunca fue tan fácil. ¡Ven a Dojang!'
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await auth();
    if (!session?.user) redirect('/');

    return (
        <html lang="es">
            <body
                className={`${bodyFont.className} antialiased  bg-gray-700 text-white`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
