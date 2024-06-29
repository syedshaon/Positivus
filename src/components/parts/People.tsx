import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

type Props = {
  name: string;
  title: string;
  img: string;
  linkedin: string;
  desc: string;
};

const People = ({ name, title, img, linkedin, desc }: Props) => {
  return (
    <div className={`w-[95%] lg:w-[30%] mx-auto p-4 border-black border rounded-3xl border-b-4 flex flex-col  items-stretch min-h-[250px]`}>
      <div className="flex gap-5  h-[103px] items-end justify-between">
        <Image className="w-[106px] h-auto" src={img} width={106} height={103} alt="service" />

        <div className=" mr-6  h-[103px]  flex-col  content-end relative justify-start     ">
          <h3 className={`   lg:text-xl    `}>{name}</h3>
          <h3 className={` text-sm     `}>{title}</h3>
          <a href={linkedin} className="flex absolute top-0 -right-5 text-csGreen bg-black   rounded-full justify-center text-xs w-5 h-5 items-center  gap-4">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <hr className=" h-[2px] w-full bg-gray-400 my-3 " />
      <div className="flex items-end justify-center">{desc}</div>
    </div>
  );
};

export default People;
