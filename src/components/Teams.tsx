import React from "react";
import People from "./parts/People";
import Button from "./parts/Button";

const Teams = () => {
  return (
    <div className="container my-20 ">
      <div className="header lg:flex  text-center items-center gap-5 mb-10">
        <h3 className="text-3xl p-1 font-bold m-0 inline-block lg:block self-center bg-csGreen rounded-md">Team</h3>
        <p className="max-w-[600px] lg:text-left lg:mr-auto"> Meet the skilled and experienced team behind our successful digital marketing strategies </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-5 justify-between   ">
        <People name="John Smith" title="CEO and Founder" img="/people1.png" linkedin="#" desc="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy" />
        <People name="Jane Doe" title="Director of Operations" img="/people2.png" linkedin="#" desc="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy" />
        <People name="Michael Brown" title="Senior SEO Specialist" img="/people3.png" linkedin="#" desc="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy" />
        <People name="Emily Johnson" title="PPC Manager" img="/people4.png" linkedin="#" desc="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy" />
        <People name="Brian Williams" title="Special Media Specialist" img="/people5.png" linkedin="#" desc="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy" />
        <People name="Sarah Kim" title="Content Creator" img="/people6.png" linkedin="#" desc="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy" />
      </div>
      <div className="flex w-[95%] lg:w-full mx-auto my-5 justify-end">
        <Button classes="" text="All Team Members" />
      </div>
    </div>
  );
};

export default Teams;
