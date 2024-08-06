import React from 'react';
import { MdAccessTime } from "react-icons/md";

const ResendModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#001229] bg-opacity-50">
      <div className="relative bg-[#1A293D] rounded-lg shadow-md w-full max-w-md">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-800"
          aria-label="Close modal"
        >
          {/* Add your icon or text here */}
        </button>
        <div className="p-4 text-left">
          <p className="mb-2 text-lg text-white font-bold">Resend Credentials</p>
          <p className="text-md text-white">Are you sure you want to resend the credentials</p>
          <p className="mb-5 text-md text-white">to the managers?</p>

          {/* Container for buttons aligned to the right */}
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              type="button"
              className="text-[#36B8F3] py-2 px-4 rounded-lg text-lg"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              type="button"
              className="text-[#36B8F3] py-2 px-4 rounded-lg text-lg"
            >
              Resend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResendModal;
