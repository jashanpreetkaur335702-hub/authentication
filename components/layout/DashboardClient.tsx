"use client"

import { ReactNode } from "react"
import { useSession, signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import AppSidebar from "@/components/common/AppSidebar"

export default function DashboardClient({ children }: { children: ReactNode }) {
  const { data: session } = useSession()

  return (
    <SidebarProvider>

      {/* Sidebar */}
      <AppSidebar />

      {/* Main Layout */}
      <div className="flex flex-col w-full">

        {/* Navbar */}
        <header className="flex justify-between items-center p-4 bg-white shadow">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <h1 className="font-semibold">Dashboard</h1>
          </div>

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={session?.user?.image || ""} />
              <AvatarFallback>
                {session?.user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <Button onClick={() => signOut({ callbackUrl: "/login" })}>
              Logout
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>

      </div>

    </SidebarProvider>
  )
}