import type { Metadata } from "next"
import Link from "next/link"
import { PageContainer, Section, SectionHeader } from "@/components/layout/page-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, Zap, Briefcase, MapPin, Clock, DollarSign, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Allanad Healthcare Alliance and be part of a team transforming healthcare. Explore opportunities to make a difference.",
}

const values = [
  {
    icon: Heart,
    title: "Patient Focus",
    description: "Everything we do is centered on improving patient outcomes and experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work together across disciplines to solve complex healthcare challenges.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We embrace new ideas and technologies to advance healthcare delivery.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We maintain high standards in everything we do.",
  },
]

const benefits = [
  "Competitive compensation packages",
  "Health insurance and wellness benefits",
  "Flexible work arrangements",
  "Professional development and training",
  "Collaborative and supportive team environment",
  "Opportunity to impact healthcare in Africa",
  "Career growth and advancement opportunities",
  "Comprehensive benefits package",
]

const openPositions = [
  {
    title: "Medical Doctors",
    department: "Clinical Services",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description: "Join our clinical team to provide compassionate, evidence-based care to our patients.",
  },
  {
    title: "Nurses",
    department: "Nursing Services",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description: "Be part of our nursing team delivering excellent patient care across our services.",
  },
  {
    title: "Nutritionists & Dietitians",
    department: "Nutrition Services",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description: "Help patients achieve health goals through personalized nutrition guidance.",
  },
  {
    title: "Fitness Coaches",
    department: "Wellness Services",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description: "Guide patients toward healthier lifestyles through personalized fitness programs.",
  },
  {
    title: "Health IT Specialist",
    department: "Technology",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description: "Help build and maintain our digital health infrastructure and platforms.",
  },
  {
    title: "Customer Success Manager",
    department: "Operations",
    type: "Full-time",
    location: "Lagos, Nigeria",
    description: "Ensure our clients and patients have exceptional experiences working with Allanad.",
  },
]

export default function CareersPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
            Build Your Career in Healthcare
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Join Allanad Healthcare Alliance and be part of a mission to transform healthcare through compassionate care and innovative solutions.
          </p>
        </div>
      </Section>

      {/* Why Join Us */}
      <Section className="bg-background">
        <SectionHeader
          title="Why Join Allanad Healthcare Alliance"
          subtitle="Be part of something meaningful"
          align="center"
        />
        <p className="mx-auto mb-12 max-w-3xl text-center text-base text-muted-foreground">
          We are building the future of healthcare. If you are passionate about patient care, innovation, and making a difference, we want to hear from you.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="What We Offer"
            subtitle="Comprehensive benefits and a supportive work environment"
            align="left"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                <p className="text-sm font-medium text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Open Positions */}
      <Section className="bg-background">
        <SectionHeader
          title="Open Positions"
          subtitle="Explore current opportunities"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {openPositions.map((position) => (
            <Card key={position.title} className="flex flex-col border-border/50">
              <CardContent className="flex-1 pt-6">
                <div className="mb-4 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{position.title}</h3>
                    <p className="text-sm text-primary font-medium">{position.department}</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                </div>
                
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                  {position.description}
                </p>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{position.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{position.location}</span>
                  </div>
                </div>
              </CardContent>
              <div className="border-t border-border/50 p-6">
                <Button asChild size="sm" className="w-full">
                  <Link href={`/contact?position=${position.title}`}>Apply Now</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* How to Apply */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title="How to Apply"
            align="left"
          />
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Browse Positions</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Review our open positions and find one that matches your skills and interests.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Submit Your Application</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Click "Apply Now" and submit your resume, cover letter, and any relevant information.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Interview Process</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our team will review your application and reach out if you&apos;re a good fit to schedule interviews.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Onboarding</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Once hired, you&apos;ll go through our comprehensive onboarding program to set you up for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Training & Development */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mx-auto">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Continuous Learning</h2>
          <p className="mt-4 text-muted-foreground">
            We invest in our team&apos;s professional development through ongoing training, certifications, and learning opportunities. We believe that your growth is our success.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground text-balance">
            Ready to Make a Difference?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Explore our open positions above, or reach out to our team if you have questions about working at Allanad Healthcare Alliance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact HR Team</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="border-2 border-secondary-foreground bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link href="#open-positions">View All Positions</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}
