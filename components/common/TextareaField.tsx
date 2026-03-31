import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function TextareaField({ label, ...props }: any) {
  return (
    <div className="space-y-1">
      <Label>{label}</Label>
      <Textarea {...props} />
    </div>
  )
}