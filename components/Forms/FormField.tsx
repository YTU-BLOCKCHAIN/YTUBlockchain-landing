import { FormFieldProps } from "@/types/types";
import React from "react";

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
  required,
}) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="mt-1 block w-full px-4 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
      required={required}
    />
  </div>
);

export default FormField;
