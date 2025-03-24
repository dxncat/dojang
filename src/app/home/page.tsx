import { getNews } from "@/actions";
import { auth } from "@/auth.config";
import { NewsComponent } from "@/components";
import { titleFont } from "@/config/fonts";

export default async function () {

    const news = await getNews();

    const session = await auth()

    return (
        <div className="min-h-screen p-4">
            <div className="flex justify-between">
                <h1
                    className={`${titleFont.className} antialiased text-4xl`}
                >
                    Ultimas Noticias
                </h1>
                {

                }
            </div>
            <NewsComponent news={news} />
        </div>
    );
}