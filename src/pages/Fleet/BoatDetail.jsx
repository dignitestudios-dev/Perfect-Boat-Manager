import React, { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbCaretDownFilled } from "react-icons/tb";
import AddFleetInput from "../../components/fleet/AddFleetInput";
import AddFleetImage from "../../components/fleet/AddFleetImage";
import { AuthMockup } from "../../assets/export";
import ViewAllTasksModal from "../../components/tasks/ViewAllTasksModal";

const BoatDetail = () => {
  const { navigate } = useContext(GlobalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
        <div className="w-full flex justify-between items-center h-12">
          <div className="w-auto flex justify-start items-center gap-2">
            <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
              Boat Details
            </h3>
          </div>

          <button
            onClick={() => navigate("/add-task", "All Tasks")}
            className="w-[118px] h-[32px] flex justify-center items-center gap-2 bg-[#36B8F3] rounded-[10px] text-[#fff] text-[13px] font-medium"
          >
            <span className="text-lg">+</span>
            <span>Add New Task</span>
          </button>
        </div>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-8 lg:gap-16">
          <div className="w-full h-auto flex flex-col gap-6 justify-start items-start">
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <div className="w-full h-auto flex flex-col justify-start items-start gap-8">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12">
                  <AddFleetInput
                    label={"Name"}
                    state={"Boat A"}
                    disabled={true}
                  />

                  <div className="w-full h-auto flex flex-col gap-1 justify-end items-start">
                    <label className="text-[16px] font-medium leading-[21.6px]">
                      {"Boat Type"}
                    </label>
                    <div className="group transition-all duration-500 w-full h-[52px] bg-[#1A293D] outline-none flex justify-between items-center  px-3 focus:border-[1px] focus:border-[#55C9FA] rounded-xl  relative">
                      {/* hover:rounded-b-none hover:rounded-t-xl */}
                      <span className="text-gray-400">Boat XYZ</span>
                      {/* <span className="text-gray-400">
                        <TbCaretDownFilled className="group-hover:rotate-180 " />
                      </span> */}

                      {/* <div className="group-hover:flex flex-col justify-start items-start gap-3 transition-all duration-500 px-5 py-3  hidden absolute -bottom-32 shadow-xl left-0 w-full h-32 max-h-32 bg-[#1A293D] rounded-b-2xl border border-gray-700">
                        <div className="w-full h-full overflow-y-auto flex flex-col justify-start items-start gap-3">
                          <span className="text-gray-300">Boat A</span>
                          <span className="text-gray-300">Boat B</span>
                          <span className="text-gray-300">Boat C</span>
                          <span className="text-gray-300">Boat D</span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12">
                  <AddFleetInput
                    label={"Model/Make/Size"}
                    state={"2019/Toyotaa/Class A"}
                    disabled={true}
                  />
                  <AddFleetInput
                    label={"Location"}
                    state={"Orlando Florida"}
                    disabled={true}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-4">
              <h3 className="text-[18px] font-bold leading-[24.3px]">Photos</h3>
              <div className="w-full h-auto flex flex-wrap justify-start items-start gap-4">
                <div className="w-full md:w-[175px] h-[147px] rounded-xl bg-[#1A293D] text-3xl flex items-center justify-center">
                  <img
                    src={AuthMockup}
                    alt="boatimage"
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div className="w-full md:w-[175px] h-[147px] rounded-xl bg-[#1A293D] text-3xl flex items-center justify-center">
                  <img
                    src={AuthMockup}
                    alt="boatimage"
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div className="w-full md:w-[175px] h-[147px] rounded-xl bg-[#1A293D] text-3xl flex items-center justify-center">
                  <img
                    src={AuthMockup}
                    alt="boatimage"
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div className="w-full md:w-[175px] h-[147px] rounded-xl bg-[#1A293D] text-3xl flex items-center justify-center">
                  <img
                    src={AuthMockup}
                    alt="boatimage"
                    className="w-full h-full rounded-xl"
                  />
                </div>
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
            <span className="w-full flex justify-start items-center">
              Task Type
            </span>
            <span className="w-full flex justify-start items-center">
              Due Date
            </span>
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

export default BoatDetail;
