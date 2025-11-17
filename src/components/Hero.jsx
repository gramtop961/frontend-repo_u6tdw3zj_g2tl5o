import Spline from '@splinetool/react-spline'

export default function Hero({ onExplore }) {
  return (
    <section className="relative h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <h1 className="font-luxe-serif text-5xl sm:text-6xl leading-tight tracking-tight">
            Sheikh’s Treasure
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/80 font-luxe-sans">
            Where Timeless Elegance Meets Modern Majesty
          </p>
          <div className="mt-10 flex items-center gap-4">
            <button onClick={onExplore} className="relative inline-flex items-center justify-center px-8 py-3 text-sm sm:text-base font-semibold font-luxe-sans text-black bg-gradient-to-r from-[#D4AF37] to-[#C6A667] rounded-full shadow-lg shadow-yellow-500/10 transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50">
              Explore the Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
