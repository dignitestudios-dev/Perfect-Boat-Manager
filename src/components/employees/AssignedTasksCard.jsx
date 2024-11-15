import React, { useRef, useState } from "react";
import ViewAllTasksModal from "../tasks/ViewAllTasksModal";
import { FaCaretDown, FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import DateModal from "../tasks/DateModal";
import { CiCalendar } from "react-icons/ci";
import AssignedModal from "../../pages/Tasks/AssignedModal";
import TaskType from "../global/headerDropDowns/TaskType";
import { getUnixDate } from "../../constants/DateFormat";
import { useNavigate } from "react-router-dom";

const statusColor = (status) => {
  switch (status) {
    case "newtask":
      return "bg-[#FF007F]/[0.12] text-[#FF007F]";
    case "overdue":
      return "bg-[#FF3B30]/[0.12] text-[#FF3B30]";
    case "in-progress":
      return "bg-[#36B8F3]/[0.12] text-[#36B8F3]";
    case "completed":
      return "bg-[#1FBA46]/[0.12] text-[#1FBA46]";
    default:
      return "bg-[#FFCC00]/[0.12] text-[#FFCC00]";
  }
};

const AssignedTasksCard = ({
  tasks,
  setUpdatedTasks,
  setEmployeeTasks,
  isEdit = "false",
}) => {
  const navigate = useNavigate();
  const [isAssignedModalOpen, setIsAssignedModalOpen] = useState(false);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [taskType, setTaskType] = useState("");
  const [taskTypeDropdownOpen, setTaskTypeDropdownOpen] = useState(false);

  const [dueDate, setDueDate] = useState({});
  const [inputError, setInputError] = useState({});

  const toggleTaskTypeDropdown = () => {
    setTaskTypeDropdownOpen(!taskTypeDropdownOpen);
  };

  const filteredData = tasks?.filter((item) => {
    const taskTypeMatch =
      taskType && taskType !== "all"
        ? item?.taskType?.toLowerCase() === taskType?.toLowerCase()
        : true;
    return taskTypeMatch;
  });

  const handleEditTaskClick = (taskId) => {
    navigate(`/tasks/${taskId}`);
  };

  const handleRemoveTask = (taskID) => {
    const newTasks = tasks?.filter((task) => task?._id !== taskID);
    setEmployeeTasks(newTasks);
    setUpdatedTasks(newTasks);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
      <div className="w-auto flex justify-between items-center gap-2">
        <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
          Assigned Tasks{" "}
        </h3>
        {filteredData?.length > 0 && (
          <button
            type="button"
            onClick={() => setIsAssignedModalOpen(true)}
            className="text-[14px] font-medium bg-[#199bd1]/[0.2] h-8 rounded-full w-[70px] text-[#199bd1]"
          >
            View All
          </button>
        )}
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
          <button
            type="button"
            onClick={() => setIsCalendarOpen(true)}
            className="w-full flex  gap-1  justify-start items-center relative"
          >
            <CiCalendar className="text-lg" />
            <span>Due Date</span>
          </button>
          <DateModal
            isOpen={isCalendarOpen}
            setIsOpen={setIsCalendarOpen}
            setDueDate={setDueDate}
            setInputError={setInputError}
          />
          <span className="w-full flex justify-start items-center">
            Recurring Days
          </span>
          <span className="w-full flex justify-start items-center">Status</span>
          {isEdit && (
            <span className="w-full flex justify-start items-center">
              Action
            </span>
          )}
        </div>
        {filteredData?.length > 0 ? (
          <>
            {filteredData?.slice(0, 4)?.map((task, index) => (
              <div
                key={index}
                className="w-full h-10 grid grid-cols-6 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center"
              >
                <span className="w-full flex justify-start items-center">
                  {task?.boatName}
                </span>
                <span className="w-full flex justify-start items-center">
                  {task?.taskType?.length > 25
                    ? task?.taskType?.slice(0, 25) + "..."
                    : task?.taskType}
                </span>
                <span className="w-full flex justify-start items-center">
                  {getUnixDate(task?.dueDate)}
                </span>
                <span className="w-full flex justify-start items-center ">
                  {task?.reoccuringDays}
                </span>
                <span
                  className={`text-[11px] rounded-full ${statusColor(
                    task?.status
                  )} font-medium leading-[14.85px]
                 flex justify-center items-center w-[70px] h-[27px] `}
                >
                  {task?.status}
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
      </div>

      {isAssignedModalOpen && (
        <AssignedModal
          tasks={tasks}
          setIsOpen={setIsAssignedModalOpen}
          isEdit={isEdit}
          handleRemoveTask={(taskID) => handleRemoveTask(taskID)}
        />
      )}
    </div>
  );
};

export default AssignedTasksCard;
