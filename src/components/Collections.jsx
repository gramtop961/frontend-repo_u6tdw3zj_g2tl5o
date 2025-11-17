const items = [
  { title: 'Rings', image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSaW5nc3xlbnwwfDB8fHwxNzYzNDAyNjk1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Necklaces', image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Bracelets', image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSaW5nc3xlbnwwfDB8fHwxNzYzNDAyNjk1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Earrings', image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSaW5nc3xlbnwwfDB8fHwxNzYzNDAyNjk1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function Collections() {
  return (
    <section id="collections" className="bg-pearl text-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-luxe-serif text-3xl sm:text-4xl">Featured Collections</h2>
          <a href="#" className="text-amber-600 hover:text-amber-700 font-luxe-sans">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <a key={item.title} href="#" className="group relative overflow-hidden rounded-2xl bg-black">
              <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37]/90 to-[#C6A667]/90 text-black text-sm font-semibold font-luxe-sans">
                  {item.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
