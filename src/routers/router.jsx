import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import DRegisterAds from "../pages/DRegisterAds";
import DMyAds from "../pages/DMyAds";
import DSavedAds from "../pages/DSavedAds";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  {
    path: "dashboardRegisterAds",
    element: <DRegisterAds />,
  },
  {
    path: "dashboardMyAds",
    element: <DMyAds />,
  },
  {
    path: "dashboardSavedAds",
    element: <DSavedAds />,
  },
]);
export default router