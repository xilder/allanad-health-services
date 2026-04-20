import type { Metadata } from "next"
import Link from "next/link"
import { PageContainer, Section, SectionHeader } from "@/components/layout/page-container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Download, 
  Mail,
  BookOpen,
  Cpu,
  Heart,
  Clock
} from "lucide-react"

export const metadata: Metadata = {
  title: "Wellness & Education Hub",
  description: "Access healthcare resources, wellness guides, and educational content to better understand health, prevention, and digital healthcare.",
}

const categories = ["All", "Preventive Health", "Digital Health", "Wellness"]

const articles = [
  {
    title: "The Importance of Preventive Healthcare",
    description: "Preventive care helps identify risks early and supports healthier long-term outcomes. Learn how regular screenings and lifestyle changes can protect your health.",
    category: "Preventive Health",
    readTime: "5 min read",
    featured: true,
  },
  {
    title: "Understanding Digital Health",
    description: "Digital health technologies are transforming how patients and clinicians interact with healthcare systems. Explore the future of connected care.",
    category: "Digital Health",
    readTime: "7 min read",
    featured: true,
  },
  {
    title: "Building Sustainable Wellness Habits",
    description: "Small, consistent lifestyle changes can significantly improve long-term health outcomes. Discover practical tips for lasting wellness.",
    category: "Wellness",
    readTime: "4 min read",
    featured: true,
  },
  {
    title: "Navigating Your Healthcare Journey",
    description: "Understanding how to effectively communicate with healthcare providers and make informed decisions about your care.",
    category: "Preventive Health",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "The Role of Technology in Modern Medicine",
    description: "From telemedicine to AI diagnostics, explore how technology is reshaping healthcare delivery worldwide.",
    category: "Digital Health",
    readTime: "8 min read",
    featured: false,
  },
  {
    title: "Mental Wellness in the Workplace",
    description: "Strategies for maintaining mental health and creating supportive work environments for better overall wellbeing.",
    category: "Wellness",
    readTime: "5 min read",
    featured: false,
  },
]

const guides = [
  {
    title: "Personal Preventive Health Guide",
    description: "A practical guide to understanding essential health screenings and lifestyle practices.",
    icon: Heart,
  },
  {
    title: "Workplace Wellness Toolkit",
    description: "A resource designed to help organizations create healthier work environments.",
    icon: BookOpen,
  },
]

export default function WellnessPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
            Wellness & Education Hub
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Knowledge is one of the most powerful tools for improving health. Our Wellness & Education Hub provides accessible resources to help individuals and organizations better understand health, prevention, and digital healthcare.
          </p>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-primary py-12 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Mail className="mx-auto mb-4 h-10 w-10 text-primary-foreground/80" />
          <h2 className="text-2xl font-semibold text-primary-foreground">
            Stay Informed
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            Stay informed about health insights, preventive care strategies, and emerging digital health technologies. Join our wellness newsletter.
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-xs bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </Section>

      {/* Featured Articles */}
      <Section className="bg-background">
        <SectionHeader
          title="Featured Articles"
          subtitle="Expert insights on preventive care, digital health, and wellness"
        />
        
        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.title} className="group overflow-hidden border-border/50 transition-all hover:border-primary/30 hover:shadow-lg">
              <div className="h-48 bg-muted" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-lg leading-snug">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-2 text-sm">
                  {article.description}
                </CardDescription>
                <Button variant="link" className="mt-4 h-auto p-0 text-primary" asChild>
                  <Link href="#" className="flex items-center gap-1">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Downloadable Guides */}
      <Section id="guides" className="bg-muted/30">
        <SectionHeader
          title="Downloadable Guides"
          subtitle="Practical resources to support your health journey"
        />
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <Card key={guide.title} className="border-border/50">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <guide.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{guide.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{guide.description}</p>
                  <Button variant="outline" size="sm" className="mt-4 gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </PageContainer>
  )
}
