"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

type Props = {
  value?: Date
  onChange?: (date: Date | undefined) => void
}

export default function AppCalendar({ value, onChange }: Props) {
  const [date, setDate] = useState<Date | undefined>(value)

  const handleSelect = (selected: Date | undefined) => {
    setDate(selected)
    onChange?.(selected)
  }

  return (
    <div className="border rounded-lg p-3 w-fit">
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleSelect}
      />
    </div>
  )
}