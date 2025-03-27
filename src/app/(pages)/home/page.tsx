import { getNews } from "@/actions";
import { auth } from "@/auth.config";
import { NewsComponent } from "@/components";
import { titleFont } from "@/config/fonts";
import Link from "next/link";

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
                <div className="space-x-4">
                    {
                        session?.user.isAdmin && (
                            <Link href={'#'} className="btn-primary">
                                Crear Noticia
                            </Link>
                        )
                    }
                    <Link href={'/noticias'} className="btn-primary">
                        Ver Todas Las Noticias
                    </Link>
                </div>
            </div>
            <NewsComponent news={news} />
        </div>
    );
}