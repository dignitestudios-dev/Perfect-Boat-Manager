import ForgotPassword from "../pages/onboarding/ForgotPassword";
import Login from "../pages/onboarding/Login";
import UpdatePassword from "../pages/onboarding/UpdatePassword";
import VerifyOtp from "../pages/onboarding/VerifyOtp";

export const AuthenticationRoutes = [
  {
    title: "Login",
    url: "/login",
    page: <Login />,
  },
  {
    title: "Forgot Password",
    url: "/forgot-password",
    page: <ForgotPassword />,
  },
  {
    title: "Verify Otp",
    url: "/verify-otp",
    page: <VerifyOtp />,
  },
  {
    title: "Update Password",
    url: "/update-password",
    page: <UpdatePassword />,
  },
];
