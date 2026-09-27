import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { Breadcrumbs, MetricBand, SubpageHero } from "@/app/components/subpage";

export const metadata: Metadata = {
  title: "GitHub Connection & Website Engineering Report",
  description: "Internal FIMMICK report covering GitHub connection, source alignment, migration risk, release controls, and the recommended path to one source of truth.",
  robots: { index: false, follow: false },
};

const comparisonRows = [
  ["Application model", "Next.js 16 App Router rendered through Vinext", "React 18 single-page application built with Vite"],
  ["Runtime target", "Cloudflare Worker-compatible server output", "Vercel static and serverless delivery"],
  ["Content scope", "Curated enterprise narrative and 36 route templates", "Large multilingual content estate with prerendering"],
  ["Languages", "English experience with links to the current Chinese sites", "English, Traditional Chinese, and Simplified Chinese"],
  ["Measurement", "Conversion paths defined; production analytics wiring to confirm", "GTM and GA4 implementation documented"],
  ["Forms", "Contact journeys designed; production delivery integration to confirm", "Resend-backed contact and newsletter endpoints documented"],
  ["Release model", "Validated Sites checkpoint deployments", "GitHub branches and pull requests targeting Vercel"],
];

const findings = [
  {
    code: "01",
    title: "The connection is verified",
    copy: "The authorised GitHub workspace is reachable and the established FIMMICK website repository can be inspected. No repository credentials or private identifiers are exposed in this web summary.",
  },
  {
    code: "02",
    title: "The source trees have diverged",
    copy: "The redesigned Sites experience is not a continuation of the existing GitHub application. Framework, rendering, hosting, routing, content shape, and release mechanics are materially different.",
  },
  {
    code: "03",
    title: "A direct overwrite is unsafe",
    copy: "Replacing the established repository would risk its multilingual content, analytics, forms, redirects, and Vercel-specific controls. The current codebases should remain isolated until parity is proven.",
  },
  {
    code: "04",
    title: "A clean source mirror is established",
    copy: "The approved private GitHub repository now carries the AI Workforce source without replacing the established website application. Protect its main branch and retain Sites checkpoint deployment as the controlled release gate.",
  },
];

const risks = [
  ["High", "Dual source of truth", "Two independently changing website codebases make ownership, rollback, and release decisions ambiguous.", "Name one canonical repository before the next production cutover."],
  ["High", "Content and locale parity", "The established website contains a much larger multilingual estate than the curated redesign.", "Inventory every indexable URL, locale, redirect, article, and legal page."],
  ["High", "Analytics and lead delivery", "The redesign must preserve attribution, conversion events, contact delivery, and consent behaviour.", "Port and verify GTM/GA4, UTM persistence, forms, CRM routing, and consent rules."],
  ["Medium", "Hosting-specific behaviour", "Vercel headers and serverless functions do not transfer automatically to a Worker runtime.", "Reimplement security headers, redirects, mail delivery, and environment values for the target runtime."],
  ["Medium", "Release assurance", "The current Sites project builds successfully through its release flow, but GitHub CI is not yet the shared gate.", "Require build, lint, tests, link checks, and metadata checks on every pull request."],
];

const phases = [
  ["01", "Isolate", "Completed: the approved private repository carries the AI Workforce source without replacing the established website repository."],
  ["02", "Automate", "Add protected-main pull requests and checks for production build, lint, rendered HTML, metadata, sitemap, internal links, and dependency risk."],
  ["03", "Migrate", "Port approved multilingual content, redirects, analytics, attribution, contact delivery, consent, and any required data integrations in measured batches."],
  ["04", "Govern", "Use GitHub for review and traceability, and Sites checkpoints for controlled production releases with an explicit owner and rollback record."],
];

export default function GitHubReportPage() {
  return (
    <SiteShell>
      <main id="main-content" className="github-report">
        <div className="subpage-nav page-grid">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Launch Plan", href: "/launch-plan" }, { label: "GitHub Report" }]} />
        </div>

        <SubpageHero
          eyebrow="Internal engineering report / 23 August 2026"
          title={<>GitHub connected.<br /><em>Source mirror established.</em></>}
          intro="A source, release, and migration assessment for the FIMMICK AI Workforce website—grounded in the current Sites build, its approved private mirror, and the established GitHub website estate."
          code="G/01"
        >
          <div className="button-row">
            <a className="button button-primary" href="#recommendation">View recommendation ↓</a>
            <Link className="button button-secondary" href="/launch-plan">Back to launch plan →</Link>
          </div>
        </SubpageHero>

        <MetricBand metrics={[
          { value: "Live", label: "GitHub source mirror" },
          { value: "36", label: "current route templates" },
          { value: "2", label: "website codebases assessed" },
          { value: "5", label: "Sites release commits reviewed" },
        ]} />

        <section className="github-status section-ink">
          <div className="section-head page-grid">
            <p className="section-index">01 / Executive status</p>
            <div>
              <p className="kicker">Decision-ready summary</p>
              <h2>Connected does not yet mean synchronised.</h2>
              <p className="section-intro">The account connection is healthy. The engineering decision is to avoid forcing two unlike applications into one branch before content, integrations, and runtime behaviour are mapped.</p>
            </div>
          </div>
          <div className="github-status-grid page-grid">
            {[
              ["Verified", "Account connection", "Authorised repository access is available for audit and review."],
              ["Active", "Sites baseline", "The public AI Workforce site was active at version 5 when this report was prepared."],
              ["Mirrored", "Source alignment", "The AI Workforce source is now connected to its approved private GitHub repository."],
              ["Protected", "Safe path", "The established website repository remains intact while capabilities move through explicit release gates."],
            ].map(([status, title, copy]) => (
              <article key={title}>
                <span>{status}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dossier-section section-light">
          <div className="dossier-heading page-grid">
            <p className="section-index">02 / Architecture comparison</p>
            <div>
              <h2>Two strong systems. Different assumptions.</h2>
              <p>The established GitHub website contains capabilities that must be deliberately ported. The new Sites experience introduces a different rendering and deployment model.</p>
            </div>
          </div>
          <div className="dossier-table page-grid" role="table" aria-label="Website architecture comparison">
            <div className="dossier-row dossier-head" role="row">
              <span role="columnheader">Dimension</span>
              <span role="columnheader">Current Sites experience</span>
              <span role="columnheader">Connected GitHub website</span>
            </div>
            {comparisonRows.map((row) => (
              <div className="dossier-row" role="row" key={row[0]}>
                {row.map((cell) => <span role="cell" key={cell}>{cell}</span>)}
              </div>
            ))}
          </div>
          <p className="github-scope-note page-grid">Repository identifiers are intentionally withheld from this no-index web summary. The complete AI Workforce source is mirrored to the owner-approved private GitHub repository.</p>
        </section>

        <section className="github-findings section-offwhite">
          <div className="section-head page-grid">
            <p className="section-index">03 / Findings</p>
            <div><p className="kicker">What the evidence says</p><h2>Protect the value already built.</h2></div>
          </div>
          <div className="github-findings-grid page-grid">
            {findings.map((finding) => (
              <article key={finding.code}>
                <span>{finding.code}</span>
                <h3>{finding.title}</h3>
                <p>{finding.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="github-risks section-light">
          <div className="section-head page-grid">
            <p className="section-index">04 / Release risk</p>
            <div><p className="kicker">Five controls before cutover</p><h2>Resolve the red paths first.</h2></div>
          </div>
          <div className="github-risk-list page-grid" role="table" aria-label="GitHub connection and migration risks">
            {risks.map(([level, risk, evidence, control]) => (
              <article role="row" key={risk}>
                <span className={`risk-level risk-${level.toLowerCase()}`} role="cell">{level}</span>
                <div role="cell"><h3>{risk}</h3><p>{evidence}</p></div>
                <div role="cell"><strong>Required control</strong><p>{control}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="dossier-section build-plan section-cobalt" id="recommendation">
          <div className="dossier-heading page-grid">
            <p className="section-index">05 / Recommendation</p>
            <div>
              <h2>Mirror cleanly. Migrate deliberately.</h2>
              <p>Use the approved private GitHub mirror as the reviewable source for this redesign. Keep the established website repository intact until every required capability has passed a documented parity check.</p>
            </div>
          </div>
          <div className="build-steps page-grid">
            {phases.map(([number, title, copy]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <div className="github-decision page-grid">
            <p className="kicker">Decision</p>
            <p>Use the approved private repository with a protected pull-request workflow. Do not overwrite or repurpose the established FIMMICK website repository.</p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
