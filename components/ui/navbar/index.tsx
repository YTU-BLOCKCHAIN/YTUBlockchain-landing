import Image from "next/image";
import React from "react";
import DarkModeToggle from "../DarkModeToggle";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const Navbar: React.FC = () => {
  return (
    <div className="fixed z-10 w-full items-center justify-between font-mono text-sm lg:flex border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-sm dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit p-4 lg:dark:bg-zinc-800/30 md:px-12 px-4">
      <div className="flex flex-row justify-between w-full">
        <div className="flex items-center">
          <div className="pr-2">
            <Image
              src="/YTUBC.png"
              alt="Vercel Logo"
              width={44}
              height={44}
              priority
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <LocaleSwitcher />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
