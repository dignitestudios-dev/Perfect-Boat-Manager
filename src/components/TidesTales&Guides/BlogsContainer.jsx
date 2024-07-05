import React from "react";
import BlogsCard from "./BlogsCard";

export const BlogsContainer = () => {
  return (
    <div className="h-auto  w-full  flex flex-col  justify-start items-center">
      <div className="w-full h-[237px] rounded-t-[18px] flex flex-col gap-1 items-center justify-center bg-gradient text-white">
        <h2 className="text-[36px] font-bold leading-[48.6px]">
          Tides, Tales & Guides
        </h2>
        <p className="text-[20px] font-medium leading-[27px]">
          Set Sail Through Stories: Where Every Wave Carries A Tale
        </p>
      </div>
      <div className="w-full h-auto flex flex-col justify-start items-start gap-4 p-4 lg:p-6 rounded-b-[18px] bg-[#001229]">
        <div className="w-[343px] h-10 flex justify-start items-center bg-[#1A293D] text-white/40 rounded-full ">
          <button className="w-1/2 h-full rounded-full flex justify-center items-center focus-within:bg-[#199BD1] focus-within:text-white capitalize text-[13px] font-semibold">
            captain’s corner
          </button>
          <button className="w-1/2 h-full rounded-full flex justify-center items-center focus-within:bg-[#199BD1] focus-within:text-white capitalize text-[13px] font-semibold">
            fleet chronicles
          </button>
        </div>

        <span className="w-full h-[0.5px] bg-white/20"></span>

        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
          <BlogsCard />
        </div>
      </div>
    </div>
  );
};
