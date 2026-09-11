"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const aboutSlides = [
  {
    image: "/images/inqoth.jpeg",
    mobile: "/images/banners/sage_green_brand_banner.webp",
    title: "WP Team"
  },
  {
    image: "/images/banners/wp_product_hero_banner.webp",
    mobile: "/images/banners/wp_inqothovu_banner.webp",
    title: "All Products"
  },
  {
    image: "/images/banners/wp_inqothovu_hero_banner_4.webp",
    mobile: "/images/banners/sage_green_brand_banner.webp",
    title: "Premium Collection"
  },
];

export default function AboutUsPage() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) setCurrent((p) => (p + 1) % aboutSlides.length);
      else setCurrent((p) => (p - 1 + aboutSlides.length) % aboutSlides.length);
    }
    touchStartX.current = null;
  };

  return (
    <>
     
      <main className="bg-[#fbfaf8] text-[#111]">

        {/* HERO SLIDER */}
        <section
          className="relative w-full overflow-hidden flex items-center justify-center text-center px-6
                     h- min-h-screen sm:h- md:h-"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {aboutSlides.map((slide, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === current? "opacity-100" : "opacity-0"}`}>
              <div className="hidden sm:block absolute inset-0">
                <Image src={slide.image} alt={slide.title} fill priority={index === 0} className="object-cover object-center" />
              </div>
              <div className="block sm:hidden absolute inset-0">
                <Image src={slide.mobile} alt={slide.title} fill priority={index === 0} className="object-cover object-center" />
              </div>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010a33]/80 via-transparent to-transparent sm:from-[#0e7a8c]/40 sm:via-transparent sm:to-transparent" />
            </div>
          ))}

          <div className="relative z-10 text-white max-w-4xl mt-20 sm:mt-0">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="tracking-[0.35em] text- sm:text-xs font-bold text-white/90 drop-shadow">
              WP INQOTHOVU
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-6xl md:text-7xl font-black mt-3 leading-[0.9] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              SMELLING <span className="text-[#7ee8f7]">GOOD</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm sm:text-lg md:text-xl mt-4 text-white/90 max-w-2xl mx-auto leading-relaxed px-2 drop-shadow">
              Two worlds, one promise: Premium fragrances for everyday luxury and powerful cleaning products for a cleaner, fresher, healthier home.
            </motion.p>
            <div className="mt-6 flex justify-center gap-2 sm:gap-3 flex-wrap">
              <span className="bg-white/20 backdrop-blur border border-white/30 px-4 py-1.5 rounded-full text- sm:text-xs tracking-[0.15em] font-bold">LONG LASTING</span>
              <span className="bg-white/20 backdrop-blur border border-white/30 px-4 py-1.5 rounded-full text- sm:text-xs tracking-[0.15em] font-bold">QUALITY • AFFORDABLE</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
            {aboutSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current? "w-8 bg-[#7ee8f7]" : "w-2.5 bg-white/60"}`} />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d41ed3] to-[#1df4f7] z-20" />
        </section>

        {/* MISSION */}
        <section className="py-16 sm:py-20 px-5 sm:px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h- sm:h- rounded- overflow-hidden bg-[#e8f4f5] shadow-sm order-2 md:order-1">
              <Image src="/images/inqoth.jpeg" alt="WP Team" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 flex gap-3 shadow-lg">
                <div className="flex-1 text-center"><p className="text-sm sm:text-base font-black text-[#0e7a8c]">R25 - R1400</p><p className="text- tracking-[0.15em] text-black/60">AFFORDABLE RANGE</p></div>
                <div className="w-px bg-black/10" />
                <div className="flex-1 text-center"><p className="text-sm sm:text-base font-black text-[#d81b60]">5L / 25L</p><p className="text- tracking-[0.15em] text-black/60">BULK & STOCK</p></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
              <p className="text- tracking-[0.3em] font-bold text-[#0e7a8c]">OUR MISSION</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 leading-[0.95]">Powerful Clean.<br/>Trusted Results.</h2>
              <p className="text- sm:text- leading-[1.7] text-black/70 mt-5">WP Inqothovu Smelling Good was built in Richards Bay, KZN to solve two everyday problems: how to smell amazing and how to keep your home truly clean — without breaking the bank.</p>
              <p className="text- leading-[1.7] text-black/70 mt-4">From Car Diffusers at R50 and Perfumes at R100 to Pine Gel 25L at R1400 and Dish Washing Liquid 400ml at R15, every product is made for everyday use, long-lasting freshness, and quality you can trust.</p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="flex gap-2"><span className="text-[#0e7a8c]">✓</span> Smell fresh all day</div>
                <div className="flex gap-2"><span className="text-[#0e7a8c]">✓</span> Boosts confidence</div>
                <div className="flex gap-2"><span className="text-[#0e7a8c]">✓</span> Kills germs & bacteria</div>
                <div className="flex gap-2"><span className="text-[#0e7a8c]">✓</span> Safe on surfaces</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TWO COLLECTIONS */}
        <section className="bg-white py-16 sm:py-20 px-5 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">Two Collections,<br/> One Brand</h2>
              <p className="text-black/60 mt-3 text-sm sm:text-base">Fragrances from R30 and Cleaning from R15 — retail & wholesale.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mt-10 sm:mt-12">
              <div className="rounded- overflow-hidden bg-gradient-to-br from-[#0e7a8c] to-[#0a4a5c] p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-black">FRAGRANCE RANGE</h3>
                <p className="text-white/70 text-xs sm:text-sm mt-2">Perfume R100 • House Diffuser R200 • Car Diffuser R50 • Roll-On R30</p>
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[{ t: "Car Diffusers", img: "/images/car.jpg" }, { t: "House Diffusers", img: "/images/house.png" }, { t: "Perfumes", img: "/images/pe1.png" }].map(i => (
                    <div key={i.t} className="bg-white/10 rounded-2xl p-2 text-center"><div className="relative h-20 rounded-xl overflow-hidden bg-white"><Image src={i.img} alt={i.t} fill className="object-contain p-2" /></div><p className="text- mt-2 font-bold">{i.t}</p></div>
                  ))}
                </div>
              </div>

              <div className="rounded- overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-black">CLEANING RANGE</h3>
                <p className="text-white/60 text-xs sm:text-sm mt-2">Pine Gel • Dish Liquid • Bleach • Handy Chemi — 400ml to 25L</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                  {[{ t: "Dish 5L R220", img: "/images/dish-washing.png" }, { t: "Bleach 5L R200", img: "/images/bleach.png" }, { t: "Pine 5L R300", img: "/images/pine-gel.png" }, { t: "Handy 5L R210", img: "/images/handy-chemi.png" }].map(i => (
                    <div key={i.t} className="bg-white/10 rounded-2xl p-2 text-center"><div className="relative h-20 rounded-xl overflow-hidden bg-white"><Image src={i.img} alt={i.t} fill className="object-contain p-2" /></div><p className="text- mt-2 font-bold leading-tight">{i.t}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS PROFILE */}
        <section className="py-12 sm:py-20 px-5 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded- bg-gradient-to-r from-[#0e7a8c] to-[#d81b60] p-">
              <div className="rounded- bg-white p-7 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black">Download Our Business Profile</h3>
                  <p className="text-black/60 mt-2 max-w-xl text-sm sm:text-base">Learn about WP Inqothovu wholesale, stock prices from R15, bulk 25L deals, and our vision for KZN.</p>
                </div>
                <a href="/Inqothovu-Business-Profile.pdf" download className="bg-[#111] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0e7a8c] transition whitespace-nowrap w-full md:w-auto text-center">Download PDF →</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#0e7a8c] text-white py-14 sm:py-16 px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">Ready to Smell Amazing & Clean Better?</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto text-sm sm:text-base">WhatsApp us for stock, wholesale, or retail. 5L from R200, 25L from R700.</p>
          <a href="/products" className="inline-block mt-6 bg-white text-[#0e7a8c] font-bold px-8 py-3 rounded-full hover:bg-[#7ee8f7] transition">Shop Now →</a>
        </section>
      </main>
       
    </>
  );
}