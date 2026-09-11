"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const aboutSlides = [
  { image: "/images/banners/desktop-all-products.png", mobile: "/images/banners/mobile-all-products.png" },
  { image: "/images/banners/desktop-pine-gel.png", mobile: "/images/banners/mobile-pine-gel.png" },
  { image: "/images/h1.png", mobile: "/images/banners/mobile-all-products.png" },
];

export default function AboutUsPage() {
  const [current, setCurrent] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p: number) => (p + 1) % aboutSlides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) setCurrent((p: number) => (p + 1) % aboutSlides.length);
      else setCurrent((p: number) => (p - 1 + aboutSlides.length) % aboutSlides.length);
    }
    touchStartX.current = null;
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#fbfaf8] text-[#111]">

        <section
          className="relative w-full overflow-hidden flex items-center justify-center text-center px-6
                     h- min-h-screen sm:h- md:h-"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {aboutSlides.map((slide, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current? "opacity-100" : "opacity-0"}`}>
              <div className="hidden sm:block absolute inset-0">
                <Image src={slide.image} alt="WP Inqothovu" fill priority={i===0} className="object-cover" />
              </div>
              <div className="block sm:hidden absolute inset-0">
                <Image src={slide.mobile} alt="WP Inqothovu" fill priority={i===0} className="object-cover object-center" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0e7a8c]/90 via-[#0a4a5c]/70 to-[#1a1a1a]/90" />
            </div>
          ))}

          <div className="relative z-10 text-white max-w-4xl">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="tracking-[0.35em] text- sm:text-xs font-bold text-white/70">WP INQOTHOVU</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-6xl md:text-7xl font-black mt-3 leading-[0.9]">
              SMELLING <span className="text-[#7ee8f7]">GOOD</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-base sm:text-lg md:text-xl mt-5 text-white/80 max-w-2xl mx-auto leading-relaxed px-2">
              Two worlds, one promise: Premium fragrances for everyday luxury and powerful cleaning products.
            </motion.p>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {aboutSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i===current? "w-8 bg-[#7ee8f7]" : "w-2.5 bg-white/40"}`} />
            ))}
          </div>
        </section>

        <section className="py-14 sm:py-20 px-5 sm:px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h- sm:h- md:h- rounded- overflow-hidden bg-[#e8f4f5]">
              <Image src="/images/hero1.jpg" alt="Inqothovu" fill className="object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text- tracking-[0.3em] font-bold text-[#0e7a8c]">OUR MISSION</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3">Powerful Clean.<br/>Trusted Results.</h2>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}