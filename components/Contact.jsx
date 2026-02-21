"use client";

export default function ContactForm() {
  const primary = "#d41ed3"; // purple
  const accent = "#1df4f7";  // cyan
  const secondary = "#a0a9a6"; // gray

  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-4xl font-bold" style={{ color: primary }}>
          Get in Touch
        </h3>
        <p className="mt-2 text-lg mb-12" style={{ color: secondary }}>
          Send us a message and our team at <strong>Inqothovu Smelling Good</strong> will get back to you promptly.
        </p>

        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/20">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full font-semibold py-3 rounded-xl text-white bg-gradient-to-r from-[#d41ed3] via-[#1df4f7] to-[#d41ed3] transition-all duration-300 hover:shadow-[0_0_15px_rgba(209,30,211,0.6)] hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}