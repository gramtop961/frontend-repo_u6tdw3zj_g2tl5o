export default function CTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(198,166,103,0.12),transparent_40%)]" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-luxe-serif text-3xl sm:text-4xl">Discover the Treasure</h2>
        <p className="mt-4 text-white/80 font-luxe-sans">Request a private viewing with our concierge team.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C6A667] text-black font-semibold font-luxe-sans">
            Book a Private Viewing
          </a>
          <a href="#" className="px-8 py-3 rounded-full border border-white/20 hover:border-white/40 transition font-luxe-sans">
            Explore More
          </a>
        </div>
      </div>
    </section>
  )
}
