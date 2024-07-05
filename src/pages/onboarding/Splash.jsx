import React, { useContext, useState } from "react";
import { SplashLogo } from "../../assets/export";
import QRModal from "../../components/onboarding/QRModal";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

const Splash = () => {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const { navigate } = useContext(GlobalContext);
  return (
    <div className="bg-[#001229] w-screen h-screen flex flex-col gap-32 pt-[136px]  justify-start items-center relative">
      <span className="w-[396px] h-[396px] rounded-full bg-[#00638C] blur-[105px] flex items-center justify-center absolute top-16 left-[calc(50%-193px)]" />
      <img src={SplashLogo} alt="splash_logo" className="z-50 w-[551.88px] " />

      <div className="w-auto flex flex-col gap-8 px-4 md:px-0 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-[32px] text-center font-bold leading-[43.2px] text-white">
            Welcome to Nautical Bliss!
          </h1>
          <p className="text-[16px] text-center font-medium leading-[21.6px] text-white">
            Your Command Center For Smooth Sailing
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/login")}
            className="w-full md:w-[434px] h-[52px] rounded-[12px] border-[1px] border-[#55C9FA] bg-[#1A293D] text-white text-[16px] font-normal tracking-[-0.24px] leading-[21.6px] flex justify-center items-center"
          >
            Login
          </button>
        </div>

        <QRModal isOpen={isQrOpen} setIsOpen={setIsQrOpen} />
      </div>
    </div>
  );
};

export default Splash;
