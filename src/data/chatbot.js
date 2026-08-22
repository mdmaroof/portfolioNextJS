// This is the single source of truth for both portfolio chat interfaces.
// Add or edit answers here; each answer can be found using the keywords below.

/**
 * @typedef {Object} ChatbotAnswer
 * @property {string} badge
 * @property {string} text
 * @property {string[]} chips
 * @property {string[]} keywords
 * @property {{ label: string, url: string }=} link
 */

/** @type {Record<string, ChatbotAnswer>} */
export const chatbotAnswers = {
  about: {
    badge: "MAROOF AT A GLANCE",
    text: `Mohd Maroof is a Senior Frontend Developer based in India with 6+ years of production experience across web and mobile.
• Builds scalable React, Next.js, and React Native products from early MVP through production.
• Strongest areas: real-time product experiences, map-based workflows, reusable UI architecture, and performance.
• Has worked across sales operations, fleet logistics, security monitoring, education technology, and geospatial SaaS.`,
    chips: ["6+ Years", "React", "Next.js", "React Native", "India"],
    keywords: ["about", "maroof", "profile", "background", "introduce", "who is"],
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

/** @param {string} query @returns {ChatbotAnswer} */
export const getChatbotAnswer = (query) => {
  const normalizedQuery = query.toLowerCase().trim();

  for (const answer of Object.values(chatbotAnswers)) {
    if (answer.keywords.some((keyword) => normalizedQuery.includes(keyword))) {
      return answer;
    }
  }

  return chatbotAnswers.about;
};
