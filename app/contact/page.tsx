"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../components/Navbar";  
import Footer from "../../components/Footer";  

const services = [
  "Car Diffuser",
  "House Diffuser",
  "Perfume / Roll-on",
  "Wholesale Orders",
  "Gift Sets",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState("");

  const phoneNumber = "0664449653";

  const sendWhatsApp = () => {
    const text = `Hello! My name is ${name} (${email}). I would like to order the product: ${service}. Message: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="bg-white text-[#010a33] min-h-screen">

      <Navbar />

      {/* CONTACT DETAILS + FORM */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left: Contact Details */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#d41ed3]">Contact Details</h2>
            <p className="text-gray-700 text-lg">
              Reach out to Inqothovu Smelling Good for any questions or to order our premium diffusers and perfumes.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-700">
                <FaPhoneAlt className="text-[#1df4f7] w-6 h-6" />
                <span>0664449653</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaWhatsapp className="text-[#1df4f7] w-6 h-6" />
                <span>
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Chat with us on WhatsApp
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaEnvelope className="text-[#1df4f7] w-6 h-6" />
                <span>sinikeziwendiyaza@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaMapMarkerAlt className="text-[#1df4f7] w-6 h-6" />
                <span>mandlanzini phase 7  next to fantocy creche, Richards Bay, South Africa</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-[#d41ed3]">Send a Message</h2>
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1df4f7] transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1df4f7] transition"
              />

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1df4f7] transition"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#1df4f7] transition"
              />

              <button
                onClick={sendWhatsApp}
                className="bg-[#d41ed3] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(209,30,211,0.6)] hover:scale-105 transition"
              >
                Send via WhatsApp
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      
    </main>
  );
}