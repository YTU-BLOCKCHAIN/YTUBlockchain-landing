"use client";
import React, { useEffect, useState } from "react";
import { fetchClasses } from "@/lib/api"; // Import the fetchClasses function
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { enUS, tr } from "date-fns/locale";
import FilterButtons from "./FilterButtons";
import ClassTable from "./ClassTable";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import { Class } from "./types";

const Schedule: React.FC = () => {
  const t = useTranslations("Classes");
  const [filter, setFilter] = useState<"upcoming" | "past" | "all">("upcoming");
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const locale = t("locale") === "tr" ? tr : enUS;

  useEffect(() => {
    const getClasses = async () => {
      setLoading(true);
      try {
        const data = await fetchClasses();
        setClasses(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching classes");
        console.error("Error fetching classes", error);
        setLoading(false);
      }
    };
    getClasses();
  }, []);

  const filteredClasses = classes.filter((cls) => {
    if (filter === "all") return true;
    return filter === "upcoming" ? cls.isUpcoming : !cls.isUpcoming;
  });

  const handleFilterChange = (newFilter: "upcoming" | "past" | "all") => {
    setFilter(newFilter);
  };

  if (loading) return <LoadingState />;

  if (error) return <ErrorState error={error} />;

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

export default Schedule;
