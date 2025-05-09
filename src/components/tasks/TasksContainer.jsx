import React, { useContext, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import TasksCard from "./TasksCard";
import { TbCaretDownFilled } from "react-icons/tb";
import axios from "../../axios";
import TasksListLoader from "../global/Loaders/TasksListLoader";
import Pagination from "../global/Pagination";
import DateModal from "./DateModal";
import moment from "moment";

const TasksContainer = () => {
  const { navigate } = useContext(GlobalContext);
  const today = moment("01-01-2024");

  const dropDownRef = useRef(null);
  const [openDropDownFilter, setOpenDropdownFilter] = useState(false);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sortFilter, setSortFilter] = useState("");

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dueDate, setDueDate] = useState({});
  const [inputError, setInputError] = useState({});

  const [taskData, setTaskData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 18;

  const handleCheckboxChange = (sort) => {
    setSortFilter(sort);
    // setIsCalendarOpen(false);
    setDueDate({ calendar: undefined });
    setCurrentPage(1);
  };

  const toggleModal = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setOpenDropdownFilter((prev) => !prev);
    }
  };
  // const formatDate = (dateStr) => {
  //   const date = new Date(dateStr);
  //   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  // };
  const getTasks = async () => {
    setLoading(true);
    try {
      const params = [];

      if (filter) {
        params.push(`status=${filter}`);
      }

      if (dueDate?.calendar) {
        params.push(
          `startDate=${dueDate.calendar}`,
          `endDate=${dueDate.calendar}`,
          `isdue=true`
        );
      }

      if (sortFilter === "earliest") {
        params.push(`isEarliest=true`);
      }

      const queryString = params.length > 0 ? `?${params.join("&")}` : "";

      const { data } = await axios.get(`/manager/task${queryString}`);
      setTaskData(data?.data || []);
    } catch (err) {
      console.error("Error fetching Task data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, [filter, sortFilter, dueDate]);

  // const filteredData = taskData?.filter((item) =>
  //   item?.boat?.name
  //     ?.toLowerCase()
  //     ?.replaceAll(" ", "")
  //     ?.includes(search?.toLowerCase()?.replaceAll(" ", ""))
  // );
  const filteredData = taskData?.filter((item) => {
    const matchesSearch = search
      ? item?.boat?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
        item?.boat?.location?.toLowerCase()?.includes(search?.toLowerCase()) ||
        item?.assignTo[0]?.name
          ?.toLowerCase()
          ?.includes(search?.toLowerCase()) ||
        item?.assignBy?.name?.toLowerCase()?.includes(search?.toLowerCase())
      : true;
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredData?.length / pageSize);
  // Slice the data for the current page
  const paginatedData = filteredData?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="h-full  w-full  flex flex-col gap-6 justify-start items-center">
      <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
        <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
          All Tasks{" "}
          <span className="text-[12px] font-normal text-white/50 ">
            ({taskData?.length})
          </span>
        </h3>

        <div className="w-full h-auto flex justify-between items-center">
          <div className="flex w-1/2 lg:w-[295px] h-[32px]  justify-start items-start rounded-[8px] bg-[#1A293D] relative">
            <span className="w-[32px] h-full flex items-center justify-center">
              <FiSearch className="text-white/50 text-lg" />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
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
              onClick={() => {
                setFilter("");
                setCurrentPage(1);
              }}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == ""
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-white/50"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              All
            </button>
            <button
              onClick={() => {
                setFilter("newtask");
                setCurrentPage(1);
              }}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == "newtask"
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-white/50"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              New Task
            </button>
            <button
              onClick={() => {
                setFilter("upcomingtask");
                setCurrentPage(1);
              }}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == "upcomingtask"
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-white/50"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              Upcoming
            </button>
            <button
              onClick={() => {
                setFilter("inprogress");
                setCurrentPage(1);
              }}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == "inprogress"
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-white/50"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              In-Progress
            </button>
            <button
              onClick={() => {
                setFilter("completed");
                setCurrentPage(1);
              }}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == "completed"
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-white/50"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              Completed
            </button>
            <button
              onClick={() => {
                setFilter("recurring");
                setCurrentPage(1);
              }}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == "recurring"
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-white/50"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              Recurring
            </button>
            <button
              onClick={() => {
                setFilter("overdue");
                setCurrentPage(1);
              }}
              className={`w-auto outline-none focus-within:bg-[#fff] focus-within:text-[#001229] ${
                filter == "overdue"
                  ? "bg-[#fff] text-[#001229]"
                  : "bg-[#1A293D] text-white/50"
              } min-w-12 h-8 rounded-full px-2 flex items-center justify-center text-[11px] font-medium leading-[28px] /[0.5]`}
            >
              Overdue
            </button>
          </div>
          <button
            onClick={toggleModal}
            className="w-auto outline-none relative min-w-12 h-8 rounded-full px-2 flex gap-2 items-center justify-center text-[11px] font-medium leading-[28px] bg-[#1A293D] text-[#fff]"
          >
            <span>Sort By</span>
            <TbCaretDownFilled className="text-md text-white" />
            <div
              ref={dropDownRef}
              className={`w-[164px] h-auto rounded-md bg-[#1A293D] transition-all duration-300 z-[1000] ${
                openDropDownFilter ? "scale-100" : "scale-0"
              } flex flex-col gap-1 shadow-lg p-3 justify-start items-start absolute top-9 right-0`}
            >
              <div className="w-auto flex gap-2 justify-start items-center">
                <span className="text-white/50">Sort By</span>
                <TbCaretDownFilled className="text-md text-white/50" />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-3">
                <div className="w-full flex justify-start items-start gap-2">
                  <input
                    checked={sortFilter === "all"}
                    onChange={() => handleCheckboxChange("all")}
                    type="checkbox"
                    className="w-3 h-3 border-2 border-[#324865] bg-[#324865] rounded-sm appearance-none
                     checked:bg-[#199BD1] checked:border-[#199BD1] checked:ring-1 checked:after:font-[500] checked:ring-[#199BD1]
                     checked:after:text-md checked:after:p-1"
                  />
                  <span className="text-white text-[11px] font-medium leading-[14.85px]">
                    None
                  </span>
                </div>
                <div className="w-full flex justify-start items-start gap-2">
                  <input
                    checked={sortFilter === "latest"}
                    onChange={() => handleCheckboxChange("latest")}
                    type="checkbox"
                    className="w-3 h-3 border-2 border-[#324865] bg-[#324865] rounded-sm appearance-none
                     checked:bg-[#199BD1] checked:border-[#199BD1] checked:ring-1 checked:after:font-[500] checked:ring-[#199BD1]
                     checked:after:text-md checked:after:p-1"
                  />
                  <span className="text-white text-[11px] font-medium leading-[14.85px]">
                    Latest
                  </span>
                </div>
                <div className="w-full flex justify-start items-start gap-2">
                  <input
                    checked={sortFilter === "earliest"}
                    onChange={() => handleCheckboxChange("earliest")}
                    type="checkbox"
                    className="w-3 h-3 border-2 border-[#324865] bg-[#324865] rounded-sm appearance-none
                     checked:bg-[#199BD1] checked:border-[#199BD1] checked:ring-1 checked:after:font-[500] checked:ring-[#199BD1]
                     checked:after:text-md checked:after:p-1"
                  />
                  <span className="text-white text-[11px] font-medium leading-[14.85px]">
                    Earliest
                  </span>
                </div>
                <div className="w-full flex justify-start items-start gap-2">
                  <input
                    checked={sortFilter === "calendar"}
                    onChange={() => {
                      setIsCalendarOpen(true);
                      setSortFilter("calendar");
                      setOpenDropdownFilter(false);
                    }}
                    type="checkbox"
                    className="w-3 h-3 border-2 border-[#324865] bg-[#324865] rounded-sm appearance-none
                     checked:bg-[#199BD1] checked:border-[#199BD1] checked:ring-1 checked:after:font-[500] checked:ring-[#199BD1]
                     checked:after:text-md checked:after:p-1"
                  />
                  <span className="text-white text-[11px] font-medium leading-[14.85px]">
                    Calendar
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>

        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading ? (
            <TasksListLoader />
          ) : (
            <>
              {paginatedData?.length > 0 ? (
                paginatedData?.map((task, index) => {
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
        <DateModal
          isOpen={isCalendarOpen}
          setIsOpen={setIsCalendarOpen}
          setDueDate={setDueDate}
          setInputError={setInputError}
          isRange={"range"}
          // minDate={moment().startOf("day").toDate()}
          minDate={new Date("2023-10-25")}
        />
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default TasksContainer;
