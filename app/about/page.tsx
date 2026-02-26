"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer";  

export default function AboutUsPage() {
  const primary = "#d41ed3"; // purple
  const accent = "#1df4f7";  // cyan
  const secondary = "#a0a9a6"; // gray

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#010a33]">

        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[40vh] w-full flex items-center justify-center text-center px-6"
                 style={{ background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 50%, ${accent} 100%)` }}>
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About <span className="text-white/90">Inqothovu</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Delivering premium fragrances, car & home diffusers, roll-ons, and perfumes for every occasion.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Video/Image */}
            <motion.div
              className="relative h-80 w-full rounded-3xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <Image
                         src="/images/hero1.jpg" // replace with your desired image
                         alt="Inqothovu Smelling Good"
                         fill
                         className="object-cover rounded-3xl"
                       />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: accent }}>
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Our mission is to provide high-quality fragrances and diffusers that make your home, car, or workplace smell amazing every day.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We focus on premium quality, attention to detail, and excellent customer service, ensuring every product exceeds expectations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Products Section */}
        <section className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: primary }}>
            Our Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Car Diffusers", desc: "Premium fragrances for your car.", img: "/images/car.jpg" },
              { title: "House Diffusers", desc: "Keep your home fresh every day.", img: "/images/house.png" },
              { title: "Perfumes & Roll-ons", desc: "Luxury scents for all occasions.", img: "/images/hero1.jpg" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(209,30,211,0.6)] transition p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-[#010a33]">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
                {/* Business Profile Download Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[#d41ed3] to-[#1df4f7] rounded-3xl p-12 shadow-2xl text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Download Our Business Profile
              </h2>

              <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                Learn more about Inqothovu Smelling Good, our products,
                wholesale opportunities, and company vision.
                Download our full business profile in PDF format.
              </p>

              <a
                href="/Inqothovu-Business-Profile.pdf"
                download
                className="inline-block bg-white text-[#d41ed3] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition transform hover:scale-105"
              >
                Download PDF →
              </a>
            </motion.div>

          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: primary }}>
            Why Choose Inqothovu
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Premium Quality", desc: "High-quality fragrances and diffusers for every space." },
              { title: "Fast Delivery", desc: "Quick delivery across Richards Bay and surrounding areas." },
              { title: "Wholesale & Retail", desc: "Buy individually or in bulk stock." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-[0_0_15px_rgba(209,30,211,0.6)] transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2 text-[#010a33]">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-[#d41ed3] text-white py-16 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Smell Amazing?</h2>
          <p className="mb-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Contact Inqothovu today to order your premium diffusers and perfumes!
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[#d41ed3] font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(209,30,211,0.6)] transition hover:scale-105"
          >
            Shop Now
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}