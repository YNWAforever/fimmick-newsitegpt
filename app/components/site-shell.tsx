import Link from "next/link";
import { markets } from "@/app/data";
import { megaNavigation } from "@/app/navigation-data";

export function Wordmark() {
  return (
    <span className="wordmark" aria-label="FIMMICK">
      <span className="wordmark-dot" aria-hidden="true" />
      FIMMICK
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="header-inner">
        <Link className="brand-link" href="/" aria-label="FIMMICK home"><Wordmark /></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {megaNavigation.map((item) => (
            <div className="mega-nav-item" key={item.href}>
              <Link className="mega-trigger" href={item.href} aria-haspopup="true">{item.label}<span aria-hidden="true">⌄</span></Link>
              <div className="mega-panel" aria-label={`${item.label} navigation`}>
                <div className="mega-panel-inner">
                  <div className="mega-panel-intro">
                    <p>{item.code}</p>
                    <h2>{item.headline}</h2>
                    <span>{item.summary}</span>
                    <Link href={item.href}>Explore {item.label} overview <i aria-hidden="true">↗</i></Link>
                  </div>
                  <div className="mega-panel-groups">
                    {item.groups.map((group) => (
                      <div className="mega-link-group" key={group.label}>
                        <p>{group.label}</p>
                        {group.links.map((link) => (
                          <Link href={link.href} key={link.href}>
                            <strong>{link.title}</strong>
                            <span>{link.description}</span>
                            <i aria-hidden="true">↗</i>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  <Link className="mega-feature" href={item.feature.href}>
                    <p>{item.feature.eyebrow}</p>
                    <strong>{item.feature.title}</strong>
                    <span>{item.feature.description}</span>
                    <div><b>{item.feature.metric}</b><em>{item.feature.metricLabel}</em></div>
                    <i aria-hidden="true">↗</i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </nav>
        <Link className="header-cta" href="/en/contact?intent=benchmark">
          Get Benchmark <span aria-hidden="true">↗</span>
        </Link>
        <details className="mobile-menu">
          <summary className="mobile-menu-toggle" aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {megaNavigation.map((item, index) => (
              <details className="mobile-nav-section" key={item.href}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.label}</strong><i aria-hidden="true">+</i></summary>
                <div className="mobile-nav-links">
                  <Link className="mobile-overview" href={item.href}><strong>{item.label} overview</strong><span>{item.headline}</span><i aria-hidden="true">↗</i></Link>
                  {item.groups.flatMap((group) => group.links).map((link) => (
                    <Link href={link.href} key={link.href}><strong>{link.title}</strong><span>{link.description}</span><i aria-hidden="true">↗</i></Link>
                  ))}
                </div>
              </details>
            ))}
            <Link className="mobile-primary" href="/en/contact?intent=benchmark">Get Benchmark ↗</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <Wordmark />
        <p>AI business transformation, built in Hong Kong for the complexity of Asia.</p>
      </div>
      <div className="footer-grid">
        <div>
          <p className="footer-label">Platform</p>
          <Link href="/en/platform">Platform Overview</Link>
          <Link href="/en/platform/agents">AI Agent Platform</Link>
          <Link href="/en/platform/marketplace">Agent Marketplace</Link>
          <Link href="/en/platform/pricing">Pricing</Link>
          <Link href="/en/ai-transformation">AI Transformation</Link>
          <Link href="/en/ai-transformation/strategy-roadmap">Strategy & Roadmap</Link>
        </div>
        <div>
          <p className="footer-label">Services</p>
          <Link href="/en/services/digitalmarketing">Digital Marketing</Link>
          <Link href="/en/services/marketing-automation">Marketing Automation</Link>
          <Link href="/en/services/crm-sales">CRM & Sales</Link>
          <Link href="/en/services/seo-aeo">SEO & AEO</Link>
          <Link href="/en/services">All services</Link>
        </div>
        <div>
          <p className="footer-label">Industries</p>
          <Link href="/en/industries/retail-ecommerce">Retail & E-commerce</Link>
          <Link href="/en/industries/financial-services">Financial Services</Link>
          <Link href="/en/industries/hospitality-travel">Hospitality & Travel</Link>
          <Link href="/en/industries/beauty-luxury">Beauty & Luxury</Link>
          <Link href="/en/industries">All industries</Link>
        </div>
        <div>
          <p className="footer-label">Company</p>
          <Link href="/en/about">About</Link>
          <Link href="/en/about/how-we-work">How We Work</Link>
          <Link href="/en/about/asia-delivery">Asia Delivery</Link>
          <Link href="/en/case-studies">Case Studies</Link>
          <Link href="/en/events">Events</Link>
          <Link href="/en/ai-workshop">AI Workshop</Link>
          <a href="https://hk.linkedin.com/company/fimmick" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <a href="mailto:info@fimmick.com">info@fimmick.com</a>
          <a href="tel:+85236225388">+852 3622 5388</a>
          <p>Hong Kong HQ</p>
          <Link href="/en/contact">Start a conversation</Link>
        </div>
      </div>
      <div className="footer-markets" aria-label="Operating markets">
        {markets.map((market) => <span key={market}>{market}</span>)}
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FIMMICK. All rights reserved.</p>
        <div>
          <Link href="/en/privacy">Privacy</Link>
          <Link href="/en/terms">Terms</Link>
          <Link href="/en/cookies">Cookies</Link>
        </div>
        <div className="language-links" aria-label="Language selector">
          <span>EN</span>
          <a href="https://www.fimmick.com/zh-hk/" lang="zh-Hant">繁中</a>
          <a href="https://www.fimmick.com/zh-cn/" lang="zh-Hans">简中</a>
          <span lang="ja">日本語</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
