import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Contact Patrick Attankurugu',
  description: 'Get in touch with Patrick Attankurugu for AI/ML consulting, project collaboration, or professional services. Based in Accra, Ghana.',
  keywords: 'Patrick Attankurugu, contact, AI consulting, collaboration, Accra Ghana, hire AI engineer',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageTransition>
        <div className="pt-16">
          <Contact />
        </div>
        <Footer />
      </PageTransition>
    </main>
  )
}