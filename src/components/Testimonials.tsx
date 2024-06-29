import React from "react";
import Slider from "./parts/Slider";

const Testimonials = () => {
  return (
    <div className="container my-20 ">
      <div className="header lg:flex  text-center items-center gap-5 mb-10">
        <h3 className="text-3xl p-1 font-bold m-0 inline-block lg:block self-center bg-csGreen rounded-md">Testimonials</h3>
        <p className="max-w-[600px] lg:text-left lg:mr-auto"> Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services </p>
      </div>
      <Slider />
    </div>
  );
};

export default Testimonials;
