import type { Metadata } from "next"
import { PageContainer, Section } from "@/components/layout/page-container"
import { BookingForm } from "@/components/booking/booking-form"
import { CheckCircle2, Calendar, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule a consultation with Allanad Healthcare Alliance. Book your appointment online and receive personalized healthcare guidance.",
}

const steps = [
  "Select the service you need",
  "Choose a convenient date and time",
  "Enter your contact information",
  "Confirm your appointment",
]

const features = [
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose a date and time that works for you",
  },
  {
    icon: Clock,
    title: "Quick Confirmation",
    description: "Receive confirmation via email and WhatsApp",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your information is protected and confidential",
  },
]

export default function BookingPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background pb-8 lg:pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
            Book an Appointment
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Schedule a consultation with our healthcare professionals to receive personalized guidance and support. Appointments are designed to provide thoughtful, patient-centered care tailored to your needs.
          </p>
        </div>
      </Section>

      {/* Booking Steps */}
      <Section className="bg-background py-8 lg:py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            How It Works
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </div>
                <p className="text-sm text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Booking Form Section */}
      <Section className="bg-muted/30 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 font-semibold text-foreground">Why Book With Us</h3>
                <div className="space-y-4">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{feature.title}</p>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 font-semibold text-foreground">After Booking</h3>
                <ul className="space-y-2">
                  {[
                    "You will receive confirmation via email",
                    "WhatsApp notification will be sent",
                    "Reminder before your appointment",
                    "Easy rescheduling if needed",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}
