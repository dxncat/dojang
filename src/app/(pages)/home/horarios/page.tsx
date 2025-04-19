import { getSchedulesByRangeId } from "@/actions";
import { auth } from "@/auth.config";
import { ScheduleCalendar } from "@/components";
import { titleFont } from "@/config/fonts";
import { redirect } from "next/navigation";

export default async function SchedulePage() {

    const session = await auth();

    if (!session) {
        return redirect('/auth/login');
    }

    const schedules = await getSchedulesByRangeId({ rangeId: session.user.currentRange.id });

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className={`${titleFont.className} antialiased text-4xl mb-13`}>Horarios para: {session.user.currentRange.nombre}</h1>
            <ScheduleCalendar schedules={schedules} />
        </div>
    );
}