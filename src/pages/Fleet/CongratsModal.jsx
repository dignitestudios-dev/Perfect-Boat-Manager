import React from 'react';
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const CongratsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#001229] bg-opacity-50">
      <div className="relative bg-[#001229] rounded-lg shadow-md w-full max-w-md">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-800"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="#36B8F3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>  +
        </button>
        <div className="p-4 text-center items-center">
          <IoMdCheckmarkCircleOutline 
          className="mx-auto mb-4 text-[#36B8F3] bg-[#001F3F] p-2 w-14 h-14 rounded-full" />
          {/* <MdAccessTime className="mx-auto mb-4 text-[#36B8F3] bg-[#001F3F] p-2 w-12 h-12 rounded-full" /> */}
          <h1 className="mb-2 text-lg text-white font-bold">CSV Imported Successfully</h1>
          {/* <p className="mb-6 text-lg font-normal text-white">You've expanded your workforce with a new employee.</p>
          <p className="mb-5 text-md text-white underline">Add More</p> */}
        </div>
      </div>
    </div>
  );
};

export default CongratsModal;
