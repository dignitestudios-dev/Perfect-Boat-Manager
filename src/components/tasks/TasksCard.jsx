import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { GlobalContext } from "../../contexts/GlobalContext";
import DeletedModal from "../global/DeletedModal";
import { getUnixDate } from "../../constants/DateFormat";
import axios from "../../axios";
import { ErrorToast, SuccessToast } from "../global/Toaster";
import { STATUS_ENUM } from "../../constants/data";

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

const TasksCard = ({ getTasks, data }) => {
  const { navigate } = useContext(GlobalContext);

  const getFormattedStatus = (status) => {
    return STATUS_ENUM[status] || status;
  };

  // State for controlling the delete modal
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteLoad, setDeleteLoad] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  // Function to handle delete confirmation
  const handleDeleteConfirm = async () => {
    setDeleteLoad(true);
    try {
      const response = await axios.delete(`/manager/task/${deleteId}`);
      SuccessToast("Deleted successfully");
      setDeleteModalOpen(false);
      getTasks();
    } catch (error) {
      ErrorToast(err?.response?.data?.message);
      console.error("Error deleting task:", error);
    } finally {
      setDeleteLoad(false);
    }
  };

  return (
    <>
      <DeletedModal
        deleteLoad={deleteLoad}
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
      <button
        onClick={() => navigate(`/tasks/${data?._id}`, "All Tasks")}
        className="w-full h-[172px] flex justify-start items-start rounded-l-[6px] rounded-r-[16px] bg-[#1A293D]"
      >
        <div
          className={`w-[6px] h-full rounded-l-[6px] ${statusColor(
            data?.status
          )}`}
        ></div>
        <div className="w-[calc(100%-6px)] h-full py-4 px-6 flex flex-col gap-2 justify-start items-start relative">
          <div className="w-full h-auto flex justify-between items-center">
            <h3 className="text-[20px] font-bold leading-[27px]">
              {data?.task?.length > 20
                ? data?.task?.slice(0, 20) + "..."
                : data?.task}
            </h3>
            <span
              className={`w-[70px] h-[27px] rounded-full text-[11px] ${statusColor(
                data?.status
              )}
            font-medium leading-[14.85px] flex items-center justify-center `}
            >
              {getFormattedStatus(data?.status)}
            </span>
          </div>
          <div className="w-auto flex flex-col justify-start items-start gap-1">
            <span className="text-[16px] font-normal leading-[21.6px] text-white/50">
              Task Type:{" "}
              <span className="capitalize font-medium">
                {data?.taskType?.length > 25
                  ? data?.taskType?.slice(0, 28) + "..."
                  : data?.taskType}
              </span>
            </span>
            <span className="text-[16px] font-normal leading-[21.6px] text-white/50">
              Created By:{" "}
              <span className="font-medium">{data?.assignBy?.name}</span>
            </span>
          </div>
          <div className="absolute bottom-2 left-3 w-[calc(100%-1.5rem)] flex justify-between items-center">
            <div className="w-auto flex gap-2 justify-start items-center">
              <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-[27px] rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[14.85px] bg-[#9CA2AB]/[0.12] text-[#fff]/[0.5]">
                Due {data?.dueDate ? getUnixDate(data?.dueDate) : "No Due Date"}
              </button>
              <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-[27px] rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[14.85px] bg-[#9CA2AB]/[0.12] text-[#fff]/[0.5]">
                Recurring {data?.recurringDays ? data?.recurringDays : 0} days
              </button>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering other click events
                setDeleteModalOpen(true);
                setDeleteId(data?._id);
              }}
            >
              <MdDelete className="text-[#fff]/[0.5] text-lg" />
            </button>
          </div>
        </div>
      </button>
    </>
  );
};

export default TasksCard;
