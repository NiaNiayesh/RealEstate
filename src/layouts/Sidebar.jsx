// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/AuthContext";

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  const { user } = useUser();

  return (
    <div
      className={`fixed md:hidden top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform transform  w-2/3 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-row-reverse p-5">
        <button onClick={toggleMenu}>
          <img
            src="./src/assets/Icons/close-circle.svg"
            alt="close"
            className="w-7 h-7"
          />
        </button>
      </div>

      <div className="w-full h-20 flex gap-4 items-center bg-gray1 hover:text-primary transition px-5">
        <img
          src="./src/assets/Icons/profile-circle.svg"
          alt="profile"
          className="w-7 h-7"
        />
        {user ? (
          <Link to="/Dashboard" className="flex justify-center gap-2 ">
            <img
              src="./src/assets/Icons/edit.svg"
              alt="edit"
              className="w-7 h-7"
            />
            <span>
              {user.first_name} {user.last_name}
            </span>
            <img
              src="./src/assets/Icons/arrow-left.svg"
              alt="arrow-left"
              className="w-5 h-5"
            />
          </Link>
        ) : (
          <Link to="/login" className="text-gray10 hover:text-primary">
            ورود | ثبت نام
          </Link>
        )}
      </div>
      <ul className="flex flex-col overflow-y-auto max-h-[calc(100vh-140px)]">
        <li className="flex justify-between items-center  p-5 text-gray10 hover:bg-tint3 transition cursor-pointer">
          <Link
            to="/"
            onClick={toggleMenu}
            className="w-full flex justify-between"
          >
            <div className="flex items-center gap-2">
              <img
                src="./src/assets/Icons/home.svg"
                alt="home"
                className="w-7 h-7"
              />
              صفحه اصلی
            </div>
            <img
              src="./src/assets/Icons/arrow-left.svg"
              alt="arrow-left"
              className="w-5 h-5"
            />
          </Link>
        </li>
        <li className="flex justify-between  p-5 text-gray10 hover:bg-tint3 transition cursor-pointer">
          <Link
            to="/dashboardRegisterAds"
            onClick={toggleMenu}
            className="w-full flex justify-between"
          >
            <div className="flex items-center gap-2">
              <img
                src="./src/assets/Icons/add-circle.svg"
                alt="add"
                className="w-7 h-7"
              />
              ثبت آگهی
            </div>
            <img
              src="./src/assets/Icons/arrow-left.svg"
              alt="arrow-left"
              className="w-5 h-5"
            />
          </Link>
        </li>
        {user ? (
          <>
            <li className="flex justify-between  p-5 text-gray10 hover:bg-tint3 transition cursor-pointer">
              <Link
                to="/dashboardMyAds"
                onClick={toggleMenu}
                className="w-full flex justify-between"
              >
                <div className="flex items-center gap-2">
                  <img
                    src="./src/assets/Icons/receipt-text.svg"
                    alt="receipt-text"
                    className="w-7 h-7"
                  />
                  آگهی های من
                </div>
                <img
                  src="./src/assets/Icons/arrow-left.svg"
                  alt="arrow-left"
                  className="w-5 h-5"
                />
              </Link>
            </li>
            <li className="flex justify-between  p-5 text-gray10 hover:bg-tint3 transition cursor-pointer">
              <Link
                to="/dashboardSavedAds"
                onClick={toggleMenu}
                className="w-full flex justify-between"
              >
                <div className="flex items-center gap-2">
                  <img
                    src="./src/assets/Icons/save.svg"
                    alt="save"
                    className="w-7 h-7"
                  />
                  آگهی های ذخیره شده
                </div>
                <img
                  src="./src/assets/Icons/arrow-left.svg"
                  alt="arrow-left"
                  className="w-5 h-5"
                />
              </Link>
            </li>
          </>
        ) : (
          <></>
        )}
        <li className="flex justify-between  p-6 text-gray10 hover:bg-tint3 transition cursor-pointer">
          <Link
            to="/"
            onClick={toggleMenu}
            className="w-full flex justify-between"
          >
            <div className="flex items-center justify-center gap-2">
              <img
                src="./src/assets/Icons/house.svg"
                alt="house"
                className="w-7 h-7"
              />
              اجاره خانه
            </div>
            <img
              src="./src/assets/Icons/arrow-left.svg"
              alt="arrow-left"
              className="w-5 h-5"
            />
          </Link>
        </li>
        <li className="flex justify-between  p-5 text-gray10 hover:bg-tint3 transition cursor-pointer">
          <Link
            to="/"
            onClick={toggleMenu}
            className="w-full flex justify-between"
          >
            <div className="flex items-center gap-2">
              <img
                src="./src/assets/Icons/key.svg"
                alt="key"
                className="w-7 h-7"
              />
              خرید خانه
            </div>
            <img
              src="./src/assets/Icons/arrow-left.svg"
              alt="arrow-left"
              className="w-5 h-5"
            />
          </Link>
        </li>
        <li className="flex justify-between  p-5 text-gray10 hover:bg-tint3 transition cursor-pointer">
          <Link
            to="/"
            onClick={toggleMenu}
            className="w-full flex justify-between"
          >
            <div className="flex items-center gap-2">
              <img
                src="./src/assets/Icons/house-2.svg"
                alt="house2"
                className="w-7 h-7"
              />
              املاک و مستغلات
            </div>
            <img
              src="./src/assets/Icons/arrow-left.svg"
              alt="arrow-left"
              className="w-5 h-5"
            />
          </Link>
        </li>
        <li className="flex justify-between  p-5 text-gray10 hover:bg-tint3 transition cursor-pointer">
          <Link
            to="/"
            onClick={toggleMenu}
            className="w-full flex justify-between"
          >
            <div className="flex items-center gap-2">
              <img
                src="./src/assets/Icons/people.svg"
                alt="people"
                className="w-7 h-7"
              />
              مشاورین املاک
            </div>
            <img
              src="./src/assets/Icons/arrow-left.svg"
              alt="arrow-left"
              className="w-5 h-5"
            />
          </Link>
        </li>
        <li className="flex justify-between  p-5 text-gray10 hover:bg-tint3 transition cursor-pointer">
          <Link
            to="/"
            onClick={toggleMenu}
            className="w-full flex justify-between"
          >
            <div className="flex items-center gap-2">
              <img
                src="./src/assets/Icons/receipt.svg"
                alt="receipt"
                className="w-7 h-7"
              />
              اخبار روز
            </div>
            <img
              src="./src/assets/Icons/arrow-left.svg"
              alt="arrow-left"
              className="w-5 h-5"
            />
          </Link>
        </li>
        {user ? (
          <li className="flex justify-between  p-5 text-gray10 hover:bg-tint3 transition cursor-pointer">
            <Link
              to="/logout"
              onClick={toggleMenu}
              className="w-full flex justify-between"
            >
              <div className="flex items-center gap-2">
                <img
                  src="./src/assets/Icons/logout.svg"
                  alt="logout"
                  className="w-7 h-7"
                />
                خروج
              </div>
              <img
                src="./src/assets/Icons/arrow-left.svg"
                alt="arrow-left"
                className="w-5 h-5"
              />
            </Link>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
