import ForgotPassword from "../pages/onboarding/ForgotPassword";
import Login from "../pages/onboarding/Login";
import UpdatePassword from "../pages/onboarding/UpdatePassword";
import VerifyOtp from "../pages/onboarding/VerifyOtp";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import TermsOfServices from "../pages/Settings/TermsOfServices";

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
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
    page: <PrivacyPolicy />,
  },
  {
    title: "Terms & Conditions",
    url: "/terms-and-condition",
    page: <TermsOfServices />,
  },
];
