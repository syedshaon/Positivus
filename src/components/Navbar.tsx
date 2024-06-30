"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-csBlack p-4 md:p-6  ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-csBlack text-3xl flex gap-2 items-center ">
          <PiStarFourFill className="rotate-45" /> Positivus
        </div>
        <div className="hidden lg:flex lg:items-center space-x-6">
          <a href="#home" className="text-csBlack hover:text-csGray">
            About Us
          </a>
          <a href="#about" className="text-csBlack hover:text-csGray">
            Services
          </a>
          <a href="#services" className="text-csBlack hover:text-csGray">
            Use Cases
          </a>
          <a href="#contact" className="text-csBlack hover:text-csGray">
            Pricing
          </a>
          <a href="#contact" className="text-csBlack hover:text-csGray">
            Blog
          </a>
          <a href="#contact" className="text-csBlack border-csBlack border px-3 py-2 rounded-xl hover:bg-black hover:text-csGray">
            Request a quote
          </a>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-csBlack focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className=" lg:hidden bg-black text-white fixed top-0 left-0 w-screen h-screen flex justify-center items-center flex-col">
          <div className="lg:hidden absolute   top-5    right-12">
            <button aria-label="mobile menu" onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              <span className="sr-only">Menu Button</span>
            </button>
          </div>

          <a href="#home" className="block px-4 py-2 border-transparent hover:border-b-white  border-b-2 ">
            About Us
          </a>
          <a href="#home" className="block px-4 py-2 border-transparent hover:border-b-white  border-b-2 ">
            Services
          </a>
          <a href="#home" className="block px-4 py-2 border-transparent hover:border-b-white  border-b-2 ">
            Use Cases
          </a>
          <a href="#home" className="block px-4 py-2 border-transparent hover:border-b-white  border-b-2 ">
            Pricing
          </a>
          <a href="#home" className="block px-4 py-2 border-transparent hover:border-b-white  border-b-2 ">
            Blog
          </a>
          <a href="#home" className="block px-4 py-2 border-transparent hover:border-b-white  border-b-2 ">
            Request a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
