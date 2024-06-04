import GlobalLayout from "../layouts/GlobalLayout";
import Home from "../pages/Dashboard/Home";
import AddEmployee from "../pages/Employees/AddEmployee";
import DeactivatedEmployees from "../pages/Employees/DeactivatedEmployees";
import Employees from "../pages/Employees/Employees";
import Boats from "../pages/Fleet/Boats";
import Notifications from "../pages/Settings/Notifications";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import TermsOfServices from "../pages/Settings/TermsOfServices";
import AddTask from "../pages/Tasks/AddTask";
import NewTasksRequests from "../pages/Tasks/NewTasksRequests";
import Tasks from "../pages/Tasks/Tasks";
import Blogs from "../pages/TidesTalesAndGuide/Blogs";

export const normalRoutes = [
  {
    title: "Home",
    url: "/home",
    page: <GlobalLayout page={<Home />} />,
  },
  {
    title: "Add a Employee",
    url: "/add-employee",
    page: <GlobalLayout page={<AddEmployee />} />,
  },
  {
    title: "Employee List",
    url: "/employees",
    page: <GlobalLayout page={<Employees />} />,
  },
  {
    title: "All Tasks",
    url: "/tasks",
    page: <GlobalLayout page={<Tasks />} />,
  },
  {
    title: "Add Task",
    url: "/add-task",
    page: <GlobalLayout page={<AddTask />} />,
  },
  {
    title: "Boat",
    url: "/boats",
    page: <GlobalLayout page={<Boats />} />,
  },
  {
    title: "New Task Request",
    url: "/new-tasks-request",
    page: <GlobalLayout page={<NewTasksRequests />} />,
  },
  {
    title: "Inactive Employees",
    url: "/inactive-employees",
    page: <GlobalLayout page={<DeactivatedEmployees />} />,
  },
  {
    title: "Terms Of Services",
    url: "/terms-of-services",
    page: <GlobalLayout page={<TermsOfServices />} />,
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
    page: <GlobalLayout page={<PrivacyPolicy />} />,
  },
  {
    title: "Tides Tales & Guide",
    url: "/blogs",
    page: <GlobalLayout page={<Blogs />} />,
  },
  {
    title: "Notifications",
    url: "/notifications",
    page: <GlobalLayout page={<Notifications />} />,
  },
];
