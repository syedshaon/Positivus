import React from "react";
type Props = {
  classes: string;
  text: string;
  label: string;
};

const Button = ({ classes, text, label }: Props) => {
  return (
    <button aria-label={label} className={` ${classes} bg-black text-white rounded-xl py-2 px-5 w-full lg:w-auto hover:bg-white border-transparent hover:border-black border-2 hover:text-black duration-300 transition-all `}>
      {text}
    </button>
  );
};

export default Button;
