import React, { useContext, useState, useRef, useEffect } from "react";
import AddFleetInput from "../../components/fleet/AddFleetInput";
import { GlobalContext } from "../../contexts/GlobalContext";
import { IoCalendarOutline } from "react-icons/io5";
import { TbCalendarStats, TbCaretDownFilled } from "react-icons/tb";
import DateModal from "../../components/tasks/DateModal";
import TaskAssignedModal from "./TaskAssignedModal";
import EmployeeDetailModal from "../Employees/EmployeeDetailModal";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import moment from "moment";
import { FaCaretDown } from "react-icons/fa";
import { recurringOptions } from "../../constants/data";
import { FiLoader } from "react-icons/fi";
import axios from "../../axios";
import { ErrorToast } from "../../components/global/Toaster";

const AssignReportedTask = () => {
  const today = moment();
  const { navigate } = useContext(GlobalContext);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for TaskAssignedModal
  const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false); // State for EmployeeDetailModal
  const RecurringRef = useRef(null); // Reference for Recurring Dropdown

  const location = useLocation();
  const { task } = location.state || {};
  const [passSelectedEmployee, setPassSelectedEmployee] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [inputError, setInputError] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [selectedTaskType, setSelectedTaskType] = useState("");
  const [selectedTask, setSelectedTask] = useState("");

  const [RecurringDropdown, setRecurringDropdown] = useState(false);
  const [recurringDays, setRecurringDays] = useState("");
  const toggleRecurringDropdown = (e) => {
    if (RecurringRef.current && !RecurringRef.current.contains(e.target)) {
      setRecurringDropdown((prev) => !prev);
      // setRecurringDropdown(!RecurringDropdown);
    }
  };

  const handleAssignTask = async (data) => {
    try {
      setSubmitLoading(true);
      const obj = {
        boat: data.boatId,
        task: selectedTaskType,
        taskType: selectedTaskType,
        dueDate: dueDate?.unix,
        description: data.note,
        reoccuring: true,
        reoccuringDays: recurringDays,
        assignTo: [passSelectedEmployee?.id],
      };
      const response = await axios.post("/manager/task", obj);

      if (response.status === 200) {
        setIsModalOpen(true);
      }
    } catch (err) {
      console.log("🚀 ~ handleAssignTask ~ err:", err);
      ErrorToast(err?.response?.data?.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleSelectDay = (day, text) => {
    setInputError({});
    if (day === "custom") {
      setRecurringDays(day);
      setSelectedDay(text);
      setCustomDays(true);
      setRecurringDropdown(true);
    } else {
      setRecurringDays(day);
      setSelectedDay(text); // Set selected text
      setRecurringDropdown(false); // Close the dropdown after selecting
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (task) {
      setValue("boatId", task?.boat?._id);
      setValue("name", task?.boat?.name);
      setValue("type", task?.boat?.boatType);
      setValue("note", task?.note);
      setValue("location", task?.boat?.location);
      const combinedValue = `${task?.boat?.model || ""}/${
        task?.boat?.make || ""
      }/${task?.boat?.size || ""}`;
      setValue("combined", combinedValue);
      setSelectedTaskType(task?.task?.taskType);
      setSelectedTask(task?.task?.task);
      setPassSelectedEmployee({
        name: task?.employee?.name,
        id: task?.employee?._id,
      });
      setDueDate({
        normal: moment(task?.task?.dueDate * 1000).format("YYYY-MM-DD"),
        unix: task?.task?.dueDate,
      });
      setSelectedDay(
        task?.task?.reoccuringDays
          ? `${task?.task?.reoccuringDays} days`
          : "None"
      );
      setRecurringDays(task?.task?.reoccuringDays);
    }
  }, [task, setValue]);

  return (
    <div className="w-full h-auto min-h-screen overflow-y-auto bg-[#1A293D] text-white p-4 pb-20 flex flex-col justify-start items-start">
      <form className="w-full" onSubmit={handleSubmit(handleAssignTask)}>
        <div className="w-full flex flex-col justify-start items-start gap-6 p-6 rounded-[18px] bg-[#001229]">
          <div className="w-full h-auto flex flex-col gap-6 justify-start items-start ">
            <div className="w-full h-auto flex justify-between items-center">
              <h3 className="text-[18px] font-bold leading-[24.3px]">
                Assign Reported Task
              </h3>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-start gap-4 ">
              <div className="w-full grid grid-cols-2 gap-12">
                <AddFleetInput
                  label={"Name"}
                  isDisabled={true}
                  register={register("name", {
                    required: "Please enter your name",
                  })}
                />
                <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
                  <AddFleetInput
                    label={"Boat Type"}
                    isDisabled={true}
                    register={register("type", {
                      required: "Please enter boat type",
                    })}
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-12">
                <AddFleetInput
                  isDisabled={true}
                  label={"Modal/Make/Size"}
                  register={register("combined", {
                    required: "Please enter boat type",
                  })}
                />
                <AddFleetInput
                  label={"Location"}
                  register={register("location", {
                    required: "Please enter boat type",
                  })}
                />
              </div>
              <div className="w-full grid grid-cols-1 gap-12">
                <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
                  {/* Horizontal line above the Assigned Employee label */}
                  <hr className="w-full  mb-4 h-[1px] bg-[#1A293D]" />
                  <div className="flex items-center justify-between">
                    <label className="text-[16px] font-medium leading-[21.6px]">
                      {"Assigned Employee"}
                    </label>
                    <p
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsEmployeeModalOpen(true);
                      }}
                      className="text-[#199BD1] cursor-pointer ml-2 text-sm font-medium hover:underline"
                    >
                      Change
                    </p>
                  </div>
                  {/* <div className="w-full grid grid-cols-2 gap-12">
                  <AddFleetInput />
                </div> */}
                  {/* Horizontal line above the Note label */}
                  <hr className="w-full border-t border-gray-600 my-4" />
                  <label className="text-[16px] font-medium leading-[21.6px]">
                    {"Note"}
                  </label>
                  <textarea
                    {...register("note", {
                      required: "Please enter note",
                    })}
                    type="text"
                    className="w-full h-[315px] resize-none bg-[#1A293D] outline-none  p-3 focus:border-[1px] focus:border-[#55C9FA] rounded-xl"
                  ></textarea>
                </div>
              </div>
            </div>
            <span className="w-full h-[0.5px] bg-white/10"></span>

            <div className="w-full flex flex-col justify-start items-start gap-6">
              <div className="w-auto flex justify-start items-center gap-3">
                <IoCalendarOutline className="text-2xl text-white/40" />
                <span className="text-md font-normal text-white">Due Date</span>
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen(true)}
                  className="text-xs font-normal text-[#199BD1]"
                >
                  {dueDate?.normal || "Select Due Date"}
                </button>
              </div>
              <div className="w-auto flex justify-start items-center gap-3">
                <TbCalendarStats className="text-2xl text-white/40" />
                <span className="text-md font-normal text-white">
                  Recurring Days
                </span>
                <button
                  type="button"
                  onClick={toggleRecurringDropdown}
                  className="text-xs flex flex-col justify-start items-start font-normal text-[#199BD1] relative"
                >
                  <span className="flex gap-1 justify-start items-center">
                    <span>{selectedDay || "Select Days"}</span>
                    <FaCaretDown />
                  </span>
                  <div
                    ref={RecurringRef}
                    className={`w-[164px] h-32 overflow-y-auto rounded-md bg-[#1A293D] transition-all duration-300 z-[1000] ${
                      RecurringDropdown ? "scale-100" : "scale-0"
                    } flex flex-col gap-3 shadow-lg p-3 justify-start items-start absolute top-6 left-0`}
                  >
                    {recurringOptions?.map((option) => (
                      <div
                        type="button"
                        key={option.value}
                        className="w-full flex justify-start items-start gap-2 cursor-pointer"
                        onClick={() =>
                          handleSelectDay(option.value, option.label)
                        }
                      >
                        <span className="text-white/50 text-[11px] font-medium leading-[14.85px]">
                          {option.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </button>
              </div>
            </div>

            <DateModal
              isOpen={isCalendarOpen}
              setIsOpen={setIsCalendarOpen}
              minDate={today.toDate()}
            />
          </div>
        </div>
        <div className="w-full flex justify-end mt-10 items-center gap-4">
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
            className="w-full lg:w-[208px] h-[52px] bg-[#02203A] text-[#199BD1] rounded-[12px] flex items-center justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
          >
            {"Back"}
          </button>
          <button
            disabled={submitLoading}
            type="submit"
            className="w-full lg:w-[208px] h-[52px] bg-[#199BD1] text-white rounded-[12px] flex items-center
             justify-center text-[16px] font-medium leading-[21.6px] tracking-[-0.24px]"
          >
            <div className="flex items-center">
              <span className="mr-1">Assign Reported Task</span>
              {submitLoading && (
                <FiLoader className="animate-spin text-lg mx-auto" />
              )}
            </div>
          </button>
        </div>
      </form>
      {/* Conditionally render the EmployeeDetailModal */}
      {isEmployeeModalOpen && (
        <EmployeeDetailModal
          setIsOpen={setIsEmployeeModalOpen}
          SetPassSelectedEmployee={setPassSelectedEmployee}
          setInputError={setInputError}
        />
      )}
      <TaskAssignedModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          navigate("/new-tasks-request");
        }}
      />{" "}
      {/* Render the TaskAssignedModal */}
    </div>
  );
};

export default AssignReportedTask;
