import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { Menu } from "./Menu";

export const Navbar = () => {
    return (
        <nav className="flex p-2 justify-between items-center w-full bg-gray-800 ">

            {/* Logo */}
            <div>
                <Link href='/'>
                    <span className={`${titleFont.className} font-bold antialiased cursor-pointer text-2xl`}>
                        DOJANG
                    </span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:block space-x-4">
                <Link className="hover:text-red-500 transition-all" href="/nosotros">
                    Nosotros
                </Link>

                <Link className="hover:text-red-500 transition-all" href="/clases">
                    Precios
                </Link>

                <Link className="hover:text-red-500 transition-all" href="/contacto">
                    Contacto
                </Link>
            </div>

            {/* Icons */}
            <Menu />

        </nav>
    );
};