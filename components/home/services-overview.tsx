import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/layout/page-container"
import { 
  Shield, 
  Stethoscope, 
  Building2, 
  Users, 
  Cpu,
  ArrowRight 
} from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Preventive Healthcare",
    description: "Stay ahead of illness through proactive screening, lifestyle guidance, and personalized health strategies designed to protect your long-term wellbeing.",
    href: "/services#preventive",
    cta: "Learn More",
  },
  {
    icon: Stethoscope,
    title: "Clinical Consultations",
    description: "Access professional medical guidance and second opinions designed to support informed healthcare decisions.",
    href: "/booking",
    cta: "Book Appointment",
  },
  {
    icon: Building2,
    title: "Corporate Wellness Programs",
    description: "Help your organization thrive with structured wellness programs that improve employee health, productivity, and long-term outcomes.",
    href: "/partners",
    cta: "Partner With Us",
  },
  {
    icon: Users,
    title: "Community Health Initiatives",
    description: "We support community health through outreach programs, education, and collaborative health interventions.",
    href: "/about#mission",
    cta: "Discover Our Impact",
  },
  {
    icon: Cpu,
    title: "Digital Health Solutions",
    description: "We are building intelligent health platforms designed to improve patient care, streamline clinical workflows, and support data-driven healthcare.",
    href: "/digital-health",
    cta: "Explore Digital Health",
  },
]

export function ServicesOverview() {
  return (
    <Section className="bg-background">
      <SectionHeader
        title="Our Healthcare Services"
        subtitle="Comprehensive healthcare solutions designed to support individuals, families, and organizations in achieving better health outcomes."
      />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="group relative overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {service.description}
              </CardDescription>
              <Button asChild variant="link" className="mt-4 h-auto p-0 text-primary">
                <Link href={service.href} className="flex items-center gap-1">
                  {service.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
