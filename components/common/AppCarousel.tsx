"use client"

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {
  items: React.ReactNode[]
  className?: string
  itemClassName?: string
}

export default function AppCarousel({
  items,
  className,
  itemClassName,
}: Props) {
  return (
    <Carousel
      opts={{ align: "start" }}
      className={`w-full max-w-sm ${className}`}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className={`basis-1/2 lg:basis-1/3 ${itemClassName}`}
          >
            <div className="p-1">{item}</div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}