export type DeepDivePage = {
  slug: string;
  parent: "AI Transformation" | "About";
  parentHref: string;
  code: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  seoTitle: string;
  description: string;
  question: string;
  answer: string;
  lenses: { title: string; copy: string }[];
  stages: { title: string; copy: string; details: string[] }[];
  deliverableLabel: string;
  deliverables: { title: string; copy: string }[];
  outcomes: string[];
  related: { eyebrow: string; title: string; copy: string; href: string }[];
};

export const transformationDeepDives: DeepDivePage[] = [
  {
    slug: "ai-readiness-maturity",
    parent: "AI Transformation",
    parentHref: "/en/ai-transformation",
    code: "T/02",
    eyebrow: "Readiness / executive clarity",
    title: "Find the gaps before",
    emphasis: "they find the programme.",
    seoTitle: "AI Readiness & Maturity Assessment",
    description: "Assess business value, workflow readiness, data, systems, governance, and team capability before scaling AI investment.",
    question: "Where is the organisation truly ready for AI—and where would scale introduce friction?",
    answer: "FIMMICK creates a shared evidence base across leadership, operations, technology, data, risk, and people. The result is not a generic maturity score. It is a prioritised view of what can move now, what needs preparation, and what should wait.",
    lenses: [
      { title: "Business value", copy: "Locate recurring work where better speed, quality, capacity, or decision-making creates measurable value." },
      { title: "Workflow readiness", copy: "Test whether inputs, outputs, owners, exceptions, and standards are clear enough to redesign safely." },
      { title: "Data & systems", copy: "Map trusted context, access constraints, integration effort, and the quality gaps an agent would inherit." },
      { title: "People & governance", copy: "Identify decision rights, review capability, adoption conditions, and risks that need explicit ownership." },
    ],
    stages: [
      { title: "Discover", copy: "Align leadership objectives and inspect priority workflows, systems, and operating constraints.", details: ["Leadership interviews", "Workflow inventory", "Data and system map"] },
      { title: "Score", copy: "Evaluate opportunities against value, feasibility, risk, adoption, and evidence quality.", details: ["Maturity heatmap", "Opportunity scoring", "Constraint register"] },
      { title: "Prioritise", copy: "Choose a first workflow that can prove value without hiding structural dependencies.", details: ["Use-case portfolio", "First-deployment thesis", "Executive trade-offs"] },
      { title: "Mobilise", copy: "Turn the decision into owners, measures, guardrails, and a practical first 90-day scope.", details: ["Mobilisation plan", "Decision rights", "Success baseline"] },
    ],
    deliverableLabel: "Decision package",
    deliverables: [
      { title: "AI maturity heatmap", copy: "A clear view across strategy, work, data, technology, governance, and people." },
      { title: "Opportunity portfolio", copy: "Ranked workflows with value, readiness, risk, and dependency evidence." },
      { title: "Constraint register", copy: "The data, integration, policy, ownership, and capability gaps that must be solved." },
      { title: "Executive action brief", copy: "A decision-ready recommendation for the first deployment and the investment sequence around it." },
    ],
    outcomes: ["One shared readiness language", "Fewer low-value pilots", "Visible scale dependencies", "A credible first deployment"],
    related: [
      { eyebrow: "Next workstream", title: "AI Strategy & Roadmap", copy: "Sequence the portfolio into a coherent transformation programme.", href: "/en/ai-transformation/strategy-roadmap" },
      { eyebrow: "Platform control", title: "AI Governance", copy: "See how boundaries, evidence, approval, and accountability work in practice.", href: "/en/platform/governance" },
      { eyebrow: "Team capability", title: "AI Training & Enablement", copy: "Prepare leaders and operators to direct, review, and improve AI systems.", href: "/en/services/ai-training" },
    ],
  },
  {
    slug: "strategy-roadmap",
    parent: "AI Transformation",
    parentHref: "/en/ai-transformation",
    code: "T/03",
    eyebrow: "Strategy / investment sequence",
    title: "Turn AI ambition into",
    emphasis: "an operating roadmap.",
    seoTitle: "AI Strategy & Transformation Roadmap",
    description: "Build an AI strategy that connects business priorities, workflow transformation, platform decisions, governance, capability, and measurable value.",
    question: "How should the organisation sequence AI investment so each deployment creates reusable capability?",
    answer: "FIMMICK turns a portfolio of ideas into an operating thesis: which business outcomes matter, which workflows should change first, which platform and data capabilities are reusable, and how leadership will measure value and control risk across the sequence.",
    lenses: [
      { title: "Value thesis", copy: "Define how AI changes revenue, cost, quality, speed, capacity, learning, or customer experience." },
      { title: "Portfolio logic", copy: "Group related use cases so data, integrations, agent roles, and governance compound across deployments." },
      { title: "Operating model", copy: "Clarify what leaders direct, what teams own, what agents execute, and what systems record." },
      { title: "Investment path", copy: "Connect 90-day proof, 12-month capability building, dependencies, measures, and decision gates." },
    ],
    stages: [
      { title: "Frame", copy: "Translate leadership ambition into a small set of measurable transformation outcomes.", details: ["Outcome hierarchy", "Strategic principles", "Scope boundaries"] },
      { title: "Architect", copy: "Connect priority workflows to shared data, platform, governance, and team capabilities.", details: ["Capability architecture", "Agent portfolio", "Reusable foundations"] },
      { title: "Sequence", copy: "Create a roadmap that balances quick evidence with the work required for durable scale.", details: ["90-day plan", "12-month roadmap", "Decision gates"] },
      { title: "Govern", copy: "Set investment ownership, value tracking, risk review, and a cadence for roadmap change.", details: ["Steering model", "Value dashboard", "Review cadence"] },
    ],
    deliverableLabel: "Transformation blueprint",
    deliverables: [
      { title: "AI value thesis", copy: "A concise link between strategic priorities, workflow change, and measurable outcomes." },
      { title: "Target operating model", copy: "Roles, decision rights, platform responsibilities, and the human-agent-system relationship." },
      { title: "Capability architecture", copy: "The reusable data, integration, governance, and agent layers behind the portfolio." },
      { title: "Sequenced roadmap", copy: "A practical 90-day launch and 12-month scale plan with owners and decision gates." },
    ],
    outcomes: ["Clear investment logic", "Reusable capability by design", "Leadership alignment", "Measurable transformation progress"],
    related: [
      { eyebrow: "Start with evidence", title: "AI Readiness & Maturity", copy: "Build the fact base behind the roadmap.", href: "/en/ai-transformation/ai-readiness-maturity" },
      { eyebrow: "Design the work", title: "Workflow & Agent Design", copy: "Translate the roadmap into operating roles and flows.", href: "/en/ai-transformation/workflow-agent-design" },
      { eyebrow: "Technology layer", title: "FIMMICK AI Agent Platform", copy: "See the connected system behind reusable AI workforces.", href: "/en/platform" },
    ],
  },
  {
    slug: "workflow-agent-design",
    parent: "AI Transformation",
    parentHref: "/en/ai-transformation",
    code: "T/04",
    eyebrow: "Workflow / multi-agent design",
    title: "Design the work before",
    emphasis: "deploying the agents.",
    seoTitle: "AI Workflow & Multi-Agent System Design",
    description: "Redesign business workflows as coordinated agent roles with trusted context, human decisions, exception handling, and measurable outputs.",
    question: "What should each agent own—and how should multiple agents, people, and systems work as one accountable flow?",
    answer: "FIMMICK starts from the work itself. We decompose triggers, inputs, decisions, handoffs, standards, and exceptions; then assign focused agent roles that can coordinate without obscuring who owns the final business outcome.",
    lenses: [
      { title: "Role contract", copy: "Give every agent a mission, permitted tasks, approved sources, output standard, and named owner." },
      { title: "Shared context", copy: "Define the minimum trusted data and knowledge each role needs—without expanding access by default." },
      { title: "Human control", copy: "Place people at material judgment, sensitive data, publication, spend, exceptions, and recovery." },
      { title: "System evidence", copy: "Make status, sources, approvals, actions, exceptions, corrections, and outcomes observable." },
    ],
    stages: [
      { title: "Map", copy: "Document the current flow, hidden handoffs, decision points, service standards, and failure modes.", details: ["Trigger map", "Decision inventory", "Exception analysis"] },
      { title: "Decompose", copy: "Turn the work into focused human, agent, and system responsibilities.", details: ["Role contracts", "Context boundaries", "Coordination rules"] },
      { title: "Prototype", copy: "Test the flow with realistic inputs, review gates, edge cases, and measurable quality criteria.", details: ["Scenario tests", "Approval design", "Quality rubric"] },
      { title: "Operationalise", copy: "Connect systems, instrument the workflow, train owners, and establish improvement cycles.", details: ["Live integration", "Operating playbook", "Performance loop"] },
    ],
    deliverableLabel: "Operating design",
    deliverables: [
      { title: "Workflow blueprint", copy: "The end-to-end state model across triggers, tasks, decisions, handoffs, and exceptions." },
      { title: "Agent role contracts", copy: "Clear missions, inputs, actions, outputs, permissions, thresholds, and owners." },
      { title: "Human decision map", copy: "Where people direct, review, approve, intervene, recover, and change the system." },
      { title: "Measurement system", copy: "Quality, cycle time, intervention, exception, adoption, and business outcome measures." },
    ],
    outcomes: ["Coordinated multi-agent work", "Less manual handoff", "Visible exceptions", "Clear outcome ownership"],
    related: [
      { eyebrow: "See the roles", title: "AI Agent Platform", copy: "Inspect agent missions, context, tasks, outputs, and approval points.", href: "/en/platform/agents" },
      { eyebrow: "Run the flow", title: "Workflow Automation", copy: "Explore observable execution across connected systems.", href: "/en/platform/workflow-automation" },
      { eyebrow: "Connect the stack", title: "Enterprise Integrations", copy: "Route trusted context and actions through the real operating environment.", href: "/en/platform/integrations" },
    ],
  },
  {
    slug: "governance-adoption",
    parent: "AI Transformation",
    parentHref: "/en/ai-transformation",
    code: "T/05",
    eyebrow: "Governance / team adoption",
    title: "Scale confidence with",
    emphasis: "visible control.",
    seoTitle: "AI Governance, Change & Adoption",
    description: "Design practical AI governance, decision rights, operating policy, evidence, training, and adoption into everyday workflows.",
    question: "How can the organisation give agents useful autonomy while keeping judgment, risk, and accountability visible?",
    answer: "FIMMICK embeds governance inside the workflow instead of treating it as a document beside the workflow. Teams can see what an agent may access, prepare, execute, and escalate—and leaders can see the evidence needed to improve policy and scale proven work.",
    lenses: [
      { title: "Purpose & policy", copy: "Connect every rule to a defined business purpose, risk level, use boundary, and accountable owner." },
      { title: "Access & evidence", copy: "Control approved sources and actions while preserving traceable context, review, and change history." },
      { title: "Decision rights", copy: "Define where agents proceed, where people approve, and how exceptions and incidents are handled." },
      { title: "Capability & adoption", copy: "Prepare leaders, operators, reviewers, risk owners, and specialists for their new responsibilities." },
    ],
    stages: [
      { title: "Define", copy: "Set use boundaries, ownership, prohibited actions, review thresholds, and outcome measures.", details: ["Policy architecture", "Risk tiers", "Responsibility model"] },
      { title: "Instrument", copy: "Build evidence, approvals, access, versioning, exceptions, and incident paths into the flow.", details: ["Audit design", "Approval controls", "Incident workflow"] },
      { title: "Enable", copy: "Train each role through realistic operating scenarios rather than abstract tool demonstrations.", details: ["Role-based learning", "Scenario practice", "Reviewer calibration"] },
      { title: "Improve", copy: "Use outcomes, corrections, exceptions, and incidents to update the operating system.", details: ["Review cadence", "Policy updates", "Scale decisions"] },
    ],
    deliverableLabel: "Control system",
    deliverables: [
      { title: "Governance framework", copy: "Purpose, owners, risk tiers, data rules, action boundaries, and decision rights." },
      { title: "Operating controls", copy: "Approval gates, evidence requirements, exception routes, and incident responsibilities." },
      { title: "Role-based enablement", copy: "Practical learning for leaders, operators, reviewers, specialists, and risk owners." },
      { title: "Review dashboard", copy: "A shared view of value, quality, intervention, exceptions, adoption, and change." },
    ],
    outcomes: ["Proportionate control", "Faster responsible adoption", "Traceable decisions", "Confidence to scale"],
    related: [
      { eyebrow: "Platform controls", title: "Human-led AI Governance", copy: "See how boundaries and evidence appear in the platform.", href: "/en/platform/governance" },
      { eyebrow: "Build capability", title: "AI Training & Enablement", copy: "Prepare teams to direct and improve AI work.", href: "/en/services/ai-training" },
      { eyebrow: "Plan the sequence", title: "AI Strategy & Roadmap", copy: "Connect governance and adoption to the investment path.", href: "/en/ai-transformation/strategy-roadmap" },
    ],
  },
];

export const aboutDeepDives: DeepDivePage[] = [
  {
    slug: "our-story",
    parent: "About",
    parentHref: "/en/about",
    code: "A/02",
    eyebrow: "Our evolution / 2008 → now",
    title: "Digital experience became",
    emphasis: "AI operating leverage.",
    seoTitle: "Our Story — From Digital Agency to AI Transformation Partner",
    description: "See how FIMMICK's experience in Asian digital operations, data, automation, and customer journeys evolved into an AI workforce platform and transformation practice.",
    question: "Why does FIMMICK approach AI as an operating system rather than another marketing tool?",
    answer: "Because the work came first. Years of coordinating campaigns, content, CRM, data, commerce, communities, and local markets exposed where value is lost between systems and teams. That operating experience now shapes how FIMMICK assigns work to agents and keeps people in control.",
    lenses: [
      { title: "Digital foundations", copy: "Experience across the channels, journeys, content, data, and operating realities AI must connect." },
      { title: "Regional learning", copy: "Local-market execution across Asia built sensitivity to language, culture, platforms, and customer behaviour." },
      { title: "Systems evolution", copy: "Campaign delivery expanded into CRM, analytics, automation, data integration, and reusable platform thinking." },
      { title: "AI-native operation", copy: "FIMMICK redesigned recurring work inside its own model before bringing the approach to client transformation." },
    ],
    stages: [
      { title: "Execute", copy: "Build depth in digital channels, customer behaviour, creative operations, and performance.", details: ["Campaign operations", "Content and community", "Market execution"] },
      { title: "Connect", copy: "Join CRM, analytics, automation, commerce, and cross-channel customer journeys.", details: ["Data and measurement", "Lifecycle systems", "Regional coordination"] },
      { title: "Systemise", copy: "Turn repeatable expertise into workflows, operating playbooks, and platform components.", details: ["Reusable methods", "Shared standards", "Connected intelligence"] },
      { title: "Transform", copy: "Deploy managed agents around the work while preserving judgment, ownership, and learning.", details: ["Agent roles", "Human approval", "Operating improvement"] },
    ],
    deliverableLabel: "What the journey created",
    deliverables: [
      { title: "Operating empathy", copy: "An understanding of the daily constraints between strategy, systems, channels, and people." },
      { title: "Regional context", copy: "Experience adapting shared systems to distinct Asian markets and customer expectations." },
      { title: "Reusable capability", copy: "Methods, agent roles, integrations, and governance patterns that can compound across work." },
      { title: "Transformation credibility", copy: "A partner perspective grounded in operating change—not tool recommendation alone." },
    ],
    outcomes: ["Experience connected to execution", "Asia-aware operating design", "Platform-plus-services delivery", "A practical AI transformation model"],
    related: [
      { eyebrow: "Our method", title: "How We Work", copy: "See the disciplines that turn an idea into reliable operations.", href: "/en/about/how-we-work" },
      { eyebrow: "Operating proof", title: "Our AI-native Transformation", copy: "Read how FIMMICK changed its own operating model.", href: "/en/case-studies/fimmick-ai-native-operating-model" },
      { eyebrow: "Company overview", title: "About FIMMICK", copy: "Explore the journey, ecosystem, culture, and regional footprint.", href: "/en/about" },
    ],
  },
  {
    slug: "how-we-work",
    parent: "About",
    parentHref: "/en/about",
    code: "A/03",
    eyebrow: "Method / systems thinking",
    title: "Six disciplines.",
    emphasis: "One accountable system.",
    seoTitle: "How FIMMICK Works — AI Transformation Method",
    description: "Explore FIMMICK's connected method across strategy, intelligence, data, automation, creativity, and governance.",
    question: "How does FIMMICK turn a promising AI idea into a reliable business capability?",
    answer: "By designing every layer together. Strategy defines why the work matters. Intelligence and data provide context. Automation and creativity execute within clear standards. Governance makes decision rights and evidence visible. The system is measured and improved as one whole.",
    lenses: [
      { title: "Strategy", copy: "Frame the business problem, value case, scope, priorities, ownership, and measures." },
      { title: "Intelligence", copy: "Bring market, customer, category, competitor, and performance signals into the decision." },
      { title: "Data & automation", copy: "Connect trusted context and redesign repeated work as observable execution." },
      { title: "Creativity & governance", copy: "Protect distinct expression, human judgment, evidence, approval, and accountability." },
    ],
    stages: [
      { title: "Frame the value", copy: "Start with a business outcome, not a model, prompt, or catalogue of features.", details: ["Executive objective", "Value baseline", "Scope and owner"] },
      { title: "Design the system", copy: "Map work, data, roles, decisions, integrations, standards, and exceptions together.", details: ["Workflow blueprint", "Agent contracts", "Control design"] },
      { title: "Prove the operation", copy: "Deploy a focused flow with realistic context, human review, and measurable output.", details: ["Live pilot", "Quality measures", "Adoption support"] },
      { title: "Improve and scale", copy: "Use performance and correction evidence to expand reusable capability deliberately.", details: ["Learning cadence", "Reusable components", "Scale roadmap"] },
    ],
    deliverableLabel: "Delivery principles",
    deliverables: [
      { title: "Business before technology", copy: "The workflow and outcome determine the architecture—not the other way around." },
      { title: "Connected by design", copy: "Strategy, data, systems, content, channels, and people are treated as one operating environment." },
      { title: "Human-led control", copy: "People direct purpose, judgment, approval, recovery, and change." },
      { title: "Evidence over theatre", copy: "Value, quality, exceptions, intervention, and adoption stay measurable throughout delivery." },
    ],
    outcomes: ["Clearer business ownership", "Faster path to operating proof", "Less fragmented delivery", "Capability that improves over time"],
    related: [
      { eyebrow: "Transformation", title: "AI Strategy & Roadmap", copy: "See how the method shapes an investment sequence.", href: "/en/ai-transformation/strategy-roadmap" },
      { eyebrow: "Technology", title: "AI Agent Platform", copy: "Explore the connected operating layer behind the method.", href: "/en/platform" },
      { eyebrow: "Proof", title: "Case Studies", copy: "See challenges, workflows, human controls, and measured outcomes.", href: "/en/case-studies" },
    ],
  },
  {
    slug: "asia-delivery",
    parent: "About",
    parentHref: "/en/about",
    code: "A/04",
    eyebrow: "Hong Kong-rooted / Asia-scale",
    title: "One regional system.",
    emphasis: "Local market judgment.",
    seoTitle: "FIMMICK Asia Delivery Network",
    description: "Learn how FIMMICK combines regional AI and marketing infrastructure with local language, platform, culture, and customer intelligence across eight Asian markets.",
    question: "How can a company scale one operating model across Asia without flattening the differences that make each market work?",
    answer: "FIMMICK separates what should be shared from what must stay local. Platform architecture, governance, measurement, and reusable workflows create regional leverage; language, channels, cultural signals, market behaviour, and human judgment shape local execution.",
    lenses: [
      { title: "Shared infrastructure", copy: "Reuse agent roles, integrations, standards, evidence, and measurement across the region." },
      { title: "Local intelligence", copy: "Ground decisions in market demand, category movement, customer language, culture, and platform behaviour." },
      { title: "Multilingual operations", copy: "Design creation, review, service, search, and customer journeys for real language contexts." },
      { title: "Regional governance", copy: "Keep ownership, market exceptions, approval, quality, and performance visible across teams." },
    ],
    stages: [
      { title: "Establish the core", copy: "Define the regional objective, reusable workflow, shared standards, and common measures.", details: ["Regional blueprint", "Shared role contracts", "Core measurement"] },
      { title: "Localise the context", copy: "Map market-specific signals, platforms, language, customer behaviour, and operating constraints.", details: ["Market intelligence", "Channel reality", "Local review rules"] },
      { title: "Connect the network", copy: "Coordinate shared agents, local teams, data sources, approvals, and exception paths.", details: ["Regional orchestration", "Local ownership", "Escalation model"] },
      { title: "Learn across markets", copy: "Compare evidence without assuming that one market's answer should become every market's answer.", details: ["Market comparison", "Reusable learning", "Local exceptions"] },
    ],
    deliverableLabel: "Regional operating model",
    deliverables: [
      { title: "Core-versus-local blueprint", copy: "A clear view of shared infrastructure and market-specific execution." },
      { title: "Market context packs", copy: "Approved language, platform, audience, signal, and operating inputs for each market." },
      { title: "Regional governance map", copy: "Ownership, approvals, exceptions, and evidence across central and local teams." },
      { title: "Cross-market learning loop", copy: "A way to reuse proven patterns while preserving local judgment." },
    ],
    outcomes: ["Regional leverage", "Local relevance", "Consistent visibility and control", "Faster cross-market learning"],
    related: [
      { eyebrow: "Vertical context", title: "Industry Solutions", copy: "See how market context combines with sector-specific work.", href: "/en/industries" },
      { eyebrow: "Regional proof", title: "Asia Operating Footprint", copy: "Explore the reusable layer behind diverse market execution.", href: "/en/case-studies/asia-operating-footprint" },
      { eyebrow: "Live signals", title: "Market Intelligence", copy: "Build an always-on decision layer across Asian markets.", href: "/en/platform/intelligence" },
    ],
  },
  {
    slug: "why-fimmick",
    parent: "About",
    parentHref: "/en/about",
    code: "A/05",
    eyebrow: "Why FIMMICK / operating advantage",
    title: "Built to operate,",
    emphasis: "not just recommend.",
    seoTitle: "Why FIMMICK for AI Business Transformation",
    description: "Why companies choose FIMMICK to connect AI strategy, platform, data, workflow automation, creativity, governance, and Asian market execution.",
    question: "What should an enterprise expect from an AI transformation partner beyond advice and software access?",
    answer: "A partner should understand the business decision, redesign the work, connect the real systems, operate the first deployment, make control visible, and transfer capability to the team. FIMMICK combines those responsibilities in one platform-plus-transformation model.",
    lenses: [
      { title: "Operating DNA", copy: "Deep digital and customer-journey experience keeps transformation grounded in real work." },
      { title: "Managed platform", copy: "Reusable agents, integrations, intelligence, and governance turn delivery into lasting infrastructure." },
      { title: "Asia intelligence", copy: "Hong Kong roots and regional operations bring language, platform, culture, and market context into the system." },
      { title: "Human accountability", copy: "Decision rights, evidence, approval, exception handling, and outcome ownership remain explicit." },
    ],
    stages: [
      { title: "Diagnose", copy: "Find the operating constraint and identify where AI can create credible value.", details: ["Business benchmark", "Workflow evidence", "Readiness view"] },
      { title: "Design", copy: "Connect strategy, roles, data, systems, governance, and measures around the work.", details: ["Operating blueprint", "Agent design", "Control model"] },
      { title: "Operate", copy: "Deploy and manage the first workflow with human owners, live evidence, and clear standards.", details: ["Managed launch", "Review workflow", "Performance view"] },
      { title: "Transfer & scale", copy: "Build team capability and expand reusable infrastructure based on proven outcomes.", details: ["Enablement", "Improvement loop", "Scale roadmap"] },
    ],
    deliverableLabel: "The FIMMICK difference",
    deliverables: [
      { title: "One accountable partner", copy: "Transformation strategy, platform, integration, specialist services, and managed operation stay connected." },
      { title: "A workforce, not a feature", copy: "Agents are designed as roles inside a measurable workflow—not isolated chat experiences." },
      { title: "Proof before scale", copy: "The first deployment is selected and measured to create leadership confidence and reusable capability." },
      { title: "Asia by design", copy: "Regional complexity is part of the architecture, content, intelligence, and operating model from day one." },
    ],
    outcomes: ["Strategy connected to execution", "Faster operating proof", "Visible control", "A partner for regional scale"],
    related: [
      { eyebrow: "See the platform", title: "Build Your AI Workforce", copy: "Explore the operating system, roles, integrations, and governance.", href: "/en/platform" },
      { eyebrow: "See the method", title: "AI Transformation", copy: "Understand the path from readiness to measurable scale.", href: "/en/ai-transformation" },
      { eyebrow: "See the proof", title: "Case Studies", copy: "Inspect the workflow and outcome behind each operating story.", href: "/en/case-studies" },
    ],
  },
];
