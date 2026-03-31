"use client"


import { Button } from "@/components/ui/button"

export default function AppToastButton({ title, description }: any) {
  const { toast } = useToast()

  return (
    <Button
      onClick={() =>
        toast({
          title,
          description,
        })
      }
    >
      Show Toast
    </Button>
  )
}