import React from "react";
import Link from "next/link";

interface FooterProps {
  locale: string;
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  return (
    <div
      className="relative h-[300px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+300px)] -top-[100vh]">
        <div className="h-[300px] sticky top-[calc(100vh-300px)]">
          <div className="bg-gradient-to-b from-zinc-200 to-[#d1d5dbce] backdrop-blur-sm dark:bg-zinc-800/30 dark:from-inherit p-4 py-8 px-4 md:px-12 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase">Navigation</h3>
                <Link href={locale + "/"}>
                  <p className="hover:underline">Home</p>
                </Link>
                <Link href={locale + "/events"}>
                  <p className="hover:underline">Events</p>
                </Link>
                <Link href={locale + "/education"}>
                  <p className="hover:underline">Education</p>
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase">Contact</h3>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:contact@ytublockchain.com"
                    className="underline"
                  >
                    contact@ytublockchain.com
                  </a>
                </p>
                <p>
                  Made with <span className="text-red-500">❤️</span> by YTU
                  Blockchain Club
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-10">
              <h1 className="text-4xl md:text-[5vw] leading-tight md:leading-[0.8]">
                YTU Blockchain
              </h1>
              <p className="mt-4 md:mt-0">©2024 YTU Blockchain Club</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
