"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";

const products = [
  {
    title: ["Perfume"],
    slug: "perfume",
    desc: "Long-lasting luxury fragrance. Smell fresh all day.",
    price: "R100",
    stock: { label: "Stock 10x", price: "R500", was: "R1000", save: "R500" },
    img: "/images/pe1.png",
    badge: "LONG LASTING",
  },
  {
    title: ["House", "Diffuser"],
    slug: "house-diff",
    desc: "Premium reed diffuser for your home. Quality products.",
    price: "R200",
    stock: { label: "Stock 10x", price: "R1500", was: "R2000", save: "R500" },
    img: "/images/house.png",
    badge: "QUALITY",
  },
  {
    title: ["Car", "Diffuser"],
    slug: "car-diff",
    desc: "Compact luxury car fragrance. Perfect for everyday use.",
    price: "R50",
    stock: { label: "Stock 10x", price: "R300", was: "R500", save: "R200" },
    img: "/images/car.jpg",
    badge: "EVERYDAY",
  },
  {
    title: ["Pine", "Gel"],
    slug: "pine-gel",
    desc: "Powerful cleaning pine gel. Fresh and effective.",
    price: "R50",
    stock: { label: "Stock 10x", price: "R300", was: "R500", save: "R200" },
    img: "/images/pine-gel.png",
    badge: "BEST SELLER",
  },
  {
    title: ["Dish Washing", "Liquid"],
    slug: "dish-liquid",
    desc: "Sparkling clean dishes. Affordable prices.",
    price: "R50",
    stock: { label: "Stock 10x", price: "R300", was: "R500", save: "R200" },
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

  const primary = "#0e7a8c";
  const accent = "#d81b60";
  const secondary = "#6b7a7e";

  return (
    <Link href="/products" className="block h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="relative bg-white rounded-3xl overflow-hidden shadow-xl p- group h-full cursor-pointer"
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
          <div className="absolute top-4 right-4 z-10 bg-[#d81b60] text-white text- font-bold px-3 py-1 rounded-full">
            STOCK DEALS
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
              {product.title[1] && <span style={{ color: accent }}>{product.title[1]}</span>}
            </h4>

            <p className="leading-relaxed mb-3 text- flex-1" style={{ color: secondary }}>
              {product.desc}
            </p>

            <div className="mt-2 space-y-2">
              <p className="text-2xl font-black" style={{ color: primary }}>
                {product.price} <span className="text- font-medium text-black/50">each</span>
              </p>

              {/* Stock Pricing */}
              <div className="bg-[#fff0f5] border border-[#d81b60]/20 rounded-2xl p-3">
                <p className="text- font-bold tracking-[0.1em] text-[#d81b60]">{product.stock.label} - {product.stock.price}</p>
                <p className="text- mt-1">
                  <span className="line-through text-black/40">{product.stock.was}</span>
                  <span className="ml-2 font-bold text-green-600">Save {product.stock.save}</span>
                </p>
              </div>
            </div>

            <div className="mt-4 w-full bg-[#f0f7f8] rounded-full h-1.5 overflow-hidden">
              <div className="h-full w-full" style={{ background: `linear-gradient(90deg, ${primary}, ${accent})` }} />
            </div>

            <p className="mt-3 text- font-bold tracking-[0.15em] text-[#0e7a8c] group-hover:text-[#d81b60] transition">VIEW IN SHOP →</p>
          </div>
        </div>
      </motion.div>
    </Link>
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
            <p className="mb-3 text- font-bold uppercase tracking-[0.25em]" style={{ color: "#d81b60" }}>
              WP INQOTHOVU - SMELLING GOOD • STOCK FROM R200
            </p>
            <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
              Our <span style={{ color: primary }}>Products</span> & <span style={{ color: "#d81b60" }}>Prices</span>
            </h2>
          </div>
          <p className="max-w-md text- leading-relaxed" style={{ color: secondary }}>
            Long lasting fragrances • Quality products • Stock 10x from R200 — save up to R500.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mx-auto mt-10 text-center">
        <Link href="/products" className="inline-flex items-center gap-2 bg-[#111] text-white px-8 py-3 rounded-full font-bold text- hover:bg-[#d41ed3] transition">
          View All Products & Stock Prices
        </Link>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-6 shadow-sm border border-black/5">
          <div className="text-center"><p className="text- tracking-[0.15em] font-bold text-[#0e7a8c]">LONG LASTING FRAGRANCES</p></div>
          <div className="text-center"><p className="text- tracking-[0.15em] font-bold text-[#0e7a8c]">QUALITY PRODUCTS</p></div>
          <div className="text-center"><p className="text- tracking-[0.15em] font-bold text-[#d81b60]">STOCK 10x FROM R200</p></div>
          <div className="text-center"><p className="text- tracking-[0.15em] font-bold text-[#0e7a8c]">SAVE UP TO R500</p></div>
        </div>
      </div>
    </section>
  );
}