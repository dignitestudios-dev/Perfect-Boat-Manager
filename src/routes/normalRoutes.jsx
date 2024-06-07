import GlobalLayout from "../layouts/GlobalLayout";
import SettingsLayout from "../layouts/SettingsLayout";
import Home from "../pages/Dashboard/Home";
import AddEmployee from "../pages/Employees/AddEmployee";
import DeactivatedEmployees from "../pages/Employees/DeactivatedEmployees";
import EditEmployee from "../pages/Employees/EditEmployee";
import EmployeeDetail from "../pages/Employees/EmployeeDetail";
import Employees from "../pages/Employees/Employees";
import BoatDetail from "../pages/Fleet/BoatDetail";
import Boats from "../pages/Fleet/Boats";
import ChangePasswordPage from "../pages/Settings/ChangePasswordPage";
import NotificationSettingsPage from "../pages/Settings/NotificationSettingsPage";
import Notifications from "../pages/Settings/Notifications";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import Profile from "../pages/Settings/Profile";
import TermsOfServices from "../pages/Settings/TermsOfServices";
import UserManagementPage from "../pages/Settings/UserManagementPage";
import AddTask from "../pages/Tasks/AddTask";
import AssignReportedTask from "../pages/Tasks/AssignReportedTask";
import EditTask from "../pages/Tasks/EditTask";
import NewTaskRequestPage from "../pages/Tasks/NewTaskRequestPage";
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
    title: "Assign reported Task",
    url: "/assign-reported-task",
    page: <GlobalLayout page={<AssignReportedTask />} />,
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
    title: "New Task Details",
    url: "/new-tasks-request/:id",
    page: <GlobalLayout page={<NewTaskRequestPage />} />,
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
  {
    title: "Profile",
    url: "/profile",
    page: (
      <GlobalLayout page={<SettingsLayout page={<UserManagementPage />} />} />
    ),
  },

  {
    title: "Settings",
    url: "/settings/change-password",
    page: (
      <GlobalLayout page={<SettingsLayout page={<ChangePasswordPage />} />} />
    ),
  },
  {
    title: "Settings",
    url: "/settings/notifications",
    page: (
      <GlobalLayout
        page={<SettingsLayout page={<NotificationSettingsPage />} />}
      />
    ),
  },
];
