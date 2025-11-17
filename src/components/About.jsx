export default function About() {
  return (
    <section id="about" className="bg-white text-black py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-luxe-serif text-3xl sm:text-4xl">A Legacy Forged in Gold</h2>
          <p className="text-black/70 leading-relaxed font-luxe-sans">
            Born from the heart of the Arabian Peninsula, Sheikh’s Treasure celebrates a lineage of artistry, devotion, and distinction. Each creation embodies the opulence of Middle Eastern heritage—reimagined through a modern, minimalist lens.
          </p>
          <p className="text-black/70 leading-relaxed font-luxe-sans">
            From hand-selected gemstones to the glow of 18K gold, our pieces are crafted to be heirlooms—moments of majesty designed to be cherished for generations.
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-onyx">
          <img src="https://images.unsplash.com/photo-1603574670812-d24560880210?q=80&w=1640&auto=format&fit=crop" alt="Fine jewellery artisan" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}
