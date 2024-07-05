import React, { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { TiPencil } from "react-icons/ti";
import AddFleetInput from "../../components/fleet/AddFleetInput";
import { FaCaretDown, FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import ViewAllTasksModal from "../../components/tasks/ViewAllTasksModal";
import { CiCalendar } from "react-icons/ci";
import DateModal from "../../components/tasks/DateModal";

const EmployeeDetail = () => {
  const { navigate } = useContext(GlobalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleLocationModal = (e) => {
    if (locationRef.current && !locationRef.current.contains(e.target)) {
      setLocationFilter((prev) => !prev);
    }
  };
  const [locationFilter, setLocationFilter] = useState(false);
  const locationRef = useRef(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      <div className="w-full h-auto  bg-[#1A293D] text-white  flex flex-col justify-start items-start">
        <div className="w-full flex flex-col justify-start items-start gap-6 p-6 rounded-[18px] bg-[#001229]">
          <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-3 lg:items-center">
            <div>
              <h3 className="text-[18px] font-bold leading-[24.3px]">
                **Employee Name**
              </h3>
            </div>
            <div className="w-auto flex justify-end items-center gap-2">
              <button
                onClick={() => navigate("/edit-employee/1", "Employees")}
                className="w-[118px] h-[32px] flex justify-center items-center gap-2 bg-[#36B8F3]/[0.12] rounded-[10px] text-[#36B8F3] text-[13px] font-bold"
              >
                <TiPencil className="text-lg" />
                <span>Edit</span>
              </button>
              <button
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
                    label={"Name"}
                    state={"David Beckham"}
                    disabled={true}
                  />
                  <AddFleetInput
                    label={"Email"}
                    state={"david@gmail.com"}
                    disabled={true}
                  />
                </div>
                <div className="w-full grid grid-cols-2 gap-12">
                  <AddFleetInput
                    label={"Job Title"}
                    state={"Dock manager"}
                    disabled={true}
                  />
                  <AddFleetInput
                    label={"Location"}
                    state={"East California dock"}
                    disabled={true}
                  />
                </div>
                <div className="w-full grid grid-cols-2 gap-12">
                  <AddFleetInput
                    label={"Phone Number"}
                    state={"000000000"}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 justify-start items-start mt-14 py-6 border-t-[1px] border-white/10">
            <div className="w-auto flex gap-2 justify-start items-center ">
              <h3 className="text-[18px] font-bold leading-[24.3px]">
                Resend Password
              </h3>
              <button className="text-[14px] font-medium text-[#199bd1]">
                Change
              </button>
            </div>

            <div className="w-auto flex flex-col justify-start items-start gap-3">
              <div className="flex justify-start items-center gap-2 text-white text-[16px] font-normal leading-[21.6px]">
                <span className="text-white/50">Email:</span>
                <span>marktaylor12345@gmail.com</span>
              </div>
              <div className="flex justify-start items-center gap-2 text-white text-[16px] font-normal leading-[21.6px]">
                <span className="text-white/50">Password:</span>
                <span>Pass12345</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
        <div className="w-auto flex justify-between items-center gap-2">
          <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
            Assigned Tasks{" "}
          </h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-[14px] font-medium bg-[#199bd1]/[0.2] h-8 rounded-full w-[70px] text-[#199bd1]"
          >
            View All
          </button>
        </div>

        <div className="w-full flex flex-col gap-1 justify-start items-start">
          <div className="w-full h-6 grid grid-cols-6 text-[13px] font-medium  border-b border-[#fff]/[0.14] leading-[14.85px] text-white/50 justify-start items-start">
            <span className="w-full flex justify-start items-center">
              Boat Name
            </span>
            <button
              onClick={toggleLocationModal}
              className="w-full flex flex-col gap-1 relative justify-start items-start"
            >
              <div className="w-auto flex gap-1 justify-start items-center ">
                <span>Task Type</span>
                <FaCaretDown />
              </div>
              <div
                ref={locationRef}
                className={`w-[164px] h-auto rounded-md bg-[#1A293D] transition-all duration-300 z-[1000] ${
                  locationFilter ? "scale-100" : "scale-0"
                } flex  flex-col gap-3 shadow-lg p-3 justify-start items-start absolute top-6 left-0`}
              >
                <div className="w-full flex justify-start items-start gap-2">
                  <input type="checkbox" className="w-3 h-3 accent-[#199BD1]" />
                  <span className="text-white text-[11px] font-medium leading-[14.85px]">
                    Full Cleaning
                  </span>
                </div>
                <div className="w-full flex justify-start items-start gap-2">
                  <input type="checkbox" className="w-3 h-3 accent-[#199BD1]" />
                  <span className="text-white text-[11px] font-medium leading-[14.85px]">
                    Full Cleaning
                  </span>
                </div>
                <div className="w-full flex justify-start items-start gap-2">
                  <input type="checkbox" className="w-3 h-3 accent-[#199BD1]" />
                  <span className="text-white text-[11px] font-medium leading-[14.85px]">
                    Full Cleaning
                  </span>
                </div>
                <div className="w-full flex justify-start items-start gap-2">
                  <input type="checkbox" className="w-3 h-3 accent-[#199BD1]" />
                  <span className="text-white text-[11px] font-medium leading-[14.85px]">
                    Full Cleaning
                  </span>
                </div>
              </div>
            </button>
            <button
              onClick={() => setIsCalendarOpen(true)}
              className="w-full flex  gap-1  justify-start items-center relative"
            >
              <CiCalendar className="text-lg" />
              <span>Due Date</span>
            </button>
            <DateModal isOpen={isCalendarOpen} setIsOpen={setIsCalendarOpen} />
            <span className="w-full flex justify-start items-center">
              Recurring Days
            </span>
            <span className="w-full flex justify-start items-center">
              Status
            </span>
            <span className="w-full flex justify-start items-center">
              Action
            </span>
          </div>
          <button
            onClick={() => navigate("/tasks/1", "All Tasks")}
            className="w-full h-10 grid grid-cols-6 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center"
          >
            <span className="w-full flex justify-start items-center">
              Boat A
            </span>
            <span className="w-full flex justify-start items-center">
              Full Inspection
            </span>
            <span className="w-full flex justify-start items-center">
              12-02-2024
            </span>
            <span className="w-full flex justify-start items-center ">
              90 days
            </span>
            <span className="text-[11px] bg-[#36B8F3]/[0.12] rounded-full text-[#36B8F3] font-medium leading-[14.85px] flex justify-center items-center w-[70px] h-[27px] ">
              In-Progress
            </span>
            <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
              <span className=" flex justify-start items-center ">
                <FaRegEdit />
              </span>
              <span className=" flex justify-start items-center ">
                <RiDeleteBinLine />
              </span>
            </div>
          </button>
          <button
            onClick={() => navigate("/tasks/1")}
            className="w-full h-10 grid grid-cols-6 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center"
          >
            <span className="w-full flex justify-start items-center">
              Boat A
            </span>
            <span className="w-full flex justify-start items-center">
              Full Inspection
            </span>
            <span className="w-full flex justify-start items-center">
              12-02-2024
            </span>
            <span className="w-full flex justify-start items-center ">
              90 days
            </span>
            <span className="text-[11px] bg-[#36B8F3]/[0.12] rounded-full text-[#36B8F3] font-medium leading-[14.85px] flex justify-center items-center w-[70px] h-[27px] ">
              In-Progress
            </span>
            <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
              <span className=" flex justify-start items-center ">
                <FaRegEdit />
              </span>
              <span className=" flex justify-start items-center ">
                <RiDeleteBinLine />
              </span>
            </div>
          </button>
          <button
            onClick={() => navigate("/tasks/1")}
            className="w-full h-10 grid grid-cols-6 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center"
          >
            <span className="w-full flex justify-start items-center">
              Boat A
            </span>
            <span className="w-full flex justify-start items-center">
              Full Inspection
            </span>
            <span className="w-full flex justify-start items-center">
              12-02-2024
            </span>
            <span className="w-full flex justify-start items-center ">
              90 days
            </span>
            <span className="text-[11px] bg-[#36B8F3]/[0.12] rounded-full text-[#36B8F3] font-medium leading-[14.85px] flex justify-center items-center w-[70px] h-[27px] ">
              In-Progress
            </span>
            <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
              <span className=" flex justify-start items-center ">
                <FaRegEdit />
              </span>
              <span className=" flex justify-start items-center ">
                <RiDeleteBinLine />
              </span>
            </div>
          </button>
          <button
            onClick={() => navigate("/tasks/1")}
            className="w-full h-10 grid grid-cols-6 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center"
          >
            <span className="w-full flex justify-start items-center">
              Boat A
            </span>
            <span className="w-full flex justify-start items-center">
              Full Inspection
            </span>
            <span className="w-full flex justify-start items-center">
              12-02-2024
            </span>
            <span className="w-full flex justify-start items-center ">
              90 days
            </span>
            <span className="text-[11px] bg-[#36B8F3]/[0.12] rounded-full text-[#36B8F3] font-medium leading-[14.85px] flex justify-center items-center w-[70px] h-[27px] ">
              In-Progress
            </span>
            <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
              <span className=" flex justify-start items-center ">
                <FaRegEdit />
              </span>
              <span className=" flex justify-start items-center ">
                <RiDeleteBinLine />
              </span>
            </div>
          </button>
          <button
            onClick={() => navigate("/tasks/1")}
            className="w-full h-10 grid grid-cols-6 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center"
          >
            <span className="w-full flex justify-start items-center">
              Boat A
            </span>
            <span className="w-full flex justify-start items-center">
              Full Inspection
            </span>
            <span className="w-full flex justify-start items-center">
              12-02-2024
            </span>
            <span className="w-full flex justify-start items-center ">
              90 days
            </span>
            <span className="text-[11px] bg-[#36B8F3]/[0.12] rounded-full text-[#36B8F3] font-medium leading-[14.85px] flex justify-center items-center w-[70px] h-[27px] ">
              In-Progress
            </span>
            <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
              <span className=" flex justify-start items-center ">
                <FaRegEdit />
              </span>
              <span className=" flex justify-start items-center ">
                <RiDeleteBinLine />
              </span>
            </div>
          </button>
        </div>

        <ViewAllTasksModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>
      <div className="w-full flex justify-end mt-10 items-center gap-4">
        <button
          onClick={() => navigate(-1, "Employees")}
          className="w-full lg:w-[208px] h-[52px] bg-[#199BD1] text-white rounded-[12px] flex items-center justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
        >
          {"Back"}
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetail;
