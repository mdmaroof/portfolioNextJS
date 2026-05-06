import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Heading } from "./heading";

interface Props {
  data: any;
}
export const HeaderComponent = ({ data }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const close = () => {
    setModalOpen(false);
  };

  const sendMessage = () => {
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

    const payload = {
      name,
      message,
      email,
    };
    console.log(payload);
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
            className="w-full max-w-xl rounded-xl border border-white/10 bg-slate-900 p-5 text-slate-100 shadow-2xl shadow-black/30"
          >
            <div className="flex flex-row items-center justify-between border-b border-white/10 pb-3">
              <div className="text-lg font-semibold md:text-xl">Send Message</div>
              <div
                className="cursor-pointer text-xl text-slate-300 transition-colors hover:text-white md:text-2xl"
                onClick={close}
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="mt-4 flex flex-col w-full">
              <div className="flex flex-col my-2">
                <label className="mb-1 text-sm text-slate-300">Name</label>
                <input
                  type="name"
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-md border border-white/15 bg-slate-800 px-3 py-2 text-slate-100 outline-none transition-colors focus:border-sky-400"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="mb-1 text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-md border border-white/15 bg-slate-800 px-3 py-2 text-slate-100 outline-none transition-colors focus:border-sky-400"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="mb-1 text-sm text-slate-300">Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-md border border-white/15 bg-slate-800 px-3 py-2 text-slate-100 outline-none transition-colors focus:border-sky-400"
                  rows={3}
                />
              </div>

              <div
                onClick={sendMessage}
                className="mt-3 flex w-[120px] cursor-pointer items-center justify-center rounded-md bg-red-600 py-2 text-white transition-colors duration-100 hover:bg-red-700"
              >
                Send
              </div>
            </div>
          </div>
        </div>
      )}
      {/* modal close */}
      <div>
        <section>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <Heading>{data?.name ?? null}</Heading>
              <p className="mt-2 text-lg text-slate-200 md:text-xl">
                {data?.position ?? null}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
                <span className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1">
                  {data?.country ?? "India"}
                </span>
                <span className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1">
                  6+ years experience
                </span>
                <span className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1">
                  React • Next.js • React Native
                </span>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="flex w-[170px] items-center justify-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/70 py-3 font-medium text-slate-100 transition-colors duration-150 hover:bg-slate-800/80"
            >
              <FaPaperPlane />
              Contact
            </button>
          </div>
        </section>

        <section className="mt-8 md:mt-10">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
            Summary
          </h3>
          <div className="mt-3 rounded-xl border border-slate-800/70 bg-slate-950/40 p-4 text-justify text-base font-light leading-8 text-slate-200 md:p-5 md:text-lg">
            {data?.summary ?? null}
          </div>
        </section>
      </div>
    </>
  );
};
