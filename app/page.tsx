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
  alternates: { canonical: "https://www.inqothovu.co.za" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <InqothovuShowcase />
      

      {/* LOCATION MAP - INQOTHOVU SMELLING GOOD */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text- font-bold border border-green-200 mb-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              VERIFIED ON GOOGLE MAPS
            </div>
            <h2 className="text-3xl md:text-4xl font-black leading-[0.9]">
              Inqothovu<br />
              <span className="text-[#0e7a8c]">Smelling Good</span>
            </h2>
            <p className="mt-3 text- font-bold">Mandlanzini Phase 7, Richards Bay, 3900</p>
            <p className="mt-3 text- leading-relaxed text-black/60">
              Visit <strong>Inqothovu Smelling Good</strong> next to Fantocy Creche, Mandlanzini. Top perfume & cleaning products store in Richards Bay.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <Link
                href="https://maps.app.goo.gl/ttRMQ49R37WNtkTU8"
                target="_blank"
                className="bg-black text-white px-6 py-3 rounded-full text- font-bold"
              >
                📍 Get Directions
              </Link>
              <Link href="/contact" className="border border-black px-6 py-3 rounded-full text- font-bold">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="rounded- overflow-hidden border border-black/10 h- bg-[#f5f5f5]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12662.266714613768!2d32.070953249931335!3d-28.747474739719113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1efa25d012a7f573%3A0x8bb0e43097671706!2sInqothovu%20Smelling%20Good!5e1!3m2!1sen!2sus!4v1789149586082!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Inqothovu Smelling Good - Mandlanzini Richards Bay"
            />
          </div>
        </div>
      </section>

       
      <WhatsAppButton />
    </>
  );
}