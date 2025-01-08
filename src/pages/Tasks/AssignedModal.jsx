import React, { useState } from "react";
import { FaRegEdit, FaCaretDown } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { getUnixDate } from "../../constants/DateFormat";
import TaskType from "../../components/global/headerDropDowns/TaskType";
import StatusType from "../../components/global/headerDropDowns/StatusType";
import { useNavigate } from "react-router-dom";
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

const AssignedModal = ({ setIsOpen, tasks, isEdit, handleRemoveTask }) => {
  const navigate = useNavigate();
  const [taskType, setTaskType] = useState([]);
  const [taskTypeDropdownOpen, setTaskTypeDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState([]);
  const [search, setSearch] = useState("");
  const getFormattedStatus = (status) => {
    return STATUS_ENUM[status] || status;
  };

  const toggleTaskTypeDropdown = () => {
    setTaskTypeDropdownOpen(!taskTypeDropdownOpen);
  };

  const toggleStatusDropdown = () => {
    setStatusDropdownOpen(!statusDropdownOpen);
  };

  const filteredData = tasks?.filter((item) => {
    const matchesSearch = search
      ? item?.boatName?.toLowerCase()?.includes(search?.toLowerCase()) ||
        item?.taskType?.toLowerCase()?.includes(search?.toLowerCase()) ||
        item?.status?.toLowerCase()?.includes(search?.toLowerCase())
      : true;
    const matchesStatus =
      statusFilter && statusFilter.length !== 0
        ? statusFilter?.includes(item?.status?.toLowerCase())
        : true;
    const taskTypeMatch =
      taskType && taskType.length !== 0
        ? taskType?.includes(item?.taskType?.toLowerCase())
        : true;
    return matchesSearch && matchesStatus && taskTypeMatch;
  });

  const handleEditTaskClick = (taskId) => {
    navigate(`/tasks/${taskId}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-[90%] max-w-4xl h-[80%] max-h-[80%] rounded-3xl flex items-center justify-center p-4 bg-[#1A293D]">
        <div className="bg-[#001229] text-white rounded-2xl shadow-lg w-full h-full p-4 overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Select Tasks</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold"
            >
              ✕
            </button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex w-1/2 lg:w-[295px] h-[32px] justify-start items-start rounded-[8px] bg-[#1A293D] relative">
              <span className="w-[32px] h-full flex items-center justify-center">
                <FiSearch className="text-white/50 text-lg" />
              </span>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search here"
                className="w-[calc(100%-35px)] outline-none text-sm bg-transparent h-full"
              />
            </div>
          </div>
          <div className="relative h-full overflow-auto">
            <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
              <div
                className={`w-full h-8 grid ${
                  isEdit ? "grid-cols-6" : "grid-cols-5"
                } text-[13px] font-medium
               border-b border-[#fff]/[0.14] leading-[14.85px] text-white/50 justify-start items-center mb-2`}
              >
                <span className="w-full flex justify-start items-center">
                  Boat Name
                </span>
                <div className="w-full flex justify-start items-center bg-transparent">
                  <TaskType
                    taskTypeDropdownOpen={taskTypeDropdownOpen}
                    toggleTaskTypeDropdown={toggleTaskTypeDropdown}
                    setTaskType={setTaskType}
                    taskType={taskType}
                  />
                </div>
                <span className="w-full flex justify-start items-center">
                  Due Date
                </span>
                <span className="w-full flex justify-start items-center">
                  Recurring Days
                </span>
                <div className="w-full flex justify-start items-center">
                  <StatusType
                    statusDropdownOpen={statusDropdownOpen}
                    statusFilter={statusFilter}
                    toggleStatusDropdown={toggleStatusDropdown}
                    setStatusFilter={setStatusFilter}
                  />
                </div>
                {isEdit && (
                  <span className="w-full flex justify-start items-center">
                    Action
                  </span>
                )}
              </div>
              {filteredData?.length > 0 ? (
                <>
                  {filteredData?.map((task, index) => (
                    <div
                      className={`w-full h-10 grid ${
                        isEdit ? "grid-cols-6" : "grid-cols-5"
                      } border-b border-[#fff]/[0.14] py-1 
                    text-[13px] font-medium leading-[14.85px] text-white justify-start items-center`}
                    >
                      <span className="w-full flex justify-start items-center">
                        {task?.boat?.name ? task?.boat?.name : task?.boatName}
                      </span>
                      <span className="w-full flex justify-start items-center">
                        {task?.taskType?.length > 40
                          ? task?.taskType?.slice(0, 40) + "..."
                          : task?.taskType}
                      </span>
                      <span className="w-full flex justify-start items-center">
                        {getUnixDate(task?.dueDate)}
                      </span>
                      <span className="w-full flex justify-start items-center ">
                        {task?.reoccuringDays}
                      </span>
                      <span className="w-full flex justify-start items-center ">
                        <span
                          className={`w-auto h-[27px] rounded-full flex items-center justify-center
              ${statusColor(task?.status)} px-2`}
                        >
                          {getFormattedStatus(task?.status)}
                        </span>
                      </span>
                      {isEdit && (
                        <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
                          <span
                            type="button"
                            onClick={() => handleEditTaskClick(task?._id)}
                            className=" flex justify-start items-center cursor-pointer"
                          >
                            <FaRegEdit />
                          </span>
                          <span
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveTask(task?._id);
                              // setDeleteModalOpen(true); // Open modal when delete icon is clicked
                            }}
                            className=" flex justify-start items-center cursor-pointer"
                          >
                            <RiDeleteBinLine />
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <span className="w-full flex justify-start items-center pt-4">
                  No record found
                </span>
              )}

              {/* Add more rows as needed */}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#119bd1] text-white px-6 py-2 rounded-md"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignedModal;
