import { Section } from "@/components/layout/page-container"
import { User } from "lucide-react"

export function FounderMessage() {
  return (
    <Section className="bg-background">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <User className="h-10 w-10 text-muted-foreground" />
        </div>
        
        <blockquote className="text-2xl font-medium leading-relaxed text-foreground lg:text-3xl text-balance">
          {`"Healthcare should feel accessible, thoughtful, and human."`}
        </blockquote>
        
        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Allanad Healthcare Alliance was founded on a simple belief — that better health outcomes begin with trust, knowledge, and compassionate care.
          </p>
          <p>
            We aim to build a healthcare ecosystem that supports individuals, organizations, and clinicians through preventive care, intelligent systems, and meaningful collaboration.
          </p>
          <p>
            As healthcare continues to evolve, our mission remains the same: to create solutions that place people at the center of care.
          </p>
        </div>
        
        <div className="mt-8">
          <p className="text-sm font-semibold text-foreground">— Founder</p>
          <p className="text-sm text-muted-foreground">Dr Stephen Dike</p>
        </div>
      </div>
    </Section>
  )
}
