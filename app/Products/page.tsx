"use client";

import { useState } from "react";
import Image from "next/image";
import { FaShoppingCart, FaTimes, FaTrash } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type Product = {
  name: string;
  price: number;
  img: string;
};

const products: Product[] = [
  { name: "Car Diffuser", price: 50, img: "/images/perfume-hero-1.jpg" },
  { name: "House Diffuser", price: 200, img: "/images/perfume-hero-2.jpg" },
  { name: "Roll-on Perfume", price: 30, img: "/images/perfume-hero-1.jpg" },
  { name: "Luxury Perfume", price: 100, img: "/images/perfume-hero-2.jpg" },
];

export default function ProductsPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    const phoneNumber = "27664449653";
    const orderList = cart.map((item) => item.name).join(", ");
    const message = `Hello Inqothovu Smelling Good! I would like to order: ${orderList}. Total: R ${total}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="bg-white text-[#010a33] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[30vh] w-full bg-[#d41ed3] flex items-center justify-center text-center px-6">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Our Products</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Premium car diffusers, house diffusers, roll-ons, and perfumes.
          </p>
        </div>

        {/* Cart Icon */}
        <button
          onClick={() => setCartOpen(true)}
          className="absolute top-6 right-6 bg-white text-[#d41ed3] p-3 rounded-full shadow-lg relative"
        >
          <FaShoppingCart size={20} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#1df4f7] text-black text-xs font-bold px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </button>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-[0_0_20px_rgba(209,30,211,0.5)] transition transform hover:scale-105"
            >
              <div className="relative h-64 w-full">
                <Image src={product.img} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-[#d41ed3] font-bold text-lg mb-4">R {product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-gradient-to-r from-[#d41ed3] to-[#1df4f7] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIDE CART */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-[#d41ed3]">Your Cart</h2>
          <button onClick={() => setCartOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto h-[60%]">
          {cart.length === 0 && <p className="text-gray-500">Your cart is empty.</p>}

          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-[#d41ed3]">R {item.price}</p>
              </div>
              <button onClick={() => removeFromCart(index)} className="text-red-500">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        {/* Total & Checkout */}
        <div className="absolute bottom-0 w-full p-6 border-t bg-white">
          <p className="font-bold text-lg mb-4">Total: R {total}</p>
          <button
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className="w-full bg-gradient-to-r from-[#d41ed3] to-[#1df4f7] text-white font-semibold py-3 rounded-full shadow-lg hover:scale-105 transition disabled:opacity-50"
          >
            Checkout via WhatsApp
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}