import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Clock, Medal } from 'lucide-react'
import { HistoryRange as HistoryRangeInterface } from '@/interfaces'
import { calculateDuration, formatDate, getBeltColor } from '@/utils'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'

interface Props {
    history: HistoryRangeInterface[]
}

export const HistoryRange = ({ history }: Props) => {
    return (
        <div className="md:col-span-2">
            <Card className="h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Medal className="h-5 w-5" /> Progresión de Rangos
                    </CardTitle>
                    <CardDescription>Historial completo de progresión en Taekwondo</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {history.map((item, index) => (
                            <div key={item.id} className="relative pl-8">
                                {/* Línea vertical conectora */}
                                {index < history.length - 1 && <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-muted" />}

                                {/* Punto de la línea de tiempo */}
                                <div
                                    className={`absolute left-0 top-1 h-6 w-6 rounded-full flex items-center justify-center ${getBeltColor(item.range.nombre)}`}
                                >
                                    {index === history.length - 1 ? <span className="h-2 w-2 rounded-full bg-white" /> : null}
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Badge className={`${getBeltColor(item.range.nombre)}`}>{item.range.nombre}</Badge>
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <Clock className="h-3.5 w-3.5" />
                                            {calculateDuration(item.createdAt, item.finishedAt)}
                                        </div>
                                    </div>

                                    <p className="text-sm">{item.range.description}</p>

                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <div>Inicio: {formatDate(item.createdAt)}</div>
                                        <div>Fin: {formatDate(item.finishedAt)}</div>
                                    </div>
                                </div>

                                {index < history.length - 1 && <Separator className="mt-4" />}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
