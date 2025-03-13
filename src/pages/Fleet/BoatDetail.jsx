import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { FaCaretDown, FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbCaretDownFilled } from "react-icons/tb";
import AddFleetInput from "../../components/fleet/AddFleetInput";
import AddFleetImage from "../../components/fleet/AddFleetImage";
import { AuthMockup } from "../../assets/export";
import ViewAllTasksModal from "../../components/tasks/ViewAllTasksModal";
import DateModal from "../../components/tasks/DateModal";
import AssignedModal from "../Tasks/AssignedModal";
import { MdOutlineDateRange } from "react-icons/md";
import DeletedModal from "../../components/global/DeletedModal";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axios";
import { useForm } from "react-hook-form";
import AssignedBoatTasks from "../../components/fleet/AssignedBoatTasks";
import { FiLoader } from "react-icons/fi";

const BoatDetail = () => {
  const { boatDropDown } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isAssignedModalOpen, setIsAssignedModalOpen] = useState(false);
  const [newLocation, setNewLocation] = useState(false);

  const [boatsData, setBoatsData] = useState([]);
  const [loadingBoats, setLoadingBoats] = useState(false);

  const getBoats = async () => {
    setLoadingBoats(true);
    try {
      const { data } = await axios.get(`/manager/boat/${id}`);
      setBoatsData(data?.data);
      setValue("name", data?.data?.boat?.name);
      const combinedValue = `${data?.data?.boat?.model || ""}/${
        data?.data?.boat?.make || ""
      }/${data?.data?.boat?.size || ""}`;
      setValue("combined", combinedValue);
      setValue("location", data?.data?.boat?.location);
      setNewLocation(data?.data?.boat?.location);
    } catch (err) {
      console.log("🚀 ~ getBoats ~ err:", err);
    } finally {
      setLoadingBoats(false);
    }
  };

  useEffect(() => {
    getBoats();
  }, []);

  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      {loadingBoats ? (
        <div className="w-full h-[90dvh] flex justify-center items-center">
          <FiLoader className="text-[30px] animate-spin text-lg mx-auto" />
        </div>
      ) : (
        <>
          <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
            <div className="w-full flex justify-between items-center h-12">
              <div className="w-auto flex justify-start items-center gap-2">
                <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
                  Boat Details
                </h3>
              </div>

              <button
                onClick={() =>
                  navigate("/add-task", {
                    state: { boat: boatsData?.boat },
                  })
                }
                className="w-[118px] h-[32px] flex justify-center items-center gap-2 bg-[#36B8F3] rounded-[10px] text-[#fff] text-[13px] font-medium"
              >
                <span className="text-lg">+</span>
                <span>Add New Task</span>
              </button>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-start gap-8 lg:gap-16">
              <div className="w-full h-auto flex flex-col gap-6 justify-start items-start">
                <div className="w-full flex flex-col justify-start items-start gap-4">
                  <div className="w-full h-auto flex flex-col justify-start items-start gap-8">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12">
                      <AddFleetInput
                        label="Boat Name / Hull Number"
                        placeholder="Enter Boat Name/Hull Number"
                        type="text"
                        isDisabled={true}
                        register={register(`name`, {
                          required: "Name is required",
                        })}
                        error={errors.name}
                      />

                      <div className="w-full h-auto flex flex-col gap-1 justify-end items-start">
                        <label className="text-[16px] font-medium leading-[21.6px]">
                          {"Boat Type"}
                        </label>
                        <div
                          className="group transition-all duration-500 w-full h-[52px] bg-[#1A293D] outline-none 
                    flex justify-between items-center  px-3 focus:border-[1px] focus:border-[#55C9FA] rounded-xl relative"
                        >
                          {/* hover:rounded-b-none hover:rounded-t-xl */}
                          <span className="text-white">
                            {boatsData?.boat?.boatType}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-12">
                      <AddFleetInput
                        label={"Year/Make/Size"}
                        register={register("combined", {
                          required: "Combined value is required",
                        })}
                        isDisabled={true}
                      />

                      <div className="w-full h-auto flex flex-col gap-1 justify-center items-start">
                        <label className="text-[16px] font-medium">
                          {"Location / Customer Name"}
                        </label>
                        <div
                          className="w-full max-h-[200px] flex items-center py-3.5 px-2.5 resize-none bg-[#1A293D] outline-none 
               focus:border-[1px] focus:border-[#55C9FA] rounded-xl text-left  "
                        >
                          {newLocation}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col justify-start items-start gap-4">
                  <h3 className="text-[18px] font-bold leading-[24.3px]">
                    Photos
                  </h3>
                  <div className="w-full h-auto flex flex-wrap justify-start items-start gap-4">
                    <div className="w-full md:w-[175px] h-[147px] rounded-xl bg-[#1A293D] text-3xl flex items-center justify-center">
                      <img
                        src={boatsData?.boat?.cover || AuthMockup}
                        alt="boatimage"
                        className="w-full h-full rounded-xl"
                      />
                    </div>
                    {boatsData?.boat?.images?.length > 0 && (
                      <>
                        {boatsData?.boat?.images?.map((item, index) => (
                          <div
                            key={index}
                            className="w-full md:w-[175px] h-[147px] rounded-xl bg-[#1A293D] text-3xl flex items-center justify-center"
                          >
                            <img
                              src={item || AuthMockup}
                              alt="boatimage"
                              className="w-full h-full rounded-xl"
                            />
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AssignedBoatTasks tasks={boatsData?.task} getBoats={getBoats} />

          <div className="w-full flex justify-end mt-10 items-center gap-4">
            <button
              onClick={() => navigate(-1, "Employees")}
              className="w-full lg:w-[208px] h-[52px] bg-[#199BD1] text-white rounded-[12px] flex items-center justify-center text-[16px] font-bold leading-[21.6px] tracking-[-0.24px]"
            >
              {"Back"}
            </button>
          </div>
        </>
      )}
      {/* <DateModal isOpen={isDateModalOpen} setIsOpen={setIsDateModalOpen} /> */}
      {isAssignedModalOpen && (
        <AssignedModal
          // handleViewAllClick={handleViewAllClick} // Pass the function if needed in the modal
          setIsOpen={setIsAssignedModalOpen}
        />
      )}
    </div>
  );
};

export default BoatDetail;
