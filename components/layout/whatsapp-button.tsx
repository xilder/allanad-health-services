"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const whatsappNumber = "+234XXXXXXXXXX" // Placeholder
  const message = encodeURIComponent("Hello, I would like to inquire about your healthcare services.")
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] hover:shadow-xl transition-all"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  )
}
