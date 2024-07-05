import React, { useContext, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaCaretDown, FaRegEdit } from "react-icons/fa";

const EmployeesTableBig = () => {
  const { navigate } = useContext(GlobalContext);
  const [jobFilter, setJobFilter] = useState(false);
  const jobRef = useRef(null);
  const [locationFilter, setLocationFilter] = useState(false);
  const locationRef = useRef(null);

  const toggleJobModal = (e) => {
    if (jobRef.current && !jobRef.current.contains(e.target)) {
      setJobFilter((prev) => !prev);
    }
  };
  const toggleLocationModal = (e) => {
    if (locationRef.current && !locationRef.current.contains(e.target)) {
      setLocationFilter((prev) => !prev);
    }
  };
  return (
    <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
      <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
        Employee List{" "}
        <span className="text-[12px] font-normal text-white/50 ">(723)</span>
      </h3>

      <div className="w-full h-auto flex justify-between items-center">
        <div className="flex w-1/2 lg:w-[295px] h-[32px]  justify-start items-start rounded-[8px] bg-[#1A293D] relative">
          <span className="w-[32px] h-full flex items-center justify-center">
            <FiSearch className="text-white/50 text-lg" />
          </span>
          <input
            type="text"
            placeholder="Search here"
            className="w-[calc(100%-35px)] outline-none text-sm bg-transparent h-full"
          />
        </div>

        <button
          onClick={() => navigate("/add-employee", "Employees")}
          className="h-[35px] w-[114px] flex items-center gap-1 rounded-[10px] justify-center bg-[#199BD1] text-white text-sm"
        >
          <span className="text-lg">+</span>
          Add Employee
        </button>
      </div>

      <div className="w-full flex flex-col gap-1 justify-start items-start">
        <div className="w-full grid grid-cols-5 text-[13px] font-medium leading-[14.85px] text-white/50 justify-start items-start">
          <span className="w-full flex justify-start items-center">Name</span>
          <span className="w-full flex justify-start items-center">Email</span>
          <button
            onClick={toggleJobModal}
            className="w-auto flex flex-col gap-1 justify-start items-start relative"
          >
            <div className="w-auto flex gap-1 justify-start items-center ">
              <span>Job Title</span>
              <FaCaretDown />
            </div>
            <div
              ref={jobRef}
              className={`w-[164px] h-auto rounded-md bg-[#1A293D] transition-all duration-300 z-[1000] ${
                jobFilter ? "scale-100" : "scale-0"
              } flex  flex-col gap-3 shadow-lg p-3 justify-start items-start absolute top-6 left-0`}
            >
              <div className="w-full flex justify-start items-start gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#199BD1]" />
                <span className="text-white/50 text-[11px] font-medium leading-[14.85px]">
                  Doc Manager 1
                </span>
              </div>
              <div className="w-full flex justify-start items-start gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#199BD1]" />
                <span className="text-white/50 text-[11px] font-medium leading-[14.85px]">
                  Doc Manager 2
                </span>
              </div>
              <div className="w-full flex justify-start items-start gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#199BD1]" />
                <span className="text-white/50 text-[11px] font-medium leading-[14.85px]">
                  Doc Manager 3
                </span>
              </div>
              <div className="w-full flex justify-start items-start gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#199BD1]" />
                <span className="text-white/50 text-[11px] font-medium leading-[14.85px]">
                  Doc Manager 4
                </span>
              </div>
            </div>
          </button>

          <button
            onClick={toggleLocationModal}
            className="w-auto flex flex-col gap-1 justify-start items-start relative"
          >
            <div className="w-auto flex gap-1 justify-start items-center ">
              <span>Location</span>
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
                  Location A
                </span>
              </div>
              <div className="w-full flex justify-start items-start gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#199BD1]" />
                <span className="text-white text-[11px] font-medium leading-[14.85px]">
                  Location B
                </span>
              </div>
              <div className="w-full flex justify-start items-start gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#199BD1]" />
                <span className="text-white text-[11px] font-medium leading-[14.85px]">
                  Location C
                </span>
              </div>
              <div className="w-full flex justify-start items-start gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#199BD1]" />
                <span className="text-white text-[11px] font-medium leading-[14.85px]">
                  Location D
                </span>
              </div>
            </div>
          </button>
          <span className="w-full flex justify-start items-center">Action</span>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointe border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center cursor-pointer"
          >
            Mike Smith
          </span>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b cursor-pointer border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <spa
            onClick={() => navigate("/employees/1", "Employees")}
            className="w-full flex justify-start items-center"
            cursor-pointer
          >
            Mike Smith
          </spa>
          <span className="w-full flex justify-start items-center">
            mikesmith@gmail.com
          </span>
          <span className="w-full flex justify-start items-center">
            Dock Guard
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
          <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">
              <FaRegEdit />
            </span>
            <span className=" flex justify-start items-center ">
              <RiDeleteBinLine />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesTableBig;
