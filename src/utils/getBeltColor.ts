export const getBeltColor = (beltName: string) => {
    if (beltName.includes("Blanco")) return "bg-gray-100 text-gray-800"
    if (beltName.includes("Amarillo-Verde")) return "bg-yellow-300 text-yellow-800"
    if (beltName.includes("Amarillo")) return "bg-yellow-400 text-yellow-800"
    if (beltName.includes("Verde-Azul")) return "bg-green-400 text-green-800"
    if (beltName.includes("Verde")) return "bg-green-500 text-green-800"
    if (beltName.includes("Azul")) return "bg-blue-500 text-white"
    if (beltName.includes("Rojo")) return "bg-red-500 text-white"
    if (beltName.includes("Negro")) return "bg-black text-white"
    return "bg-gray-200 text-gray-800"
}