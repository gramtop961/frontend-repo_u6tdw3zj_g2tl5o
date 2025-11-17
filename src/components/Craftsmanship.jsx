export default function Craftsmanship() {
  return (
    <section id="craft" className="bg-white text-black py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1600&auto=format&fit=crop" alt="18K gold and gemstones" className="w-full h-[28rem] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
        </div>
        <div className="space-y-6">
          <h2 className="font-luxe-serif text-3xl sm:text-4xl">Craftsmanship & Materials</h2>
          <ul className="space-y-3 text-black/70 leading-relaxed font-luxe-sans">
            <li>• Hand-selected gemstones of rare clarity and color</li>
            <li>• 18K gold with enduring brilliance</li>
            <li>• Meticulous detailing by master artisans</li>
            <li>• Designed for balance, comfort, and longevity</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
