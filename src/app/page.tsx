"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Coffee, Armchair, CalendarCheck, ArrowRight, ChevronDown, ChevronUp, Star, StarHalf } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'hair' | 'cafe'>('hair');
  const [showAllCafe, setShowAllCafe] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] bg-forest-dark flex items-start lg:items-center overflow-hidden pt-[80px] lg:pt-20 pb-10 lg:pb-0">
        <div className="max-w-6xl mx-auto w-full px-6 flex flex-col lg:flex-row relative z-10 h-full">
          
          {/* Text Section */}
          <div className="w-full lg:w-[50%] pt-2 pb-6 lg:py-12 flex flex-col justify-start lg:justify-center">
            <p className="text-cream/80 font-bold tracking-[0.3em] text-[9px] sm:text-[10px] uppercase mb-2 lg:mb-3">
              REAL.CO
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4rem] text-cream leading-[1.05] mb-3 lg:mb-4 animate-fade-in-up font-bold">
              WHERE<br />STYLE<br />
              <span className="text-gold">MEETS<br />COMFORT</span>
            </h1>
            
            <p className="text-cream/70 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-sm mb-4 lg:mb-4">
              Hair Studio & Mini Cafe Premium di Malang.
            </p>

            {/* Google Rating */}
            <div className="flex items-center gap-2 mb-5 lg:mb-6">
              <div className="flex text-gold">
                {[1, 2, 3, 4].map(i => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />)}
                <StarHalf className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
              </div>
              <div className="text-[9px] sm:text-[10px] tracking-widest text-cream/70 font-medium uppercase">
                <span className="text-cream">4.5/5</span> DARI 26 ULASAN
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 lg:mb-8">
              <Link 
                href="/booking" 
                className="w-full sm:w-auto bg-gold text-forest-dark px-8 py-3 lg:px-10 lg:py-4 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] hover:bg-cream transition-colors uppercase text-center"
              >
                BOOKING SEKARANG
              </Link>
              <Link 
                href="#kafe" 
                className="w-full sm:w-auto border border-cream/20 text-cream px-8 py-3 lg:px-10 lg:py-4 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] hover:border-cream transition-colors uppercase text-center"
              >
                LIHAT MENU
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 text-[10px] tracking-[0.15em] font-medium uppercase pb-4 lg:pb-0">
              <div>
                <p className="mb-1.5 text-gold font-bold tracking-[0.2em]">LOKASI</p>
                <p className="text-cream/90 leading-relaxed">
                  Jl Ir. Soekarno, No.7,<br />
                  Dadaprejo, Junrejo, Batu
                </p>
              </div>
              <div>
                <p className="mb-1.5 text-gold font-bold tracking-[0.2em]">BUKA SETIAP HARI</p>
                <p className="text-cream/90 leading-relaxed">
                  09.00 - 21.00 <br />
                  Jumat: 13.00 - 21.00
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Background Image (Right Side Overlay) */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full opacity-30 lg:opacity-100 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/80 to-transparent lg:via-transparent z-10" />
          <Image 
            src="/images/hero-banner-hd-wide.jpg" 
            alt="REAL.CO Barber and Cafe experience" 
            fill
            className="object-cover object-[30%_center] lg:object-center"
            priority
            quality={90}
          />
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="bg-off-white py-12 md:py-16 px-6 border-b border-forest-dark/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-y-12 lg:gap-6 lg:divide-x divide-forest-dark/10">
          {[
            { icon: Scissors, title: "BARBER PROFESIONAL", desc: "Hasil rapi, presisi, dan sesuai gayamu." },
            { icon: Coffee, title: "KOPI BERKUALITAS", desc: "Biji pilihan, racikan terbaik setiap harinya." },
            { icon: Armchair, title: "TEMPAT NYAMAN", desc: "Suasana santai untuk gaya dan relaksasi." },
            { icon: CalendarCheck, title: "BOOKING MUDAH", desc: "Atur jadwalmu dengan mudah dan tanpa antri." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-2 sm:px-8">
              <div className="flex flex-col items-center gap-2 mb-3">
                <item.icon className="w-6 h-6 text-forest-dark mb-1" strokeWidth={1} />
                <h3 className="font-medium tracking-[0.15em] text-[9px] md:text-[10px] text-forest-dark uppercase">{item.title}</h3>
              </div>
              <p className="text-forest-dark/60 text-[10px] md:text-xs font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HAIR STUDIO SECTION */}
      <section id="hair-studio" className="scroll-mt-[100px] py-24 px-6 bg-forest">
        <div className="max-w-6xl mx-auto">
          
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-[10px] tracking-[0.2em] font-medium uppercase mb-4">HAIR STUDIO</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-cream leading-tight mb-4 font-bold">
              GAYA TERBAIK DIMULAI DARI SINI
            </h2>
            <p className="text-cream/60 max-w-md mx-auto text-sm font-light">Pilih capster favoritmu dan dapatkan pengalaman grooming terbaik.</p>
          </FadeIn>

          {/* Barber Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
            {[
              { 
                id: 'B1',
                name: "BERYL", 
                role: "CAPSTER", 
                specialty: "Classic & Gentleman Cut",
                bio: "Spesialis potongan rambut klasik dan rapi. Pilihan tepat untuk eksekutif yang menginginkan tampilan profesional dan elegan.",
                price: "Rp 50.000", 
                image: "/images/barbers/beryl.jpg" 
              },
              { 
                id: 'B2',
                name: "IKMAL", 
                role: "CAPSTER", 
                specialty: "Modern Fade & Crop",
                bio: "Ahli dalam gaya potongan kekinian dengan teknik fade yang mulus. Sangat detail dan selalu up-to-date dengan tren masa kini.",
                price: "Rp 50.000", 
                image: "/images/barbers/ikmal.jpg" 
              },
              { 
                id: 'B3',
                name: "FAHRIZAL", 
                role: "CAPSTER", 
                specialty: "Hair Color & Treatment",
                bio: "Pakar pewarnaan dan perawatan rambut. Memastikan rambutmu tidak hanya tampil keren dengan warna baru, tapi juga tetap sehat.",
                price: "Rp 50.000", 
                image: "/images/barbers/fahrizal.jpg" 
              },
            ].map((barber, idx) => (
              <FadeIn key={barber.name} delay={idx * 0.2}>
                <Link href={`/booking?barber=${barber.id}`} className="group cursor-pointer block h-full">
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-forest-dark/50 shadow-2xl mb-6">
                    <Image src={barber.image} alt={barber.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Clean Bottom Overlay inside Image */}
                    <div className="absolute bottom-0 left-0 w-full p-5 flex justify-between items-end">
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-cream mb-1">{barber.name}</h3>
                        <p className="text-[9px] font-bold tracking-[0.2em] text-gold uppercase">{barber.role}</p>
                      </div>
                      <span className="text-cream text-sm font-serif font-bold">{barber.price}</span>
                    </div>
                  </div>
                  
                  {/* Text Content Below Image */}
                  <div className="px-2 text-center md:text-left">
                    <p className="text-[10px] font-bold tracking-[0.15em] text-gold uppercase mb-3">{barber.specialty}</p>
                    <p className="text-cream/70 text-xs md:text-sm font-light leading-relaxed mb-5">
                      {barber.bio}
                    </p>
                    <span className="inline-flex items-center text-[9px] font-medium tracking-[0.15em] text-cream uppercase group-hover:text-gold transition-colors">
                      Booking Barber Ini <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          
          <div className="flex justify-center">
            <a href="#services" className="inline-flex items-center text-[10px] font-medium tracking-[0.15em] text-cream hover:text-gold transition-colors uppercase border border-cream/20 px-8 py-4 hover:border-gold">
              LIHAT SEMUA LAYANAN <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>



      {/* CAFE SECTION */}
      <section id="kafe" className="scroll-mt-[100px] py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-forest-dark leading-tight mb-4 font-bold tracking-tight">
              SIGNATURE COFFEE
            </h2>
            <p className="text-forest-dark/60 max-w-md mx-auto text-sm font-medium">
              Racikan terbaik untuk menemani harimu.
            </p>
          </FadeIn>

          {/* Signature Menu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            {[
              { name: "MOUNT BLANC", desc: "Espresso, Orange juice, Foam Cloud", price: "RP 25.000", image: "/images/menu/mount-blanc.jpg", badge: "SIGNATURE" },
              { name: "BUTTERSCOTCH SEASALT LATTE", desc: "Espresso, Butterscotch, Seasalt", price: "RP 24.000", image: "/images/menu/butterscotch-seasalt.jpg", badge: "BEST SELLER" },
            ].map((item, idx) => (
              <FadeIn key={item.name} delay={idx * 0.2} direction="up" className="flex flex-col sm:flex-row bg-white border border-forest-dark/5 hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full sm:w-[45%] aspect-[4/5] sm:aspect-[4/5] overflow-hidden bg-forest-dark/5 shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-5 sm:p-5 lg:p-6 flex flex-col justify-center sm:w-[55%] text-center sm:text-left overflow-hidden">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-gold uppercase mb-3">{item.badge}</span>
                  <h3 className="text-lg lg:text-xl text-forest-dark font-extrabold mb-2 tracking-tight">{item.name}</h3>
                  <p className="text-forest-dark/60 text-[11px] font-medium leading-relaxed mb-6">{item.desc}</p>
                  <p className="font-bold text-forest-dark text-lg">{item.price}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mb-12">
            <h3 className="text-2xl text-forest-dark font-bold tracking-tight">ALL MENU</h3>
          </FadeIn>

          {/* Cafe Menu Grid Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { name: "PEACH GODDES", desc: "Espresso, Fruit syrup, Cloud Foam", price: "RP 23.000", image: "/images/menu/peach-goddess.jpg" },
              { name: "AMERICANO PEACH COFFE", desc: "Espresso with Peach syrup", price: "RP 21.000", image: "/images/menu/americano-peach.jpg" },
              { name: "AMERICANO ICE/HOT", desc: "Espresso beans Rubusta & arabica", price: "RP 17.000", image: "/images/menu/americano.jpg" },
              { name: "CAFFE LATTE ICE/HOT", desc: "Espresso, Milk and Foam Milk", price: "RP 19.000", image: "/images/menu/caffe-latte.jpg" },
              { name: "CHEESE COFFE", desc: "Espresso, Condensed Milk, Cheese cloud", price: "RP 21.000", image: "/images/menu/cheese-coffee.jpg" },
              { name: "LYCHEE TEA", desc: "Lychee syrup, Green Tea, Lychee fruit", price: "RP 18.000", image: "/images/menu/lychee-tea.jpg" },
              { name: "MATCHA LATTE", desc: "Matcha Premium, Milk, Vanilla Syrup", price: "RP 23.000", image: "/images/menu/matcha-latte.jpg" },
              { name: "CHOCO CHEESE", desc: "Chocolate Malt, Milk, Foam Cheese", price: "RP 20.000", image: "/images/menu/choco-cheese.jpg" },
              { name: "WINE OF ARABIC", desc: "Grape syrup, Espresso, kismis", price: "RP 21.000", image: "/images/menu/wine-arabic.jpg" }
            ].map((item, idx) => (
              <FadeIn key={item.name} delay={(idx % 4) * 0.1} className={`bg-white group cursor-pointer border border-forest-dark/5 hover:shadow-xl transition-shadow duration-300 ${!showAllCafe && idx >= 4 ? 'max-md:hidden' : ''}`}>
                <div className="relative aspect-square overflow-hidden bg-forest-dark/5 w-full">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-4 md:p-5 text-center">
                  <h3 className="font-extrabold text-forest-dark tracking-widest text-[10px] md:text-xs mb-1.5 leading-snug">{item.name}</h3>
                  <p className="text-forest-dark/60 font-medium text-[9px] md:text-[10px] mb-3 min-h-[28px] md:min-h-[30px]">{item.desc}</p>
                  <p className="font-bold text-forest-dark text-xs md:text-sm">{item.price}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {!showAllCafe && (
            <div className="mt-12 flex justify-center md:hidden">
              <button 
                onClick={() => setShowAllCafe(true)}
                className="text-[10px] font-bold tracking-[0.2em] text-forest-dark border-b border-forest-dark hover:text-gold hover:border-gold transition-colors uppercase pb-1"
              >
                LIHAT SEMUA MENU (9)
              </button>
            </div>
          )}
          {showAllCafe && (
            <div className="mt-12 flex justify-center md:hidden">
              <button 
                onClick={() => setShowAllCafe(false)}
                className="text-[10px] font-bold tracking-[0.2em] text-forest-dark border-b border-forest-dark hover:text-gold hover:border-gold transition-colors uppercase pb-1"
              >
                TUTUP MENU
              </button>
            </div>
          )}
          
        </div>
      </section>

      {/* HIGHLIGHTS SECTION (3 VERTICAL VIDEOS) */}
      <section id="ruang-kami" className="scroll-mt-[100px] py-24 px-6 bg-forest-dark overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-[10px] tracking-[0.2em] font-medium uppercase mb-4">Galeri Kami</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-cream leading-tight">
              SUASANA STUDIO KAMI
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-4xl mx-auto items-center">
            {/* Video 1 */}
            <FadeIn delay={0} direction="up" className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group bg-forest/50 border border-white/10 mt-0 md:mt-12 lg:mt-16">
              <video 
                src="/videos/barber.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest-dark flex items-center justify-center -z-10">
                <span className="text-cream/30 text-xs tracking-widest uppercase">Video 1</span>
              </div>
            </FadeIn>
            
            {/* Video 2 */}
            <FadeIn delay={0.2} direction="up" className={`relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group bg-forest/50 border border-white/10 mt-0 md:-mt-8 lg:-mt-12 ${!showAllVideos ? 'max-md:hidden' : ''}`}>
              <video 
                src="/videos/CAFE.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest-dark flex items-center justify-center -z-10">
                <span className="text-cream/30 text-xs tracking-widest uppercase">Video 2</span>
              </div>
            </FadeIn>

            {/* Video 3 */}
            <FadeIn delay={0.4} direction="up" className={`relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group bg-forest/50 border border-white/10 mt-0 md:mt-12 lg:mt-16 ${!showAllVideos ? 'max-md:hidden' : ''}`}>
              <video 
                src="/videos/barber (2).mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest-dark flex items-center justify-center -z-10">
                <span className="text-cream/30 text-xs tracking-widest uppercase">Video 3</span>
              </div>
            </FadeIn>
          </div>

          {!showAllVideos && (
            <div className="mt-8 flex justify-center md:hidden">
              <button 
                onClick={() => setShowAllVideos(true)}
                className="flex items-center gap-2 border border-cream/20 text-cream px-6 py-3 text-[10px] font-bold tracking-[0.15em] uppercase"
              >
                LIHAT LAINNYA <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
          {showAllVideos && (
            <div className="mt-8 flex justify-center md:hidden">
              <button 
                onClick={() => setShowAllVideos(false)}
                className="flex items-center gap-2 border border-cream/20 text-cream px-6 py-3 text-[10px] font-bold tracking-[0.15em] uppercase"
              >
                TUTUP <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SERVICES MENU SECTION */}
      <section id="services" className="scroll-mt-[100px] py-16 md:py-24 px-6 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-forest-dark/50 text-[10px] tracking-[0.2em] font-medium uppercase mb-4">Daftar Harga</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-forest-dark leading-tight">
              LAYANAN KAMI
            </h2>
          </div>
          
          <div className="flex justify-center gap-4 mb-10">
            <button 
              onClick={() => setActiveTab('hair')}
              className={`px-6 py-3 text-[10px] font-bold tracking-[0.15em] uppercase border transition-colors ${activeTab === 'hair' ? 'bg-forest-dark text-cream border-forest-dark' : 'bg-transparent text-forest-dark border-forest-dark/20'}`}
            >
              Hair Studio
            </button>
            <button 
              onClick={() => setActiveTab('cafe')}
              className={`px-6 py-3 text-[10px] font-bold tracking-[0.15em] uppercase border transition-colors ${activeTab === 'cafe' ? 'bg-forest-dark text-cream border-forest-dark' : 'bg-transparent text-forest-dark border-forest-dark/20'}`}
            >
              Mini Cafe
            </button>
          </div>

          <div className="flex flex-col gap-12 md:gap-20">
            {/* Barber Menu */}
            <div className={activeTab === 'hair' ? 'block' : 'hidden'}>
              <h3 className="font-medium tracking-[0.15em] text-lg text-forest-dark mb-8 md:mb-10 uppercase border-b border-forest-dark/10 pb-4 text-center">Hair Studio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 md:gap-y-8">
                {[
                  { name: "Premium Haircut", desc: "Konsultasi, potong, cuci, styling, dan pijat ringan.", price: "Rp 60.000" },
                  { name: "Basic Haircut", desc: "Potong rambut standar dengan hasil presisi.", price: "Rp 45.000" },
                  { name: "Hot Towel Shave", desc: "Cukur kumis/jenggot dengan handuk hangat.", price: "Rp 35.000" },
                  { name: "Hair Color / Highlight", desc: "Pewarnaan rambut profesional (bleach & color).", price: "Mulai Rp 150.000" },
                  { name: "Kids Haircut", desc: "Potong rambut khusus anak di bawah 12 tahun.", price: "Rp 40.000" },
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-forest-dark font-medium text-base group-hover:text-gold transition-colors">{item.name}</h4>
                      <div className="flex-1 border-b border-dotted border-forest-dark/20 mx-4 relative top-[-6px]"></div>
                      <span className="text-forest-dark font-serif font-bold">{item.price}</span>
                    </div>
                    <p className="text-forest-dark/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cafe Menu */}
            <div className={activeTab === 'cafe' ? 'block' : 'hidden'}>
              <h3 className="font-medium tracking-[0.15em] text-lg text-forest-dark mb-8 md:mb-10 uppercase border-b border-forest-dark/10 pb-4 text-center">Mini Cafe</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 md:gap-y-8">
                {[
                  { name: "Spesial Mount Blanc", desc: "Espresso, Orange juice, Foam Cloud, dengan topping Parutan Jeruk.", price: "Rp 25.000" },
                  { name: "Peach Goddes", desc: "Espresso, Fruit syrup, and Cloud Foam with beans topping.", price: "Rp 23.000" },
                  { name: "Americano Peach Coffe", desc: "Espresso with Peach syrup and dried orange.", price: "Rp 21.000" },
                  { name: "Butterschotch Seasalt Latte", desc: "Espresso, Butterschotch, Seasalt with Foam Cloud and Biscuit Topping.", price: "Rp 24.000" },
                  { name: "Americano ICE/HOT", desc: "Espresso beans Rubusta & arabica.", price: "Rp 17.000" },
                  { name: "Caffe Latte ICE/HOT", desc: "Espresso, Milk and Foam Milk.", price: "Rp 19.000" },
                  { name: "Cheese Coffe", desc: "Espresso, Sweetened Condensed Milk, and Cream cheese cloud.", price: "Rp 21.000" },
                  { name: "Lychee Tea", desc: "Lychee syrup, Green Tea and Lychee fruit.", price: "Rp 18.000" },
                  { name: "Matcha Latte", desc: "Matcha Premium, Milk, And Vanilla Syrup.", price: "Rp 23.000" },
                  { name: "Choco Cheese", desc: "Chocolate Malt, Milk and Foam Cheese dan taburan coklat.", price: "Rp 20.000" },
                  { name: "Wine of Arabic", desc: "Perpaduan Grape syrup, Espresso dan kismis khas arab sebagai topping.", price: "Rp 21.000" },
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-forest-dark font-medium text-base group-hover:text-gold transition-colors">{item.name}</h4>
                      <div className="flex-1 border-b border-dotted border-forest-dark/20 mx-4 relative top-[-6px]"></div>
                      <span className="text-forest-dark font-serif font-bold">{item.price}</span>
                    </div>
                    <p className="text-forest-dark/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <a href="/booking" className="inline-flex items-center gap-3 bg-forest-dark text-cream px-8 py-4 text-[10px] font-medium tracking-[0.15em] hover:bg-gold hover:text-white transition-colors uppercase w-fit">
              BOOKING SEKARANG &rarr;
            </a>
          </div>
        </div>
      </section>
      <section id="visit" className="scroll-mt-24 bg-cream border-t border-forest-dark/5 pb-24 md:pb-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          
          {/* INFO KIRI (45%) */}
          <FadeIn direction="right" className="w-full lg:w-[45%] py-20 px-6 lg:px-16 flex flex-col justify-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-forest-dark leading-tight mb-2 font-bold">
              KUNJUNGI KAMI
            </h2>
            <p className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase mb-12">REAL.CO MALANG</p>

            <div className="space-y-10">
              {/* ADDRESS */}
              <div>
                <h3 className="text-[9px] font-bold tracking-[0.2em] text-forest-dark/50 uppercase mb-3">ALAMAT</h3>
                <p className="text-forest-dark text-sm leading-relaxed max-w-xs font-medium">
                  Jl. Ir. Soekarno No.7, Dadaprejo,<br />Junrejo, Batu, Jawa Timur
                </p>
              </div>

              {/* HOURS */}
              <div>
                <h3 className="text-[9px] font-bold tracking-[0.2em] text-forest-dark/50 uppercase mb-3">JAM BUKA</h3>
                <div className="text-forest-dark text-sm font-medium space-y-2">
                  <p className="flex w-full sm:w-64 justify-between"><span>Senin - Kamis</span><span>09.00 - 21.00</span></p>
                  <p className="flex w-full sm:w-64 justify-between"><span>Jumat</span><span>13.00 - 21.00</span></p>
                  <p className="flex w-full sm:w-64 justify-between"><span>Sabtu - Minggu</span><span>09.00 - 21.00</span></p>
                </div>
              </div>

              {/* CONTACT */}
              <div>
                <h3 className="text-[9px] font-bold tracking-[0.2em] text-forest-dark/50 uppercase mb-3">CONTACT</h3>
                <div className="text-forest-dark text-sm font-medium space-y-2">
                  <p>Instagram: <a href="https://instagram.com/real_co" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">@real.co.id</a></p>
                  <p>WhatsApp: <a href="https://wa.me/62881036695165" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">+62 881-0366-95165</a></p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <a href="https://maps.app.goo.gl/rXReuLcvMoJChsDP6" target="_blank" rel="noreferrer" className="bg-forest-dark text-cream px-10 py-4 text-[10px] font-bold tracking-[0.2em] hover:bg-gold hover:text-white transition-colors uppercase text-center">
                LIHAT PETA ARAH
              </a>
              <a href="https://wa.me/62881036695165" target="_blank" rel="noreferrer" className="border border-forest-dark/20 text-forest-dark px-10 py-4 text-[10px] font-bold tracking-[0.2em] hover:border-forest-dark transition-colors uppercase text-center">
                HUBUNGI KAMI
              </a>
            </div>
          </FadeIn>

          {/* MAP KANAN (55%) */}
          <FadeIn direction="left" className="w-full lg:w-[55%] h-[500px] lg:h-auto min-h-[500px] bg-forest/5 relative grayscale-[30%] contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <iframe 
              src="https://maps.google.com/maps?q=REAL.CO+Hair+Studio+Mini+Cafe,+Jl.+Ir.+Soekarno+No.7,+Dadaprejo,+Junrejo,+Batu&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen 
              aria-hidden="false" 
              tabIndex={0}
              className="absolute inset-0 w-full h-full"
            >
            </iframe>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
