import { PageContainer } from "@/components/layout/page-container"
import { Hero } from "@/components/home/hero"
import { ServicesOverview } from "@/components/home/services-overview"
import { Testimonials } from "@/components/home/testimonials"
import { FounderMessage } from "@/components/home/founder-message"
import { CTABanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <PageContainer>
      <Hero />
      <ServicesOverview />
      <Testimonials />
      <FounderMessage />
      <CTABanner />
    </PageContainer>
  )
}
