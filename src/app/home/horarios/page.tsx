import { getSchedulesByRangeId } from "@/actions";
import { auth } from "@/auth.config";

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

    console.log({ schedules });

    return (
        <div className="min-h-screen">
            <h1>
                {
                    schedules.map(schedule => (
                        <div key={schedule.id}>
                            <p>{schedule.horaInicio} - {schedule.horaFin}</p>
                        </div>
                    ))
                }
            </h1>
        </div>
    );
}