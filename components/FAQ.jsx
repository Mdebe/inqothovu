"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "What products does Inqothovu Smelling Good offer?",
    answer:
      "We offer premium car diffusers, house diffusers, roll-ons, and luxury perfumes. All items are available individually or in bulk stock.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can order directly via WhatsApp at 066 444 9653, email at sinikeziwendiyaza@gmail.com, or through our online shop.",
  },
  {
    question: "Do you offer wholesale and bulk purchasing?",
    answer:
      "Yes! We provide bulk orders for businesses and resellers. Contact us for stock availability and pricing.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our store is located in MANDLANZINI PHASE 7, next to Fantocy Creche, Richards Bay 3900.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "Reach us via WhatsApp at 066 444 9653 or email sinikeziwendiyaza@gmail.com for any inquiries.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const primary = "#d41ed3";
  const accent = "#1df4f7";
  const secondary = "#a0a9a6";

  return (
    <section
      id="faq"
      className={`relative py-24 px-6 bg-gradient-to-br from-${primary} via-${secondary} to-${accent}`}
      style={{
        background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 50%, ${accent} 100%)`,
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-white">
          Frequently Asked Questions
        </h3>
        <p className="text-gray-200 mt-3 text-lg">
          Everything you need to know about Inqothovu products
        </p>

        <div className="mt-14 space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(209,30,211,0.6)]"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-semibold text-lg"
              >
                {item.question}

                <span
                  className={`text-2xl transition-transform duration-300 ${
                    openIndex === index ? `rotate-45 text-${accent}` : ""
                  }`}
                  style={{
                    color: openIndex === index ? accent : "white",
                  }}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-100 text-sm leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}