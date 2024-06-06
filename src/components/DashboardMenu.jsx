import { useUser } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const DashboardMenu = () => {
  const { user } = useUser();
  return (
    <div className="w-[25%] hidden flex-col md:flex gap-2">
      <div className="flex items-center gap-3 p-7 rounded-2xl bg-white">
        <img
          src="./src/assets/Icons/profile-circle2.svg"
          alt="profile"
          className="w-10 h-10"
        />
        <h1 className="text-gray10">
          {user ? `${user.first_name} ${user.last_name}` : "نام کاربر"}
        </h1>
      </div>
      <div className="bg-white rounded-2xl py-4 px-2">
        <ul className="flex flex-col ">
          <li className="flex justify-between p-5 text-gray10 transition cursor-pointer">
            <div className="flex items-center">
              <NavLink
                to="/Dashboard"
                className="Dashboard flex px-2 gap-2 hover:text-primary"
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderRight: "3px solid #CB1B1B",
                        color: "#CB1B1B",
                      }
                    : { color: "gray10", borderRight: "none" }
                }
              >
                <img
                  src="./src/assets/Icons/edit.svg"
                  alt="edit"
                  className="w-7 h-7"
                />
                ویرایش اطلاعات
              </NavLink>
            </div>
          </li>
          <li className="flex justify-between p-5 text-gray10 transition cursor-pointer">
            <div className="flex items-center">
              <NavLink
                to="/dashboardRegisterAds"
                className="Dashboard flex px-2 gap-2 hover:text-primary"
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderRight: "3px solid #CB1B1B",
                        color: "#CB1B1B",
                      }
                    : { color: "gray10", borderRight: "none" }
                }
              >
                <img
                  src="./src/assets/Icons/add-circle2.svg"
                  alt="add-circle2"
                  className="w-7 h-7"
                />
                ثبت آگهی جدید
              </NavLink>
            </div>
          </li>
          <li className="flex justify-between p-5 text-gray10 transition cursor-pointer">
            <div className="flex items-center">
              <NavLink
                to="/dashboardMyAds"
                className="Dashboard flex px-2 gap-2 hover:text-primary"
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderRight: "3px solid #CB1B1B",
                        color: "#CB1B1B",
                      }
                    : { color: "gray10", borderRight: "none" }
                }
              >
                <img
                  src="./src/assets/Icons/receipt-text.svg"
                  alt="receipt-text"
                  className="w-7 h-7"
                />
                آگهی های من
              </NavLink>
            </div>
          </li>
          <li className="flex justify-between p-5 text-gray10 transition cursor-pointer">
            <div className="flex items-center gap-2">
              <NavLink
                to="/dashboardSavedAds"
                className="Dashboard flex px-2 gap-2 hover:text-primary"
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderRight: "3px solid #CB1B1B",
                        color: "#CB1B1B",
                      }
                    : { color: "gray10", borderRight: "none" }
                }
              >
                <img
                  src="./src/assets/Icons/save.svg"
                  alt="save"
                  className="w-7 h-7"
                />
                آگهی های ذخیره شده
              </NavLink>
            </div>
          </li>
          <li className="flex justify-between p-5 text-gray10 transition cursor-pointer">
            <div className="flex items-center gap-2">
              <NavLink
                to="/logout"
                className="Dashboard flex px-2 gap-2 hover:text-primary"
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderRight: "3px solid #CB1B1B",
                        color: "#CB1B1B",
                      }
                    : { color: "gray10", borderRight: "none" }
                }
              >
                <img
                  src="./src/assets/Icons/logout.svg"
                  alt="logout"
                  className="w-7 h-7"
                />
                خروج
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DashboardMenu;
