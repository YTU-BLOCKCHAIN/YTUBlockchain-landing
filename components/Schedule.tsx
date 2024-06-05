"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GitHubIconWhite from "@/public/github-mark-white.png";
import GitHubIconBlack from "@/public/github-mark.png";
import Atahan from "@/public/atahan.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Locale, format, parse } from "date-fns";
import { enUS, tr } from "date-fns/locale";
import AddCalendar from "@/public/addCalendar.png";
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

  const handleFilterChange = (newFilter: "upcoming" | "past" | "all") => {
    setFilter(newFilter);
  };

  return (
    <div className="w-full p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto overflow-x-auto"
      >
        <FilterButtons
          filter={filter}
          onFilterChange={handleFilterChange}
          t={t}
        />
        <ClassTable classes={filteredClasses} locale={locale} t={t} />
      </motion.div>
    </div>
  );
};

const FilterButtons: React.FC<{
  filter: "upcoming" | "past" | "all";
  onFilterChange: (filter: "upcoming" | "past" | "all") => void;
  t: any;
}> = ({ filter, onFilterChange, t }) => (
  <div className="w-full flex flex-row">
    {["upcoming", "past", "all"].map((filterType) => (
      <button
        key={filterType}
        className={`px-4 py-4 w-full border-b border-t border-r dark:border-gray-700 border-gray-300 ${
          filter === filterType
            ? "dark:bg-gray-700 bg-gray-300"
            : "dark:bg-gray-800 bg-white"
        }`}
        onClick={() =>
          onFilterChange(filterType as "upcoming" | "past" | "all")
        }
      >
        {t(filterType.charAt(0).toUpperCase() + filterType.slice(1))}
      </button>
    ))}
  </div>
);

const ClassTable: React.FC<{
  classes: Class[];
  locale: Locale;
  t: any;
}> = ({ classes, locale, t }) => (
  <table className="min-w-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-gray-300">
    <tbody>
      {classes.map((cls, index) => (
        <React.Fragment key={index}>
          <tr className="border-b dark:border-gray-700 border-gray-300">
            <td className="dark:bg-gray-700 bg-gray-300 p-4" colSpan={2}>
              {format(new Date(cls.date), "EEE, MMMM d", { locale })}
            </td>
          </tr>
          <ClassRow cls={cls} />
        </React.Fragment>
      ))}
    </tbody>
  </table>
);

const ClassRow: React.FC<{ cls: Class }> = ({ cls }) => {
  const addToGoogleCalendar = (cls: Class) => {
    const startTime = parse(
      `${cls.date} ${cls.time}`,
      "yyyy-MM-dd h:mm a",
      new Date()
    );
    const endTime = new Date(startTime);

    const durationParts = cls.duration.split(" ");
    if (durationParts[1] === "hours" || durationParts[1] === "hour") {
      endTime.setHours(startTime.getHours() + parseInt(durationParts[0]));
    } else if (
      durationParts[1] === "minutes" ||
      durationParts[1] === "minute"
    ) {
      endTime.setMinutes(startTime.getMinutes() + parseInt(durationParts[0]));
    }

    const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      cls.topic
    )}&dates=${format(startTime, "yyyyMMdd'T'HHmmss'Z'")}%2F${format(
      endTime,
      "yyyyMMdd'T'HHmmss'Z'"
    )}&details=${encodeURIComponent(
      `Instructor: ${cls.instructor}\nGitHub: ${cls.githubLink}`
    )}&location=${encodeURIComponent("EFF104")}&sf=true&output=xml`;

    window.open(googleCalendarLink, "_blank");
  };

  return (
    <tr className="border-b dark:border-gray-700 border-gray-300">
      <td className="px-4 py-2 border-r dark:border-gray-700 border-gray-300 text-center">
        <div className="text-sm dark:text-gray-400 text-gray-600">
          {cls.time} - {cls.duration} -{" "}
          <span className="font-bold">EFF104</span>
        </div>
      </td>
      <td className="px-4 py-2">
        <div className="flex flex-col md:flex-row items-start md:items-center">
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
          <div className="flex flex-row items-center justify-center mt-2 md:mt-0 md:ml-auto space-y-2 space-x-4">
            <button
              className={`text-xl ${
                cls.isUpcoming
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-500"
              }`}
              disabled={cls.isUpcoming}
              onClick={() =>
                !cls.isUpcoming && window.open(cls.githubLink, "_blank")
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
            {cls.isUpcoming && (
              <button
                className="text-white -translate-y-1"
                onClick={() => addToGoogleCalendar(cls)}
              >
                <Image
                  src={AddCalendar}
                  alt="Add to Calendar"
                  width={24}
                  height={24}
                />
              </button>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Schedule;
