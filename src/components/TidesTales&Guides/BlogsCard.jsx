import React, { useContext } from "react";
import { AuthMockup } from "../../assets/export";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

const BlogsCard = ({ blog }) => {
  const navigate = useNavigate();

  const parseHTML = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <div
      onClick={() => navigate(`/blogs/${blog._id}`, { state: blog })}
      className="w-full h-[334px] flex flex-col justify-start items-start rounded-[16px] shadow-md bg-[#1A293D]"
    >
      <img
        src={blog.cover || AuthMockup}
        alt="blog_image"
        className="w-full h-[220px] rounded-t-[16px]"
      />
      <div className="w-full h-[calc(100%-220px)] flex flex-col gap-2 justify-start items-start p-4">
        <span className="text-[10px] font-medium text-[#199BD1]">
          {blog?.isAdmin ? "Admin" : "Owner"} |{" "}
          {new Date(blog.createdAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>

        <div>
          <h1 className="text-[16px] font-bold leading-[21.6px] text-white">
            {blog?.title?.length > 40
              ? blog?.title?.slice(0, 40) + "..."
              : blog?.title}
          </h1>
          <p className="text-[12px] font-normal leading-[16.2px] text-white/50">
            {parseHTML(blog?.story)?.length > 150
              ? parseHTML(blog?.story)?.slice(0, 150)
              : parseHTML(blog?.story)}
            ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
