import { getPricing } from "@/actions";
import { PricingCarousel } from "@/components/pricing/pricingCarrousel";
import { titleFont } from "@/config/fonts";

export default async function NamePage() {

    const pricing = (await getPricing()).map((item) => ({
        ...item,
        description: item.description ?? "",
    }));

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <h2 className={`${titleFont.className} antialiased text-3xl font-bold text-center mb-8`}>Nuestros Paquetes de Entrenamiento</h2>
            <PricingCarousel packages={pricing} />
        </div>
    );
}