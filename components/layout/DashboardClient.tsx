"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function DashboardClient({ children }: { children: ReactNode }) {
  const { data: session } = useSession()

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-60 bg-gray-900 text-white p-5 space-y-4">
        <h2 className="text-xl font-bold">Dashboard</h2>

        <nav className="flex flex-col gap-2">
          <Link href="/dashboard">Home</Link>
          <Link href="/dashboard/accordion">Accordion</Link>
          <Link href="/dashboard/calendar">Calendar</Link>
          <Link href="/dashboard/dialog">Dialog</Link>
          <Link href="/dashboard/form">Form</Link>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1">

        {/* Navbar */}
        <header className="flex justify-between p-4 bg-white shadow">
          <h1>Dashboard</h1>

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

        <main className="p-6">{children}</main>

      </div>
    </div>
  )
}