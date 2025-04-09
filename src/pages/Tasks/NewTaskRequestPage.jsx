import React, { useContext, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { GlobalContext } from "../../contexts/GlobalContext";
import DeletedModal from "../../components/global/DeletedModal";
import { useLocation, useNavigate } from "react-router-dom";
import { getUnixDate } from "../../constants/DateFormat";
import { STATUS_ENUM } from "../../constants/data";

const statusColor = (status) => {
  switch (status) {
    case "newtask":
      return "bg-[#FF007F]/[0.12] text-[#FF007F]";
    case "overdue":
      return "bg-[#FF3B301F]/[0.12] text-[#FF3B30]";
    case "inprogress":
      return "bg-[#36B8F31F]/[0.12] text-[#36B8F3]";
    case "completed":
      return "bg-[#1FBA46]/[0.12] text-[#1FBA46]";
    case "upcomingtask":
      return "bg-[#FF007F1F]/[0.12] text-[#FF007F]";
    default:
      return "bg-[#FFCC00]/[0.12] text-[#FFCC00]";
  }
};

const NewTaskRequestPage = () => {
  // const { navigate } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const location = useLocation();
  const { task } = location.state || {};

  const getFormattedStatus = (status) => {
    return STATUS_ENUM[status] || status;
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    // Perform delete action here
    closeDeleteModal();
  };

  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
        <div className="w-full flex justify-between items-center h-12">
          <div className="w-auto flex flex-col gap-3 justify-start items-start ">
            <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
              New Task Request
            </h3>
            <span className="text-[16px] font-medium leading-[21.3px] text-white">
              Issue Reported
            </span>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-8 lg:gap-16">
          <div className="w-full h-auto flex flex-col gap-6 justify-start items-start">
            <div className="w-full flex text-[16px] font-normal leading-[21.6px] text-white/50 flex-col justify-start items-start gap-4">
              {task.note}
            </div>

            <div className="w-full flex flex-col pt-4 border-t-[1px] border-[#fff]/[0.14] justify-start items-start gap-4">
              <h3 className="text-[16px] font-medium leading-[21.3px]">
                Images of the Reported Issue
              </h3>
              <div className="w-full h-auto flex flex-wrap justify-start items-start gap-4">
                {task?.images?.map((image, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[175px] h-[147px] rounded-xl bg-[#1A293D] text-3xl flex items-center justify-center"
                  >
                    <img
                      src={image}
                      alt="boatimage"
                      className="w-full h-full rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
        <div className="w-auto flex justify-between items-center gap-2">
          <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
            Previously Assigned Tasks{" "}
          </h3>
        </div>

        <div className="w-full flex flex-col gap-1 justify-start items-start">
          <div className="w-full h-6 grid grid-cols-6 text-[13px] font-medium  border-b border-[#fff]/[0.14] leading-[14.85px] text-white/50 justify-start items-start">
            <span className="w-full flex justify-start items-center">
              Task Type
            </span>
            <span className="w-full flex justify-start items-center">
              Due Date
            </span>
            <span className="w-full flex justify-start items-center">
              Recurring Days
            </span>
            <span className="w-full flex justify-start items-center">
              Assigned To
            </span>
            <span className="w-full flex justify-start items-center">
              Status
            </span>
            <span className="w-full flex justify-start items-center">
              Action
            </span>
          </div>
          <div className="w-full h-10 grid grid-cols-6  py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
            <span className="w-full flex justify-start items-center">
              {task?.task?.taskType}
            </span>
            <span className="w-full flex justify-start items-center">
              {getUnixDate(task?.task?.dueDate)}
            </span>
            <span className="w-full flex justify-start items-center">
              {task?.task?.reoccuringDays}
            </span>
            <span className="w-full flex justify-start items-center">
              {task?.employee?.name}
            </span>
            <span
              className={`text-[11px] ${statusColor(
                task?.task?.status
              )} rounded-full
               font-medium leading-[14.85px] flex justify-center items-center w-[70px] h-[27px] `}
            >
              {getFormattedStatus(task?.task?.status)}
            </span>
            <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
              <span className=" flex justify-start items-center ">
                <FaRegEdit
                  onClick={() =>
                    navigate(`/tasks/${task?.task?._id}`, "All Tasks")
                  }
                />
              </span>
              <span className=" flex justify-start items-center ">
                <RiDeleteBinLine onClick={openDeleteModal} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
        <div className="w-full flex justify-between items-center h-12">
          <div className="w-auto flex justify-start items-center gap-2">
            <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
              New Task Request
            </h3>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-8 lg:gap-16">
          <div className="w-full h-auto flex flex-col gap-6 justify-start items-start">
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <div className="w-full h-auto flex flex-col justify-start items-start gap-8">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12">
                  <div className="w-full h-auto flex flex-col gap-1 justify-end items-start">
                    <label className="text-[16px] font-medium leading-[21.6px]">
                      Name
                    </label>
                    <div className="group transition-all duration-500 w-full h-[52px] bg-[#1A293D] outline-none flex justify-between items-center  px-3 focus:border-[1px] focus:border-[#55C9FA] rounded-xl  relative">
                      <span className="text-gray-400">{task?.boat?.name}</span>
                    </div>
                  </div>

                  <div className="w-full h-auto flex flex-col gap-1 justify-end items-start">
                    <label className="text-[16px] font-medium leading-[21.6px]">
                      {"Year/Make/Size"}
                    </label>
                    <div className="group transition-all duration-500 w-full h-[52px] bg-[#1A293D] outline-none flex justify-between items-center  px-3 focus:border-[1px] focus:border-[#55C9FA] rounded-xl  relative">
                      <span className="text-gray-400">
                        {task?.boat?.model} {task?.boat?.make}{" "}
                        {task?.boat?.size}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12">
                  <div className="w-full h-auto flex flex-col gap-1 justify-end items-start">
                    <label className="text-[16px] font-medium leading-[21.6px]">
                      Task Type
                    </label>
                    <div className="group transition-all duration-500 w-full h-[52px] bg-[#1A293D] outline-none flex justify-between items-center  px-3 focus:border-[1px] focus:border-[#55C9FA] rounded-xl  relative">
                      <span className="text-gray-400">
                        {task?.task?.taskType}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-auto flex flex-col gap-1 justify-end items-start">
                    <label className="text-[16px] font-medium leading-[21.6px]">
                      Task
                    </label>
                    <div className="group transition-all duration-500 w-full h-[52px] bg-[#1A293D] outline-none flex justify-between items-center  px-3 focus:border-[1px] focus:border-[#55C9FA] rounded-xl  relative">
                      <span className="text-gray-400">{task?.task?.task}</span>
                    </div>
                  </div>
                  <div className="w-full h-auto flex flex-col gap-1 justify-center items-start">
                    <label className="text-[16px] font-medium">
                      {"Location / Customer Name"}
                    </label>
                    <div
                      className="w-full max-h-[200px] flex items-center py-4 px-2.5 resize-none bg-[#1A293D] outline-none 
               focus:border-[1px] focus:border-[#55C9FA] rounded-xl text-left  "
                    >
                      {task?.employee?.location || "---"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-4">
              <h3 className="text-[18px] font-bold leading-[24.3px]">Photos</h3>
              <div className="w-full h-auto flex flex-wrap justify-start items-start gap-4">
                <div className="w-full md:w-[175px] h-[147px] rounded-xl bg-[#1A293D] text-3xl flex items-center justify-center">
                  <img
                    src={task?.boat?.cover}
                    alt="boatimage"
                    className="w-full h-full rounded-xl"
                  />
                </div>
                {task?.boat?.images?.map((image, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[175px] h-[147px] rounded-xl bg-[#1A293D] text-3xl flex items-center justify-center"
                  >
                    <img
                      src={image}
                      alt="boatimage"
                      className="w-full h-full rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end mt-10 items-center gap-4">
        <button
          onClick={() => navigate(`/assign-reported-task`, { state: { task } })}
          className="w-full lg:w-[208px] h-[52px] bg-[#199BD1] text-white rounded-[12px] flex items-center justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
        >
          {"Assign Reported Task"}
        </button>
      </div>
      <DeletedModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default NewTaskRequestPage;
