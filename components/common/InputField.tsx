import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputField({
  label,
  error,
  ...props
}: any) {
  return (
    <div className="space-y-1">
      <Label>{label}</Label>
      <Input {...props} className={error ? "border-red-500" : ""} />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}