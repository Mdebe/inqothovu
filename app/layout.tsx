import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://www.inqothovu.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Top Perfume & Cleaning Products Store in Richards Bay | Inqothovu",
    template: "%s | Inqothovu Smelling Good",
  },

  description:
    "No.1 Perfume & Washing Product Store in Mandlanzini, Richards Bay. Car diffusers R50, House diffusers R200, Roll-on R30, Perfumes R100, Dishwashing liquid R15, Pine Gel R50. Bulk stock from R200. WhatsApp 066 444 9653.",

  keywords: [
    "top perfume store Richards Bay",
    "best perfume shop Richards Bay",
    "perfume store Mandlanzini",
    "washing product store Richards Bay",
    "cleaning products store Richards Bay",
    "dishwashing liquid Richards Bay",
    "pine gel Richards Bay",
    "car diffusers Richards Bay",
    "house diffusers KZN",
    "bulk fragrances KZN",
    "Inqothovu Smelling Good",
    "Inqothovu Mandlanzini Richards Bay"
  ],

  applicationName: "Inqothovu Smelling Good",
  authors: [{ name: "Inqothovu Smelling Good" }],
  creator: "Inqothovu Smelling Good",
  category: "Perfume & Cleaning Products Store",
  
  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Top Perfume & Cleaning Products Store in Richards Bay | Inqothovu",
    description: "Best fragrances & washing products in Mandlanzini, Richards Bay. Car diffuser R50, House diffuser R200, Perfume R100, Roll-on R30, Dish liquid R15. Stock from R200.",
    url: siteUrl,
    siteName: "Inqothovu Smelling Good",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Inqothovu Smelling Good - Top Perfume & Cleaning Store Richards Bay",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Perfume & Cleaning Products Store Richards Bay",
    description: "Car diffusers, perfumes, dishwashing liquid, pine gel, bleach. Bulk from R200. Mandlanzini, Richards Bay.",
    images: [`${siteUrl}/logo.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "L-zTMWIB0vbGUXXUn74Z3DXm0292MAil-ZUzbr34MRI",
  },
};

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-ZA">
      <head>
        <meta name="google" content="notranslate" />
        <meta name="googlebot" content="notranslate" />
        <link rel="canonical" href="https://www.inqothovu.co.za" />
      </head>
      <body className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />

        {/* TOP STORE SEO - Perfume + Cleaning */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Inqothovu Smelling Good - Top Perfume & Cleaning Products Store",
              alternateName: [
                "Top Perfume Store Richards Bay",
                "Best Washing Products Mandlanzini",
                "WP Inqothovu Smelling Good"
              ],
              url: "https://www.inqothovu.co.za",
              logo: "https://www.inqothovu.co.za/logo.png",
              image: "https://www.inqothovu.co.za/logo.png",
              description: "Top rated perfume and washing products store in Mandlanzini, Richards Bay. Car diffusers R50, house diffusers R200, perfumes R100, roll-on R30, dishwashing liquid R15, pine gel R50, bleach R30. Bulk stock from R200 to start business.",
              telephone: "+27664449653",
              email: "sinikeziwendiyaza@gmail.com",
              priceRange: "R15-R1500",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mandlanzini Phase 7, next to Fantocy Creche",
                addressLocality: "Richards Bay",
                addressRegion: "KwaZulu-Natal",
                postalCode: "3900",
                addressCountry: "ZA"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -28.771,
                longitude: 32.09
              },
              areaServed: [
                "Richards Bay",
                "Mandlanzini",
                "Brackenham",
                "Aquadene",
                "Empangeni",
                "eSikhaleni",
                "KwaZulu-Natal",
                "South Africa"
              ],
              openingHours: ["Mo-Sa 08:00-19:00", "Su 09:00-17:00"],
              department: [
                {
                  "@type": "Store",
                  name: "Perfume Department",
                  description: "Best perfume store in Richards Bay - Car diffusers, house diffusers, roll-ons, perfumes"
                },
                {
                  "@type": "Store",
                  name: "Cleaning Products Department", 
                  description: "Top washing products store - Dishwashing liquid, pine gel, thickened bleach, handy chemi"
                }
              ],
              sameAs: ["https://wa.me/27664449653"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Fragrances & Cleaning Products",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Car Diffuser" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "House Diffuser" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Perfume" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Dish Washing Liquid" } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pine Gel" } }
                ]
              }
            }),
          }}
        />
      </body>
    </html>
  );
}