import React from "react";
import Button from "./parts/Button";
import Image from "next/image";

const Happen = () => {
  return (
    <div className="relative container mb-20 text-center lg:text-left ">
      <div className="bg-csLGray p-10 rounded-2xl">
        <h3 className="font-bold text-xl mb-5">Lets make things happen</h3>
        <p className="mb-5  max-w-[500px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <Button text="Get your free proposal" />
      </div>

      <Image
        src="/happen.png"
        height={359}
        width={359}
        alt="make it happen"
        className="h-[120%] hidden lg:block w-auto absolute -top-5 
      right-32 -bottom-5"
      />
    </div>
  );
};

export default Happen;
