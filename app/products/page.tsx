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
  { id: "perfume", name: "Perfume", category: "Fragrance", desc: "Long lasting luxury - R100 each", img: "/images/pe1.png", color: "#0e7a8c", variants: [{ label: "1x - R100", size: "50ml", price: 100 }, { label: "Stock 10x - R500", size: "10x50ml", price: 500, isStock: true, originalTotal: 1000 }] },
  { id: "house-diff", name: "House Diffuser", category: "Fragrance", desc: "Premium reed diffuser", img: "/images/house.png", color: "#0e7a8c", variants: [{ label: "1x - R200", size: "200ml", price: 200 }, { label: "Stock 10x - R1500", size: "10x200ml", price: 1500, isStock: true, originalTotal: 2000 }] },
  { id: "car-diff", name: "Car Diffuser", category: "Fragrance", desc: "R50 each, 10 for R300", img: "/images/car.jpg", color: "#d81b60", variants: [{ label: "1x - R50", size: "8ml", price: 50 }, { label: "Stock 10x - R300", size: "10x8ml", price: 300, isStock: true, originalTotal: 500 }] },
  { id: "roll-on", name: "Roll-On", category: "Fragrance", desc: "R30 each, 10 for R200", img: "/images/hero1.jpg", color: "#d81b60", variants: [{ label: "1x - R30", size: "10ml", price: 30 }, { label: "Stock 10x - R200", size: "10x10ml", price: 200, isStock: true, originalTotal: 300 }] },
  { id: "dish-liquid", name: "Dish Liquid", category: "Cleaning", desc: "750ml R50, 10 for R300", img: "/images/dish-washing.png", color: "#0e7a0e", variants: [{ label: "400ml - R15", size: "400ml", price: 15 }, { label: "750ml - R50", size: "750ml", price: 50 }, { label: "Stock 10x - R300", size: "10x750ml", price: 300, isStock: true, originalTotal: 500 }, { label: "5L - R220", size: "5L", price: 220 }, { label: "25L - R750", size: "25L", price: 750 }] },
  { id: "pine-gel", name: "Pine Gel", category: "Cleaning", desc: "1L R50, 10 for R300", img: "/images/pine-gel.png", color: "#1a5c1a", variants: [{ label: "1L - R50", size: "1L", price: 50 }, { label: "Stock 10x - R300", size: "10x1L", price: 300, isStock: true, originalTotal: 500 }, { label: "5L - R300", size: "5L", price: 300 }, { label: "25L - R1400", size: "25L", price: 1400 }] },
  { id: "bleach", name: "Bleach", category: "Cleaning", desc: "Kills germs", img: "/images/bleach.png", color: "#1565c0", variants: [{ label: "1L - R30", size: "1L", price: 30 }, { label: "Stock 10x - R200", size: "10x1L", price: 200, isStock: true, originalTotal: 300 }, { label: "5L - R200", size: "5L", price: 200 }, { label: "25L - R700", size: "25L", price: 700 }] },
  { id: "handy-chemi", name: "Handy Chemi", category: "Cleaning", desc: "Multi-purpose", img: "/images/handy-chemi.png", color: "#6a1b9a", variants: [{ label: "1L - R30", size: "1L", price: 30 }, { label: "Stock 10x - R200", size: "10x1L", price: 200, isStock: true, originalTotal: 300 }, { label: "5L - R210", size: "5L", price: 210 }, { label: "25L - R700", size: "25L", price: 700 }] },
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

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const phoneNumber = "27664449653"; // +27 66 444 9653 no spaces
    const orderList = cart.map(i => `• ${i.qty}x ${i.name} (${i.selectedVariant.label}) - R${i.selectedVariant.price * i.qty}${i.selectedVariant.originalTotal?` SAVE R${i.selectedVariant.originalTotal - i.selectedVariant.price}`:""}`).join("\n");
    const message = `Hello WP Inqothovu! 👋\n\nI would like to order:\n${orderList}\n\nTotal: R${total}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const win = window.open(url, "_blank");
    if (!win) window.location.href = url;
  };

  return (
    <main className="bg-[#fbfaf8] text-[#111] min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0e7a8c] to-[#d81b60] px-4 md:px-6 py-10 md:py-16 flex items-center justify-center text-white">
        <div className="text-center max-w-3xl">
          <p className="tracking-[0.2em] text- md:text- font-bold opacity-80">WP INQOTHOVU • STOCK FROM R200</p>
          <h1 className="text-3xl md:text-6xl font-black mt-2 leading-none">SMELLING GOOD</h1>
          <p className="mt-2 text- md:text- text-white/80">10x from R200 • Save up to 50%</p>
        </div>
        <button onClick={() => setCartOpen(true)} className="absolute top-4 right-4 md:top-6 md:right-6 bg-white text-[#0e7a8c] p-3 md:p-4 rounded-full shadow-xl">
          <FaShoppingCart size={16} />
          {count > 0 && <span className="absolute -top-2 -right-2 bg-[#d81b60] text-white text- font-bold w-5 h-5 flex items-center justify-center rounded-full">{count}</span>}
        </button>
      </section>

      <div className="max-w-7xl mx-auto px-3 md:px-6 py-4 flex flex-wrap gap-2 items-center">
        {["All", "Fragrance", "Cleaning"].map(c => (
          <button key={c} onClick={() => setFilter(c as any)} className={`px-4 py-2 rounded-full text- md:text- font-bold transition ${filter === c? "bg-[#0e7a8c] text-white" : "bg-white border border-black/10 text-black/70"}`}>{c}</button>
        ))}
        <div className="ml-auto bg-[#d81b60] text-white px-3 py-1 rounded-full text- font-bold flex items-center gap-1"><FaBoxes size={10}/> STOCK DEALS</div>
      </div>

      <section className="max-w-7xl mx-auto px-2 md:px-6 pb-24">
        {/* MOBILE FIRST GRID: 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 gap-2 md:gap-6 lg:grid-cols-4">
          {filtered.map(product => {
            const sel = selectedVariants[product.id] || product.variants[0];
            return (
              <motion.div key={product.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded- md:rounded- overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-black/5 flex flex-col">
                <div className="relative h-32 md:h-56 bg-[#f7f7f7]">
                  <Image src={product.img} alt={product.name} fill className="object-contain p-3 md:p-6" sizes="50vw" />
                  <span className="absolute top-2 left-2 text- md:text- font-bold tracking-wide bg-black text-white px-2 py-1 rounded-full">{product.category.toUpperCase()}</span>
                  {sel.isStock && <span className="absolute top-2 right-2 text- md:text- font-bold bg-[#d81b60] text-white px-2 py-1 rounded-full flex items-center gap-0.5"><FaFire size={8}/> STOCK</span>}
                </div>
                <div className="p-2.5 md:p-5 flex-1 flex flex-col">
                  <h3 className="font-black text- md:text- leading-tight">{product.name}</h3>
                  <p className="text- md:text- text-black/60 mt-0.5 line-clamp-1">{product.desc}</p>

                  <div className="mt-2 md:mt-3 flex flex-wrap gap-1">
                    {product.variants.slice(0,3).map(v => (
                      <button key={v.label} onClick={() => setSelectedVariants({...selectedVariants, [product.id]: v })} className={`text- md:text- px-2 py-1 rounded-full border font-semibold ${sel.label === v.label? "bg-[#0e7a8c] text-white border-[#0e7a8c]" : v.isStock? "bg-[#fff0f5] border-[#d81b60]/20 text-[#d81b60]" : "bg-[#f5f5f5] border-black/5 text-black/60"}`}>
                        {v.label.split(" - ")[0]}
                      </button>
                    ))}
                    {product.variants.length > 3 && <span className="text- text-black/40 px-1">+{product.variants.length-3}</span>}
                  </div>

                  <div className="mt-auto pt-2 md:pt-4 flex items-center justify-between gap-1">
                    <div>
                      <p className="text- md:text- font-black" style={{ color: product.color }}>R{sel.price}</p>
                      {sel.isStock && sel.originalTotal && <p className="text- md:text- text-green-600 font-bold">Save R{sel.originalTotal - sel.price}</p>}
                    </div>
                    <button type="button" onClick={() => addToCart(product)} className="bg-[#111] text-white px-3 md:px-5 py-2 md:py-2 rounded-full text- md:text- font-bold">Add</button>
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
                {cart.length === 0 && <p className="text-center text-black/50 mt-20 text-">Your cart is empty</p>}
                {cart.map((item, idx) => (
                  <div key={idx} className="flex gap-3 bg-[#f8f8f7] rounded-2xl p-3 border border-black/5">
                    <div className="relative w-14 h-14 bg-white rounded-xl overflow-hidden border"><Image src={item.img} alt={item.name} fill className="object-contain p-1" /></div>
                    <div className="flex-1">
                      <p className="font-bold text-">{item.name}</p>
                      <p className="text- text-black/60">{item.selectedVariant.label}</p>
                      <p className="text- font-bold text-[#0e7a8c]">R{item.selectedVariant.price * item.qty}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button onClick={() => setCart(cart.map((c, i) => i === idx? {...c, qty: Math.max(1, c.qty - 1) } : c))} className="w-6 h-6 bg-white border rounded-full flex items-center justify-center"><FaMinus size={8}/></button>
                        <span className="text- font-bold">{item.qty}</span>
                        <button onClick={() => setCart(cart.map((c, i) => i === idx? {...c, qty: c.qty + 1 } : c))} className="w-6 h-6 bg-white border rounded-full flex items-center justify-center"><FaPlus size={8}/></button>
                      </div>
                    </div>
                    <button onClick={() => setCart(cart.filter((_, i) => i!== idx))} className="text-red-500"><FaTrash size={12}/></button>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t bg-white">
                <div className="flex justify-between font-black text-lg mb-4"><span>Total</span><span>R{total}</span></div>
                <button type="button" onClick={handleCheckout} disabled={cart.length === 0} className="w-full bg-gradient-to-r from-[#0e7a8c] to-[#d81b60] text-white font-bold py-4 rounded-full disabled:opacity-40 shadow-lg text-">Checkout via WhatsApp</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}