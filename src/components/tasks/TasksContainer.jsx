import React, { useContext, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import TasksCard from "./TasksCard";
import { TbCaretDownFilled } from "react-icons/tb";
import axios from "../../axios";
import TasksListLoader from "../global/Loaders/TasksListLoader";

const TasksContainer = () => {
  const { navigate } = useContext(GlobalContext);
  const dropDownRef = useRef(null);
  const [openDropDownFilter, setOpenDropdownFilter] = useState(false);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sortDate, setSortDate] = useState("");
  const [sortFilter, setSortFilter] = useState("");

  const [pageDetails, setPageDetails] = useState({});
  const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleModal = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setOpenDropdownFilter((prev) => !prev);
    }
  };

  const getTasks = async (pageNumber = 1, rows = 9) => {
    setLoading(true);
    try {
      const searchFilter = filter ? `&status=${filter}` : "";
      // const sortByFilter = sortDate ? `&startDate=${sortDate}&endDate=${sortDate}` : "";
      const sortByFilter = sortFilter === "earliest" ? `&isEarliest=true` : "";

      const { data } = await axios.get(
        `/manager/task?page=${pageNumber}&pageSize=${rows}${searchFilter}${sortByFilter}`
      );

      // const { data } = await axios.get(
      //   filter !== "" ? `/owner/task?status=${filter}` : `/owner/task?page=${pageNumber}&pageSize=${rows}`
      // );
      setTaskData(data?.data?.data || []);
      setPageDetails(data?.data?.paginationDetails || []);
    } catch (err) {
      console.error("Error fetching Task data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, [filter, sortFilter]);

  const filteredData = taskData?.filter((item) =>
    item?.task?.toLowerCase()?.includes(search?.toLowerCase())
  );

  return (
    <div className="h-full  w-full  flex flex-col gap-6 justify-start items-center">
      <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
        <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
          All Tasks{" "}
          <span className="text-[12px] font-normal text-white/50 ">(723)</span>
        </h3>

        <div className="w-full h-auto flex justify-between items-center">
          <div className="flex w-1/2 lg:w-[295px] h-[32px]  justify-start items-start rounded-[8px] bg-[#1A293D] relative">
            <span className="w-[32px] h-full flex items-center justify-center">
              <FiSearch className="text-white/50 text-lg" />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here"
              className="w-[calc(100%-35px)] outline-none text-sm bg-transparent h-full"
            />
          </div>

          <button
            onClick={() => navigate("/add-task", "All Tasks")}
            className="h-[35px] w-full md:w-[107px] flex items-center gap-1 rounded-[10px] justify-center bg-[#199BD1] text-white text-[11px] font-normal leading-[14.85px]"
          >
            <span className="text-[11px]">+</span>
            Add New Task
          </button>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-full sm:w-auto flex flex-wrap gap-2 justify-start items-center">
            <button
              onClick={() => setFilter("")}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == ""
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-[#fff]"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("newtask")}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == "newtask"
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-[#fff]"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              New
            </button>
            <button
              onClick={() => setFilter("upcomingtask")}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == "upcomingtask"
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-[#fff]"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter("inprogress")}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == "inprogress"
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-[#fff]"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              In-Progress
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == "completed"
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-[#fff]"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter("recurring")}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == "recurring"
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-[#fff]"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              Recurring
            </button>
            <button
              onClick={() => setFilter("overdue")}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == "overdue"
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-[#fff]"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              Overdue
            </button>
          </div>
          <button
            onClick={toggleModal}
            className="w-auto outline-none relative  min-w-12 h-8 rounded-full px-2 flex gap-2 items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]"
          >
            <span>Sort By</span>
            <TbCaretDownFilled className="text-md text-white" />
            <div
              ref={dropDownRef}
              className={`w-[164px] h-auto rounded-md bg-[#1A293D] transition-all duration-300 z-[1000] ${
                openDropDownFilter ? "scale-100" : "scale-0"
              } flex  flex-col gap-3 shadow-lg p-3 justify-start items-start absolute top-9 right-0`}
            >
              <div className="w-full flex justify-start items-start gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#1A293D]" />
                <span className="text-white text-[11px] font-medium leading-[14.85px]">
                  None
                </span>
              </div>
              <div className="w-full flex justify-start items-start gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#1A293D]" />
                <span className="text-white text-[11px] font-medium leading-[14.85px]">
                  Latest
                </span>
              </div>
              <div className="w-full flex justify-start items-start gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#1A293D]" />
                <span className="text-white text-[11px] font-medium leading-[14.85px]">
                  Earliest
                </span>
              </div>
              <div className="w-full flex justify-start items-start gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#1A293D]" />
                <span className="text-white text-[11px] font-medium leading-[14.85px]">
                  Calendar
                </span>
              </div>
            </div>
          </button>
        </div>

        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading ? (
            <TasksListLoader />
          ) : (
            <>
              {filteredData?.length > 0 ? (
                filteredData?.map((task, index) => {
                  return (
                    <TasksCard
                      data={task}
                      getTasks={() => getTasks()}
                      key={index}
                    />
                  );
                })
              ) : (
                <div>No record Found</div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TasksContainer;
