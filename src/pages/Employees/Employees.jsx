import React, { useContext, useEffect, useState } from "react";
import EmployeesTableBig from "../../components/employees/EmployeesTableBig";
import axios from "../../axios";
import Pagination from "../../components/global/Pagination";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(false);
  const [pageDetails, setPageDetails] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getEmployees = async (jobTitle = [], locations = []) => {
    console.log(jobTitle, "jobTitle");
    setLoadingEmployees(true);
    try {
      const jobQuery = jobTitle?.length !== 0 ? `&jobTitle=${jobTitle}` : "";
      console.log(jobTitle?.length, "jobTitle?.length");
      const locationQuery =
        locations?.length !== 0 ? `&locations=${locations}` : "";
      const { data } = await axios.get(
        `/manager/employees?page=${currentPage}&pageSize=15${jobQuery}${locationQuery}`
      );
      setEmployees(data?.data?.data);
      setPageDetails(data?.data?.paginationDetails);
      setTotalPages(data?.data?.paginationDetails?.totalPages);
    } catch (err) {
      console.log("🚀 ~ getEmployees ~ err:", err);
    } finally {
      setLoadingEmployees(false);
    }
  };
  useEffect(() => {
    getEmployees();
  }, [currentPage]);

  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      <EmployeesTableBig
        data={employees}
        loading={loadingEmployees}
        getEmployees={getEmployees}
        setCurrentPage={setCurrentPage}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
      />
    </div>
  );
};

export default Employees;
