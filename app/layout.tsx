import type { Metadata } from 'next'
import './globals.css'

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
