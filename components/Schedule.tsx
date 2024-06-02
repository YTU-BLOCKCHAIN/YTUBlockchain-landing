"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GitHubIconWhite from "@/public/github-mark-white.png";
import GitHubIconBlack from "@/public/github-mark.png";
import Atahan from "@/public/atahan.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { format } from "date-fns";
import { enUS, tr } from "date-fns/locale";

type Class = {
  date: string;
  time: string;
  duration: string;
  topic: string;
  instructor: string;
  instructorImage: string;
  githubLink: string;
  isUpcoming: boolean;
  tech: string;
};

const classes: Class[] = [
  {
    date: "2024-06-03",
    time: "10:00 AM",
    duration: "1 hour",
    topic: "Introduction to Blockchain",
    instructor: "Atahan Yildirim",
    instructorImage: "https://via.placeholder.com/40",
    githubLink: "https://github.com/johndoe/blockchain-intro",
    isUpcoming: true,
    tech: "Blockchain",
  },
  {
    date: "2024-06-10",
    time: "2:00 PM",
    duration: "1.5 hours",
    topic: "Smart Contracts",
    instructor: "Atahan Yildirim",
    instructorImage: "https://via.placeholder.com/40",
    githubLink: "https://github.com/janesmith/smart-contracts",
    isUpcoming: true,
    tech: "Blockchain",
  },
  {
    date: "2024-05-10",
    time: "11:00 AM",
    duration: "2 hours",
    topic: "Decentralized Applications",
    instructor: "Atahan Yildirim",
    instructorImage: "https://via.placeholder.com/40",
    githubLink: "https://github.com/alicejohnson/dapps",
    isUpcoming: false,
    tech: "Blockchain",
  },
  {
    date: "2024-05-03",
    time: "1:00 PM",
    duration: "1 hour",
    topic: "Blockchain Security",
    instructor: "Atahan Yildirim",
    instructorImage: "https://via.placeholder.com/40",
    githubLink: "https://github.com/bobbrown/blockchain-security",
    isUpcoming: false,
    tech: "Blockchain",
  },
  // dummy
];

const Schedule: React.FC = () => {
  const t = useTranslations("Classes");
  const [filter, setFilter] = useState<"upcoming" | "past" | "all">("upcoming");

  const locale = t("locale") === "tr" ? tr : enUS;

  const filteredClasses = classes.filter((cls) => {
    if (filter === "all") return true;
    return filter === "upcoming" ? cls.isUpcoming : !cls.isUpcoming;
  });

  return (
    <div className="w-full ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto overflow-x-auto"
      >
        <div className="w-full flex flex-row">
          <button
            className={`px-4 py-4 rounded-tl w-full border-b border-t border-l border-r dark:border-gray-700 border-gray-300 ${
              filter === "upcoming"
                ? "dark:bg-gray-700 bg-gray-300 "
                : "dark:bg-gray-800 bg-white  "
            }`}
            onClick={() => setFilter("upcoming")}
          >
            {t("Upcoming")}
          </button>
          <button
            className={`px-4 py-4 w-full border-b border-t border-r dark:border-gray-700 border-gray-300 ${
              filter === "past"
                ? "dark:bg-gray-700 bg-gray-300 "
                : "dark:bg-gray-800 bg-white "
            }`}
            onClick={() => setFilter("past")}
          >
            {t("Past")}
          </button>
          <button
            className={`px-4 py-4 rounded-tr w-full border-b border-t border-r dark:border-gray-700 border-gray-300 ${
              filter === "all"
                ? "dark:bg-gray-700 bg-gray-300 "
                : "dark:bg-gray-800 bg-white "
            }`}
            onClick={() => setFilter("all")}
          >
            {t("All")}
          </button>
        </div>
        <table className="min-w-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-gray-300">
          <tbody>
            {filteredClasses.map((cls, index) => (
              <React.Fragment key={index}>
                <tr className="border-b dark:border-gray-700 border-gray-300">
                  <td className="dark:bg-gray-700 bg-gray-300  p-4" colSpan={2}>
                    {format(new Date(cls.date), "EEE, MMMM d", { locale })}
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700 border-gray-300">
                  <td className="px-4 py-2 border-r dark:border-gray-700 border-gray-300 text-center">
                    <div className="text-sm dark:text-gray-400 text-gray-600">
                      {cls.time} - {cls.duration} -{" "}
                      <span className=" font-bold">EFF104</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                      <div className="flex flex-col md:flex-row md:items-center md:w-full">
                        <div className="flex-grow">
                          <div className="font-bold text-lg text-black dark:text-white">
                            {cls.topic}
                          </div>
                          <div className="flex items-center mt-2">
                            <Image
                              src={Atahan}
                              alt="Instructor"
                              className="w-7 h-7 rounded-full mr-2"
                            />
                            <div className="text-gray-700 dark:text-gray-300 font-medium">
                              {cls.instructor}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-end mt-2 md:mt-0 md:ml-auto">
                          <button
                            className={`text-xl ${
                              cls.isUpcoming
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-blue-500"
                            }`}
                            disabled={cls.isUpcoming}
                            onClick={() =>
                              !cls.isUpcoming &&
                              window.open(cls.githubLink, "_blank")
                            }
                          >
                            <Image
                              src={GitHubIconBlack}
                              alt="GitHub Icon"
                              className={`dark:hidden block ${
                                cls.isUpcoming && "opacity-50"
                              }`}
                              width={24}
                              height={24}
                            />
                            <Image
                              src={GitHubIconWhite}
                              alt="GitHub Icon"
                              className={`dark:block hidden ${
                                cls.isUpcoming && "opacity-50"
                              }`}
                              width={24}
                              height={24}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default Schedule;
