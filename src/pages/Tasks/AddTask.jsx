import React, { useContext, useState } from "react";
import AddFleetInput from "../../components/fleet/AddFleetInput";
import { GlobalContext } from "../../contexts/GlobalContext";
import { IoCalendarOutline } from "react-icons/io5";
import { TbCalendarStats } from "react-icons/tb";

const AddTask = () => {
  const { navigate } = useContext(GlobalContext);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="w-full h-auto min-h-screen overflow-y-auto bg-[#1A293D] text-white p-4 pb-20 flex flex-col justify-start items-start">
      <div className="w-full flex flex-col justify-start items-start gap-6 p-6 rounded-[18px] bg-[#001229]">
        <div className="w-full h-auto flex flex-col gap-6 justify-start items-start ">
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <div className="w-full h-auto flex justify-between items-center">
              <div>
                <h3 className="text-[18px] font-bold leading-[24.3px]">
                  Assign New Task
                </h3>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col  justify-start items-start gap-4 ">
              <div className="w-full grid grid-cols-2 gap-12">
                <AddFleetInput label={"Select Boat"} />
              </div>
              <div className="w-full grid grid-cols-2 gap-12">
                <AddFleetInput label={"Task Type"} />
                <AddFleetInput label={"Assign Employee"} />
              </div>
              <div className="w-full grid grid-cols-1 gap-12">
                <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
                  <label className="text-[16px] font-medium leading-[21.6px]">
                    {"Add Note"}
                  </label>
                  <textarea
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
                <button className="text-xs font-normal text-[#199BD1]">
                  Select Due Date
                </button>
              </div>
              <div className="w-auto flex justify-start items-center gap-3">
                <TbCalendarStats className="text-2xl text-white/40" />
                <span className="text-md font-normal text-white">
                  Recurring Days
                </span>
                <button className="text-xs font-normal text-[#199BD1]">
                  None
                </button>
              </div>
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
            <button className="w-full lg:w-[208px] h-[52px] bg-[#199BD1] text-white rounded-[12px] flex items-center justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]">
              {"Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
