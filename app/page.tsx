import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import AboutUsSection from './components/AboutUsSection'
import ServicesSection from './components/ServicesSection'
import FeaturesHighlightsSection from './components/FeaturesHighlightsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <FeaturesHighlightsSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  )
}

