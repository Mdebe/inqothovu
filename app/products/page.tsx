"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { FaShoppingCart, FaTimes, FaTrash, FaPlus, FaMinus, FaFire, FaBoxes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type Variant = { label: string; price: number; size: string; isStock?: boolean; originalTotal?: number };
type Product = {
  id: string;
  name: string;
  category: "Fragrance" | "Cleaning";
  desc: string;
  img: string;
  variants: Variant[];
  color: string;
};

type CartItem = Product & { selectedVariant: Variant; qty: number };

const products: Product[] = [
  {
    id: "perfume",
    name: "Perfume",
    category: "Fragrance",
    desc: "Long lasting luxury fragrance - R100 each",
    img: "/images/pe1.png",
    color: "#0e7a8c",
    variants: [
      { label: "1x - R100", size: "50ml", price: 100 },
      { label: "Stock 10x - R500", size: "10x50ml", price: 500, isStock: true, originalTotal: 1000 },
    ]
  },
  {
    id: "house-diff",
    name: "House Diffuser",
    category: "Fragrance",
    desc: "Premium reed diffuser",
    img: "/images/house.png",
    color: "#0e7a8c",
    variants: [
      { label: "1x - R200", size: "200ml", price: 200 },
      { label: "Stock 10x - R1500", size: "10x200ml", price: 1500, isStock: true, originalTotal: 2000 },
    ]
  },
  {
    id: "car-diff",
    name: "Car Diffuser",
    category: "Fragrance",
    desc: "Luxury car fragrance - R50 each, Stock 10 for R300",
    img: "/images/car.jpg",
    color: "#d81b60",
    variants: [
      { label: "1x - R50", size: "8ml", price: 50 },
      { label: "Stock 10x - R300", size: "10x8ml", price: 300, isStock: true, originalTotal: 500 },
    ]
  },
  {
    id: "roll-on",
    name: "Roll-On Fragrance",
    category: "Fragrance",
    desc: "Compact roll-on - R30 each, Stock 10 for R200",
    img: "/images/hero1.jpg",
    color: "#d81b60",
    variants: [
      { label: "1x - R30", size: "10ml", price: 30 },
      { label: "Stock 10x - R200", size: "10x10ml", price: 200, isStock: true, originalTotal: 300 },
    ]
  },
  {
    id: "dish-liquid",
    name: "Dish Washing Liquid",
    category: "Cleaning",
    desc: "Powerful on grease - 750ml R50 each, Stock 10 for R300",
    img: "/images/dish-washing.png",
    color: "#0e7a0e",
    variants: [
      { label: "400ml - R15", size: "400ml", price: 15 },
      { label: "750ml - R50", size: "750ml", price: 50 },
      { label: "Stock 10x 750ml - R300", size: "10x750ml", price: 300, isStock: true, originalTotal: 500 },
      { label: "5L - R220", size: "5L", price: 220 },
      { label: "25L - R750", size: "25L", price: 750 },
    ]
  },
  {
    id: "pine-gel",
    name: "Pine Gel",
    category: "Cleaning",
    desc: "Long lasting freshness - 1L R50 each, Stock 10 for R300",
    img: "/images/pine-gel.png",
    color: "#1a5c1a",
    variants: [
      { label: "1L - R50", size: "1L", price: 50 },
      { label: "Stock 10x 1L - R300", size: "10x1L", price: 300, isStock: true, originalTotal: 500 },
      { label: "5L - R300", size: "5L", price: 300 },
      { label: "25L - R1400", size: "25L", price: 1400 },
    ]
  },
  {
    id: "bleach",
    name: "Thickened Bleach",
    category: "Cleaning",
    desc: "Kills germs • Whitens",
    img: "/images/bleach.png",
    color: "#1565c0",
    variants: [
      { label: "1L - R30", size: "1L", price: 30 },
      { label: "Stock 10x 1L - R200", size: "10x1L", price: 200, isStock: true, originalTotal: 300 },
      { label: "5L - R200", size: "5L", price: 200 },
      { label: "25L - R700", size: "25L", price: 700 },
    ]
  },
  {
    id: "handy-chemi",
    name: "Handy Chemi",
    category: "Cleaning",
    desc: "Multi-purpose cleaner",
    img: "/images/handy-chemi.png",
    color: "#6a1b9a",
    variants: [
      { label: "1L - R30", size: "1L", price: 30 },
      { label: "Stock 10x 1L - R200", size: "10x1L", price: 200, isStock: true, originalTotal: 300 },
      { label: "5L - R210", size: "5L", price: 210 },
      { label: "25L - R700", size: "25L", price: 700 },
    ]
  },
];

export default function ProductsPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [filter, setFilter] = useState<"All" | "Fragrance" | "Cleaning">("All");
  const [selectedVariants, setSelectedVariants] = useState<Record<string, Variant>>({});

  const filtered = useMemo(() => filter === "All"? products : products.filter(p => p.category === filter), [filter]);

  const addToCart = (product: Product) => {
    const variant = selectedVariants[product.id] || product.variants[0];
    const existing = cart.find(c => c.id === product.id && c.selectedVariant.label === variant.label);
    if (existing) {
      setCart(cart.map(c => c.id === product.id && c.selectedVariant.label === variant.label? {...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, {...product, selectedVariant: variant, qty: 1 }]);
    }
    setCartOpen(true);
  };

  const total = cart.reduce((sum, item) => sum + item.selectedVariant.price * item.qty, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  // === FORCED WHATSAPP OPEN ===
  const handleCheckout = () => {
    if (cart.length === 0) return;
    const phoneNumber = "27723340746"; // use same number as navbar
    const orderList = cart.map(i => {
      const save = i.selectedVariant.originalTotal? ` (SAVE R${i.selectedVariant.originalTotal - i.selectedVariant.price})` : "";
      return `• ${i.qty}x ${i.name} (${i.selectedVariant.label}) - R${i.selectedVariant.price * i.qty}${save}`;
    }).join("\n");

    const message = `Hello WP Inqothovu Smelling Good! 👋\n\nI would like to order:\n${orderList}\n\nTotal: R${total}\n\nPlease confirm availability and delivery.`;
    const encoded = encodeURIComponent(message);
    const waMeUrl = `https://wa.me/${phoneNumber}?text=${encoded}`;

    // Force open - 100% works on mobile & desktop
    const win = window.open(waMeUrl, "_blank");
    if (!win) {
      window.location.href = waMeUrl; // fallback if popup blocked
    }
  };

  return (
    <main className="bg-[#fbfaf8] text-[#111] min-h-screen">

      <section className="relative h- md:h- w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e7a8c] via-[#0a6a7a] to-[#d81b60]" />
        <div className="relative text-white text-center px-6 max-w-3xl">
          <p className="tracking-[0.3em] text- font-bold opacity-80">WP INQOTHOVU • STOCK FROM R200</p>
          <h1 className="text-5xl md:text-7xl font-black mt-2 leading-none">SMELLING GOOD</h1>
          <p className="mt-3 text-white/80 text-">Roll-On Stock 10 for R200 • Perfume 10 for R500 • Car Diffuser 10 for R300 • Pine Gel 10 for R300 • Dish Wash 10 for R300</p>
        </div>
        <button onClick={() => setCartOpen(true)} className="absolute top-6 right-6 bg-white text-[#0e7a8c] p-4 rounded-full shadow-xl">
          <FaShoppingCart />
          {count > 0 && <span className="absolute -top-2 -right-2 bg-[#d81b60] text-white text- font-bold w-6 h-6 flex items-center justify-center rounded-full">{count}</span>}
        </button>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-2 items-center">
        {["All", "Fragrance", "Cleaning"].map(c => (
          <button key={c} onClick={() => setFilter(c as any)} className={`px-5 py-2 rounded-full text- font-bold transition ${filter === c? "bg-[#0e7a8c] text-white" : "bg-white border border-black/10 text-black/70"}`}>{c}</button>
        ))}
        <div className="ml-auto flex items-center gap-2 bg-[#d81b60] text-white px-4 py-1.5 rounded-full text- font-bold"><FaBoxes /> STOCK DEALS: SAVE UP TO 50%</div>
      </div>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(product => {
            const sel = selectedVariants[product.id] || product.variants[0];
            return (
              <motion.div key={product.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded- overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col">
                <div className="relative h-60 bg-[#f7f7f7]">
                  <Image src={product.img} alt={product.name} fill className="object-contain p-6" />
                  <span className="absolute top-3 left-3 text- font-bold tracking-[0.15em] bg-black text-white px-3 py-1 rounded-full">{product.category.toUpperCase()}</span>
                  {product.variants.some(v => v.isStock) && <span className="absolute top-3 right-3 text- font-bold bg-[#d81b60] text-white px-3 py-1 rounded-full flex items-center gap-1"><FaFire /> STOCK PRICE</span>}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text- leading-tight">{product.name}</h3>
                  <p className="text- text-black/60 mt-1 leading-snug">{product.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.variants.map(v => (
                      <button key={v.label} onClick={() => setSelectedVariants({...selectedVariants, [product.id]: v })} className={`text- px-3 py-1.5 rounded-full border font-semibold transition ${sel.label === v.label? "bg-[#0e7a8c] text-white border-[#0e7a8c]" : v.isStock? "bg-[#fff0f5] border-[#d81b60]/30 text-[#d81b60]" : "bg-[#f5f5f5] border-black/10 text-black/70"}`}>
                        {v.label} {v.isStock && v.originalTotal && <span className="line-through opacity-60 text- ml-1">R{v.originalTotal}</span>}
                      </button>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xl font-black" style={{ color: product.color }}>R{sel.price}</p>
                      {sel.isStock && sel.originalTotal && <p className="text- text-green-600 font-bold">Save R{sel.originalTotal - sel.price}!</p>}
                    </div>
                    <button type="button" onClick={() => addToCart(product)} className="bg-[#111] text-white px-5 py-2 rounded-full text- font-bold hover:bg-[#0e7a8c] transition">Add +</button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCartOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 right-0 h-full w-[92%] sm:w-96 bg-white shadow-2xl z-50 flex flex-col">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-black">Cart ({count})</h2>
                <button type="button" onClick={() => setCartOpen(false)} className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center"><FaTimes /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {cart.length === 0 && <p className="text-center text-black/50 mt-20 text-">Your cart is empty. Add some WP Inqothovu products!</p>}
                {cart.map((item, idx) => (
                  <div key={idx} className="flex gap-3 bg-[#f8f8f7] rounded-2xl p-3 border border-black/5">
                    <div className="relative w-16 h-16 bg-white rounded-xl overflow-hidden border"><Image src={item.img} alt={item.name} fill className="object-contain p-1" /></div>
                    <div className="flex-1">
                      <p className="font-bold text-">{item.name}</p>
                      <p className="text- text-black/60">{item.selectedVariant.label} {item.selectedVariant.isStock && "🔥"}</p>
                      <p className="text- font-bold text-[#0e7a8c]">R{item.selectedVariant.price * item.qty} {item.selectedVariant.isStock && item.selectedVariant.originalTotal && <span className="text- text-green-600">(Save R{(item.selectedVariant.originalTotal - item.selectedVariant.price) * item.qty})</span>}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button type="button" onClick={() => setCart(cart.map((c, i) => i === idx? {...c, qty: Math.max(1, c.qty - 1) } : c))} className="w-6 h-6 bg-white border rounded-full flex items-center justify-center"><FaMinus size={10} /></button>
                        <span className="text- font-bold">{item.qty}</span>
                        <button type="button" onClick={() => setCart(cart.map((c, i) => i === idx? {...c, qty: c.qty + 1 } : c))} className="w-6 h-6 bg-white border rounded-full flex items-center justify-center"><FaPlus size={10} /></button>
                      </div>
                    </div>
                    <button type="button" onClick={() => setCart(cart.filter((_, i) => i!== idx))} className="text-red-500"><FaTrash size={14} /></button>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t bg-white">
                <div className="flex justify-between font-black text-lg mb-4"><span>Total</span><span>R{total}</span></div>
                <button type="button" onClick={handleCheckout} disabled={cart.length === 0} className="w-full bg-gradient-to-r from-[#0e7a8c] to-[#d81b60] text-white font-bold py-4 rounded-full disabled:opacity-40 shadow-lg text-">Checkout via WhatsApp</button>
                <p className="text- text-center text-black/50 mt-2">Stock: Roll-On 10 for R200 • Perfume 10 for R500 • Car Diff 10 for R300</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}