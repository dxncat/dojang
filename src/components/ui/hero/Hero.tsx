import { titleFont } from "@/config/fonts";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden">

            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.webp"
                    alt="imagen ilustrativa de taekwondo"
                    className="object-cover brightness-50"
                    priority
                    width={1920}
                    height={1080}
                />
            </div>

            <div className="container mx-auto relative w-full z-10 flex flex-col items-center justify-center px-4 py-32 md:py-40 lg:py-48 text-center">
                <h1 className={`max-w-3xl text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl ${titleFont.className}`}>
                    DOJANG
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl lg:text-2xl">
                    Forja tu camino en el arte marcial coreano a través de la disciplina, el respeto y la excelencia técnica
                </p>
            </div>

        </section>
    );
}