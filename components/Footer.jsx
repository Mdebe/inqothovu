"use client";

export default function Footer() {
  const primary = "#d41ed3"; // purple
  const accent = "#1df4f7";  // cyan
  const secondary = "#a0a9a6"; // gray

  return (
    <footer
      className="text-white py-6"
      style={{
        background: `linear-gradient(90deg, ${primary} 0%, ${accent} 50%, ${primary} 100%)`,
      }}
    >
      <div className="border-t border-white/20 pt-4 text-center text-white/90 text-xs md:text-sm space-y-1">
        <p>&copy; {new Date().getFullYear()} Inqothovu Smelling Good. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a
            href="https://github.com/yourusername"
            className="hover:text-[#1df4f7] transition-colors hover:underline"
          >
            Mdebe
          </a>
        </p>
      </div>
    </footer>
  );
}