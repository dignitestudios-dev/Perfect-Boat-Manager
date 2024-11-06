import React, { useState } from "react";
import ResendModal from "../../pages/onboarding/ResendModal";

const ResendPasswordCard = ({ employee }) => {
  const [isResendModalOpen, setIsResendModalOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-6 justify-start items-start mt-14 py-6 border-t-[1px] border-white/10">
      <div className="w-auto flex gap-2 justify-start items-center ">
        <h3 className="text-[18px] font-bold leading-[24.3px]">
          Resend Password
        </h3>
        <button
          type="button"
          onClick={() => setIsResendModalOpen(true)}
          className="text-[14px] font-medium text-[#199bd1]"
        >
          Change
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
