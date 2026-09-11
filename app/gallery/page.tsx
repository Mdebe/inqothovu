import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Fragrances in Richards Bay",
  description:
    "View the Inqothovu Smelling Good fragrance gallery from Richards Bay, KwaZulu-Natal.",
};

const galleryImages = [
  "g1.jpeg",
  "g2.jpeg",
  "g3.jpeg",
  "g4.jpeg",
  "g5.jpeg",
  "g6.jpeg",
  "g7.jpeg",
  "g8.jpeg",
  "g9.jpeg",
  "q1.jpeg",
  "q2.jpeg",
  "q3.jpeg",
  "q5.jpeg",
  "q6.jpeg",
  "q7.jpeg",
  "q8.jpeg",
  "q9.jpeg",
];

function getImageLabel(filename: string) {
  const name = filename.replace(/\.[^/.]+$/, "");
  return `Inqothovu Smelling Good fragrance gallery image ${name.toUpperCase()}`;
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-[#010a33]">
       

      <section className="bg-[#010a33] px-6 py-20 text-center text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#1df4f7]">
          Inqothovu Smelling Good
        </p>
        <h1 className="text-4xl font-bold md:text-6xl">Our Gallery</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
          Explore our fragrances, diffusers and product moments from Richards
          Bay, KwaZulu-Natal.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">
          Inqothovu product photos
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((filename, index) => (
            <figure
              key={filename}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 shadow-lg"
            >
              <Image
                src={`/images/gallery/${filename}`}
                alt={getImageLabel(filename)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 3}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

       
    </main>
  );
}