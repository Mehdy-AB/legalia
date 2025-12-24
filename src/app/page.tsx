"use client"
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ChatServices from '@/components/ChatServices'
import DocumentAnalysis from '@/components/DocumentAnalysis'
import VisualRepresentation from '@/components/VisualRepresentation'
import SecuritySection from '@/components/SecuritySection'
import QuotesSection from '@/components/QuotesSection'
import FAQSection from '@/components/FAQSection'
import PricingSection from '@/components/PricingSection'

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ChatServices />
      <DocumentAnalysis />
      <VisualRepresentation />
      <SecuritySection />
      <QuotesSection />
      <FAQSection />
      <PricingSection />
    </div>
  )
}