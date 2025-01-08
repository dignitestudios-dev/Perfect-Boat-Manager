import React, { useState } from "react";
import ViewAllTasksModal from "../tasks/ViewAllTasksModal";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import DeletedModal from "../global/DeletedModal";
import TaskType from "../global/headerDropDowns/TaskType";
import { MdOutlineDateRange } from "react-icons/md";
import AssignedModal from "../../pages/Tasks/AssignedModal";
import { getUnixDate } from "../../constants/DateFormat";
import axios from "../../axios";
import { ErrorToast, SuccessToast } from "../global/Toaster";
import { STATUS_ENUM } from "../../constants/data";
import { useNavigate } from "react-router-dom";

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

const AssignedBoatTasks = ({ tasks, getBoats }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isAssignedModalOpen, setIsAssignedModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteLoad, setDeleteLoad] = useState(false);

  const [taskType, setTaskType] = useState([]);
  const [taskTypeDropdownOpen, setTaskTypeDropdownOpen] = useState(false);

  const filteredData = tasks?.filter((item) => {
    const taskTypeMatch =
      taskType && taskType.length !== 0
        ? taskType?.includes(item?.taskType?.toLowerCase())
        : true;
    return taskTypeMatch;
  });

  const getFormattedStatus = (status) => {
    return STATUS_ENUM[status] || status;
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const toggleTaskTypeDropdown = () => {
    setTaskTypeDropdownOpen(!taskTypeDropdownOpen);
  };

  const handleDateModalOpen = () => {
    setIsDateModalOpen(true);
  };

  const handleViewAllClick = () => {
    setIsAssignedModalOpen(true);
  };

  const handleDeleteConfirm = async (id) => {
    setDeleteLoad(true);
    try {
      const response = await axios.delete(`/manager/task/${id}`);
      SuccessToast("Deleted successfully");
      setDeleteModalOpen(false);
      getBoats();
    } catch (error) {
      ErrorToast(err?.response?.data?.message);
      console.error("Error deleting task:", error);
    } finally {
      setDeleteLoad(false);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
      <div className="w-auto flex justify-between items-center gap-2">
        <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
          Assigned Tasks{" "}
        </h3>
        <button
          onClick={handleViewAllClick}
          className="text-[14px] font-medium bg-[#199bd1]/[0.2] h-8 rounded-full w-[70px] text-[#199bd1]"
        >
          View All
        </button>
      </div>

      <div className="w-full flex flex-col gap-1 justify-start items-start">
        <div className="w-full h-6 grid grid-cols-6 text-[13px] font-medium  border-b border-[#fff]/[0.14] leading-[14.85px] text-white/50 justify-start items-start">
          <span className="w-full flex justify-start items-center">
            Boat Name
          </span>
          <TaskType
            taskTypeDropdownOpen={taskTypeDropdownOpen}
            toggleTaskTypeDropdown={toggleTaskTypeDropdown}
            setTaskType={setTaskType}
            taskType={taskType}
          />
          <div
            className="w-full flex justify-start items-center cursor-pointer"
            onClick={handleDateModalOpen} // Handle click to open DateModal
          >
            <MdOutlineDateRange className="mr-1 text-lg" />
            Due Date
          </div>
          <span className="w-full flex justify-start items-center">
            Recurring Days
          </span>
          <span className="w-full flex justify-start items-center">Status</span>
          <span className="w-full flex justify-start items-center px-[80px]">
            Action
          </span>
        </div>
        {filteredData?.length > 0 ? (
          <>
            {filteredData?.slice(0, 4)?.map((task, index) => (
              <button
                key={index}
                className="w-full h-10 grid grid-cols-6 border-b border-[#fff]/[0.14] py-1 text-[13px]
             font-medium leading-[14.85px] text-white justify-start items-center"
                onClick={() => navigate(`/tasks/${task?._id}`, "All Tasks")}
              >
                <span className="w-full flex justify-start items-center">
                  {task?.boat?.name}
                </span>
                <span className="w-full flex justify-start items-center">
                  {task?.taskType?.length > 15
                    ? task?.taskType?.slice(0, 24) + "..."
                    : task?.taskType}
                </span>
                <span className="w-full flex justify-start items-center">
                  {getUnixDate(task?.dueDate)}
                </span>
                <span className="w-full flex justify-start items-center ">
                  {task?.reoccuringDays}
                </span>
                <span
                  className={`text-[11px] ${statusColor(
                    task?.status
                  )} rounded-full font-medium 
            leading-[14.85px] flex justify-center items-center w-[100px] h-[27px]`}
                >
                  {getFormattedStatus(task?.status)}
                </span>
                <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2 px-[80px]">
                  <span className=" flex justify-start items-center ">
                    <FaRegEdit
                      onClick={() =>
                        navigate(`/tasks/${task?._id}`, "All Tasks")
                      }
                    />
                  </span>
                  <span className=" flex justify-start items-center ">
                    <RiDeleteBinLine onClick={handleDeleteClick} />
                  </span>
                </div>
                <DeletedModal
                  deleteLoad={deleteLoad}
                  isOpen={isDeleteModalOpen}
                  onClose={() => setDeleteModalOpen(false)}
                  onConfirm={() => handleDeleteConfirm(task?._id)}
                />
              </button>
            ))}
          </>
        ) : (
          <div>No record found</div>
        )}
      </div>
      <ViewAllTasksModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      {isAssignedModalOpen && (
        <AssignedModal
          setIsOpen={setIsAssignedModalOpen}
          tasks={tasks}
          isEdit={true}
          handleRemoveTask={(taskID) => handleDeleteConfirm(taskID)}
        />
      )}
    </div>
  );
};

export default AssignedBoatTasks;
