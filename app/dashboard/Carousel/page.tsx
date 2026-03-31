"use client"

import { Card, CardContent } from "@/components/ui/card"
import AppCarousel from "@/components/common/AppCarousel"

export default function CarouselPage() {
  const items = Array.from({ length: 5 }).map((_, index) => (
    <Card key={index}>
      <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-3xl font-semibold">
          {index + 1}
        </span>
      </CardContent>
    </Card>
  ))

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Carousel </h1>

      <AppCarousel items={items} />
    </div>
  )
}