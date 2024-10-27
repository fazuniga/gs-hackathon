"use client"

import * as React from "react"
import { CalendarIcon, ClockIcon } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { platform } from "@/lib/platform/config"

interface EventBookingCardProps {
    date: Date | undefined
    onDateChange: (date: Date | undefined) => void
    duration: string
    onDurationChange: (duration: string) => void
    time: string
    onTimeChange: (time: string) => void
    onConfirm: () => void
}

export default function EventBookingCard({
    date,
    onDateChange,
    duration,
    onDurationChange,
    time,
    onTimeChange,
    onConfirm
}: EventBookingCardProps) {
    const timeSlots = React.useMemo(() => Array.from({ length: 48 }, (_, i) => {
        const hours = Math.floor(i / 2)
        const minutes = i % 2 === 0 ? "00" : "30"
        return `${hours.toString().padStart(2, "0")}:${minutes}`
    }), [])

    return (
        <Card className="w-[350px] bg-gradient-to-br from-green-200 to-gray-400">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">Agenda tu visita</CardTitle>
                <CardDescription className="text-purple-600">
                    Veamos juntos cómo resolvemos tu problema con { platform.name }
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Fecha</label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Elige una fecha</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={onDateChange}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Duración</label>
                    <Select value={duration} onValueChange={onDurationChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="30">30 minutos</SelectItem>
                            <SelectItem value="60">60 minutos</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Hora</label>
                    <Select value={time} onValueChange={onTimeChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select time">
                                <div className="flex items-center">
                                    <ClockIcon className="mr-2 h-4 w-4" />
                                    {time || "Select time"}
                                </div>
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>
                                    {slot}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={onConfirm}>
                    Confirmar Cita
                </Button>
            </CardFooter>
        </Card>
    )
}