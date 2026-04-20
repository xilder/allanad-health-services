import type { Metadata } from "next"
import { PageContainer, Section, SectionHeader } from "@/components/layout/page-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Building2, 
  Cpu, 
  Users, 
  CheckCircle2,
  Heart,
  Shield,
  Lightbulb,
  Handshake
} from "lucide-react"

export const metadata: Metadata = {
  title: "Partners & B2B",
  description: "Explore partnership opportunities with Allanad Healthcare Alliance. Corporate wellness, healthcare technology, and community health collaborations.",
}

const partnerships = [
  {
    icon: Building2,
    title: "Corporate Wellness Partnerships",
    description: "Organizations can collaborate with us to implement structured wellness initiatives that support employee health and productivity.",
    benefits: [
      "Customized wellness programs",
      "Health education workshops",
      "Employee health assessments",
      "Ongoing wellness support",
    ],
  },
  {
    icon: Cpu,
    title: "Healthcare Technology Partnerships",
    description: "We partner with healthcare organizations and innovators to support digital health development and implementation.",
    benefits: [
      "Digital health strategy consulting",
      "Technology implementation support",
      "Innovation collaboration",
      "Health system integration",
    ],
  },
  {
    icon: Users,
    title: "Community Health Collaborations",
    description: "We support community health initiatives through education programs, outreach, and strategic partnerships.",
    benefits: [
      "Community health programs",
      "Educational outreach",
      "Public health initiatives",
      "Collaborative health interventions",
    ],
  },
]

const whyPartner = [
  {
    icon: Heart,
    title: "Patient-Centered Philosophy",
    description: "We prioritize patient wellbeing in every decision and partnership.",
  },
  {
    icon: Shield,
    title: "Preventive Healthcare Focus",
    description: "Our approach emphasizes prevention and early intervention.",
  },
  {
    icon: Lightbulb,
    title: "Digital Health Innovation",
    description: "We embrace technology to improve healthcare delivery.",
  },
  {
    icon: Handshake,
    title: "Collaborative Approach",
    description: "We believe in partnerships that create mutual value.",
  },
]

export default function PartnersPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
            Partner With Us
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Allanad Healthcare Alliance collaborates with organizations, healthcare providers, and institutions that share our commitment to improving health outcomes.
          </p>
        </div>
      </Section>

      {/* Partnership Opportunities */}
      <Section className="bg-background">
        <SectionHeader
          title="Partnership Opportunities"
          subtitle="Explore ways to collaborate with Allanad Healthcare Alliance"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {partnerships.map((partnership) => (
            <Card key={partnership.title} className="border-border/50">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <partnership.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{partnership.title}</CardTitle>
                <CardDescription>{partnership.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="mb-3 text-sm font-semibold text-foreground">What We Offer</h4>
                <ul className="space-y-2">
                  {partnership.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Partner With Us */}
      <Section className="bg-muted/30">
        <SectionHeader
          title="Why Partner With Us"
          subtitle="What makes Allanad Healthcare Alliance different"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyPartner.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Partnership Inquiry Form */}
      <Section className="bg-background">
        <div className="mx-auto max-w-2xl">
          <SectionHeader
            title="Start a Partnership Conversation"
            subtitle="If your organization is interested in working with Allanad Healthcare Alliance, we would welcome the opportunity to explore collaboration."
          />
          <Card className="border-border">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization Name *</Label>
                  <Input id="organization" placeholder="Your organization name" required />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Person *</Label>
                    <Input id="contactName" placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role / Position</Label>
                    <Input id="role" placeholder="Your role" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="contact@organization.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we collaborate? *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your organization and how you envision a partnership..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Partnership Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </PageContainer>
  )
}
