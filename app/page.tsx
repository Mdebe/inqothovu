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
 

      <AboutUs />
      <Services />
      <InqothovuShowcase />
       

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

       
       
      

      

      <WhatsAppButton />
    </>
  );
}