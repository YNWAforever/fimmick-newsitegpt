import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { Breadcrumbs, MetricBand, PageFinalCta } from "@/app/components/subpage";
import { PlatformVideo } from "@/app/components/interactive";
import { platformCapabilities, type PlatformCapability } from "@/app/platform-data";

export function PlatformCapabilityPage({ capability }: { capability: PlatformCapability }) {
  const schema={"@context":"https://schema.org","@type":"Service",name:`FIMMICK ${capability.accent} Platform`,provider:{"@type":"Organization",name:"FIMMICK"},description:capability.intro,areaServed:"Asia"};
  return <SiteShell><main id="main-content" className={`platform-capability platform-${capability.slug}`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <div className="subpage-nav page-grid"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Platform",href:"/en/platform"},{label:capability.accent}]} /></div>
    <section className="platform-video-hero">
      <PlatformVideo variant={capability.slug} />
      <div className="platform-video-wash" aria-hidden="true" />
      <div className="platform-hero-content page-grid"><p className="section-index">{capability.code}</p><div><p className="kicker"><span className="status-dot"/> {capability.eyebrow}</p><h1>{capability.title}</h1><p>{capability.intro}</p><div className="button-row"><Link className="button button-primary" href="/en/contact?intent=platform-demo">Request a live demo ↗</Link><a className="button button-secondary" href="#system">See the system ↓</a></div></div></div>
      <div className="platform-hero-caption"><span>FIMMICK / {capability.accent}</span><strong>{capability.promise}</strong></div>
    </section>
    <MetricBand metrics={capability.metrics}/>
    <section className="platform-manifesto section-light"><div className="page-grid"><p className="section-index">01 / Principle</p><div><p className="kicker">{capability.promise}</p><h2>{capability.proof}</h2></div></div></section>
    <section className="platform-workflow section-ink" id="system"><div className="section-head page-grid"><p className="section-index">02 / Operating loop</p><div><p className="kicker">From input to business action</p><h2>A system your team can see, direct, and improve.</h2></div></div><div className="platform-step-grid page-grid">{capability.workflow.map((step,index)=><article key={step.title}><span>0{index+1}</span><i aria-hidden="true"/><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></section>
    <section className="platform-outcomes section-cobalt"><div className="section-head page-grid"><p className="section-index">03 / Business outcomes</p><div><p className="kicker">Designed to move the operation</p><h2>What changes when the system is working.</h2></div></div><div className="platform-outcome-list page-grid">{capability.outcomes.map((outcome,index)=><div key={outcome}><span>0{index+1}</span><strong>{outcome}</strong></div>)}</div></section>
    <section className="platform-next section-offwhite"><div className="section-head page-grid"><p className="section-index">04 / Explore the workforce</p><div><p className="kicker">Connected capabilities</p><h2>Build the next layer.</h2></div></div><div className="platform-next-grid page-grid">{platformCapabilities.filter(x=>x.slug!==capability.slug).slice(0,3).map((item)=><Link href={`/en/platform/${item.slug}`} key={item.slug}><span>{item.code}</span><h3>{item.accent}</h3><p>{item.intro}</p><strong>Explore capability ↗</strong></Link>)}</div></section>
    <PageFinalCta title={`Put ${capability.accent.toLowerCase()} to work on a real workflow.`}/>
  </main></SiteShell>;
}
