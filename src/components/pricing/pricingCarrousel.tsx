"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useMobile } from "@/hooks/use-mobile"
import { Pricing } from "@/interfaces"
import { PricingCard } from "./pricingCard"

interface Props {
    packages: Pricing[]
}

export function PricingCarousel({ packages }: Props) {
    const isMobile = useMobile()

    const handleSelectPackage = (id: number) => {
        const selectedPackage = packages.find((pkg) => pkg.id === id)
        console.log(selectedPackage)
    }

    return (

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
                <CarouselPrevious className="relative transform-none bg-penn-red-400 text-yinmn-blue-800 hover:bg-yinmn-blue-800 hover:text-penn-red-400 border-none cursor-pointer" />
                <CarouselNext className="relative transform-none bg-penn-red-400 text-yinmn-blue-800 hover:bg-yinmn-blue-800 hover:text-penn-red-400 border-none cursor-pointer" />
            </div>
        </Carousel>
    )
}

