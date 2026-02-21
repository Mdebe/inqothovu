"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/perfume-hero-1.jpg",
    title: "Luxury Fragrances",
    subtitle: "That Last All Day",
  },
  {
    image: "/images/perfume-hero-2.jpg",
    title: "Car & Home Diffusers",
    subtitle: "Fresh Every Moment",
  },
  {
    image: "/images/perfume-hero-2.jpg",
    title: "Wholesale & Retail",
    subtitle: "Available in Stock",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const primary = "#d41ed3";   // Purple
  const accent = "#1df4f7";    // Cyan
  const secondary = "#a0a9a6"; // Soft gray

  // WhatsApp order details
  const phoneNumber = "0664449653"; // Replace with your WhatsApp number
  const handleWhatsAppOrder = () => {
    const message = `Hello! I'm interested in your ${slides[current].title} - ${slides[current].subtitle}.`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f0015]/80 via-[#2b0030]/70 to-black/80" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center justify-center px-6 text-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {slides[current].title}
            <br />
            <span style={{ color: accent }}>{slides[current].subtitle}</span>
          </h1>

          <p className="mt-5 text-lg" style={{ color: secondary }}>
            Inqothovu Smelling Good offers premium car diffusers, house
            diffusers, roll-ons and perfumes. We sell individually and in
            bulk stock across Richards Bay.
          </p>

          <button
            onClick={handleWhatsAppOrder}
            className="inline-block mt-8 px-7 py-3 rounded-md font-semibold text-white transition hover:scale-105"
            style={{
              background: `linear-gradient(90deg, ${primary}, ${accent})`,
            }}
          >
            Shop Now →
          </button>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="h-3 w-3 rounded-full transition"
            style={{
              backgroundColor: i === current ? accent : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* Accent Bar */}
      <div
        className="absolute bottom-0 w-full h-10 z-20"
        style={{ background: `linear-gradient(90deg, ${primary}, ${accent})` }}
      />
    </section>
  );
}