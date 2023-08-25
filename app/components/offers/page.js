"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import One from "./images/pizza.png";
import Image from "next/image";
import "./styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 5,
  },
  miniDesktop: {
    breakpoint: { max: 1600, min: 1300 },
    items: 4,
  },
  miniDesktop2: {
    breakpoint: { max: 1300, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 665 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 665, min: 0 },
    items: 1,
  },
};

export default function Offers() {
  return (
    <div className="m-auto pt-10 pb-3 carouselContainer">
      <Carousel responsive={responsive}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-[#fee6b6] p-3 text-black rounded-3xl entireSlider"
          >
            <div>
              <div className="mb-2">Free Pizza</div>
              <div className="mb-2">1 + 1 = 2</div>
              <div className="bg-[#e5be70] rounded-3xl text-black cursor-pointer w-28 text-center p-1 font-semibold">
                Order Now
              </div>
            </div>
            <Image src={One} alt="Test" className="sliderImage" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
