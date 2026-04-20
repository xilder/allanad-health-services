import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Mail } from "lucide-react"

export function CTABanner() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground lg:text-4xl text-balance">
            Your health journey deserves clarity and support.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80 text-pretty">
            Whether you need professional guidance, preventive care, or a wellness program for your organization, we are here to help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href="/booking">
                <Calendar className="h-4 w-4" />
                Book a Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/wellness">
                <Mail className="h-4 w-4" />
                Subscribe for Health Insights
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
