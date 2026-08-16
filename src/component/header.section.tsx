import { useEffect, useMemo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiCode, FiLayers, FiMapPin, FiSend, FiSmartphone, FiZap } from "react-icons/fi";
import { m } from "framer-motion";

interface Props { data: any; onMessageSentSuccess?: () => void; }

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
      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="contact-modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="contact-title">
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
          </div>
        </div>
      )}

      <div className="hero-layout">
        <m.div className="relative z-10 flex flex-col justify-center" initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .12, ease: [0.16, 1, 0.3, 1] }}>
          <div className="availability-pill"><span className="pulse-dot" /> Available for select projects</div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#b9b2d3]">Senior frontend developer · India</p>
          <h1 className="hero-title mt-5">Building digital<br />products that feel<br /><span>effortless.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#b9b2d3] md:text-lg">{data?.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => setModalOpen(true)} className="primary-button">Let&apos;s work together <FiArrowUpRight /></button>
            <a href={data?.social?.github} target="_blank" rel="noreferrer" className="secondary-button"><FaGithub /> GitHub</a>
            <a href={data?.social?.linkedin} target="_blank" rel="noreferrer" className="secondary-button"><FaLinkedinIn /> LinkedIn</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#8f89aa]">
            <span className="inline-flex items-center gap-1.5"><FiMapPin className="text-[#64e7ff]" /> India · Remote</span>
            <span className="inline-flex items-center gap-1.5"><FiZap className="text-[#ffb86b]" /> React · Next.js · React Native</span>
          </div>
        </m.div>

        <m.div className="hero-orbit-stage" aria-hidden="true" initial={{ opacity: 0, scale: .88, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .95, delay: .18, ease: [0.16, 1, 0.3, 1] }}>
          <div className="hero-glow" />
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />
          <div className="orbit-ring orbit-ring-three" />
          <div className="orbit-core"><strong>6+</strong><span>years of<br />product craft</span></div>
          <span className="orbit-satellite satellite-one"><FiCode /></span>
          <span className="orbit-satellite satellite-two"><FiSmartphone /></span>
          <span className="orbit-satellite satellite-three"><FiLayers /></span>
          <span className="orbit-satellite satellite-four"><FiZap /></span>
          <div className="orbit-caption"><span>Currently</span><strong key={subtitleIndex}>{subtitles[subtitleIndex] || data?.position}</strong></div>
        </m.div>
      </div>
    </>
  );
};
