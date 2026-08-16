import Head from "next/head";
import { LazyMotion, MotionConfig, domAnimation, m, useScroll } from "framer-motion";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { Footer } from "../component/footer.section";
import { HeaderComponent } from "../component/header.section";
import { Navbar } from "../component/navbar.section";
import { OverviewSection } from "../component/overview.section";
import { PlanetCursor } from "../component/planetCursor";
import { ProjectsSection } from "../component/projects.section";
import { SkillSection } from "../component/skills.section";
import { Timeline } from "../component/timeline.section";
import { WorkHistory } from "../component/workHistory.section";
import { data } from "../data";
import { seo } from "../lib/seo";

const sectionMotion = {
  hidden: { opacity: 0, y: 34, scale: .992 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: .72, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

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
  const handleMessageSentSuccess = () => { setShowSuccessToast(true); window.setTimeout(() => setShowSuccessToast(false), 5000); };

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
        <m.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
        <Navbar />
        <PlanetCursor />
        {showSuccessToast && <m.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="fixed right-4 top-20 z-[60] rounded-lg border border-emerald-400/30 bg-emerald-600/90 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-900/30 backdrop-blur-sm"><div className="flex items-center gap-2"><FiCheck className="text-emerald-200" />Message sent successfully</div></m.div>}

        <main className="safe-area-main relative z-10 min-h-screen">
          <div className="mx-auto w-full max-w-7xl space-y-5 md:space-y-7">
            <m.section id="about" className="orbital-section hero-section" initial="hidden" animate="visible" variants={sectionMotion}><HeaderComponent data={data} onMessageSentSuccess={handleMessageSentSuccess} /></m.section>
            <m.section id="overview" className="orbital-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} variants={sectionMotion}><OverviewSection /></m.section>
            <m.section id="experience" className="orbital-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .08 }} variants={sectionMotion}><WorkHistory work={data.work} /></m.section>
            <m.section id="skills" className="orbital-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} variants={sectionMotion}><SkillSection skills={data.skills} /></m.section>
            <m.section id="timeline" className="orbital-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .16 }} variants={sectionMotion}><Timeline work={data.work} /></m.section>
            <m.section id="projects" className="orbital-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .08 }} variants={sectionMotion}><ProjectsSection projects={data.projects as any} /></m.section>
          </div>
        </main>
        <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65 }}><Footer /></m.div>
      </MotionConfig>
    </LazyMotion>
  );
}
