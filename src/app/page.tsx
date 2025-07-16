import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageTransition>
        <div id="home">
          <Hero />
        </div>
        <Footer />
      </PageTransition>
    </main>
  )
}