import React, { useContext } from "react";
import { AuthMockup } from "../../assets/export";
import { GlobalContext } from "../../contexts/GlobalContext";

const BlogsCard = () => {
  const { navigate } = useContext(GlobalContext);
  return (
    <div
      onClick={() => navigate("/blogs/1", "Tides, Tales & Guides")}
      className="w-full h-[334px] flex flex-col justify-start items-start rounded-[16px] shadow-md bg-[#1A293D]"
    >
      <img
        src={AuthMockup}
        alt="blog_image"
        className="w-full h-[220px] rounded-t-[16px]"
      />
      <div className="w-full h-[calc(100%-220px)] flex flex-col gap-2 justify-start items-start p-4">
        <span className="text-[10px] font-medium text-[#199BD1]">
          Author name | December 20th, 2023
        </span>

        <div>
          <h1 className="text-[16px] font-bold leading-[21.6px] text-white">
            Blog Heading Here
          </h1>
          <p className="text-[12px] font-normal leading-[16.2px] text-white/50">
            Lorem ipsum dolor sit amet consectetur. Varius rutrum mauris at
            tortor nulla faucibus...
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
