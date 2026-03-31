"use client"

import { ReactNode } from "react"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"

type TabItem = {
  value: string
  label: string
  content: ReactNode
}

type Props = {
  defaultValue: string
  tabs: TabItem[]
}

export default function AppTabs({ defaultValue, tabs }: Props) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      
      <TabsList className="grid w-full grid-cols-3">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}

    </Tabs>
  )
}