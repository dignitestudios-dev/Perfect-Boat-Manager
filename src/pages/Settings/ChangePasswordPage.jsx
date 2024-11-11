import React, { useState } from "react";
import AddFleetInput from "../../components/fleet/AddFleetInput";
import { useForm } from "react-hook-form";
import axios from "../../axios";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster";

const ChangePasswordPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleUpdateClick = async (formData) => {
    setLoading(true);
    try {
      let obj = {
        currentPassword: formData.password,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword,
      };

      const response = await axios.post("/auth/change/password", obj);
      if (response.status === 200) {
        SuccessToast("Password Updated");
        // setIsModalOpen(true);
        reset();
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
      console.log("🚀 ~ handleUpdateClick ~ err:", err);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };
  return (
    <div className="w-full flex flex-col gap-6 px-5 pb-5 md:px-0">
      <div className="w-full flex flex-col justify-start gap-8 items-start">
        <div>
          <h1 className="text-[24px] font-bold leading-[32.4px]">
            Change Password
          </h1>
        </div>

        <form onSubmit={handleSubmit(handleUpdateClick)} className="w-full">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <AddFleetInput
              label={"Current Password"}
              maxLength={16}
              register={register("password", {
                required: "Please enter your password.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long.",
                },
              })}
              text={"Current Password"}
              placeholder={"Enter Password"}
              type={"password"}
              error={errors.password}
            />
            <AddFleetInput
              label={"New Password"}
              maxLength={16}
              register={register("newPassword", {
                required: "Please enter your password.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long.",
                },
              })}
              text={"New Password"}
              placeholder={"Enter Password"}
              type={"password"}
              error={errors.newPassword}
            />

            <AddFleetInput
              label={"Confirm New Password"}
              maxLength={16}
              register={register("confirmPassword", {
                required: "Please enter your password.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long.",
                },
              })}
              text={"Confirm New Password"}
              placeholder={"Enter Password"}
              type={"password"}
              error={errors.confirmPassword}
            />
            <button
              disabled={loading}
              className="w-full h-[52px] rounded-xl mt-6 bg-[#119bd1]
             text-white flex items-center justify-center text-sm font-medium"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
