"use client";

import { useState, useMemo } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaPlus, FaTrash, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type Variant = { label: string; price: number };
type Product = { id: string; name: string; category: "Fragrance" | "Cleaning"; variants: Variant[] };

const products: Product[] = [
  { id: "car-diff", name: "Car Diffuser", category: "Fragrance", variants: [{ label: "8ml", price: 50 }] },
  { id: "house-diff", name: "House Diffuser", category: "Fragrance", variants: [{ label: "200ml", price: 200 }] },
  { id: "roll-on", name: "Roll-on Perfume", category: "Fragrance", variants: [{ label: "10ml", price: 30 }] },
  { id: "lux-perfume", name: "Luxury Perfume", category: "Fragrance", variants: [{ label: "50ml", price: 100 }] },
  { id: "dish", name: "Dish Washing Liquid", category: "Cleaning", variants: [{ label: "400ml Stock", price: 15 }, { label: "750ml", price: 30 }, { label: "5L", price: 220 }, { label: "25L", price: 750 }] },
  { id: "pine", name: "Pine Gel", category: "Cleaning", variants: [{ label: "1L", price: 30 }, { label: "5L", price: 300 }, { label: "25L", price: 1400 }] },
  { id: "bleach", name: "Thickened Bleach", category: "Cleaning", variants: [{ label: "1L", price: 30 }, { label: "5L", price: 200 }, { label: "25L", price: 700 }] },
  { id: "handy", name: "Handy Chemi", category: "Cleaning", variants: [{ label: "1L", price: 30 }, { label: "5L", price: 210 }, { label: "25L", price: 700 }] },
];

type BulkItem = { productId: string; productName: string; variant: Variant; qty: number };

export default function BulkOrderPage() {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [selectedVariantLabel, setSelectedVariantLabel] = useState("");
  const [qty, setQty] = useState(10);
  const [bulkCart, setBulkCart] = useState<BulkItem[]>([]);
  const [customer, setCustomer] = useState({ name: "", business: "", area: "" });

  const selectedProduct = useMemo(() => products.find(p => p.id === selectedProductId), [selectedProductId]);
  const selectedVariant = useMemo(() => selectedProduct?.variants.find(v => v.label === selectedVariantLabel) || selectedProduct?.variants[0], [selectedProduct, selectedVariantLabel]);

  const addToBulk = () => {
    if (!selectedProduct ||!selectedVariant) return;
    const existing = bulkCart.find(b => b.productId === selectedProduct.id && b.variant.label === selectedVariant.label);
    if (existing) {
      setBulkCart(bulkCart.map(b => b.productId === selectedProduct.id && b.variant.label === selectedVariant.label? {...b, qty: b.qty + qty } : b));
    } else {
      setBulkCart([...bulkCart, { productId: selectedProduct.id, productName: selectedProduct.name, variant: selectedVariant, qty }]);
    }
    setQty(10);
  };

  const total = bulkCart.reduce((s, i) => s + i.variant.price * i.qty, 0);
  const totalUnits = bulkCart.reduce((s, i) => s + i.qty, 0);

  const handleWhatsApp = () => {
    if (bulkCart.length === 0) {
      alert("Add products to your bulk list first");
      return;
    }

    const phoneNumber = "27664449653";
    const list = bulkCart.map(i => `• ${i.qty}x ${i.productName} (${i.variant.label}) - R${i.variant.price} each = R${i.variant.price * i.qty}`).join("\n");

    const message = `Hello WP Inqothovu Smelling Good! 👋

BULK ORDER REQUEST
Name: ${customer.name || "N/A"}
Business: ${customer.business || "Personal"}
Area: ${customer.area || "Richards Bay"}

Products:
${list}

Total Units: ${totalUnits}
Total Amount: R${total}

This is a bulk order for resale/stock. Please assist with payment details and delivery/collection in KZN.`;

    // FIXED: Use api.whatsapp.com + forced anchor click (works on all phones, no popup blocker)
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Create link and click it
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Fallback
    setTimeout(() => {
      window.open(url, "_blank");
    }, 500);
  };

  return (
    <main className="bg-[#fbfaf8] min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0e7a8c] to-[#0a3a4a] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="tracking-[0.3em] text- font-bold opacity-70">WP INQOTHOVU • WHOLESALE</p>
            <h1 className="text-4xl md:text-6xl font-black mt-2">Bulk Orders</h1>
            <p className="mt-3 text-white/80 max-w-xl text-sm md:text-base">Stock prices from R15 (400ml dish) • 1L R30 • 5L from R200 • 25L from R700. Perfect for resale, salons, events.</p>
          </div>
          <div className="bg-white text-[#0e7a8c] rounded-2xl p-5 min-w- shadow-xl">
            <p className="text- tracking-[0.15em] font-bold">BULK CART</p>
            <p className="text-3xl font-black mt-1">R{total}</p>
            <p className="text- text-black/60">{totalUnits} units • {bulkCart.length} lines</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
        <div className="bg-white rounded- p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-black/5">
          <h3 className="font-black text-xl text-[#111]">Build Your Bulk Order</h3>

          <div className="mt-6 grid gap-5">
            <div>
              <label className="text- font-bold text-[#111]">Customer Details (for invoice)</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                <input placeholder="Your Name" value={customer.name} onChange={e => setCustomer({...customer, name: e.target.value })} className="p-3 rounded-xl border border-black/10 text-sm text-[#111] bg-white placeholder:text-black/40" />
                <input placeholder="Business Name (optional)" value={customer.business} onChange={e => setCustomer({...customer, business: e.target.value })} className="p-3 rounded-xl border border-black/10 text-sm text-[#111] bg-white placeholder:text-black/40" />
                <input placeholder="Area e.g. Richards Bay" value={customer.area} onChange={e => setCustomer({...customer, area: e.target.value })} className="p-3 rounded-xl border border-black/10 text-sm text-[#111] bg-white placeholder:text-black/40" />
              </div>
            </div>

            <div>
              <label className="text- font-bold text-[#111]">Select Product</label>
              <select value={selectedProductId} onChange={e => { setSelectedProductId(e.target.value); setSelectedVariantLabel(""); }} className="w-full mt-2 p-4 rounded-xl border border-black/10 bg-[#f9f9f9] font-semibold text-[#111]">
                <option value="">-- Choose Product --</option>
                <optgroup label="Fragrance">
                  {products.filter(p => p.category === "Fragrance").map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </optgroup>
                <optgroup label="Cleaning (Stock & Bulk)">
                  {products.filter(p => p.category === "Cleaning").map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </optgroup>
              </select>
            </div>

            {selectedProduct && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text- font-bold text-[#111]">Size / Variant</label>
                  <select value={selectedVariantLabel || selectedProduct.variants[0].label} onChange={e => setSelectedVariantLabel(e.target.value)} className="w-full mt-2 p-4 rounded-xl border border-black/10 font-semibold text-[#111] bg-white">
                    {selectedProduct.variants.map(v => <option key={v.label} value={v.label}>{v.label} - R{v.price}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text- font-bold text-[#111]">Quantity (bulk min 10)</label>
                  <input type="number" min={1} value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value)))} className="w-full mt-2 p-4 rounded-xl border border-black/10 font-bold text-[#111] bg-white" />
                </div>
              </div>
            )}

            {selectedVariant && (
              <div className="bg-[#f0f7f7] rounded-2xl p-4 flex justify-between items-center border border-[#0e7a8c]/10">
                <div><p className="text-sm font-bold text-[#111]">{selectedProduct?.name} ({selectedVariant.label})</p><p className="text-xs text-black/60">R{selectedVariant.price} x {qty} = R{selectedVariant.price * qty}</p></div>
                <button type="button" onClick={addToBulk} className="bg-[#0e7a8c] text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-[#0a5a68] transition"><FaPlus size={12} /> Add to Bulk List</button>
              </div>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 text-">
            <div className="bg-[#e8f5e9] rounded-xl p-3 border border-green-200"><p className="font-bold text-[#111]">5L PRICES</p><p className="text-black/70 mt-1">Pine R300, Dish R220, Bleach R200, Handy R210</p></div>
            <div className="bg-[#f3e5f5] rounded-xl p-3 border border-purple-200"><p className="font-bold text-[#111]">1L / STOCK</p><p className="text-black/70 mt-1">1L R30, 750ml R30, 400ml R15</p></div>
            <div className="bg-[#e3f2fd] rounded-xl p-3 border border-blue-200"><p className="font-bold text-[#111]">25L BULK</p><p className="text-black/70 mt-1">Pine R1400, Dish R750, Handy/Bleach R700</p></div>
          </div>
        </div>

        <div className="bg-white rounded- p-6 h-fit sticky top-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-black/10">
          <h3 className="font-black text-lg text-[#111]">Your Bulk List</h3>
          <p className="text-black/60 text-xs mt-1">Add multiple products before WhatsApp checkout</p>

          <div className="mt-6 space-y-3 max-h- overflow-y-auto pr-1">
            <AnimatePresence>
              {bulkCart.length === 0 && <p className="text-black/40 text-sm text-center py-10">No items yet. Select products to build bulk order.</p>}
              {bulkCart.map((item, i) => (
                <motion.div key={`${item.productId}-${item.variant.label}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="bg-[#f7f8f7] border border-black/5 rounded-2xl p-3 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-sm text-[#111]">{item.productName}</p>
                    <p className="text- text-black/60">{item.variant.label} • R{item.variant.price} x {item.qty}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="font-black text-[#0e7a8c]">R{item.variant.price * item.qty}</p>
                    <button type="button" onClick={() => setBulkCart(bulkCart.filter((_, idx) => idx!== i))} className="w-7 h-7 bg-white border border-black/10 rounded-full flex items-center justify-center text-red-500 hover:bg-red-50 transition">
                      <FaTrash size={10} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="border-t border-black/10 mt-6 pt-4">
            <div className="flex justify-between text-black/60 text-sm"><span>Subtotal ({totalUnits} units)</span><span className="font-bold text-[#111]">R{total}</span></div>
            <div className="flex justify-between font-black text-xl mt-2 text-[#111]"><span>Total</span><span>R{total}</span></div>

            {/* FIXED BUTTON - type="button" + direct anchor method */}
            <button
              type="button"
              onClick={handleWhatsApp}
              disabled={bulkCart.length === 0}
              className="w-full mt-5 bg-gradient-to-r from-[#0e7a8c] to-[#d81b60] text-white py-4 rounded-full font-black flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <FaWhatsapp size={18} /> Place Bulk Order via WhatsApp
            </button>

            <p className="text- text-black/40 text-center mt-3">Wholesale in KZN • Payment details sent on WhatsApp</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}