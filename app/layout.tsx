import { ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://inqothovu.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Inqothovu Smelling Good | Fragrances in Richards Bay",
    template: "%s | Inqothovu Smelling Good",
  },

  description:
    "Shop premium car diffusers, house diffusers, roll-on fragrances and perfumes from Inqothovu Smelling Good in Richards Bay, KwaZulu-Natal.",

  keywords: [
    "fragrances in Richards Bay",
    "perfumes Richards Bay",
    "car diffusers KwaZulu-Natal",
    "house diffusers Richards Bay",
    "bulk fragrance orders KwaZulu-Natal",
    "Inqothovu Smelling Good",
  ],

  applicationName: "Inqothovu Smelling Good",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Inqothovu Smelling Good | Fragrances in Richards Bay",

    description:
      "Premium car diffusers, house diffusers, roll-ons and perfumes based in Richards Bay, KwaZulu-Natal.",

    url: siteUrl,

    siteName: "Inqothovu Smelling Good",

    locale: "en_ZA",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Inqothovu Smelling Good",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

        {/* Sticky Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="w-full">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Local Business SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "LocalBusiness",

              name: "Inqothovu Smelling Good",

              url: siteUrl,

              description:
                "Premium car diffusers, house diffusers, roll-on fragrances and perfumes.",

              telephone: "+27 66 444 9653",

              email: "sinikeziwendiyaza@gmail.com",

              address: {
                "@type": "PostalAddress",

                streetAddress:
                  "Mandlanzini Phase 7, next to Fantocy Creche",

                addressLocality: "Richards Bay",

                addressRegion: "KwaZulu-Natal",

                postalCode: "3900",

                addressCountry: "ZA",
              },

              areaServed: [
                "Richards Bay",
                "Mandlanzini",
                "KwaZulu-Natal",
              ],

              priceRange: "R",

              sameAs: [],
            }),
          }}
        />

      </body>
    </html>
  );
}