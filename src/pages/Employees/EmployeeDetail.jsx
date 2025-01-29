import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { TiPencil } from "react-icons/ti";
import AddFleetInput from "../../components/fleet/AddFleetInput";

import { ErrorToast, SuccessToast } from "../../components/global/Toaster";
import axios from "../../axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiLoader } from "react-icons/fi";
import ResendPasswordCard from "../../components/employees/ResendPasswordCard";
import AssignedTasksCard from "../../components/employees/AssignedTasksCard";

const EmployeeDetail = () => {
  const { navigate } = useContext(GlobalContext);
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [employee, setEmployee] = useState("");
  const [employeeTasks, setEmployeeTasks] = useState([]);
  const [updatedTasks, setUpdatedTasks] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);

  const location = useLocation();
  const editBtnshow = location?.state;
  const [isEditing, setIsEditing] = useState(editBtnshow ? true : false);
  console.log("🚀 ~ EmployeeDetail ~ isEditing:", isEditing);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(location, "location");

  const getEmployeeData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/manager/employees/${id}`);
      if (response.status === 200) {
        setEmployee(response?.data?.data?.employee);
        setEmployeeTasks(response?.data?.data?.tasks);
        setValue("name", response?.data?.data?.employee?.name);
        setValue("email", response?.data?.data?.employee?.email);
        setValue("jobtitle", response?.data?.data?.employee?.jobtitle);
        setValue("location", response?.data?.data?.employee?.location);
        setValue("phone", response?.data?.data?.employee?.phoneNumber);
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getEmployeeData();
    }
  }, [id]);

  const handleUpdateEmployee = async (data) => {
    try {
      setSubmitLoading(true);

      const updatedEmployeeData = {
        ...data,
        password: "Test@123",
        tasks: updatedTasks
          ? updatedTasks?.map((item) => item?._id)
          : employeeTasks?.map((item) => item?.id),
      };

      const response = await axios.put(
        `/manager/employees/${id}`,
        updatedEmployeeData
      );
      if (response.status === 200) {
        SuccessToast("Employee Updated");
        navigate("/employees", "Employee List");
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      {isLoading ? (
        <div className="w-full h-[90dvh] flex justify-center items-center">
          <FiLoader className="text-[30px] animate-spin text-lg mx-auto" />
        </div>
      ) : (
        <form
          className="w-full h-auto grid grid-cols-1 justify-center items-center gap-4"
          onSubmit={handleSubmit(handleUpdateEmployee)}
        >
          <div className="w-full h-auto  bg-[#1A293D] text-white  flex flex-col justify-start items-start">
            <div className="w-full flex flex-col justify-start items-start gap-6 p-6 rounded-[18px] bg-[#001229]">
              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-3 lg:items-center">
                <div>
                  <h3 className="text-[18px] font-bold leading-[24.3px]">
                    {isEditing ? `Edit ${employee.name}` : employee.name}
                  </h3>
                </div>
                <div className="w-auto flex justify-end items-center gap-2">
                  {isEditing ? (
                    <div></div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="w-[118px] h-[32px] flex justify-center items-center gap-2 bg-[#36B8F3]/[0.12]
                         rounded-[10px] text-[#36B8F3] text-[13px] font-bold"
                    >
                      <TiPencil className="text-lg" />
                      <span>Edit</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => navigate("/add-task", "Assign Tasks")}
                    className="bg-[#199BD1] w-[127px] h-[32px] rounded-xl text-white flex items-center justify-center text-sm font-medium leading-5"
                  >
                    Assign New Task
                  </button>
                </div>
              </div>
              <div className="w-full h-auto flex flex-col gap-6 justify-start items-start ">
                <div className="w-full flex flex-col justify-start items-start gap-6">
                  <div className="w-full h-auto flex flex-col justify-start items-start gap-6 ">
                    <div className="w-full grid grid-cols-2 gap-12">
                      <AddFleetInput
                        isDisabled={!isEditing}
                        label="Name"
                        type="text"
                        placeholder="Enter Name"
                        register={register("name", {
                          required: "Please enter your name.",
                          pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: "Please enter a valid name.",
                          },
                        })}
                        error={errors.name}
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^A-Za-z]/g,
                            ""
                          );
                        }}
                      />
                      <AddFleetInput
                        isDisabled={true}
                        label="Email"
                        type="email"
                        placeholder="Enter Email"
                        register={register("email", {
                          required: "Please enter your email address.",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address.",
                          },
                        })}
                        error={errors.email}
                      />
                    </div>
                    <div className="w-full grid grid-cols-2 gap-12">
                      <AddFleetInput
                        isDisabled={!isEditing}
                        label="Job Title"
                        type="text"
                        placeholder="Enter Job Title"
                        register={register("jobtitle", {
                          required: "Please enter your job title",
                        })}
                        error={errors.jobtitle}
                      />
                      <AddFleetInput
                        isDisabled={!isEditing}
                        label="Location"
                        type="text"
                        placeholder="Enter Location"
                        register={register("location", {
                          required: "Please enter a location",
                          minLength: {
                            value: 2,
                            message:
                              "Location must be at least 2 characters long",
                          },
                        })}
                        error={errors.location}
                      />
                    </div>
                    <div className="w-full grid grid-cols-2 gap-12">
                      <AddFleetInput
                        isDisabled={!isEditing}
                        label="Phone Number"
                        type="text"
                        placeholder="Enter Phone Number"
                        isPhone={true}
                        register={register("phone", {
                          required: "Please enter your phone number.",
                          pattern: {
                            value: /^\+?[0-9]{10}$/,
                            message: "Please enter a valid phone number.",
                          },
                        })}
                        maxLength={10}
                        error={errors.phone}
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /(?!^\+)[^\d]/g,
                            ""
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <ResendPasswordCard
                employee={employee}
                getEmployeeData={getEmployeeData}
              />
            </div>
          </div>

          <AssignedTasksCard
            tasks={employeeTasks}
            setUpdatedTasks={setUpdatedTasks}
            setEmployeeTasks={setEmployeeTasks}
            isEdit={isEditing}
          />
          <div className="w-full flex justify-end mt-10 items-center gap-4">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="w-full lg:w-[208px] h-[52px] bg-[#02203A] rounded-[12px] text-[#FFFFFF] flex items-center
             justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
                >
                  Back
                </button>
                <button
                  disabled={submitLoading}
                  type="submit"
                  className="w-full lg:w-[208px] h-[52px] bg-[#199BD1] text-white rounded-[12px] flex items-center
             justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
                >
                  <div className="flex items-center">
                    <span className="mr-1">Save</span>
                    {submitLoading && (
                      <FiLoader className="animate-spin text-lg mx-auto" />
                    )}
                  </div>
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-full lg:w-[208px] h-[52px] bg-[#199BD1] text-white rounded-[12px] flex items-center
             justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
              >
                Back
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default EmployeeDetail;
