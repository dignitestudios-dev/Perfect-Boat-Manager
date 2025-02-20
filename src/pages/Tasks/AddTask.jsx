import React, { useContext, useEffect, useRef, useState } from "react";
import AddFleetInput from "../../components/fleet/AddFleetInput";
import { GlobalContext } from "../../contexts/GlobalContext";
import { IoCalendarOutline } from "react-icons/io5";
import { TbCalendarStats, TbCaretDownFilled } from "react-icons/tb";
import DateModal from "../../components/tasks/DateModal";
import EmployeeDetailModal from "../Employees/EmployeeDetailModal"; // Ensure the correct path
import BoatSelectModal from "../Fleet/BoatSelectModal";
import { FaCaretDown } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import TaskAssignSucessModal from "./TaskAssignSuccessModal";
import TaskTypeInputField from "../../components/global/customInputs/TaskTypeInputField";
import TaskInputField from "../../components/global/customInputs/TaskInputField";
import RecurringDaysInputField from "../../components/global/customInputs/RecurringDaysInputField";
import { ErrorToast } from "../../components/global/Toaster";
import axios from "../../axios";
import { FiLoader } from "react-icons/fi";
import moment from "moment";
import AddTaskBoatModal from "../../components/tasks/AddTaskBoatModal";

const AddTask = () => {
  const today = moment();
  const { taskDropDown } = useContext(GlobalContext);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const [hasAssigned, setHasAssigned] = useState(false);
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false); // State for Employee Modal
  const [isBoatModalOpen, setIsBoatModalOpen] = useState(false); // State for Boat Modal
  const location = useLocation();

  const boatname = location?.state?.boat || "";
  const [passSelectedBoat, SetPassSelectedBoat] = useState([]);

  const [passSelectedEmployee, SetPassSelectedEmployee] = useState("");
  const [tasks, setTasks] = useState([]);
  const [customTypeText, setCustomTypeText] = useState("");
  const [selectedTaskType, setSelectedTaskType] = useState(null);
  const [displaySelectedTask, setDisplaySelectedTask] = useState("");

  const [selectedDay, setSelectedDay] = useState("");
  const [dueDate, setDueDate] = useState({});
  const [recurringDays, setRecurringDays] = useState("");
  const [noteText, setNoteText] = useState("");
  const [inputError, setInputError] = useState({});

  const navigate = useNavigate();

  const submitTask = async () => {
    const errors = {};

    // Validation for each field
    if (!passSelectedBoat[0]?.id) {
      errors.boat = "Please select a boat";
    }
    if (!passSelectedEmployee?.id) {
      errors.employee = "Please select an employee";
    }
    if (!selectedTaskType) {
      errors.task = "Please select a task type";
    }
    if (!dueDate?.unix) {
      errors.dueDate = "Please select a due date";
    }
    if (!noteText) {
      errors.description = "Please enter a description";
    }
    if (!recurringDays) {
      errors.reoccuringDays = "Please specify recurring days";
    }

    // If there are errors, set the error state and return
    if (Object.keys(errors).length > 0) {
      setInputError(errors);
      return;
    }

    try {
      setSubmitLoading(true);
      const obj = {
        boat: passSelectedBoat?.map((item) => item?.id),
        task: displaySelectedTask ? displaySelectedTask : selectedTaskType,
        taskType: selectedTaskType?.replace(/([A-Z])/g, " $1")?.trim(),
        dueDate: dueDate?.unix,
        description: noteText,
        reoccuring: recurringDays === "none" ? false : true,
        reoccuringDays: recurringDays === "none" ? 0 : +recurringDays,
        assignTo: [passSelectedEmployee?.id],
      };

      const response = await axios.post("/manager/task", obj);

      if (response.status === 200) {
        // SuccessToast("Task Created")
        // navigate("/tasks")
        setHasAssigned(true);
      }
    } catch (err) {
      console.log("🚀 ~ submitTask ~ err:", err);
      ErrorToast(err?.response?.data.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  useEffect(() => {
    if (boatname?._id) {
      SetPassSelectedBoat([
        {
          name: boatname?.name,
          id: boatname?._id,
        },
      ]);
    }
  }, [boatname]);

  // const MinDateTime=new Date();

  // const date=`${MinDateTime.getDate() , MinDateTime.getMonth()+1 , MinDateTime.getFullYear()}`
  //  console.log(date,"date")
  return (
    <div className="w-full h-auto min-h-screen overflow-y-auto bg-[#1A293D] text-white p-4 pb-20 flex flex-col justify-start items-start">
      <div className="w-full flex flex-col justify-start items-start gap-6 p-6 rounded-[18px] bg-[#001229]">
        <div className="w-full h-auto flex flex-col gap-6 justify-start items-start">
          <div className="w-full h-auto flex justify-between items-center">
            <div>
              <h3 className="text-[18px] font-bold leading-[24.3px]">
                Assign New Task
              </h3>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
            <div className="w-full grid grid-cols-2 gap-5 lg:gap-32">
              <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label className="text-[16px] font-medium leading-[21.6px]">
                  Assign Employee
                </label>
                <button
                  onClick={() => setIsEmployeeModalOpen(true)} // Open the Employee Modal
                  className="w-full h-[52px] bg-[#1A293D] disabled:text-white/50 outline-none px-3 
                  focus:border-[1px] focus:border-[#55C9FA] rounded-xl"
                >
                  <span
                    className={`w-full ${
                      passSelectedEmployee?.name
                        ? "text-white"
                        : "text-gray-400"
                    }  flex justify-start`}
                  >
                    {passSelectedEmployee?.name || "Assign Employee"}
                  </span>
                </button>
                {inputError.employee && (
                  <p className="text-red-500">{inputError.employee}</p>
                )}
              </div>

              <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <div className="w-full justify-between flex">
                  <span className="text-[16px] font-medium leading-[21.6px]">
                    Select Boat
                  </span>
                  <span className="text-[12px] text-gray-400 -mb-2">
                    {!passSelectedEmployee?.id && "*select an employee first"}{" "}
                  </span>
                </div>
                <button
                  disabled={!passSelectedEmployee?.id ? true : false}
                  onClick={() => setIsBoatModalOpen(true)}
                  className="w-full h-[52px] bg-[#1A293D] disabled:text-white/50 outline-none px-3 
                  focus:border-[1px] focus:border-[#55C9FA] rounded-xl"
                >
                  <span
                    className={`w-full ${
                      passSelectedBoat?.length ? "text-white" : "text-gray-400"
                    }  flex justify-start`}
                  >
                    {/* Display text or selected boat name here */}
                    {passSelectedBoat[0]?.id
                      ? `${passSelectedBoat?.length} boats selected`
                      : "Select Boat"}
                  </span>
                </button>
                {inputError.boat && (
                  <p className="text-red-500">{inputError.boat}</p>
                )}
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-5 lg:gap-32">
              <div className="w-full h-auto flex flex-col gap-1 justify-end items-start">
                <TaskTypeInputField
                  isEdit={true}
                  setInputError={setInputError}
                  taskDropDown={taskDropDown}
                  setTasks={setTasks}
                  selectedTaskType={selectedTaskType}
                  setSelectedTaskType={setSelectedTaskType}
                  setCustomTypeText={setCustomTypeText}
                  customTypeText={customTypeText}
                  setDisplaySelectedTask={setDisplaySelectedTask}
                />
                {inputError.task && (
                  <p className="text-red-500">{inputError.task}</p>
                )}
              </div>
              <div className="w-full h-auto flex flex-col gap-1 justify-end items-start">
                <TaskInputField
                  isEdit={true}
                  setInputError={setInputError}
                  tasks={tasks}
                  setDisplaySelectedTask={setDisplaySelectedTask}
                  displaySelectedTask={displaySelectedTask}
                  customTypeText={customTypeText}
                  setCustomTypeText={setCustomTypeText}
                />
                {/* {inputError.dueDate && (
                  <p className="text-red-500">{inputError.dueDate}</p>
                )} */}
              </div>
            </div>
            <div className="w-full grid grid-cols-1 gap-12 mt-4">
              <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label className="text-[16px] font-medium leading-[21.6px]">
                  {"Add Note"}
                </label>
                <textarea
                  onChange={(e) => {
                    const value = e.target.value;
                    const capitalizedValue =
                      value.charAt(0).toUpperCase() + value.slice(1);
                    setNoteText(capitalizedValue);
                    setInputError({});
                  }}
                  value={noteText}
                  type="text"
                  className="w-full h-[315px] resize-none bg-[#1A293D] outline-none p-3 focus:border-[1px] focus:border-[#55C9FA] rounded-xl"
                ></textarea>
                {inputError.description && (
                  <p className="text-red-500">{inputError.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <span className="w-full h-[0.5px] bg-white/10"></span>
        <div className="w-1/2">
          <div className="w-full flex flex-col gap-4">
            <div>
              <div className="w-auto flex justify-start items-center gap-3">
                <IoCalendarOutline className="text-2xl text-white/40" />
                <span className="text-md font-normal text-white">Due Date</span>
                <button
                  onClick={() => setIsCalendarOpen(true)}
                  className="text-xs font-normal text-[#199BD1]"
                >
                  {dueDate?.normal
                    ? moment(dueDate?.normal).format("MM-DD-YYYY")
                    : "Select Due Date"}
                </button>
              </div>
              {inputError.dueDate && (
                <p className="text-red-500">{inputError.dueDate}</p>
              )}
            </div>
            <RecurringDaysInputField
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              setRecurringDays={setRecurringDays}
              isEdit={true}
              setInputError={setInputError}
            />
            {inputError.reoccuringDays && (
              <p className="text-red-500 -mt-1">{inputError.reoccuringDays}</p>
            )}
          </div>
        </div>
        <DateModal
          isOpen={isCalendarOpen}
          setIsOpen={setIsCalendarOpen}
          setDueDate={setDueDate}
          setInputError={setInputError}
          minDate={today.toDate()}
        />
        {isEmployeeModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]">
            <EmployeeDetailModal
              isOpen={isEmployeeModalOpen}
              setIsOpen={setIsEmployeeModalOpen}
              setInputError={setInputError}
              SetPassSelectedEmployee={SetPassSelectedEmployee}
            />
          </div>
        )}
        {isBoatModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]">
            <AddTaskBoatModal
              isOpen={isBoatModalOpen}
              setIsOpen={setIsBoatModalOpen}
              SetPassSelectedBoat={SetPassSelectedBoat}
              passSelectedBoat={passSelectedBoat}
              setInputError={setInputError}
              isMultiple={true}
            />
          </div>
        )}
      </div>

      <div className="w-full flex mt-16 justify-end items-center gap-6">
        <div className="w-auto flex justify-between items-center gap-4">
          <button
            type="button"
            onClick={() => {
              navigate("/tasks");
            }}
            className="w-52 h-[52px] bg-[#02203A] text-[#199BD1] rounded-[12px] flex items-center justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
          >
            {"Back"}
          </button>
          <button
            disabled={submitLoading}
            onClick={() => {
              submitTask();
            }}
            className="w-52 h-[52px] bg-[#199BD1] text-white rounded-[12px] flex items-center justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
          >
            <div className="flex items-center">
              <span className="mr-1">Save</span>
              {submitLoading && (
                <FiLoader className="animate-spin text-lg mx-auto" />
              )}
            </div>
          </button>

          {/* <TaskAssignedModal
            isOpen={hasAssigned}
            // onClick={() => setHasAssigned(false)}
          /> */}

          {hasAssigned && (
            <TaskAssignSucessModal
              isOpen={hasAssigned}
              setIsOpen={setHasAssigned}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTask;
