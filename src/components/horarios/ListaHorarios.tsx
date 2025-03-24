import { Schedule } from "@/interfaces"
import { ScheduleItem } from "./ItemHorario"


interface ScheduleListProps {
    schedules: Schedule[]
    showEmptyMessage?: boolean
    showDates?: boolean
}

export function ScheduleList({ schedules, showEmptyMessage = false, showDates = true }: ScheduleListProps) {
    if (schedules.length === 0 && showEmptyMessage) {
        return (
            <div className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-muted-foreground">No hay horarios programados para esta fecha.</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {schedules.map((schedule) => (
                <ScheduleItem key={schedule.id} schedule={schedule} showDate={showDates} />
            ))}
        </div>
    )
}

