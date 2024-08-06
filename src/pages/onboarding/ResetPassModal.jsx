import React from 'react';

const ResetPasswordModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#1A293D] bg-opacity-50 z-50 rounded-xl">
      <div className="bg-[#02203A] text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold">Reset Password</h2>
          <button
            className="text-[#199BD1] text-md font-bold mb-3"
            onClick={onClose}
          >
              ✕
          </button>
        </div>
        <div>
          <label className="block mb-2 text-md">New Password</label>
          <input
            type="password"
            className="w-full p-2 mb-4 bg-gray-700 rounded-lg border border-gray-600 "
          />
        </div>
        <div>
          <label className="block mb-2 text-md">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 mb-8 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none"
          />
        </div>
        <button className="w-full py-2 bg-[#199BD1] rounded-lg text-md font-medium">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
