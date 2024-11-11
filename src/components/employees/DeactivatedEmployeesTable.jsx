import React, { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TfiReload } from "react-icons/tfi";
import { GlobalContext } from "../../contexts/GlobalContext";
import ReactivateModal from "./ReactiveModal";
import axios from "../../axios";
import AssignModalLoader from "../global/Loaders/AssignModalLoader";
import ManagerListLoader from "../global/Loaders/ManagerListLoader";

const DeactivatedEmployeesTable = () => {
  const { navigate } = useContext(GlobalContext);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleActionClick = (id) => {
    setUserId(id);
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState();
  const [activateLoading, setActivateLoading] = useState(false);
  const [userError, SetUserError] = useState(null);

  const handleReactivate = async () => {
    try {
      setActivateLoading(true);
      const response = await axios.put(`/manager/user/activate/${userId}`);
      if (response.status === 200) {
        setIsModalOpen(false);
        getUsersData();
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
    } finally {
      setActivateLoading(false);
    }
  };

  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsersData = async () => {
    try {
      SetUserError(null);
      setLoading(true);
      const { data } = await axios.get(`/manager/user?isDelete=false`);
      if (data.success === true) {
        setUsersData(data?.data);
      }
    } catch (error) {
      console.log("🚀 ~ getUsersData ~ error:", error);
      SetUserError("No record found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="w-full h-auto flex flex-col gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
      <h3 className="text-[18px] font-bold leading-[24.3px] text-white">
        Deactivated Employees List{" "}
        <span className="text-[12px] font-normal text-white/50 ">
          ({usersData?.length})
        </span>
      </h3>

      <div className="w-full h-auto flex justify-between items-center">
        <div className="flex w-1/2 lg:w-[295px] h-[32px] justify-start items-start rounded-[8px] bg-[#1A293D] relative">
          <span className="w-[32px] h-full flex items-center justify-center">
            <FiSearch className="text-white/50 text-lg" />
          </span>
          <input
            type="text"
            placeholder="Search here"
            className="w-[calc(100%-35px)] outline-none text-sm bg-transparent h-full"
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-1 justify-start items-start">
        <div className="w-full grid grid-cols-5 text-[13px] font-medium leading-[14.85px] text-white/50 justify-start items-start">
          <span className="w-full flex justify-start items-center">Name</span>
          <span className="w-full flex justify-start items-center">Email</span>
          <span className="w-full flex justify-start items-center">
            Job Title
          </span>
          <span className="w-full flex justify-start items-center">
            Location
          </span>
          <span className="w-full flex justify-center items-center">
            Action
          </span>
        </div>
        {loading ? (
          <ManagerListLoader />
        ) : (
          <>
            {userError ? (
              <div className="pt-2">{userError}</div>
            ) : (
              <>
                {usersData?.map((user, index) => (
                  <div
                    key={index}
                    className="w-full h-10 grid grid-cols-5 border-b border-[#fff]/[0.14] py-1 text-[13px] font-medium
                     leading-[14.85px] text-white justify-start items-center"
                  >
                    <span className="w-full flex justify-start items-center">
                      {user?.name}
                    </span>
                    <span className="w-full flex justify-start items-center">
                      {user?.email}
                    </span>
                    <span className="w-full flex justify-start items-center">
                      {user?.userType}
                    </span>
                    <span className="w-full flex justify-start items-center">
                      {user?.jobtitle}
                    </span>
                    <button
                      onClick={() => handleActionClick(user?._id)}
                      className="text-white/50 font-medium w-full flex justify-center items-center"
                    >
                      <TfiReload />
                    </button>
                  </div>
                ))}
              </>
            )}
          </>
        )}

        {/* Repeat the above div for more rows */}
      </div>

      {/* Reactivate Modal */}
      <ReactivateModal
        isOpen={isModalOpen}
        onClose={closeModal}
        reactivate={handleReactivate}
        activateLoading={activateLoading}
      />
    </div>
  );
};

export default DeactivatedEmployeesTable;
