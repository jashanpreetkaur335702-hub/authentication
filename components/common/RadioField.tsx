"use client"

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RadioField({ options, value, onValueChange }: any) {
  return (
    <RadioGroup value={value} onValueChange={onValueChange}>
      {options.map((opt: any) => (
        <div key={opt.value} className="flex items-center space-x-2">
          <RadioGroupItem value={opt.value} />
          <Label>{opt.label}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}