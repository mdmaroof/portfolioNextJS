import { useState } from "react";
import { MdWork, MdLocationOn } from "react-icons/md";
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
          className="fixed bg-modalBackground flex left-0 top-0 w-full h-full items-center justify-center z-50"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-[90%] md:w-[50%] bg-white text-black px-5 py-5"
          >
            <div className="flex flex-row justify-between items-center pb-2 border-b">
              <div className="text-lg md:text-xl">Send Message</div>
              <div
                className="text-xl md:text-2xl cursor-pointer"
                onClick={close}
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="mt-4 flex flex-col w-full">
              <div className="flex flex-col my-2">
                <label>Name</label>
                <input
                  type="name"
                  onChange={(e) => setName(e.target.value)}
                  className="border py-2 px-2"
                />
              </div>
              <div className="flex flex-col my-2">
                <label>Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="border py-2 px-2"
                />
              </div>
              <div className="flex flex-col my-2">
                <label>Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className="border py-2 px-2"
                  rows={3}
                />
              </div>

              <div
                onClick={sendMessage}
                className="py-2 w-[100px] rounded mt-3 bg-red-600 hover:bg-red-700 duration-100 cursor-pointer text-white flex items-center justify-center"
              >
                Send
              </div>
            </div>
          </div>
        </div>
      )}
      {/* modal close */}
      <div className="pt-20 md:pt-40">
        <section>
          <Heading>{data?.name ?? null}</Heading>
          <div className="flex text-md md:text-xl gap-10 my-3">
            <div className="flex gap-2 items-center">
              <MdWork />
              {data?.position ?? null}
            </div>
            <div className="flex gap-2 items-center">
              <MdLocationOn />
              {data?.location ?? null}
            </div>
          </div>
          <div
            onClick={() => setModalOpen(true)}
            className="flex my-6 md:my-10 gap-2 justify-center items-center bg-red-600 py-3 md:py-4 rounded-md w-[150px] md:w-[200px] cursor-pointer hover:bg-red-700 duration-100"
          >
            <FaPaperPlane />
            Message
          </div>
        </section>

        <section className="mt-10 md:mt-40 mb-20">
          <Heading>Summary</Heading>
          <div className="mt-4 text:lg md:text-xl font-light text-justify max-w-[800px]">
            {data?.summary ?? null}
          </div>
        </section>
      </div>
    </>
  );
};
