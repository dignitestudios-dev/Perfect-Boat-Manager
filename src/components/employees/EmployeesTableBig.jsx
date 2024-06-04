import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

const EmployeesTableBig = () => {
  const { navigate } = useContext(GlobalContext);
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
          <span className="w-full flex justify-start items-center">
            Job Title
          </span>
          <span className="w-full flex justify-start items-center">
            Location
          </span>
          <span className="w-full flex justify-start items-center">Action</span>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
        <div className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center">
          <span className="w-full flex justify-start items-center">
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
          <div className="w-full flex justify-start items-center gap-2">
            <span className=" flex justify-start items-center ">Edit</span>
            <span className=" flex justify-start items-center ">Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesTableBig;
