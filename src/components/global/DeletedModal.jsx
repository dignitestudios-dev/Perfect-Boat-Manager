import React from 'react';
import { IoMdWarning } from "react-icons/io";

const DeletedModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-[#02203A] rounded-lg shadow-md w-full max-w-md">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#199BD1] hover:text-gray-900"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-6 text-center">
          <IoMdWarning 
            className="mx-auto mb-4 text-yellow-500 w-14 h-14" />
          <h2 className="mb-2 text-xl font-semibold text-white">Are you sure?</h2>
          <p className="mb-4 text-white">Do you really want to delete this item? This action cannot be undone.</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#1A293D] hover:bg-gray-900 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletedModal;
