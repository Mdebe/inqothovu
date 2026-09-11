"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  const phoneNumber = "27664449653";
  const whatsappMessage = "Hello! I'm interested in Inqothovu Smelling Good products.";
  const whatsappChannelUrl = "https://whatsapp.com/channel/0029VbCfdlP9hXFEQgzaXh0P";

  return (
    <footer className="relative overflow-hidden bg-[#010a33] text-white">
      {/* Top glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h- w- -translate-x-1/2 rounded-full bg-gradient-to-r from-[#d41ed3]/20 to-[#1df4f7]/20 blur-" />

      {/* CTA Strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text- font-medium text-white/90">
            <span className="text-[#1df4f7] font-bold">Smell good.</span> Feel unforgettable. Order today via WhatsApp.
          </p>
          <div className="flex gap-3">
            <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" className="flex items-center gap-2 rounded-full bg-[#d41ed3] px-5 py-2.5 text- font-bold text-white hover:bg-[#b817b6] transition">
              <FaWhatsapp /> WhatsApp Us <FaArrowRight className="opacity-60" size={10} />
            </a>
            <a href={whatsappChannelUrl} target="_blank" className="hidden sm:flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text- font-bold hover:bg-white/15 transition border border-white/10">
              Channel
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-8 grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Brand */}
        <div className="md:col-span-5">
           
          <div className="mt-6 flex gap-3">
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#d41ed3] transition"><FaInstagram size={14} /></a>
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#d41ed3] transition"><FaFacebookF size={14} /></a>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#1df4f7] hover:text-[#010a33] transition"><FaWhatsapp size={14} /></a>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-2">
          <h4 className="text- font-bold uppercase tracking-[0.2em] text-white/40">Navigate</h4>
          <ul className="mt-5 space-y-3 text-">
            <li><Link href="/" className="text-white/70 hover:text-[#1df4f7] transition">Home</Link></li>
            <li><Link href="/about" className="text-white/70 hover:text-[#1df4f7] transition">About Us</Link></li>
            <li><Link href="/products" className="text-white/70 hover:text-[#1df4f7] transition">Products</Link></li>
            <li><Link href="/gallery" className="text-white/70 hover:text-[#1df4f7] transition">Gallery</Link></li>
            <li><Link href="/bulk-order" className="text-white/70 hover:text-[#1df4f7] transition">Bulk Orders</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text- font-bold uppercase tracking-[0.2em] text-white/40">Collection</h4>
          <ul className="mt-5 space-y-3 text- text-white/50">
            <li className="hover:text-white/80 transition">Car Diffusers</li>
            <li className="hover:text-white/80 transition">House Diffusers</li>
            <li className="hover:text-white/80 transition">Roll-On Perfumes</li>
            <li className="hover:text-white/80 transition">Luxury Perfumes</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text- font-bold uppercase tracking-[0.2em] text-white/40">Visit us</h4>
          <div className="mt-5 space-y-3 text-">
            <p className="flex gap-2.5 text-white/70"><FaMapMarkerAlt className="mt-1 text-[#1df4f7] shrink-0" /> Mandlanzini Phase 7, next to Fantocy Creche, Richards Bay, 3900</p>
            <p className="flex gap-2.5 text-white/70"><FaPhoneAlt className="mt-1 text-[#1df4f7] shrink-0" size={12} /> 066 444 9653</p>
            <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" className="flex gap-2.5 text-white/70 hover:text-white transition"><FaWhatsapp className="mt-0.5 text-[#1df4f7]" /> WhatsApp Us</a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text- text-white/40">
          <p>&copy; {new Date().getFullYear()} Inqothovu Smelling Good. All rights reserved.</p>
          <p>Developed by <a href="https://www.amaphisi.co.za" target="_blank" className="text-white/70 hover:text-[#1df4f7] underline underline-offset-4">Amaphisi</a></p>
        </div>
      </div>
    </footer>
  );
}