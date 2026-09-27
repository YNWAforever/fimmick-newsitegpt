import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { Breadcrumbs, PageFinalCta, SubpageHero } from "@/app/components/subpage";
import { articles } from "@/app/data";

export const metadata: Metadata = {
  title: "Knowledge Hub — AI & Marketing Insights",
  description: "FIMMICK insights on AI transformation, AI marketing, automation, CRM, customer engagement, SEO and AEO, e-commerce, and Asia market intelligence.",
  alternates: { canonical: "https://www.fimmick.com/en/knowledge-hub/" },
};

const categories = ["All", "AI Transformation", "AI Workforce", "AI Marketing", "Marketing Automation", "Growth Strategy", "Asia Intelligence"];

export default function KnowledgeHubPage() {
  const featured = articles[0];
  return (
    <SiteShell><main id="main-content">
      <div className="subpage-nav page-grid"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Knowledge Hub"}]} /></div>
      <SubpageHero eyebrow="Knowledge Hub / practical intelligence" title={<>Intelligence for teams<br /><em>building what’s next.</em></>} intro="Ideas, frameworks, and operating guidance for leaders turning AI, data, marketing, and customer systems into business capability." code="I/01"><div className="button-row"><a className="button button-primary" href="#articles">Browse Latest Intelligence ↓</a></div></SubpageHero>
      <section className="featured-article section-offwhite">
        <div className="page-grid"><div className="featured-visual" aria-hidden="true"><span>FIMMICK / ASIA SIGNAL FIELD</span><i/><i/><i/><i/><b/></div><div className="featured-copy"><p className="kicker">Featured / {featured.category}</p><h2>{featured.title}</h2><p>{featured.summary}</p><div className="article-byline"><time dateTime={featured.date}>{featured.displayDate}</time><span>{featured.readTime} read</span><span>By {featured.author}</span></div><Link className="button button-dark" href={`/en/knowledge-hub/${featured.slug}`}>Read the report ↗</Link></div></div>
      </section>
      <section className="article-library section-light" id="articles">
        <div className="article-filter page-grid"><span>Filter /</span>{categories.map((category,index)=><button type="button" className={index===0?"is-active":""} key={category}>{category}</button>)}</div>
        <div className="article-card-grid page-grid">
          {articles.map((article,index)=><Link href={`/en/knowledge-hub/${article.slug}`} key={article.slug}><div className="article-card-top"><span>{String(index+1).padStart(2,"0")}</span><em>{article.category}</em></div><h2>{article.title}</h2><p>{article.summary}</p><div className="article-card-bottom"><time dateTime={article.date}>{article.displayDate}</time><span>{article.readTime}</span><i>↗</i></div></Link>)}
        </div>
      </section>
      <section className="topic-hubs section-midnight"><div className="section-head page-grid"><p className="section-index">Topics</p><div><p className="kicker">Build a connected view</p><h2>Explore the operating questions.</h2></div></div><div className="topic-grid page-grid">{["AI transformation","AI marketing","Marketing automation","WhatsApp automation","CRM & customer engagement","SEO & AEO","E-commerce growth","Asia market intelligence"].map((topic,index)=><Link href={`/en/knowledge-hub?topic=${encodeURIComponent(topic)}`} key={topic}><span>0{index+1}</span><strong>{topic}</strong><i>↗</i></Link>)}</div></section>
      <PageFinalCta title="Turn the intelligence into an operating decision." />
    </main></SiteShell>
  );
}
