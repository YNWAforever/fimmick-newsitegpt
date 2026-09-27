import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { Breadcrumbs, PageFinalCta, SubpageHero } from "@/app/components/subpage";
import { industries } from "@/app/data";

export const metadata: Metadata = {
  title: "AI Workforce Solutions by Industry in Asia",
  description: "Explore FIMMICK AI workforce solutions for retail, finance, hospitality, beauty, F&B, property, healthcare and B2B companies across Asia.",
  alternates: { canonical: "https://www.fimmick.com/en/industries" },
};

export default function IndustriesPage() {
  return <SiteShell><main id="main-content">
    <div className="subpage-nav page-grid"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Industries"}]} /></div>
    <SubpageHero eyebrow="Vertical AI workforce / Asia" title={<>AI systems built for<br/><em>your industry.</em></>} intro="Generic AI tools do not understand your operating context. FIMMICK combines reusable agent roles with industry workflows, local market intelligence, connected data and human approval." code="I/01">
      <div className="button-row"><Link className="button button-primary" href="/en/contact?intent=industry-benchmark">Get Your Industry Benchmark ↗</Link><a className="button button-secondary" href="#industry-library">Choose your industry ↓</a></div>
    </SubpageHero>
    <section className="industry-intro section-offwhite"><div className="section-head page-grid"><p className="section-index">01 / Vertical intelligence</p><div><p className="kicker">Reusable systems, configured to context</p><h2>Industry depth turns AI activity into operating value.</h2><p className="section-intro">Each solution starts with the decisions, data, channels, risks and customer journeys that make the industry distinct—then assigns the right agent roles and human controls.</p></div></div></section>
    <section className="industry-library section-light" id="industry-library"><div className="industry-grid page-grid">{industries.map((industry,index)=><Link href={`/en/industries/${industry.slug}`} key={industry.slug}><span>{String(index+1).padStart(2,"0")}</span><p className="kicker">Vertical AI workforce</p><h2>{industry.name}</h2><p>{industry.description}</p><div>{industry.agents.slice(0,3).map(agent=><em key={agent}>{agent}</em>)}</div><strong>Explore industry solution ↗</strong></Link>)}</div></section>
    <section className="ecosystem-band section-cobalt"><div className="page-grid"><p className="section-index">Designed for Asia</p><h2>One regional operating layer. Local market intelligence and control.</h2><p>FIMMICK supports multilingual content, regional platforms, local customer behaviour and cross-market governance across eight Asian markets.</p></div></section>
    <PageFinalCta title="See where an AI workforce can create value in your industry." />
  </main></SiteShell>;
}
