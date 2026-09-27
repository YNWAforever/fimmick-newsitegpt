import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/launch-plan"] }, sitemap: "https://www.fimmick.com/sitemap.xml" };
}
