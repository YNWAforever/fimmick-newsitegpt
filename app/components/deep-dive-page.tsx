import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { Breadcrumbs, PageFinalCta, SubpageHero } from "@/app/components/subpage";
import type { DeepDivePage } from "@/app/section-data";

export function DeepDivePageView({ page }: { page: DeepDivePage }) {
  return (
    <SiteShell>
      <main id="main-content">
        <div className="subpage-nav page-grid">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: page.parent, href: page.parentHref }, { label: page.seoTitle }]} />
        </div>
        <SubpageHero eyebrow={page.eyebrow} title={<>{page.title}<br /><em>{page.emphasis}</em></>} intro={page.description} code={page.code}>
          <div className="button-row">
            <Link className="button button-primary" href={`/en/contact?intent=${page.slug}`}>Discuss this with FIMMICK ↗</Link>
            <a className="button button-secondary" href="#perspectives">Explore the system ↓</a>
          </div>
        </SubpageHero>

        <section className="executive-framing section-offwhite">
          <div className="page-grid">
            <p className="section-index">The leadership question</p>
            <blockquote>{page.question}</blockquote>
            <div className="framing-notes deep-dive-answer"><p>{page.answer}</p></div>
          </div>
        </section>

        <section className="deep-dive-lenses section-ink" id="perspectives">
          <div className="section-head page-grid">
            <p className="section-index">01 / Four perspectives</p>
            <div><p className="kicker">See the whole operating system</p><h2>One question. Multiple angles.</h2></div>
          </div>
          <div className="deep-dive-lens-grid page-grid">
            {page.lenses.map((lens, index) => <article key={lens.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{lens.title}</h3><p>{lens.copy}</p></article>)}
          </div>
        </section>

        <section className="deep-dive-stages section-light">
          <div className="section-head page-grid">
            <p className="section-index">02 / Working method</p>
            <div><p className="kicker">From question to operating evidence</p><h2>Build confidence in stages.</h2></div>
          </div>
          <div className="deep-dive-stage-grid page-grid">
            {page.stages.map((stage, index) => (
              <article key={stage.title}>
                <div><span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true" /></div>
                <h3>{stage.title}</h3><p>{stage.copy}</p>
                <ul>{stage.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="deep-dive-deliverables section-midnight">
          <div className="section-head page-grid">
            <p className="section-index">03 / {page.deliverableLabel}</p>
            <div><p className="kicker">What becomes visible</p><h2>Leave with an operating asset.</h2></div>
          </div>
          <div className="architecture-stack page-grid">
            {page.deliverables.map((deliverable, index) => <article key={deliverable.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{deliverable.title}</h3><p>{deliverable.copy}</p></div><i aria-hidden="true" /></article>)}
          </div>
        </section>

        <section className="deep-dive-outcomes section-cobalt">
          <div className="section-head page-grid">
            <p className="section-index">04 / Outcomes</p>
            <div><p className="kicker">What changes operationally</p><h2>Make the next decision easier.</h2></div>
          </div>
          <div className="outcome-grid page-grid">
            {page.outcomes.map((outcome, index) => <div key={outcome}><span>{String(index + 1).padStart(2, "0")}</span><strong>{outcome}</strong></div>)}
          </div>
        </section>

        <section className="related-services section-light">
          <div className="section-head page-grid">
            <p className="section-index">05 / Continue exploring</p>
            <div><p className="kicker">Connect the next layer</p><h2>See the wider system.</h2></div>
          </div>
          <div className="related-grid page-grid">
            {page.related.map((item) => <Link href={item.href} key={item.href}><p className="kicker">{item.eyebrow}</p><h3>{item.title}</h3><p>{item.copy}</p><span>Explore ↗</span></Link>)}
          </div>
        </section>
        <PageFinalCta title="Turn the next conversation into an operating decision." copy="Start with the business question. FIMMICK will map the workflow, evidence, roles, controls, and first credible path forward." />
      </main>
    </SiteShell>
  );
}
