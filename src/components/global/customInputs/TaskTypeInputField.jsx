import React, { useEffect, useRef, useState } from "react";
import { TbCaretDownFilled } from "react-icons/tb";
// import { taskTypeData } from '../../../data/TaskTypeData';

const TaskTypeInputField = ({
  isEdit,
  setInputError = () => {},
  taskDropDown,
  setTasks,
  selectedTaskType,
  setSelectedTaskType,
  setCustomTypeText,
  customTypeText,
  setDisplaySelectedTask,
  showButton,
}) => {
  const taskTypeDropdownRef = useRef();
  const [isTaskTypeDropdownOpen, setTaskTypeDropdownOpen] = useState(false);
  const [customInput, setCustomInput] = useState(false);
  const [isTaskDropdownOpen, setTaskDropdownOpen] = useState(false);

  const toggleTaskTypeDropdown = () => {
    setTaskTypeDropdownOpen(!isTaskTypeDropdownOpen);
  };

  const handleTaskTypeSelection = (taskType) => {
    setInputError({});
    if (taskType === "custom") {
      setTaskTypeDropdownOpen(true);
      setCustomInput(true);
      setTaskDropdownOpen(false);
    } else {
      setSelectedTaskType(taskType);
      setTasks(
        taskDropDown?.find((item) => item?.taskType === taskType)?.task || []
      );
      setTaskDropdownOpen(false);
    }
    setDisplaySelectedTask(null);
  };

  const inputRef = useRef(null);

  // Focus the input field when customInput is true
  useEffect(() => {
    if (customInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [customInput]);

  const isDisabled = showButton === true ? isEdit : !isEdit;
  return (
    <div className="w-full h-auto flex flex-col gap-1 justify-end items-start z-10">
      <label className="text-[16px] font-medium leading-[21.6px]">
        {"Task Type"}
      </label>
      <div
        onClick={isDisabled ? null : toggleTaskTypeDropdown}
        className={`group transition-all duration-500 w-full ${
          isTaskTypeDropdownOpen ? "rounded-t-xl rounded-b-none" : "rounded-xl"
        } h-[52px] ${
          isDisabled && "cursor-pointer"
        } bg-[#1A293D] outline-none flex justify-between items-center px-3 focus:border-[1px]
                   focus:border-[#55C9FA] relative`}
      >
        <span
          className={`${selectedTaskType ? "text-white" : "text-gray-400"}`}
        >
          {selectedTaskType?.replace(/([A-Z])/g, " $1")?.trim() ||
            "Select Task Type"}{" "}
        </span>
        <span className="text-gray-400">
          <TbCaretDownFilled
            className={`${isTaskTypeDropdownOpen ? "rotate-180" : "rotate-0"}`}
          />
        </span>

        <div
          ref={taskTypeDropdownRef}
          className={`${
            isTaskTypeDropdownOpen ? "flex" : "hidden"
          } flex-col justify-start items-start gap-3 transition-all duration-500 py-3 absolute -bottom-56 shadow-xl
                     left-0 w-full h-56 max-h-56 bg-[#1A293D] rounded-b-2xl`}
        >
          <div className="w-full h-full overflow-y-auto flex flex-col justify-start items-start gap-2">
            {taskDropDown?.map((item, index) => (
              <button
                type="button"
                key={index}
                onClick={() => handleTaskTypeSelection(item.taskType)}
                className="text-gray-300 w-full h-8 px-5 py-2 flex justify-start items-center hover:bg-[#000]/10"
              >
                {item?.taskType?.replace(/([A-Z])/g, " $1")?.trim()}
              </button>
            ))}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleTaskTypeSelection("custom");
              }}
              className="w-full text-gray-300 h-8 px-5 hover:bg-[#000]/10 flex flex-col gap-1 justify-center 
                        relative items-start"
            >
              <span>Custom</span>
              {customInput && (
                <div className="absolute w-full top-10 left-0 flex flex-col justify-start items-start gap-2 px-5">
                  <input
                    ref={inputRef}
                    onChange={(e) => setCustomTypeText(e.target.value)}
                    type="text"
                    className="w-[95%] h-[42px] mb-2 bg-[#1A293D] disabled:text-white/50 outline-none px-3
                               border-[1px] border-[#55C9FA] rounded-md"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTaskTypeSelection(customTypeText);
                      toggleTaskTypeDropdown();
                    }}
                    className="w-[95%] h-[42px] rounded-md bg-[#119bd1] text-white flex items-center 
                            justify-center text-sm font-medium"
                  >
                    Apply
                  </button>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTypeInputField;
