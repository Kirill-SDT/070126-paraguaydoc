import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import PriceListSection from '@/components/PriceListSection'
import TimelineSection from '@/components/TimelineSection'
import AdditionalServicesSection from '@/components/AdditionalServicesSection'
import ChecklistSection from '@/components/ChecklistSection'
import TrustSection from '@/components/TrustSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <PriceListSection />
      <TimelineSection />
      <AdditionalServicesSection />
      <ChecklistSection />
      <TrustSection />
    </div>
  )
}
