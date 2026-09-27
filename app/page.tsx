import Link from "next/link";
import { AgentConstellation, Counter, HeroVideo } from "@/app/components/interactive";
import { SiteShell } from "@/app/components/site-shell";
import { agents, articles, capabilityPillars, caseStudies, industries, markets, services } from "@/app/data";

const challenges = [
  "Competitor research", "Content ideation", "Ad monitoring", "Campaign reporting",
  "Lead follow-up", "CRM segmentation", "Customer response", "Budget optimisation",
];

const steps = [
  { number: "01", title: "Benchmark", copy: "Map the market, competitors, customer signals, and operational gaps." },
  { number: "02", title: "Design", copy: "Define the right AI roles, workflows, data sources, integrations, and governance." },
  { number: "03", title: "Deploy", copy: "Launch managed agents into approved marketing, sales, CRM, content, and reporting workflows." },
  { number: "04", title: "Improve", copy: "Monitor output, approve decisions, learn from performance, and scale what works." },
];

const serviceGroups = ["Acquire", "Convert", "Retain", "Understand", "Automate", "Scale"] as const;

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FIMMICK",
    url: "https://www.fimmick.com",
    foundingDate: "2008",
    email: "info@fimmick.com",
    telephone: "+852 3622 5388",
    address: { "@type": "PostalAddress", addressLocality: "Hong Kong", addressCountry: "HK" },
    sameAs: ["https://hk.linkedin.com/company/fimmick"],
    description: "AI business transformation agency and managed AI Agent Platform for companies across Asia.",
  };

  return (
    <SiteShell>
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

        <section className="hero" aria-labelledby="hero-title">
          <HeroVideo />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-content page-grid">
            <div className="hero-copy">
              <p className="kicker hero-kicker"><span className="status-dot" /> AI business transformation / Asia</p>
              <h1 id="hero-title">Build Your<br /><em>AI Workforce.</em></h1>
              <p className="hero-support">Deploy managed AI agents that run marketing, sales, content, reporting, and customer engagement—alongside your team, every day.</p>
              <div className="button-row">
                <Link className="button button-primary" href="/en/contact?intent=benchmark">Get Your Free Industry Benchmark <span aria-hidden="true">↗</span></Link>
                <Link className="button button-secondary" href="/en/platform/agents">Explore the AI Agent Platform <span aria-hidden="true">→</span></Link>
              </div>
            </div>
            <p className="hero-proof">4,000+ AI agents. 500+ brands.<br />8 Asian markets. Operating 24/7.</p>
          </div>
          <div className="hero-metrics" aria-label="FIMMICK operating metrics">
            <Counter value={4000} suffix="+" label="Agents deployed" />
            <Counter value={500} suffix="+" label="Brands" />
            <Counter value={8} label="Asian markets" />
            <div className="counter"><strong>24/7</strong><span>Operations</span></div>
          </div>
          <a className="scroll-cue" href="#problem"><span>Scroll to system</span><i aria-hidden="true" /></a>
        </section>

        <section className="problem-section section-dark" id="problem">
          <div className="section-head page-grid reveal-on-scroll">
            <p className="section-index">01 / The constraint</p>
            <div>
              <p className="kicker">Business moves faster than teams can scale</p>
              <h2>Your Growth Operations Should Not Depend on More Manual Work.</h2>
            </div>
          </div>
          <div className="problem-system page-grid">
            <div className="fragmented-work" aria-label="Fragmented manual tasks">
              {challenges.map((challenge, index) => (
                <div className={`task-chip task-chip-${index + 1}`} key={challenge}>
                  <span>0{index + 1}</span>{challenge}
                </div>
              ))}
            </div>
            <div className="system-arrow" aria-hidden="true"><span>Coordinate</span><i /></div>
            <div className="coordinated-work">
              <div className="workflow-ring ring-a" />
              <div className="workflow-ring ring-b" />
              <div className="workflow-core"><span>Business<br />objective</span></div>
              <span className="workflow-label label-data">Data</span>
              <span className="workflow-label label-agent">Agents</span>
              <span className="workflow-label label-human">Human approval</span>
              <span className="workflow-label label-output">Outcomes</span>
            </div>
          </div>
          <div className="problem-statement page-grid">
            <p>Disconnected tasks create hidden queues, inconsistent decisions, and slow learning.</p>
            <p>FIMMICK connects data, agent roles, execution, and approval into one observable operating system.</p>
          </div>
        </section>

        <section className="capabilities-section section-light">
          <div className="section-head page-grid">
            <p className="section-index">02 / What FIMMICK delivers</p>
            <div>
              <p className="kicker">One connected intelligence layer</p>
              <h2>From Data Chaos to<br />AI-Powered Business Operations.</h2>
            </div>
          </div>
          <div className="capability-grid page-grid">
            {capabilityPillars.map((pillar) => (
              <article className="capability-card" key={pillar.title}>
                <div className="capability-top"><span>{pillar.number}</span><i aria-hidden="true" /></div>
                <div className="micro-viz" aria-hidden="true"><span /><span /><span /><span /><b /></div>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
                <dl>
                  <div><dt>Input</dt><dd>{pillar.input}</dd></div>
                  <div><dt>Output</dt><dd>{pillar.output}</dd></div>
                  <div><dt>Impact</dt><dd>{pillar.impact}</dd></div>
                </dl>
                <Link href="/en/platform/agents">Explore capability <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="agents-section section-ink">
          <div className="section-head page-grid">
            <p className="section-index">03 / AI Agent Platform</p>
            <div>
              <p className="kicker">Managed roles, not disconnected tools</p>
              <h2>AI Teammates With Roles, Inputs, Outputs, and Approval Loops.</h2>
              <p className="section-intro">Every agent operates within a defined mission, approved data boundary, measurable output, and human decision model.</p>
            </div>
          </div>
          <div className="page-grid"><AgentConstellation agents={agents} /></div>
          <div className="centered-cta"><Link className="button button-primary" href="/en/platform/agents">Explore the Platform <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="process-section section-cobalt">
          <div className="section-head page-grid">
            <p className="section-index">04 / Deployment model</p>
            <div>
              <p className="kicker">A controlled path to operating value</p>
              <h2>From First Benchmark to Always-On Operations.</h2>
            </div>
          </div>
          <div className="process-track page-grid">
            {steps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <div className="process-signal" aria-hidden="true"><i /><i /><i /></div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
          <div className="process-control page-grid"><span>Human direction</span><i /><span>Agent execution</span><i /><span>Measured improvement</span></div>
        </section>

        <section className="services-section section-light">
          <div className="section-head page-grid">
            <p className="section-index">05 / Services ecosystem</p>
            <div>
              <p className="kicker">Strategy connected to execution</p>
              <h2>Transformation That Connects Strategy to Execution.</h2>
              <p className="section-intro">Start with a business objective. Assemble the right data, service expertise, agent roles, and human governance around it.</p>
            </div>
          </div>
          <div className="service-accordion page-grid">
            {serviceGroups.map((group, groupIndex) => {
              const groupServices = services.filter((service) => service.objective === group);
              return (
                <details key={group} open={groupIndex === 0}>
                  <summary><span>0{groupIndex + 1}</span><strong>{group}</strong><em>{groupServices.length} capabilities</em><i aria-hidden="true">+</i></summary>
                  <div className="service-links">
                    {groupServices.map((service) => (
                      <Link href={`/en/services/${service.slug}`} key={service.slug}>
                        <span>{service.eyebrow}</span><strong>{service.title}</strong><p>{service.summary}</p><i aria-hidden="true">↗</i>
                      </Link>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
          <div className="centered-cta"><Link className="button button-dark" href="/en/services">Explore all services <span aria-hidden="true">→</span></Link></div>
        </section>

        <section className="integration-section section-ink">
          <div className="section-head page-grid">
            <p className="section-index">06 / Integration ecosystem</p>
            <div>
              <p className="kicker">Work with the stack you already have</p>
              <h2>Built Around the Systems Your Business Already Uses.</h2>
            </div>
          </div>
          <div className="integration-layout page-grid">
            <div className="integration-copy">
              <p>FIMMICK routes governed context between CRM, WhatsApp, analytics, advertising, e-commerce, and marketing platforms—so agents can work across the operating journey.</p>
              <div className="big-proof"><strong>200+</strong><span>marketing tools<br />and system connections</span></div>
            </div>
            <div className="data-router" aria-label="Abstract integration routing diagram">
              <div className="router-core"><span>FIMMICK</span><strong>Agent layer</strong></div>
              {[["CRM", "router-1"], ["Messaging", "router-2"], ["Analytics", "router-3"], ["Advertising", "router-4"], ["Commerce", "router-5"], ["Content", "router-6"]].map(([label, className]) => (
                <div className={`router-node ${className}`} key={label}><i aria-hidden="true" /><span>{label}</span></div>
              ))}
              <div className="router-orbit" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="asia-section section-midnight">
          <div className="section-head page-grid">
            <p className="section-index">07 / Asia intelligence</p>
            <div>
              <p className="kicker">Local complexity, regional scale</p>
              <h2>Built for the Complexity of Asia.</h2>
              <p className="section-intro">Multilingual operations, regional market intelligence, local customer behaviour, and cross-market governance are built into the operating model.</p>
            </div>
          </div>
          <div className="asia-layout page-grid">
            <div className="asia-signal-map" aria-label="FIMMICK operating markets in Asia">
              <div className="map-grid" aria-hidden="true" />
              {markets.map((market, index) => <div className={`market-node market-${index + 1}`} key={market}><i aria-hidden="true" /><span>{market}</span></div>)}
              <div className="regional-pulse pulse-a" aria-hidden="true" /><div className="regional-pulse pulse-b" aria-hidden="true" />
            </div>
            <div className="asia-proof">
              <strong>8</strong>
              <span>operating markets</span>
              <p>Hong Kong-rooted teams coordinate local insight and execution across Greater China, North Asia, and Southeast Asia.</p>
              <dl><div><dt>Language</dt><dd>Regional context, not direct translation</dd></div><div><dt>Signals</dt><dd>Market-specific sources and behaviour</dd></div><div><dt>Scale</dt><dd>Shared workflows with local controls</dd></div></dl>
            </div>
          </div>
        </section>

        <section className="home-industries section-offwhite">
          <div className="section-head page-grid">
            <p className="section-index">08 / Industry systems</p>
            <div><p className="kicker">Vertical intelligence</p><h2>AI Workforces Built Around How Your Industry Actually Operates.</h2><p className="section-intro">Start from real demand signals, customer journeys, operating risks and approval requirements—not a generic automation template.</p></div>
          </div>
          <div className="home-industry-grid page-grid">{industries.map((industry,index)=><Link href={`/en/industries/${industry.slug}`} key={industry.slug}><span>{String(index+1).padStart(2,"0")}</span><h3>{industry.name}</h3><p>{industry.challenge}</p><strong>Explore ↗</strong></Link>)}</div>
          <div className="centered-cta"><Link className="button button-dark" href="/en/industries">Explore all industries <span aria-hidden="true">→</span></Link></div>
        </section>

        <section className="cases-section section-light">
          <div className="section-head page-grid">
            <p className="section-index">09 / Case studies</p>
            <div>
              <p className="kicker">Proof in the operating model</p>
              <h2>Operational AI.<br />Measurable Business Outcomes.</h2>
            </div>
          </div>
          <div className="case-grid page-grid">
            {caseStudies.map((study, index) => (
              <Link className={`case-card case-card-${index + 1}`} href={`/en/case-studies/${study.slug}`} key={study.slug}>
                <div className="case-visual" aria-hidden="true"><span>0{index + 1}</span><i /><i /><i /></div>
                <div className="case-copy"><p className="kicker">{study.sector}</p><h3>{study.title}</h3><p>{study.workflow}</p><div className="case-metrics">{study.metrics.map((metric) => <span key={metric.label}><strong>{metric.value}</strong>{metric.label}</span>)}</div><em>Read case study ↗</em></div>
              </Link>
            ))}
          </div>
          <div className="centered-cta"><Link className="button button-dark" href="/en/case-studies">View case study library <span aria-hidden="true">→</span></Link></div>
        </section>

        <section className="insights-section section-offwhite">
          <div className="section-head page-grid">
            <p className="section-index">09 / Knowledge Hub</p>
            <div>
              <p className="kicker">Practical intelligence for leaders</p>
              <h2>Intelligence for Teams Building What’s Next.</h2>
            </div>
          </div>
          <div className="insight-grid page-grid">
            {articles.slice(0, 4).map((article, index) => (
              <Link className={`insight-card insight-card-${index + 1}`} href={`/en/knowledge-hub/${article.slug}`} key={article.slug}>
                <div className="insight-meta"><span>{article.category}</span><time dateTime={article.date}>{article.displayDate}</time></div>
                <h3>{article.title}</h3><p>{article.summary}</p><em>{article.readTime} read <span aria-hidden="true">↗</span></em>
              </Link>
            ))}
          </div>
          <div className="centered-cta"><Link className="button button-dark" href="/en/knowledge-hub">Explore the Knowledge Hub <span aria-hidden="true">→</span></Link></div>
        </section>

        <section className="final-cta section-ink">
          <div className="cta-network" aria-hidden="true"><i /><i /><i /><i /><i /><span /></div>
          <div className="final-cta-inner page-grid">
            <p className="section-index">10 / Start here</p>
            <div>
              <p className="kicker">Find the highest-value first workflow</p>
              <h2>Turn Your Operating Model Into an AI Advantage.</h2>
              <p>See where AI agents can create the most immediate value across your marketing, sales, and customer operations.</p>
              <div className="button-row"><Link className="button button-primary" href="/en/contact?intent=benchmark">Get Your Free Industry Benchmark <span aria-hidden="true">↗</span></Link><Link className="button button-secondary" href="/en/ai-workshop">Book an AI Workshop <span aria-hidden="true">→</span></Link></div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
