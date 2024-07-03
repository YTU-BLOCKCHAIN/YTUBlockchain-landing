"use client";
import CountUp from "react-countup";
import React from "react";

const Header = () => {
  return (
    <div className="relative dark:bg-[#1D1D20]  bg-[#D9DBE0] overflow-hidden rounded-b-[64px]">
      <div className=" relative max-w-7xl mx-auto py-16 px-8">
        <h1 className="md:text-4xl text-xl font-bold text-center mb-8">
          Welcome to YTU Blockchain Events
        </h1>
        <p className="md:text-lg text-md text-center">
          At YTU Blockchain Club, we are dedicated to educating and empowering
          individuals about blockchain technology. Our events range from
          workshops and seminars to hands-on coding sessions and networking
          opportunities. Each event is carefully designed to provide both
          theoretical knowledge and practical skills. Whether you are a beginner
          or an expert, our events offer something valuable for everyone. Join
          us and be part of a thriving community that's shaping the future of
          technology.
        </p>
        <div className="text-center mt-8">
          <h2 className="text-xl font-bold">
            <CountUp
              end={164}
              duration={5}
              className="text-[#3b82f6] mr-2"
            />
            Events Held
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
