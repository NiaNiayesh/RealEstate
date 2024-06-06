import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import api from "../services/axiosConfig";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout =  () => {
    
          Cookies.remove("access_token");
          Cookies.remove("refresh_token");
          window.location.href = "/";
       
  };

  const handleCancel = () => {
    console.log("cancel");
    navigate(-1);
  };

  return (
    <main className="h-screen flex justify-center form">
      <div className="w-[40%] h-48 flex flex-col justify-center items-center gap-7 mt-36 bg-white shadow-3xl rounded-xl px-10 pt-6 pb-4 max-w-md backdrop-filter backdrop-blur-lg bg-opacity-70">
        <h2 className="">آیا مایل به خروج از حساب کاربری هستید؟</h2>
        <div className="flex gap-5">
          <button
            className="bg-tint5 hover:bg-tint6 transition w-24 h-10 rounded-md"
            onClick={handleLogout}
          >
            بله
          </button>
          <button
            className="bg-tint5 hover:bg-tint6 transition w-24 h-10 rounded-md"
            onClick={handleCancel}
          >
            انصراف
          </button>
        </div>
      </div>
    </main>
  );
};

export default Logout;
