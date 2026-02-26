"use client";

import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const primary = "#d41ed3";
  const accent = "#1df4f7";
  const secondary = "#a0a9a6";

  const phoneNumber = "27664449653"; // International format (no +)
  const whatsappMessage = "Hello! I'm interested in Inqothovu Smelling Good products.";

  return (
    <footer
      className="text-white pt-16 pb-8"
      style={{
        background: `linear-gradient(135deg, ${primary}, ${accent})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Inqothovu</h3>
          <p className="text-sm leading-relaxed text-white/90">
            Premium car diffusers, house diffusers, roll-ons and luxury
            perfumes. Delivering affordable luxury fragrances across
            Richards Bay and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-black transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-black transition">About Us</Link></li>
            <li><Link href="/products" className="hover:text-black transition">Our Products</Link></li>
            <li><Link href="/bulk" className="hover:text-black transition">Bulk Orders</Link></li>
            <li><Link href="/downloadapp" className="hover:text-black transition">Download App</Link></li>
            <li><Link href="/contact" className="hover:text-black transition">Contact</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li>Car Diffusers</li>
            <li>House Diffusers</li>
            <li>Roll-On Perfumes</li>
            <li>Luxury Perfumes</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

          <div className="space-y-3 text-sm">

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt />
              Richards Bay, South Africa
            </p>

            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              066 444 9653
            </p>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-black transition"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
                <FaFacebookF size={14} />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-xs md:text-sm text-white/80">
        <p>
          &copy; {new Date().getFullYear()} Inqothovu Smelling Good. All rights reserved.
        </p>
        <p className="mt-1">
          Developed by{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="underline hover:text-black transition"
          >
            Mdebe
          </a>
        </p>
      </div>
    </footer>
  );
}