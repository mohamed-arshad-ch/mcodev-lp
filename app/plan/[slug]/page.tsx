import { notFound } from 'next/navigation'
import PlanDetails from '../../components/PlanDetails'
import Layout from '@/app/components/Layout'

const plans = {
  'bytes-basic': {
    name: "Bytes Basic",
    price: "₹27,999",
    features: [
      { text: "One landing page built with Next.js and TailwindCSS", included: true },
      { text: "Basic SEO", included: true },
      { text: "1-year domain", included: true },
      { text: "Google Business email setup", included: true },
      { text: "Hosting server for 1 year", included: true },
      { text: "Backend API development", included: false },
      { text: "Cloud management services (AWS)", included: false },
      { text: "Complete business automation", included: false },
      { text: "WhatsApp automation", included: false },
      { text: "Custom AI chatbot", included: false },
      { text: "Advanced workflow automation", included: false },
    ],
  },
  'bytes-pro': {
    name: "Bytes Pro",
    price: "₹69,999",
    features: [
      { text: "One landing page built with Next.js and TailwindCSS", included: true },
      { text: "Basic SEO", included: true },
      { text: "1-year domain", included: true },
      { text: "Google Business email setup", included: true },
      { text: "Hosting server for 1 year", included: true },
      { text: "Backend API development", included: true },
      { text: "Cloud management services (AWS)", included: true },
      { text: "Complete business automation", included: false },
      { text: "WhatsApp automation", included: false },
      { text: "Custom AI chatbot", included: false },
      { text: "Advanced workflow automation", included: false },
    ],
  },
  'bytes-enterprise': {
    name: "Bytes Enterprise",
    price: "Contact us",
    features: [
      { text: "One landing page built with Next.js and TailwindCSS", included: true },
      { text: "Basic SEO", included: true },
      { text: "1-year domain", included: true },
      { text: "Google Business email setup", included: true },
      { text: "Hosting server for 1 year", included: true },
      { text: "Backend API development", included: true },
      { text: "Cloud management services (AWS)", included: true },
      { text: "Complete business automation", included: true },
      { text: "WhatsApp automation", included: true },
      { text: "Custom AI chatbot", included: true },
      { text: "Advanced workflow automation", included: true },
    ],
  },
}

export default function PlanPage({ params }: { params: { slug: string } }) {
  const plan = plans[params.slug as keyof typeof plans]

  if (!plan) {
    notFound()
  }

  return  ( <Layout>
    <PlanDetails plan={plan} />
    </Layout>)
}

