import React, { useContext, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
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

const EmployeesTableBig = ({ data, loading, getEmployees, setCurrentPage }) => {
  const { navigate, setUpdateEmployee } = useContext(GlobalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [isAccountDeleteModalOpen, setIsAccountDeleteModalOpen] =
    useState(false);
  const [search, setSearch] = useState("");

  const [jobTitleDropdownOpen, setJobTitleDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [deactivateLoading, setDeactivateLoading] = useState(false);

  const [locationType, setLocationType] = useState("all");
  const [jobType, setJobType] = useState("all");
  const [employeeId, setEmployeeId] = useState();

  const toggleJobTitleDropdown = () => {
    setJobTitleDropdownOpen(!jobTitleDropdownOpen);
  };

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!locationDropdownOpen);
  };

  const filteredData = data?.filter((item) =>
    item?.name?.toLowerCase()?.includes(search?.toLowerCase())
  );

  const handleEditClick = (id) => {
    navigate(`/employees/${id}`);
  };

  const handleDeleteClick = (id) => {
    setIsModalOpen(true);
    setEmployeeId(id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeactivate = async () => {
    setDeactivateLoading(true);
    try {
      const obj = { reason: "Deactivate" };
      const response = await axios.delete(
        `/manager/employees/${employeeId}?deactivate=true`,
        { data: obj }
      );

      if (response?.status === 200) {
        setUpdateEmployee((prev) => !prev);
        setIsDeactivateModalOpen(true);
        setIsModalOpen(false);
        getEmployees();
        setDeactivateLoading(false);
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
      setDeactivateLoading(false);
    }
  };

  const handleDelete = () => {
    setIsAccountDeleteModalOpen(true);
    // setIsModalOpen(false);
  };

  useEffect(() => {
    setCurrentPage(1);
    getEmployees(jobType, locationType);
  }, [jobType, locationType]);

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
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search here"
            className="w-[calc(100%-35px)] outline-none text-sm bg-transparent h-full"
          />
        </div>

        <button
          onClick={() => navigate("/add-employee", "Employees")}
          className="h-[35px] w-[114px] flex items-center gap-1 rounded-[10px] justify-center bg-[#199BD1] text-white text-[11px] font-bold leading-[14.85px]"
        >
          <span className="text-lg">+</span>
          Add Employee
        </button>
      </div>

      <div className="w-full overflow-x-auto lg:overflow-visible">
        <div className="min-w-[768px] flex flex-col gap-1 justify-start items-start">
          <div className="w-full grid grid-cols-5 border-b border-white/10 h-6 text-[11px] font-medium leading-[14.85px] text-white/50 justify-start items-start">
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
            />

            <LocationType
              locationDropdownOpen={locationDropdownOpen}
              toggleLocationDropdown={toggleLocationDropdown}
              locationType={locationType}
              setLocationType={setLocationType}
            />
            <span className="w-full flex justify-start items-center px-[170px]">
              Action
            </span>
          </div>

          {loading ? (
            <ManagerListLoader />
          ) : (
            <>
              {filteredData?.map((employee, index) => (
                <div
                  key={index}
                  className="w-full h-8 grid grid-cols-5 border-b cursor-pointer border-white/10  text-[11px] font-medium leading-[14.85px] text-white justify-start items-center"
                >
                  <span
                    className="w-full flex justify-start items-center"
                    onClick={() =>
                      navigate(`/employees/${employee._id}`, "Employees")
                    }
                  >
                    {employee?.name}
                  </span>
                  <span className="w-full flex justify-start items-center">
                    {employee?.email}
                  </span>
                  <span className="w-full flex justify-start items-center">
                    {employee?.jobtitle}
                  </span>
                  <span className="w-full flex justify-start items-center">
                    {employee?.location || "---"}
                  </span>
                  <div className="w-full flex text-[15px] text-white/40 justify-start items-center gap-2 px-[170px]">
                    <span
                      className="flex justify-start items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClick(employee?._id);
                      }}
                    >
                      <FaRegEdit />
                    </span>
                    <span
                      className="flex justify-start items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteClick(employee?._id);
                      }}
                    >
                      <RiDeleteBinLine />
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
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
    </div>
  );
};

export default EmployeesTableBig;
