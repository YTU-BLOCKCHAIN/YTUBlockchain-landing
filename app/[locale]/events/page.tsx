"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

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

const drawComplexPath = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  progress: number
) => {
  context.clearRect(0, 0, width, height);
  context.beginPath();
  context.moveTo(-20, height / 2);

  const amplitude = 40;
  const frequency = 140;

  for (let i = 0; i < width * progress; i += 10) {
    const y = height / 2 + amplitude * Math.cos(i / frequency);
    context.lineTo(i, y);
  }

  context.strokeStyle = "#3b82f6";
  innerWidth < 768 ? (context.lineWidth = 10) : (context.lineWidth = 30);
  context.stroke();
};

const EventsPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  interface Event {
    title: string;
    date: string;
    image: string;
    description: string;
    additionalInfo: string;
  }

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const width = innerWidth + 30;
    const height = canvas.height - 200;
    let animationFrameId: number;
    let progress = 0;

    const draw = () => {
      if (progress <= 1) {
        if (context) {
          drawComplexPath(context, width, height, progress);
        }
        progress += 0.01;
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <canvas
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight / 2}
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="relative max-w-7xl mx-auto py-16 px-8">
          <h1 className="md:text-4xl text-xl font-bold text-center mb-8">
            Welcome to YTU Blockchain Events
          </h1>
          <p className="md:text-lg text-md text-center">
            At YTU Blockchain Club, we are dedicated to educating and empowering
            individuals about blockchain technology. Our events range from
            workshops and seminars to hands-on coding sessions and networking
            opportunities. Each event is carefully designed to provide both
            theoretical knowledge and practical skills. Whether you are a
            beginner or an expert, our events offer something valuable for
            everyone. Join us and be part of a thriving community that's shaping
            the future of technology.
          </p>
          <div className="text-center mt-8">
            <h2 className="text-xl font-bold">
              <CountUp end={164} duration={5} className="text-[#3b82f6]" />{" "}
              Events Held
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8">
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

export default EventsPage;
