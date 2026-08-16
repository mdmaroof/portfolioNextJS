import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiCode, FiLayers, FiMapPin, FiSend, FiSmartphone, FiZap } from "react-icons/fi";
import { GiCottonFlower } from "react-icons/gi";
import { AnimatePresence, m } from "framer-motion";

interface Props { data: any; onMessageSentSuccess?: () => void; }

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];
const copyItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: .58, ease: easeOut } },
};

const PlanetOrbit = ({ path, tone, phase, duration, reverse = false, children }: { path: 1 | 2 | 3; tone: string; phase: number; duration: number; reverse?: boolean; children: ReactNode }) => {
  const end = phase + (reverse ? -360 : 360);
  return (
    <span className={`planet-orbit-anchor planet-orbit-anchor-${path}`}>
      <m.span
        className="planet-orbit-path"
        initial={{ rotate: phase }}
        whileInView={{ rotate: end }}
        viewport={{ amount: .12 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <span className="planet-anchor">
          <m.span
            className={`orbit-satellite ${tone}`}
            initial={{ rotate: -phase }}
            whileInView={{ rotate: -end }}
            viewport={{ amount: .12 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            {children}
          </m.span>
        </span>
      </m.span>
    </span>
  );
};

export const HeaderComponent = ({ data, onMessageSentSuccess }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const subtitles = useMemo(() => data?.subtitles || [], [data?.subtitles]);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    if (!subtitles.length) return;
    const timer = window.setInterval(() => setSubtitleIndex((value) => (value + 1) % subtitles.length), 2600);
    return () => window.clearInterval(timer);
  }, [subtitles]);

  const sendMessage = async () => {
    if (isSending) return;
    if (!name.trim() || !/\S+@\S+\.\S+/.test(email) || !message.trim()) {
      alert("Please complete your name, a valid email, and your message.");
      return;
    }
    try {
      setIsSending(true);
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, message }) });
      const result = (await response.json()) as { ok: boolean; message: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "Failed to send message");
      onMessageSentSuccess?.();
      setName(""); setEmail(""); setMessage(""); setModalOpen(false);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to send message");
    } finally { setIsSending(false); }
  };

  return (
    <>
      <AnimatePresence>
        {modalOpen && (
        <m.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .2 }} onClick={() => setModalOpen(false)}>
          <m.div className="contact-modal" initial={{ opacity: 0, y: 18, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} transition={{ duration: .32, ease: easeOut }} onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="contact-title">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div><p className="eyebrow">Let&apos;s build something</p><h2 id="contact-title" className="mt-2 text-2xl font-semibold text-white">Start a conversation</h2></div>
              <button className="icon-button" onClick={() => setModalOpen(false)} aria-label="Close contact form"><AiOutlineClose /></button>
            </div>
            <div className="mt-6 grid gap-4">
              <label className="form-field"><span>Name</span><input value={name} disabled={isSending} onChange={(event) => setName(event.target.value)} placeholder="Your name" /></label>
              <label className="form-field"><span>Email</span><input type="email" value={email} disabled={isSending} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" /></label>
              <label className="form-field"><span>Message</span><textarea value={message} disabled={isSending} onChange={(event) => setMessage(event.target.value)} placeholder="Tell me about the product..." rows={5} /></label>
              <button className="primary-button mt-2" onClick={sendMessage} disabled={isSending}><FiSend />{isSending ? "Sending…" : "Send message"}</button>
            </div>
          </m.div>
        </m.div>
        )}
      </AnimatePresence>

      <div className="hero-layout">
        <m.div className="relative z-10 flex flex-col justify-center" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .09, delayChildren: .1 } } }}>
          <m.div variants={copyItem} className="availability-pill"><span className="pulse-dot" /> Available for select projects</m.div>
          <m.p variants={copyItem} className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#b9b2d3]">Senior frontend developer · India</m.p>
          <m.h1 variants={copyItem} className="hero-title mt-5">Building digital<br />products that feel<br /><span>effortless.</span></m.h1>
          <m.p variants={copyItem} className="mt-6 max-w-xl text-base leading-7 text-[#b9b2d3] md:text-lg">{data?.summary}</m.p>
          <m.div variants={copyItem} className="mt-8 flex flex-wrap gap-3">
            <m.button whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: .97 }} onClick={() => setModalOpen(true)} className="primary-button">Let&apos;s work together <FiArrowUpRight /></m.button>
            <m.a whileHover={{ y: -3 }} whileTap={{ scale: .97 }} href={data?.social?.github} target="_blank" rel="noreferrer" className="secondary-button"><FaGithub /> GitHub</m.a>
            <m.a whileHover={{ y: -3 }} whileTap={{ scale: .97 }} href={data?.social?.linkedin} target="_blank" rel="noreferrer" className="secondary-button"><FaLinkedinIn /> LinkedIn</m.a>
          </m.div>
          <m.div variants={copyItem} className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#8f89aa]">
            <span className="inline-flex items-center gap-1.5"><FiMapPin className="text-[#64e7ff]" /> India · Remote</span>
            <span className="inline-flex items-center gap-1.5"><FiZap className="text-[#ffb86b]" /> React · Next.js · React Native</span>
          </m.div>
        </m.div>

        <m.div className="hero-orbit-stage" aria-hidden="true" initial={{ opacity: 0, scale: .88, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .95, delay: .18, ease: [0.16, 1, 0.3, 1] }}>
          <div className="hero-glow" />
          <m.div className="orbit-ring orbit-ring-one" whileInView={{ opacity: [.5, .9, .5] }} viewport={{ amount: .15 }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <m.div className="orbit-ring orbit-ring-two" whileInView={{ opacity: [.45, .78, .45] }} viewport={{ amount: .15 }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: .7 }} />
          <m.div className="orbit-ring orbit-ring-three" whileInView={{ opacity: [.36, .68, .36] }} viewport={{ amount: .15 }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }} />
          <div className="orbit-core-anchor"><m.div className="orbit-core" whileInView={{ y: [0, -6, 0], scale: [1, 1.025, 1] }} viewport={{ amount: .15 }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}><strong>6+</strong><span>years of<br />product craft</span></m.div></div>
          <PlanetOrbit path={3} tone="satellite-one" phase={-58} duration={28}><FiCode /></PlanetOrbit>
          <PlanetOrbit path={2} tone="satellite-two" phase={74} duration={19} reverse><FiSmartphone /></PlanetOrbit>
          <PlanetOrbit path={3} tone="satellite-three" phase={142} duration={28}><FiLayers /></PlanetOrbit>
          <PlanetOrbit path={1} tone="satellite-four" phase={214} duration={14} reverse><FiZap /></PlanetOrbit>
          <m.div className="orbit-caption-shell" initial={{ opacity: 0, y: -10, scale: .78 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring", stiffness: 240, damping: 14, mass: .8, delay: .72 }}>
            <m.div className="orbit-caption" whileInView={{ y: [0, -4, 0], rotate: [-.45, .45, -.45] }} viewport={{ amount: .2 }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <div className="orbit-caption-line">
                <span className="orbit-caption-status"><i />Currently</span>
                <AnimatePresence mode="wait" initial={false}>
                  <m.strong key={subtitleIndex} initial={{ opacity: 0, y: 7, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -7, filter: "blur(4px)" }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>{subtitles[subtitleIndex] || data?.position}</m.strong>
                </AnimatePresence>
              </div>
              <m.span className="orbit-caption-cotton" whileInView={{ y: [0, 3, 0], rotate: [-6, 5, -6] }} viewport={{ amount: .2 }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}><GiCottonFlower /></m.span>
            </m.div>
          </m.div>
        </m.div>
      </div>
    </>
  );
};
