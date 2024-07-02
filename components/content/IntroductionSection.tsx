"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React from "react";

const IntroductionSection = () => {
  const t = useTranslations("WhoAreWe");

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="text-center py-8 sm:px-4 ">
      <motion.h2
        className="sm:text-9xl text-7xl font-bold mb-8"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {t("whoAreWe")}
      </motion.h2>
      <motion.p
        className="text-xl sm:text-2xl dark:text-white/60 text-black/60 mb-8"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ delay: 0.3 }}
      >
        {t("description1")}
      </motion.p>
    </section>
  );
};

export default IntroductionSection;
