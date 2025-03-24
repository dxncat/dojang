import { getNewsByUserid, getRangeHistoryByUser, getSchedulesByRangeId, getUserHours } from "@/actions";
import { auth } from "@/auth.config";
import { NewsComponent } from "@/components";
import { titleFont } from "@/config/fonts";
import Link from "next/link";

export default async function ProfilePage() {

    const session = await auth()

    const news = await getNewsByUserid({ authorId: session?.user.id || '' })

    const hours = await getUserHours({ userId: session?.user.id || '', rangeId: session?.user.rangoActual.id || 0 })

    const history = await getRangeHistoryByUser({ userId: session?.user.id || '' })

    console.log({ hours })
    console.log({ history })

    return (
        <div className="min-h-screen p-4">
            <div className="flex items-center space-x-2">
                <h1 className={`${titleFont.className} antialiased text-5xl`}>
                    Buen dia {session?.user.name}
                </h1>
                {
                    session?.user.isAdmin && (
                        <span className="text-xl font-medium me-2 px-2.5 py-0.5 rounded-sm bg-green-900 text-green-300">Admin</span>
                    )
                }
            </div>

            <hr className="my-4" />

            <h2 className="mt-6 text-3xl">Tu información</h2>

            <div className="flex items-center justify-between space-x-2">
                <div className="flex flex-col space-y-4">
                    <p>Correo electrónico: {session?.user.email}</p>
                    <p>Rango: {session?.user.rangoActual.nombre} - {session?.user.rangoActual.description}</p>
                    <p>miembro desde: {session?.user.createdAt ? new Date(session.user.createdAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Fecha no disponible'}</p>
                    <p>Horas acreditadas: {hours.hours} / 100 - !Animo!, ya solo te faltan {100 - hours.hours} para poder aumentar de rango</p>
                </div>
                <div>
                    <img src={session?.user.image} alt="Estudiante de taekwondo" className="rounded-full" width={300} height={300} />
                </div>
            </div>

            <hr className="my-4" />

            <h2 className="mt-6 text-3xl">Noticias publicadas</h2>

            {
                news.length > 0 ? (
                    <NewsComponent news={news} />
                ) : (
                    <div className="flex items-center justify-center space-x-6">
                        <p className="text-2xl">No has publicado noticias</p>
                        <Link href={'#'} className="btn-primary">
                            Publicar noticia
                        </Link>
                    </div>
                )
            }

        </div>
    )
}