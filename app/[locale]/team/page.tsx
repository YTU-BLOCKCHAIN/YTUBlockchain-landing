"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import AddClassForm from "../../../components/AddClassForm";
import EditClassForm from "../../../components/EditClassForm";
import { motion } from "framer-motion";

const AdminPage = () => {
  const { token } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const [activeTab, setActiveTab] = useState("add");

  useEffect(() => {
    if (!token) {
      router.push(`/${locale}/login`);
    }
  }, [token, locale, router]);

  if (!token) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-800 p-8 flex flex-col items-center justify-center">
      <div className="flex space-x-4 mb-8 justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "add"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-zinc-700 dark:text-white"
          }`}
          onClick={() => setActiveTab("add")}
        >
          Add Class
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "edit"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-zinc-700 dark:text-white"
          }`}
          onClick={() => setActiveTab("edit")}
        >
          Edit Class
        </motion.button>
      </div>
      <div className="w-full max-w-6xl bg-white dark:bg-zinc-900 shadow-md rounded-lg p-8">
        <div className="flex flex-col space-y-8">
          {activeTab === "add" && <AddClassForm />}
          {activeTab === "edit" && <EditClassForm />}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
