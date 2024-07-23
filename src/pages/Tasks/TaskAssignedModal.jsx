import React from "react";

const TaskAssignedModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#001229] rounded-lg p-6 w-96 text-center">
        <div className="mb-4">
          <span className="inline-block bg-[#199BD1] p-3 rounded-full">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </span>
        </div>
        <p className="text-white mb-6">Reported task has been successfully assigned</p>
        <button
          onClick={onClose}
          className="bg-[#199BD1] text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskAssignedModal;
