import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeepDivePageView } from "@/app/components/deep-dive-page";
import { aboutDeepDives } from "@/app/section-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return aboutDeepDives.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = aboutDeepDives.find((item) => item.slug === slug);
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.description,
    alternates: { canonical: `https://www.fimmick.com/en/about/${page.slug}` },
    openGraph: { title: `${page.seoTitle} | FIMMICK`, description: page.description, images: [] },
    twitter: { title: `${page.seoTitle} | FIMMICK`, description: page.description, images: [] },
  };
}

export default async function AboutDeepDive({ params }: Props) {
  const { slug } = await params;
  const page = aboutDeepDives.find((item) => item.slug === slug);
  if (!page) notFound();
  return <DeepDivePageView page={page} />;
}
