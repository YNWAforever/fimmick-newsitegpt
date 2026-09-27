import type { MetadataRoute } from "next";
import { articles, caseStudies, industries, services } from "@/app/data";
import { platformCapabilities } from "@/app/platform-data";
import { aboutDeepDives, transformationDeepDives } from "@/app/section-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://www.fimmick.com";
  const now = new Date();
  const staticPaths = [
    "/en/", "/en/platform", "/en/platform/agents", "/en/platform/marketplace", "/en/platform/pricing",
    "/en/ai-transformation", "/en/services", "/en/case-studies", "/en/knowledge-hub/",
    "/en/about", "/en/contact", "/en/events", "/en/ai-workshop", "/en/fimmick-ecosystem",
    "/en/industries",
    "/en/privacy", "/en/terms", "/en/cookies",
  ];
  return [
    ...staticPaths.map((path, index) => ({ url: `${origin}${path}`, lastModified: now, changeFrequency: index === 0 ? "weekly" as const : "monthly" as const, priority: index === 0 ? 1 : .8 })),
    ...platformCapabilities.map((item) => ({ url: `${origin}/en/platform/${item.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .85 })),
    ...services.map((service) => ({ url: `${origin}/en/services/${service.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .75 })),
    ...industries.map((industry) => ({ url: `${origin}/en/industries/${industry.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .8 })),
    ...caseStudies.map((study) => ({ url: `${origin}/en/case-studies/${study.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .7 })),
    ...articles.map((article) => ({ url: `${origin}/en/knowledge-hub/${article.slug}`, lastModified: new Date(article.date), changeFrequency: "yearly" as const, priority: .65 })),
    ...transformationDeepDives.map((page) => ({ url: `${origin}/en/ai-transformation/${page.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .82 })),
    ...aboutDeepDives.map((page) => ({ url: `${origin}/en/about/${page.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .7 })),
  ];
}
