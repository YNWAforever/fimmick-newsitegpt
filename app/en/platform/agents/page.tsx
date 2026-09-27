import type { Metadata } from "next";
import Link from "next/link";
import { AgentConstellation } from "@/app/components/interactive";
import { SiteShell } from "@/app/components/site-shell";
import { Breadcrumbs, MetricBand, PageFinalCta, SubpageHero } from "@/app/components/subpage";
import { agents } from "@/app/data";

export const metadata: Metadata = {
  title: "AI Agent Platform — Deploy Managed AI Teammates",
  description: "Deploy managed AI agents with defined roles, approved data inputs, measurable outputs, integrations, dashboards, APIs, and human governance.",
  alternates: { canonical: "/en/platform/agents" },
};

const layers = [
  { number: "01", title: "Business context", copy: "Objectives, rules, service standards, brand systems, and performance measures." },
  { number: "02", title: "Data & integrations", copy: "CRM, WhatsApp, analytics, commerce, advertising, content, and approved knowledge." },
  { number: "03", title: "Agent roles", copy: "Defined missions, permitted actions, task sequences, escalation, and output contracts." },
  { number: "04", title: "Human control", copy: "Review queues, approval thresholds, audit trails, ownership, and improvement cycles." },
];

export default function PlatformPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FIMMICK AI Agent Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "980", priceCurrency: "USD", description: "Entry plan, subject to current commercial approval" },
    featureList: ["Market intelligence", "Data analysis", "Creative generation", "Marketing strategy", "Human approval loops", "CRM and WhatsApp integrations"],
  };
  return (
    <SiteShell>
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        <div className="subpage-nav page-grid"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Platform" }]} /></div>
        <SubpageHero
          eyebrow="AI Agent Platform / managed operations"
          title={<>Deploy <em>4,000+</em><br />AI Teammates.</>}
          intro="FIMMICK turns recurring business work into managed AI roles—connected to approved data, real systems, measurable outputs, and human control."
          code="P/01"
        >
          <div className="button-row"><Link className="button button-primary" href="/en/contact?intent=demo">Request a Platform Demo ↗</Link><Link className="button button-secondary" href="#agents">Map the Agent Roles ↓</Link></div>
        </SubpageHero>
        <MetricBand metrics={[{ value: "4,000+", label: "agents deployed" }, { value: "24/7", label: "operations" }, { value: "200+", label: "tool connections" }, { value: "8", label: "Asian markets" }]} />

        <section className="content-section section-light" id="agents">
          <div className="section-head page-grid"><p className="section-index">01 / Capability map</p><div><p className="kicker">A connected workforce</p><h2>Roles designed around the work.</h2><p className="section-intro">Select an agent to inspect its mission, inputs, tasks, output, and point of human review.</p></div></div>
          <div className="page-grid platform-map"><AgentConstellation agents={agents} /></div>
          <div className="spacer-120" />
        </section>

        <section className="content-section section-ink">
          <div className="section-head page-grid"><p className="section-index">02 / Workflow architecture</p><div><p className="kicker">More than a model endpoint</p><h2>Context in. Governed action out.</h2></div></div>
          <div className="architecture-stack page-grid">
            {layers.map((layer) => <article key={layer.number}><span>{layer.number}</span><div><h3>{layer.title}</h3><p>{layer.copy}</p></div><i aria-hidden="true" /></article>)}
          </div>
          <div className="workflow-example page-grid">
            <p className="kicker">Example / campaign intelligence</p>
            <div className="workflow-chain" aria-label="Example agent workflow">
              {[["Observe", "Category + competitor signals"], ["Interpret", "Material shifts + audience context"], ["Prepare", "Brief + content options"], ["Approve", "Strategist review"], ["Activate", "Campaign + CRM workflows"], ["Learn", "Performance back into system"]].map(([title, copy], index) => <div key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="content-section section-offwhite">
          <div className="section-head page-grid"><p className="section-index">03 / Data & integration</p><div><p className="kicker">Designed around your environment</p><h2>Agents work where the business already works.</h2></div></div>
          <div className="integration-categories page-grid">
            {[
              ["Customer", "CRM, CDP, customer profiles, consent, lifecycle stage"],
              ["Conversation", "WhatsApp, messaging, service knowledge, escalation"],
              ["Performance", "Analytics, media, conversion, commerce, business KPIs"],
              ["Content", "Brand systems, approved assets, product data, localisation"],
              ["Operations", "Dashboards, alerts, workflow tools, decision queues"],
              ["Enterprise", "Custom connectors, API access, role and data controls"],
            ].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="governance-section section-midnight">
          <div className="section-head page-grid"><p className="section-index">04 / Human governance</p><div><p className="kicker">Autonomy with decision rights</p><h2>Make control visible.</h2><p className="section-intro">FIMMICK separates routine execution from material judgment, so teams know exactly where people direct, review, approve, and intervene.</p></div></div>
          <div className="governance-table page-grid" role="table" aria-label="Agent governance model">
            <div className="table-row table-head" role="row"><span>Control</span><span>Agent responsibility</span><span>Human responsibility</span><span>Evidence</span></div>
            {[
              ["Data", "Use approved sources and fields", "Set access and sensitivity rules", "Source and access log"],
              ["Output", "Prepare to defined standard", "Approve high-risk or publishable work", "Review history"],
              ["Action", "Execute within thresholds", "Own material decisions and exceptions", "Action audit trail"],
              ["Learning", "Surface performance and corrections", "Change policy, standards, and priorities", "Version and outcome history"],
            ].map((row) => <div className="table-row" role="row" key={row[0]}>{row.map((cell, index) => <span role="cell" key={cell} data-label={["Control","Agent","Human","Evidence"][index]}>{cell}</span>)}</div>)}
          </div>
        </section>

        <section className="pricing-section section-light">
          <div className="section-head page-grid"><p className="section-index">05 / Plans</p><div><p className="kicker">Start with the right operating scope</p><h2>From a focused team to an enterprise workforce.</h2></div></div>
          <div className="pricing-grid page-grid">
            <article><p className="kicker">Lite</p><h3><span>from</span>$980<em>/ month</em></h3><p>Social editing and visual-generation workflows for growing teams.</p><ul><li>Focused agent roles</li><li>Managed onboarding</li><li>Human review workflow</li><li>Free industry benchmark</li></ul><Link className="button button-dark" href="/en/contact?intent=benchmark">Start with benchmark ↗</Link></article>
            <article className="pricing-featured"><p className="kicker">Pro</p><h3>$4,800<em>/ month</em></h3><p>Market intelligence, data analysis, and dashboard capability for connected marketing operations.</p><ul><li>Multi-role agent system</li><li>Intelligence and analysis</li><li>Operational dashboards</li><li>Managed optimisation</li></ul><Link className="button button-primary" href="/en/contact?intent=demo">Request demo ↗</Link></article>
            <article><p className="kicker">Enterprise</p><h3>Custom</h3><p>Configured agent systems, integrations, governance, dashboards, and APIs for enterprise operations.</p><ul><li>Custom agent configuration</li><li>Data and systems integration</li><li>Dashboards and API access</li><li>Enterprise governance</li></ul><Link className="button button-dark" href="/en/contact?intent=enterprise">Design your system ↗</Link></article>
          </div>
          <p className="pricing-note page-grid">Plan information reflects current published positioning and remains subject to solution scope and commercial approval.</p>
        </section>
        <PageFinalCta title="Build a workforce around the work that matters." />
      </main>
    </SiteShell>
  );
}
