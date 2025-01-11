import React, { useRef, useState } from "react";
import { TbCaretDownFilled } from "react-icons/tb";

const TaskInputField = ({
  isEdit,
  setInputError,
  tasks,
  setDisplaySelectedTask,
  displaySelectedTask,
  customTypeText,
  setCustomTypeText,
  showButton
}) => {
  const additionalDropdownRef = useRef();
  const [isTaskDropdownOpen, setTaskDropdownOpen] = useState(false);
  const [customInput, setCustomInput] = useState(false);

  const toggleTaskDropdown = () => {
    setTaskDropdownOpen(!isTaskDropdownOpen);
  };

  const handleTaskSelection = (task) => {
    if (task === "custom") {
      setTaskDropdownOpen(true);
      setCustomInput(true);
    } else {
      setDisplaySelectedTask(task);
      setInputError({});
      setTaskDropdownOpen(false); // Close task dropdown after selecting a task
      // setDisplaySelectedTask(null);
      // setTasks(
      //   taskDropDown?.find((item) => item?.taskType === taskType)?.task || []
      // );
    }
  };
  const isDisabled = showButton === true ? isEdit : !isEdit;
  return (
    <div className="w-full h-auto flex flex-col gap-1 justify-end items-start">
      <label className="text-[16px] font-medium leading-[21.6px]">Task</label>
      <div
        onClick={isDisabled  ? null : toggleTaskDropdown}
        className={`group transition-all duration-500 w-full ${
          isTaskDropdownOpen ? "rounded-t-xl rounded-b-none" : "rounded-xl"
        } h-[52px] ${
          isDisabled && "cursor-pointer"
        } bg-[#1A293D] outline-none flex justify-between items-center px-3 relative`}
      >
        <span className="text-gray-400">
          {displaySelectedTask || "Select Task"}{" "}
        </span>
        <span className="text-gray-400">
          <TbCaretDownFilled
            className={`${isTaskDropdownOpen ? "rotate-180" : "rotate-0"}`}
          />
        </span>
        {/* Dropdown menu for tasks */}
        <div
          ref={additionalDropdownRef}
          className={`${
            isTaskDropdownOpen ? "flex" : "hidden"
          } flex-col justify-start items-start gap-3 transition-all duration-500 py-3 absolute top-[54px]
                    shadow-xl left-0 w-full max-h-40 overflow-y-auto bg-[#1A293D] rounded-b-2xl`}
        >
          {tasks.length > 0 ? (
            <>
              {tasks.map((task, index) => (
                <button
                  key={index}
                  onClick={() => handleTaskSelection(task)}
                  className="text-gray-300 w-full h-8 px-5 flex justify-start items-center text-left hover:bg-[#000]/10"
                >
                  {task}
                </button>
              ))}
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTaskSelection("custom");
                  }}
                  className="w-full text-gray-300 h-8 px-5 hover:bg-[#000]/10 flex flex-col gap-1 justify-center 
                    relative items-start"
                >
                  <span>Custom</span>
                  {customInput && (
                    <div className="absolute w-full top-10 left-0 flex flex-col justify-start items-start gap-2 px-5">
                      <input
                        onChange={(e) => setCustomTypeText(e.target.value)}
                        type="text"
                        className="w-[95%] h-[42px] mb-2 bg-[#1A293D] disabled:text-white/50 outline-none px-3
                           border-[1px] border-[#55C9FA] rounded-md"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTaskSelection(customTypeText);
                          toggleTaskDropdown();
                        }}
                        className="w-[95%] h-[42px] rounded-md bg-[#119bd1] text-white flex items-center 
                        justify-center text-sm font-medium"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </button>
              </>
            </>
          ) : (
            <span className="text-gray-400 px-5">Task type is custom</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskInputField;
