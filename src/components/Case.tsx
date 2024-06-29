import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Case = () => {
  return (
    <div className="container my-10">
      <div className="header lg:flex  text-center gap-5 mb-20">
        <h3 className="text-3xl p-1 font-bold m-0 inline-block lg:block self-center bg-csGreen rounded-md">Case Studies</h3>
        <p className="max-w-[600px] lg:text-left lg:mr-auto">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies </p>
      </div>

      <div className="  lg:flex items-center justify-between lg:bg-black rounded-2xl lg:p-10  gap-7 text-center lg:text-left">
        <div className="lg:border-r-2 lg:border-white bg-black p-10 lg:p-3 rounded-2xl lg:rounded-none lg:bg-transparent">
          <p className="text-white">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
          <a href="#" className=" mt-5 flex justify-center lg:justify-start items-center gap-4">
            <span className="text-csGreen">Learn more</span>
            <button className="text-csGreen">
              <FaArrowRight className="text-xl -rotate-45" />
            </button>
          </a>
        </div>
        <div className="lg:border-r-2 mt-10 lg:mt-0 lg:border-white bg-black p-10 lg:p-0 rounded-2xl lg:rounded-none lg:bg-transparent">
          <p className="text-white">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
          <a href="#" className=" mt-5 flex justify-center lg:justify-start items-center gap-4">
            <span className="text-csGreen">Learn more</span>
            <button className="text-csGreen">
              <FaArrowRight className="text-xl -rotate-45" />
            </button>
          </a>
        </div>
        <div className="  bg-black p-10 mt-10 lg:mt-0 lg:p-0 rounded-2xl lg:rounded-none lg:bg-transparent">
          <p className="text-white">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
          <a href="#" className=" mt-5 flex justify-center lg:justify-start items-center gap-4">
            <span className="text-csGreen">Learn more</span>
            <button className="text-csGreen">
              <FaArrowRight className="text-xl -rotate-45" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Case;
