"use client";

import React, { useState } from "react";
import { addClass } from "../lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import FormField from "./Forms/FormField";
import ImageUpload from "./Forms/ImageUpload";
import ErrorMessage from "./Common/ErrorMessage";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("AddClassForm");
  const r = useTranslations("EditClassForm");
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
    <div className=" p-8 bg-white dark:bg-zinc-800 shadow-md rounded-lg w-full mx-auto">
      {loading && (
        <span className="absolute w-full h-full bg-black bg-opacity-70 rounded-lg cursor-not-allowed" />
      )}

      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        {t("addClass")}
      </h2>
      {error && <ErrorMessage error={error} />}
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label={t("date")}
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <FormField
          label={t("time")}
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <FormField
          label={t("duration")}
          type="text"
          id="duration"
          name="duration"
          placeholder={r("durationPlaceholder")}
          value={formData.duration}
          onChange={handleChange}
          required
        />
        <FormField
          label={t("topic")}
          type="text"
          id="topic"
          name="topic"
          placeholder={r("topicPlaceholder")}
          value={formData.topic}
          onChange={handleChange}
          required
        />
        <FormField
          label={t("instructor")}
          type="text"
          id="instructor"
          name="instructor"
          placeholder={r("instructorPlaceholder")}
          value={formData.instructor}
          onChange={handleChange}
          required
        />
        <FormField
          label={t("ClassLocation")}
          type="text"
          id="ClassLocation"
          name="ClassLocation"
          placeholder={r("classLocationPlaceholder")}
          value={formData.ClassLocation}
          onChange={handleChange}
          required
        />
        <FormField
          label={t("githubLink")}
          type="url"
          id="githubLink"
          name="githubLink"
          placeholder={r("githubLinkPlaceholder")}
          value={formData.githubLink}
          onChange={handleChange}
          required
        />
        <FormField
          label={t("tech")}
          type="text"
          id="tech"
          name="tech"
          placeholder={r("techPlaceholder")}
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
          {loading ? <ClipLoader color="#ffffff" size={20} /> : t("addClass")}
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default AddClassForm;
