import GlobalLayout from "../layouts/GlobalLayout";
import Home from "../pages/Dashboard/Home";
import AddEmployee from "../pages/Employees/AddEmployee";
import DeactivatedEmployees from "../pages/Employees/DeactivatedEmployees";
import EditEmployee from "../pages/Employees/EditEmployee";
import EmployeeDetail from "../pages/Employees/EmployeeDetail";
import Employees from "../pages/Employees/Employees";
import BoatDetail from "../pages/Fleet/BoatDetail";
import Boats from "../pages/Fleet/Boats";
import Notifications from "../pages/Settings/Notifications";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import TermsOfServices from "../pages/Settings/TermsOfServices";
import AddTask from "../pages/Tasks/AddTask";
import EditTask from "../pages/Tasks/EditTask";
import NewTasksRequests from "../pages/Tasks/NewTasksRequests";
import TaskDetail from "../pages/Tasks/TaskDetail";
import Tasks from "../pages/Tasks/Tasks";
import BlogDetails from "../pages/TidesTalesAndGuide/BlogDetails";
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
    title: "Employee Detail",
    url: "/employees/:id",
    page: <GlobalLayout page={<EmployeeDetail />} />,
  },
  {
    title: "Employee Edit",
    url: "/edit-employee/:id",
    page: <GlobalLayout page={<EditEmployee />} />,
  },
  {
    title: "All Tasks",
    url: "/tasks",
    page: <GlobalLayout page={<Tasks />} />,
  },
  {
    title: "Task Detail",
    url: "/tasks/:id",
    page: <GlobalLayout page={<TaskDetail />} />,
  },
  {
    title: "Edit Task",
    url: "/edit-task/:id",
    page: <GlobalLayout page={<EditTask />} />,
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
    title: "Boat Details",
    url: "/boats/:id",
    page: <GlobalLayout page={<BoatDetail />} />,
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
    title: "Blogs Detail",
    url: "/blogs/:id",
    page: <GlobalLayout page={<BlogDetails />} />,
  },
  {
    title: "Notifications",
    url: "/notifications",
    page: <GlobalLayout page={<Notifications />} />,
  },
];
