import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream pt-16 pb-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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

        {/* Hair Studio & Kafe (Combined for space or separate) */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="font-medium tracking-[0.15em] text-[10px] text-cream/50 uppercase">HAIR STUDIO</h3>
            <ul className="space-y-3 text-[11px] font-medium tracking-wide text-cream">
              <li><Link href="/#hair-studio" className="hover:text-gold transition-colors">Tim Capster</Link></li>
              <li><Link href="/booking" className="hover:text-gold transition-colors">Booking</Link></li>
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
              <li>
                <a href="https://www.instagram.com/real._co?igsi=Ynd6NGE3MG5sdnE%3D&utm_source=qr" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@real.co.caffe?_r=1&_t=ZS-99Qapw29PQC" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://wa.me/62881036695165" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                  </svg>
                  WhatsApp
                </a>
              </li>
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
