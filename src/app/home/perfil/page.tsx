import { getNewsByUserid, getRangeHistoryByUser, getUserHours } from "@/actions";
import { auth } from "@/auth.config";
import { HistoryRange, ProfileCard } from "@/components";

export default async function ProfilePage() {

    const session = await auth()

    const history = await getRangeHistoryByUser({ userId: session?.user.id || '' })

    return (
        <div className="min-h-screen container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {session?.user && <ProfileCard user={session.user} />}
                <HistoryRange history={history} />
            </div>
        </div>
    )
}