import type { Metadata } from "next"
import Link from "next/link"
import { PageContainer, Section, SectionHeader } from "@/components/layout/page-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Bot, 
  Database, 
  Smartphone, 
  Calendar,
  Activity,
  FileText,
  CheckCircle2,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Health",
  description: "Explore Allanad Healthcare Alliance's digital health roadmap - AI health assistants, EMR integration, and patient platforms for the future of healthcare.",
}

const solutions = [
  {
    icon: Bot,
    title: "AI Health Assistant",
    description: "We are developing AI tools designed to support health education, symptom awareness, and patient engagement. These tools aim to empower individuals with reliable information and guidance.",
    status: "In Development",
    features: [
      "Health education support",
      "Symptom awareness guidance",
      "Patient engagement tools",
      "Reliable health information",
    ],
  },
  {
    icon: Database,
    title: "Electronic Medical Record Integration",
    description: "Future systems will integrate with electronic medical records to support better clinical documentation, workflow efficiency, and patient data management.",
    status: "Planned",
    features: [
      "Clinical documentation support",
      "Workflow efficiency tools",
      "Patient data management",
      "Secure health records",
    ],
  },
  {
    icon: Smartphone,
    title: "Digital Patient Platform",
    description: "We are building a digital platform that will allow patients to manage appointments, access health resources, engage with healthcare professionals, and track health progress.",
    status: "In Development",
    features: [
      "Appointment management",
      "Health resource access",
      "Provider engagement",
      "Health progress tracking",
    ],
  },
]

const roadmap = [
  {
    phase: "Phase 1",
    title: "Healthcare Services Platform",
    description: "Foundation of our digital health ecosystem with appointment booking and patient management.",
    icon: Calendar,
    status: "current",
  },
  {
    phase: "Phase 2",
    title: "Digital Patient Tools",
    description: "Patient-facing applications for health tracking, resource access, and provider communication.",
    icon: Smartphone,
    status: "upcoming",
  },
  {
    phase: "Phase 3",
    title: "AI Healthcare Assistant",
    description: "Intelligent tools for health education, symptom guidance, and personalized recommendations.",
    icon: Bot,
    status: "upcoming",
  },
  {
    phase: "Phase 4",
    title: "EMR Integrations",
    description: "Healthcare data systems and electronic medical record integrations for seamless care coordination.",
    icon: Database,
    status: "future",
  },
]

export default function DigitalHealthPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <Activity className="h-4 w-4 text-primary" />
            Building the Future of Healthcare
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
            Digital Health Innovation
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Healthcare is entering a new era where intelligent systems, digital platforms, and data-driven insights improve how care is delivered. Allanad Healthcare Alliance is building digital tools that will support patients, clinicians, and healthcare organizations.
          </p>
        </div>
      </Section>

      {/* Digital Health Solutions */}
      <Section className="bg-background">
        <SectionHeader
          title="Our Digital Health Solutions"
          subtitle="Innovative tools designed to transform healthcare delivery"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution.title} className="border-border/50">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {solution.status}
                  </span>
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="mb-3 text-sm font-semibold text-foreground">Key Features</h4>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technology Roadmap */}
      <Section className="bg-muted/30">
        <SectionHeader
          title="Technology Roadmap"
          subtitle="Our vision for the future of digital healthcare"
        />
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 h-full w-0.5 bg-border lg:left-1/2 lg:-translate-x-0.5" />
            
            <div className="space-y-8">
              {roadmap.map((item, index) => (
                <div
                  key={item.phase}
                  className={`relative flex items-start gap-6 lg:gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full lg:left-1/2 ${
                      item.status === "current"
                        ? "bg-primary ring-4 ring-primary/20"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                  
                  {/* Content */}
                  <div className={`ml-12 flex-1 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                    index % 2 === 1 ? "lg:text-right" : ""
                  }`}>
                    <Card className={`border-border/50 ${item.status === "current" ? "border-primary/30 shadow-md" : ""}`}>
                      <CardContent className="pt-6">
                        <div className={`flex items-center gap-3 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                          <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                            item.status === "current" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}>
                            <item.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              {item.phase}
                            </span>
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground text-balance">
            Interested in Our Digital Health Solutions?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Partner with us to implement digital health technologies in your organization or stay updated on our latest innovations.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/partners">
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}
