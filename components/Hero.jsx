"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images//h1.png",
    mobileImage: "/images/h3m.jpg",
    title: "Powerful Clean. Trusted Results"
  },
  {
    image: "/images/h2.png",
    mobileImage: "/images/h2m.jpg",
    title: "Pine Gel Collection"
  },
  {
    image: "/images/h3.png",
    mobileImage: "/images/h1m.jpg",
    title: "Wholesale & Retail"
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) setCurrent((p) => (p + 1) % slides.length);
      else setCurrent((p) => (p - 1 + slides.length) % slides.length);
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="relative w-full overflow-hidden
                 h- h- min-h-screen
                 sm:h-screen
                 md:min-h-[calc(100vh-80px)] md:h-[calc(100vh-80px)]"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides - Responsive Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Desktop Image */}
          <div className="hidden sm:block absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
          {/* Mobile Image - Full Screen Cover */}
          <div className="block sm:hidden absolute inset-0">
            <Image
              src={slide.mobileImage}
              alt={slide.title}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-black/10 sm:bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010a33]/90 via-[#010a33]/20 to-transparent" />
        </div>
      ))}

      {/* Content - Bottom */}
      <div className="relative z-20 flex h- h- min-h-screen sm:h-screen md:min-h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] max-w-7xl mx-auto items-end px-5 sm:px-6 pb-10 sm:pb-16 pt-20">
        <div className="w-full">
          <p className="mb-5 inline-flex items-center gap-3 text- sm:text-xs font-bold uppercase tracking-[0.3em] text-[#1df4f7]">
            <span className="h-px w-8 sm:w-10 bg-[#1df4f7]" />
            Mandlanzini, Richards Bay, KZN
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Link
              href="/products"
              className="w-full sm:w-auto text-center rounded-md bg-[#d41ed3] px-7 py-4 sm:py-3 text- font-semibold text-white transition hover:bg-[#b817b6] active:scale-[0.98]"
            >
              Shop fragrances
            </Link>
            <Link
              href="/gallery"
              className="w-full sm:w-auto text-center rounded-md border border-white/40 bg-white/10 backdrop-blur-md px-7 py-4 sm:py-3 text- font-semibold text-white transition hover:border-[#1df4f7] hover:text-[#1df4f7] active:scale-[0.98]"
            >
              View the gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-8 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${i === current? "w-8 bg-[#1df4f7]" : "w-6 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 z-20 h-1.5 w-full bg-gradient-to-r from-[#d41ed3] to-[#1df4f7]" />
    </section>
  );
}