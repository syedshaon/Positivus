import React from "react";
import Image from "next/image";
import Button from "./parts/Button";

const Header = () => {
  return (
    <div className="  lg:py-5 grid justify-items-center items-center grid-cols-1 lg:grid-cols-2 grid-rows-3  gap-5      container  lg:mt-10  ">
      <div className="    w-full text-center lg:text-left text-3xl font-bold  lg:col-start-1 lg:col-end-2 row-start-1 row-end-2 flex items-center justify-start">
        <h2 className=" lg:max-w-[400px]  ">Navigating the digital landscape for success</h2>
      </div>

      <div className="w-full    lg:col-start-1 lg:col-end-2 lg:row-start-2 row-start-3 row-end-4 lg:max-w-[400px]  mr-auto flex  flex-col  items-center lg:items-start  text-center lg:text-left ">
        <p className="mb-5">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>

        <Button text="Book a consulation" />
      </div>
      <Image className=" h-[200px] max-h-[300px] w-auto lg:h-auto lg:col-start-2 lg:col-end-3 row-start-2 row-end-3 lg:row-start-1 lg:row-end-4" src="/mike.png" alt="announce" height={601} width={515} />
    </div>
  );
};

export default Header;
