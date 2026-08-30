import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream pt-16 pb-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-cream flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="REAL.CO Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-cream leading-none mb-1">
                REAL.CO
              </span>
              <span className="text-[9px] tracking-widest text-cream/70 leading-none uppercase">
                Hair Studio & Mini Cafe
              </span>
            </div>
          </Link>
          <p className="text-cream/80 font-serif text-lg leading-relaxed max-w-xs font-medium">Where style <br />meets comfort.</p>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h3 className="font-medium tracking-[0.15em] text-[10px] text-cream/50 uppercase">TAUTAN</h3>
          <ul className="space-y-3 text-[11px] font-medium tracking-wide text-cream">
            <li><Link href="/" className="hover:text-gold transition-colors">Beranda</Link></li>
            <li><Link href="/#hair-studio" className="hover:text-gold transition-colors">Hair Studio</Link></li>
            <li><Link href="/#kafe" className="hover:text-gold transition-colors">Kafe</Link></li>
            <li><Link href="/#services" className="hover:text-gold transition-colors">Layanan</Link></li>
            <li><Link href="/#ruang-kami" className="hover:text-gold transition-colors">Ruang Kami</Link></li>
            <li><Link href="/#visit" className="hover:text-gold transition-colors">Kontak</Link></li>
          </ul>
        </div>

        {/* Hair Studio & Kafe (Combined for space or separate) */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="font-medium tracking-[0.15em] text-[10px] text-cream/50 uppercase">HAIR STUDIO</h3>
            <ul className="space-y-3 text-[11px] font-medium tracking-wide text-cream">
              <li><Link href="/#services" className="hover:text-gold transition-colors">Layanan</Link></li>
              <li><Link href="/#hair-studio" className="hover:text-gold transition-colors">Tim Capster</Link></li>
              <li><Link href="/booking" className="hover:text-gold transition-colors">Booking</Link></li>
              <li><Link href="/#services" className="hover:text-gold transition-colors">Harga</Link></li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="font-medium tracking-[0.15em] text-[10px] text-cream/50 uppercase">KAFE</h3>
            <ul className="space-y-3 text-[11px] font-medium tracking-wide text-cream">
              <li><Link href="/#kafe" className="hover:text-gold transition-colors">Menu Lengkap</Link></li>
              <li><Link href="/#kafe" className="hover:text-gold transition-colors">Harga</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="font-medium tracking-[0.15em] text-[10px] text-cream/50 uppercase">SOSIAL MEDIA</h3>
            <ul className="space-y-3 text-[11px] font-medium tracking-wide text-cream">
              <li><a href="https://instagram.com/real_co" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="https://tiktok.com/@real.co.id" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">TikTok</a></li>
              <li><a href="https://wa.me/62881036695165" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Kritik dan Saran */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-cream/10 text-center">
        <h3 className="font-medium tracking-[0.15em] text-[10px] text-cream/50 uppercase mb-4">PUNYA KRITIK & SARAN?</h3>
        <a href="https://wa.me/62881036695165?text=Halo%20REAL.CO,%20saya%20ingin%20memberikan%20kritik%20dan%20saran:" target="_blank" rel="noreferrer" className="inline-block border border-gold/30 text-gold px-8 py-3 text-[10px] font-bold tracking-[0.2em] hover:bg-gold hover:text-forest transition-colors uppercase">
          KIRIM MASUKAN VIA WHATSAPP
        </a>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/10 text-left text-[10px] text-cream/40 flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; 2026 REAL.CO Hair Studio & Mini Cafe. All rights reserved.</p>
      </div>
    </footer>
  );
}
