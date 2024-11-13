import React, { useContext, useState } from "react";
import { HomeMockup } from "../../assets/export";
import { GlobalContext } from "../../contexts/GlobalContext";
import HomeTasks from "./HomeTasks";
import { FiLoader } from "react-icons/fi";

const Home = () => {
  const { navigate, isTaskData, isTaskLoading } = useContext(GlobalContext);

  return (
    <>
      {isTaskLoading ? (
        <div className="w-full h-[90dvh] flex justify-center items-center">
          <FiLoader className="text-[30px] animate-spin text-lg mx-auto" />
        </div>
      ) : (
        <>
          {isTaskData ? (
            <HomeTasks />
          ) : (
            <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-center">
              <div className="bg-[#001229] w-[708px] h-auto flex flex-col p-6 rounded-[18px] gap-10 pt-[136px]  justify-start items-center relative">
                <span className="w-[256px] h-[256px] rounded-full bg-[#00638C] blur-[75px] flex items-center justify-center absolute top-24 left-[calc(50%-143px)]" />
                <img src={HomeMockup} alt="splash_logo" className="z-50 " />

                <div className="w-auto flex flex-col gap-8 px-4 md:px-0 justify-center items-center">
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <h1 className="text-[32px] text-center font-bold leading-[43.2px] text-white">
                      You have no tasks yet!
                    </h1>
                    <p className="text-[14px] text-center font-normal leading-[18.6px] text-white">
                      Click below to create you first task
                    </p>
                  </div>

                  <div className="w-full flex flex-col gap-4 justify-center items-center">
                    <button
                      onClick={() => navigate("/add-task", "Assign Tasks")}
                      className="w-full md:w-[434px] h-[52px] rounded-[12px] bg-[#199BD1]   text-white text-[16px] font-bold tracking-[-0.24px] leading-[21.6px] flex justify-center items-center"
                    >
                      Create Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
