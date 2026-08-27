import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.example.com";
  return [
    "", "/work-details", "/how-it-works", "/about", "/contact", "/register"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
