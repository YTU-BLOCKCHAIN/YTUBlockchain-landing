"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import DarkModeToggle from "../DarkModeToggle";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const linkVariants = {
  hover: {
    y: -2,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const Navbar: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const basePath = pathname.split("/").slice(0, 2).join("/");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-10 w-full items-center justify-between font-mono text-sm lg:flex border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-sm dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit p-4 lg:dark:bg-zinc-800/30 md:px-12 px-4">
      <div className="flex flex-row justify-between w-full">
        <Link href={`${basePath}`} className="flex items-center">
          <Image
            src="/YTUBC.png"
            alt="YTUBC Logo"
            width={44}
            height={44}
            priority
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-4">
          <motion.div variants={linkVariants} whileHover="hover">
            <Link
              // href={`${basePath}/events`}
              href="/"
              className="relative group text-gray-800 dark:text-gray-200"
            >
              {t("Events")}
              <span className="block h-1 w-1 bg-blue-500 rounded-full absolute bottom-0 left-1/2 transform translate-y-2 -translate-x-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover">
            <Link
              href={`${basePath}/education`}
              className="relative group text-gray-800 dark:text-gray-200"
            >
              {t("Education")}
              <span className="block h-1 w-1 bg-blue-500 rounded-full absolute bottom-0 left-1/2 transform translate-y-2 -translate-x-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover">
            <Link
              // href={`${basePath}/content`}
              href="/"
              className="relative group text-gray-800 dark:text-gray-200"
            >
              {t("Content")}
              <span className="block h-1 w-1 bg-blue-500 rounded-full absolute bottom-0 left-1/2 transform translate-y-2 -translate-x-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            </Link>
          </motion.div>
          <div className="ml-4">
            <Link
              href="https://www.notion.so/your-notion-page"
              className="relative group text-gray-800 dark:text-gray-200 text-sm bg-gray-200 dark:bg-gray-700 rounded px-2 py-1"
            >
              Doc
            </Link>
          </div>
          <LocaleSwitcher />
          <DarkModeToggle />
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </motion.div>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 mt-4">
          <Link
            href={`${basePath}/events`}
            className="relative group text-gray-800 dark:text-gray-200"
          >
            {t("Events")}
            <span className="block h-1 w-1 bg-blue-500 rounded-full absolute bottom-0 left-1/2 transform translate-y-2 -translate-x-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
          </Link>
          <Link
            href={`${basePath}/education`}
            className="relative group text-gray-800 dark:text-gray-200"
          >
            {t("Education")}
            <span className="block h-1 w-1 bg-blue-500 rounded-full absolute bottom-0 left-1/2 transform translate-y-2 -translate-x-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
          </Link>
          <Link
            href={`${basePath}/content`}
            className="relative group text-gray-800 dark:text-gray-200"
          >
            {t("Content")}
            <span className="block h-1 w-1 bg-blue-500 rounded-full absolute bottom-0 left-1/2 transform translate-y-2 -translate-x-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
          </Link>
          <Link
            href="https://www.notion.so/your-notion-page"
            className="relative group text-gray-800 dark:text-gray-200 text-sm bg-gray-200 dark:bg-gray-700 rounded px-2 py-1"
          >
            Doc
          </Link>
          <LocaleSwitcher />
          <DarkModeToggle />
        </div>
      )}
    </div>
  );
};

export default Navbar;
