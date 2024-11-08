import React, { useContext, useEffect } from "react";
import { Logo } from "../assets/export";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { GlobalContext } from "../contexts/GlobalContext";
import { AuthContext } from "../contexts/AuthContext";

const GlobalLayout = ({ page }) => {
  const { token } = useContext(AuthContext);

  const {
    getBoats,
    getEmployees,
    // getManagers,
    getDropDown,
    updateBoats,
    show,
    setShow,
    notification,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  const validateToken = () => {
    if (token) {
      getBoats();
      getEmployees();
      // getManagers();
      getDropDown();
      return true;
    } else {
      navigate("/login");
      Cookies.remove("token");
      return false;
    }
  };

  useEffect(() => {
    validateToken();
  }, [updateBoats]);

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
