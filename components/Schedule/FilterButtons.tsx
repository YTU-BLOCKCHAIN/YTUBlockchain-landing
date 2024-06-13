import React from "react";

const FilterButtons: React.FC<{
  filter: "upcoming" | "past" | "all";
  onFilterChange: (filter: "upcoming" | "past" | "all") => void;
  t: any;
}> = ({ filter, onFilterChange, t }) => (
  <div className="w-full flex flex-row">
    {["upcoming", "past", "all"].map((filterType) => (
      <button
        key={filterType}
        className={`px-4 py-4 w-full border dark:border-zinc-600 border-zinc-300 ${
          filter === filterType
            ? "dark:bg-zinc-700 bg-zinc-300"
            : "dark:bg-zinc-800 bg-white"
        }`}
        onClick={() =>
          onFilterChange(filterType as "upcoming" | "past" | "all")
        }
      >
        {t(filterType.charAt(0).toUpperCase() + filterType.slice(1))}
      </button>
    ))}
  </div>
);

export default FilterButtons;
