"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import AddClassForm from "../../../components/AddClassForm";
import EditClassForm from "../../../components/EditClassForm";
import { motion } from "framer-motion";

const MovingBar = () => {
  return (
    <>
      <motion.div
        layoutId="indicator"
        className="absolute bottom-0 left-0 right-0 h-[0.5px] dark:bg-white bg-black rounded-full"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <motion.div
        layoutId="highlight"
        className="absolute top-0 left-0 right-0 bottom-0 bg-glow "
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
};

const TeamPage = () => {
  const { token } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const [activeTab, setActiveTab] = useState<"add" | "edit" | null>(null);

  const handleTabClick = (tab: "add" | "edit") => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  useEffect(() => {
    if (!token) {
      router.push(`/${locale}/login`);
    }
  }, [token, locale, router]);

  if (!token) {
    return null;
  }

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-start">
      <div
        className={`flex space-x-4 mb-8 justify-center border-b-[0.5px] dark:border-zinc-700 border-zinc-300`}
      >
        <div
          onClick={() => handleTabClick("add")}
          className={`relative ${activeTab === "add" ? "selected-tab" : ""}`}
        >
          <button
            className={`px-8 py-4 rounded-xl text-md sm:text-xl font-semibold transition-all duration-300 ease-in-out ${
              activeTab === "add"
                ? ""
                : "text-gray-500 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
            }`}
          >
            Add Class
          </button>
          {activeTab === "add" && <MovingBar />}
        </div>
        <div
          onClick={() => handleTabClick("edit")}
          className={`relative ${activeTab === "edit" ? "selected-tab" : ""}`}
        >
          <button
            className={`px-8 py-4 rounded-xl text-md sm:text-xl font-semibold transition-all duration-300 ease-in-out ${
              activeTab === "edit"
                ? ""
                : "text-gray-500 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
            }`}
          >
            Edit Class
          </button>
          {activeTab === "edit" && <MovingBar />}
        </div>
      </div>
      {!activeTab && (
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            Welcome to the Team Panel
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Please select an option above to either add a new class or edit an
            existing class.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Click on "Add Class" to create a new class or "Edit Class" to manage
            existing classes.
          </p>
        </div>
      )}
      <div className="w-full max-w-4xl">
        {activeTab && (
          <div key={activeTab} className="flex flex-col space-y-8">
            {activeTab === "add" && <AddClassForm />}
            {activeTab === "edit" && <EditClassForm />}
            <button
              className="mt-4 px-4 py-2 bg-gray-600 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
              onClick={() => setActiveTab(null)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
