import { useState, useEffect, useCallback, useMemo } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMapPin, FiBriefcase, FiCode, FiSend } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Heading } from "./heading";

interface Props {
  data: any;
  onMessageSentSuccess?: () => void;
}

export const HeaderComponent = ({ data, onMessageSentSuccess }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Typewriter effect state
  const subtitles = useMemo(() => data?.subtitles || [], [data?.subtitles]);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!subtitles.length) return;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDelay = 2000;

    const currentString = subtitles[currentSubtitleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentString.substring(0, currentText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length);
      }
    } else {
      if (currentText.length < currentString.length) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentString.substring(0, currentText.length + 1));
        }, typeSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, subtitles, currentSubtitleIndex]);

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const close = () => {
    setModalOpen(false);
  };

  const sendMessage = async () => {
    if (isSending) {
      return;
    }

    if (!name) {
      alert("Please type your name");
      return;
    }
    if (!email) {
      alert("Please type your email");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please type your correct email");
      return;
    }
    if (!message) {
      alert("Please type your message");
      return;
    }

    try {
      setIsSending(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          message,
          email,
        }),
      });

      const result = (await response.json()) as { ok: boolean; message: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      onMessageSentSuccess?.();
      setName("");
      setEmail("");
      setMessage("");
      setModalOpen(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to send message";
      alert(errorMessage);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* modal */}
      {modalOpen && (
        <div
          onClick={close}
          className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-full max-w-xl glass-card rounded-xl p-6 text-slate-100 shadow-2xl shadow-black/30"
          >
            <div className="flex flex-row items-center justify-between border-b border-white/10 pb-4">
              <div className="text-xl font-semibold md:text-2xl">Send Message</div>
              <div
                className="cursor-pointer text-xl text-slate-300 transition-colors hover:text-white md:text-2xl"
                onClick={close}
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="mt-5 flex flex-col w-full gap-4">
              <div className="flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-slate-300">Name</label>
                <input
                  type="name"
                  value={name}
                  disabled={isSending}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2.5 text-slate-100 outline-none transition-colors focus:border-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-slate-300">Email</label>
                <input
                  type="email"
                  value={email}
                  disabled={isSending}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2.5 text-slate-100 outline-none transition-colors focus:border-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1.5 text-sm font-medium text-slate-300">Message</label>
                <textarea
                  value={message}
                  disabled={isSending}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-lg border border-white/10 bg-slate-900/50 px-4 py-2.5 text-slate-100 outline-none transition-colors focus:border-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
                  rows={4}
                />
              </div>

              <button
                onClick={sendMessage}
                disabled={isSending}
                className={`mt-2 flex w-full md:w-[140px] items-center justify-center rounded-lg py-3 font-medium text-white transition-all duration-200 ${
                  isSending
                    ? "cursor-not-allowed bg-slate-600 opacity-70"
                    : "cursor-pointer bg-gradient-to-r from-sky-600 to-indigo-600 shine-effect hover:brightness-110"
                }`}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* modal close */}

      <div className="flex flex-col gap-8 md:gap-10">
        <section>
          <div className="hero-orbit flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="relative z-10 max-w-3xl flex-1">
              <div className="mb-5 flex items-center gap-2 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-400">
                  <div className="pulse-dot bg-emerald-400 h-2 w-2 rounded-full"></div>
                  Available for work
                </div>
              </div>
              
              <h1 className="gradient-text-hero text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                {data?.name ?? null}
              </h1>
              
              <div className="mt-4 flex min-h-[2rem] items-center text-xl font-medium text-slate-200 md:text-2xl">
                <span className="mr-2">{data?.position ?? null}</span>
                {subtitles.length > 0 && (
                  <span className="text-sky-400">
                    {currentText}
                    <span className="typewriter-cursor">|</span>
                  </span>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex gap-2">
                  <a
                    href={data?.social?.github}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-chip flex items-center justify-center rounded-full p-2.5 text-slate-300 transition-all hover:text-white glow-hover"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={data?.social?.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-chip flex items-center justify-center rounded-full p-2.5 text-slate-300 transition-all hover:text-white glow-hover"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <FiMapPin className="text-cyan-300" />
                    {data?.country ?? "India"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <FiBriefcase className="text-violet-300" />
                    6+ years experience
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <FiCode className="text-cyan-300" />
                    React • Next.js • React Native
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="shine-effect flex w-[170px] shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 py-3 font-medium text-white transition-all duration-200 hover:brightness-110 shadow-lg shadow-sky-900/20"
            >
              <FiSend />
              Contact
            </button>
          </div>
        </section>

        <section>
          <Heading>Summary</Heading>
          <div className="mt-4 glass-card rounded-2xl p-5 md:p-6 text-base font-light leading-relaxed text-slate-300 md:text-lg">
            {data?.summary ?? null}
          </div>
        </section>
      </div>
    </>
  );
};
