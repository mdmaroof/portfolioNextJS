import { MdWork, MdLocationOn } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { Heading } from "./heading";

interface Props {
  data: any;
}
export const HeaderComponent = ({ data }: Props) => {
  return (
    <div className="pt-40">
      <section>
        <Heading>{data?.name ?? null}</Heading>
        <div className="flex text-xl gap-10 my-3">
          <div className="flex gap-2 items-center">
            <MdWork />
            {data?.position ?? null}
          </div>
          <div className="flex gap-2 items-center">
            <MdLocationOn />
            {data?.location ?? null}
          </div>
        </div>
        <div className="flex my-10 gap-2 justify-center items-center bg-red-600 py-4 rounded-md w-[200px] cursor-pointer hover:bg-red-700 duration-100">
          <FaPaperPlane />
          Message
        </div>
      </section>

      <section className="mt-40 mb-20">
        <Heading>Summary</Heading>
        <div className="mt-4 text-xl font-light text-justify max-w-[800px]">{data?.summary ?? null}</div>
      </section>
    </div>
  );
};
