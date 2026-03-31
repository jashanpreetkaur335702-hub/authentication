import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AppCard({ title, children }: any) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}