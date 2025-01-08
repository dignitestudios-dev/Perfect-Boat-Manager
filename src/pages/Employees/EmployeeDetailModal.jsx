import React, { useState, useRef, useEffect, useContext } from "react";
import { FaCaretDown } from "react-icons/fa";
import LocationType from "../../components/global/headerDropDowns/LocationType";
import JobType from "../../components/global/headerDropDowns/JobType";
import { GlobalContext } from "../../contexts/GlobalContext";
import AssignModalLoader from "../../components/global/Loaders/AssignModalLoader";

const EmployeeDetailModal = ({
  setIsOpen,
  SetPassSelectedEmployee,
  setInputError,
  employeeId = "",
}) => {
  const { employees } = useContext(GlobalContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [jobTitleDropdownOpen, setJobTitleDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [jobType, setJobType] = useState([]);
  const [locationType, setLocationType] = useState([]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const filteredData = employees?.filter((item) => {
    const managers = employeeId ? employeeId !== item._id : true;
    const matchesSearch = searchTerm
      ? item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        item?.email?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        item?.jobtitle?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        item?.location?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      : true;
    const jobTypeMatch =
      jobType && jobType.length !== 0
        ? jobType?.includes(item?.jobtitle?.toLowerCase())
        : true;
    const locationTypeMatch =
      locationType && locationType.length !== 0
        ? locationType?.includes(item?.location?.toLowerCase())
        : true;
    return matchesSearch && locationTypeMatch && jobTypeMatch && managers;
  });

  const toggleJobTitleDropdown = () => {
    setJobTitleDropdownOpen(!jobTitleDropdownOpen);
  };

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!locationDropdownOpen);
  };

  const handleSelectEmployee = (employeeId, employeeName) => {
    setInputError({});
    if (selectedEmployee?.id === employeeId) {
      setSelectedEmployee(null);
    } else {
      setSelectedEmployee({ id: employeeId, name: employeeName });
    }
  };

  const handleEmployeeSelection = () => {
    if (selectedEmployee) {
      SetPassSelectedEmployee(selectedEmployee);
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-[90%] max-w-4xl h-[80%] max-h-[80%] rounded-3xl flex items-center justify-center p-4 bg-[#1A293D]">
        <div className="bg-[#001229] text-white rounded-2xl shadow-lg w-full h-full p-4 overflow-hidden">
          <div className="flex flex-col mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Select Employee</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold"
              >
                ✕
              </button>
            </div>
            <div className="flex items-center mb-4 justify-between">
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-72 h-10 bg-[#2A394C] text-white px-4 rounded-md outline-none"
              />
              <button
                onClick={() => handleEmployeeSelection()}
                className="bg-[#119bd1] text-white px-6 py-2 rounded-md"
              >
                Done
              </button>
            </div>
          </div>
          <div className="relative h-full overflow-auto">
            <table className="min-w-full text-white">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="px-0 py-2"></th>
                  <th className="px-4 py-2">Employee Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2 relative">
                    <JobType
                      jobTitleDropdownOpen={jobTitleDropdownOpen}
                      toggleJobTitleDropdown={toggleJobTitleDropdown}
                      jobType={jobType}
                      setJobType={setJobType}
                    />
                  </th>
                  <th className="px-4 py-2 relative">
                    <LocationType
                      locationDropdownOpen={locationDropdownOpen}
                      toggleLocationDropdown={toggleLocationDropdown}
                      locationType={locationType}
                      setLocationType={setLocationType}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData?.length > 0 ? (
                  <>
                    {filteredData?.map((employee, index) => {
                      const isSelected = selectedEmployee?.id === employee._id;
                      return (
                        <tr key={index} className="border-b border-gray-600">
                          <td className="px-0 py-2">
                            <input
                              checked={isSelected}
                              onChange={() =>
                                handleSelectEmployee(
                                  employee._id,
                                  employee.name
                                )
                              }
                              type="checkbox"
                              className="w-4 h-4 accent-[#199BD1]"
                            />
                          </td>
                          <td className="px-4 py-2">{employee?.name}</td>
                          <td className="px-4 py-2"> {employee?.email} </td>
                          <td className="px-4 py-2">{employee?.jobtitle}</td>
                          <td className="px-4 py-2">{employee?.location}</td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center py-4 text-sm font-medium text-white"
                    >
                      No record found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#119bd1] text-white px-6 py-2 rounded-md"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailModal;
