import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar, Provider, SideBar } from "@/components";
import { bodyFont } from "@/config/fonts";
import { ThemeProvider } from "@/providers/theme-provider";

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

    return (
        <html lang="es">
            <body
                className={`${bodyFont.className} antialiased bg-gradient-to-br from-background to-muted`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Provider >
                        <Navbar />
                        <SideBar />
                        {children}
                        <Footer />
                    </Provider>
                </ThemeProvider>
            </body>
        </html>
    );
}
