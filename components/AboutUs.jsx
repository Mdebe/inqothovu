"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const proofPoints = [
  { value: "30+", label: "local team members" },
  { value: "4", label: "signature collections" },
  { value: "100%", label: "made to make an impression" },
];

export default function AboutUs() {
  const primary = "#d41ed3";
  const accent = "#1df4f7";
  const secondary = "#a0a9a6";

  return (
    <section id="about" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

        {/* Left Image */}
        <motion.div
          className="relative min-h-[480px] w-full overflow-hidden rounded-[2rem] bg-[#010a33] shadow-2xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/inqoth.jpeg" // replace with your desired image
            alt="Inqothovu Smelling Good fragrance collection"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010a33]/85 via-transparent to-transparent" />
          <div className="absolute bottom-7 left-7 right-7 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1df4f7]">
              Proudly based in Richards Bay
            </p>
            <p className="mt-3 max-w-sm text-xl font-semibold leading-snug">
              Affordable luxury, bottled for the way you live.
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d41ed3]">
            Our story
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#010a33] md:text-6xl">
            Fragrance that feels like <span style={{ color: primary }}>you.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed" style={{ color: secondary }}>
            Inqothovu Smelling Good is a proudly local fragrance brand
            specializing in premium car diffusers, house diffusers,
            roll-on fragrances, and long-lasting perfumes in Richards Bay,
            KwaZulu-Natal.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: secondary }}>
            We supply both individual customers and bulk stock orders,
            pairing consistent quality with scents that leave a lasting
            impression wherever they are used.
          </p>

          <div className="mt-9 grid max-w-2xl grid-cols-3 border-y border-[#010a33]/10 py-6">
            {proofPoints.map((point) => (
              <div key={point.label} className="pr-4">
                <p className="text-2xl font-bold text-[#010a33] md:text-3xl">{point.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500 md:text-sm">{point.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-md bg-[#d41ed3] px-6 py-3 font-semibold text-white transition hover:bg-[#b817b6]"
            >
              Explore our products
            </Link>
            <Link
              href="/bulk-order"
              className="rounded-md border border-[#010a33]/20 px-6 py-3 font-semibold text-[#010a33] transition hover:border-[#1df4f7] hover:bg-[#1df4f7]/10"
            >
              Shop in bulk
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}