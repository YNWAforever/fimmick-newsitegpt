import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { Breadcrumbs, PageFinalCta, SubpageHero } from "@/app/components/subpage";
import { services } from "@/app/data";

export const metadata: Metadata = {
  title: "AI Transformation & Digital Marketing Services",
  description: "Explore FIMMICK services across AI transformation, digital marketing, automation, CRM, SEO and AEO, social intelligence, commerce, data, creative, and customer engagement.",
  alternates: { canonical: "https://www.fimmick.com/en/services" },
};

const objectives = [
  ["Acquire", "Create demand through intelligence, content, media, search, and trusted advocacy."],
  ["Convert", "Connect customer signals, commerce, sales follow-up, and conversion journeys."],
  ["Retain", "Build more responsive service, messaging, loyalty, and lifecycle operations."],
  ["Understand", "Turn market, customer, channel, and commercial data into decisions."],
  ["Automate", "Redesign repeated work as reliable workflows with clear human control."],
  ["Scale", "Connect transformation strategy, data foundations, teams, and governance."],
] as const;

export default function ServicesPage() {
  return (
    <SiteShell>
      <main id="main-content">
        <div className="subpage-nav page-grid"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} /></div>
        <SubpageHero eyebrow="Services / strategy to execution" title={<>Build the system<br /><em>behind growth.</em></>} intro="FIMMICK connects business strategy, data, people, platforms, workflows, creativity, and measurement—so transformation becomes practical daily operations." code="S/01">
          <div className="button-row"><Link className="button button-primary" href="/en/contact?intent=benchmark">Get Your Free Benchmark ↗</Link><Link className="button button-secondary" href="#service-library">Browse by objective ↓</Link></div>
        </SubpageHero>

        <section className="objective-section section-offwhite">
          <div className="section-head page-grid"><p className="section-index">01 / Business objective</p><div><p className="kicker">Start with what needs to change</p><h2>Six pathways into the ecosystem.</h2></div></div>
          <div className="objective-grid page-grid">
            {objectives.map(([title, copy], index) => <a href={`#${title.toLowerCase()}`} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><i aria-hidden="true">↓</i></a>)}
          </div>
        </section>

        <section className="service-library section-light" id="service-library">
          {objectives.map(([objective, description], groupIndex) => {
            const group = services.filter((service) => service.objective === objective);
            return (
              <div className="service-group" id={objective.toLowerCase()} key={objective}>
                <div className="service-group-head page-grid"><span>0{groupIndex + 1}</span><h2>{objective}</h2><p>{description}</p></div>
                <div className="service-card-grid page-grid">
                  {group.map((service, index) => (
                    <Link href={`/en/services/${service.slug}`} key={service.slug}>
                      <div className="service-card-meta"><span>{String(index + 1).padStart(2,"0")}</span><em>{service.eyebrow}</em></div>
                      <h3>{service.title}</h3><p>{service.summary}</p>
                      <dl><div><dt>Inputs</dt><dd>{service.inputs.slice(0,2).join(" · ")}</dd></div><div><dt>Outputs</dt><dd>{service.outputs.slice(0,2).join(" · ")}</dd></div></dl>
                      <strong>Explore service ↗</strong>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <section className="ecosystem-band section-cobalt">
          <div className="page-grid"><p className="section-index">Connected delivery</p><h2>One service can solve a project. A connected system changes the operating model.</h2><p>FIMMICK combines service expertise with the AI Agent Platform, Data Hub, regional intelligence, and human approval—so each engagement creates reusable business capability.</p></div>
        </section>
        <PageFinalCta title="Choose the business objective. We’ll map the system around it." />
      </main>
    </SiteShell>
  );
}
