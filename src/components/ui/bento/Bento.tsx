import { titleFont } from "@/config/fonts"
import Image from "next/image"

export const Bento = () => {
    return (
        <section className="flex justify-center items-center min-h-screen p-2 sm:p-4 py-10">
            <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 w-full max-w-7xl">
                <article className="col-span-1 md:col-span-3 lg:col-span-4 overflow-hidden rounded-xl h-[300px] md:h-[400px] relative">
                    <Image
                        src="/bento.webp"
                        alt="Imagen demostrativa de niña entrenando."
                        fill
                        className="object-cover"
                        priority
                    />
                </article>

                <article className="col-span-1 md:col-span-1 lg:col-span-2 rounded-xl p-4 bg-penn-red-400 flex items-center">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pretty">
                        Ya son más de 400 personas las que han confiado en nosotros para aprender Taekwondo. ¿Qué esperas para
                        unirte a la familia Dojang?
                    </h1>
                </article>

                <article className="col-span-1 md:col-span-1 lg:col-span-2 rounded-xl overflow-hidden h-[250px] md:h-[280px] relative">
                    <Image src="/map.webp" alt="Ubicación de la academia Dojang." fill className="object-cover" />
                </article>

                <article className="col-span-1 md:col-span-2 lg:col-span-2 overflow-hidden rounded-xl text-center bg-yinmn-blue">
                    <div className="w-full h-full p-3 sm:p-4 text-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-2">Nuestros horarios:</h1>
                        <ul className="text-sm sm:text-base lg:text-lg my-2 sm:my-4">
                            <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-2 sm:mb-4">
                                <span className="bg-penn-red-400 p-1 sm:p-2 rounded-md mb-1 sm:mb-0 inline-block">Lunes a viernes:</span>
                                <span>6:00am - 8:00pm</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-2 sm:mb-4">
                                <span className="bg-penn-red-400 p-1 sm:p-2 rounded-md mb-1 sm:mb-0 inline-block">Sábados:</span>
                                <span>8:00am - 12:00pm</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                                <span className="bg-penn-red-400 p-1 sm:p-2 rounded-md mb-1 sm:mb-0 inline-block">Domingos:</span>
                                <span>10:00am - 12:00pm</span>
                            </li>
                        </ul>
                    </div>
                </article>

                <article className="col-span-1 md:col-span-2 lg:col-span-2 overflow-hidden rounded-xl h-[250px] md:h-[280px] relative">
                    <Image src="/family.webp" alt="Familia dojang." fill className="object-cover" />
                </article>
            </section>
        </section>
    )
}

