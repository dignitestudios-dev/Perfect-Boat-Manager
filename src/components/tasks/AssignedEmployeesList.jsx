import React, { useState } from "react";
import EmployeeDetailModal from "../../pages/Employees/EmployeeDetailModal";

const AssignedEmployeesList = ({
  isEdit,
  passSelectedEmployee,
  setPassSelectedEmployee,
  taskDetail,
  setInputError,
  showButton,
}) => {
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);

  const toggleEmployeeModal = () => {
    setIsEmployeeModalOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
      <div className="w-auto flex justify-start items-center gap-2">
        <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
          Assigned Employees
        </h3>
       
        {(showButton === true && !isEdit) ||
        (showButton === false && isEdit) ? (
          <button
            onClick={() => setIsEmployeeModalOpen(true)}
            className="pt-1 text-xs flex font-normal text-[#199BD1]"
          >
            <span>Change</span>
          </button>
        ) : null}
      </div>

      <div className="w-full flex flex-col gap-1 justify-start items-start">
        <div className="w-full h-6 grid grid-cols-5 text-[13px] font-medium border-b border-[#fff]/[0.14] leading-[14.85px] text-white/50 justify-start items-start">
          <span className="w-full flex justify-start items-center">
            Employee Name
          </span>
          <span className="w-full flex justify-start items-center">Email</span>
          <span className="w-full flex justify-start items-center">
            Job Title
          </span>
          <span className="w-full flex justify-start items-center">
            Phone Number
          </span>
          <span className="w-full flex justify-start items-center">
            Location
          </span>
        </div>
        {taskDetail?.assignTo?.map((employee, index) => (
          <span
            key={index}
            className="w-full h-10 grid grid-cols-5 py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center"
          >
            <span className="w-[160px] overflow-hidden flex justify-start items-center">
              {passSelectedEmployee?.name || employee?.name}
            </span>
            <span className="w-[180px] overflow-hidden flex justify-start items-center">
              {employee?.email}
            </span>
            <span className="w-full flex justify-start items-center">
              {employee?.name}
            </span>
            <span className="w-full flex justify-start items-center ">
              {employee?.phoneNumber}
            </span>
            <span className="w-full flex justify-start items-center ">
              {employee?.location ?? "---"}
            </span>
          </span>
        ))}
      </div>
      {isEmployeeModalOpen && (
        <EmployeeDetailModal
          isOpen={isEmployeeModalOpen}
          setIsOpen={toggleEmployeeModal}
          SetPassSelectedEmployee={setPassSelectedEmployee}
          setInputError={setInputError}
        />
      )}
    </div>
  );
};

export default AssignedEmployeesList;
