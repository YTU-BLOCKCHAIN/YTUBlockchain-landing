import React, { useState } from "react";

interface ConfirmDeleteModalProps {
  className: string;
  confirmDelete: string;
  setConfirmDelete: (value: string) => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  className,
  confirmDelete,
  setConfirmDelete,
  onCancel,
  onConfirm,
}) => {
  const [inputError, setInputError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmDelete(e.target.value);
    if (inputError) setInputError(false);
  };

  const handleConfirmClick = () => {
    if (confirmDelete !== "delete") {
      setInputError(true);
      setTimeout(() => setInputError(false), 1000);
    } else {
      onConfirm();
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleConfirmClick();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`bg-white dark:bg-zinc-800 p-6 rounded-md shadow-md w-full max-w-md mx-4 border-2 ${
          inputError ? "border-red-500 shake" : "border-[#e2e8f000]"
        }`}
      >
        <h3 className="text-lg font-bold mb-4 text-center">Confirm Delete</h3>
        <p className="mb-4 text-center">
          Type <span className="font-bold">"delete"</span> to confirm deletion
          of <span className="font-bold">{className}</span>.
        </p>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            value={confirmDelete}
            onChange={handleChange}
            className={`mt-2 px-4 py-2 w-full border dark:border-gray-600 rounded-md focus:outline-none`}
            placeholder="Type 'delete' to confirm"
          />
          <div className="mt-4 flex justify-end space-x-2">
            <button
              className="bg-gray-300 dark:bg-zinc-600 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md shadow hover:bg-gray-400 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-zinc-400"
              onClick={onCancel}
              type="button"
            >
              Cancel
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
              type="submit"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
