"use client"

import AppAccordion from "@/components/common/AppAccordion"

export default function AccordionPage() {
  const data = [
    {
      title: "What is Next.js?",
      content: "Next.js is a React framework.",
    },
    {
      title: "What is shadcn?",
      content: "shadcn provides reusable UI components.",
    },
    {
      title: "Why use reusable components?",
      content: "To avoid repetition and improve code quality.",
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Accordion Page</h1>

      <AppAccordion items={data} />
    </div>
  )
}