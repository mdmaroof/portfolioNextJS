import React, { useState } from "react";
import Head from "next/head";
import { LazyMotion, MotionConfig, domAnimation, m, useScroll } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { Navbar } from "../component/navbar.section";
import { HeaderComponent } from "../component/header.section";
import { OverviewSection } from "../component/overview.section";
import { CurvedCarouselSection } from "../component/curvedCarousel.section";
import { WorkHistory } from "../component/workHistory.section";
import { AgentSection } from "../component/agent.section";
import { PhoneScrollShowcaseSection } from "../component/phoneScrollShowcase.section";
import { Footer } from "../component/footer.section";
import { data } from "../data";
import { seo } from "../lib/seo";

const personSchema = {
  "@type": "Person",
  "@id": `${seo.canonicalUrl}#person`,
  name: seo.author,
  givenName: "Mohd",
  familyName: "Maroof",
  url: seo.canonicalUrl,
  image: seo.ogImageUrl,
  jobTitle: "Senior Frontend Developer",
  description: seo.description,
  email: "mailto:maroofmohdmalik@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [seo.profiles.github, seo.profiles.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Frontend architecture",
    "Web performance",
    "Realtime applications",
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    {
      "@type": "WebSite",
      "@id": `${seo.canonicalUrl}#website`,
      url: seo.canonicalUrl,
      name: seo.siteName,
      description: seo.description,
      inLanguage: "en-IN",
      publisher: { "@id": `${seo.canonicalUrl}#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${seo.canonicalUrl}#profile-page`,
      url: seo.canonicalUrl,
      name: seo.title,
      description: seo.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${seo.canonicalUrl}#website` },
      mainEntity: { "@id": `${seo.canonicalUrl}#person` },
    },
  ],
};

export default function Home() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const { scrollYProgress } = useScroll();

  const handleMessageSentSuccess = () => {
    setShowSuccessToast(true);
    window.setTimeout(() => setShowSuccessToast(false), 5000);
  };

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <Head>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="application-name" content={seo.author} />
          <meta name="author" content={seo.author} />
          <meta name="keywords" content={seo.keywords.join(", ")} />
          <meta name="generator" content="Next.js" />
          <meta name="referrer" content="strict-origin-when-cross-origin" />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          <meta
            name="googlebot"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          <meta
            name="format-detection"
            content="telephone=no, address=no, email=no"
          />
          <link rel="canonical" href={seo.canonicalUrl} />

          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:type" content="profile" />
          <meta property="og:url" content={seo.canonicalUrl} />
          <meta property="og:site_name" content={seo.siteName} />
          <meta property="og:locale" content={seo.locale} />
          <meta property="profile:first_name" content="Mohd" />
          <meta property="profile:last_name" content="Maroof" />
          <meta property="og:image" content={seo.ogImageUrl} />
          <meta property="og:image:secure_url" content={seo.ogImageUrl} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="Mohd Maroof — Senior Frontend Developer portfolio"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.ogImageUrl} />
          <meta
            name="twitter:image:alt"
            content="Mohd Maroof — Senior Frontend Developer portfolio"
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </Head>

        {/* Top Scroll Indicator */}
        <m.div
          className="top-scroll-progress w-full fixed top-0 left-0 z-50 h-[3px]"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Floating Condensing Navbar */}
        <Navbar />

        {/* Success Toast */}
        {showSuccessToast && (
          <m.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed right-4 top-20 z-[99] rounded-xl border border-emerald-400/30 bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-xl"
          >
            <div className="flex items-center gap-2">
              <FiCheck className="text-white" /> Message sent successfully
            </div>
          </m.div>
        )}

        {/* Main Sections Hierarchy */}
        <main className="relative z-10 min-h-screen">
          {/* 1. Clean Hero with Typewriter & CTAs */}
          <HeaderComponent data={data} onMessageSentSuccess={handleMessageSentSuccess} />

          {/* 2. Overview Metrics */}
          <OverviewSection />

          {/* 3. Curved Arc Experience Carousel with Orbiting Mobile Stage */}
          <CurvedCarouselSection />

          {/* 4. Detailed Roles & Contributions */}
          <WorkHistory work={data.work} />

          {/* 5. Interactive "Ask Maroof" Custom AI Agent & Bento Grid */}
          <AgentSection />

          {/* 6. Interactive Phone Scroll Showcase (Scroll to change projects inside phone) */}
          <PhoneScrollShowcaseSection />
        </main>

        {/* 8. High-Craft Studio Footer */}
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
