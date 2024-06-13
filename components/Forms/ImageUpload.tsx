import React from "react";

interface ImageUploadProps {
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ id, name, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 dark:text-gray-300">
      Instructor Image
    </label>
    <input
      type="file"
      id={id}
      name={name}
      accept="image/*"
      onChange={onChange}
      className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
    />
  </div>
);

export default ImageUpload;
