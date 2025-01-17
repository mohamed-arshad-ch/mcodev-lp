import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head';


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
