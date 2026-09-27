export type NavigationLink = {
  title: string;
  href: string;
  description: string;
};

export type NavigationGroup = {
  label: string;
  links: NavigationLink[];
};

export type MegaNavigationItem = {
  label: string;
  href: string;
  code: string;
  headline: string;
  summary: string;
  groups: NavigationGroup[];
  feature: NavigationLink & { eyebrow: string; metric: string; metricLabel: string };
};

export const megaNavigation: MegaNavigationItem[] = [
  {
    label: "Platform",
    href: "/en/platform",
    code: "01 / AI operating system",
    headline: "Build a connected AI workforce.",
    summary: "Move from isolated tools to observable agents that share context, execute real workflows, and keep people in control.",
    groups: [
      {
        label: "Intelligence & creation",
        links: [
          { title: "Market Intelligence", href: "/en/platform/intelligence", description: "Detect material shifts across markets, competitors, search, and customers." },
          { title: "Data Analysis", href: "/en/platform/data-analysis", description: "Turn performance data into explanations and next actions." },
          { title: "Creative Studio", href: "/en/platform/creative-studio", description: "Scale multilingual creative work with brand and human review." },
          { title: "Marketing Strategy", href: "/en/platform/marketing-strategy", description: "Keep audiences, channels, budgets, and timing coordinated." },
        ],
      },
      {
        label: "Operations & control",
        links: [
          { title: "Workflow Automation", href: "/en/platform/workflow-automation", description: "Run repeatable multi-step work with visible exceptions." },
          { title: "Integrations", href: "/en/platform/integrations", description: "Connect agents to the systems where business already happens." },
          { title: "Governance", href: "/en/platform/governance", description: "Define evidence, permissions, decisions, and accountability." },
          { title: "Plans & Pricing", href: "/en/platform/pricing", description: "Choose the right operating scope for your first deployment." },
        ],
      },
    ],
    feature: {
      eyebrow: "Reusable workforce roles",
      title: "Explore the Agent Marketplace",
      href: "/en/platform/marketplace",
      description: "Start with proven roles for intelligence, content, CRM, media, sales, and customer experience.",
      metric: "4,000+",
      metricLabel: "agents deployed",
    },
  },
  {
    label: "AI Transformation",
    href: "/en/ai-transformation",
    code: "02 / From ambition to operation",
    headline: "Redesign the work—not just the technology.",
    summary: "A leadership pathway from readiness and prioritisation to agent design, governance, adoption, and measurable scale.",
    groups: [
      {
        label: "Set direction",
        links: [
          { title: "AI Readiness & Maturity", href: "/en/ai-transformation/ai-readiness-maturity", description: "See value opportunities, constraints, and organisational readiness clearly." },
          { title: "AI Strategy & Roadmap", href: "/en/ai-transformation/strategy-roadmap", description: "Sequence investments around business value and delivery confidence." },
        ],
      },
      {
        label: "Build & scale",
        links: [
          { title: "Workflow & Agent Design", href: "/en/ai-transformation/workflow-agent-design", description: "Give every agent a role, context, output contract, and owner." },
          { title: "Governance & Adoption", href: "/en/ai-transformation/governance-adoption", description: "Create visible control, practical policy, and team capability." },
        ],
      },
    ],
    feature: {
      eyebrow: "Executive starting point",
      title: "Request an AI Maturity Audit",
      href: "/en/contact?intent=audit",
      description: "Prioritise the first credible workflow and the operating changes needed to make it work.",
      metric: "90",
      metricLabel: "day first deployment",
    },
  },
  {
    label: "Services",
    href: "/en/services",
    code: "03 / Strategy through execution",
    headline: "Connect every part of the growth system.",
    summary: "Combine regional market expertise with agents, data, automation, creative operations, and human judgment.",
    groups: [
      {
        label: "Acquire & understand",
        links: [
          { title: "Digital Marketing", href: "/en/services/digitalmarketing", description: "Coordinate media, content, social, CRM, and performance." },
          { title: "SEO & AEO", href: "/en/services/seo-aeo", description: "Earn visibility across search and AI-generated answers." },
          { title: "Social Listening", href: "/en/services/social-listening", description: "Turn live brand and category conversation into action." },
          { title: "Business Intelligence", href: "/en/services/business-intelligence", description: "Replace reporting queues with decision-ready signals." },
        ],
      },
      {
        label: "Convert, retain & automate",
        links: [
          { title: "CRM & Sales", href: "/en/services/crm-sales", description: "Prioritise demand and create disciplined follow-up." },
          { title: "Marketing Automation", href: "/en/services/marketing-automation", description: "Run relevant, governed lifecycle journeys." },
          { title: "Content & Creative", href: "/en/services/content-creative", description: "Scale controlled content without flattening the brand." },
          { title: "Workflow Automation", href: "/en/services/workflow-automation", description: "Remove manual handoffs while preserving judgment." },
        ],
      },
    ],
    feature: {
      eyebrow: "Browse by business objective",
      title: "Explore all 15 service systems",
      href: "/en/services",
      description: "Start with Acquire, Convert, Retain, Understand, Automate, or Scale—and map the system from there.",
      metric: "6",
      metricLabel: "business pathways",
    },
  },
  {
    label: "Industries",
    href: "/en/industries",
    code: "04 / Vertical AI workforce",
    headline: "Configure AI around industry reality.",
    summary: "Start with the decisions, channels, data, risks, and customer journeys that make each sector distinct.",
    groups: [
      {
        label: "Consumer & experience",
        links: [
          { title: "Retail & E-commerce", href: "/en/industries/retail-ecommerce", description: "Commerce intelligence, product content, lifecycle, and reporting." },
          { title: "Hospitality & Travel", href: "/en/industries/hospitality-travel", description: "Demand, direct booking, guest service, and reputation." },
          { title: "Beauty & Luxury", href: "/en/industries/beauty-luxury", description: "Trends, launches, creator operations, CRM, and loyalty." },
          { title: "Food & Beverage", href: "/en/industries/food-beverage", description: "Local demand, content, visit frequency, and service insight." },
        ],
      },
      {
        label: "Complex & considered",
        links: [
          { title: "Financial Services", href: "/en/industries/financial-services", description: "Governed marketing, lead operations, knowledge, and reporting." },
          { title: "Property & Real Estate", href: "/en/industries/property-real-estate", description: "Market signals, listings, enquiries, and sales follow-up." },
          { title: "Healthcare & Wellness", href: "/en/industries/healthcare-wellness", description: "Approved knowledge, routing, journeys, and human control." },
          { title: "B2B & Professional Services", href: "/en/industries/b2b-professional-services", description: "Account insight, thought leadership, pipeline, and proposals." },
        ],
      },
    ],
    feature: {
      eyebrow: "Find the first vertical use case",
      title: "Get an Industry AI Benchmark",
      href: "/en/contact?intent=industry-benchmark",
      description: "Compare demand, visibility, workflow, and customer signals against the opportunities in your sector.",
      metric: "8",
      metricLabel: "Asian markets",
    },
  },
  {
    label: "Case Studies",
    href: "/en/case-studies",
    code: "05 / Operational proof",
    headline: "See what changed in the operating model.",
    summary: "Explore the challenge, connected workflow, human controls, and measurable outcomes behind each transformation story.",
    groups: [
      {
        label: "Transformation stories",
        links: [
          { title: "FIMMICK AI-native model", href: "/en/case-studies/fimmick-ai-native-operating-model", description: "How recurring operations became a managed agent system." },
          { title: "Regional beauty loyalty", href: "/en/case-studies/regional-beauty-loyalty-orchestration", description: "Personalised lifecycle operations across three Asian markets." },
          { title: "Asia operating footprint", href: "/en/case-studies/asia-operating-footprint", description: "A reusable operating layer across diverse local markets." },
        ],
      },
      {
        label: "Explore the system",
        links: [
          { title: "AI Transformation", href: "/en/ai-transformation", description: "See the six workstreams behind a credible programme." },
          { title: "Platform", href: "/en/platform", description: "Understand the technology and governance layer." },
          { title: "Services", href: "/en/services", description: "Connect specialist delivery around the workflow." },
        ],
      },
    ],
    feature: {
      eyebrow: "Inside FIMMICK",
      title: "Transforming ourselves first",
      href: "/en/case-studies/fimmick-ai-native-operating-model",
      description: "The operating experience that now informs how FIMMICK designs transformation with clients.",
      metric: "3×",
      metricLabel: "operating output",
    },
  },
  {
    label: "Insights",
    href: "/en/knowledge-hub",
    code: "06 / Knowledge hub",
    headline: "Practical intelligence for what comes next.",
    summary: "Frameworks and operating guidance for leaders connecting AI, marketing, data, automation, and customer systems.",
    groups: [
      {
        label: "Leadership reads",
        links: [
          { title: "State of AI Marketing in Asia 2026", href: "/en/knowledge-hub/state-of-ai-marketing-asia-2026", description: "The priorities separating AI activity from operating capability." },
          { title: "Build an AI Workforce", href: "/en/knowledge-hub/how-to-build-ai-workforce-marketing-team", description: "A path from workflow mapping to governed agent roles." },
          { title: "AI Agency Evaluation Guide", href: "/en/knowledge-hub/ai-marketing-agency-hong-kong-guide", description: "Questions for evaluating a credible transformation partner." },
        ],
      },
      {
        label: "Growth playbooks",
        links: [
          { title: "Beyond Marketing Automation", href: "/en/knowledge-hub/beyond-traditional-marketing-automation", description: "Add reasoning and context to triggers and journeys." },
          { title: "AI Product Launch Formula", href: "/en/knowledge-hub/the-winning-product-launch-ai-formula-to-maximise-roi", description: "Connect content, acquisition, advocacy, and learning." },
          { title: "Find the Next Blue Ocean", href: "/en/knowledge-hub/ai-agent-pinpointing-the-next-blue-ocean-market", description: "Use agent-powered signals to prioritise market entry." },
        ],
      },
    ],
    feature: {
      eyebrow: "Featured intelligence",
      title: "State of AI Marketing in Asia 2026",
      href: "/en/knowledge-hub/state-of-ai-marketing-asia-2026",
      description: "A leadership briefing on infrastructure, learning loops, discovery, governance, and the human operating model.",
      metric: "10",
      metricLabel: "minute read",
    },
  },
  {
    label: "About",
    href: "/en/about",
    code: "07 / Hong Kong to Asia",
    headline: "Digital experience, rebuilt for AI.",
    summary: "Understand the experience, method, operating culture, and regional network behind FIMMICK’s transformation work.",
    groups: [
      {
        label: "Understand FIMMICK",
        links: [
          { title: "Our Story", href: "/en/about/our-story", description: "How digital execution evolved into AI operating expertise." },
          { title: "How We Work", href: "/en/about/how-we-work", description: "Six disciplines connected through one accountable system." },
          { title: "Asia Delivery", href: "/en/about/asia-delivery", description: "Regional infrastructure with local market judgment." },
          { title: "Why FIMMICK", href: "/en/about/why-fimmick", description: "The strengths behind a platform-plus-transformation partner." },
        ],
      },
      {
        label: "Connect with the ecosystem",
        links: [
          { title: "FIMMICK Ecosystem", href: "/en/fimmick-ecosystem", description: "Specialised platforms and units sharing operating intelligence." },
          { title: "AI Workshop", href: "/en/ai-workshop", description: "Build leadership alignment around a real workflow." },
          { title: "Events", href: "/en/events", description: "Join briefings and working sessions across AI and growth." },
        ],
      },
    ],
    feature: {
      eyebrow: "Asia-scale experience",
      title: "Meet the transformation partner behind the platform",
      href: "/en/about/why-fimmick",
      description: "Strategy, intelligence, data, automation, creativity, and governance—connected to daily operations.",
      metric: "500+",
      metricLabel: "brands served",
    },
  },
];
