import React from "react";

const Button = ({ classes, text }) => {
  return <button className={` ${classes} bg-black text-white rounded-xl py-2 px-5 w-full lg:w-auto hover:bg-white border-transparent hover:border-black border-2 hover:text-black duration-300 transition-all `}> {text}</button>;
};

export default Button;
