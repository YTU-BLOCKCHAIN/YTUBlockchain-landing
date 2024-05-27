"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none"
    >
      {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
