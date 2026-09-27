import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { Breadcrumbs, PageFinalCta, SubpageHero } from "@/app/components/subpage";
import { transformationDeepDives } from "@/app/section-data";

export const metadata: Metadata = {
  title: "AI Business Transformation",
  description: "Move from AI experiments to a governed operating model through assessment, workflow design, agent deployment, systems integration, team enablement, and optimisation.",
  alternates: { canonical: "/en/ai-transformation" },
};

const programme = [
  { number: "01", title: "Audit & maturity assessment", copy: "Establish where the organisation is ready, where value is trapped, and which constraints must be solved first.", detail: ["Leadership objectives", "Data and systems readiness", "Workflow and capability baseline", "Risk and governance context"] },
  { number: "02", title: "Workflow identification", copy: "Prioritise work where volume, repetition, data access, decision clarity, and commercial value support safe deployment.", detail: ["Opportunity inventory", "Value and feasibility scoring", "Decision-point mapping", "First 90-day scope"] },
  { number: "03", title: "Agent design", copy: "Define the roles, inputs, tasks, outputs, permissions, escalations, and success measures for each AI teammate.", detail: ["Agent mission contracts", "Prompt and knowledge systems", "Human approval design", "Quality and exception standards"] },
  { number: "04", title: "Systems integration", copy: "Connect approved context across CRM, messaging, analytics, commerce, media, content, and operating tools.", detail: ["Data mapping", "Identity and event design", "API and connector setup", "Security and access controls"] },
  { number: "05", title: "Team enablement", copy: "Prepare leaders, operators, reviewers, and subject-matter experts to direct and improve the new system.", detail: ["Role-based training", "Operating playbooks", "Review and escalation practice", "Adoption measurement"] },
  { number: "06", title: "Governance & optimisation", copy: "Track output, interventions, value, risk, and learning so the system becomes more useful over time.", detail: ["Performance dashboard", "Audit and review cadence", "Policy and model updates", "Scale roadmap"] },
];

export default function TransformationPage() {
  return (
    <SiteShell>
      <main id="main-content">
        <div className="subpage-nav page-grid"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "AI Transformation" }]} /></div>
        <SubpageHero eyebrow="Executive transformation / operating design" title={<>Move from AI activity<br />to an <em>AI operating model.</em></>} intro="FIMMICK helps leadership teams identify where agents can create measurable value, redesign the work, connect the right data, and build the governance to operate AI responsibly." code="T/01">
          <div className="button-row"><Link className="button button-primary" href="/en/contact?intent=audit">Request an AI Maturity Audit ↗</Link><Link className="button button-secondary" href="#programme">See the programme ↓</Link></div>
        </SubpageHero>

        <section className="executive-framing section-offwhite">
          <div className="page-grid">
            <p className="section-index">The executive question</p>
            <blockquote>“Where can AI take primary responsibility for work—without losing visibility, judgment, or control?”</blockquote>
            <div className="framing-notes"><p>Transformation begins with business responsibility, not a catalogue of tools.</p><p>The target is a measurable operating capability your people can direct, trust, and improve.</p></div>
          </div>
        </section>

        <section className="hub-path-section section-light">
          <div className="section-head page-grid"><p className="section-index">01 / Explore by decision</p><div><p className="kicker">Four views of transformation</p><h2>Start with the question leadership needs to answer.</h2><p className="section-intro">Readiness, roadmap, workflow design, and governance are separate decisions—but they become valuable only when they connect as one operating programme.</p></div></div>
          <div className="hub-path-grid page-grid">
            {transformationDeepDives.map((page, index) => <Link href={`${page.parentHref}/${page.slug}`} key={page.slug}><span>{String(index + 1).padStart(2,"0")} / {page.eyebrow}</span><h3>{page.seoTitle}</h3><p>{page.description}</p><strong>Explore this workstream ↗</strong></Link>)}
          </div>
        </section>

        <section className="transformation-programme section-light" id="programme">
          <div className="section-head page-grid"><p className="section-index">02 / Transformation programme</p><div><p className="kicker">Strategy through adoption</p><h2>Six connected workstreams.</h2></div></div>
          <div className="programme-grid page-grid">
            {programme.map((item) => (
              <article key={item.number}>
                <div className="programme-number"><span>{item.number}</span><i aria-hidden="true" /></div>
                <h3>{item.title}</h3><p>{item.copy}</p>
                <ul>{item.detail.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="value-map section-ink">
          <div className="section-head page-grid"><p className="section-index">03 / Prioritisation</p><div><p className="kicker">Select the right first workflow</p><h2>Value, feasibility, control.</h2><p className="section-intro">The best first deployment is not always the most visible. FIMMICK scores candidate workflows against commercial value, operational readiness, data quality, and governance complexity.</p></div></div>
          <div className="quadrant-layout page-grid">
            <div className="quadrant" aria-label="Workflow prioritisation quadrant"><span className="axis axis-y">Business value ↑</span><span className="axis axis-x">Deployment readiness →</span><div className="quad-label q1">Explore</div><div className="quad-label q2">Prioritise</div><div className="quad-label q3">Defer</div><div className="quad-label q4">Prepare</div><i className="plot plot-1"/><i className="plot plot-2"/><i className="plot plot-3"/><i className="plot plot-4"/><i className="plot plot-5"/></div>
            <div className="score-criteria">
              {[["Volume", "How much work repeats?"], ["Value", "What changes if it improves?"], ["Clarity", "Are inputs and outputs definable?"], ["Data", "Is trusted context accessible?"], ["Risk", "Where must people retain judgment?"], ["Learning", "Can performance improve the workflow?"]].map(([title, copy], index) => <div key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="operating-model section-cobalt">
          <div className="section-head page-grid"><p className="section-index">04 / Target operating model</p><div><p className="kicker">Clear responsibility at every layer</p><h2>Humans direct. Agents execute. Systems record.</h2></div></div>
          <div className="operating-bands page-grid">
            {[["Leadership", "Sets priorities, risk appetite, investment, and outcome measures."], ["Workflow owners", "Define standards, exceptions, approvals, and service levels."], ["AI agents", "Observe, analyse, prepare, execute, and route within agreed boundaries."], ["Data & systems", "Provide governed context, integrations, identity, and auditability."], ["FIMMICK", "Designs, deploys, monitors, improves, and transfers operating capability."]].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="outcome-section section-light">
          <div className="section-head page-grid"><p className="section-index">05 / Executive outcomes</p><div><p className="kicker">Capability that compounds</p><h2>Measure more than time saved.</h2></div></div>
          <div className="outcome-grid page-grid">
            {[["Speed", "Shorter cycle time from signal to approved action."], ["Quality", "More consistent outputs against clear operating standards."], ["Capacity", "More work completed without matching growth in manual effort."], ["Learning", "Performance and corrections improve the next execution cycle."], ["Control", "Clear decision rights, approval history, and exception ownership."], ["Growth", "Better use of data, creativity, media, CRM, and customer attention."]].map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>
        <PageFinalCta title="Turn the first 90 days into a credible transformation case." copy="Begin with an executive benchmark and maturity assessment. Leave with a prioritised roadmap, operating design, and measurable first deployment." />
      </main>
    </SiteShell>
  );
}
