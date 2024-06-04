import React from "react";
import { BlogsContainer } from "../../components/TidesTales&Guides/BlogsContainer";

const Blogs = () => {
  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      <BlogsContainer />
    </div>
  );
};

export default Blogs;
