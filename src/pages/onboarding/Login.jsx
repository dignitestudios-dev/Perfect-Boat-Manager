import React, { useContext } from "react";
import { AuthMockup } from "../../assets/export";
import AuthInput from "../../components/onboarding/AuthInput";
import AuthSubmitBtn from "../../components/onboarding/AuthSubmitBtn";
import { GlobalContext } from "../../contexts/GlobalContext";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { navigate } = useContext(GlobalContext);
  return (
    <div className="w-screen h-screen flex items-start justify-start">
      <form
        onSubmit={() => {
          navigate("/home", "Home");
        }}
        className="w-full lg:w-1/2 h-full bg-[#001229] px-4 py-8 lg:p-20 z-10 flex flex-col overflow-y-auto justify-start items-center gap-8"
      >
        <h1 className="w-full justify-start items-start text-[48px] font-bold text-white leading-[64.8px] tracking-[-1.2px]">
          Log in
        </h1>
        <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
          <AuthInput
            text={"Email"}
            placeholder={"Type your email address here"}
            type={"text"}
          />
          <div className="w-full lg:w-[434px] flex flex-col justify-start items-end gap-1">
            <AuthInput
              text={"Password"}
              placeholder={"Enter Password"}
              type={"password"}
            />
            <button
              onClick={() => navigate("/forgot-password")}
              className="text-[13px] font-medium text-[#fff]"
            >
              Forgot Password?
            </button>
          </div>
        </div>

        <AuthSubmitBtn text={"Log in"} />
        <div className="w-full h-auto flex   flex-col gap-1 justify-start items-start  ">
          <div className="w-full lg:w-[434px] flex flex-wrap gap-1 justify-center items-center ">
            <span className="text-[16px] font-medium text-[#C2C6CB]">
              By logging in, you agree to our
            </span>
            <button
              className="outline-none text-[16px] border-none text-[#199BD1] font-bold"
              onClick={() => {
                navigate("/login");
              }}
            >
              Terms & conditions
            </button>
            <span className="text-[16px] font-medium text-[#C2C6CB]">&</span>
            <button
              className="outline-none text-[16px] border-none text-[#199BD1] font-bold"
              onClick={() => {
                navigate("/login");
              }}
            >
              Privacy policy
            </button>
            <span className="text-[16px] font-medium text-[#C2C6CB]">&</span>

            <button
              className="outline-none text-[16px] border-none text-[#199BD1] font-bold"
              onClick={() => {
                navigate("/login");
              }}
            >
              Cookie Policy.
            </button>
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

export default Login;
