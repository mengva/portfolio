import { MetadataRoute } from "next";
import { profile } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/work", "/skills", "/contact"];

  return routes.map((route) => ({
    url: `${profile.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
