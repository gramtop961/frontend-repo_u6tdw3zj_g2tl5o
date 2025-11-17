const quotes = [
  {
    text: 'A quietly dazzling expression of refinement. Every detail whispers luxury.',
    author: 'L. Al Maktoum'
  },
  {
    text: 'Understated, exquisite, and truly timeless—jewellery worth passing down.',
    author: 'S. Al Qasimi'
  },
  {
    text: 'An ode to heritage with a modern soul. Flawless craftsmanship.',
    author: 'R. Al Nahyan'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-pearl text-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-luxe-serif text-3xl sm:text-4xl mb-12">Client Impressions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.author} className="p-6 rounded-2xl bg-white/70 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-black/80 leading-relaxed italic">“{q.text}”</p>
              <p className="mt-4 text-black/60 font-luxe-sans">— {q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
