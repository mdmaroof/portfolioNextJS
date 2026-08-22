import React from "react";
import Head from "next/head";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { FiHome, FiArrowRight, FiCpu, FiCompass, FiBriefcase, FiFolder, FiMail } from "react-icons/fi";
import { seo } from "../lib/seo";

export default function Custom404() {
  return (
    <LazyMotion features={domAnimation}>
      <Head>
        <title>404 — Page Not Found | Mohd Maroof</title>
        <meta name="description" content="The requested page could not be found." />
        <meta name="theme-color" content="#f3f3f9" />
        <meta name="color-scheme" content="light only" />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="min-h-screen bg-[#f3f3f9] text-[#201f32] flex flex-col justify-between relative overflow-hidden selection:bg-[#262ef2] selection:text-white px-4 py-8">
        
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#262ef2]/8 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#6e73fa]/10 blur-[100px] pointer-events-none rounded-full" />

        {/* Top Mini Floating Header */}
        <header className="mx-auto max-w-4xl w-full flex items-center justify-between z-10 pt-2">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#262ef2] to-[#6e73fa] flex items-center justify-center text-white font-extrabold text-xs shadow-md shadow-[#262ef2]/30 group-hover:scale-105 transition-transform">
              MM
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold text-[#1f1f32] tracking-tight leading-tight group-hover:text-[#262ef2] transition-colors">
                Mohd Maroof
              </span>
              <span className="text-[10px] font-mono text-[#8c859d] leading-none font-medium">
                Portfolio 404
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#e3e2e8] text-xs font-mono font-semibold text-[#4d5564] hover:text-[#262ef2] hover:border-[#262ef2] shadow-2xs transition-all"
          >
            <FiHome className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </header>

        {/* Central Stage Glass Card */}
        <main className="mx-auto max-w-2xl w-full my-auto py-8 z-10">
          <m.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[32px] sm:rounded-[40px] bg-white/85 backdrop-blur-2xl border border-white/95 p-6 sm:p-10 md:p-12 shadow-[0_30px_90px_-20px_rgba(38,46,242,0.12),0_0_0_1px_rgba(255,255,255,0.9)] text-center relative overflow-hidden"
          >
            {/* Background 404 Ghost Watermark */}
            <div className="absolute -top-6 -right-6 text-[130px] sm:text-[180px] font-extrabold text-[#262ef2]/[0.04] select-none pointer-events-none font-mono leading-none">
              404
            </div>

            {/* Eyebrow Tag */}
            <div className="inline-block mb-3">
              <span className="tag">
                <FiCompass className="text-[#262ef2] mr-1.5 animate-spin" style={{ animationDuration: "12s" }} />
                Error 404 · Route Not Found
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1f1f32] leading-tight mb-3">
              Lost in the <br />
              <span className="serif-accent blue-accent font-normal italic">production codebase.</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-[#4d5564] leading-relaxed max-w-md mx-auto mb-6">
              The page or artifact you requested doesn&apos;t exist, was refactored, or moved during the latest release.
            </p>

            {/* Diagnostic Telemetry Console */}
            <div className="bg-[#f8f8fc] border border-[#e2e2ec] rounded-2xl p-3.5 mb-7 text-left font-mono text-[11px] text-[#4d5564] shadow-2xs max-w-md mx-auto">
              <div className="flex items-center justify-between border-b border-[#e8e8f2] pb-1.5 mb-2">
                <span className="text-[#262ef2] font-bold">ROUTE DIAGNOSTICS</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Kernel Active
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#8c859d]">HTTP Status:</span>
                  <span className="font-bold text-[#e11d48]">404 Not Found</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8c859d]">Resolution:</span>
                  <span className="font-semibold text-[#1f1f32]">Redirect to index</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8c859d]">Core Engine:</span>
                  <span className="text-[#262ef2] font-bold">Next.js 14 · React 18</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Link
                href="/"
                className="btn-dark px-6 py-3.5 rounded-2xl text-sm font-bold shadow-md hover:shadow-xl transition-all flex items-center gap-2 group"
              >
                <span>Return to Homepage</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#agent"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-[#f8f8fc] text-[#1f1f32] hover:text-[#262ef2] border border-[#dedee8] hover:border-[#262ef2] font-mono text-xs font-semibold shadow-2xs transition-all group"
              >
                <FiCpu className="w-3.5 h-3.5 text-[#262ef2]" />
                <span>Ask AI Agent</span>
              </Link>
            </div>

            {/* Quick Section Shortcuts */}
            <div className="border-t border-[#ececf4] pt-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8c859d] block mb-2.5">
                Quick Navigation Jump:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[11px]">
                <Link
                  href="/#overview"
                  className="px-3 py-1.5 rounded-xl bg-[#f4f4fa] hover:bg-white text-[#4d5564] hover:text-[#262ef2] border border-[#e2e2ec] hover:border-[#262ef2] transition-all flex items-center gap-1.5 shadow-2xs"
                >
                  <FiCompass className="w-3 h-3 text-[#262ef2]" />
                  <span>/overview</span>
                </Link>
                <Link
                  href="/#experience"
                  className="px-3 py-1.5 rounded-xl bg-[#f4f4fa] hover:bg-white text-[#4d5564] hover:text-[#262ef2] border border-[#e2e2ec] hover:border-[#262ef2] transition-all flex items-center gap-1.5 shadow-2xs"
                >
                  <FiBriefcase className="w-3 h-3 text-[#6e73fa]" />
                  <span>/experience</span>
                </Link>
                <Link
                  href="/#projects"
                  className="px-3 py-1.5 rounded-xl bg-[#f4f4fa] hover:bg-white text-[#4d5564] hover:text-[#262ef2] border border-[#e2e2ec] hover:border-[#262ef2] transition-all flex items-center gap-1.5 shadow-2xs"
                >
                  <FiFolder className="w-3 h-3 text-[#0ea5e9]" />
                  <span>/projects</span>
                </Link>
                <Link
                  href="/#contact"
                  className="px-3 py-1.5 rounded-xl bg-[#f4f4fa] hover:bg-white text-[#4d5564] hover:text-[#262ef2] border border-[#e2e2ec] hover:border-[#262ef2] transition-all flex items-center gap-1.5 shadow-2xs"
                >
                  <FiMail className="w-3 h-3 text-[#f25c26]" />
                  <span>/contact</span>
                </Link>
              </div>
            </div>
          </m.div>
        </main>

        {/* Footer info */}
        <footer className="mx-auto max-w-4xl w-full text-center text-xs font-mono text-[#8c859d] z-10 pb-2">
          © {new Date().getFullYear()} Mohd Maroof · Senior Frontend Developer
        </footer>
      </div>
    </LazyMotion>
  );
}
