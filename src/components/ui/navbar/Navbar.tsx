import { logout } from "@/actions";
import { titleFont } from "@/config/fonts";
import { User } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {

    return (
        <div className="flex items-center justify-between bg-gray-800 p-4">
            <div>
                <Link href="/">
                    <h1 className={`${titleFont.className} text-3xl`}>DOJANG</h1>
                </Link>
            </div>

            <div>
                <Link href="/home/horarios">
                    <button className="text-xl cursor-pointer">Horarios</button>
                </Link>
            </div>

            <div className="flex items-center space-x-4">
                <Link href={'/home/perfil'} className="flex items-center space-x-2">
                    <User />
                    <span className="text-xl">Perfil</span>
                </Link>

                <button className="ml-3 text-xl cursor-pointer" onClick={logout}>
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
}