import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { sampleNotifications } from "../../constants/notifications";
import { AuthMockup } from "../../assets/export";
import { Link, useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import NotificationRow from "./NotificationRow";
import { GlobalContext } from "../../contexts/GlobalContext";
import axios from "../../axios";
import { ErrorToast } from "../../components/global/Toaster";

const Notifications = () => {
  const navigate = useNavigate();
  const {
    notifications,
    setNotifications,
    notificationUpdate,
    setNotificationUpdate,
  } = useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState("All");
  const [notificationLoading, setNotificationLoading] = useState(false);

  // const filterNotifications = () => {
  //   if (activeTab === "Read") {
  //     return sampleNotifications.filter((notification) => notification.read);
  //   } else if (activeTab === "Unread") {
  //     return sampleNotifications.filter((notification) => !notification.read);
  //   }
  //   return sampleNotifications;
  // };

  const getNotifications = async () => {
    setNotificationLoading(true);
    try {
      const { data } = await axios.get("/manager/notification");
      setNotifications(data?.data?.reverse());
    } catch (err) {
      console.log("🚀 ~ getNotifications ~ err:", err);
    } finally {
      setNotificationLoading(false);
    }
  };
  useEffect(() => {
    getNotifications();
  }, [notificationUpdate, activeTab]);

  const unreadCount = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  const [filteredNotifications, setFilteredNotifications] = useState([]);

  useEffect(() => {
    setFilteredNotifications(
      notifications.filter((notification) => {
        if (activeTab === "Read") return notification?.isRead;
        if (activeTab === "Unread") return !notification?.isRead;
        return true; // for "all" tab
      })
    );
  }, [activeTab, notifications]);

  const [updateLoading, setUpdateLoading] = useState(false);
  const [DeleteLoading, setDeleteLoading] = useState(false);

  // Function to delete all notifications
  const deleteAll = async () => {
    setDeleteLoading(true);
    try {
      const deleteResponse = await axios.delete("/manager/notification");
      console.log("🚀 ~ deleteAll ~ deleteResponse:", deleteResponse);

      // Ensure response status is 200, and handle success accordingly
      if (deleteResponse?.status === 200) {
        setNotificationUpdate((prev) => !prev);
        SuccessToast("Notifications cleared successfully.");
      } else {
        // Handle cases where the status is not 200 (even if the request doesn't throw an error)
        throw new Error("Unexpected response status");
      }
    } catch (err) {
      // Ensure only actual errors trigger the toast, using fallback message when necessary
      const errorMessage =
        err?.response?.data?.message ||
        "An error occurred. Please try again later.";
      ErrorToast(errorMessage);
    } finally {
      setDeleteLoading(false);
    }
  };

  // Function to mark all notifications as read
  const readAll = async () => {
    setUpdateLoading(true);
    try {
      const readResponse = await axios.put("/manager/notification/read");
      console.log("🚀 ~ readAll ~ readResponse:", readResponse);

      // Ensure that the response status is 200 and has the expected format
      if (readResponse?.status === 200) {
        // getNotifications();
      } else {
        // Handle cases where the status isn't 200, if needed
        throw new Error("Unexpected response status");
      }
    } catch (err) {
      // Only show the error toast if it's an actual error, and avoid triggering on success.
      if (err?.response?.data?.message) {
        ErrorToast(err?.response?.data?.message);
      } else {
        // If no specific message, you could display a general error message
        ErrorToast("An unexpected error occurred.");
      }
    } finally {
      setUpdateLoading(false);
    }
  };

  return (
    <div className="h-full overflow-y-auto w-full p-2 lg:p-6 flex flex-col gap-6 justify-start items-start">
      <div className="w-full h-auto flex flex-col justify-start items-start gap-4 p-4 lg:p-6 rounded-[18px] bg-[#001229]">
        <h1 className="text-[28px] font-bold text-white leading-[37.8px]">
          Notifications
        </h1>
        <div className="w-full  border-b-[0.5px] border-white/15 flex  justify-between items-center h-[34px] text-base font-normal text-[#fff]/[50%]">
          <div className="w-auto h-[34px] flex gap-6 justify-start items-center">
            <button
              onClick={() => setActiveTab("All")}
              className={`px-2 h-[34px] ${
                activeTab == "All" &&
                "text-[#199BD1] font-bold  border-b-[3px] border-[#199BD1]"
              } `}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("Read")}
              className={`px-2 h-[34px] ${
                activeTab == "Read" &&
                "text-[#199BD1]  font-bold border-b-[3px] border-[#199BD1]"
              } `}
            >
              Read
            </button>
            <button
              onClick={() => {
                if (filteredNotifications.some((e) => e?.isRead === false)) {
                  readAll();
                }

                setActiveTab("Unread");
              }}
              className={`px-2 h-[34px] flex justify-between items-center gap-2 ${
                activeTab == "Unread" &&
                "text-[#199BD1]  font-bold border-b-[3px] border-[#199BD1]"
              } `}
            >
              <span>Unread</span>
              {updateLoading && (
                <FiLoader className="animate-spin text-lg ml-1" />
              )}
              <span className="bg-[#199BD1] text-white w-[18px] h-[18px] rounded-full text-[10px] flex items-center justify-center">
                {unreadCount}
              </span>
            </button>
          </div>
          <button
            onClick={() => {
              filteredNotifications.length > 0 && deleteAll();
            }}
            className={`w-[107px] h-[32px] mb-2 text-[11px] flex items-center justify-center gap-1 font-bold rounded-[10px] text-white bg-[#199BD1]`}
          >
            Clear All
            {DeleteLoading && (
              <FiLoader className="animate-spin text-lg ml-1" />
            )}
          </button>
        </div>
        {/* <div className="w-full flex items-center justify-between  gap-6">
          <div className="flex items-center">
            <div className="">
              <button
                className={`text-base font-normal ${
                  activeTab === "All" ? "text-[#199BD1]" : "text-[#707070]"
                } px-6`}
                onClick={() => setActiveTab("All")}
              >
                All
              </button>
              {activeTab === "All" ? (
                <div className="w-full h-[0.5px] flex justify-center items-center bg-[#fff]/[0.14]">
                  <div className="bg-[#199BD1] w-full h-[3px] rounded-full mx-auto" />
                </div>
              ) : (
                <div className="bg-[#fff]/[0.14] w-full h-[0.5px] rounded-full" />
              )}
            </div>
            <div className="">
              <button
                className={`text-base font-normal ${
                  activeTab === "Read" ? "text-[#199BD1]" : "text-[#707070]"
                } px-6`}
                onClick={() => setActiveTab("Read")}
              >
                Read
              </button>
              {activeTab === "Read" ? (
                <div className="w-full h-[0.5px] flex justify-center items-center bg-[#fff]/[0.14]">
                  <div className="bg-[#199BD1] w-full h-[3px] rounded-full mx-auto" />
                </div>
              ) : (
                <div className="bg-[#fff]/[0.14] w-full h-[0.5px] rounded-full" />
              )}
            </div>
            <div className="">
              <button
                className={`text-base font-normal ${
                  activeTab === "Unread" ? "text-[#199BD1]" : "text-[#707070]"
                }  flex gap-2 items-center px-6`}
                onClick={() => setActiveTab("Unread")}
              >
                Unread{" "}
                <div className="bg-[#199BD1] text-white w-[18px] h-[18px] rounded-full text-[10px] flex items-center justify-center">
                  15
                </div>
              </button>
              {activeTab === "Unread" ? (
                <div className="w-full h-[0.5px] flex justify-center items-center bg-[#fff]/[0.14]">
                  <div className="bg-[#199BD1] w-full h-[3px] rounded-full mx-auto" />
                </div>
              ) : (
                <div className="bg-[#fff]/[0.14] w-full h-[0.5px] rounded-full" />
              )}
            </div>
          </div>
          {/* <button className="bg-[#199BD1] rounded-full text-[13px] font-semibold text-white py-2.5 w-[118px]">
          Clear All
        </button>
        </div>  */}
        <div className="w-full">
          {filteredNotifications?.map((notification) => (
            <NotificationRow
              notification={notification}
              key={notification?._id}
              setNotificationUpdate={setNotificationUpdate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
