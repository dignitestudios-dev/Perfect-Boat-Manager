import React, { useState } from "react";
import ResendModal from "../../pages/onboarding/ResendModal";
import ResetPasswordModal from "../../pages/onboarding/ResetPassModal";

const ResendPasswordCard = ({ employee }) => {
  const [isResendModalOpen, setIsResendModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full flex flex-col gap-6 justify-start items-start mt-14 py-6 border-t-[1px] border-white/10">
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-3 items-center">
          <h3 className="text-[18px] font-bold leading-[24.3px]">
            Resend Password
          </h3>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsResendModalOpen(true)}
              className="text-[14px] font-medium text-[#199bd1]"
            >
              Resend
            </button>
          </div>
        </div>
        <button
          type="button"
          className="text-[14px] text-[#199bd1]  bg-[#199bd133] rounded-full w-[130px] h-10 font-medium  hover:text-black"
          onClick={() => setIsModalOpen(true)}
        >
          Reset Password
        </button>
      </div>

      <div className="w-auto flex flex-col justify-start items-start gap-3">
        <div className="flex justify-start items-center gap-2 text-white text-[16px] font-normal leading-[21.6px]">
          <span className="text-white/50">Email:</span>
          <span>{employee?.email}</span>
        </div>
        <div className="flex justify-start items-center gap-2 text-white text-[16px] font-normal leading-[21.6px]">
          <span className="text-white/50">Password:</span>
          <span>{employee?.password}</span>
        </div>
      </div>
      <ResetPasswordModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {isResendModalOpen && (
        <ResendModal
          id={employee?._id}
          isOpen={isResendModalOpen}
          onClose={() => setIsResendModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ResendPasswordCard;
