"use client";
import React, { useEffect, useState } from "react";
import { fetchClasses } from "@/lib/api"; // Import the fetchClasses function
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { enUS, tr } from "date-fns/locale";
import FilterButtons from "./FilterButtons";
import ClassTable from "./ClassTable";
import LoadingState from "./LoadingState";
import ErrorMessage from "../Common/ErrorMessage";
import { Class } from "../../types/types";
import { parseISO, isBefore, isAfter } from "date-fns";

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
        const sortedData = data.sort((a: Class, b: Class) =>
          parseISO(a.date) > parseISO(b.date) ? 1 : -1
        );
        setClasses(sortedData);
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
    const classDate = parseISO(cls.date);
    const currentDate = new Date();
    if (filter === "all") return true;
    return filter === "upcoming"
      ? isAfter(classDate, currentDate)
      : isBefore(classDate, currentDate);
  });

  const handleFilterChange = (newFilter: "upcoming" | "past" | "all") => {
    setFilter(newFilter);
  };

  if (loading) return <LoadingState />;

  if (error) return <ErrorMessage error={error} />;

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
