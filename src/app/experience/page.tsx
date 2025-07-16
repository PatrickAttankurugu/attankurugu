import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Experience - Patrick Attankurugu',
  description: 'Patrick Attankurugu\'s professional experience as Senior AI/ML Engineer at Agregar Technologies, CEO of SEMA Technologies, and AI Developer.',
  keywords: 'Patrick Attankurugu, experience, work history, Agregar Technologies, SEMA Technologies, AI developer, career',
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageTransition>
        <div className="pt-16">
          <Experience />
        </div>
        <Footer />
      </PageTransition>
    </main>
  )
}