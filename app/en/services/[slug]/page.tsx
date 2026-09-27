import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/app/components/site-shell";
import { Breadcrumbs, PageFinalCta, SubpageHero } from "@/app/components/subpage";
import { services } from "@/app/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} Services`,
    description: service.summary,
    alternates: { canonical: `https://www.fimmick.com/en/services/${service.slug}` },
    openGraph: { title: `${service.title} | FIMMICK`, description: service.summary, images: [] },
    twitter: { title: `${service.title} | FIMMICK`, description: service.summary, images: [] },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== service.slug && (item.objective === service.objective || item.inputs.some((input) => service.inputs.includes(input)))).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@type": "Organization", name: "FIMMICK", url: "https://www.fimmick.com" },
    areaServed: ["Hong Kong", "Taiwan", "Japan", "Singapore", "Malaysia", "Thailand", "Philippines", "China"],
    serviceType: service.eyebrow,
  };
  return (
    <SiteShell>
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <div className="subpage-nav page-grid"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/en/services" }, { label: service.title }]} /></div>
        <SubpageHero eyebrow={`${service.objective} / ${service.eyebrow}`} title={<>{service.title.split(" ").slice(0,-1).join(" ")}<br /><em>{service.title.split(" ").slice(-1)}</em></>} intro={service.intro} code="S/D">
          <div className="button-row"><Link className="button button-primary" href={`/en/contact?intent=${service.slug}`}>Discuss this service ↗</Link><Link className="button button-secondary" href="#capabilities">Explore capabilities ↓</Link></div>
        </SubpageHero>

        <section className="service-system section-offwhite" id="capabilities">
          <div className="section-head page-grid"><p className="section-index">01 / Service system</p><div><p className="kicker">Inputs → managed work → outcomes</p><h2>{service.summary}</h2></div></div>
          <div className="service-system-grid page-grid">
            <div className="system-column"><p className="kicker">Approved inputs</p>{service.inputs.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}</div>
            <div className="system-engine"><div className="engine-orbit" aria-hidden="true"/><span>FIMMICK</span><strong>{service.title}<br/>agent workflow</strong><p>Observe · interpret · prepare · route · improve</p></div>
            <div className="system-column"><p className="kicker">Delivered outputs</p>{service.outputs.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}</div>
          </div>
          <div className="impact-statement page-grid"><span>Business impact</span><p>{service.impact}</p></div>
        </section>

        <section className="capability-list section-light">
          <div className="section-head page-grid"><p className="section-index">02 / Capabilities</p><div><p className="kicker">What the engagement can include</p><h2>Built around the operating need.</h2></div></div>
          <div className="numbered-capabilities page-grid">
            {service.capabilities.map((capability, index) => <article key={capability}><span>{String(index + 1).padStart(2,"0")}</span><h3>{capability}</h3><p>Designed with defined data inputs, operating standards, human decision points, and measurable output.</p></article>)}
          </div>
        </section>

        <section className="approval-workflow section-ink">
          <div className="section-head page-grid"><p className="section-index">03 / Operating control</p><div><p className="kicker">Automation with approval</p><h2>The team stays in command.</h2></div></div>
          <div className="approval-flow page-grid">
            {[["Signal", "A trigger, question, change, or scheduled task enters the workflow."], ["Agent action", "The agent analyses context and prepares or executes within its defined role."], ["Review gate", "Material, sensitive, or publishable outputs move to the assigned human owner."], ["Activation", "Approved work is delivered, routed, or recorded in the connected system."], ["Learning", "Performance and corrections improve the next cycle."]].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><i aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="related-services section-light">
          <div className="section-head page-grid"><p className="section-index">04 / Connected capability</p><div><p className="kicker">Related services</p><h2>Extend the system.</h2></div></div>
          <div className="related-grid page-grid">{related.map((item) => <Link href={`/en/services/${item.slug}`} key={item.slug}><p className="kicker">{item.objective}</p><h3>{item.title}</h3><p>{item.summary}</p><span>Explore ↗</span></Link>)}</div>
        </section>
        <PageFinalCta title={`Turn ${service.title.toLowerCase()} into a connected operating capability.`} />
      </main>
    </SiteShell>
  );
}
