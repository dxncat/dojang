import { titleFont } from "@/config/fonts";
import Image from "next/image";

export function Bento() {
    return (
        <section className="flex justify-center items-center h-screen p-4">
            <section className="grid grid-cols-6 grid-rows-6 gap-4 w-full h-full">
                <article className="col-span-4 row-span-3 overflow-hidden rounded-xl">
                    <Image
                        src="/bento.jpg"
                        alt="Imagen demostrativa de niña entrenando."
                        width={1280}
                        height={540}
                    />
                </article>

                <article
                    className="flex items-center col-span-2 row-span-3 col-start-1 row-start-4 overflow-hidden rounded-xl text-center "
                >
                    <div className="w-full h-full p-4 text-center">
                        <h1 className="text-4xl mt-4">Nuestros horarios:</h1>
                        <ul className="text-lg my-4">
                            <li className="flex items-center justify-between w-full h-full mb-4">
                                <span className="bg-blue-500 p-2 rounded-xs">
                                    Lunes a viernes:
                                </span>
                                6:00am - 8:00pm
                            </li>
                            <li className="flex items-center justify-between w-full h-full mb-4">
                                <span className="bg-blue-500 p-2 rounded-xs">
                                    Sábados:
                                </span>
                                8:00am - 12:00pm
                            </li>
                            <li className="flex items-center justify-between w-full h-full">
                                <span className="bg-blue-500 p-2 rounded-xs">
                                    Domingos:
                                </span>
                                10:00am - 12:00pm
                            </li>
                        </ul>
                    </div>
                </article>


                <article
                    className="flex items-center col-span-2 row-span-3 col-start-3 row-start-4 overflow-hidden rounded-xl"
                >
                    <Image
                        src="/map.webp"
                        alt="Ubicación de la academia Dojang."
                        width={1100}
                        height={1100}
                    />
                </article>

                <article
                    className="col-span-2 row-span-2 col-start-5 row-start-1 rounded-xl p-4"
                >
                    <h1 className="text-3xl font-bold text-pretty">
                        Ya son más de 400 personas las que han confiado en nosotros para aprender Taekwondo. ¿Qué esperas para unirte a la familia Dojang?
                    </h1>
                </article>

                <article
                    className="flex items-center col-span-2 row-span-2 col-start-5 row-start-3 rounded-xl overflow-hidden"
                >
                    <Image src="/family.webp" alt="Familia dojang." width={583} height={425} />
                </article>

                <article
                    className="col-span-2 row-span-2 col-start-5 row-start-5 text-center p-8 hover:bg-red-500 rounded-xl cursor-pointer transition-all"
                >
                    <p className={`-rotate-3 ${titleFont.className} mt-8 text-3xl`}>
                        !Empieza en el mundo de las hartes marciales con nosotros por solo $120.000/m¡
                    </p>
                </article>
            </section>
        </section >
    );
}