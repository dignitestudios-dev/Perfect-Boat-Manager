import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { GlobalContext } from "../../contexts/GlobalContext";

const TasksCard = () => {
  const { navigate } = useContext(GlobalContext);
  return (
    <button
      onClick={() => navigate("/tasks/1", "All Tasks")}
      className="w-full h-[172px] flex justify-start items-start rounded-l-[6px] rounded-r-[16px] bg-[#1A293D]"
    >
      <div className="w-[6px] h-full rounded-l-[6px] bg-[#FFCC00]"></div>
      <div className="w-[calc(100%-6px)] h-full py-4 px-6 flex flex-col gap-2 justify-start items-start relative">
        <div className="w-full h-auto flex justify-between items-center">
          <h3 className="text-[20px] font-bold leading-[27px]">Boat A</h3>
          <span className="w-[70px] h-[27px] rounded-full bg-[#FFCC00]/[0.12] text-[11px] font-medium leading-[14.85px] flex items-center justify-center text-[#FFCC00]">
            In-Progress
          </span>
        </div>
        <div className="w-auto flex flex-col justify-start items-start gap-1">
          <span className="text-[16px] font-normal leading-[21.6px] text-white/50">
            Oil Cleaning
          </span>
          <span className="text-[16px] font-normal leading-[21.6px] text-white/50">
            Created By: <span className="font-medium">David</span>
          </span>
        </div>
        <div className="absolute bottom-3 left-3 w-[calc(100%-1.5rem)] flex justify-between items-center">
          <div className="w-auto flex gap-2 justify-start items-center">
            <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-[27px] rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#9CA2AB]/[0.12] text-[#fff]/[0.5]">
              Due 12/12/23
            </button>
            <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-[27px] rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#9CA2AB]/[0.12] text-[#fff]/[0.5]">
              Recurring 90 days
            </button>
          </div>
          <button>
            <MdDelete className="text-[#fff]/[0.5] text-lg" />
          </button>
        </div>
      </div>
    </button>
  );
};

export default TasksCard;
