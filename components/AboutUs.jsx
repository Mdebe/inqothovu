"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  const primary = "#d41ed3";
  const accent = "#1df4f7";
  const secondary = "#a0a9a6";

  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Left Image */}
        <motion.div
          className="md:w-1/2 relative h-[380px] w-full rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/car.jpg" // replace with your desired image
            alt="Inqothovu Smelling Good"
            fill
            className="object-cover rounded-3xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold" style={{ color: "#111" }}>
            About <span style={{ color: primary }}>Inqothovu</span>
          </h3>

          <p className="mt-6 text-lg leading-relaxed" style={{ color: secondary }}>
            Inqothovu Smelling Good is a proudly local fragrance brand
            specializing in premium car diffusers, house diffusers,
            roll-on fragrances, and long-lasting perfumes.
          </p>

          <p className="mt-4 text-lg leading-relaxed" style={{ color: secondary }}>
            We supply both individual customers and bulk stock orders,
            ensuring quality, consistency, and fragrances that leave a
            lasting impression wherever they are used.
          </p>

          <p className="mt-4 text-lg leading-relaxed" style={{ color: secondary }}>
            With a dedicated team of 30 staff members based in Richards Bay,
            our mission is to deliver affordable luxury scents that refresh
            your car, home, and lifestyle every day.
          </p>

          {/* Decorative Accent Line */}
          <div
            className="mt-6 h-1 w-24 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${primary}, ${accent})`,
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}