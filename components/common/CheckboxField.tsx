"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxField({ label, ...props }: any) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox {...props} />
      <Label>{label}</Label>
    </div>
  )
}