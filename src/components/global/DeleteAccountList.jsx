import React, { useContext, useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import EmployeeDetailModal from "../../pages/Employees/EmployeeDetailModal";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AccountDeletedModal from "./AccountDeletedModal";
import { STATUS_ENUM } from "../../constants/data";
import { GlobalContext } from "../../contexts/GlobalContext";
import axios from "../../axios";
import StatusType from "./headerDropDowns/StatusType";
import LocationType from "./headerDropDowns/LocationType";
import TaskType from "./headerDropDowns/TaskType";
import { ErrorToast } from "./Toaster";
import AssignModalLoader from "./Loaders/AssignModalLoader";
import ManagerListLoader from "./Loaders/ManagerListLoader";
import { getUnixDate } from "../../constants/DateFormat";
import { FiLoader } from "react-icons/fi";

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

const getFormattedStatus = (status) => {
  return STATUS_ENUM[status] || status;
};

const DeleteAccountList = () => {
  const { id } = useParams();
  const { setUpdateEmployee } = useContext(GlobalContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { reasonForDelete } = location.state || {};
  console.log("🚀 ~ DeleteAccountList ~ reasonForDelete:", reasonForDelete);

  const [taskTypeDropdownOpen, setTaskTypeDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [taskType, setTaskType] = useState("");

  const [isBoatModalOpen, setIsBoatModalOpen] = useState(false);
  const [isAssignEmployeeModalOpen, setIsAssignEmployeeModalOpen] =
    useState(false);
  const [isAccountDeletedModalOpen, setIsAccountDeletedModalOpen] =
    useState(false);

  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteLoad, setDeleteLoad] = useState(false);
  const [passSelectedEmployee, setPassSelectedEmployee] = useState("");

  const [inputError, setInputError] = useState({});

  const toggleTaskTypeDropdown = () => {
    setTaskTypeDropdownOpen(!taskTypeDropdownOpen);
  };

  const toggleStatusDropdown = () => {
    setStatusDropdownOpen(!statusDropdownOpen);
  };

  const filteredData = userData?.tasks?.filter((item) => {
    const matchesStatus =
      statusFilter && statusFilter !== "all"
        ? item?.status === statusFilter
        : true;
    const taskTypeMatch =
      taskType && taskType !== "all"
        ? item?.taskType?.toLowerCase() === taskType?.toLowerCase()
        : true;
    return matchesStatus && taskTypeMatch;
  });

  const handleViewProfile = () => {
    navigate(`/employees/${id}`);
  };

  const backSubmit = () => {
    navigate("/employees");
  };

  const handleDelete = async () => {
    setInputError({});
    if (!passSelectedEmployee?.id) {
      setInputError({ employee: "Select Employee" });
      return;
    }
    setDeleteLoad(true);
    try {
      const taskData = {
        task: userData?.tasks?.map((task) => task?._id),
      };

      const putResponse = await axios.put(
        `/manager/employees/${passSelectedEmployee.id}/task/assign`,
        taskData
      );
      if (putResponse?.status === 200) {
        const obj = {
          reason: reasonForDelete,
        };
        const deleteResponse = await axios.delete(`/manager/employees/${id}`, {
          data: obj,
        });

        if (deleteResponse?.status === 200) {
          setIsAccountDeletedModalOpen(true);
          setUpdateEmployee((prev) => !prev);
        }
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      ErrorToast(error?.response?.data?.message);
    } finally {
      setDeleteLoad(false);
    }
  };

  const getDataById = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/manager/employees/${id}`);
      if (response?.status === 200) {
        setUserData(response?.data?.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataById();
  }, []);

  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
        <div className="flex w-full items-center justify-between">
          <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
            Delete Account
          </h3>
          <button
            onClick={handleViewProfile}
            className="w-full lg:w-[135px] h-[35px] flex items-center gap-1 rounded-[10px] justify-center bg-[#1A293D] text-[#199BD1] text-[11px] font-bold leading-[14.85px]"
          >
            View Profile
          </button>
        </div>
        <p className="text-[16px]">
          Before deleting the account of {userData?.employee?.name}, please
          reassign the following tasks that are currently assigned to this
          employee to another employee.
        </p>
        <div className="w-full max-w-[500px] flex flex-col gap-2 sm:gap-4 ">
          <label className="text-[16px] font-medium leading-[21.6px] text-white">
            Assign Employee
          </label>
          <button
            onClick={() => setIsBoatModalOpen(true)} // Open the Employee Detail Modal
            className="w-full h-[52px] bg-[#1A293D] disabled:text-50 outline-none px-3 focus:border-[1px] focus:border-[#55C9FA] rounded-xl"
          >
            {passSelectedEmployee?.name || "Click here to assign"}
          </button>
          {inputError?.employee && (
            <p className="text-red-500 -mt-3 pl-2">{inputError?.employee}</p>
          )}
        </div>

        <div className="w-full overflow-x-auto lg:overflow-visible mt-4">
          <div className="min-w-[700px]">
            {" "}
            {/* Increased min-width to accommodate the new column */}
            {/* Table Headings */}
            <div className="w-full grid h-10 grid-cols-5 text-[11px] font-medium leading-[14.85px] text-white/50 border-b border-[#fff]/[0.14] py-1">
              <span className="w-full flex justify-start items-center">
                Boat name
              </span>
              <TaskType
                taskTypeDropdownOpen={taskTypeDropdownOpen}
                toggleTaskTypeDropdown={toggleTaskTypeDropdown}
                setTaskType={setTaskType}
                taskType={taskType}
              />
              <span className="w-full flex justify-start items-center">
                Due Date
              </span>
              <span className="w-full flex justify-start items-center">
                Recurring
              </span>{" "}
              {/* New column */}
              <StatusType
                statusDropdownOpen={statusDropdownOpen}
                statusFilter={statusFilter}
                toggleStatusDropdown={toggleStatusDropdown}
                setStatusFilter={setStatusFilter}
              />
            </div>
            {loading ? (
              <div className="pt-2">
                <ManagerListLoader />
              </div>
            ) : (
              <>
                {filteredData?.length > 0 ? (
                  <>
                    {filteredData?.map((task, index) => (
                      <div
                        key={index}
                        className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[11px] font-medium leading-[14.85px] text-white justify-start items-center"
                      >
                        <span className="w-full flex justify-start items-center">
                          {task?.boatName}
                        </span>
                        <span className="w-full flex justify-start items-center">
                          {task?.taskType}
                        </span>
                        <span className="w-full flex justify-start items-center">
                          {task?.dueDate
                            ? getUnixDate(task?.dueDate)
                            : "No Due Date"}
                        </span>
                        <span className="w-full flex justify-start items-center">
                          {task?.reoccuringDays || "---"}
                        </span>{" "}
                        {/* Recurring */}
                        <span className="w-full flex justify-start items-center">
                          <span
                            className={`w-auto h-[27px] ${statusColor(
                              task?.status
                            )} rounded-full flex items-center justify-center px-2`}
                          >
                            {getFormattedStatus(task?.status)}
                          </span>
                        </span>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="pt-4">No record found</div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full mt-4 flex justify-end gap-4">
        <button
          onClick={backSubmit}
          className="w-[235px] h-[54px] bg-[#02203A] text-[#FFFFFF] font-medium rounded-lg"
        >
          Back
        </button>

        <button
          disabled={deleteLoad}
          onClick={handleDelete}
          className="w-full lg:w-[208px] h-[52px] bg-[#199BD1] text-white rounded-[12px] flex items-center
             justify-center font-medium leading-[21.6px] tracking-[-0.24px]"
        >
          <div className="flex items-center">
            <span className="mr-1">Delete Account</span>
            {deleteLoad && (
              <FiLoader className="animate-spin text-lg mx-auto" />
            )}
          </div>
        </button>
      </div>

      {/* EmployeeDetailModal Component */}
      {isBoatModalOpen && (
        <EmployeeDetailModal
          employeeId={id}
          setIsOpen={setIsBoatModalOpen}
          SetPassSelectedEmployee={setPassSelectedEmployee}
          setInputError={setInputError}
        />
      )}

      {/* AssignManagerModal Component */}
      {isAssignEmployeeModalOpen && (
        <AssignManagerModal
          isOpen={isAssignEmployeeModalOpen}
          onClose={() => setIsAssignEmployeeModalOpen(false)}
        />
      )}

      {/* AccountDeletedModal Component */}
      {isAccountDeletedModalOpen && (
        <AccountDeletedModal
          isOpen={isAccountDeletedModalOpen}
          setIsOpen={setIsAccountDeletedModalOpen}
        />
      )}
    </div>
  );
};

export default DeleteAccountList;
