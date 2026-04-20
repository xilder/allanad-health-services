"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/layout/page-container"
import { Quote, User } from "lucide-react"

const testimonials = [
  {
    quote: "The care I received through Allanad Healthcare Alliance was thoughtful and reassuring. I felt heard, supported, and properly guided.",
    author: "Patient",
    location: "Lagos",
    type: "Patient Testimonial",
  },
  {
    quote: "Our wellness collaboration helped employees understand their health better. The approach was practical and impactful.",
    author: "Corporate Partner",
    location: "",
    type: "Corporate Partner",
  },
  {
    quote: "The vision behind Allanad Healthcare Alliance is refreshing. It blends clinical care with forward-thinking digital health innovation.",
    author: "Healthcare Consultant",
    location: "",
    type: "Healthcare Professional",
  },
]

export function Testimonials() {
  return (
    <Section className="bg-muted/30">
      <SectionHeader
        title="What People Say"
        subtitle="Hear from patients, partners, and healthcare professionals about their experience with Allanad Healthcare Alliance."
      />
      
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="relative border-border/50 bg-card">
            <CardContent className="pt-6">
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <blockquote className="text-base leading-relaxed text-foreground">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.author}
                    {testimonial.location && `, ${testimonial.location}`}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.type}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
