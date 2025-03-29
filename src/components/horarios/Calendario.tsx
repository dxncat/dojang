"use client"

import { useState } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Schedule } from "@/interfaces"
import { ScheduleList } from "./ListaHorarios"

interface ScheduleCalendarProps {
    schedules: Schedule[]
}

export function ScheduleCalendar({ schedules }: ScheduleCalendarProps) {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [selectedSchedules, setSelectedSchedules] = useState<Schedule[]>(schedules)

    // Convertir las fechas de string a objetos Date
    const scheduleDates = schedules.map((schedule) => new Date(schedule.date))

    // Función para obtener los horarios de una fecha específica
    const getSchedulesForDate = (day: Date) => {
        return schedules.filter((schedule) => {
            const scheduleDate = new Date(schedule.date)
            return (
                scheduleDate.getDate() === day.getDate() &&
                scheduleDate.getMonth() === day.getMonth() &&
                scheduleDate.getFullYear() === day.getFullYear()
            )
        })
    }

    // Manejar el cambio de fecha seleccionada
    const handleSelect = (day: Date | undefined) => {
        setDate(day)
        if (day) {
            setSelectedSchedules(getSchedulesForDate(day))
        } else {
            setSelectedSchedules(schedules)
        }
    }

    return (
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Calendario de Horarios</CardTitle>
                    <CardDescription>Visualiza tus horarios programados para el mes</CardDescription>
                </CardHeader>
                <CardContent>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleSelect}
                        locale={es}
                        modifiers={{
                            booked: scheduleDates,
                        }}
                        modifiersClassNames={{
                            booked: "bg-penn-red-400 font-bold",
                        }}
                        className="rounded-md border"
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>
                        {date ? format(date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es }) : "Todos los horarios"}
                    </CardTitle>
                    <CardDescription>
                        {date
                            ? selectedSchedules.length > 0
                                ? `${selectedSchedules.length} horario(s) programado(s)`
                                : "No hay horarios programados para esta fecha"
                            : `${schedules.length} horario(s) en total`
                        }
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ScheduleList
                        schedules={selectedSchedules}
                        showEmptyMessage={!!date}
                        showDates={!date}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

