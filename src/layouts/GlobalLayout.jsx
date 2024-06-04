import React from "react";
import { Logo } from "../assets/export";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const GlobalLayout = ({ page }) => {
  return (
    <div className="w-full h-screen flex justify-start items-start overflow-hidden relative">
      <Sidebar />
      <div className="w-full lg:w-[calc(100%-260px)]  h-full relative flex flex-col justify-start items-start">
        <Navbar />
        <div className="w-full h-[calc(100%-60px)] bg-[#1A293D] absolute top-[60px] left-0 text-white   flex flex-col justify-start items-start">
          {page}
        </div>
      </div>
    </div>
  );
};

export default GlobalLayout;
