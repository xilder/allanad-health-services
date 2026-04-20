import type { Metadata } from "next"
import Link from "next/link"
import { PageContainer, Section, SectionHeader } from "@/components/layout/page-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Stethoscope, 
  Apple,
  Dumbbell,
  Heart,
  Pill,
  Microscope,
  CheckCircle2,
  Users,
  Target,
  Calendar,
  Clock,
  UserCheck,
  Award
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive healthcare services tailored to you — from medical consultations to nutrition, fitness, nursing care, pharmaceuticals, and diagnostics.",
}

const services = [
  {
    id: "consultations",
    icon: Stethoscope,
    title: "Medical Consultations",
    tagline: "Professional medical care, when you need it.",
    description: "Speak directly with licensed doctors for accurate diagnosis, treatment, and ongoing health guidance. Our consultations are designed to be convenient, confidential, and patient-focused.",
    features: [
      "General medical consultations",
      "Follow-up care",
      "Preventive health assessments",
      "Chronic disease management",
    ],
    cta: "Book Consultation",
  },
  {
    id: "nutrition",
    icon: Apple,
    title: "Nutrition & Dietetics",
    tagline: "Eat better. Live better.",
    description: "Our nutrition experts create personalized diet plans tailored to your health goals, lifestyle, and medical needs.",
    features: [
      "Customized meal plans",
      "Weight management support",
      "Nutrition for medical conditions",
      "Lifestyle-based dietary guidance",
    ],
    cta: "Start Your Plan",
  },
  {
    id: "fitness",
    icon: Dumbbell,
    title: "Fitness & Lifestyle Coaching",
    tagline: "Build habits that last a lifetime.",
    description: "We help you develop sustainable routines that improve your physical health, energy levels, and overall wellbeing.",
    features: [
      "Personalized fitness guidance",
      "Lifestyle modification plans",
      "Accountability and progress tracking",
      "Wellness coaching",
    ],
    cta: "Join a Program",
  },
  {
    id: "nursing",
    icon: Heart,
    title: "Nursing & Home Care Services",
    tagline: "Quality care, in the comfort of your home.",
    description: "Our trained nursing professionals provide compassionate, professional care wherever you are.",
    features: [
      "Home visits by qualified nurses",
      "Post-hospital care",
      "Medication administration",
      "Elderly and long-term care support",
    ],
    cta: "Request Home Care",
  },
  {
    id: "pharmaceuticals",
    icon: Pill,
    title: "Pharmaceuticals & Skincare",
    tagline: "Trusted products for your health and confidence.",
    description: "Access quality medications and expert-approved skincare products, backed by professional guidance.",
    features: [
      "Genuine medications",
      "Skincare consultations",
      "Health product recommendations",
      "Ongoing pharmaceutical support",
    ],
    cta: "Explore Products",
  },
  {
    id: "diagnostics",
    icon: Microscope,
    title: "Diagnostics & Lab Services",
    tagline: "Accurate testing, made easy.",
    description: "Through our trusted partners, we provide access to essential diagnostic tests and health screenings with convenience and reliability.",
    features: [
      "Laboratory tests",
      "Routine health screenings",
      "Preventive check-ups",
      "Partner diagnostic services",
    ],
    cta: "Book a Test",
  },
]

const whoWeServe = [
  "Busy professionals",
  "Families and households",
  "Fitness and wellness enthusiasts",
  "Individuals managing chronic conditions",
  "Organizations and corporate teams",
]

const whyChooseUs = [
  {
    icon: Clock,
    title: "Convenience",
    description: "Access healthcare anytime, anywhere.",
  },
  {
    icon: Target,
    title: "Personalization",
    description: "Every service is tailored to your needs.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description: "Care delivered by qualified experts.",
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "We focus on your total wellbeing — not just symptoms.",
  },
]

export default function ServicesPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
            Comprehensive Care, Tailored to You
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            From medical consultations to lifestyle support, Allanad Healthcare Alliance offers integrated services designed to help you live healthier, every day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/booking">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Intro Section */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title="Your Health, Fully Covered"
            subtitle="Integrated healthcare for every aspect of your wellbeing"
            align="center"
          />
          <p className="text-base leading-relaxed text-muted-foreground">
            At Allanad Healthcare Alliance, we provide a wide range of healthcare and wellness services that work together to support your complete wellbeing. Whether you need medical care, preventive guidance, or lifestyle transformation, our services are designed to be accessible, personalized, and effective.
          </p>
        </div>
      </Section>

      {/* Services Breakdown */}
      <Section className="bg-muted/30">
        <SectionHeader
          title="Our Core Services"
          subtitle="Six interconnected services to support your health journey"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col border-border/50 bg-card">
              <CardContent className="flex-1 pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm font-medium text-primary/80">{service.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-foreground">What You Get:</p>
                  <ul className="space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild size="sm" className="w-full">
                  <Link href="/booking">{service.cta}</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* How Services Work Together */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title="A Connected Healthcare Experience"
            subtitle="How our services work together"
            align="center"
          />
          <p className="text-base leading-relaxed text-muted-foreground">
            At Allanad Healthcare Alliance, our services are designed to work together — not in isolation. From consultation to diagnosis, treatment, and lifestyle support, every part of your care is connected to ensure better outcomes and a smoother experience.
          </p>
        </div>
      </Section>

      {/* Who We Serve */}
      <Section className="bg-muted/30">
        <SectionHeader
          title="Who We Help"
          subtitle="Our services are designed for diverse needs"
        />
        <p className="mx-auto mb-8 max-w-3xl text-center text-base text-muted-foreground">
          Our services are designed for individuals, families, and organizations looking for reliable and modern healthcare solutions.
        </p>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {whoWeServe.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-border/50 bg-card p-4">
              <UserCheck className="h-5 w-5 shrink-0 text-primary" />
              <span className="font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-background">
        <SectionHeader
          title="Why Allanad Healthcare Alliance"
          subtitle="What sets us apart"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
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

      {/* Pricing Section */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            title="Flexible & Transparent Care"
            align="center"
          />
          <p className="text-base leading-relaxed text-muted-foreground">
            We offer flexible pricing options depending on your needs, ensuring that quality healthcare remains accessible without compromising standards.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Contact Us for Pricing</Link>
          </Button>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-primary">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground text-balance">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Your health deserves attention, care, and the right support. Let us help you get there.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="border-2 border-secondary-foreground bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link href="/contact">Speak to Our Team</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}
