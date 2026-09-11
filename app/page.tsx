import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import AboutUs from "@/components/AboutUs";
import InqothovuShowcase from "@/components/InqothovuShowcase";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Top Perfume & Cleaning Products Store in Richards Bay | Inqothovu",
  description: "No.1 Perfume & Washing Product Store in Mandlanzini, Richards Bay. Car diffusers R50, Perfumes R100, Dishwashing liquid R15, Pine Gel R50. Bulk stock from R200. WhatsApp 066 444 9653.",
  keywords: [
    "top perfume store Richards Bay",
    "best perfume shop Richards Bay",
    "washing product store Richards Bay",
    "cleaning products store Mandlanzini",
    "dishwashing liquid Richards Bay",
    "pine gel Richards Bay",
    "car diffuser Richards Bay",
    "Inqothovu Smelling Good Mandlanzini"
  ],
  alternates: { canonical: "https://www.inqothovu.co.za" },
};

export default function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 pt-6">
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text- font-bold tracking-wide border border-green-200">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          TOP RATED IN MANDLANZINI, RICHARDS BAY • OPEN TODAY 08:00-19:00
        </div>
      </section>

      <AboutUs />
      <Services />
      <InqothovuShowcase />
      <WhyUs />

      {/* LOCATION MAP */}
      <section className="px-6 py-10 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black leading-[0.9]">
              Mandlanzini Phase 7,<br />
              <span className="text-[#0e7a8c]">Richards Bay, 3900</span>
            </h2>
            <p className="mt-4 text- leading-relaxed text-black/60">
              Visit <strong>Inqothovu Smelling Good</strong> at <strong>next to Fantocy Creche, Mandlanzini Phase 7, Richards Bay.</strong> 10 mins from Richards Bay CBD, on the way to Empangeni. Call / WhatsApp <strong>066 444 9653</strong> for pin location.
            </p>
            <div className="mt-5 flex gap-3">
              <Link href="https://wa.me/27664449653?text=Hello%20Inqothovu%2C%20I%20need%20directions" target="_blank" className="bg-black text-white px-5 py-3 rounded-full text- font-bold">Get Directions</Link>
              <Link href="/products" className="border px-5 py-3 rounded-full text- font-bold">View Products</Link>
            </div>
          </div>
          <div className="rounded- overflow-hidden border h- bg-[#f5f5f5]">
            <iframe title="Location" src="https://maps.google.com/maps?q=Mandlanzini%20Phase%207%20Richards%20Bay&t=&z=14&ie=UTF8&iwloc=&output=embed" className="w-full h-full border-0" loading="lazy" />
          </div>
        </div>
      </section>

      {/* TOP STORE SECTION - RANKS YOU */}
      <section className="px-6 py-14 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#0e7a8c] font-bold text- tracking-[0.2em]">TOP RATED STORE IN RICHARDS BAY</p>
          <h2 className="text-3xl md:text-5xl font-black mt-3 leading-[0.9]">Top Perfume & Washing Product Store</h2>

          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div className="bg-white/5 border border-white/10 rounded- p-6">
              <h3 className="font-black text-lg">🏆 #1 Perfume Store</h3>
              <p className="text- text-white/50 mt-1">Richards Bay & Mandlanzini</p>
              <ul className="mt-4 text- leading-7 text-white/70">
                <li>• Car Diffusers 8ml - R50 (Stock: 10 for R300)</li>
                <li>• House Diffusers - R200 (Stock: 10 for R1500)</li>
                <li>• 50ml Perfumes - R100 (Stock: 10 for R500)</li>
                <li>• Roll-on 10ml - R30 (Stock: 10 for R200)</li>
                <li>• 50+ long lasting fragrances</li>
              </ul>
              <Link href="/products" className="inline-block mt-5 bg-white text-black px-5 py-2 rounded-full text- font-bold">Shop Perfumes</Link>
            </div>

            <div className="bg-[#0e7a8c]/20 border border-[#0e7a8c]/30 rounded- p-6">
              <h3 className="font-black text-lg">🧹 Top Cleaning Products Store</h3>
              <p className="text- text-white/50 mt-1">Washing Products Supplier</p>
              <ul className="mt-4 text- leading-7 text-white/70">
                <li>• Dish Washing Liquid - 400ml R15, 750ml R50, 5L R220</li>
                <li>• Pine Gel - 1L R50, 5L R140, 20L R500</li>
                <li>• Thickened Bleach - 1L R30, 5L R130</li>
                <li>• Handy Chemi - 1L R30, 5L R130</li>
                <li>• Bulk 25L from R330 - Start Business R200</li>
              </ul>
              <Link href="/products" className="inline-block mt-5 bg-[#0e7a8c] text-white px-5 py-2 rounded-full text- font-bold">Shop Cleaning</Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <BookingForm />
      <Contact />

      {/* SEO TEXT FOR GOOGLE */}
      <section className="bg-[#fbfaf8] border-t px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-black">Inqothovu Smelling Good — Perfume & Cleaning Products Store Mandlanzini, Richards Bay 3900</h2>
          <p className="mt-3 text- leading-relaxed text-black/60">
            Inqothovu Smelling Good is the top rated perfume and washing product store located at Mandlanzini Phase 7 next to Fantocy Creche, Richards Bay, KwaZulu-Natal 3900, South Africa. We sell premium fragrances: car diffusers, house diffusers, roll-on and perfumes. We also supply household cleaning products: dish washing liquid, pine gel, thickened bleach and handy ammonia chemi. We offer retail and bulk stock prices from R200 to start your own business. Service areas: Mandlanzini, Richards Bay CBD, Brackenham, Aquadene, Meerensee, Empangeni, Esikhaleni, Mtubatuba, and all over KZN. Order on WhatsApp 066 444 9653 or email sinikeziwendiyaza@gmail.com. Best perfume store in Richards Bay. Best cleaning products store in Richards Bay.
          </p>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}