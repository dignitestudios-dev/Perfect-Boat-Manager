import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import TasksCard from "./TasksCard";

const TasksContainer = () => {
  const { navigate } = useContext(GlobalContext);
  return (
    <div className="h-full  w-full  flex flex-col gap-6 justify-start items-center">
      <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
        <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
          Tasks List{" "}
          <span className="text-[12px] font-normal text-white/50 ">(723)</span>
        </h3>

        <div className="w-full h-auto flex justify-between items-center">
          <div className="flex w-1/2 lg:w-[295px] h-[32px]  justify-start items-start rounded-[8px] bg-[#1A293D] relative">
            <span className="w-[32px] h-full flex items-center justify-center">
              <FiSearch className="text-white/50 text-lg" />
            </span>
            <input
              type="text"
              placeholder="Search here"
              className="w-[calc(100%-35px)] outline-none text-sm bg-transparent h-full"
            />
          </div>

          <button
            onClick={() => navigate("/add-task", "All Tasks")}
            className="h-[35px] w-[114px] flex items-center gap-1 rounded-[10px] justify-center bg-[#199BD1] text-white text-sm"
          >
            <span className="text-lg">+</span>
            Add New Task
          </button>
        </div>
        <div className="w-auto flex gap-2 justify-start items-center">
          <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]/[0.5]">
            All
          </button>
          <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]/[0.5]">
            In-Progress
          </button>
          <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]/[0.5]">
            Completed
          </button>
          <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]/[0.5]">
            Recurring
          </button>
          <button className="w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]/[0.5]">
            Overdue
          </button>
        </div>

        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
          <TasksCard />
        </div>
      </div>
    </div>
  );
};

export default TasksContainer;
