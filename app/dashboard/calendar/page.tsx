"use client"

import { useState } from "react"
import AppCalendar from "@/components/common/AppCalendar"

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  return (
    <div className="p-6 space-y-4">

      <h1 className="text-xl font-bold">Calendar Page</h1>

      <AppCalendar
        value={selectedDate}
        onChange={setSelectedDate}
      />

      {selectedDate && (
        <p className="text-gray-600">
          Selected Date: {selectedDate.toDateString()}
        </p>
      )}

    </div>
  )
}