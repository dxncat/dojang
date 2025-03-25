import { User as UserType } from "@/interfaces"
import { es } from "date-fns/locale"
import { CalendarDays, User } from "lucide-react"
import { format } from "date-fns"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { getBeltColor } from "@/utils"
import { Badge } from "../ui/badge"

interface Props {
    user: UserType
}

export const ProfileCard = ({ user }: Props) => {

    return (
        <div className="md:col-span-1">
            <Card className="h-full">
                <CardHeader className="pb-2">
                    <CardTitle>Perfil de Usuario</CardTitle>
                    <CardDescription>Información personal y rango actual</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 mb-4">
                        <AvatarImage src={user.image} alt={user.name} />
                        <AvatarFallback>
                            <User className="h-12 w-12" />
                        </AvatarFallback>
                    </Avatar>

                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    <p className="text-muted-foreground mb-4">{user.email}</p>

                    <Badge className={`text-md px-3 py-1.5 mb-2 ${getBeltColor(user.rangoActual.nombre)}`}>
                        {user.rangoActual.nombre}
                    </Badge>

                    <p className="text-sm text-center mt-2">{user.rangoActual.description}</p>

                    <div className="w-full mt-6 pt-4 border-t flex items-center justify-center gap-2">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                            Miembro desde {format(new Date(user.createdAt), "MMMM yyyy", { locale: es })}
                        </span>
                    </div>

                    <div className="w-full mt-6 pt-4 border-t">
                        <h2 className="text-xl">Acciones</h2>
                        <div className="flex flex-col gap-2 mt-2">
                            <button className="text-sm text-muted-foreground cursor-pointer">Editar perfil</button>
                            <button className="text-sm text-muted-foreground cursor-pointer">Editar nombre</button>
                            <button className="text-sm text-muted-foreground cursor-pointer">Cambiar contraseña</button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
