export const calculateDuration = (start: Date, end: Date | null) => {
    const endDate = end || new Date()
    const diffMonths = (endDate.getFullYear() - start.getFullYear()) * 12 + (endDate.getMonth() - start.getMonth())

    if (diffMonths < 1) return "Menos de un mes"
    if (diffMonths === 1) return "1 mes"
    return `${diffMonths} meses`
} 