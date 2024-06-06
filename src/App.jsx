// React ...
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

// Using React-Router-dom to SPA the application
const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer rtl={true} position="bottom-right" />
    </AuthProvider>
  );
};

export default App;
