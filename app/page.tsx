import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import AboutUsSection from './components/AboutUsSection'
import ServicesSection from './components/ServicesSection'
import FeaturesHighlightsSection from './components/FeaturesHighlightsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Head from 'next/head'
import { Metadata } from 'next'



const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mcodev Bytes",
  "url": "https://www.mcodevbytes.com",
  "logo": "https://www.mcodevbytes.com/assets/images/branding/mcodev-logo.jpg",
  "description": "Mcodev Bytes is a leading software development company offering cutting-edge solutions in web development, mobile apps, AI integration, and custom enterprise software.",
  "sameAs": [
    "https://www.facebook.com/mcodevbytes",
    "https://www.twitter.com/mcodevbytes",
    "https://www.linkedin.com/company/mcodevbytes"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9876543210",
    "contactType": "Customer Service",
    "areaServed": "IN",
    "availableLanguage": "English"
  }
}


export const metadata: Metadata = {
  title: 'Mcodev Bytes | Innovative Software Solutions',
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




export default function Home() {
  return (
    <Layout>
     
      <Head>
      {/* <!-- Primary Title --> */}
<title>Mcodev Bytes | Innovative Software Solutions for Businesses</title>

{/* <!-- Meta Description --> */}
<meta 
  name="description" 
  content="Mcodev Bytes is a leading software development company offering cutting-edge solutions in web development, mobile apps, AI integration, and custom enterprise software. Your technology partner for success."
/>

{/* <!-- Meta Keywords --> */}
<meta 
  name="keywords" 
  content="Mcodev Bytes, software development, web development, mobile app development, AI solutions, enterprise software, custom software, IT consulting, business technology solutions, digital transformation"
/>

{/* <!-- Open Graph (OG) Tags for Social Media --> */}
<meta property="og:title" content="Mcodev Bytes | Innovative Software Solutions for Businesses" />
<meta property="og:description" content="Partner with Mcodev Bytes for web and mobile app development, AI-powered tools, and enterprise software. Drive growth with state-of-the-art technology solutions." />
<meta property="og:image" content="https://www.mcodevbytes.in/mcodev-logo-1.png" />
<meta property="og:url" content="https://www.mcodevbytes.in" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Mcodev Bytes" />

{/* <!-- Twitter Card Data --> */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Mcodev Bytes | Innovative Software Solutions for Businesses" />
<meta name="twitter:description" content="Explore Mcodev Bytes for cutting-edge software development solutions, including web and mobile apps, AI tools, and enterprise software." />
<meta name="twitter:image" content="https://www.mcodevbytes.in/mcodev-logo-1.png" />
<meta name="twitter:site" content="@mcodevbytes" />

{/* <!-- Canonical URL --> */}
<link rel="canonical" href="https://www.mcodevbytes.in/" />

{/* <!-- Robots Meta Tag --> */}
<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />




{/* <!-- Additional Schema.org JSO
N-LD Structured Data --> */}
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
       
      </Head>


      
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <FeaturesHighlightsSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  )
}

