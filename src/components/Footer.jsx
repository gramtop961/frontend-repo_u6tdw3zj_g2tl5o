export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C6A667]" />
          <span className="font-luxe-serif text-lg">Sheikh’s Treasure</span>
        </div>
        <div className="text-white/70 text-sm font-luxe-sans">© {year} Sheikh’s Treasure. All rights reserved.</div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
