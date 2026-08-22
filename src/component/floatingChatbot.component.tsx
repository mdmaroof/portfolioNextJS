import React, { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiCpu, FiCheck, FiExternalLink, FiTrash2, FiMinus, FiZap } from "react-icons/fi";
import { getChatbotAnswer } from "../data/chatbot";

interface Message {
  id: string;
  sender: "agent" | "user";
  text: string;
  badge?: string;
  tokens?: number;
  chips?: string[];
  link?: {
    label: string;
    url: string;
  };
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "float-init-1",
    sender: "agent",
    badge: "MAROOF'S PORTFOLIO AGENT",
    tokens: 42,
    text: `Hi! I answer from Maroof's portfolio. Ask about his work, products, stack, availability, or how to get in touch.`,
    chips: ["Experience", "Projects", "Skills", "Contact"],
  },
];

export const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [activeBadge, setActiveBadge] = useState("");
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, streamingText, isOpen]);

  const executeQuery = (queryText: string) => {
    if (!queryText.trim() || isStreaming) return;

    const lower = queryText.toLowerCase().trim();

    if (lower === "/clear" || lower === "clear") {
      setMessages([]);
      setInputVal("");
      return;
    }

    const responseData = getChatbotAnswer(queryText);

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: queryText,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsStreaming(true);
    setActiveBadge(responseData.badge);
    setStreamingText("");

    const fullText = responseData.text;
    let currIdx = 0;

    const interval = setInterval(() => {
      currIdx += Math.floor(Math.random() * 4) + 2;
      if (currIdx >= fullText.length) {
        clearInterval(interval);
        setStreamingText("");
        setIsStreaming(false);

        const agentMsg: Message = {
          id: `agent-${Date.now()}`,
          sender: "agent",
          badge: responseData.badge,
          tokens: Math.floor(fullText.length / 4) + 12,
          text: fullText,
          chips: responseData.chips,
          link: responseData.link,
        };
        setMessages((prev) => [...prev, agentMsg]);
      } else {
        setStreamingText(fullText.slice(0, currIdx));
      }
    }, 16);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeQuery(inputVal);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 select-none">
      {/* Floating Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 w-[calc(100vw-40px)] sm:w-[380px] h-[520px] rounded-[28px] bg-white/95 backdrop-blur-2xl border border-white/95 shadow-[0_25px_70px_-15px_rgba(20,21,34,0.3),0_0_0_1px_rgba(255,255,255,0.9)] flex flex-col justify-between overflow-hidden"
          >
            {/* Header Window Bar */}
            <div className="px-4 py-3.5 bg-[#f8f8fc] border-b border-[#e8e8f2] flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative">
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#262ef2] to-[#6e73fa] flex items-center justify-center text-white text-xs font-bold shadow-xs">
                    <FiCpu className="w-3.5 h-3.5" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#1f1f32] truncate leading-tight">
                    Maroof AI Agent
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-600 font-semibold block leading-none mt-0.5">
                    ● Streaming Ready
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => executeQuery("/clear")}
                  className="w-7 h-7 rounded-lg hover:bg-[#e8e8f2] text-[#8c859d] hover:text-[#1f1f32] flex items-center justify-center transition-colors"
                  title="Clear Chat"
                >
                  <FiTrash2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-lg hover:bg-[#e8e8f2] text-[#8c859d] hover:text-[#1f1f32] flex items-center justify-center transition-colors"
                  title="Close Window"
                >
                  <FiMinus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Body Scroll Area */}
            <div
              ref={chatScrollRef}
              className="flex-1 p-4 overflow-y-auto space-y-3 no-scrollbar font-sans text-xs"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  {msg.sender === "user" ? (
                    <div className="max-w-[85%] p-3 rounded-2xl rounded-tr-xs bg-[#201f32] text-white text-xs font-mono shadow-xs">
                      {msg.text}
                    </div>
                  ) : (
                    <div className="max-w-[95%] p-3.5 rounded-2xl rounded-tl-xs bg-[#f4f4fa] border border-[#e5e5f0] text-[#1f1f32] space-y-2 shadow-2xs">
                      {msg.badge && (
                        <div className="flex items-center justify-between gap-1 pb-1 border-b border-[#e8e8f2]">
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#262ef2]">
                            {msg.badge}
                          </span>
                          {msg.tokens && (
                            <span className="text-[9px] font-mono text-[#8c859d]">
                              ⚡ {msg.tokens} tokens
                            </span>
                          )}
                        </div>
                      )}

                      <div className="text-xs leading-relaxed whitespace-pre-line text-[#374151]">
                        {msg.text.split("\n").map((line, lIdx) => {
                          if (line.startsWith("•")) {
                            return (
                              <div key={lIdx} className="flex items-start gap-1.5 text-xs text-[#374151] mt-1">
                                <span className="w-3.5 h-3.5 rounded-md bg-[#262ef2]/10 flex items-center justify-center shrink-0 mt-0.5">
                                  <FiCheck className="w-2.5 h-2.5 text-[#262ef2]" strokeWidth={2.5} />
                                </span>
                                <span>{line.replace("•", "").trim()}</span>
                              </div>
                            );
                          }
                          return (
                            <p key={lIdx} className="text-[#4d5564]">
                              {line}
                            </p>
                          );
                        })}
                      </div>

                      {msg.chips && msg.chips.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {msg.chips.map((chip, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[9px] font-mono font-medium text-[#201f32] bg-white px-2 py-0.5 rounded-md border border-[#e2e2ec]"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      )}

                      {msg.link && (
                        <div className="pt-1">
                          <a
                            href={msg.link.url}
                            target={msg.link.url.startsWith("http") ? "_blank" : undefined}
                            rel={msg.link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#262ef2] hover:underline"
                          >
                            <span>{msg.link.label}</span>
                            <FiExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Streaming Indicator */}
              {isStreaming && (
                <div className="max-w-[95%] p-3.5 rounded-2xl rounded-tl-xs bg-[#f4f4fa] border border-[#e5e5f0] text-[#1f1f32] space-y-2 shadow-2xs">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#262ef2] block">
                    {activeBadge || "Generating..."}
                  </span>
                  <div className="text-xs leading-relaxed text-[#374151]">
                    {streamingText}
                    <span className="inline-block w-1.5 h-3.5 bg-[#262ef2] ml-1 align-middle animate-pulse" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Action Pills & Input Form */}
            <div className="p-3 bg-[#f8f8fc] border-t border-[#e8e8f2] space-y-2">
              {/* Quick Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                <button
                  type="button"
                  onClick={() => executeQuery("What is Maroof's core tech stack?")}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#dedee8] hover:border-[#262ef2] text-[10px] font-mono font-semibold text-[#4d5564] hover:text-[#262ef2] whitespace-nowrap shadow-2xs"
                >
                  /stack
                </button>
                <button
                  type="button"
                  onClick={() => executeQuery("Tell me about Ethos and his custom QR scanner")}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#dedee8] hover:border-[#262ef2] text-[10px] font-mono font-semibold text-[#4d5564] hover:text-[#262ef2] whitespace-nowrap shadow-2xs"
                >
                  /ethos-qr
                </button>
                <button
                  type="button"
                  onClick={() => executeQuery("Tell me about VAHN and the Fleet App MVP")}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#dedee8] hover:border-[#262ef2] text-[10px] font-mono font-semibold text-[#4d5564] hover:text-[#262ef2] whitespace-nowrap shadow-2xs"
                >
                  /vahn
                </button>
                <button
                  type="button"
                  onClick={() => executeQuery("Show me Maroof's projects")}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#dedee8] hover:border-[#262ef2] text-[10px] font-mono font-semibold text-[#4d5564] hover:text-[#262ef2] whitespace-nowrap shadow-2xs"
                >
                  /projects
                </button>
                <button
                  type="button"
                  onClick={() => executeQuery("Is Maroof available for senior contracts?")}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#dedee8] hover:border-[#262ef2] text-[10px] font-mono font-semibold text-[#4d5564] hover:text-[#262ef2] whitespace-nowrap shadow-2xs"
                >
                  /hire
                </button>
              </div>

              {/* Input Row */}
              <form onSubmit={handleSubmit} className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask Maroof's agent..."
                  className="flex-1 bg-white border border-[#d8d8e5] focus:border-[#262ef2] rounded-xl px-3 py-2 text-xs text-[#1f1f32] outline-none font-mono placeholder-[#8c859d]"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isStreaming}
                  className="w-8 h-8 rounded-xl bg-[#262ef2] hover:bg-[#1d24cf] text-white flex items-center justify-center disabled:opacity-40 transition-all shadow-xs shrink-0"
                >
                  <FiSend className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#161726]/95 hover:bg-[#1f1f32] backdrop-blur-xl border border-white/20 text-white shadow-[0_15px_40px_-10px_rgba(22,23,38,0.5)] hover:scale-105 active:scale-95 transition-all group"
        aria-label="Toggle AI Assistant"
      >
        <div className="relative">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#262ef2] to-[#6e73fa] flex items-center justify-center text-white text-xs shadow-sm">
            <FiZap className="w-3 h-3" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-[#161726]" />
        </div>
        <span className="text-xs font-mono font-bold tracking-tight">
          {isOpen ? "Close Agent" : "Ask Agent"}
        </span>
      </button>
    </div>
  );
};
