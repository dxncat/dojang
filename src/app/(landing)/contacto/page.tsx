import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components"
import { Map } from "@/components"
import { titleFont } from "@/config/fonts"

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <h1 className={`text-4xl font-bold text-center mb-8 ${titleFont.className}`}>Contacto</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-red-600">Dojang</h2>
                            <p className="text-gray-300 mb-6">
                                Estamos comprometidos con la excelencia en la enseñanza del Taekwondo. Contáctanos para más información
                                sobre nuestras clases y horarios.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-red-600 mr-3 mt-1" />
                                <div>
                                    <h3 className="font-medium">Dirección</h3>
                                    <p className="text-gray-300">Av. Principal 123, Ciudad Deportiva</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone className="h-5 w-5 text-red-600 mr-3 mt-1" />
                                <div>
                                    <h3 className="font-medium">Teléfono</h3>
                                    <p className="text-gray-300">+34 123 456 789</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail className="h-5 w-5 text-red-600 mr-3 mt-1" />
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-gray-300">info@academiataekwondo.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="h-5 w-5 text-red-600 mr-3 mt-1" />
                                <div>
                                    <h3 className="font-medium">Horario</h3>
                                    <p className="text-gray-300">Lunes a Viernes: 9:00 - 21:00</p>
                                    <p className="text-gray-300">Sábados: 10:00 - 14:00</p>
                                </div>
                            </div>
                        </div>

                        <Map />
                    </div>

                    {/* Formulario de contacto */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-red-600">Envíanos un mensaje</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

