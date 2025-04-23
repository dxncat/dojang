import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { titleFont } from "@/config/fonts"

export const Footer = () => {
    return (
        <footer className="py-12 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 w-full mx-auto">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <h3 className={`mb-4 text-lg font-bold text-white ${titleFont.className}`}>DOJANG</h3>
                        <p className="mb-4">
                            Formando campeones en el deporte y en la vida a través de la disciplina y el respeto.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-white">
                                <Facebook size={20} />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="hover:text-white">
                                <Instagram size={20} />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="hover:text-white">
                                <Youtube size={20} />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">Horarios</h3>
                        <ul className="space-y-2">
                            <li>Lunes - Viernes: 6:00 - 20:00</li>
                            <li>Sábados: 8:00 - 14:00</li>
                            <li>Domingos: Cerrado</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">Contacto</h3>
                        <ul className="space-y-2">
                            <li>Calle 52 #13-65, Bogota - Colombia</li>
                            <li>teléfono: (123) 456-7890</li>
                            <li>Email: <a href="mailto:info@dojang.com" target="_blank">info@dojang.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 mt-8 text-sm text-center border-t border-gray-800">
                    <p>© {new Date().getFullYear()} DOJANG. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

