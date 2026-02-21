"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; 

// Define TypeScript type for service
interface Service {
  name: string;
  description: string;
  price: string;
  image: string;
}

const services: Service[] = [
  {
    name: "Mattress Cleaning",
    description: "Single, Three Quarters, Double, Queen, King sizes available.",
    price: "R200 - R320",
    image: "/images/mattress.jpg",
  },
  {
    name: "Bed Base Cleaning",
    description: "Single, Three Quarters, Double, Queen, King (two singles).",
    price: "R125 - R250",
    image: "/images/bedbase.jpg",
  },
  {
    name: "Outdoor Cleaning",
    description: "Lawn cleaning for small and large areas.",
    price: "R500 - R700",
    image: "/images/lawn.jpg",
  },
  {
    name: "Tree Trimming",
    description: "Small to Extra Large Trees trimmed professionally.",
    price: "R200 - R11,000",
    image: "/images/tree.jpg",
  },
  {
    name: "Gardening Maintenance",
    description: "Small, Medium, and Large gardens maintained per visit.",
    price: "R400 - R900",
    image: "/images/garden.jpg",
  },
];

export default function PricingPage() {
  const phoneNumber = "27723340746"; // WhatsApp number

  const sendWhatsApp = (serviceName: string) => {
    const message = `Hello! I would like to book the service: ${serviceName}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="bg-white text-[#010a33] min-h-screen">

       
       <Navbar />



      {/* PRICING CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#147595]">
          Our Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center hover:shadow-3xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <p className="font-semibold text-[#147595] mb-6">{service.price}</p>
              <button
                onClick={() => sendWhatsApp(service.name)}
                className="bg-[#147595] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
              >
                Choose
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#147595] text-white py-8 mt-16">
        <div className="text-center text-xs md:text-sm space-y-1">
          <p>&copy; {new Date().getFullYear()} iMvelenhle Cleaning Services. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://github.com/yourusername"
              className="underline hover:text-white/90"
            >
              Mdebe
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
