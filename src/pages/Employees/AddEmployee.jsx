import React, { useContext, useState } from "react";
import AddFleetInput from "../../components/fleet/AddFleetInput";
import { GlobalContext } from "../../contexts/GlobalContext";
import EmployeeAddModal from "../Employees/EmployeeAddModal";
import ImportCSVModal from "../../components/global/ImportCSVModal"; // Adjust the path as necessary
import { useForm } from "react-hook-form";
import AddEmployeeCsv from "../../components/employees/AddEmployeeCsv";
import { FiLoader } from "react-icons/fi";
import Papa from "papaparse";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster";
import axios from "../../axios";

const AddEmployee = () => {
  const { navigate, setUpdateEmployee } = useContext(GlobalContext);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isImportCSVModalOpen, setIsImportCSVModalOpen] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [csvUploaded, setCsvUploaded] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddEmployee = async (data) => {
    try {
      setAddLoading(true);
      const employeeData = { ...data, password: "Test@123" };
      const response = await axios.post("/manager/employees", employeeData);
      if (response.status === 200) {
        setUpdateEmployee((prev) => !prev);
        setIsAddModalOpen(true);
        reset();
        // navigate("/employees", "Employee List");
      }
    } catch (err) {
      console.log("🚀 ~ handleAddEmployee ~ err:", err);
      ErrorToast(err?.response?.data?.message);
    } finally {
      setAddLoading(false);
    }
  };

  const handleNavigate = () => {
    setIsAddModalOpen(false);
    navigate("/employees", "Employee List");
  };

  const [data, setData] = useState([
    {
      name: "",
      email: "",
      jobtitle: "",
      location: "",
      phone: "",
      password: "Test@123",
    },
  ]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const parsedData = results.data.map((item) => ({
            name: item.name || "",
            email: item.email || "",
            jobtitle: item.jobtitle || "",
            location: item.location || "",
            phone: item.phone || "",
            password: "Test@123",
          }));
          setData(parsedData);
          // checkForError(parsedData);
        },
      });
      setCsvUploaded(true);
    }
  };

  return (
    <div className="w-full h-auto min-h-screen overflow-y-auto bg-[#1A293D] text-white p-4 pb-20 flex flex-col justify-start items-start">
      <div className="w-full flex flex-col justify-start items-start gap-6 p-6 rounded-[18px] bg-[#001229]">
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-3 lg:items-center">
          <div>
            <h1 className="text-[18px] font-bold text-white leading-[24.3px]">
              Add Employee
            </h1>
          </div>
          <div className="w-72 flex justify-end gap-2 items-center">
            <a
              href="https://api.theperfectboat.com/public/Image/Employee_CSV_Template-ManagerPanel.csv"
              download
            >
              <button
                disabled={addLoading}
                type="button"
                className="bg-[#1A293D] text-[#36B8F3] py-2 px-4 rounded-xl"
              >
                Download Template
              </button>
            </a>
            {data?.length == 1 && (
              <button
                type="button"
                className="bg-[#199BD1] w-[107px] h-[35px] rounded-xl text-white flex items-center justify-center text-sm font-medium leading-5"
                onClick={() => {
                  document.getElementById("input").click();
                }}
              >
                Import CSV
              </button>
            )}
            <input
              type="file"
              id="input"
              className="hidden"
              accept=".csv"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {csvUploaded ? (
          <AddEmployeeCsv data={data} setData={setData} />
        ) : (
          <form
            onSubmit={handleSubmit(handleAddEmployee)}
            className="w-full flex justify-start items-start"
          >
            <div className="w-full h-auto flex flex-col gap-6 justify-start items-start">
              <div className="w-full flex flex-col justify-start items-start gap-6">
                <div className="w-full h-auto flex justify-between items-center">
                  <div></div>
                </div>
                <div className="w-full h-auto flex flex-col justify-start items-start gap-6">
                  <div className="w-full grid grid-cols-2 gap-12">
                    <AddFleetInput
                      label={"Name"}
                      register={register("name", {
                        required: "Please enter employee name.",
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "Please enter a valid name.",
                        },
                      })}
                      text={"Name"}
                      placeholder={"Enter employee name here"}
                      type={"text"}
                      error={errors.fullName}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z\s]/g,
                          ""
                        );
                      }}
                    />
                    <AddFleetInput
                      label={"Email"}
                      type="email"
                      placeholder="Enter Email"
                      register={register("email", {
                        required: "Please enter your email address.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address.",
                        },
                      })}
                      error={errors.email}
                    />
                  </div>
                  <div className="w-full grid grid-cols-2 gap-12">
                    <AddFleetInput
                      label={"Job Title"}
                      type="text"
                      placeholder="Enter Job Title"
                      register={register("jobtitle", {
                        required: "Please enter your job title",
                      })}
                      error={errors.jobtitle}
                    />
                    <AddFleetInput
                      label={"Location"}
                      type="text"
                      placeholder="Enter location"
                      maxLength={80}
                      register={register("location", {
                        required: "Please enter a location",
                        minLength: {
                          value: 2,
                          message:
                            "Location must be at least 2 characters long",
                        },
                      })}
                      error={errors.location}
                    />
                  </div>
                  <div className="w-full grid grid-cols-2 gap-12">
                    <AddFleetInput
                      label={"Phone Number"}
                      register={register("phone", {
                        required: "Please enter your phone number.",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Please enter a valid phone number.",
                        },
                      })}
                      maxLength="10"
                      text={"Phone Number"}
                      placeholder={"Enter your phone number here"}
                      type={"text"}
                      error={errors.phone}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, "");
                      }}
                      isPhone={true}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end mt-10 items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/employees", "Employees");
                  }}
                  className="w-full lg:w-[208px] h-[52px] bg-[#02203A] text-[#199BD1] rounded-[12px] flex items-center justify-center
                   text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
                >
                  Back
                </button>
                <button
                  disabled={addLoading}
                  className="w-full lg:w-[208px] h-[52px] bg-[#199BD1] text-white rounded-[12px] flex items-center justify-center
                   text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
                >
                  <div className="flex items-center">
                    <span className="mr-1">Add</span>
                    {addLoading && (
                      <FiLoader className="animate-spin text-lg mx-auto" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      <EmployeeAddModal
        isOpen={isAddModalOpen}
        onClose={handleNavigate}
        onAdd={() => setIsAddModalOpen(false)}
      />
      <ImportCSVModal
        isOpen={isImportCSVModalOpen}
        onClose={() => setIsImportCSVModalOpen(false)}
      />
    </div>
  );
};

export default AddEmployee;
