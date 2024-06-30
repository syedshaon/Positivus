import React from "react";

type Review = {
  review: string;
  name: string;
  title: string;
};

type Props = {
  rev: Review;
};

const SingleSlide = ({ rev }: Props) => {
  return (
    <div className="mb-20 text-left">
      <p className=" border border-csGreen p-5 rounded-2xl text-sm review-box relative z-0">{rev.review}</p>
      <div className="mt-7 ml-[50px]">
        <p className="text-csGreen">{rev.name} </p>
        <p>{rev.title}</p>
      </div>
    </div>
  );
};

export default SingleSlide;
