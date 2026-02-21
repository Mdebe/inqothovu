"use client";

import Image from "next/image";

const reasons = [
  "Long-Lasting Fragrances",
  "Affordable Luxury",
  "Bulk & Wholesale Available",
  "Trusted Local Brand",
];

export default function WhyUs() {
  const primary = "#d41ed3";
  const accent = "#1df4f7";
  const secondary = "#a0a9a6";

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Image */}
        <div className="md:w-1/2 relative h-96 w-full rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/why-us.jpg"
            alt="Why Choose Inqothovu"
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-4xl font-bold">
            Why Choose <span style={{ color: primary }}>Inqothovu</span>?
          </h3>

          <p className="mt-4 text-lg mb-8" style={{ color: secondary }}>
            Inqothovu Smelling Good delivers premium car diffusers, house
            diffusers, roll-ons, and perfumes crafted to give you a lasting
            impression. We serve both individual buyers and bulk stock resellers.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="
                  relative flex items-start gap-4
                  bg-white
                  p-5
                  rounded-2xl
                  shadow-lg
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-2xl
                  group
                "
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${primary}, ${accent})`,
                  }}
                />

                <div className="relative flex items-start gap-4">
                  {/* Icon Circle */}
                  <div
                    className="h-12 w-12 flex items-center justify-center font-bold text-lg rounded-full"
                    style={{
                      background: `${accent}20`,
                      color: primary,
                    }}
                  >
                    {reason.split(" ")[0][0]}
                  </div>

                  <h4
                    className="font-semibold self-center text-lg"
                    style={{ color: "#111" }}
                  >
                    {reason}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}