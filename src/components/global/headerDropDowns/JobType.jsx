import React, { useContext, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { GlobalContext } from "../../../contexts/GlobalContext";

const JobType = ({
  jobTitleDropdownOpen,
  toggleJobTitleDropdown,
  jobType,
  setJobType,
  employeesJobTitles,
  setCurrentPage = () => {},
}) => {
  const { dropDown } = useContext(GlobalContext);
  const dropdownRef = useRef(null);

  const uniqueJobTitles = [...new Set(employeesJobTitles)];

  const handleCheckboxChange = (job) => {
    if (job === "all") {
      setJobType([]);
    } else {
      setJobType((prev) => {
        if (prev.includes(job)) {
          return prev.filter((t) => t !== job);
        } else {
          return [...prev, job];
        }
      });
    }
    setCurrentPage(1);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        jobTitleDropdownOpen
      ) {
        toggleJobTitleDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [jobTitleDropdownOpen, toggleJobTitleDropdown]);

  return (
    <span
      className="w-full flex justify-start items-center relative"
      ref={dropdownRef}
    >
      Job Title
      <FaCaretDown
        className={`ml-2 cursor-pointer ${
          jobTitleDropdownOpen ? "rotate-180" : "rotate-0"
        }`}
        onClick={toggleJobTitleDropdown}
      />
      {jobTitleDropdownOpen && (
        <div className="max-h-[300px] overflow-auto absolute top-full left-0 mt-1 w-48 bg-[#1A293D] text-white rounded-md shadow-lg z-10">
          <label className="flex items-center p-2 cursor-pointer hover:bg-[#000]/10">
            <input
              checked={jobType.length === 0}
              onChange={() => handleCheckboxChange("all")}
              type="checkbox"
              className="form-checkbox text-[#199BD1] mr-2"
            />
            All
          </label>
          {uniqueJobTitles?.map((job, index) => (
            <label
              key={index}
              className="flex items-center p-2 cursor-pointer hover:bg-[#000]/10"
            >
              <input
                checked={jobType?.includes(job?.toLowerCase())}
                onChange={() => handleCheckboxChange(job?.toLowerCase())}
                type="checkbox"
                className="form-checkbox text-[#199BD1] mr-2"
              />
              {job?.charAt(0).toUpperCase() + job?.slice(1)}
            </label>
          ))}
        </div>
      )}
    </span>
  );
};

export default JobType;
