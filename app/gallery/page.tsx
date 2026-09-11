import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Fragrances in Richards Bay",
  description: "View the Inqothovu Smelling Good fragrance gallery from Richards Bay, KwaZulu-Natal.",
};

const galleryImages = [
  "g1.jpeg","g2.jpeg","g3.jpeg","g4.jpeg","g5.jpeg","g6.jpeg","g7.jpeg","g8.jpeg","g9.jpeg",
  "q1.jpeg","q2.jpeg","q3.jpeg","q5.jpeg","q6.jpeg","q7.jpeg","q8.jpeg","q9.jpeg",
];

function getImageLabel(filename: string) {
  const name = filename.replace(/\.[^/.]+$/, "");
  return `Inqothovu Smelling Good fragrance gallery image ${name.toUpperCase()}`;
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-[#010a33]">
      <section className="bg-[#010a33] px-6 py-12 md:py-20 text-center text-white">
        <p className="mb-3 text- font-semibold uppercase tracking-[0.25em] text-[#1df4f7]">
          Inqothovu Smelling Good
        </p>
        <h1 className="text-3xl font-black md:text-6xl">Our Gallery</h1>
        <p className="mx-auto mt-4 max-w-2xl text- md:text-lg leading-relaxed text-white/70">
          Explore our fragrances, diffusers and product moments from Richards Bay, KZN.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-3 md:px-6 py-6 md:py-16" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">Inqothovu product photos</h2>

        {/* MOBILE FIRST: 2 cols on mobile, 3 on sm, 4 on lg */}
        <div className="grid grid-cols-2 gap-2 md:gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((filename, index) => (
            <figure
              key={filename}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl bg-gray-100 shadow-sm md:shadow-lg"
            >
              <Image
                src={`/images/gallery/${filename}`}
                alt={getImageLabel(filename)}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={index < 4}
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"/>
            </figure>
          ))}
        </div>

        <p className="text-center text- text-black/40 mt-8 tracking-wide">17 PHOTOS • TAP TO ZOOM • RICHARDS BAY</p>
      </section>
    </main>
  );
}