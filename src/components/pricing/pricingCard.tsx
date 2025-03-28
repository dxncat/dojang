import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign } from "lucide-react"
import { formatCurrency } from "@/utils"

interface TaekwondoPackage {
    id: number
    name: string
    hours: number
    price: number
    description: string
    createdAt: Date
}

interface TaekwondoPackageCardProps {
    pkg: TaekwondoPackage
    onSelect?: (id: number) => void
}

export function POricingCard({ pkg, onSelect }: TaekwondoPackageCardProps) {
    const descriptionLines = pkg.description.split("\n").filter((line) => line.trim() !== "")

    return (
        <Card className="h-full flex flex-col">
            <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{pkg.hours} horas</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-primary">
                        <DollarSign className="h-4 w-4" />
                        <span>{formatCurrency(pkg.price)}</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="space-y-2 text-sm">
                    {descriptionLines.slice(0, 1).map((line, index) => (
                        <p key={index} className="text-muted-foreground">
                            {line}
                        </p>
                    ))}
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                        {descriptionLines.slice(1).map((line, index) => (
                            <li key={index} className="text-muted-foreground">
                                {line.replace(/^\s*-\s*/, "")}
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={() => onSelect && onSelect(pkg.id)}>
                    Seleccionar
                </Button>
            </CardFooter>
        </Card>
    )
}

