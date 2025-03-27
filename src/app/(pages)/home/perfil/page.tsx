import { getNewsByUserid, getRangeHistoryByUser, getUserHours } from "@/actions";
import { auth } from "@/auth.config";
import { HistoryRange, ProfileCard } from "@/components";

export default async function ProfilePage() {

    const session = await auth()

    const history = await getRangeHistoryByUser({ userId: session?.user.id || '' })

    return (
        <div className="container mx-auto py-4 sm:py-6 md:py-8 px-2 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {session?.user && <ProfileCard user={session.user} />}
                <HistoryRange history={history} />
            </div>
        </div>
    )
}