import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Projects - Patrick Attankurugu',
  description: 'Explore Patrick Attankurugu\'s AI/ML projects including SEMA Technologies, KYC/KYB platforms, and deepfake detection systems.',
  keywords: 'Patrick Attankurugu, projects, SEMA Technologies, AI projects, fraud detection, deepfake detection, identity verification',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageTransition>
        <div className="pt-16">
          <Projects />
        </div>
        <Footer />
      </PageTransition>
    </main>
  )
}