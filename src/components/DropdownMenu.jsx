import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/AuthContext";

const DropdownMenu = () => {
    const {user} = useUser()
    const [isOpen,setIsOpen] = useState(false)
    const handleMouseEnter = () => {
        setIsOpen(true);
    }
    const handleMouseLeave = () => {
        setIsOpen(false);
    }
    return (
      <div
        className="relative inline-block "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="./src/assets/Icons/profile-circle.svg"
            alt="profile"
            className="w-7 h-7"
          />
          <span>{user.username}</span>
        </div>
        {isOpen && (
          <div className="absolute left-0  w-40 bg-tint1 border border-gray3 shadow-lg rounded-md z-10">
            <Link
               to="/dashboard"
              className="block px-4 py-2 text-gray10 hover:bg-gray5 hover:rounded-md "
            >
              پروفایل
            </Link>
            <Link
              to="/logout"
              className="block px-4 py-2 text-gray10 hover:bg-gray5  hover:rounded-md "
            >
              خروج
            </Link>
          </div>
        )}
      </div>
    );
}
export default DropdownMenu