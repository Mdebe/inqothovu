"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Gallery", href: "/gallery" },
    { label: "Bulk Orders", href: "/bulk-order" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between gap-4">

          <Link href="/" className="flex items-center shrink-0 h-full" aria-label="Inqothovu Home">
            <Image
              src="/logo_nav.jpg"
              alt="Inqothovu Logo"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13.5px] font-semibold tracking-wide transition-colors duration-200 hover:text-[#d41ed3] ${
                  pathname === item.href? "text-[#d41ed3]" : "text-[#111]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Order Now -> Products Page */}
          <div className="hidden md:flex items-center">
            <Link
              href="/products"
              className="flex items-center gap-2 bg-[#111] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#d41ed3] transition-colors duration-200"
            >
              <FaShoppingBag size={14} />
              Order Now
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition shrink-0"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>

        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[99] md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute top-20 left-0 right-0 bg-white shadow-xl border-t border-black/5 max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="px-4 py-3 flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-4 px-3 text-sm font-semibold border-b border-black/5 last:border-0 transition-colors duration-200 ${
                    pathname === item.href? "text-[#d41ed3]" : "text-[#111]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Order Now -> Products Page */}
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="mt-5 w-full bg-[#111] hover:bg-[#d41ed3] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 text-sm transition-colors duration-200"
              >
                <FaShoppingBag size={16} />
                Order Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}