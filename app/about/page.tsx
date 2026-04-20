import type { Metadata } from "next"
import { PageContainer, Section, SectionHeader } from "@/components/layout/page-container"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Lightbulb, Users, Target, Eye, Zap, Sparkles, Stethoscope, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "About Allanad Healthcare Alliance",
  description: "Redefining healthcare through proactive, personalized, and patient-centered care. Learn about our mission to make quality healthcare accessible to everyone.",
}

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Everything we do begins and ends with the individual. Your needs, your goals, your health.",
  },
  {
    icon: Shield,
    title: "Preventive Healthcare",
    description: "We believe the best treatment is prevention — helping you stay ahead of illness.",
  },
  {
    icon: Lightbulb,
    title: "Excellence & Professionalism",
    description: "We are committed to delivering high-quality care with integrity, competence, and accountability.",
  },
  {
    icon: Zap,
    title: "Innovation & Growth",
    description: "We embrace technology and new ideas to continuously improve how healthcare is delivered.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work with professionals, partners, and communities to create a stronger, more connected healthcare system.",
  },
]

const differentiators = [
  {
    icon: Sparkles,
    title: "Integrated Care",
    description: "From consultations to diagnostics, nutrition, fitness, and pharmacy — everything works together.",
  },
  {
    icon: Zap,
    title: "Convenience",
    description: "Access healthcare from anywhere, at any time.",
  },
  {
    icon: Target,
    title: "Personalization",
    description: "Every plan, every recommendation, every interaction is tailored to you.",
  },
  {
    icon: Heart,
    title: "Human Approach",
    description: "We listen. We understand. We care — beyond the clinical.",
  },
]

const services = [
  { icon: Stethoscope, title: "Medical consultations" },
  { icon: Truck, title: "Nutrition and diet planning" },
  { icon: Zap, title: "Fitness and lifestyle coaching" },
  { icon: Heart, title: "Nursing and home care services" },
  { icon: Sparkles, title: "Pharmaceutical and skincare solutions" },
  { icon: Target, title: "Diagnostic partnerships" },
]

export default function AboutPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
            Redefining Healthcare, One Life at a Time
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            We are building a healthcare system that is proactive, personalized, and centered around you — not just your illness.
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section className="bg-background">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Our Story"
            align="left"
          />
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Allanad Healthcare Alliance was born from a simple but powerful realization — healthcare, as we know it, often comes too late.
            </p>
            <p>
              Too many people only seek help when symptoms appear. Too many lives are disrupted by conditions that could have been prevented. As a doctor-led initiative, Allanad was created to shift that narrative.
            </p>
            <p>
              We saw the gaps — limited access, fragmented care, lack of preventive focus — and decided to build something better. A system where healthcare is continuous, not occasional; prevention is prioritized, not ignored; and every individual feels seen, heard, and supported.
            </p>
            <p>
              Today, Allanad Healthcare Alliance is growing into a 3-platform that connects medical care, wellness, nutrition, fitness, and technology — all in one seamless experience. Because we believe the future of healthcare is not just treatment. It is transformation.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-muted/30">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <Card className="border-primary/20 bg-card">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To make quality healthcare more accessible, more proactive, and more personalized by combining clinical excellence with wellness and digital innovation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20 bg-card">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To become a leading healthcare ecosystem in Africa — empowering individuals and organizations to live healthier, longer, and more productive lives.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-background">
        <SectionHeader
          title="What We Stand For"
          subtitle="Our core values guide everything we do"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <Card key={value.title} className="text-center border-border/50">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section className="bg-muted/30">
        <SectionHeader
          title="Why Choose Allanad Healthcare Alliance"
          subtitle="We are not just another healthcare provider"
        />
        <p className="mx-auto mb-12 max-w-3xl text-center text-base text-muted-foreground">
          We are a healthcare experience designed for modern living.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <Card key={item.title} className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services Ecosystem */}
      <Section className="bg-background">
        <SectionHeader
          title="A Complete Approach to Your Health"
          subtitle="Our interconnected services ecosystem"
        />
        <p className="mx-auto mb-12 max-w-3xl text-center text-base text-muted-foreground">
          Allanad Healthcare Alliance provides a range of interconnected services designed to support your total wellbeing. Each service is designed to work together — giving you a holistic approach to health.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex items-start gap-4 rounded-lg border border-border/50 p-5 bg-card">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium text-foreground">{service.title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Future Vision */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title="Building the Future of Healthcare"
            subtitle="Our roadmap for continuous evolution"
            align="center"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              We are continuously evolving to meet the needs of a changing world. Our roadmap includes:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>A seamless online booking platform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>A web-based healthcare system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>AI-powered healthcare solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>Digital medical records systems for hospitals</span>
              </li>
            </ul>
            <p className="pt-4">
              Our goal is simple — to make healthcare smarter, faster, and more accessible for everyone.
            </p>
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}
