import React from "react";
import Service from "./parts/Service";

const Services = () => {
  return (
    <div className="container my-20">
      <div className="header lg:flex  text-center gap-5">
        <h3 className="text-3xl p-1 inline-block font-bold m-0 self-center bg-csGreen rounded-md">Services</h3>
        <p className="max-w-[600px] lg:text-left lg:mr-auto">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>

      <div className="mt-20 flex flex-wrap gap-5 justify-between   ">
        <Service bg="bg-csLGray" hbg="bg-csGreen" bbg="bg-black" bCol="text-csGreen" tCol="text-black" title1="Search engine" title2="optimization" img="/service-1.png" url="#" />
        <Service bg="bg-csGreen" hbg="bg-white" bbg="bg-black" bCol="text-csGreen" tCol="text-black" title1="Pay-per-click" title2="advertising" img="/service-2.png" url="#" />
        <Service bg="bg-black" hbg="bg-white" bbg="bg-white" bCol="text-black" tCol="text-white" title1="Social Media" title2="Marketing" img="/service-3.png" url="#" />
        <Service bg="bg-csLGray" hbg="bg-csGreen" bbg="bg-black" bCol="text-csGreen" tCol="text-black" title1="Email" title2="Marketing" img="/service-4.png" url="#" />

        <Service bg="bg-csGreen" hbg="bg-white" bbg="bg-black" bCol="text-csGreen" tCol="text-black" title1="Search engine" title2="optimization" img="/service-5.png" url="#" />

        <Service bg="bg-black" hbg="bg-white" bbg="bg-white" bCol="text-black" tCol="text-white" title1="Search engine" title2="optimization" img="/service-6.png" url="#" />
      </div>
    </div>
  );
};

export default Services;
