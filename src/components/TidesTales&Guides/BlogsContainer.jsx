import React, { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";
import axios from "../../axios";

export const BlogsContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [captainBlog, setCaptainBlog] = useState(true);
  const [chronicleBlog, setChronicleBlog] = useState(false);
  const [loading, setLoading] = useState(false);

  const getCaptainBlogs = async () => {
    try {
      setLoading(true);
      let url = chronicleBlog ? "/manager/blog" : "/manager/blog?isAdmin=true";
      const { data } = await axios.get(url);
      setBlogs(data?.data);
    } catch (error) {
      console.log("🚀 ~ getBlogs ~ error:", error);
      if (error?.status === 404) {
        setBlogs([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCaptainBlogs();
  }, [captainBlog, chronicleBlog]);

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
          <button
            onClick={() => {
              setCaptainBlog(true);
              setChronicleBlog(false);
            }}
            className={`w-1/2 h-full rounded-full flex justify-center items-center capitalize text-[13px] font-semibold ${
              captainBlog
                ? "bg-[#199BD1] text-white"
                : "bg-[#1A293D] text-white/40"
            }`}
          >
            captain’s corner
          </button>
          <button
            onClick={() => {
              setCaptainBlog(false);
              setChronicleBlog(true);
            }}
            className={`w-1/2 h-full rounded-full flex justify-center items-center capitalize text-[13px] font-semibold ${
              chronicleBlog
                ? "bg-[#199BD1] text-white"
                : "bg-[#1A293D] text-white/40"
            }`}
          >
            fleet chronicles
          </button>
        </div>

        <span className="w-full h-[0.5px] bg-white/20"></span>
        {loading ? (
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-[334px] flex flex-col justify-start items-start rounded-[16px] shadow-md bg-[#1A293D] animate-pulse"
              >
                <div className="w-full h-[220px] rounded-t-[16px] bg-gray-700" />
                <div className="w-full h-[calc(100%-220px)] flex flex-col gap-2 justify-start items-start p-4">
                  <div className="w-1/2 h-4 bg-gray-600 rounded" />
                  <div className="w-3/4 h-6 bg-gray-600 rounded mt-2" />
                  <div className="w-full h-4 bg-gray-500 rounded mt-2" />
                  <div className="w-full h-4 bg-gray-500 rounded mt-1" />
                  <div className="w-5/6 h-4 bg-gray-500 rounded mt-1" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {blogs.length === 0 ? (
              <div>No record found</div>
            ) : (
              <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {blogs.map((blog, index) => (
                  <BlogsCard key={index} blog={blog} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
