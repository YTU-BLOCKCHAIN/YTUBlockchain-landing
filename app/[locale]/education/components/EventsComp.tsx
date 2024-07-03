"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    title: "Blockchain Fundamentals Workshop",
    date: "July 15, 2024",
    image: "https://via.placeholder.com/800x600",
    description:
      "Join us for an in-depth workshop on the fundamentals of blockchain technology, featuring expert speakers and hands-on activities.",
    additionalInfo:
      "Location: Room 101, YTU Campus. Time: 10:00 AM - 3:00 PM. Registration required.",
  },
  {
    title: "Advanced Smart Contracts Seminar",
    date: "August 10, 2024",
    image: "https://via.placeholder.com/800x600",
    description:
      "Dive deeper into smart contracts with this advanced seminar. Learn about real-world applications and complex use cases.",
    additionalInfo:
      "Location: Room 202, YTU Campus. Time: 11:00 AM - 4:00 PM. Registration required.",
  },
];

const EventsComp = () => {
  interface Event {
    title: string;
    date: string;
    image: string;
    description: string;
    additionalInfo: string;
  }

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Upcoming Events
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="cursor-pointer rounded-lg shadow-lg bg-white dark:bg-zinc-800 overflow-hidden"
              whileHover={{
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                translateY: -5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setSelectedEvent(event)}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.date}
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 max-w-md mx-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                {selectedEvent.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedEvent.date}
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                {selectedEvent.description}
              </p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-zinc-700 rounded-md">
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedEvent.additionalInfo}
                </p>
              </div>
              <button
                className="mt-4 px-4 py-2 bg-gray-600 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsComp;
