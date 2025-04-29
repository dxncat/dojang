import { getRangeHistoryByUser } from "@/actions";
import { auth } from "@/auth.config";
import { HistoryRange, ProfileCard } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {

    const session = await auth()

    const history = await getRangeHistoryByUser({ userId: session?.user.id || '' })

    if (!session?.user) {
        redirect('/auth/login')
    }

    return (
        <div className="container mx-auto py-4 sm:py-6 md:py-8 px-2 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {session?.user && <ProfileCard user={session.user} />}
                {
                    history.length > 0 ? (
                        <div className="col-span-1 md:col-span-2">
                            <h2 className="text-2xl font-bold mb-4">Historial de Rangos</h2>
                            <HistoryRange history={history} />
                        </div>
                    ) : (
                        <div className="col-span-1 md:col-span-2">
                            <h2 className="text-2xl font-bold mb-4">No hay historial de rangos</h2>
                        </div>
                    )
                }
            </div>
        </div>
    )
}