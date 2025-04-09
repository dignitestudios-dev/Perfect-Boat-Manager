import React, { useContext, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaCaretDown, FaRegEdit } from "react-icons/fa";
import DeleteAccount from "../global/DeleteAccount";
import DeactivateAccountModal from "../../pages/Employees/DeactivateAccountModal";
import DeleteAccountModal from "../global/DeleteAccountModal";
import JobType from "../global/headerDropDowns/JobType";
import LocationType from "../global/headerDropDowns/LocationType";
import ManagerListLoader from "../global/Loaders/ManagerListLoader";
import { ErrorToast } from "../global/Toaster";
import axios from "../../axios";
import { CiExport } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import ReactivateModal from "./ReactiveModal";
import Pagination from "../global/Pagination";

const EmployeesTableBig = ({ data, loading, getEmployees }) => {
  const { navigate, setUpdateEmployee } = useContext(GlobalContext);
  const navigation = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 18;

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [exportemployee, setExportemployee] = useState("");
  const [exportLoader, setExportLoader] = useState(false);
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [isAccountDeleteModalOpen, setIsAccountDeleteModalOpen] =
    useState(false);
  const [search, setSearch] = useState("");

  const [jobTitleDropdownOpen, setJobTitleDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [deactivateLoading, setDeactivateLoading] = useState(false);

  const [locationType, setLocationType] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [employeeId, setEmployeeId] = useState();
  const [reactivateModalOpen, setIsReactivateModalOpen] = useState();
  const [userId, setUserId] = useState();

  const toggleJobTitleDropdown = () => {
    setJobTitleDropdownOpen(!jobTitleDropdownOpen);
  };

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!locationDropdownOpen);
  };

  const filteredData = data?.filter((item) => {
    const matchesSearch = search
      ? item?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
        item?.email?.toLowerCase()?.includes(search?.toLowerCase()) ||
        item?.jobtitle?.toLowerCase()?.includes(search?.toLowerCase()) ||
        item?.location?.toLowerCase()?.includes(search?.toLowerCase())
      : true;
    const jobTypeMatch =
      jobType && jobType.length !== 0
        ? jobType?.includes(item?.jobtitle?.toLowerCase())
        : true;
    const locationTypeMatch =
      locationType && locationType.length !== 0
        ? locationType?.includes(item?.location?.toLowerCase())
        : true;
    return matchesSearch && locationTypeMatch && jobTypeMatch;
  });

  const totalPages = Math.ceil(filteredData?.length / pageSize);
  // Slice the data for the current page
  const paginatedData = filteredData?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleEditClick = (id, editshow) => {
    console.log(editshow, "editshow");
    navigation(`/employees/${id}`, { state: editshow });
  };

  const handleDeleteClick = (id) => {
    setIsModalOpen(true);
    setEmployeeId(id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeactivate = async () => {
    navigation(`/delete-account/${employeeId}`, {
      state: { reasonForDelete: "deactivation" },
    });
  };

  const handleDelete = () => {
    setIsAccountDeleteModalOpen(true);
    // setIsModalOpen(false);
  };

  // useEffect(() => {
  //   setCurrentPage(1);
  //   getEmployees(jobType, locationType);
  // }, [jobType, locationType]);

  const exportEmployee = async () => {
    setExportLoader(true);
    try {
      const response = await axios.get("/manager/employees/csv");

      if (response.status === 200) {
        const result = await response?.data;

        // Check if the data contains the download link
        if (result?.success && result?.data) {
          const downloadUrl = result?.data;
          console.log(downloadUrl, "downloadUrldownloadUrldownloadUrl");
          // Create an anchor element and trigger a download
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.download = "Employee.csv"; // Optional: Specify the download file name
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          console.error("Failed to fetch download link:", result?.message);
        }
      } else {
        ErrorToast("Failed to download CSV");
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
      console.error("Error downloading file:", err);
    } finally {
      setExportLoader(false);
    }
  };

  const handleActionClick = (id) => {
    setUserId(id);
    setIsReactivateModalOpen(true);
  };

  const [activateLoading, setActivateLoading] = useState(false);

  const handleReactivate = async () => {
    try {
      setActivateLoading(true);
      const response = await axios.put(`/manager/user/activate/${userId}`);

      if (response.status === 200) {
        setIsReactivateModalOpen(false);
        getEmployees();
        setActivateLoading(false);
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
      setActivateLoading(false);
    }
  };
  return (
    <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
      <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
        Employees List
      </h3>

      <div className="w-full h-auto flex justify-between items-center">
        <div className="flex w-1/2 lg:w-[295px] h-[32px] justify-start items-start rounded-[8px] bg-[#1A293D] relative">
          <span className="w-[32px] h-full flex items-center justify-center">
            <FiSearch className="text-white/50 text-lg" />
          </span>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            type="text"
            placeholder="Search here"
            className="w-[calc(100%-35px)] outline-none text-sm bg-transparent h-full"
          />
        </div>
        <div className="flex  items-center gap-5">
          <button
            disabled={exportLoader}
            onClick={exportEmployee}
            className="h-[35px] w-[125px] mr-1 px-1 flex items-center gap-1 rounded-[10px] justify-center
             bg-[#4c585c] text-white text-[11px] font-bold leading-[14.85px] hover:bg-[#576367]"
          >
            <span className="text-[11px]">
              <CiExport className="text-[16px]" />
            </span>
            {exportLoader ? "Exporting..." : "Export Employees"}
          </button>
          <button
            onClick={() => navigate("/add-employee", "Employees")}
            className="h-[35px] w-[114px] flex items-center gap-1 rounded-[10px] justify-center bg-[#199BD1] text-white text-[11px] font-bold leading-[14.85px]"
          >
            <span className="text-lg">+</span>
            Add Employee
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto lg:overflow-visible">
        <div className="min-w-[768px] flex flex-col gap-1 justify-start items-start">
          <div className="w-full grid grid-cols-[5fr_5fr_5fr_5.1fr_1fr] border-b border-white/10 h-6 text-[11px] font-medium leading-[14.85px] text-white/50 justify-start items-start">
            <span className="w-full flex justify-start items-center">
              Employee Name
            </span>
            <span className="w-full flex justify-start items-center">
              Email
            </span>
            <JobType
              jobTitleDropdownOpen={jobTitleDropdownOpen}
              toggleJobTitleDropdown={toggleJobTitleDropdown}
              jobType={jobType}
              setJobType={setJobType}
              employeesJobTitles={data?.map((item) => item.jobtitle)}
              setCurrentPage={setCurrentPage}
            />

            <LocationType
              locationDropdownOpen={locationDropdownOpen}
              toggleLocationDropdown={toggleLocationDropdown}
              locationType={locationType}
              setLocationType={setLocationType}
              employeesLocTitles={data?.map((item) => item.location)}
              title="Location "
              setCurrentPage={setCurrentPage}
            />
            <span className="w-full flex justify-start items-center pl-[170px] pr-[60px]">
              Action
            </span>
          </div>

          {loading ? (
            <ManagerListLoader />
          ) : (
            <>
              {paginatedData?.map((employee, index) => (
                <div
                  key={index}
                  className={` ${
                    employee?.isActive === true ? "cursor-pointer" : ""
                  } w-full h-auto grid grid-cols-[5fr_5fr_5fr_5.1fr_1fr] border-b border-white/10  text-[11px]
          font-medium leading-[14.85px] text-white justify-start items-center`}
                  onClick={() => {
                    if (employee?.isActive) {
                      handleEditClick(employee?._id, false);
                    }
                  }}
                >
                  <span className="h-10  w-full flex justify-start items-center">
                    {employee?.name}
                  </span>
                  <span className="w-full flex justify-start items-center">
                    {employee?.email}
                  </span>
                  <span className="w-full flex justify-start items-center">
                    {employee?.jobtitle}
                  </span>
                  <span className="w-full  flex justify-start items-center">
                    {employee?.location || "---"}
                  </span>
                  <div className="w-full flex  text-[15px] text-white/40 justify-start items-center gap-2 pl-[170px] pr-[55px]">
                    <span
                      className="flex justify-start items-center cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (employee?.isActive) {
                          handleEditClick(employee?._id, true);
                        }
                      }}
                    >
                      <FaRegEdit />
                    </span>
                    {employee?.isActive === true ? (
                      <span
                        className="flex justify-start items-center cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteClick(employee?._id);
                        }}
                      >
                        <RiDeleteBinLine />
                      </span>
                    ) : (
                      <span
                        className="flex justify-start items-center cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleActionClick(employee?._id);
                        }}
                      >
                        <TfiReload />
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        {reactivateModalOpen && (
          <ReactivateModal
            isOpen={reactivateModalOpen}
            onClose={() => setIsReactivateModalOpen(false)}
            reactivate={handleReactivate}
            activateLoading={activateLoading}
          />
        )}
        <DeleteAccount
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onDeactivate={handleDeactivate}
          onDelete={handleDelete} // Pass the handler to open the delete modal
          deactivateLoading={deactivateLoading}
        />
        <DeactivateAccountModal
          isOpen={isDeactivateModalOpen}
          setIsOpen={setIsDeactivateModalOpen}
        />

        <DeleteAccountModal
          employeeId={employeeId}
          isOpen={isAccountDeleteModalOpen}
          onClose={() => setIsAccountDeleteModalOpen(false)} // Add a way to close the modal
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

export default EmployeesTableBig;
