'use client'

import React, { useState } from 'react'
import EventBookingCard from '@/components/booking/booking-form'

export default function BookEventPage() {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [duration, setDuration] = useState<string>("30")
    const [time, setTime] = useState<string>("")

    const handleDateChange = (newDate: Date | undefined) => {
        setDate(newDate)
    }

    const handleDurationChange = (newDuration: string) => {
        setDuration(newDuration)
    }

    const handleTimeChange = (newTime: string) => {
        setTime(newTime)
    }

    const handleConfirmBooking = () => {
        // Here you would typically send the booking data to your backend
        console.log('Booking confirmed:', { date, duration, time })
        // You could also show a confirmation message or redirect the user
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-50 to-indigo-50 flex items-center justify-center p-4">
            <EventBookingCard
                date={date}
                onDateChange={handleDateChange}
                duration={duration}
                onDurationChange={handleDurationChange}
                time={time}
                onTimeChange={handleTimeChange}
                onConfirm={handleConfirmBooking}
            />
        </div>
    )
}