import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { formatCurrency } from "@/utils"
import { Pricing } from "@/interfaces"

interface Props {
    pkg: Pricing
    onSelect?: (id: number) => void
}

export function PricingCard({ pkg, onSelect }: Props) {
    const descriptionLines = pkg.description.split("\n").filter((line) => line.trim() !== "")

    return (
        <Card className="h-full flex flex-col bg-yinmn-blue text-white border-none shadow-lg">
            <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                <div className="flex items-center justify-between gap-4 mt-2">
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-white">{pkg.hours} horas</span>
                    </div>
                    <div className="flex items-center gap-1 font-bold text-primary">
                        <span className="text-penn-red-500">{formatCurrency(pkg.price)}</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="space-y-2 text-sm text-white">
                    {descriptionLines.slice(0, 1).map((line, index) => (
                        <p key={index}>
                            {line}
                        </p>
                    ))}
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                        {descriptionLines.slice(1).map((line, index) => (
                            <li key={index}>
                                {line.replace(/^\s*-\s*/, "")}
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-penn-red-400 text-yinmn-blue-800 hover:bg-yinmn-blue-800 hover:text-penn-red-400 border-none cursor-pointer" onClick={() => onSelect && onSelect(pkg.id)}>
                    Seleccionar
                </Button>
            </CardFooter>
        </Card>
    )
}

