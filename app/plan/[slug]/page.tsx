import { notFound } from 'next/navigation'
import PlanDetails from '../../components/PlanDetails'
import Layout from '@/app/components/Layout'
import { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: 'Mcodev Bytes | Package Details',
  description:
    'Mcodev Bytes is a leading software development company offering web and mobile app development, AI integration, and custom enterprise solutions to drive your business success.',
  openGraph: {
    title: 'Mcodev Bytes | Innovative Software Solutions',
    description:
      'Partner with Mcodev Bytes for cutting-edge software solutions, including web and mobile app development, AI-powered tools, and enterprise software.',
    url: 'https://www.mcodevbytes.in',
    siteName: 'Mcodev Bytes',
    images: [
      {
        url: 'https://www.mcodevbytes.in/mcodev-logo-1.png',
        width: 1200,
        height: 630,
        alt: 'Mcodev Bytes Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mcodev Bytes | Innovative Software Solutions',
    description:
      'Explore Mcodev Bytes for industry-leading web and mobile app development, AI-powered tools, and enterprise software.',
    images: ['https://www.mcodevbytes.in/mcodev-logo-1.png'],
    site: '@mcodevbytes', // Replace with the official Twitter handle
  },
 icons:[
  {rel:"apple-touch-icon",url:"/apple-touch-icon.png",sizes:"180x180"},
  {rel:"icon",url:"/apple-touch-icon.png",sizes:"32x32",type:"image/png"},
  {rel:"icon",url:"/apple-touch-icon.png",sizes:"16x16",type:"image/png"},
 
 ],
 manifest:"/site.webmanifest"
};



export default function PlanPage({ params }: { params: { slug: string } }) {
  const plan = plans[params.slug as keyof typeof plans]

  if (!plan) {
    notFound()
  }

  return  ( <Layout>
    <PlanDetails plan={plan} />
    </Layout>)
}

