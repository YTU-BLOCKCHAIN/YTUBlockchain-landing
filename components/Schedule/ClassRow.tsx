import React from "react";
import Image from "next/image";
import { parse, format, parseISO, isAfter } from "date-fns";
import GitHubIconWhite from "@/public/github-mark-white.png";
import GitHubIconBlack from "@/public/github-mark.png";
import AddCalendar from "@/public/addCalendar.png";
import { Class } from "../../types/types";

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

  const classDate = parseISO(cls.date);
  const currentDate = new Date();
  const isUpcoming = isAfter(classDate, currentDate);

  return (
    <tr className="border-b dark:border-zinc-700 border-zinc-300 ">
      <td className="px-4 py-2 border-r dark:border-zinc-600 border-zinc-300 text-center  w-1/4">
        <div className="text-sm dark:text-gray-400 text-gray-600">
          {cls.time} - {cls.duration} -{" "}
          <span className="font-bold">
            {cls.ClassLocation ? cls.ClassLocation : "EEF104"}
          </span>
        </div>
      </td>
      <td className="px-4 py-2  w-3/4">
        <div className="flex flex-row items-center">
          <div className="flex-grow">
            <div className="font-bold text-sm md:text-lg text-black dark:text-white">
              {cls.topic}
            </div>
            <div className="flex items-center mt-2">
              {cls.instructorImage && (
                <Image
                  src={cls.instructorImage}
                  alt="Instructor"
                  className="w-7 h-7 rounded-full mr-2"
                  width={50}
                  height={50}
                />
              )}
              <div className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-lg">
                {cls.instructor}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-2 md:mt-0 md:ml-auto space-y-2 space-x-4">
            <button
              className={`text-xl ${
                isUpcoming
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-500"
              }`}
              disabled={isUpcoming}
              onClick={() =>
                !isUpcoming && window.open(cls.githubLink, "_blank")
              }
            >
              <Image
                src={GitHubIconBlack}
                alt="GitHub Icon"
                className={`dark:hidden block ${
                  isUpcoming ? "opacity-50" : "hover:scale-110"
                }`}
                width={24}
                height={24}
              />
              <Image
                src={GitHubIconWhite}
                alt="GitHub Icon"
                className={`dark:block hidden ${
                  isUpcoming ? "opacity-50" : "hover:scale-110"
                }`}
                width={24}
                height={24}
              />
            </button>
            {isUpcoming && (
              <button
                className="text-white -translate-y-1 hover:scale-110"
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

export default ClassRow;
