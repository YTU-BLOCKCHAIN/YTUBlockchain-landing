import React from "react";

const LoadingState: React.FC = () => (
  <div className="max-w-6xl mx-auto space-y-4">
    <div className="h-12 bg-gray-300 dark:bg-zinc-700 rounded animate-pulse"></div>
    {[...Array(5)].map((_, index) => (
      <div key={index} className="space-y-2">
        <div className="h-8 bg-gray-300 dark:bg-zinc-700 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-300 dark:bg-zinc-700 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-300 dark:bg-zinc-700 rounded animate-pulse"></div>
      </div>
    ))}
  </div>
);

export default LoadingState;
