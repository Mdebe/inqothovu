"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Products", href: "/products" },
    { label: "Bulk Orders", href: "/bulk-order" },
    { label: "Contact", href: "/contact" },
  ];

  const phoneNumber = "27723340746"; // Inqothovu WhatsApp number (country code included)
  const handleWhatsAppOrder = () => {
    const message = "Hello! I would like to place an order with Inqothovu Smelling Good.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-[100px]">

        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Inqothovu Smelling Good Logo"
              width={250}
              height={80}
              className="h-[80px] w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link text-primary font-semibold"
            >
              {item.label}
            </Link>
          ))}

          {/* WhatsApp Order Button */}
          <button
            onClick={handleWhatsAppOrder}
            className="ml-6 flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 cta-btn"
          >
            <FaPhoneAlt />
            Order Now
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-link font-semibold"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => {
                handleWhatsAppOrder();
                setMobileMenuOpen(false);
              }}
              className="mt-4 rounded-md px-5 py-3 text-center font-semibold text-white cta-btn"
            >
              Order Now
            </button>
          </nav>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        :global(.text-primary) {
          color: #d41ed3; /* Inqothovu purple */
        }

        .nav-link {
          font-size: 1.05rem;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #1df4f7; /* Inqothovu cyan */
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 3px;
          background: #1df4f7;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-link {
          font-size: 1rem;
          color: #d41ed3;
          transition: color 0.3s ease;
        }

        .mobile-link:hover {
          color: #1df4f7;
        }

        .cta-btn {
          background: linear-gradient(90deg, #d41ed3, #1df4f7);
        }

        .cta-btn:hover {
          background: linear-gradient(90deg, #1df4f7, #d41ed3);
        }
      `}</style>
    </header>
  );
}