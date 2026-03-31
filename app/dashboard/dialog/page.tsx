"use client"

import AppDialog from "@/components/common/AppDialog"
import { Button } from "@/components/ui/button"

export default function DialogPage() {
  return (
    <div className="p-6">

      <AppDialog
        title="My Dialog"
        trigger={<Button>Open Dialog</Button>}
      >
        <p>This is dialog content 👋</p>
      </AppDialog>

    </div>
  )
}