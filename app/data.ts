export type Service = {
  slug: string;
  title: string;
  objective: "Acquire" | "Convert" | "Retain" | "Understand" | "Automate" | "Scale";
  eyebrow: string;
  summary: string;
  intro: string;
  capabilities: string[];
  inputs: string[];
  outputs: string[];
  impact: string;
};

export const services: Service[] = [
  {
    slug: "ai-transformation",
    title: "AI Transformation",
    objective: "Scale",
    eyebrow: "Operating-model redesign",
    summary: "Move from isolated AI experiments to governed, measurable workflows.",
    intro: "FIMMICK maps where AI can create value, redesigns the workflow around real business decisions, and deploys managed agents with clear ownership and human approval.",
    capabilities: ["AI maturity assessment", "Workflow opportunity mapping", "Agent and governance design", "Team enablement and optimisation"],
    inputs: ["Business objectives", "Current workflows", "Data and systems", "Risk requirements"],
    outputs: ["Prioritised roadmap", "Agent operating model", "Governance framework", "90-day deployment plan"],
    impact: "A practical transformation programme that connects strategy to daily execution.",
  },
  {
    slug: "digitalmarketing",
    title: "Digital Marketing",
    objective: "Acquire",
    eyebrow: "Connected growth execution",
    summary: "Coordinate strategy, media, content, social, CRM, and analytics as one system.",
    intro: "FIMMICK combines regional market knowledge with always-on intelligence and execution workflows across the customer journey.",
    capabilities: ["Integrated campaign strategy", "Paid and organic media", "Social and content operations", "Performance optimisation"],
    inputs: ["Brand strategy", "Audience signals", "Campaign data", "Channel plans"],
    outputs: ["Campaign system", "Content and media assets", "Optimisation actions", "Executive reporting"],
    impact: "Faster, more connected marketing decisions across teams and markets.",
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    objective: "Automate",
    eyebrow: "Always-on journeys",
    summary: "Turn repeated campaigns and customer journeys into reliable, governed automation.",
    intro: "Connect audience signals, triggers, content, approvals, delivery, and learning loops across email, messaging, CRM, and paid channels.",
    capabilities: ["Journey and trigger design", "Email and messaging automation", "Lead nurturing", "Campaign orchestration"],
    inputs: ["Lifecycle data", "Behavioural triggers", "Consent rules", "Content library"],
    outputs: ["Automated journeys", "Personalised messages", "Exception queues", "Performance insights"],
    impact: "More relevant customer engagement without multiplying manual campaign work.",
  },
  {
    slug: "crm-sales",
    title: "CRM & Sales Automation",
    objective: "Convert",
    eyebrow: "Lead intelligence and follow-up",
    summary: "Give sales teams cleaner signals, faster follow-up, and more consistent customer context.",
    intro: "FIMMICK agents segment audiences, enrich context, draft approved outreach, route opportunities, and keep CRM records current.",
    capabilities: ["CRM segmentation", "Lead scoring and routing", "Sales follow-up", "Pipeline intelligence"],
    inputs: ["CRM records", "Engagement history", "Lead source", "Sales rules"],
    outputs: ["Prioritised leads", "Approved follow-up", "Updated CRM context", "Pipeline summaries"],
    impact: "Shorter response times and a more disciplined path from signal to conversation.",
  },
  {
    slug: "seo-aeo",
    title: "SEO & AEO",
    objective: "Acquire",
    eyebrow: "Search and answer visibility",
    summary: "Build discoverability across search engines and AI-generated answers.",
    intro: "FIMMICK combines technical SEO, entity clarity, content architecture, structured data, and answer-engine monitoring for Asia brands.",
    capabilities: ["Technical SEO audits", "AEO and entity strategy", "Content and internal linking", "AI visibility monitoring"],
    inputs: ["Site architecture", "Search demand", "Brand entities", "Competitive visibility"],
    outputs: ["Prioritised fixes", "Answer-ready content", "Schema recommendations", "Visibility reporting"],
    impact: "A clearer, more authoritative brand presence wherever customers ask questions.",
  },
  {
    slug: "social-listening",
    title: "Social Listening",
    objective: "Understand",
    eyebrow: "Live market signals",
    summary: "Monitor brand, category, competitor, and customer conversations across Asian platforms.",
    intro: "Agents collect relevant public signals, classify themes, detect shifts, and route decision-ready intelligence to the people who need it.",
    capabilities: ["Brand and competitor monitoring", "Trend and issue detection", "Sentiment and topic analysis", "Alerting and executive summaries"],
    inputs: ["Public conversations", "Keywords and entities", "Competitor set", "Risk thresholds"],
    outputs: ["Signal alerts", "Trend maps", "Insight briefs", "Action recommendations"],
    impact: "Earlier awareness of market movement, customer needs, and reputation risk.",
  },
  {
    slug: "koc-community",
    title: "Influencer, KOL & KOC",
    objective: "Acquire",
    eyebrow: "Trusted advocacy systems",
    summary: "Build authentic creator and community programmes with structured intelligence and measurement.",
    intro: "FIMMICK supports discovery, selection, briefing, content review, programme operations, and performance analysis across regional creator ecosystems.",
    capabilities: ["KOL and KOC discovery", "Community programme design", "Creator workflow management", "Advocacy measurement"],
    inputs: ["Audience profile", "Creator signals", "Brand guidelines", "Campaign objectives"],
    outputs: ["Creator shortlist", "Approved briefs", "Content workflow", "Impact reporting"],
    impact: "A scalable advocacy programme built on fit and credibility, not a volume-only creator list.",
  },
  {
    slug: "ecommerce-growth",
    title: "E-commerce Growth",
    objective: "Convert",
    eyebrow: "Connected commerce journeys",
    summary: "Connect acquisition, product content, conversion, CRM, and retention around commerce data.",
    intro: "FIMMICK helps brands turn behavioural and transaction signals into better merchandising, campaigns, customer journeys, and growth decisions.",
    capabilities: ["Commerce strategy", "Product content operations", "Conversion optimisation", "Lifecycle growth"],
    inputs: ["Product catalogue", "Traffic and conversion", "Customer segments", "Campaign history"],
    outputs: ["Growth roadmap", "Optimised content", "Triggered journeys", "Commercial reporting"],
    impact: "A joined-up growth system from first click to repeat purchase.",
  },
  {
    slug: "business-intelligence",
    title: "Business Intelligence",
    objective: "Understand",
    eyebrow: "Decision-ready analysis",
    summary: "Transform fragmented reporting into concise, governed business signals.",
    intro: "FIMMICK connects marketing and commercial data, standardises definitions, and creates dashboards and agent-generated decision briefs.",
    capabilities: ["Measurement architecture", "Custom dashboards", "Predictive analysis", "Executive decision briefs"],
    inputs: ["Channel data", "CRM and sales data", "Business KPIs", "Reporting cadence"],
    outputs: ["Unified views", "Automated reports", "Anomaly alerts", "Decision recommendations"],
    impact: "Less time assembling reports and more time acting on what the data means.",
  },
  {
    slug: "data-hub",
    title: "Data Hub & Integration",
    objective: "Scale",
    eyebrow: "Connected operating data",
    summary: "Create the trusted data layer agents need to work across systems.",
    intro: "FIMMICK unifies first-party and campaign data, maps identities and events, and routes governed context into operational workflows.",
    capabilities: ["Data source mapping", "CRM and CDP integration", "Event and identity design", "Agent-ready data services"],
    inputs: ["CRM", "Analytics", "Ad platforms", "Commerce and messaging"],
    outputs: ["Connected data model", "Integration flows", "Quality controls", "Reusable data services"],
    impact: "A more reliable foundation for automation, personalisation, and measurement.",
  },
  {
    slug: "content-creative",
    title: "Content & Creative",
    objective: "Acquire",
    eyebrow: "Controlled generation",
    summary: "Scale multilingual content without losing brand standards or human judgment.",
    intro: "Agents turn market and performance inputs into briefs, copy, variants, and visual directions, with review gates before anything goes live.",
    capabilities: ["Content intelligence", "Multilingual copy systems", "Creative versioning", "Human review workflows"],
    inputs: ["Brand system", "Audience insight", "Campaign brief", "Performance data"],
    outputs: ["Creative territories", "Copy and variants", "Production briefs", "Approved asset packs"],
    impact: "More relevant creative options and faster iteration with the brand team in control.",
  },
  {
    slug: "customer-experience",
    title: "Customer Experience",
    objective: "Retain",
    eyebrow: "Responsive lifecycle operations",
    summary: "Design connected service and loyalty journeys across messaging, CRM, and human teams.",
    intro: "FIMMICK helps companies automate customer support workflows, route exceptions, and use conversation intelligence to improve the experience.",
    capabilities: ["Journey redesign", "Messaging and FAQ automation", "Ticket triage", "Loyalty and service insight"],
    inputs: ["Customer conversations", "Knowledge base", "Service rules", "Lifecycle data"],
    outputs: ["Approved responses", "Routed cases", "Journey signals", "Experience insights"],
    impact: "Faster everyday service while preserving human attention for judgment and recovery.",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    objective: "Automate",
    eyebrow: "Repeatable work, redesigned",
    summary: "Turn manual handoffs into observable workflows with clear exceptions and ownership.",
    intro: "FIMMICK maps recurring processes, identifies safe automation points, connects systems, and introduces agents with auditability and escalation rules.",
    capabilities: ["Process mapping", "Agent workflow design", "Systems integration", "Exception and SLA management"],
    inputs: ["Process steps", "Business rules", "System access", "Approval thresholds"],
    outputs: ["Automated workflow", "Human approval queue", "Audit trail", "Performance measures"],
    impact: "More consistent execution and less operational drag across recurring work.",
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    objective: "Retain",
    eyebrow: "Approved messaging journeys",
    summary: "Connect WhatsApp conversations to CRM context, service rules, and customer lifecycle actions.",
    intro: "FIMMICK designs governed messaging flows for enquiries, lead qualification, notifications, service, and follow-up.",
    capabilities: ["Conversation flow design", "CRM context and routing", "Approved response systems", "Lifecycle triggers"],
    inputs: ["WhatsApp events", "CRM profiles", "Knowledge content", "Consent and service rules"],
    outputs: ["Contextual replies", "Qualified conversations", "Human escalations", "Conversation reporting"],
    impact: "More useful customer conversations with full visibility and controlled escalation.",
  },
  {
    slug: "ai-training",
    title: "AI Training & Enablement",
    objective: "Scale",
    eyebrow: "Teams ready to operate AI",
    summary: "Build practical AI literacy, workflow capability, and governance across leadership and teams.",
    intro: "FIMMICK runs hands-on workshops and custom programmes grounded in each organisation’s work, systems, and responsibilities.",
    capabilities: ["Executive AI briefings", "Role-based workshops", "Workflow labs", "Governance and adoption programmes"],
    inputs: ["Team roles", "Priority workflows", "Capability gaps", "Policy context"],
    outputs: ["Training programme", "Workflow prototypes", "Operating guidelines", "Adoption roadmap"],
    impact: "A workforce that can direct, review, and improve AI systems with confidence.",
  },
];

export type Agent = {
  id: string;
  title: string;
  mission: string;
  inputs: string;
  tasks: string;
  output: string;
  approval: string;
};

export const agents: Agent[] = [
  { id: "intelligence", title: "Intelligence Agent", mission: "Detect material market, competitor, and category shifts.", inputs: "Public signals, search, competitor set", tasks: "Monitors, classifies, compares, alerts", output: "Prioritised market brief", approval: "Strategist validates significance and action" },
  { id: "audience", title: "Audience & CRM Agent", mission: "Turn customer context into useful, governed segments.", inputs: "CRM, consent, behaviour, lifecycle stage", tasks: "Cleans, enriches, segments, routes", output: "Activation-ready audiences", approval: "CRM owner approves rules and sensitive use" },
  { id: "content", title: "Content Agent", mission: "Create on-brand content options from approved insight.", inputs: "Brief, brand system, audience, channel", tasks: "Drafts, localises, versions, checks", output: "Review-ready content pack", approval: "Brand team approves every publishable asset" },
  { id: "community", title: "Social & Community Agent", mission: "Keep community operations responsive and informed.", inputs: "Social conversations, policy, knowledge", tasks: "Classifies, drafts, escalates, summarises", output: "Response queue and insight log", approval: "Community lead reviews exceptions and risk" },
  { id: "media", title: "Paid Media Agent", mission: "Monitor performance and propose controlled optimisation.", inputs: "Campaign, conversion, budget, guardrails", tasks: "Detects anomalies, compares, recommends", output: "Optimisation actions", approval: "Media owner approves material budget changes" },
  { id: "reporting", title: "Reporting Agent", mission: "Convert fragmented channel data into decisions.", inputs: "Analytics, media, CRM, business KPI", tasks: "Reconciles, analyses, explains, alerts", output: "Executive decision brief", approval: "Analyst validates definitions and exceptions" },
  { id: "sales", title: "Sales Follow-up Agent", mission: "Move qualified demand into timely conversations.", inputs: "Lead source, CRM, engagement, SLA", tasks: "Prioritises, drafts, follows up, updates", output: "Qualified follow-up queue", approval: "Sales team controls outreach and opportunity stage" },
  { id: "cx", title: "Customer Experience Agent", mission: "Resolve routine needs and protect human attention for judgment.", inputs: "Conversation, profile, knowledge, service rule", tasks: "Answers, routes, records, learns", output: "Resolved request or enriched escalation", approval: "Service lead owns policy and recovery decisions" },
];

export const capabilityPillars = [
  { number: "01", title: "Market Intelligence", copy: "Observe category movement, competitors, search behaviour, and customer conversation at operating speed.", input: "Signals", output: "Priorities", impact: "See change earlier" },
  { number: "02", title: "Data Analysis", copy: "Connect campaign, CRM, commerce, and channel data into concise explanations and next actions.", input: "Performance", output: "Decisions", impact: "Act with context" },
  { number: "03", title: "Creative Generation", copy: "Produce controlled, multilingual variants from approved insight, brand rules, and performance learning.", input: "Brief + brand", output: "Review-ready assets", impact: "Iterate faster" },
  { number: "04", title: "Marketing Strategy", copy: "Coordinate audiences, channels, budgets, content, and timing around measurable business priorities.", input: "Objectives", output: "Operating plan", impact: "Move as one system" },
];

export type CaseStudy = {
  slug: string;
  sector: string;
  title: string;
  challenge: string;
  workflow: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fimmick-ai-native-operating-model",
    sector: "FIMMICK / Operating model",
    title: "Transforming our own operations before transforming clients.",
    challenge: "Scale output while moving from project delivery toward an AI-enabled platform operating model.",
    workflow: "FIMMICK turned recurring research, content, reporting, optimisation, and engagement workflows into managed agent systems with human approval.",
    outcome: "A smaller operating team producing three times the output—used as practical experience for client transformation programmes.",
    metrics: [{ value: "130→40", label: "people in the operating model" }, { value: "3×", label: "output" }],
    services: ["AI Transformation", "Workflow Automation", "Business Intelligence"],
  },
  {
    slug: "regional-beauty-loyalty-orchestration",
    sector: "Regional beauty / CRM",
    title: "Personalised loyalty operations across three Asian markets.",
    challenge: "A four-person executive team needed to run more relevant weekly lifecycle communications across Hong Kong, Taiwan, and Singapore.",
    workflow: "An agent layer connected audience segmentation, multilingual content preparation, review, and campaign orchestration across 12 segments.",
    outcome: "The same four executives operated weekly personalised campaigns with a three-day lead time and improved email-attributed revenue per send.",
    metrics: [{ value: "12", label: "audience segments" }, { value: "3 days", label: "campaign lead time" }, { value: "+40%", label: "email-attributed revenue / send" }],
    services: ["CRM & Sales Automation", "Content & Creative", "Marketing Automation"],
  },
  {
    slug: "asia-operating-footprint",
    sector: "Portfolio proof / Asia",
    title: "A reusable operating layer across diverse Asian markets.",
    challenge: "Brands need to manage multilingual content, local platform behaviour, customer expectations, and market intelligence without rebuilding every workflow from zero.",
    workflow: "FIMMICK combines local market teams, regional intelligence, reusable agent templates, CRM and messaging connections, and shared governance.",
    outcome: "A repeatable foundation currently supporting more than 500 brands across eight Asian markets.",
    metrics: [{ value: "500+", label: "brands served" }, { value: "8", label: "Asian markets" }, { value: "24/7", label: "agent operations" }],
    services: ["Digital Marketing", "Data Hub & Integration", "AI Transformation"],
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  displayDate: string;
  readTime: string;
  author: string;
  sections: { heading: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: "state-of-ai-marketing-asia-2026",
    category: "AI Transformation",
    title: "State of AI Marketing in Asia 2026",
    summary: "What separates AI activity from AI operating capability—and the priorities shaping the next phase of growth in Asia.",
    date: "2026-06-06", displayDate: "6 Jun 2026", readTime: "10 min", author: "FIMMICK",
    sections: [
      { heading: "The infrastructure gap", body: "Many organisations say AI is a priority, but fragmented first-party data, inconsistent attribution, and isolated pilots prevent AI from learning across the business. The first transformation priority is a trusted operating data layer." },
      { heading: "From content speed to learning loops", body: "The strongest teams connect production acceleration with personalisation and performance-led iteration. The advantage comes from the full loop—not from generating more assets in isolation." },
      { heading: "AI-native discovery", body: "Answer Engine Optimisation is becoming part of brand visibility strategy. Clear entities, direct answers, structured evidence, and technically accessible content help brands earn presence in search and AI-generated responses." },
      { heading: "The human operating model", body: "Skills, governance, decision rights, and adoption determine whether a pilot becomes a durable capability. Leaders should define what agents execute, what people approve, and how performance is reviewed before scaling." },
    ],
  },
  {
    slug: "how-to-build-ai-workforce-marketing-team",
    category: "AI Workforce",
    title: "How to Build an AI Workforce for Your Marketing Team",
    summary: "A practical path from workflow mapping to governed agent roles, approvals, and improvement cycles.",
    date: "2026-06-06", displayDate: "6 Jun 2026", readTime: "8 min", author: "FIMMICK",
    sections: [
      { heading: "Start with work, not tools", body: "Map the five highest-volume, most repetitive workflows. Document inputs, steps, outputs, owners, and decision points. This creates a more useful starting point than selecting a model or prompt library." },
      { heading: "Define agent roles", body: "Each agent should have a mission, approved data sources, permitted actions, a measurable output, and an explicit escalation point. The operating contract matters as much as the model." },
      { heading: "Design for Asia", body: "Traditional Chinese, Simplified Chinese, Cantonese vernacular, regional platforms, consent requirements, and local customer expectations should be part of the workflow design—not handled as last-mile translation." },
      { heading: "Scale through governance", body: "Begin with one high-value workflow, measure accuracy and time saved, then add connected roles. Human review should focus on judgment, risk, and exceptions rather than redoing the agent’s entire task." },
    ],
  },
  {
    slug: "ai-marketing-agency-hong-kong-guide",
    category: "AI Marketing",
    title: "AI Marketing Agency Hong Kong: The Complete Guide",
    summary: "How to evaluate whether an AI partner can connect data, workflows, channels, governance, and measurable operations.",
    date: "2026-06-06", displayDate: "6 Jun 2026", readTime: "12 min", author: "FIMMICK",
    sections: [
      { heading: "The shift from tool to worker", body: "An operational agent works within defined parameters, monitors triggers, completes multi-step tasks, and routes exceptions. This is materially different from a chatbot waiting for an isolated prompt." },
      { heading: "Questions to ask", body: "Ask what agents are in production, how data is governed, where human approval sits, how multilingual quality is controlled, what reporting infrastructure exists, and what the first 90 days look like." },
      { heading: "Common failure patterns", body: "AI programmes stall when they automate poor data, select low-value workflows, ignore change management, or treat adoption as a software procurement exercise." },
      { heading: "A credible partner model", body: "The partner should connect strategy, data, integration, day-to-day operations, and capability transfer. Enterprise readiness is demonstrated through operating discipline—not through inflated claims." },
    ],
  },
  {
    slug: "beyond-traditional-marketing-automation",
    category: "Marketing Automation",
    title: "Beyond Traditional Marketing Automation",
    summary: "Why the next operating layer combines triggers and journeys with reasoning, context, and controlled agent action.",
    date: "2025-07-28", displayDate: "28 Jul 2025", readTime: "7 min", author: "FIMMICK",
    sections: [
      { heading: "Rules are necessary, but not sufficient", body: "Traditional automation works well when every condition is known. Agents add value where the system must interpret context, compare options, prepare an output, or route an exception." },
      { heading: "The managed AI teammate", body: "A useful agent is connected to a real workflow, data source, approval rule, and business measure. It should make the work more reliable—not make governance less visible." },
      { heading: "Build the feedback loop", body: "Approved outputs, performance, corrections, and exceptions should feed the next iteration. This turns individual automation into an operating system that improves over time." },
    ],
  },
  {
    slug: "the-winning-product-launch-ai-formula-to-maximise-roi",
    category: "Growth Strategy",
    title: "The Winning AI Product Launch Formula to Maximise ROI",
    summary: "A launch system connecting scalable content, targeted acquisition, and authentic advocacy.",
    date: "2026-05-19", displayDate: "19 May 2026", readTime: "7 min", author: "FIMMICK",
    sections: [
      { heading: "Why strong products underperform", body: "A single hero asset, disconnected channel teams, and limited message testing concentrate launch risk. The operating model should create structured learning before and during media investment." },
      { heading: "Three connected pillars", body: "Scalable content creates tested message options, targeted acquisition finds the right demand, and authentic advocacy provides trust. Their data should move through one shared optimisation loop." },
      { heading: "Measure the system", body: "Evaluate creative learning speed, audience quality, conversion, advocacy signals, and commercial return together. Optimising one channel without the full journey can hide the real constraint." },
    ],
  },
  {
    slug: "ai-agent-pinpointing-the-next-blue-ocean-market",
    category: "Asia Intelligence",
    title: "Using AI Agents to Pinpoint the Next Blue Ocean Market",
    summary: "A disciplined framework for detecting demand, modelling local fit, comparing competition, and prioritising market entry.",
    date: "2026-04-23", displayDate: "23 Apr 2026", readTime: "8 min", author: "FIMMICK",
    sections: [
      { heading: "Detect demand signals", body: "Agents can monitor multilingual search, public conversations, category reviews, and unmet needs to identify where demand is forming and what customers value." },
      { heading: "Build local use cases", body: "A market score becomes more useful when it is connected to specific customer situations, expected features, pricing sensitivity, channels, and regulatory realities." },
      { heading: "Compare commercial potential", body: "Rank markets using product–need fit, competitive intensity, market growth, operating costs, channel economics, and forecast confidence. Human leaders retain the final market-entry decision." },
    ],
  },
];

export const markets = ["Hong Kong", "Taiwan", "Japan", "Singapore", "Malaysia", "Thailand", "Philippines", "China"];

export type Industry = {
  slug: string;
  name: string;
  seoTitle: string;
  description: string;
  challenge: string;
  workflows: { title: string; copy: string }[];
  outcomes: string[];
  agents: string[];
  keywords: string[];
};

export const industries: Industry[] = [
  { slug:"retail-ecommerce", name:"Retail & E-commerce", seoTitle:"AI Agents for Retail & E-commerce in Asia", description:"Deploy an AI workforce for retail marketing, e-commerce growth, product content, customer lifecycle and commercial reporting across Asian markets.", challenge:"Retail teams must coordinate thousands of products, fast-moving customer signals, campaigns, channels and local markets—without multiplying manual work.", workflows:[{title:"Commerce intelligence",copy:"Monitor category demand, competitor pricing, product performance and customer behaviour."},{title:"Product content operations",copy:"Prepare multilingual product copy, campaign variants and marketplace-ready content with approval."},{title:"Lifecycle growth",copy:"Turn CRM and transaction signals into segmented journeys, retention actions and next-best offers."},{title:"Commercial reporting",copy:"Connect media, commerce and CRM performance into decision-ready daily briefs."}], outcomes:["Faster campaign and catalogue cycles","More relevant customer journeys","Earlier visibility into demand shifts","One view of acquisition, conversion and retention"], agents:["Market Intelligence","Content","Commerce Growth","CRM & Lifecycle","Reporting"], keywords:["retail AI agents","ecommerce automation Asia","AI retail marketing Hong Kong"] },
  { slug:"financial-services", name:"Financial Services", seoTitle:"AI Workforce for Financial Services & Insurance", description:"Governed AI agents for financial-services marketing, lead operations, customer communication, reporting and knowledge workflows in Asia.", challenge:"Financial institutions need faster operations and more personalised engagement while protecting customer data, approval standards and regulatory accountability.", workflows:[{title:"Market and customer intelligence",copy:"Detect customer needs, competitor movement and product interest across approved sources."},{title:"Compliant content preparation",copy:"Draft channel and educational content against product facts, brand rules and review gates."},{title:"Lead and advisor support",copy:"Prioritise enquiries, enrich CRM context and prepare approved follow-up for human advisors."},{title:"Management reporting",copy:"Reconcile campaign and pipeline signals into concise performance and exception reports."}], outcomes:["Clearer human approval and audit trails","Faster lead response and routing","Consistent product communication","Less manual management reporting"], agents:["Intelligence","Knowledge","Content Compliance","Lead Routing","Reporting"], keywords:["financial services AI agents","insurance marketing automation","AI transformation finance Hong Kong"] },
  { slug:"hospitality-travel", name:"Hospitality & Travel", seoTitle:"AI Agents for Hotels, Hospitality & Travel", description:"Build an AI workforce for hotel demand intelligence, guest acquisition, multilingual content, direct booking, service and reputation management.", challenge:"Hospitality teams manage seasonal demand, OTAs, direct bookings, reviews, guest messages and local experiences across languages and properties.", workflows:[{title:"Demand and destination intelligence",copy:"Track travel intent, competitor offers, events and source-market signals."},{title:"Direct booking growth",copy:"Coordinate SEO, AEO, content, media and CRM around high-intent travel journeys."},{title:"Guest communications",copy:"Answer routine questions, prepare personalised pre-arrival messages and route exceptions."},{title:"Reputation intelligence",copy:"Classify reviews and social feedback, surface recurring issues and brief property teams."}], outcomes:["Higher-quality direct demand","Faster multilingual response","Stronger search and AI-answer visibility","Actionable guest-experience insight"], agents:["Demand Intelligence","SEO & AEO","Guest Journey","Reputation","Revenue Reporting"], keywords:["hotel AI agents","hospitality marketing automation","hotel AEO SEO Asia"] },
  { slug:"beauty-luxury", name:"Beauty & Luxury", seoTitle:"AI Marketing Agents for Beauty & Luxury Brands", description:"Scale beauty and luxury growth with AI agents for trend intelligence, product launches, KOL/KOC operations, social content, CRM and loyalty.", challenge:"Beauty and luxury brands must move at culture speed while protecting distinct brand expression, premium customer experience and local market relevance.", workflows:[{title:"Trend and category intelligence",copy:"Detect emerging ingredients, routines, aesthetics, creators and competitor launches."},{title:"Launch orchestration",copy:"Connect audience insight, content variants, media, advocacy and performance learning."},{title:"Creator operations",copy:"Support KOL and KOC discovery, briefing, review, tracking and programme reporting."},{title:"CRM and loyalty",copy:"Prepare segmented multilingual journeys from consented customer and purchase signals."}], outcomes:["Faster insight-to-launch cycles","More controlled content variation","Better-fit creator programmes","More relevant loyalty engagement"], agents:["Trend Intelligence","Launch Strategy","Content","Creator Operations","CRM & Loyalty"], keywords:["beauty AI marketing","luxury brand AI agents","KOL automation Asia"] },
  { slug:"food-beverage", name:"Food & Beverage", seoTitle:"AI Agents for Food, Beverage & Restaurant Growth", description:"AI-powered growth operations for restaurant groups, food brands and beverage businesses across local search, social, CRM, delivery and customer feedback.", challenge:"F&B demand changes by location, daypart, platform and occasion. Teams need local speed without losing brand consistency or operational visibility.", workflows:[{title:"Local demand intelligence",copy:"Monitor neighbourhood demand, menu trends, reviews, competitors and occasion signals."},{title:"Always-on content",copy:"Prepare location-aware social, promotion and menu content with human approval."},{title:"CRM and visit frequency",copy:"Segment guests and trigger useful dining, loyalty and reactivation journeys."},{title:"Review and service insight",copy:"Turn customer feedback into alerts, issue themes and store-level action briefs."}], outcomes:["More discoverable locations","Faster campaign localisation","Improved repeat-visit journeys","Earlier detection of service issues"], agents:["Local Intelligence","Content","CRM & Loyalty","Review Insight","Performance Reporting"], keywords:["restaurant AI marketing","F&B automation Hong Kong","AI agents food beverage"] },
  { slug:"property-real-estate", name:"Property & Real Estate", seoTitle:"AI Agents for Property & Real Estate Marketing", description:"Transform property marketing and sales operations with AI agents for market intelligence, listing content, lead qualification, CRM follow-up and portfolio reporting.", challenge:"Property teams must connect market movement, listings, campaigns, enquiries, agents and long consideration journeys while maintaining current, accurate information.", workflows:[{title:"Market and competitor intelligence",copy:"Track supply, pricing, launches, demand signals and competitor communication."},{title:"Listing content operations",copy:"Prepare accurate multilingual listing, campaign and neighbourhood content from approved facts."},{title:"Lead qualification and routing",copy:"Capture enquiry context, score intent and route opportunities to the right sales team."},{title:"Sales follow-up and reporting",copy:"Prepare timely responses, keep CRM context current and summarise pipeline movement."}], outcomes:["Faster listing and campaign production","Shorter enquiry response times","Cleaner CRM and lead context","Clearer portfolio and pipeline visibility"], agents:["Market Intelligence","Listing Content","Lead Qualification","Sales Follow-up","Pipeline Reporting"], keywords:["real estate AI agents","property marketing automation","AI CRM property Hong Kong"] },
  { slug:"healthcare-wellness", name:"Healthcare & Wellness", seoTitle:"Governed AI Agents for Healthcare & Wellness", description:"Human-controlled AI workflows for healthcare and wellness marketing, patient education, enquiry routing, content operations and service insight.", challenge:"Healthcare and wellness organisations need clear, helpful communication and efficient service workflows while keeping clinical judgment, privacy and sensitive decisions with qualified people.", workflows:[{title:"Patient education content",copy:"Prepare accessible, multilingual information from approved knowledge and evidence sources."},{title:"Enquiry classification",copy:"Identify intent, answer permitted routine questions and route clinical or sensitive needs."},{title:"Service journey operations",copy:"Support appointment reminders, follow-up information and experience measurement."},{title:"Reputation and demand insight",copy:"Monitor public feedback and non-clinical market signals for operating decisions."}], outcomes:["More consistent approved information","Faster non-clinical enquiry routing","Better service-journey visibility","Human control over sensitive decisions"], agents:["Knowledge","Content Review","Enquiry Routing","Journey","Experience Insight"], keywords:["healthcare AI agents","wellness marketing automation","patient enquiry AI Hong Kong"] },
  { slug:"b2b-professional-services", name:"B2B & Professional Services", seoTitle:"AI Workforce for B2B & Professional Services", description:"AI agents for B2B market intelligence, thought leadership, account-based marketing, lead follow-up, proposal preparation and management reporting.", challenge:"B2B growth depends on specialist knowledge, long buying cycles and consistent follow-up. Valuable context is often fragmented across people, documents and systems.", workflows:[{title:"Account and market intelligence",copy:"Monitor target accounts, industry change, buying signals and competitor positioning."},{title:"Thought leadership",copy:"Turn expert knowledge into credible articles, briefings and multilingual channel content."},{title:"Lead and opportunity operations",copy:"Enrich enquiries, prepare follow-up, update CRM and surface stalled opportunities."},{title:"Proposal and reporting support",copy:"Assemble approved information and summarise pipeline, campaign and account movement."}], outcomes:["More timely account intelligence","Scalable expert-led content","More disciplined opportunity follow-up","Less time assembling proposals and reports"], agents:["Account Intelligence","Knowledge","Content","Sales Follow-up","Reporting"], keywords:["B2B AI agents","professional services automation","AI account based marketing Asia"] },
];

export const migrationRows = [
  ["/en/", "/", "Keep as locale homepage alias"],
  ["/en/platform/agents", "/en/platform/agents", "Preserve"],
  ["/en/services", "/en/services", "Preserve"],
  ["/en/services/*", "/en/services/*", "Preserve service slugs"],
  ["/en/case-studies", "/en/case-studies", "Preserve"],
  ["/en/knowledge-hub/", "/en/knowledge-hub", "Canonicalise trailing slash"],
  ["/en/knowledge-hub/*", "/en/knowledge-hub/*", "Preserve article slugs"],
  ["/en/about", "/en/about", "Preserve"],
  ["/en/contact", "/en/contact", "Preserve conversion route"],
  ["/en/privacy · /terms · /cookies", "Same paths", "Preserve legal routes"],
];
