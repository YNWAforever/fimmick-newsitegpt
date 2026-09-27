import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://www.fimmick.com${item.href}` } : {}),
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
            {index < items.length - 1 && <i aria-hidden="true">/</i>}
          </span>
        ))}
      </nav>
    </>
  );
}

export function SubpageHero({
  eyebrow,
  title,
  intro,
  code = "F/01",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  code?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="subpage-hero">
      <div className="subpage-field" aria-hidden="true"><i /><i /><i /><i /><span /></div>
      <div className="subpage-hero-inner page-grid">
        <p className="section-index">{code}</p>
        <div className="subpage-title">
          <p className="kicker"><span className="status-dot" /> {eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="subpage-intro">
          <p>{intro}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

export function PageFinalCta({
  title = "Find the first workflow worth transforming.",
  copy = "Start with a free industry benchmark, then map the agent roles, data, approval, and value case together.",
}: { title?: string; copy?: string }) {
  return (
    <section className="page-final-cta">
      <div className="page-grid">
        <p className="section-index">Next / Benchmark</p>
        <div><h2>{title}</h2><p>{copy}</p><div className="button-row"><Link className="button button-primary" href="/en/contact?intent=benchmark">Get Your Free Benchmark ↗</Link><Link className="button button-secondary" href="/en/ai-workshop">Book an AI Workshop →</Link></div></div>
      </div>
    </section>
  );
}

export function MetricBand({ metrics }: { metrics: { value: string; label: string }[] }) {
  return (
    <div className="metric-band">
      {metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
    </div>
  );
}
