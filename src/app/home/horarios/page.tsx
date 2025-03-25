import { getSchedulesByRangeId } from "@/actions";
import { auth } from "@/auth.config";
import { ScheduleCalendar } from "@/components";
import { titleFont } from "@/config/fonts";

export default async function SchedulePage() {

    const session = await auth();

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    const schedules = await getSchedulesByRangeId({ rangeId: session.user.rangoActual.id });

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className={`${titleFont.className} antialiased text-4xl mb-13`}>Horarios para: {session.user.rangoActual.nombre}</h1>
            <ScheduleCalendar schedules={schedules} />
        </div>
    );
}