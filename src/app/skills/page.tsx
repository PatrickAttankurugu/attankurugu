import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Skills - Patrick Attankurugu',
  description: 'Comprehensive overview of Patrick Attankurugu\'s technical skills in AI/ML, programming, and specialized domains like identity verification and fraud detection.',
  keywords: 'Patrick Attankurugu, skills, Python, PyTorch, TensorFlow, AI/ML, identity verification, fraud detection, technical skills',
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageTransition>
        <div className="pt-16">
          <Skills />
        </div>
        <Footer />
      </PageTransition>
    </main>
  )
}