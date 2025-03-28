import { getPricing } from "@/actions";

export default async function NamePage() {

    const pricing = await getPricing();

    console.log(pricing);

    return (
        <div>
            <h1>Hello Page</h1>
        </div>
    );
}