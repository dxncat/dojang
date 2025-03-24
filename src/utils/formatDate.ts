import { es } from "date-fns/locale"
import { format } from "date-fns"

export const formatDate = (date: Date | null) => {
    if (!date) return "Actual"
    return format(date, "d 'de' MMMM, yyyy", { locale: es })
}