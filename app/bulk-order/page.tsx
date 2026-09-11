"use client";

import { useState, useMemo } from "react";
import { FaPlus, FaTrash, FaWhatsapp, FaBoxes, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type Variant = { label: string; price: number; isStock?: boolean; original?: number };
type Product = { id: string; name: string; category: "Fragrance" | "Cleaning"; variants: Variant[] };

const products: Product[] = [
  { id: "perfume", name: "Perfume 50ml", category: "Fragrance", variants: [{ label: "1x R100", price: 100 }, { label: "Stock 10x R500", price: 500, isStock: true, original: 1000 }] },
  { id: "house-diff", name: "House Diffuser", category: "Fragrance", variants: [{ label: "200ml R200", price: 200 }, { label: "Stock 10x R1500", price: 1500, isStock: true, original: 2000 }] },
  { id: "car-diff", name: "Car Diffuser", category: "Fragrance", variants: [{ label: "8ml R50", price: 50 }, { label: "Stock 10x R300", price: 300, isStock: true, original: 500 }] },
  { id: "roll-on", name: "Roll-On 10ml", category: "Fragrance", variants: [{ label: "1x R30", price: 30 }, { label: "Stock 10x R200", price: 200, isStock: true, original: 300 }] },
  { id: "dish", name: "Dish Washing Liquid", category: "Cleaning", variants: [{ label: "400ml R15", price: 15 }, { label: "750ml R50", price: 50 }, { label: "Stock 10x 750ml R300", price: 300, isStock: true, original: 500 }, { label: "5L R220", price: 220 }, { label: "25L R750", price: 750 }] },
  { id: "pine", name: "Pine Gel", category: "Cleaning", variants: [{ label: "1L R50", price: 50 }, { label: "Stock 10x 1L R300", price: 300, isStock: true, original: 500 }, { label: "5L R300", price: 300 }, { label: "25L R1400", price: 1400 }] },
  { id: "bleach", name: "Thickened Bleach", category: "Cleaning", variants: [{ label: "1L R30", price: 30 }, { label: "Stock 10x R200", price: 200, isStock: true, original: 300 }, { label: "5L R200", price: 200 }, { label: "25L R700", price: 700 }] },
  { id: "handy", name: "Handy Chemi", category: "Cleaning", variants: [{ label: "1L R30", price: 30 }, { label: "Stock 10x R200", price: 200, isStock: true, original: 300 }, { label: "5L R210", price: 210 }, { label: "25L R700", price: 700 }] },
];

type BulkItem = { productId: string; productName: string; variant: Variant; qty: number };

export default function BulkOrderPage() {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [selectedVariantLabel, setSelectedVariantLabel] = useState("");
  const [qty, setQty] = useState(10);
  const [bulkCart, setBulkCart] = useState<BulkItem[]>([]);
  const [customer, setCustomer] = useState({ name: "", business: "", area: "", phone: "" });
  const [specialOrder, setSpecialOrder] = useState("");

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
  const totalSavings = bulkCart.reduce((s, i) => s + (i.variant.original? (i.variant.original - i.variant.price) * i.qty : 0), 0);

  const handleWhatsApp = () => {
    if (bulkCart.length === 0 &&!specialOrder.trim()) {
      alert("Add products or write special order");
      return;
    }
    const phoneNumber = "+27664449653";
    const list = bulkCart.map(i => `• ${i.qty}x ${i.productName} (${i.variant.label}) = R${i.variant.price * i.qty}${i.variant.original? ` [SAVE R${(i.variant.original - i.variant.price)*i.qty}]` : ""}`).join("\n");

    const message = `Hello WP Inqothovu Smelling Good! 👋

*BULK / SPECIAL ORDER*
Name: ${customer.name || "N/A"}
Business: ${customer.business || "Personal"}
Area: ${customer.area || "KZN"}
Phone: ${customer.phone || "N/A"}

*PRODUCTS:*
${list || "No products selected - Special order only"}

${specialOrder? `*SPECIAL ORDER / NOTES:*\n${specialOrder}\n` : ""}
Total Units: ${totalUnits}
Subtotal: R${total}
${totalSavings > 0? `Total Savings: R${totalSavings}\n` : ""}*GRAND TOTAL: R${total}*

Please assist with payment & delivery/collection.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const win = window.open(url, "_blank");
    if (!win) window.location.href = url;
  };

  return (
    <main className="bg-[#fbfaf8] min-h-screen text-[#111]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0e7a8c] to-[#0a3a4a] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="tracking-[0.3em] text- font-bold opacity-70">WP INQOTHOVU • WHOLESALE • SPECIAL ORDERS</p>
            <h1 className="text-4xl md:text-6xl font-black mt-2 leading-none">Bulk & Special<br/>Orders</h1>
            <p className="mt-3 text-white/80 max-w-xl text-">Stock from R200 • Save up to R500 • 5L from R200 • 25L from R700 • Custom mix allowed</p>
          </div>
          <div className="bg-white text-[#0e7a8c] rounded- p-5 min-w- shadow-xl">
            <p className="text- tracking-[0.15em] font-bold flex items-center gap-2"><FaBoxes/> BULK CART</p>
            <p className="text-3xl font-black mt-1">R{total}</p>
            <p className="text- text-black/60">{totalUnits} units • {bulkCart.length} lines</p>
            {totalSavings>0 && <p className="text- text-green-600 font-bold mt-1">You Save R{totalSavings}</p>}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
        <div className="bg-white rounded- p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-black/5">
          <h3 className="font-black text-xl flex items-center gap-2"><FaStar className="text-[#d81b60]"/> Build Your Bulk Order</h3>

          <div className="mt-6 grid gap-5">
            <div>
              <label className="text- font-bold">Customer Details</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                <input placeholder="Your Name *" value={customer.name} onChange={e => setCustomer({...customer, name: e.target.value})} className="p-3 rounded-xl border border-black/10 text- bg-white" />
                <input placeholder="WhatsApp Number" value={customer.phone} onChange={e => setCustomer({...customer, phone: e.target.value})} className="p-3 rounded-xl border border-black/10 text- bg-white" />
                <input placeholder="Business Name (optional)" value={customer.business} onChange={e => setCustomer({...customer, business: e.target.value})} className="p-3 rounded-xl border border-black/10 text- bg-white" />
                <input placeholder="Area e.g. Richards Bay" value={customer.area} onChange={e => setCustomer({...customer, area: e.target.value})} className="p-3 rounded-xl border border-black/10 text- bg-white" />
              </div>
            </div>

            <div>
              <label className="text- font-bold">Select Product</label>
              <select value={selectedProductId} onChange={e => { setSelectedProductId(e.target.value); setSelectedVariantLabel(""); }} className="w-full mt-2 p-4 rounded-xl border border-black/10 bg-[#f9f9f9] font-semibold text-">
                <option value="">-- Choose Product --</option>
                <optgroup label="Fragrance">
                  {products.filter(p => p.category === "Fragrance").map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </optgroup>
                <optgroup label="Cleaning">
                  {products.filter(p => p.category === "Cleaning").map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </optgroup>
              </select>
            </div>

            {selectedProduct && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text- font-bold">Size / Variant</label>
                  <select value={selectedVariantLabel || selectedProduct.variants[0].label} onChange={e => setSelectedVariantLabel(e.target.value)} className="w-full mt-2 p-4 rounded-xl border border-black/10 font-semibold text- bg-white">
                    {selectedProduct.variants.map(v => <option key={v.label} value={v.label}>{v.label} {v.isStock?`🔥 SAVE R${v.original!-v.price}`:``} - R{v.price}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text- font-bold">Qty (bulk min 10)</label>
                  <input type="number" min={1} value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value)))} className="w-full mt-2 p-4 rounded-xl border border-black/10 font-bold bg-white" />
                </div>
              </div>
            )}

            {selectedVariant && (
              <div className="bg-[#f0f7f7] rounded-2xl p-4 flex justify-between items-center border border-[#0e7a8c]/10">
                <div><p className="text- font-bold">{selectedProduct?.name} ({selectedVariant.label})</p><p className="text- text-black/60">R{selectedVariant.price} x {qty} = R{selectedVariant.price * qty}</p></div>
                <button type="button" onClick={addToBulk} className="bg-[#0e7a8c] text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2"><FaPlus size={12}/> Add</button>
              </div>
            )}

            {/* SPECIAL ORDER */}
            <div className="mt-2">
              <label className="text- font-bold flex items-center gap-2"><FaStar className="text-[#d81b60]"/> Special Order / Custom Mix</label>
              <textarea value={specialOrder} onChange={e=>setSpecialOrder(e.target.value)} placeholder="E.g. Mix 5x Pine Gel 5L + 5x Dish 5L + 2x Perfume 50ml with custom label 'My Business'... or any special request for wedding, event, salon..." rows={4} className="w-full mt-2 p-4 rounded-xl border border-black/10 text- bg-[#fffafb] placeholder:text-black/30"/>
              <p className="text- text-black/40 mt-1">Leave empty if you only want bulk list. Special orders allow custom scents, labels, sizes.</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-[#e8f5e9] rounded-xl p-3 border border-green-200"><p className="font-bold text-">5L PRICES</p><p className="text- mt-1">Pine R300, Dish R220, Bleach R200, Handy R210</p></div>
            <div className="bg-[#f3e5f5] rounded-xl p-3 border border-purple-200"><p className="font-bold text-">STOCK 10x FROM R200</p><p className="text- mt-1">Roll-On R200, Car R300, Perfume R500, Pine R300</p></div>
            <div className="bg-[#e3f2fd] rounded-xl p-3 border border-blue-200"><p className="font-bold text-">25L BULK</p><p className="text- mt-1">Pine R1400, Dish R750, Handy/Bleach R700</p></div>
          </div>
        </div>

        <div className="bg-white rounded- p-6 h-fit sticky top-24 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-black/10">
          <h3 className="font-black text-">Your Bulk List</h3>
          <div className="mt-5 space-y-3 max-h- overflow-y-auto pr-1">
            <AnimatePresence>
              {bulkCart.length === 0 && <p className="text-black/40 text- text-center py-6">No items yet. Add products or write special order.</p>}
              {bulkCart.map((item, i) => (
                <motion.div key={`${item.productId}-${item.variant.label}-${i}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="bg-[#f7f8f7] border border-black/5 rounded-2xl p-3 flex justify-between items-center">
                  <div><p className="font-bold text-">{item.productName}</p><p className="text- text-black/60">{item.variant.label} • R{item.variant.price} x {item.qty}</p></div>
                  <div className="flex items-center gap-3"><p className="font-black text-[#0e7a8c] text-">R{item.variant.price * item.qty}</p><button type="button" onClick={() => setBulkCart(bulkCart.filter((_, idx) => idx!== i))} className="w-7 h-7 bg-white border rounded-full flex items-center justify-center text-red-500"><FaTrash size={10}/></button></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {specialOrder && <div className="mt-4 bg-[#fff0f5] border border-[#d81b60]/20 rounded-xl p-3"><p className="text- font-bold text-[#d81b60]">SPECIAL ORDER:</p><p className="text- mt-1 whitespace-pre-wrap">{specialOrder}</p></div>}

          <div className="border-t border-black/10 mt-6 pt-4">
            <div className="flex justify-between text-black/60 text-"><span>Subtotal ({totalUnits} units)</span><span className="font-bold text-[#111]">R{total}</span></div>
            {totalSavings>0 && <div className="flex justify-between text-green-600 text- mt-1"><span>Total Savings</span><span className="font-bold">-R{totalSavings}</span></div>}
            <div className="flex justify-between font-black text-xl mt-2"><span>Total</span><span>R{total}</span></div>
            <button type="button" onClick={handleWhatsApp} disabled={bulkCart.length===0 &&!specialOrder.trim()} className="w-full mt-5 bg-gradient-to-r from-[#0e7a8c] to-[#d81b60] text-white py-4 rounded-full font-black flex items-center justify-center gap-2 disabled:opacity-40 shadow-lg"><FaWhatsapp size={18}/> Place Order via WhatsApp</button>
            <p className="text- text-black/40 text-center mt-3">Forced WhatsApp open • KZN wholesale • Payment on WhatsApp</p>
          </div>
        </div>
      </section>
    </main>
  );
}