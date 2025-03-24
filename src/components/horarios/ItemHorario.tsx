import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Schedule } from "@/interfaces"
import { format } from "date-fns"
import { es } from "date-fns/locale"

interface ScheduleItemProps {
    schedule: Schedule
    showDate?: boolean
}

export function ScheduleItem({ schedule, showDate = true }: ScheduleItemProps) {
    const scheduleDate = new Date(schedule.fecha)

    return (
        <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Horario #{schedule.id}</p>
                {showDate && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Calendar className="h-3 w-3" />
                        {format(scheduleDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}
                    </p>
                )}
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {schedule.horaInicio} - {schedule.horaFin}
                </p>
            </div>
            <Badge variant={schedule.status ? "default" : "outline"}>{schedule.status ? "Activo" : "Inactivo"}</Badge>
        </div>
    )
}

