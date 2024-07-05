import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/export";
import { sidebarArr } from "../constants/sidebarArr";
import SidebarLink from "./SidebarLink";
import { RiLogoutCircleLine } from "react-icons/ri";
import { GlobalContext } from "../contexts/GlobalContext";

const Sidebar = () => {
  const { navigate } = useContext(GlobalContext);
  return (
    <div className="w-[260px] h-full fixed top-0 left-0 lg:static  -translate-x-full lg:translate-x-0 overflow-y-auto flex py-4 px-2 flex-col justify-start items-center bg-[#001229]">
      <Link to="/">
        <img src={Logo} alt="perfectboat_logo" className="w-auto" />
      </Link>

      <div className="w-full h-auto mt-6 flex flex-col justify-start items-start gap-3">
        {sidebarArr?.map((link) => {
          return <SidebarLink link={link} />;
        })}
        <button
          onClick={() => navigate("/login", "Home")}
          className={`w-full h-[46px] outline-none rounded-[12px] 
          bg-transparent text-white/50 
     font-medium   flex items-center justify-start transition-all duration-500 hover:bg-[#199BD1] hover:text-white px-3 gap-2`}
        >
          <span className="text-xl">
            <RiLogoutCircleLine />
          </span>
          <span className="capitalize text-sm  ">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
