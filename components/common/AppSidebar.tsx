"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import {
  Home,
  LayoutDashboard,
  Calendar,
  FileText,
  Table,
  Settings,
  Layers,
} from "lucide-react"

export default function AppSidebar() {
  const pathname = usePathname()

  const menu = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Accordion", href: "/dashboard/accordion", icon: Layers },
    { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
    { name: "Dialog", href: "/dashboard/dialog", icon: LayoutDashboard },
    { name: "Form", href: "/dashboard/form", icon: FileText },
    { name: "Tabs", href: "/dashboard/tabs", icon: Settings },
    { name: "Table", href: "/dashboard/table", icon: Table },
  ]

  return (
    <Sidebar>

      <SidebarContent className="p-4">

        {/* Title */}
        <h2 className="text-lg font-bold mb-4 px-2">
           Dashboard
        </h2>

        <SidebarMenu className="space-y-1">

          {menu.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <SidebarMenuItem key={item.href}>
                
                <Link href={item.href}>
                  <SidebarMenuButton
                    className={`
                      flex items-center gap-2 rounded-lg px-3 py-2 transition
                      ${isActive 
                        ? "bg-primary text-white" 
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"}
                    `}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                </Link>

              </SidebarMenuItem>
            )
          })}

        </SidebarMenu>

      </SidebarContent>

    </Sidebar>
  )
}