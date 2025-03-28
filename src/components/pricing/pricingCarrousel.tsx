"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useMobile } from "@/hooks/use-mobile"
import { Pricing } from "@/interfaces"
import { PricingCard } from "./pricingCard"

interface Props {
    packages: Pricing[]
}

export function TaekwondoPackagesCarousel({ packages }: Props) {
    const isMobile = useMobile()

    const handleSelectPackage = (id: number) => {
        const selectedPackage = packages.find((pkg) => pkg.id === id)
        console.log(selectedPackage)
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros Paquetes de Entrenamiento</h2>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    slidesToScroll: isMobile ? 1 : 3,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {packages.map((pkg) => (
                        <CarouselItem key={pkg.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="h-full">
                                <PricingCard pkg={pkg} onSelect={handleSelectPackage} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center mt-8 gap-4">
                    <CarouselPrevious className="relative static transform-none" />
                    <CarouselNext className="relative static transform-none" />
                </div>
            </Carousel>
        </div>
    )
}

