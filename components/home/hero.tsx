import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 lg:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Patient-Centered Healthcare
          </div>
          
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Beyond Healthcare.{" "}
            <span className="text-primary">It's all about you.</span>{" "}
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Personalized, preventive, and technology-driven healthcare designed to help you live healthier, longer, and better — every single day.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/booking">
                <Calendar className="h-4 w-4" />
                Book a Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mx-auto mt-16 max-w-3xl">
          <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
            Trusted by individuals and organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground/60">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-muted" />
              <span className="text-sm font-medium">HealthPartner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-muted" />
              <span className="text-sm font-medium">MediCorp</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-muted" />
              <span className="text-sm font-medium">WellnessHub</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-muted" />
              <span className="text-sm font-medium">CareFirst</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
