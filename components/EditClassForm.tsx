"use client";

import React, { useState, useEffect } from "react";
import { fetchClasses, updateClass, deleteClass } from "@/lib/api";
import { ClipLoader } from "react-spinners";
import FormField from "@/components/Forms/FormField";
import ConfirmDeleteModal from "@/components/Common/ConfirmDeleteModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Class } from "@/types/types";

const EditClassForm: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string>("");
  const [classToDelete, setClassToDelete] = useState<Class | null>(null);

  useEffect(() => {
    const getClasses = async () => {
      setLoading(true);
      try {
        const data = await fetchClasses();
        setClasses(
          data.sort(
            (a: Class, b: Class) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        );
        setLoading(false);
      } catch (error) {
        setError("Error fetching classes");
        console.error("Error fetching classes", error);
        setLoading(false);
      }
    };
    getClasses();
  }, []);

  const handleEditClick = (cls: Class) => {
    setSelectedClass(cls);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (selectedClass) {
      setSelectedClass({ ...selectedClass, [name]: value });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClass) return;

    try {
      setLoading(true);
      await updateClass(selectedClass._id, selectedClass);
      toast.success("Class Updated successfully!", {
        position: "bottom-right",
      });
      const data = await fetchClasses();
      setClasses(
        data.sort(
          (a: Class, b: Class) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      );
      setSelectedClass(null);
      setLoading(false);
    } catch (err) {
      setError("Error updating class");
      setLoading(false);
    }
  };

  const handleDeleteClick = (cls: Class) => {
    setClassToDelete(cls);
  };

  const handleDelete = async () => {
    if (!classToDelete) return;
    if (confirmDelete !== "delete") {
      toast.error("Please type 'delete' to confirm", {
        position: "bottom-right",
      });
      return;
    }

    try {
      await deleteClass(classToDelete._id);
      toast.success("Class Deleted successfully!", {
        position: "bottom-right",
      });
      const data = await fetchClasses();
      setClasses(
        data.sort(
          (a: Class, b: Class) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      );

      setClassToDelete(null);
      setConfirmDelete("");
    } catch (error) {
      setError("Error deleting class");
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setSelectedClass(null);
  };

  return (
    <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-8">
      {loading && !selectedClass && (
        <div className="space-y-6 h-screen">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Edit Classes
          </h2>
          {[...Array(8)].map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-11 bg-gray-300 dark:bg-zinc-700 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      )}
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Edit {selectedClass ? selectedClass.topic : "Classes"}
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      {selectedClass ? (
        <form onSubmit={handleSave} className="space-y-6">
          <FormField
            label="Date"
            type="date"
            id="date"
            name="date"
            value={selectedClass.date || ""}
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Time"
            type="time"
            id="time"
            name="time"
            value={selectedClass.time}
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Duration"
            type="text"
            id="duration"
            name="duration"
            value={selectedClass.duration}
            placeholder="e.g., 2 hours"
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Topic"
            type="text"
            id="topic"
            name="topic"
            value={selectedClass.topic}
            placeholder="e.g., Introduction to Blockchain"
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Instructor"
            type="text"
            id="instructor"
            name="instructor"
            value={selectedClass.instructor}
            placeholder="e.g., John Doe"
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Class Location"
            type="text"
            id="ClassLocation"
            name="ClassLocation"
            value={selectedClass.ClassLocation || ""}
            placeholder="e.g., EEF102"
            onChange={handleInputChange}
            required
          />
          <FormField
            label="GitHub Link"
            type="url"
            id="githubLink"
            name="githubLink"
            value={selectedClass.githubLink}
            placeholder="e.g., https://github.com/instructor/repo"
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Tech"
            type="text"
            id="tech"
            name="tech"
            value={selectedClass.tech}
            placeholder="e.g., JavaScript, React"
            onChange={handleInputChange}
            required
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full text-sm sm:text-md sm:px-4 sm:py-2 px-2 py-1  bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <ClipLoader color="#ffffff" size={20} />
              ) : (
                "Save Changes"
              )}
            </button>
            <button
              type="button"
              className="w-full text-sm sm:text-md sm:px-4 sm:py-2 px-2 py-1  ml-4 bg-red-600 text-white font-bold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 flex justify-center items-center"
              onClick={() => handleDeleteClick(selectedClass!)}
            >
              {loading ? <ClipLoader color="#ffffff" size={20} /> : "Delete"}
            </button>
            <button
              type="button"
              className="w-full text-sm sm:text-md sm:px-4 sm:py-2 px-2 py-1 ml-4 bg-gray-600 text-white font-bold rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 flex justify-center items-center"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <ul className="space-y-2">
          {classes.map((cls) => (
            <li
              key={cls._id}
              className="text-sm sm:text-lg bg-gray-100 dark:bg-zinc-700 p-4 rounded-md flex justify-between items-center shadow-md flex-col sm:flex-row gap-y-2"
            >
              <span className="text-gray-900 dark:text-gray-100 font-medium">
                {cls.topic} - {cls.date}
              </span>
              <div className="flex space-x-2">
                <button
                  className="text-sm sm:text-md bg-indigo-600 text-white sm:px-4 sm:py-2 px-2 py-1 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  onClick={() => handleEditClick(cls)}
                >
                  Edit
                </button>
                <button
                  className="text-sm sm:text-md bg-red-600 text-white sm:px-4 sm:py-2 px-2 py-1 rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                  onClick={() => handleDeleteClick(cls)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {classToDelete && (
        <ConfirmDeleteModal
          className={classToDelete.topic}
          confirmDelete={confirmDelete}
          setConfirmDelete={setConfirmDelete}
          onCancel={() => {
            setClassToDelete(null);
            setConfirmDelete("");
          }}
          onConfirm={handleDelete}
        />
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default EditClassForm;
