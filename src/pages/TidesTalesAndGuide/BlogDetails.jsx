import React, { useContext } from "react";
import { AuthMockup, BlogBoat, Html } from "../../assets/export";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GlobalContext } from "../../contexts/GlobalContext";

const BlogDetails = () => {
  const { navigate } = useContext(GlobalContext);
  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-4 justify-start items-start">
      <div className="w-full h-auto flex flex-col gap-4  rounded-[18px] bg-[#001229]">
        <div className="w-full h-[299px] relative rounded-t-[18px]">
          <img
            src={BlogBoat}
            alt="blogimage"
            className="w-full h-full rounded-t-[18px]"
          />
          <button
            onClick={() => navigate("/blogs", "Tides, Tales & Guides")}
            className="w-[40px] h-[40px] absolute top-3 left-3 rounded-full bg-[#199BD1]/[0.46] text-white text-2xl flex items-center justify-center"
          >
            <IoIosArrowRoundBack />
          </button>
        </div>

        <div className="w-full h-auto flex flex-col justify-start items-start p-2 lg:p-6">
          <div className="w-full h-auto flex flex-col border-b-[1px] border-white/10 justify-start items-start pt-2 pb-12 gap-4">
            <span className="text-[10px] font-medium text-[#199BD1]">
              Author name | December 20th, 2023
            </span>
            <h2 className="text-[28px] font-bold text-white leading-[37.7px]">
              Sailing Serenity: A Windward Voyage Into Maritime bliss
            </h2>
            <span className="text-[16px] font-normal leading-[21.6px] text-white/80">
              Discove The Tranquil Tales That Unfold Beyond The Horizon{" "}
            </span>
          </div>

          <div className="w-full h-auto flex justify-start items-start py-6">
            {/* All the html from backend rightnow putting image to show html */}
            <img src={Html} alt="html" />
          </div>

          <div className="w-full flex flex-col  mt-10 justify-start items-start gap-3">
            <h3 className="text-[20px] font-medium leading-[27px]">
              Explore More Maritime Musings
            </h3>
            <div className="w-auto flex justify-start items-start gap-4">
              <div className="w-[401px] h-[93px] rounded-[12px] bg-[#1A293D] flex gap-3 justify-start items-center">
                <img
                  src={AuthMockup}
                  alt="blog_image"
                  className="w-[125px] h-full rounded-[12px]"
                />
                <div className="w-auto flex flex-col gap-2 pr-2 justify-start items-start">
                  <span className="text-[10px] font-medium text-[#199BD1]">
                    Author name | December 20th, 2023
                  </span>
                  <h2 className="text-[16px] font-medium text-white leading-[21.7px]">
                    Sailing Serenity: A Windward Voyage Into Maritime bliss
                  </h2>
                </div>
              </div>
              <div className="w-[401px] h-[93px] rounded-[12px] bg-[#1A293D] flex gap-3 justify-start items-center">
                <img
                  src={AuthMockup}
                  alt="blog_image"
                  className="w-[125px] h-full rounded-[12px]"
                />
                <div className="w-auto flex flex-col gap-2 pr-2 justify-start items-start">
                  <span className="text-[10px] font-medium text-[#199BD1]">
                    Author name | December 20th, 2023
                  </span>
                  <h2 className="text-[16px] font-medium text-white leading-[21.7px]">
                    Sailing Serenity: A Windward Voyage Into Maritime bliss
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
