"use client"

import { ReactNode } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

type Item = {
  title: string
  content: ReactNode
}

type Props = {
  items: Item[]
  type?:any
}

export default function AppAccordion({ items, type = "single" }: Props) {
  return (
    <Accordion type={type} collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}