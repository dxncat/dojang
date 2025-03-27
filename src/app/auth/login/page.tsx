import Link from "next/link";
import { LoginForm } from "./components/LoginForm";
import { titleFont } from "@/config/fonts";

export default function () {
    return (
        <div className='bg-gray-700 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
            <div className="w-3/5 p-5">
                <div className={`text-left font-bold ${titleFont.className}`}>
                    DOJANG
                </div>
                <div className="py-10">
                    <h2 className="text-3xl font-bold mb-2">Inicia Sesión</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2" />
                    <LoginForm />
                </div>
            </div>
            <div className="w-2/5 rounded-tr-2xl rounded-br-2xl bg-gray-800 py-36 px-12">
                <h2 className="text-3xl font-bold mb-2">Aun no tienes una cuenta?</h2>
                <div className="border-2 w-10 border-white inline-block mb-2" />
                <p className="mb-10">Confía en nosotros para adentrarte en el mundo del Taekwondo</p>
                <Link href={"/register"} className="border-2 border-white rounded-lg px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-800 transition-all">
                    Regístrate
                </Link>
            </div>
        </div>
    );
}