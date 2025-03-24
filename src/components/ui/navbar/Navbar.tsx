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

            <Link href={'/home/perfil'} className="flex items-center space-x-2">
                <User />
                Perfil
            </Link>
        </div>
    );
}