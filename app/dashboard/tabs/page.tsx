"use client"

import AppTabs from "@/components/common/AppTabs"

export default function TabsPage() {
  const tabsData = [
    {
      value: "profile",
      label: "Profile",
      content: <p>This is profile tab </p>,
    },
    {
      value: "settings",
      label: "Settings",
      content: <p>This is settings tab </p>,
    },
    {
      value: "billing",
      label: "Billing",
      content: <p>This is billing tab </p>,
    },
  ]

  return (
    <div className="p-6 space-y-4">

      <h1 className="text-xl font-bold">Tabs Page</h1>

      <AppTabs defaultValue="profile" tabs={tabsData} />

    </div>
  )
}