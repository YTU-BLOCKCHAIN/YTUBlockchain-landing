"use client";

import React, { useState } from "react";
import { addClass } from "../lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import { usePathname, useRouter } from "next/navigation";
import FormField from "./Forms/FormField";
import ImageUpload from "./Forms/ImageUpload";
import ErrorMessage from "./Common/ErrorMessage";

const AddClassForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    duration: "",
    topic: "",
    instructor: "",
    githubLink: "",
    tech: "",
    ClassLocation: "",
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
      formDataToSubmit.append("ClassLocation", formData.ClassLocation);

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
        ClassLocation: "",
      });
      setImage(null);
    } catch (err) {
      setError("Failed to add class. Please try again.");
      toast.error("Failed to add class. Please try again.", {
        position: "bottom-right",
      });
    } finally {
      setLoading(false);
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
        {error && <ErrorMessage error={error} />}
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="Date"
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <FormField
            label="Time"
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <FormField
            label="Duration"
            type="text"
            id="duration"
            name="duration"
            placeholder="e.g., 2 hours"
            value={formData.duration}
            onChange={handleChange}
            required
          />
          <FormField
            label="Topic"
            type="text"
            id="topic"
            name="topic"
            placeholder="e.g., Introduction to Blockchain"
            value={formData.topic}
            onChange={handleChange}
            required
          />
          <FormField
            label="Instructor"
            type="text"
            id="instructor"
            name="instructor"
            placeholder="e.g., John Doe"
            value={formData.instructor}
            onChange={handleChange}
            required
          />
          <FormField
            label="Class Location"
            type="text"
            id="ClassLocation"
            name="ClassLocation"
            placeholder="e.g., EEF102"
            value={formData.ClassLocation}
            onChange={handleChange}
            required
          />
          <FormField
            label="GitHub Link"
            type="url"
            id="githubLink"
            name="githubLink"
            placeholder="e.g., https://github.com/instructor/repo"
            value={formData.githubLink}
            onChange={handleChange}
            required
          />
          <FormField
            label="Tech"
            type="text"
            id="tech"
            name="tech"
            placeholder="e.g., JavaScript, React"
            value={formData.tech}
            onChange={handleChange}
            required
          />
          <ImageUpload
            id="instructorImage"
            name="instructorImage"
            onChange={handleImageChange}
          />
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
