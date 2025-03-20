import { titleFont } from "@/config/fonts";
import { User } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    return (
        <div className="flex items-center justify-between bg-gray-800 p-4">
            <div>
                <Link href="/">
                    <h1 className={`${titleFont.className} text-3xl`}>DOJANG</h1>
                </Link>
            </div>
            <div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link className="hover:text-red-500 transition-all" href="/nosotros">
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-red-500 transition-all" href="/clases">
                                Precios
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-red-500 transition-all" href="/contacto">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Link href={'/login'} className="flex items-center space-x-2">
                <User />
                Iniciar sesión
            </Link>
        </div>
    );
}