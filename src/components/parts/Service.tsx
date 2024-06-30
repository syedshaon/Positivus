import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  title1: string;
  title2: string;
  img: string;
  url: string;
  bg: string;
  hbg: string;
  bbg: string;
  bCol: string;
  tCol: string;
};

const Service = ({ title1, title2, img, url, bg, hbg, bbg, bCol, tCol }: Props) => {
  return (
    <div className={`w-[95%] lg:w-[45%] p-10 border-black border rounded-3xl border-b-4 flex justify-between items-stretch min-h-[250px] ${bg}`}>
      <div className="flex-col gap-10 items-start justify-between">
        <div className="flex   flex-col  items-start ">
          <h3 className={`   lg:text-2xl inline-block p-1 rounded-md   ${hbg}  `}>{title1}</h3>
          <h3 className={` text-lg lg:text-2xl inline-block p-1 rounded-md mb-20    -mt-1 ${hbg}`}>{title2}</h3>
        </div>
        <a href={url} className="flex items-center  gap-4">
          <button aria-label={title1} className={`${bbg} ${bCol} -rotate-45 p-1 rounded-full`}>
            <FaArrowRight className="text-xl" />
            <span className="sr-only">{title1}</span>
          </button>
          <span className={`${tCol} hidden lg:block`}>Learn more</span>
        </a>
      </div>
      <div className="flex items-end justify-center">
        <Image className="w-[150px] h-auto" src={img} width={210} height={167} alt="service" />
      </div>
    </div>
  );
};

export default Service;
