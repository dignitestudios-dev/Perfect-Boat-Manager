import React, { useContext, useState } from "react";
import { AuthMockup } from "../../assets/export";
import AuthInput from "../../components/onboarding/AuthInput";
import AuthSubmitBtn from "../../components/onboarding/AuthSubmitBtn";
import { GlobalContext } from "../../contexts/GlobalContext";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster";
import axios from "../../axios";
import getFCMToken from "./../../firebase/getFcmToken";

const Login = () => {
  const { navigate } = useContext(GlobalContext);

  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // Set up react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (formData) => {
    setLoading(true);
    try {
      const fcmToken = await getFCMToken();
      console.log(fcmToken);
      let obj = {
        email: formData.email,
        password: formData.password,
        fcmToken: fcmToken,
        role: "manager",
      };

      const response = await axios.post("/auth/signIn", obj);
      if (response.status === 200) {
        login(response.data);
        SuccessToast("Logged in successfully");
        navigate("/home", "Home");
        setLoading(false);
      }
    } catch (err) {
      ErrorToast(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-start justify-start">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full lg:w-1/2 h-full bg-[#001229] px-4 py-8 lg:p-20 z-10 flex flex-col overflow-y-auto justify-start items-center gap-8"
      >
        <h1 className="w-full justify-start items-start text-[48px] font-bold text-white leading-[64.8px] tracking-[-1.2px]">
          Log In
        </h1>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
          <AuthInput
            register={register("email", {
              required: "Please enter your email address.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
            })}
            text={"Email"}
            placeholder={"Enter your email here"}
            type={"text"}
            error={errors.email}
          />
          <div className="w-full lg:w-[434px] flex flex-col justify-start items-end gap-1">
            <AuthInput
              register={register("password", {
                required: "Please enter your password.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
              })}
              maxLength={18}
              text={"Password"}
              placeholder={"Enter your password here"}
              type={"password"}
              error={errors.password}
            />
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-[16px] font-[500] leading-[21.6px] mt-2 text-[#fff]"
            >
              Forgot Password?
            </button>
          </div>
        </div>

        <AuthSubmitBtn text={"Log In"} loading={loading} />
        <div className="w-full h-auto flex   flex-col gap-1 justify-start items-start  ">
          <div className="w-full lg:w-[434px] flex flex-wrap gap-1 justify-center items-center ">
            <span className="text-[16px] font-medium text-[#C2C6CB]">
              By logging in, you agree to our
            </span>
            <button
              type="button"
              className="outline-none text-[16px] border-none text-[#199BD1] font-bold"
              onClick={() => {
                navigate("/terms-and-condition");
              }}
            >
              Terms & conditions
            </button>
            <span className="text-[16px] font-medium text-[#C2C6CB]">&</span>
            <button
              type="button"
              className="outline-none text-[16px] border-none text-[#199BD1] font-bold"
              onClick={() => {
                navigate("/privacy-policy");
              }}
            >
              Privacy policy
            </button>
            {/* <span className="text-[16px] font-medium text-[#C2C6CB]">&</span> */}

            {/* <button
              className="outline-none text-[16px] border-none text-[#199BD1] font-bold"
              onClick={() => {
                navigate("");
              }}
            >
              Cookie Policy.
            </button> */}
          </div>
        </div>
      </form>
      <div className="w-1/2 lg:flex hidden relative h-full">
        <span className="w-20 h-full grad-blur2 absolute top-0 -left-4"></span>
        <img
          src={AuthMockup}
          alt="auth_mockup"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
