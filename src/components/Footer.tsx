import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="      container   mt-10   ">
      <div className="bg-black text-white rounded-t-2xl p-7  ">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl flex gap-2 items-center ">
            <PiStarFourFill className="rotate-45" /> Positivus
          </div>
          <div className="hidden text-sm lg:flex lg:items-center space-x-6">
            <a href="#home" className=" hover:text-csGray">
              About Us
            </a>
            <a href="#about" className=" hover:text-csGray">
              Services
            </a>
            <a href="#services" className=" hover:text-csGray">
              Use Cases
            </a>
            <a href="#contact" className=" hover:text-csGray">
              Pricing
            </a>
            <a href="#contact" className=" hover:text-csGray">
              Blog
            </a>
            <a href="#contact" className=" border-csBlack border px-3 py-2 rounded-xl hover:bg-black hover:text-csGray">
              Request a quote
            </a>
          </div>
          <div className="social text-black">
            <ul className="flex items-center gap-3">
              <li>
                <a aria-label="Facebook" className=" flex justify-center items-center w-[20px] h-[20px] bg-white rounded-full " href="#">
                  <FaFacebookF className="text-black  text-sm  " />
                </a>
              </li>
              <li>
                <a aria-label="Twitter" className=" flex justify-center items-center w-[20px] h-[20px] bg-white rounded-full " href="#">
                  <FaTwitter className="text-black  text-sm    " />
                </a>
              </li>
              <li>
                <a aria-label="Linkedin" className=" flex justify-center items-center w-[20px] h-[20px] bg-white rounded-full " href="#">
                  <FaLinkedinIn className="text-black   text-sm   " />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Second Line */}
        <div className=" my-10 text-center lg:text-left lg:flex justify-between items-center">
          <div className="contact text-sm  w-full lg:w-1/2 ">
            <h3 className=" text-black p-1 font-bold m-0 mb-5 !inline-block lg:block self-center bg-csGreen rounded-md">Contact Us</h3>
            <p className="text-xs">Email: info@positivus.com</p>
            <p className="my-2 text-xs">Phone: 555-567-8901</p>
            <p className="text-xs">Address: 1234 Main St Moonstone City, Stardust State 12345</p>
          </div>
          <div className="mt-8 lg:mt-0  w-full lg:w-1/2 bg-gray-700 p-7 rounded-md flex  flex-col  lg:flex-row   gap-4 justify-evenly">
            <input className="  bg-transparent rounded-xl py-2 px-5 border border-white placeholder:text-white " type="email" name="subEmail" id="subEmail" placeholder="Email" />
            <button className="w-full lg:w-auto bg-csGreen mt-3 lg:mt-0 text-black rounded-xl py-2 px-5  hover:bg-white border-transparent hover:border-black border-2 hover:text-black duration-300 transition-all ">Subscribe to News</button>
          </div>
        </div>
        {/* Third Line */}
        <div className="text-xs   ">
          <hr className="h-[1px] bg-white w-full" />
          <div className="flex items-center justify-center lg:justify-start mt-5 gap-5">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
