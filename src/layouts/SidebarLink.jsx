import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const SidebarLink = ({ link }) => {
  const { navigate, activeLink } = useContext(GlobalContext);
  return (
    <button
      onClick={() => navigate(link?.url, link?.title)}
      className={`w-full h-[46px] outline-none rounded-[12px] ${
        activeLink == link?.title
          ? "bg-[#199BD1] text-white"
          : "bg-transparent text-white/50 "
      } font-medium   flex items-center justify-start transition-all duration-500 hover:bg-[#199BD1] hover:text-white px-3 gap-2`}
    >
      <span className="text-2xl">{link?.icon}</span>
      <span className="capitalize text-sm  ">{link?.title}</span>
    </button>
  );
};

export default SidebarLink;
