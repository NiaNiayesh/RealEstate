import React, { useState, useEffect, useRef } from "react";
import api from "../services/axiosConfig";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Cookies from "js-cookie";
import { useUser } from "../context/AuthContext";
import DashboardMenu from "../components/DashboardMenu";
import EditProfile from "../components/EditProfile";

const Dashboard = () => {
   const { user, setUser } = useUser();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Cookies.get("access_token");
        console.log(token);
        if (token) {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          const response = await api.get("/account/api/users/get_user/");
          setUser(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, []);

  return (
    
      <main className="flex flex-col items-center bg-tint2 pt-10 gap-20">
        <Navbar />
        <div className="w-full md:w-[90%] flex justify-center md:justify-between">
          <DashboardMenu/>
          <EditProfile />
        </div>
        <Footer />
      </main>
    
  );
};

export default Dashboard;
