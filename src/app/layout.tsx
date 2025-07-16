import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Patrick Attankurugu - Senior AI/ML Engineer & CEO of SEMA Technologies',
  description: 'Results-driven AI/ML Engineer with 3+ years experience in identity verification, fraud detection, and surveillance applications. Specializing in fintech security and smart city solutions.',
  keywords: 'Patrick Attankurugu, AI engineer, machine learning, SEMA Technologies, identity verification, fraud detection, deepfake detection, fintech security, Ghana technology',
  authors: [{ name: 'Patrick Attankurugu' }],
  creator: 'Patrick Attankurugu',
  publisher: 'Patrick Attankurugu',
  openGraph: {
    title: 'Patrick Attankurugu - AI/ML Engineer & CEO',
    description: 'The African AI Oracle building revolutionary predictive surveillance technology',
    url: 'https://patrickattankurugu.com',
    siteName: 'Patrick Attankurugu Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patrick Attankurugu - AI/ML Engineer & CEO',
    description: 'The African AI Oracle building revolutionary predictive surveillance technology',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}