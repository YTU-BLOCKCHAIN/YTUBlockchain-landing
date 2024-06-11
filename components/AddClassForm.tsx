"use client";

import React, { useState } from "react";
import { addClass } from "../lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import { usePathname, useRouter } from "next/navigation";

const AddClassForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    duration: "",
    topic: "",
    instructor: "",
    githubLink: "",
    tech: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("date", formData.date);
      formDataToSubmit.append("time", formData.time);
      formDataToSubmit.append("duration", formData.duration);
      formDataToSubmit.append("topic", formData.topic);
      formDataToSubmit.append("instructor", formData.instructor);
      formDataToSubmit.append("githubLink", formData.githubLink);
      formDataToSubmit.append("tech", formData.tech);

      if (image) {
        formDataToSubmit.append("instructorImage", image);
      }

      await addClass(formDataToSubmit);

      toast.success("Class added successfully!", { position: "bottom-right" });

      setFormData({
        date: "",
        time: "",
        duration: "",
        topic: "",
        instructor: "",
        githubLink: "",
        tech: "",
      });
      setImage(null);
    } catch (err) {
      setError("Failed to add class. Please try again.");
      toast.error("Failed to add class. Please try again.", {
        position: "bottom-right",
      });
    } finally {
      setLoading(false);
      router.push(`/${locale}/education`);
    }
  };

  return (
    <div className="relative bg-white dark:bg-zinc-800 shadow-md rounded-lg max-w-lg w-full mx-auto">
      {loading && (
        <span className="absolute w-full h-full bg-black bg-opacity-70 rounded-lg cursor-not-allowed" />
      )}

      <div className="w-full h-full p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Add New Class
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="date"
              className="block text-gray-700 dark:text-gray-300"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-gray-700 dark:text-gray-300"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label
              htmlFor="duration"
              className="block text-gray-700 dark:text-gray-300"
            >
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              placeholder="e.g., 2 hours"
              value={formData.duration}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label
              htmlFor="topic"
              className="block text-gray-700 dark:text-gray-300"
            >
              Topic
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              placeholder="e.g., Introduction to Blockchain"
              value={formData.topic}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label
              htmlFor="instructor"
              className="block text-gray-700 dark:text-gray-300"
            >
              Instructor
            </label>
            <input
              type="text"
              id="instructor"
              name="instructor"
              placeholder="e.g., John Doe"
              value={formData.instructor}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label
              htmlFor="githubLink"
              className="block text-gray-700 dark:text-gray-300"
            >
              GitHub Link
            </label>
            <input
              type="url"
              id="githubLink"
              name="githubLink"
              placeholder="e.g., https://github.com/instructor/repo"
              value={formData.githubLink}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label
              htmlFor="tech"
              className="block text-gray-700 dark:text-gray-300"
            >
              Tech
            </label>
            <input
              type="text"
              id="tech"
              name="tech"
              placeholder="e.g., JavaScript, React"
              value={formData.tech}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label
              htmlFor="instructorImage"
              className="block text-gray-700 dark:text-gray-300"
            >
              Instructor Image
            </label>
            <input
              type="file"
              id="instructorImage"
              name="instructorImage"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 flex justify-center items-center"
            disabled={loading}
          >
            {loading ? <ClipLoader color="#ffffff" size={20} /> : "Add Class"}
          </button>
        </form>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default AddClassForm;
