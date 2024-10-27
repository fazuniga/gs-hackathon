import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

// Metadata component
export const Metadata = ({ category, severity, title }: { category: string, severity: string, title: string }) => (
    <Card className="h-full">
        <CardHeader>
            <CardTitle>Metadata</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold mb-2">Categoría</h3>
                    <Badge variant="secondary">{category}</Badge>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Gravedad</h3>
                    <Badge variant={severity === 'Alta' ? "destructive" : "secondary"}>{severity}</Badge>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Título</h3>
                    <p className="text-sm">{title}</p>
                </div>
            </div>
        </CardContent>
    </Card>
)