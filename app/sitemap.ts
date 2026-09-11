import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://inqothovu.co.za";

const routes = [
  "",
  "/about",
  "/products",
  "/gallery",
  "/bulk-order",
  "/contact",
  "/downloadapp",
  "/services",
  "/pricing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}