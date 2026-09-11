"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const highlights = [
  {
    number: "01",
    title: "Made for every space",
    description: "Signature scents for cars, homes and everyday moments.",
  },
  {
    number: "02",
    title: "Richards Bay rooted",
    description: "A proudly local fragrance brand serving KwaZulu-Natal.",
  },
  {
    number: "03",
    title: "Retail or bulk",
    description: "Order for yourself, your team, events or resale stock.",
  },
];

export default function InqothovuShowcase() {
  return (
    <section className="overflow-hidden bg-[#010a33] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="relative min-h-[440px] overflow-hidden rounded-[2rem]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="images/show.jpeg"
            alt="Inqothovu perfume collection"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010a33]/80 via-transparent to-transparent" />
          <div className="absolute bottom-7 left-7">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1df4f7]">
              Smell good. Feel unforgettable.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1df4f7]">
            The Inqothovu difference
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
            A signature scent for every story.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Discover affordable luxury fragrances designed to make your car,
            home and personal style feel distinctly yours.
          </p>

          <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
            {highlights.map((highlight) => (
              <div key={highlight.number} className="flex gap-5 py-5">
                <span className="pt-1 text-sm font-semibold text-[#d41ed3]">
                  {highlight.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{highlight.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-md bg-[#d41ed3] px-6 py-3 font-semibold text-white transition hover:bg-[#b817b6]"
            >
              Explore products
            </Link>
            <Link
              href="/gallery"
              className="rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:border-[#1df4f7] hover:text-[#1df4f7]"
            >
              View gallery
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}