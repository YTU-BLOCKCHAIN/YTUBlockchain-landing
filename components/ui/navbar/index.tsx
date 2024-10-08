"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import DarkModeToggle from "../DarkModeToggle";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { useAuth } from "@/context/AuthContext";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const linkVariants = {
  hover: {
    y: -2,
    transition: { type: "spring", stiffness: 300 },
  },
};

const navData = [
  { href: "/", textKey: "HomePage", basePath: false },
  { href: "/education", textKey: "Education", basePath: true },
  { href: "/blog", textKey: "Blogs", basePath: false },
];

const NavbarLink = ({
  navItem,
  basePath,
  onClick,
}: {
  navItem: any;
  basePath: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}) => {
  const t = useTranslations("Navbar");
  return (
    <motion.div
      key={navItem.textKey}
      variants={linkVariants}
      whileHover="hover"
    >
      <Link
        href={`${basePath}/${navItem.href}`}
        className={`relative group text-gray-800 dark:text-gray-200 ${
          navItem.external
            ? "text-sm bg-gray-200 dark:bg-gray-700 rounded px-2 py-1"
            : ""
        }`}
        target={navItem.external ? "_blank" : "_self"}
        onClick={onClick}
      >
        {t(navItem.textKey)}
        {!navItem.external && (
          <span className="block h-1 w-1 bg-blue-500 rounded-full absolute bottom-0 left-1/2 transform translate-y-2 -translate-x-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
        )}
      </Link>
    </motion.div>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const basePath = pathname.split("/").slice(0, 2).join("/");
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { isLoggedIn, logout } = useAuth();
  const t = useTranslations("Navbar");

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 70) {
          if (currentScrollY > lastScrollY) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isVisible) {
      gsap.to(".navbar", { y: 0, duration: 0.4, ease: "power1.inOut" });
    } else {
      gsap.to(".navbar", { y: "-100%", duration: 0.4, ease: "power1.inOut" });
    }
  }, [isVisible]);

  const handleShow = () => {
    setShow(!show);
    document.body.style.overflow = show ? "auto" : "hidden";
  };

  const handleLinkClick = () => {
    setShow(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="navbar fixed z-20 w-full items-center justify-between font-mono text-sm lg:flex px-4 sm:px-8 pt-2">
      <div className="flex flex-row bg-[#F3F4F6] dark:bg-[#18181B] justify-between w-full border-2 border-zinc-200  dark:border-neutral-800 p-4 md:px-12 rounded-xl">
        <Link
          href={`${basePath}`}
          className="flex items-center"
          onClick={handleLinkClick}
        >
          <Image
            src="/YTUBC.png"
            alt="YTUBC Logo"
            width={44}
            height={44}
            priority
          />
        </Link>
        <div className="hidden sm:flex items-center space-x-4">
          {navData.map((navItem) => (
            <NavbarLink
              key={navItem.textKey}
              navItem={navItem}
              basePath={basePath}
              onClick={handleLinkClick}
            />
          ))}
          {isLoggedIn && (
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">
                  {t("dashboard")}
                  <ChevronDownIcon className="w-4 h-4" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="edit">
                  <a
                    href={`${basePath}/team`}
                    className="text-gray-800 dark:text-gray-200"
                    onClick={handleLinkClick}
                  >
                    {t("goToDashboard")}
                  </a>
                </DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                  onClick={logout}
                >
                  {t("logOut")}
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}

          <Link
            href="https://www.notion.so/your-notion-page"
            className={`relative group text-gray-800 dark:text-gray-200 "text-sm bg-gray-200 dark:bg-gray-700 rounded px-2 py-1"`}
            target="_blank"
          >
            {t(`Doc`)}
          </Link>

          <LocaleSwitcher />
          <DarkModeToggle />
        </div>
        <div className="sm:hidden flex items-center z-[9999]">
          <button
            onClick={handleShow}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: show ? 90 : 0 }}
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
                  d={show ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </motion.div>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 bottom-0 flex justify-center items-center w-full h-[100dvh] text-center transition-all ease-linear overflow-hidden duration-300 ${
          show
            ? "dark:bg-[#121212] bg-[#d3d3d4] z-[100] sm:bg-opacity-95 bg-opacity-100 backdrop-blur-3xl"
            : "right-[-100%] dark:bg-[#121212] bg-[#F3F4F6] z-[100]"
        }`}
      >
        <div className="h-full w-full flex flex-col items-center">
          <div className="flex flex-col justify-center gap-y-[32px] items-center h-full">
            {navData.map((navItem, index) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 * index }}
                key={navItem.textKey}
              >
                <NavbarLink
                  navItem={navItem}
                  basePath={basePath}
                  onClick={handleLinkClick}
                />
              </motion.div>
            ))}
            <motion.div
              className="flex flex-col items-center gap-y-[32px]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              {isLoggedIn && (
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">
                      {t("dashboard")}
                      <ChevronDownIcon className="w-4 h-4" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="edit">
                      <a
                        href={`${basePath}/team`}
                        className="text-gray-800 dark:text-gray-200"
                        onClick={handleLinkClick}
                      >
                        {t("goToDashboard")}
                      </a>
                    </DropdownItem>
                    <DropdownItem
                      key="delete"
                      className="text-danger"
                      color="danger"
                      onClick={logout}
                    >
                      {t("logOut")}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              )}
              <Link
                href="https://www.notion.so/your-notion-page"
                className={`relative group text-gray-800 dark:text-gray-200 "text-sm bg-gray-200 dark:bg-gray-700 rounded px-2 py-1"`}
                target="_blank"
              >
                {t(`Doc`)}
              </Link>
              <LocaleSwitcher />
              <DarkModeToggle />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
