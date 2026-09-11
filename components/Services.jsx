"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const products = [
  {
    title: ["Perfume"],
    desc: "Long-lasting luxury fragrance. Smell fresh all day.",
    price: "R100",
    img: "/images/pe1.png",
    badge: "LONG LASTING",
  },
  {
    title: ["House", "Diffuser"],
    desc: "Premium reed diffuser for your home. Quality products.",
    price: "R200",
    img: "/images/house.png",
    badge: "QUALITY",
  },
  {
    title: ["Car", "Diffuser"],
    desc: "Compact luxury car fragrance. Perfect for everyday use.",
    price: "R50",
    img: "/images/car.jpg",
    badge: "EVERYDAY",
  },
  {
    title: ["Pine", "Gel"],
    desc: "Powerful cleaning pine gel. Fresh and effective.",
    price: "R50",
    img: "/images/pine-gel.png",
    badge: "BEST SELLER",
  },
  {
    title: ["Dish Washing", "Liquid"],
    desc: "Sparkling clean dishes. Affordable prices.",
    price: "R25",
    img: "/images/dish-washing.png",
    badge: "AFFORDABLE",
  },
];

function ProductCard({ product }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const primary = "#0e7a8c"; // WP teal from flyer
  const accent = "#d81b60"; // WP magenta from flyer
  const secondary = "#6b7a7e";

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="relative bg-white rounded-3xl overflow-hidden shadow-xl p- group"
    >
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"
        style={{
          background: `linear-gradient(90deg, ${primary}, ${accent})`,
        }}
      />

      <div className="relative bg-white rounded-3xl overflow-hidden h-full flex flex-col">
        <div className="absolute top-4 left-4 z-10 bg-[#0e7a8c] text-white text- tracking-[0.15em] px-3 py-1 rounded-full font-bold">
          {product.badge}
        </div>

        <div className="relative h-64 w-full bg-[#f7f7fb]">
          <Image
            src={product.img}
            alt={product.title.join(" ")}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-4"
          />
        </div>

        <div className="p-7 text-center flex-1 flex flex-col">
          <h4 className="text- font-bold mb-2 leading-tight">
            <span style={{ color: primary }}>{product.title[0]}</span>{" "}
            {product.title[1] && (
              <span style={{ color: accent }}>{product.title[1]}</span>
            )}
          </h4>

          <p className="leading-relaxed mb-4 text- flex-1" style={{ color: secondary }}>
            {product.desc}
          </p>

          <p className="text-2xl font-bold" style={{ color: primary }}>
            {product.price}
          </p>

          <div className="mt-4 w-full bg-[#f0f7f8] rounded-full h-1.5 overflow-hidden">
            <div className="h-full w-full" style={{ background: `linear-gradient(90deg, ${primary}, ${accent})` }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const primary = "#0e7a8c";
  const secondary = "#6b7a7e";

  return (
    <section id="products" className="bg-[#f7f7fb] py-24">
      <div className="mx-auto mb-14 max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em]" style={{ color: "#d81b60" }}>
              WP INQOTHOVU - SMELLING GOOD
            </p>
            <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
              Our <span style={{ color: primary }}>Products</span> &{" "}
              <span style={{ color: "#d81b60" }}>Prices</span>
            </h2>
          </div>
          <p className="max-w-md text- leading-relaxed" style={{ color: secondary }}>
            Long lasting fragrances • Quality products • Affordable prices • Perfect for everyday use. From R25.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.title.join(" ")} product={product} />
        ))}
      </div>

      {/* Benefits strip from flyer */}
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-6 shadow-sm border border-black/5">
          <div className="text-center"><p className="text- tracking-[0.15em] font-bold text-[#0e7a8c]">LONG LASTING FRAGRANCES</p></div>
          <div className="text-center"><p className="text- tracking-[0.15em] font-bold text-[#0e7a8c]">QUALITY PRODUCTS</p></div>
          <div className="text-center"><p className="text- tracking-[0.15em] font-bold text-[#d81b60]">AFFORDABLE PRICES</p></div>
          <div className="text-center"><p className="text- tracking-[0.15em] font-bold text-[#0e7a8c]">PERFECT FOR EVERYDAY USE</p></div>
        </div>
      </div>
    </section>
  );
}