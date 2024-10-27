import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Search, RotateCcw } from "lucide-react"

export default function TicketManagement({ t }: { t: any }) {
    return (
        <section className="space-y-4">
            <div className="flex items-center justify-between px-4 py-2">
                <Tabs defaultValue="needs-supervision" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="needs-supervision">{t.needsSupervision}</TabsTrigger>
                        <TabsTrigger value="auto-answered">{t.autoAnswered}</TabsTrigger>
                        <TabsTrigger value="closed-tickets">{t.closedTickets}</TabsTrigger>
                    </TabsList>
                    <TabsContent value="needs-supervision">
                        {/* Content for Needs Supervision tickets */}
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{t.needsSupervision}</h2>
                            {/* Add your ticket list or table for needs supervision here */}
                        </div>
                    </TabsContent>

                    <TabsContent value="auto-answered">
                        {/* Content for Auto Answered tickets */}
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{t.autoAnswered}</h2>
                            {/* Add your ticket list or table for auto answered here */}
                        </div>
                    </TabsContent>

                    <TabsContent value="closed-tickets">
                        {/* Content for Closed tickets */}
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{t.closedTickets}</h2>
                            {/* Add your ticket list or table for closed tickets here */}
                        </div>
                    </TabsContent>
                </Tabs>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <Input placeholder={t.search} className="peer pl-9 w-64" />
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 peer-disabled:opacity-50">
                            <Search className="w-4 h-4" />
                        </div>
                    </div>
                    <Button>
                        <RotateCcw className="w-4 h-4 mr-2" />
                        {t.reloadTickets}
                    </Button>
                </div>
            </div>
        </section>
    )
}