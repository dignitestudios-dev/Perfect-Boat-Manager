import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { STATUS_ENUM } from "../../../constants/data";

const StatusType = ({
  statusDropdownOpen,
  toggleStatusDropdown,
  setStatusFilter,
  statusFilter,
  taskStatus,
}) => {
  const statuses = [
    "upcomingtask",
    "inprogress",
    "completed",
    "recurring",
    "overdue",
    "new Task",
  ];

  const uniqueTaskStatus = [...new Set(taskStatus)];

  const getFormattedStatus = (status) => {
    return STATUS_ENUM[status] || status;
  };

  const handleCheckboxChange = (status) => {
    // setStatusFilter(status);
    if (status === "all") {
      setStatusFilter([]);
    } else {
      setStatusFilter((prev) => {
        if (prev.includes(status)) {
          return prev.filter((t) => t !== status);
        } else {
          return [...prev, status];
        }
      });
    }
  };

  const dropdownRef = useRef(null); // Ref for the dropdown container

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        statusDropdownOpen
      ) {
        toggleStatusDropdown(); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [statusDropdownOpen, toggleStatusDropdown]);
  return (
    <span
      className="w-full flex justify-start items-center relative"
      ref={dropdownRef}
    >
      Status
      <FaCaretDown
        className={`ml-2 cursor-pointer ${
          statusDropdownOpen ? "rotate-180" : "rotate-0"
        }`}
        onClick={toggleStatusDropdown}
      />
      {statusDropdownOpen && (
        <div
          className="max-h-[300px] overflow-auto absolute top-full left-0 mt-1 w-48 bg-[#1A293D]
           text-white rounded-md shadow-lg z-10"
        >
          <label className="flex items-center p-2 cursor-pointer hover:bg-[#000]/10">
            <input
              checked={statusFilter.length === 0}
              onChange={() => handleCheckboxChange("all")}
              type="checkbox"
              className="form-checkbox text-[#199BD1] mr-2"
            />
            All
          </label>
          {uniqueTaskStatus.map((status, index) => (
            <label
              key={index}
              className="flex items-center p-2 cursor-pointer hover:bg-[#000]/10"
            >
              <input
                checked={statusFilter.includes(status)}
                onChange={() => handleCheckboxChange(status)}
                type="checkbox"
                className="form-checkbox text-[#199BD1] mr-2"
              />
              {getFormattedStatus(status)}
            </label>
          ))}
        </div>
      )}
    </span>
  );
};

export default StatusType;
