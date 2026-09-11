"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

  const phoneNumber = "27664449653"; // +27 66 444 9653 without spaces

  const sendWhatsApp = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    const text = `Hello WP Inqothovu Smelling Good! 👋

Name: ${name}
Email: ${email || "N/A"}
Service: ${service}

Message: ${message || "I would like to place an order."}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // FORCE OPEN - 100% works on mobile & desktop
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = url;
    }
  };

  const openDirectChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I would like to place an order with Inqothovu Smelling Good.")}`;
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
  };

  return (
    <main className="bg-white text-[#010a33] min-h-screen">
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
                <a href="tel:+27664449653" className="hover:text-[#d41ed3]">066 444 9653 / 072 334 0746</a>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaWhatsapp className="text-[#1df4f7] w-6 h-6" />
                <button onClick={openDirectChat} className="hover:underline text-left">
                  Chat with us on WhatsApp
                </button>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaEnvelope className="text-[#1df4f7] w-6 h-6" />
                <span>sinikeziwendiyaza@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaMapMarkerAlt className="text-[#1df4f7] w-6 h-6" />
                <span>Mandlanzini Phase 7 next to Fantocy Creche, Richards Bay, South Africa</span>
              </div>
            </div>

            <button
              onClick={openDirectChat}
              className="mt-4 bg-[#111] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#d41ed3] transition"
            >
              <FaWhatsapp size={18}/> Order on WhatsApp
            </button>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-black/5">
            <h2 className="text-3xl font-bold mb-6 text-[#d41ed3]">Send a Message</h2>
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name *"
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
                type="button"
                onClick={sendWhatsApp}
                className="bg-[#d41ed3] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(209,30,211,0.6)] hover:scale-[1.02] transition flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={18}/> Send via WhatsApp
              </button>
              <p className="text- text-center text-black/40">Forced wa.me open • +27 66 444 9653</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}