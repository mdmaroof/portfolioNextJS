// This is the single source of truth for both portfolio chat interfaces.
// Add or edit answers here; each answer can be found using the keywords below.

/**
 * @typedef {Object} ChatbotAnswer
 * @property {string} badge
 * @property {string} text
 * @property {string[]} chips
 * @property {string[]} keywords
 * @property {{ label: string, url: string }=} link
 * @property {number=} priority
 */

/** @type {Record<string, ChatbotAnswer>} */
export const chatbotAnswers = {
  noMatch: {
    badge: "PORTFOLIO-ONLY ASSISTANT",
    text: `I only have information about Mohd Maroof's professional work and portfolio.
• Ask about his experience, projects, React / Next.js / React Native skills, maps, real-time systems, or availability.
• Try: “What projects has Maroof built?” or “Tell me about his React Native work.”`,
    chips: ["Experience", "Projects", "Skills", "Availability"],
    keywords: [],
  },
  about: {
    badge: "MAROOF AT A GLANCE",
    text: `Mohd Maroof is a Senior Frontend Developer based in India with 6+ years of production experience across web and mobile.
• Builds scalable React, Next.js, and React Native products from early MVP through production.
• Strongest areas: real-time product experiences, map-based workflows, reusable UI architecture, and performance.
• Has worked across sales operations, fleet logistics, security monitoring, education technology, and geospatial SaaS.`,
    chips: ["6+ Years", "React", "Next.js", "React Native", "India"],
    keywords: ["about", "profile", "background", "introduce", "who is", "summary"],
  },
  stack: {
    badge: "CORE TECHNICAL STACK",
    text: `Maroof specializes in modern frontend engineering across web and mobile:
• Core Frameworks: React, Next.js (SSR / SSG / App Router), React Native.
• Language & Typing: TypeScript (strict mode), JavaScript ES2024.
• State & Telemetry: Zustand, Redux Toolkit, WebSockets, PubNub RTC, Mapbox GL.
• Performance: 60 FPS frame budgets, Lighthouse 98+ scores, sub-100ms cold starts.`,
    chips: ["React", "Next.js", "TypeScript", "React Native", "Zustand", "WebSockets"],
    keywords: ["stack", "skill", "technology", "framework", "typescript", "react native", "next.js", "react"],
  },
  ethos: {
    badge: "ETHOS ASCEND (ACTIVE CONTRACT)",
    text: `At Ethos, Maroof is building Ascend, a React Native app for sales operations.
• Developed a custom QR code scanner to streamline product and client workflows.
• Designed end-to-end UX flows for better field usability and faster execution.
• Current role: Senior Frontend Developer (Contract), February 2026–present.`,
    chips: ["React Native", "QR Scanner", "Sales Operations", "Active Contract"],
    link: { label: "Ethos Watches Official", url: "https://www.ethoswatches.com/" },
    keywords: ["ethos", "qr", "ascend", "scanner", "sales operation"],
  },
  vahn: {
    badge: "VAHN FLEET (0 TO 1 MVP)",
    text: `At VAHN, Maroof delivered the first production release of the Fleet App MVP.
• Improved maintainability and performance using TypeScript and Zustand.
• Integrated Mixpanel analytics to track user behaviour and inform product decisions.
• Served as Senior Frontend Developer from December 2024 to January 2026.`,
    chips: ["TypeScript", "Zustand", "Mixpanel", "Fleet App"],
    link: { label: "VAHN Official Site", url: "https://vahn.in/" },
    keywords: ["vahn", "fleet", "logistics", "zustand", "mixpanel"],
  },
  trackaday: {
    badge: "TRACKADAY (GEOSPATIAL SAAS)",
    text: `Trackaday is a geospatial route and activity tracker built with modern map tooling.
• Uses Mapbox GL for high-performance vector map rendering.
• Uses Turf.js for spatial calculations, polygon buffers, and route geometry.
• Includes route playback, telemetry, geofencing, and spatial analysis.`,
    chips: ["Mapbox GL", "Turf.js", "Geospatial", "React"],
    link: { label: "Launch Trackaday", url: "https://www.trackaday.buzz/" },
    keywords: ["trackaday", "mapbox", "turf", "geo", "route", "geospatial"],
  },
  react: {
    badge: "REACT ENGINEERING",
    text: `React is at the core of Maroof's web work.
• Builds reusable component systems and responsive product interfaces.
• Uses React for dashboards, maps, consumer products, and complex product workflows.
• Focuses on maintainable UI architecture, not just page-level implementation.`,
    chips: ["React", "Components", "UI Architecture"],
    keywords: ["react development", "react developer", "react expertise"],
    priority: 2,
  },
  nextjs: {
    badge: "NEXT.JS PRODUCT BUILDS",
    text: `Maroof uses Next.js for production web experiences where performance and a clean application structure matter.
• Comfortable with SSR, SSG, and App Router patterns.
• Uses TypeScript alongside Next.js for scalable, maintainable product code.
• Applied across portfolio and full-stack product work.`,
    chips: ["Next.js", "SSR", "SSG", "App Router"],
    keywords: ["nextjs", "next js", "app router", "ssr", "ssg"],
    priority: 2,
  },
  reactNative: {
    badge: "REACT NATIVE MOBILE",
    text: `Maroof builds React Native applications for practical, production mobile workflows.
• Currently building the Ascend sales-operations app at Ethos.
• Experience includes QR-driven product and client workflows plus field-friendly UX.
• Well suited to mobile MVPs and existing app improvement work.`,
    chips: ["React Native", "Mobile Apps", "Field UX"],
    keywords: ["react native", "native app", "android", "ios", "mobile development"],
    priority: 3,
  },
  typescript: {
    badge: "TYPESCRIPT & MAINTAINABILITY",
    text: `TypeScript is a key part of Maroof's approach to reliable frontend systems.
• Used at VAHN to improve application maintainability and performance.
• Helps make component contracts, state, and product logic clearer as a project grows.
• Used across React, Next.js, and product-dashboard work.`,
    chips: ["TypeScript", "Maintainability", "Frontend Systems"],
    keywords: ["typescript", "type safety", "typed code"],
    priority: 3,
  },
  stateManagement: {
    badge: "STATE MANAGEMENT",
    text: `Maroof works with modern state-management patterns for product applications.
• Uses Zustand and Redux alongside React and TypeScript.
• At VAHN, Zustand helped improve maintainability and performance in the Fleet App MVP.
• Chooses state architecture based on product complexity instead of forcing one library everywhere.`,
    chips: ["Zustand", "Redux", "React State"],
    keywords: ["state management", "zustand", "redux", "global state"],
    priority: 3,
  },
  maps: {
    badge: "MAPS & LOCATION PRODUCTS",
    text: `Location-aware products are a strong part of Maroof's work.
• Uses Mapbox GL and Turf.js for route geometry and spatial analysis in Trackaday.
• Integrated Google Maps for live tracking workflows at 56 Secure.
• Comfortable with maps, routes, geofencing, and visualising live location data.`,
    chips: ["Mapbox GL", "Google Maps", "Turf.js", "Geofencing"],
    keywords: ["google maps", "maps", "mapping", "location", "geofence"],
    priority: 2,
  },
  realtime: {
    badge: "REAL-TIME SYSTEMS",
    text: `Maroof has experience building interfaces that need timely, dependable updates.
• Built RTC and RTM workflows with PubNub at Noon Academy.
• Worked on live tracking dashboards and monitoring flows at 56 Secure.
• Uses practical reconnect and reliability thinking for live product experiences.`,
    chips: ["PubNub", "RTC", "RTM", "Live Tracking"],
    keywords: ["real time", "realtime", "websocket", "pubnub", "live update"],
    priority: 3,
  },
  dashboards: {
    badge: "DASHBOARD DEVELOPMENT",
    text: `Maroof builds operational dashboards for teams that need clear, actionable information.
• Built Admin, Guard, and Police dashboards at 56 Secure.
• Worked on fleet-product workflows and analytics integration at VAHN.
• Focuses on usable information hierarchy, responsive UI, and real product tasks.`,
    chips: ["Dashboards", "Operations", "Analytics", "React"],
    keywords: ["dashboard", "admin panel", "admin dashboard", "analytics dashboard"],
    priority: 3,
  },
  performance: {
    badge: "PERFORMANCE-FOCUSED FRONTEND",
    text: `Performance is built into Maroof's frontend approach.
• Uses maintainable TypeScript and state patterns to keep product applications efficient.
• Designs responsive interfaces with scalable component architecture.
• Brings performance awareness to maps, dashboards, mobile workflows, and consumer products.`,
    chips: ["Performance", "Scalable UI", "TypeScript"],
    keywords: ["performance", "fast", "optimization", "optimise", "optimize"],
    priority: 2,
  },
  mvp: {
    badge: "0-TO-1 MVP DELIVERY",
    text: `Maroof is experienced in taking a product from early concept to a usable release.
• Delivered the first production release of VAHN's Fleet App MVP.
• Founded Buzztales and led technology delivery end to end.
• Available for web and mobile MVP architecture and implementation.`,
    chips: ["MVP", "Product Delivery", "Web", "Mobile"],
    keywords: ["mvp", "zero to one", "0 to 1", "startup", "prototype"],
    priority: 3,
  },
  founder: {
    badge: "FOUNDER EXPERIENCE",
    text: `Maroof founded Buzztales Technologies Pvt. Ltd. from November 2023 to November 2024.
• Led delivery of digital solutions as a technology founder.
• Architected scalable systems and managed the end-to-end product lifecycle.
• This experience adds product ownership and delivery context to his engineering work.`,
    chips: ["Buzztales", "Founder", "Product Ownership"],
    keywords: ["founder", "buzztales technologies", "startup founder", "entrepreneur"],
    priority: 3,
  },
  qrScanner: {
    badge: "QR SCANNING WORKFLOW",
    text: `At Ethos, Maroof developed a custom QR code scanner for the Ascend mobile app.
• It streamlines product and client workflows for sales operations.
• The work is paired with end-to-end UX flows designed for field usability.
• This is a practical example of combining mobile capabilities with business workflow design.`,
    chips: ["QR Scanner", "React Native", "Sales Operations"],
    keywords: ["qr code", "qr scanner", "barcode", "scan product"],
    priority: 4,
  },
  mixpanel: {
    badge: "PRODUCT ANALYTICS",
    text: `At VAHN, Maroof integrated Mixpanel to make user behaviour visible to the product team.
• Instrumented analytics to support product decisions.
• Connects frontend events with the workflows teams need to understand.
• Useful for products that need stronger feedback loops after launch.`,
    chips: ["Mixpanel", "Analytics", "Product Decisions"],
    keywords: ["mixpanel", "product analytics", "user analytics", "tracking events"],
    priority: 4,
  },
  storybook: {
    badge: "DESIGN SYSTEMS & STORYBOOK",
    text: `Maroof used Storybook at Noon Academy to support component-driven development.
• Makes UI components easier to build, review, and keep consistent.
• Supports a scalable design-system mindset for product teams.
• Pairs naturally with his reusable component architecture experience.`,
    chips: ["Storybook", "Design Systems", "Reusable Components"],
    keywords: ["storybook", "design system", "component library", "ui consistency"],
    priority: 4,
  },
  availability: {
    badge: "WORKING WITH MAROOF",
    text: `Maroof is open to remote senior frontend engagements.
• Suitable for React, Next.js, and React Native product work.
• Can support new MVPs, existing product improvement, UI architecture, and performance work.
• Send the product context and timeline to maroofmohdmalik@gmail.com.`,
    chips: ["Remote", "Senior Frontend", "MVP", "Consulting"],
    link: { label: "Email Maroof", url: "mailto:maroofmohdmalik@gmail.com" },
    keywords: ["availability", "remote work", "remote developer", "engagement", "consulting"],
    priority: 3,
  },
  location: {
    badge: "LOCATION & REMOTE WORK",
    text: `Mohd Maroof is based in India and works remotely.
• His portfolio includes remote product work across web and mobile.
• He is open to remote senior frontend contracts and consulting engagements.`,
    chips: ["India", "Remote", "Frontend"],
    keywords: ["location", "where is", "based", "india", "timezone"],
    priority: 3,
  },
  twistNWords: {
    badge: "TWIST N WORDS",
    text: `Twist N Words is a responsive word-shuffle game built for desktop and mobile.
• Includes progressive difficulty, streak tracking, and high scores.
• Uses smooth drag-and-drop interactions and mobile-optimised touch controls.
• Built with React, JavaScript, CSS animations, and local storage.`,
    chips: ["React", "Game UI", "CSS Animations", "Mobile"],
    link: { label: "Play Twist N Words", url: "https://twistnwords.vercel.app/" },
    keywords: ["twist n words", "word game", "word puzzle", "drag and drop"],
    priority: 4,
  },
  symzo: {
    badge: "SYMZO",
    text: `Symzo is a modern digital product focused on a clear, responsive user experience.
• Built on a scalable frontend foundation with React, Next.js, and TypeScript.
• Emphasises a focused interface and performance-conscious implementation.
• Demonstrates polished product UI beyond dashboard and operational software.`,
    chips: ["Next.js", "TypeScript", "Responsive UI"],
    link: { label: "Open Symzo", url: "https://www.symzo.in/" },
    keywords: ["symzo", "responsive ui", "modern product"],
    priority: 4,
  },
  components: {
    badge: "REUSABLE UI ARCHITECTURE",
    text: `Maroof builds reusable component foundations rather than one-off screens.
• Uses component-driven development to keep product interfaces consistent as they grow.
• Has Storybook experience and a design-system mindset.
• This approach supports faster iteration across dashboards, mobile workflows, and customer-facing products.`,
    chips: ["Components", "Design Systems", "Storybook", "React"],
    keywords: ["reusable components", "ui architecture", "component architecture", "components"],
    priority: 3,
  },
  fullstack: {
    badge: "PRODUCT-FACING FULL-STACK WORK",
    text: `Maroof's primary focus is frontend, with experience working in full-stack product environments.
• Graple.ai uses React, Next.js, Node.js, MongoDB, and TypeScript.
• He is strongest at translating product requirements into polished web and mobile experiences.
• Especially effective where frontend architecture and product delivery need close ownership.`,
    chips: ["Next.js", "Node.js", "MongoDB", "Product Delivery"],
    keywords: ["nodejs", "node js", "mongodb", "full stack", "backend"],
    priority: 3,
  },
  graple: {
    badge: "GRAPLE.AI (EXPERIMENTATION PLATFORM)",
    text: `Graple.ai is a full-stack experimentation and retention platform for product teams.
• Helps teams design, launch, and analyse A/B tests and engagement campaigns.
• Includes real-time analytics, user cohort segmentation, retention funnels, and a campaign builder.
• Built with React, Next.js, Node.js, MongoDB, and TypeScript.`,
    chips: ["A/B Testing", "Analytics", "Next.js", "MongoDB"],
    link: { label: "Open Graple.ai", url: "https://graple-theta.vercel.app/" },
    keywords: ["graple", "ab test", "a b test", "experiment", "retention", "cohort", "campaign"],
  },
  snapaid: {
    badge: "SNAPAID (EMERGENCY GUIDANCE)",
    text: `SnapAid is an emergency medical-guidance web app designed for clarity and speed.
• Provides AI-assisted symptom triage and step-by-step first-aid guidance.
• Designed as an offline-first experience for critical situations.
• Includes a location-based hospital finder.`,
    chips: ["Offline First", "AI Guidance", "React", "Accessibility"],
    link: { label: "Open SnapAid", url: "https://snapaid.live/" },
    keywords: ["snapaid", "first aid", "emergency", "medical", "symptom", "hospital"],
  },
  projects: {
    badge: "SELECTED PRODUCT WORK",
    text: `Maroof's portfolio includes products across several domains:
• Trackaday — geospatial route tracking with Mapbox GL, Turf.js, route playback, and geofencing.
• Graple.ai — experimentation and retention platform with A/B testing, cohorts, and analytics.
• SnapAid — offline-first emergency guidance experience with AI-assisted symptom triage.
• Twist N Words and Symzo — polished, responsive consumer web products.`,
    chips: ["Trackaday", "Graple.ai", "SnapAid", "React Products"],
    link: { label: "View Trackaday", url: "https://www.trackaday.buzz/" },
    keywords: ["graple", "snapaid", "twist", "symzo", "project", "portfolio", "product"],
  },
  experience: {
    badge: "CAREER TIMELINE",
    text: `Maroof's experience spans hands-on engineering and product ownership:
• Ethos (Feb 2026–present): React Native sales-operations app, QR scanning, and field UX.
• VAHN (Dec 2024–Jan 2026): shipped a fleet-app MVP using TypeScript, Zustand, and Mixpanel.
• Buzztales (2023–2024): founded and led a technology startup.
• Earlier roles at 56 Secure and Noon Academy focused on live tracking, dashboards, RTC/RTM, and Storybook.`,
    chips: ["Ethos", "VAHN", "Buzztales", "56 Secure", "Noon Academy"],
    keywords: ["experience", "career", "history", "worked", "company", "56 secure", "noon", "buzztales"],
  },
  secure: {
    badge: "56 SECURE (LIVE MONITORING)",
    text: `At 56 Secure, Maroof built critical operational dashboards from scratch.
• Delivered Admin, Guard, and Police dashboards for monitoring workflows.
• Integrated Google Maps for real-time live tracking.
• Built Smart Eye alert features to support monitoring and response coordination.`,
    chips: ["Google Maps", "Live Tracking", "Dashboards", "Alerts"],
    keywords: ["56 secure", "smart eye", "police dashboard", "guard dashboard", "security monitoring"],
  },
  noon: {
    badge: "NOON ACADEMY (REAL-TIME LEARNING)",
    text: `At Noon Academy, Maroof worked on reliable real-time learning experiences.
• Integrated RTC and RTM capabilities using PubNub.
• Built breakout-room workflows with auto-reconnect logic.
• Set up Storybook to support component-driven development and UI consistency.`,
    chips: ["PubNub", "RTC / RTM", "Storybook", "Auto-reconnect"],
    keywords: ["noon academy", "pubnub", "rtc", "rtm", "breakout room", "storybook", "education"],
  },
  hire: {
    badge: "AVAILABILITY & CONTRACTS",
    text: `Mohd Maroof is available for senior frontend contracts, 0-to-1 web and mobile MVPs, and high-performance React, Next.js, or React Native consulting.
• Remote collaboration worldwide.
• Ideal for product teams that need an experienced frontend owner.
• Contact: maroofmohdmalik@gmail.com`,
    chips: ["Remote Global", "Senior Contract", "MVP Delivery", "Frontend Consulting"],
    link: { label: "Send Email Inquiry", url: "mailto:maroofmohdmalik@gmail.com" },
    keywords: ["hire", "available", "rate", "contract", "collaborate", "freelance"],
  },
  contact: {
    badge: "START A CONVERSATION",
    text: `The fastest way to reach Mohd Maroof is by email.
• Share the product goal, timeline, and the kind of support you need.
• Relevant engagements include senior frontend contracts, React/Next.js builds, React Native apps, and 0-to-1 MVP work.
• Email: maroofmohdmalik@gmail.com`,
    chips: ["Remote", "Frontend", "Mobile", "MVP Delivery"],
    link: { label: "Email Maroof", url: "mailto:maroofmohdmalik@gmail.com" },
    keywords: ["contact", "email", "reach", "message"],
  },
  help: {
    badge: "PORTFOLIO GUIDE",
    text: `I can answer questions grounded in Maroof's portfolio. Try asking about:
• work: Ethos, VAHN, 56 Secure, Noon Academy, or Buzztales.
• products: Trackaday, Graple.ai, SnapAid, Twist N Words, or Symzo.
• skills: React, Next.js, React Native, TypeScript, maps, and real-time systems.
• availability, collaboration, or how to get in touch.`,
    chips: ["Experience", "Projects", "Skills", "Contact"],
    keywords: ["help", "what can", "who are you", "hello", "hi"],
  },
};

const COMMON_QUERY_ALIASES = {
  "frontend developer": ["frontend", "react", "nextjs", "experience"],
  "mobile app": ["mobile", "react native"],
  "mobile developer": ["mobile", "react native"],
  "web developer": ["react", "nextjs", "frontend"],
  "live tracking": ["tracking", "mapbox", "geospatial"],
  "location tracking": ["tracking", "mapbox", "geospatial"],
  "real time": ["realtime", "pubnub", "tracking"],
  "map app": ["mapbox", "geospatial", "route"],
  "job opening": ["hire", "contract"],
  "work with": ["hire", "collaborate"],
};

const STOP_WORDS = new Set([
  "a", "an", "and", "are", "can", "do", "for", "give", "how", "i", "in", "is", "me", "of", "on", "tell", "the", "to", "what", "with", "you", "his",
]);

const normalizeText = (value) => value
  .toLowerCase()
  .replace(/next\.js/g, "nextjs")
  .replace(/[^a-z0-9+#]+/g, " ")
  .trim()
  .replace(/\s+/g, " ");

/** @param {string} query @returns {ChatbotAnswer} */
export const getChatbotAnswer = (query) => {
  let normalizedQuery = normalizeText(query);

  Object.entries(COMMON_QUERY_ALIASES).forEach(([phrase, aliases]) => {
    if (normalizedQuery.includes(phrase)) normalizedQuery += ` ${aliases.join(" ")}`;
  });

  const queryWords = new Set(normalizedQuery.split(" ").filter((word) => word.length > 2 && !STOP_WORDS.has(word)));
  let bestMatch = chatbotAnswers.noMatch;
  let bestScore = 0;

  Object.values(chatbotAnswers).forEach((answer) => {
    const score = answer.keywords.reduce((total, keyword) => {
      const normalizedKeyword = normalizeText(keyword);
      const isPhrase = normalizedKeyword.includes(" ");

      if (isPhrase && normalizedQuery.includes(normalizedKeyword)) return total + 12;
      if (!isPhrase && queryWords.has(normalizedKeyword)) return total + 5;
      return total;
    }, 0);

    const weightedScore = score + (answer.priority || 0);
    if (score > 0 && weightedScore > bestScore) {
      bestMatch = answer;
      bestScore = weightedScore;
    }
  });

  return bestMatch;
};
