import React from "react";
import EmployeesTableBig from "../../components/employees/EmployeesTableBig";

const Employees = () => {
  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      <EmployeesTableBig />
    </div>
  );
};

export default Employees;
