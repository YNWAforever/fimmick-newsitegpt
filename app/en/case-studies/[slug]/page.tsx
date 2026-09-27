import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/app/components/site-shell";
import { Breadcrumbs, PageFinalCta, SubpageHero } from "@/app/components/subpage";
import { caseStudies } from "@/app/data";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return caseStudies.map((study) => ({ slug: study.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const study = caseStudies.find((item) => item.slug === slug); if (!study) return {};
  return { title: study.title, description: study.outcome, alternates: { canonical: `https://www.fimmick.com/en/case-studies/${study.slug}` }, openGraph: { title: study.title, description: study.outcome, images: [] }, twitter: { title: study.title, description: study.outcome, images: [] } };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params; const study = caseStudies.find((item) => item.slug === slug); if (!study) notFound();
  const related = caseStudies.filter((item) => item.slug !== slug).slice(0,2);
  const schema = { "@context":"https://schema.org", "@type":"Article", headline: study.title, description: study.outcome, author:{"@type":"Organization",name:"FIMMICK"}, publisher:{"@type":"Organization",name:"FIMMICK"}, about: study.sector };
  return (
    <SiteShell><main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
      <div className="subpage-nav page-grid"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Case Studies",href:"/en/case-studies"},{label:study.sector}]} /></div>
      <SubpageHero eyebrow={study.sector} title={<>{study.title}</>} intro={study.outcome} code="C/D"><div className="button-row"><Link className="button button-primary" href="/en/contact?intent=case-study">Discuss a Similar Workflow ↗</Link></div></SubpageHero>
      <div className="case-detail-metrics">{study.metrics.map((metric)=><div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
      <section className="case-narrative section-light">
        <div className="case-narrative-grid page-grid">
          <aside><p className="kicker">Case structure</p><a href="#overview">Overview</a><a href="#challenge">Challenge</a><a href="#strategy">Strategy</a><a href="#workflow">Workflow</a><a href="#outcomes">Outcomes</a></aside>
          <article>
            <section id="overview"><p className="case-section-no">01 / Overview</p><h2>Building capability, not a one-off output.</h2><p>{study.outcome}</p></section>
            <section id="challenge"><p className="case-section-no">02 / Challenge</p><h2>The operating constraint.</h2><p>{study.challenge}</p></section>
            <section id="strategy"><p className="case-section-no">03 / Strategy</p><h2>Connect insight, workflow, and ownership.</h2><p>The engagement was structured around the work to be done: define the signal, connect the relevant context, specify the agent’s responsibilities, and make human decision rights explicit.</p></section>
            <section id="workflow"><p className="case-section-no">04 / AI or marketing workflow</p><h2>From input to approved action.</h2><p>{study.workflow}</p><div className="mini-workflow">{["Signals", "Agent roles", "Human approval", "Activation", "Learning"].map((item,index)=><span key={item}><i>0{index+1}</i>{item}</span>)}</div></section>
            <section id="outcomes"><p className="case-section-no">05 / Outcomes</p><h2>Evidence in the operating model.</h2><p>{study.outcome}</p><div className="inline-metrics">{study.metrics.map((metric)=><div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section>
            <section><p className="case-section-no">06 / Related services</p><div className="tag-list">{study.services.map((service)=><Link href="/en/services" key={service}>{service} ↗</Link>)}</div></section>
          </article>
        </div>
      </section>
      <section className="related-cases section-offwhite"><div className="section-head page-grid"><p className="section-index">Continue</p><div><p className="kicker">Related proof</p><h2>More operating stories.</h2></div></div><div className="related-grid page-grid">{related.map((item)=><Link href={`/en/case-studies/${item.slug}`} key={item.slug}><p className="kicker">{item.sector}</p><h3>{item.title}</h3><p>{item.outcome}</p><span>Read ↗</span></Link>)}</div></section>
      <PageFinalCta title="Design the operating proof your leadership team can trust." />
    </main></SiteShell>
  );
}
