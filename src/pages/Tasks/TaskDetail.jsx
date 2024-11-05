import React, { useContext, useEffect, useState } from "react";
import { TiPencil } from "react-icons/ti";
import AddFleetInput from "../../components/fleet/AddFleetInput";
import { IoCalendarOutline } from "react-icons/io5";
import { TbCalendarStats } from "react-icons/tb";
import { GlobalContext } from "../../contexts/GlobalContext";
import { AuthMockup } from "../../assets/export";
import { useParams } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import axios from "../../axios";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster";
import RecurringDaysInputField from "../../components/global/customInputs/RecurringDaysInputField";
import AssignedEmployeesList from "../../components/tasks/AssignedEmployeesList";
import { useForm } from "react-hook-form";
import TaskTypeInputField from "../../components/global/customInputs/TaskTypeInputField";
import TaskInputField from "../../components/global/customInputs/TaskInputField";
import DateModal from "../../components/tasks/DateModal";
import moment from "moment";

const TaskDetail = () => {
  const { navigate, taskDropDown } = useContext(GlobalContext);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [updateLoad, setUpdateLoad] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [taskDetail, setTaskDetail] = useState({});
  const [tasks, setTasks] = useState([]);
  const [selectedTaskType, setSelectedTaskType] = useState(null);
  const [displaySelectedTask, setDisplaySelectedTask] = useState("");
  const [noteText, setNoteText] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dueDate, setDueDate] = useState({});
  const [selectedDay, setSelectedDay] = useState("");
  const [recurringDays, setRecurringDays] = useState("");
  console.log("🚀 ~ TaskDetail ~ recurringDays:", recurringDays);
  const [passSelectedEmployee, setPassSelectedEmployee] = useState("");
  const [passSelectedBoat, setPassSelectedBoat] = useState("");

  const [inputError, setInputError] = useState({});

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const getTaskDetail = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/manager/task/${id}`);
      if (response.status === 200) {
        const data = response?.data?.data;
        setTaskDetail(data);
        setNoteText(data?.description || "");
        setSelectedTaskType(data?.taskType || "");
        setDisplaySelectedTask(data?.task || "");
        setPassSelectedBoat(data?.boat || null);
        setPassSelectedEmployee(data?.assignTo[0] || null);
        setValue("assignBy", data?.assignBy?.name);
        setSelectedDay(
          data?.reoccuringDays ? `${data?.reoccuringDays} days` : "None"
        );
        setRecurringDays(data?.reoccuringDays);
        setDueDate({
          normal: moment(data?.dueDate * 1000).format("YYYY-MM-DD"),
          unix: data?.dueDate,
        });
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
      console.log("🚀 ~ getTaskDetail ~ err:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getTaskDetail();
    }
  }, [id]);

  const handleUpdate = async () => {
    setInputError({});
    const obj = {
      boat: passSelectedBoat?._id,
      task: displaySelectedTask ? displaySelectedTask : selectedTaskType,
      taskType: selectedTaskType,
      dueDate: dueDate?.unix,
      description: noteText,
      reoccuring: recurringDays === "none" ? false : true,
      reoccuringDays: recurringDays === "none" ? 0 : +recurringDays,
      assignTo: [
        passSelectedEmployee?._id
          ? passSelectedEmployee?._id
          : passSelectedEmployee?.id,
      ],
    };
    try {
      setUpdateLoad(true);

      const response = await axios.put(`/manager/task/${id}`, obj);
      if (response.status === 200) {
        SuccessToast("Task Updated successfully");
        getTaskDetail();
        setIsEdit(false);
      }
    } catch (error) {
      console.error("Error update task:", error);
      ErrorToast(error?.response?.data.message);
    } finally {
      setUpdateLoad(false);
    }
  };

  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      {isLoading ? (
        <div className="w-full h-[90dvh] flex justify-center items-center">
          <FiLoader className="text-[30px] animate-spin text-lg mx-auto" />
        </div>
      ) : (
        <div className="h-full w-full flex flex-col gap-6 justify-start items-center">
          <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
            <div className="w-full flex justify-between items-center h-12">
              <div className="w-auto flex justify-start items-center gap-2">
                <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
                  {isEdit ? "Edit Task" : "Task"}
                </h3>
                <span className="text-[11px] bg-[#36B8F3]/[0.12] rounded-full text-[#36B8F3] font-medium leading-[14.85px] flex justify-center items-center w-[70px] h-[27px] ">
                  {taskDetail?.status}
                </span>
              </div>

              <button
                onClick={() => setIsEdit(true)}
                className="w-[118px] h-[32px] flex justify-center items-center gap-2 bg-[#36B8F3]/[0.12] rounded-[10px] text-[#36B8F3] text-[13px] font-bold"
              >
                <TiPencil className="text-lg" />
                <span>Edit</span>
              </button>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-start gap-4 ">
              <div className="w-full h-auto grid grid-cols-2 gap-12">
                {/* Boat Name and Assign Employee section */}
                <div className="w-full lg:w-[327px] h-[90px] flex gap-3 justify-start items-center rounded-[12px] bg-[#1A293D] p-2">
                  <img
                    src={taskDetail?.boat?.cover || AuthMockup}
                    alt="taskimage"
                    className="w-[106px] h-[74px] rounded-[12px]"
                  />
                  <div className="w-auto flex flex-col justify-start items-start">
                    <h3 className="text-[16px] font-medium leading-[21.6px] text-white">
                      {taskDetail?.boat?.name}
                    </h3>
                    <p className="text-[14px] font-normal text-[#199bd1]">
                      {taskDetail?.boat?.model}/{taskDetail?.boat?.make}/
                      {taskDetail?.boat?.size}
                    </p>
                  </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-1 justify-between items-start">
                  <AddFleetInput
                    label={"Task Created By"}
                    register={register("assignBy")}
                    isDisabled={true}
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-12">
                <div>
                  <TaskTypeInputField
                    selectedTaskType={selectedTaskType}
                    isEdit={isEdit}
                    taskDropDown={taskDropDown}
                    setTasks={setTasks}
                    setSelectedTaskType={setSelectedTaskType}
                    setInputError={setInputError}
                  />
                  {inputError.task && (
                    <p className="text-red-500">{inputError.task}</p>
                  )}
                </div>
                <div>
                  <TaskInputField
                    isEdit={isEdit}
                    setInputError={setInputError}
                    tasks={tasks}
                    setDisplaySelectedTask={setDisplaySelectedTask}
                    displaySelectedTask={displaySelectedTask}
                  />
                  {/* {inputError.dueDate && (
                  <p className="text-red-500">{inputError.dueDate}</p>
                )} */}
                </div>
              </div>
              <div className="w-full grid grid-cols-1 gap-12">
                <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
                  <label className="text-[16px] font-medium leading-[21.6px]">
                    {"Add Note"}
                  </label>
                  <textarea
                    disabled={!isEdit}
                    value={noteText}
                    onChange={(e) => {
                      setNoteText(e.target.value);
                      setInputError({});
                    }}
                    className="w-full h-[315px] disabled:text-white/50 resize-none bg-[#1A293D] outline-none p-3 focus:border-[1px] focus:border-[#55C9FA] rounded-xl"
                  ></textarea>
                </div>
              </div>
            </div>
            <span className="w-full h-[0.5px] bg-white/10"></span>

            <div className="w-full flex flex-col gap-4">
              <div className="w-auto flex justify-start items-start gap-3">
                <div className="flex gap-2">
                  <IoCalendarOutline className="text-2xl text-white/40" />
                  <div className="flex flex-col justify-start items-start">
                    <span className="text-[16px] font-bold text-white">
                      Due Date
                    </span>
                    <span className="text-[12px] font-normal pt-1">
                      {" "}
                      {dueDate?.normal}{" "}
                    </span>
                  </div>
                  {isEdit && (
                    <button
                      onClick={() => setIsCalendarOpen(true)}
                      className="pt-1 text-xs flex font-normal text-[#199BD1]"
                    >
                      <span>Change</span>
                    </button>
                  )}
                  {inputError.dueDate && (
                    <p className="text-red-500">{inputError.dueDate}</p>
                  )}
                </div>
              </div>
              {/* Recurring Days */}
              <RecurringDaysInputField
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                setRecurringDays={setRecurringDays}
                isEdit={isEdit}
                setInputError={setInputError}
              />
              {inputError.reoccuringDays && (
                <p className="text-red-500 -mt-1">
                  {inputError.reoccuringDays}
                </p>
              )}
            </div>
          </div>
          <DateModal
            isOpen={isCalendarOpen}
            setIsOpen={setIsCalendarOpen}
            setDueDate={setDueDate}
            setInputError={setInputError}
          />
          <AssignedEmployeesList
            isEdit={isEdit}
            taskDetail={taskDetail}
            passSelectedEmployee={passSelectedEmployee}
            setPassSelectedEmployee={setPassSelectedEmployee}
            setInputError={setInputError}
          />
          <div className="w-full flex justify-end py-4 items-center gap-4">
            {isEdit ? (
              <div className="w-full flex justify-end py-4 items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsEdit(false);
                  }}
                  className="w-full lg:w-[208px] h-[52px] bg-[#02203A] text-[#199BD1] rounded-[12px] flex items-center justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
                >
                  {"Back"}
                </button>
                <button
                  disabled={updateLoad}
                  onClick={handleUpdate}
                  className="w-full lg:w-[208px] h-[52px] bg-[#199BD1] text-white rounded-[12px] flex items-center justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
                >
                  <div className="flex items-center">
                    <span className="mr-1">Save</span>
                    {updateLoad && (
                      <FiLoader className="animate-spin text-lg mx-auto" />
                    )}
                  </div>
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-end py-4 items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    navigate(-1);
                  }}
                  className="w-full lg:w-[208px] h-[52px] bg-[#02203A] text-[#199BD1] rounded-[12px] flex items-center justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
                >
                  {"Back"}
                </button>
                {taskDetail?.status !== "completed" && (
                  <button
                    type="button"
                    onClick={() =>
                      navigate("/task-completed", { state: taskDetail })
                    }
                    className="w-full lg:w-[208px] h-[52px] bg-[#1FBA46] text-white rounded-[12px] flex items-center justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
                  >
                    {"Mark As Completed"}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
