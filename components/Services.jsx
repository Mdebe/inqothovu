"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const products = [
  {
    title: ["Car", "Diffuser"],
    desc: "Long-lasting luxury car fragrance.",
    price: "R50.00",
    img: "/images/perfume-hero-2.jpg",
  },
  {
    title: ["House", "Diffuser"],
    desc: "Premium reed diffuser for your home.",
    price: "R200.00",
    img: "/images/perfume-hero-1.jpg",
  },
  {
    title: ["Roll-On", "Fragrance"],
    desc: "Compact and powerful roll-on scent.",
    price: "R30.00",
    img: "/images/perfume-hero-2.jpg",
  },
  {
    title: ["Luxury", "Perfume"],
    desc: "Bold and unforgettable fragrance.",
    price: "R100.00",
    img: "/images/perfume-hero-2.jpg",
  },
];

function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

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

  const primary = "#d41ed3";
  const accent = "#1df4f7";
  const secondary = "#a0a9a6";

  function handleAddToCart() {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="relative bg-white rounded-3xl overflow-hidden shadow-xl p-1 group"
    >
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"
        style={{
          background: `linear-gradient(90deg, ${primary}, ${accent})`,
        }}
      />

      <div className="relative bg-white rounded-3xl overflow-hidden">
        {/* Image */}
        <div className="relative h-64 w-full">
          <Image
            src={product.img}
            alt={product.title.join(" ")}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <h4 className="text-2xl font-bold mb-2">
            <span style={{ color: primary }}>{product.title[0]}</span>{" "}
            <span style={{ color: accent }}>{product.title[1]}</span>
          </h4>

          <p className="leading-relaxed mb-4" style={{ color: secondary }}>
            {product.desc}
          </p>

          {/* Price */}
          <p className="text-xl font-bold mb-5" style={{ color: primary }}>
            {product.price}
          </p>
 
           
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const primary = "#d41ed3";
  const secondary = "#a0a9a6";

  return (
    <section id="products" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-bold">
          Our <span style={{ color: primary }}>Products</span>
        </h2>
        <p className="text-lg mt-3" style={{ color: secondary }}>
          Premium fragrances designed for everyday luxury
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard
            key={product.title.join(" ")}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}