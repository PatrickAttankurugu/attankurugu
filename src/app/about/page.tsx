import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'About Patrick Attankurugu - AI/ML Engineer',
  description: 'Learn about Patrick Attankurugu\'s journey as a Senior AI/ML Engineer specializing in identity verification, fraud detection, and surveillance applications.',
  keywords: 'Patrick Attankurugu, about, AI engineer, machine learning, Ghana, computer science, SEMA Technologies',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageTransition>
        <div className="pt-16">
          <About />
        </div>
        <Footer />
      </PageTransition>
    </main>
  )
}