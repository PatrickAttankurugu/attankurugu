import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Services - Patrick Attankurugu',
  description: 'Professional services offered by Patrick Attankurugu including CV writing, website development, and AI consulting for businesses.',
  keywords: 'Patrick Attankurugu, services, CV writing, website development, AI consulting, freelance, professional services',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageTransition>
        <div className="pt-16">
          <Services />
        </div>
        <Footer />
      </PageTransition>
    </main>
  )
}