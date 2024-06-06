import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useUser } from "../context/AuthContext";
import Sidebar from "./Sidebar";
import DropdownMenu from "../components/DropdownMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center  rounded-2xl bg-white backdrop-blur w-[90%] h-28 px-8 py-3">
        <div className="flex md:hidden">
          <img
            src="./src/assets/Icons/menu.svg"
            alt="menu"
            className="w-9 h-9 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div>
          <Link to="/">
            <img
              src="./src/assets/Logo/Logo.svg"
              alt="logo"
              className="w-28 lg:w-32"
            />
          </Link>
        </div>

        <ul className="hidden md:flex sm:gap-3 lg:gap-5">
          <li className="af:text-sm lg:text-base text-gray10 hover:text-primary transition">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#CB1B1B",
                      fontWeight: "bold",
                    }
                  : { color: "gray10" }
              }
            >
              صفحه اصلی
            </NavLink>
          </li>
          <li className="af:text-sm lg:text-base text-gray10 hover:text-primary transition">
            <NavLink
              to="/rent"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #CB1B1B",
                      paddingBottom: "4px",
                      fontWeight: "bold",
                    }
                  : { color: "gray10" }
              }
            >
              اجاره
            </NavLink>
          </li>
          <li className="af:text-sm lg:text-base text-gray10 hover:text-primary transition">
            <NavLink
              to="/purchase"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #CB1B1B",
                      paddingBottom: "4px",
                      fontWeight: "bold",
                    }
                  : { color: "gray10" }
              }
            >
              خرید
            </NavLink>
          </li>
          <li className="af:text-sm lg:text-base text-gray10 hover:text-primary transition">
            <NavLink
              to="/estates"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #CB1B1B",
                      paddingBottom: "4px",
                      fontWeight: "bold",
                    }
                  : { color: "gray10" }
              }
            >
              املاک و مستغلات
            </NavLink>
          </li>
          <li
            className="af:text-sm lg:text-base text-gray10
          hover:text-primary transition"
          >
            <NavLink
              to="/realEstates"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #CB1B1B",
                      paddingBottom: "4px",
                      fontWeight: "bold",
                    }
                  : { color: "gray10" }
              }
            >
              مشاورین املاک
            </NavLink>
          </li>
          <li className="af:text-sm lg:text-base text-gray10 hover:text-primary transition">
            <NavLink
              to="/dailyNews"
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "2px solid #CB1B1B",
                      paddingBottom: "4px",
                      fontWeight: "bold",
                    }
                  : { color: "gray10" }
              }
            >
              اخبار روز
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-5">
          {user ? (
            <div className="hidden md:flex items-center justify-center gap-1">
              <DropdownMenu />
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden md:flex font-medium text-gray10 text-lg hover:text-primary transition"
            >
              ورود
            </Link>
          )}

          <button className="w-28 h-12 rounded-lg border-2 font-semibold border-primary text-primary hover:bg-tint6 hover:text-tint1 transition">
            ثبت آگهی
          </button>
        </div>
      </nav>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
