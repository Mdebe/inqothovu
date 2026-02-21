"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Define Product type
type Product = {
  name: string;
  price: number;
  img: string;
};

const products: Product[] = [
  { name: "Car Diffuser", price: 199, img: "/images/car-diffuser.jpg" },
  { name: "House Diffuser", price: 399, img: "/images/house-diffuser.jpg" },
  { name: "Roll-on Perfume", price: 149, img: "/images/roll-on.jpg" },
  { name: "Luxury Perfume", price: 599, img: "/images/perfume.jpg" },
  { name: "Gift Set", price: 899, img: "/images/gift-set.jpg" },
];

export default function ProductsPage() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <main className="bg-white text-[#010a33] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[30vh] w-full bg-[#d41ed3] flex items-center justify-center text-center px-6">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Our Products</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Premium car diffusers, house diffusers, roll-ons, and perfumes — available individually and in stock.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product: Product) => (
            <div
              key={product.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-[0_0_20px_rgba(209,30,211,0.5)] transition transform hover:scale-105"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#010a33]">{product.name}</h3>
                <p className="text-[#d41ed3] font-bold text-lg mb-4">R {product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-[#d41ed3] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(209,30,211,0.6)] hover:scale-105 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}