"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type Product = {
  name: string;
  price: number;
};

const products: Product[] = [
  { name: "Car Diffuser", price: 50 },
  { name: "House Diffuser", price: 200 },
  { name: "Roll-on Perfume", price: 30 },
  { name: "Luxury Perfume", price: 100 },
];

export default function BulkOrderPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const total = selectedProduct ? selectedProduct.price * quantity : 0;

  const handleWhatsAppOrder = () => {
    if (!selectedProduct) return;

    const message = `Hello Inqothove 👋

I would like to place a BULK ORDER:

Product: ${selectedProduct.name}
Quantity: ${quantity}
Total: R ${total}

Please assist me with payment details.`;

    const phoneNumber = "27664449653"; // Update if needed

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="bg-white text-[#010a33] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#d41ed3] text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bulk Orders
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Order Inqothove products in bulk for events, gifts, or resale.
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white shadow-2xl rounded-3xl p-10 border border-[#a0a9a6]">

          {/* Product Selection */}
          <div className="mb-8">
            <label className="block mb-3 font-semibold text-lg">
              Select Product
            </label>
            <select
              onChange={(e) =>
                setSelectedProduct(
                  products.find((p) => p.name === e.target.value) || null
                )
              }
              className="w-full p-4 rounded-xl border border-[#a0a9a6] focus:outline-none focus:ring-2 focus:ring-[#1df4f7]"
            >
              <option value="">-- Choose Product --</option>
              {products.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name} - R {product.price}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <label className="block mb-3 font-semibold text-lg">
              Quantity
            </label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full p-4 rounded-xl border border-[#a0a9a6] focus:outline-none focus:ring-2 focus:ring-[#1df4f7]"
            />
          </div>

          {/* Total */}
          {selectedProduct && (
            <div className="mb-8 text-center">
              <p className="text-2xl font-bold text-[#d41ed3]">
                Total: R {total}
              </p>
            </div>
          )}

          {/* Order Button */}
          <div className="text-center">
            <button
              onClick={handleWhatsAppOrder}
              disabled={!selectedProduct}
              className="
                bg-[#1df4f7] 
                text-[#010a33] 
                font-bold 
                px-10 
                py-4 
                rounded-full 
                shadow-xl 
                transition 
                hover:shadow-[0_0_25px_rgba(29,244,247,0.8)]
                hover:scale-105
                disabled:opacity-50
              "
            >
              Place Bulk Order via WhatsApp
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}