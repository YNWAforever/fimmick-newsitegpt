import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { Breadcrumbs, PageFinalCta, SubpageHero } from "@/app/components/subpage";
import { caseStudies } from "@/app/data";

export const metadata: Metadata = {
  title: "AI & Marketing Case Studies",
  description: "Explore substantiated FIMMICK proof across AI operating-model transformation, regional CRM orchestration, and Asia-scale digital operations.",
  alternates: { canonical: "https://www.fimmick.com/en/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <main id="main-content">
        <div className="subpage-nav page-grid"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} /></div>
        <SubpageHero eyebrow="Case studies / operating proof" title={<>Operational AI.<br /><em>Measured outcomes.</em></>} intro="Every engagement should create more than an output. It should build a reusable operating asset that compounds value over time." code="C/01">
          <div className="button-row"><Link className="button button-primary" href="/en/contact?intent=benchmark">Benchmark Your Operation ↗</Link><a className="button button-secondary" href="#library">Explore the proof ↓</a></div>
        </SubpageHero>
        <div className="case-filter-band"><div className="page-grid"><span>Filter /</span>{["All", "Operating model", "CRM & loyalty", "Asia scale"].map((filter, index) => <button type="button" className={index===0?"is-active":""} key={filter}>{filter}</button>)}</div></div>
        <section className="case-library section-light" id="library">
          <div className="editorial-case-list page-grid">
            {caseStudies.map((study, index) => (
              <Link href={`/en/case-studies/${study.slug}`} key={study.slug}>
                <div className="editorial-case-index"><span>{String(index+1).padStart(2,"0")}</span><p>{study.sector}</p></div>
                <div className="editorial-case-main"><h2>{study.title}</h2><p>{study.challenge}</p><em>Read full case study ↗</em></div>
                <div className="editorial-case-metrics">{study.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
              </Link>
            ))}
          </div>
        </section>
        <PageFinalCta title="Build the next operating proof with FIMMICK." />
      </main>
    </SiteShell>
  );
}
