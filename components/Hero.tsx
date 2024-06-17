import Image from "next/image";
import React from "react";
import Company from "@/public/YTUBC.png";

const Hero = () => {
  const ImageArray = new Array(30).fill(0);

  return (
    <div className="relative py-12 flex justify-center items-center w-full overflow-hidden">
      <div className="flex flex-row gap-x-6">
        {ImageArray.map((_, index) => (
          <Image
            key={index}
            src={Company}
            alt={`logo-${index}`}
            width={64}
            height={64}
          />
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-[50vw] bg-gradient-to-r from-[#F3F4F6] to-transparent dark:from-zinc-900 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-[50vw] bg-gradient-to-l from-[#F3F4F6] to-transparent dark:from-zinc-900 pointer-events-none"></div>
    </div>
  );
};

export default Hero;
