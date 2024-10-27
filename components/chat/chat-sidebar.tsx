import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

export default function SupportChatSidebar() {
    return (
        <div className="min-h-screen">
            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>Metadata</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[calc(100vh-120px)] max-h-96">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Categoría</h3>
                                <Badge variant="secondary">Hardware</Badge>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Gravedad</h3>
                                <Badge variant="destructive">Alta</Badge>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Título</h3>
                                <p className="text-sm">Mouse no funciona después de reiniciar</p>
                            </div>
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
}