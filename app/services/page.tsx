"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";  
import Footer from "../../components/Footer";  

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Cleaning",
      desc: "Expert home cleaning, tailored to your needs. Safe, reliable, and thorough.",
      img: "/images/residential.jpg",
    },
    {
      title: "Commercial Cleaning",
      desc: "Professional cleaning for offices, shops, and commercial spaces. We maintain high hygiene standards.",
      img: "/images/commercial.jpg",
    },
    {
      title: "Mattress & Bed Cleaning",
      desc: "Deep clean mattresses and bed bases with sanitizer for a fresh and healthy home.",
      img: "/images/mattress.jpg",
    },
    {
      title: "Outdoor & Lawn",
      desc: "Lawn cleaning, gardening, trimming trees, and outdoor maintenance services.",
      img: "/images/outdoor.jpg",
    },
    {
      title: "Sanitizing Services",
      desc: "Non-alcohol textile-safe sanitizers for fabrics, mattresses, and home surfaces.",
      img: "/images/sanitizer.jpg",
    },
    {
      title: "Deep Cleaning",
      desc: "Thorough cleaning for homes and businesses, tackling hard-to-reach areas.",
      img: "/images/deep-cleaning.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#010a33]">

        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[30vh] w-full bg-[#147595] flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our <span className="text-white/90">Services</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Discover the range of professional cleaning solutions offered by iMvelenhle Cleaning Services.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                  <Image src={service.img} alt={service.title} fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-[#010a33]">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#147595] text-white py-16 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Cleaning Service?</h2>
          <p className="mb-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Contact iMvelenhle Cleaning Services today to schedule a cleaning appointment for your home or business.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[#147595] font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition"
          >
            Book a Cleaning
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}
