import { useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Collections from './components/Collections'
import Craftsmanship from './components/Craftsmanship'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const collectionsRef = useRef(null)

  const handleExplore = () => {
    collectionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-luxe-serif text-lg">Sheikh’s Treasure</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-white/80 hover:text-white">About</a>
            <a href="#collections" className="text-white/80 hover:text-white">Collections</a>
            <a href="#craft" className="text-white/80 hover:text-white">Craft</a>
            <a href="#testimonials" className="text-white/80 hover:text-white">Impressions</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C6A667] text-black text-sm font-semibold font-luxe-sans">Private Viewing</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero onExplore={handleExplore} />
        <About />
        <div ref={collectionsRef}>
          <Collections />
        </div>
        <Craftsmanship />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
