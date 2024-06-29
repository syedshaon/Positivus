"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const faq = [
  {
    id: "1",
    ques: "Consultation",
    ans: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "2",
    ques: "Research and Strategy Development",
    ans: "omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus",
  },
  {
    id: "3",
    ques: "Implementation",
    ans: " fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus",
  },
  {
    id: "4",
    ques: "Monitoring and Optimization",
    ans: " nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus",
  },
  {
    id: "5",
    ques: "Reporting and Communication",
    ans: "  eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus",
  },
  {
    id: "6",
    ques: "Continual Improvement",
    ans: "Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus",
  },
];

const Faq = () => {
  const [activeItem, setActiveItem] = useState("1");
  return (
    <div className="container my-20 ">
      <div className="header lg:flex  text-center items-center gap-5 mb-10">
        <h3 className="text-3xl p-1 font-bold m-0 inline-block lg:block self-center bg-csGreen rounded-md">Our Working Process</h3>
        <p className="max-w-[600px] lg:text-left lg:mr-auto"> Step-by-Step Guide to Achieving Your Business Goals </p>
      </div>

      <div className="  space-y-8  ">
        {faq.map((f) => {
          return (
            <div key={f.id} className={`${activeItem === f.id ? "bg-csGreen" : "bg-csLGray"} border border-black rounded-2xl px-5 py-2 overflow-hidden`}>
              <button className="flex items-center justify-between w-full   py-1">
                <h5 className="font-semibold text-left text-lg md:text-2xl">
                  <span className="font-bold mr-2 ">0{f.id}</span> {f.ques}
                </h5>

                <div className="  p-1 rounded-full">
                  {activeItem !== f.id ? (
                    <div
                      className="border border-black rounded-full p-1 text-xs"
                      onClick={() => {
                        setActiveItem(f.id);
                      }}
                    >
                      <FaPlus />
                    </div>
                  ) : (
                    <div
                      className="border border-black rounded-full p-1 text-xs"
                      onClick={() => {
                        setActiveItem("");
                      }}
                    >
                      <FaMinus />
                    </div>
                  )}
                </div>

                {/* */}
              </button>
              {activeItem === f.id && <hr className=" border-gray-700" />}
              <p className={`${activeItem === f.id && "py-4 transition-faq-active"}  overflow-hidden    text-sm   transition-faq duration-300 ease-in-out `}>{f.ans}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
