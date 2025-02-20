import React, { useContext, useRef, useState } from "react";
import { AuthMockup } from "../../assets/export";
import AuthInput from "../../components/onboarding/AuthInput";
import AuthSubmitBtn from "../../components/onboarding/AuthSubmitBtn";
import { GlobalContext } from "../../contexts/GlobalContext";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster";
import axios from "../../axios";
import CountDown from "./CountDown";

const VerifyOtp = () => {
  const { navigate } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [resendLoading, setResendLoading] = useState(false);

  const inputs = useRef([]);
  const { login } = useContext(AuthContext);
  const email = sessionStorage.getItem("email");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (e, index) => {
    const { value } = e.target;

    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const getOtpValue = () => {
    return parseInt(otp.join(""), 10);
  };

  const handleVerifyOtp = async (otp) => {
    setLoading(true);
    try {
      let obj = {
        email: email,
        otp: getOtpValue(),
      };

      const response = await axios.post("/auth/forget/verify/email", obj);
      if (response.status === 200) {
        // login(response?.data);
        setLoading(false);
        sessionStorage.setItem("authToken", response?.data?.data?.token);
        navigate("/update-password");
        SuccessToast("OTP Verified");
      } else {
        ErrorToast("Error");
      }
    } catch (err) {
      console.log("🚀 ~ createAccount ~ err:", err);
      ErrorToast(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setResendLoading(true);
    try {
      let obj = {
        email: email,
      };
      const response = await axios.post("/auth/forget/otp/email", obj);
      if (response.status === 200) {
        SuccessToast("OTP Sent");
        handleRestart();
      } else {
        ErrorToast(response?.data?.message);
      }
    } catch (err) {
      console.log("🚀 ~ handleResendOtp ~ err:", err);
      ErrorToast(err?.response?.data?.message);
    } finally {
      setResendLoading(false);
    }
  };
  const [isActive, setIsActive] = useState(true);
  const [seconds, setSeconds] = useState(30);

  const handleRestart = () => {
    setSeconds(30);
    setIsActive(true);
  };
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text");
    if (pastedData.length === otp.length) {
      setOtp(pastedData.split(""));
      inputs.current[5].focus();
    }
    e.preventDefault(); // Prevent the default paste behavior
  };
  return (
    <div className="w-screen h-screen flex items-start justify-start">
      <form
        onSubmit={handleSubmit(handleVerifyOtp)}
        className="w-full lg:w-1/2 h-full bg-[#001229] px-4 py-8 lg:p-20 z-10 flex flex-col overflow-y-auto justify-start items-center gap-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="w-full flex justify-start items-start flex-col"
        >
          <BiArrowBack className="text-3xl text-white" />
        </button>

        <div className="w-full flex justify-start items-start flex-col">
          <h1 className=" text-[48px] font-bold text-white leading-[64.8px] tracking-[-1.2px]">
            Update your Password
          </h1>
          <p className=" font-normal text-[16px] text-white leading-[21.6px] tracking-[0.5px]">
            Enter the code we just sent to {email}
          </p>
        </div>
        <div className="w-full h-auto flex justify-start items-center gap-4 my-4 ">
          {otp.map((_, index) => {
            return (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={otp[index]}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste} // Attach the paste event handler
                ref={(el) => (inputs.current[index] = el)}
                className="w-[48px] h-[68px] rounded-lg bg-transparent outline-none text-center border-[1px] border-[#c2c6cb] text-white text-2xl focus-within:border-[#55C9FA] flex items-center justify-center"
              />
            );
          })}
        </div>

        <AuthSubmitBtn text={"Verify"} loading={loading} />
        <div className="w-full h-auto flex   flex-col gap-1 justify-start items-start  ">
          <div className="w-full lg:w-[434px] flex gap-1 justify-center items-center ">
            <span className="text-[13px] font-medium text-[#C2C6CB]">
              Didn't recieve a code?
            </span>
            {isActive ? (
              <CountDown
                isActive={isActive}
                setIsActive={setIsActive}
                seconds={seconds}
                setSeconds={setSeconds}
              />
            ) : (
              <button
                type="button"
                disabled={resendLoading}
                onClick={handleResendOtp}
                className="outline-none text-[13px] border-none text-[#199BD1] font-bold"
              >
                {resendLoading ? "Resending..." : "Resend now"}
              </button>
            )}
          </div>
        </div>
      </form>
      <div className="w-1/2 lg:flex hidden relative h-full">
        <span className="w-20 h-full grad-blur2 absolute top-0 -left-4"></span>
        <img src={AuthMockup} alt="auth_mockup" className="w-full h-full" />
      </div>
    </div>
  );
};

export default VerifyOtp;
