"use client";
import SingleSlide from "./SingleSlide";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "@/app/swiper.css";

// rev, key
type Review = {
  review: string;
  name: string;
  title: string;
};

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Reviews: Review[] = [
  { review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", title: "Marketing Director at XYZ Corp" },
  { review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "Jane Doe", title: "CEO at ABC Inc" },
  { review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "James Brown", title: "Manager at DEF Ltd" },
  { review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "John Smith", title: "Marketing Director at XYZ Corp" },
  { review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "Jane Doe", title: "CEO at ABC Inc" },
  { review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "James Brown", title: "Manager at DEF Ltd" },
];

export default function Slider() {
  const swiper = useSwiper();
  return (
    <div className=" my-10 bg-black py-10 px-5 xl:px-0 rounded-2xl relative">
      <Swiper slidesPerView={"auto"} centeredSlides={true} spaceBetween={30} navigation={true} pagination={{ clickable: true }} scrollbar={{ draggable: true }} modules={[Navigation, Pagination, Scrollbar, A11y]} className="mySwiper">
        {Reviews.map((rev, key) => (
          <SwiperSlide key={key}>
            <SingleSlide rev={rev} />
          </SwiperSlide>
        ))}
      </Swiper>
      {swiper && <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>}
    </div>
  );
}
