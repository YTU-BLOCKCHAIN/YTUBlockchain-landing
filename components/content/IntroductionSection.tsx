"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React from "react";

const IntroductionSection = () => {
  const t = useTranslations("WhoAreWe");

  return (
    <section className="text-center sm:px-4 h-[50vh] justify-center items-center flex flex-col">
      <div className="h-fit w-full overflow-hidden">
        <h2 className="sm:text-9xl text-7xl font-black mb-8 tracking-tight">
          YTU BLOCKCHAIN
        </h2>
      </div>
    </section>
  );
};

export default IntroductionSection;
