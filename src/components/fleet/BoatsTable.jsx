import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { AuthMockup, TableBoatImage } from "../../assets/export";

const BoatsTable = () => {
  const { navigate } = useContext(GlobalContext);
  return (
    <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
      <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
        Boats List{" "}
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
      </div>

      <div className="w-full flex flex-col gap-1 justify-start items-start">
        <div className="w-full grid grid-cols-5 text-[13px] py-2 border-b border-[#fff]/[0.14] font-medium leading-[14.85px] text-white/50 justify-start items-start">
          <span className="w-full flex justify-start items-center">
            Boat Image
          </span>
          <span className="w-full flex justify-start items-center">
            Boat Type
          </span>
          <span className="w-full flex justify-start items-center">Name</span>
          <span className="w-full flex justify-start items-center">
            Model/Make/Size
          </span>
          <span className="w-full flex justify-start items-center">
            Location
          </span>
        </div>

        <div
          onClick={() => navigate("/boats/1", "Boat")}
          className="w-full h-auto grid grid-cols-5 cursor-pointer  border-b border-[#fff]/[0.14] py-3 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center"
        >
          <span className="w-[106px] h-[76px]  flex justify-start items-center relative">
            <img
              src={AuthMockup}
              alt="boat_image"
              className="w-full h-full rounded-[14px] "
            />
          </span>
          <span className="w-full flex justify-start items-center">
            Type goes here
          </span>
          <span className="w-full flex justify-start items-center">
            Boat Name
          </span>
          <span className="w-full flex justify-start items-center ">
            2019 / Toyotta / Class A
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
        </div>
        <div
          onClick={() => navigate("/boats/1", "Boat")}
          className="w-full h-auto grid grid-cols-5 cursor-pointer  border-b border-[#fff]/[0.14] py-3 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center"
        >
          <span className="w-[106px] h-[76px]  flex justify-start items-center relative">
            <img
              src={AuthMockup}
              alt="boat_image"
              className="w-full h-full rounded-[14px] "
            />
          </span>
          <span className="w-full flex justify-start items-center">
            Type goes here
          </span>
          <span className="w-full flex justify-start items-center">
            Boat Name
          </span>
          <span className="w-full flex justify-start items-center ">
            2019 / Toyotta / Class A
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
        </div>
        <div
          onClick={() => navigate("/boats/1", "Boat")}
          className="w-full h-auto grid grid-cols-5 cursor-pointer  border-b border-[#fff]/[0.14] py-3 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center"
        >
          <span className="w-[106px] h-[76px]  flex justify-start items-center relative">
            <img
              src={AuthMockup}
              alt="boat_image"
              className="w-full h-full rounded-[14px] "
            />
          </span>
          <span className="w-full flex justify-start items-center">
            Type goes here
          </span>
          <span className="w-full flex justify-start items-center">
            Boat Name
          </span>
          <span className="w-full flex justify-start items-center ">
            2019 / Toyotta / Class A
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
        </div>
        <div
          onClick={() => navigate("/boats/1", "Boat")}
          className="w-full h-auto grid grid-cols-5 cursor-pointer  border-b border-[#fff]/[0.14] py-3 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center"
        >
          <span className="w-[106px] h-[76px]  flex justify-start items-center relative">
            <img
              src={AuthMockup}
              alt="boat_image"
              className="w-full h-full rounded-[14px] "
            />
          </span>
          <span className="w-full flex justify-start items-center">
            Type goes here
          </span>
          <span className="w-full flex justify-start items-center">
            Boat Name
          </span>
          <span className="w-full flex justify-start items-center ">
            2019 / Toyotta / Class A
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
        </div>
        <div
          onClick={() => navigate("/boats/1", "Boat")}
          className="w-full h-auto grid grid-cols-5 cursor-pointer  border-b border-[#fff]/[0.14] py-3 text-[13px] font-medium leading-[14.85px] text-white justify-start items-center"
        >
          <span className="w-[106px] h-[76px]  flex justify-start items-center relative">
            <img
              src={AuthMockup}
              alt="boat_image"
              className="w-full h-full rounded-[14px] "
            />
          </span>
          <span className="w-full flex justify-start items-center">
            Type goes here
          </span>
          <span className="w-full flex justify-start items-center">
            Boat Name
          </span>
          <span className="w-full flex justify-start items-center ">
            2019 / Toyotta / Class A
          </span>
          <span className="w-full flex justify-start items-center ">
            East California Dock
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoatsTable;
