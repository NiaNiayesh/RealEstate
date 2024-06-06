import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../services/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();

 

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("نام کاربری الزامی است."),
      password: Yup.string().required("رمز عبور الزامی است."),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await api.post("/account/api/token/", {
          username: values.username,
          password: values.password,
        });
        const { access, refresh } = response.data;

        console.log(response.data);
    
        Cookies.set("access_token", access, { expires: 7, secure: true });
        Cookies.set("refresh_token", refresh, { expires: 7, secure: true });
        console.log(response.data)
        toast.success("به سقفینو خوش آمدید.")
        navigate("/dashboard");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setErrors({ submit: "نام کاربری یا رمز عبور اشتباه است." });
          toast.error("نام کاربری یا رمز عبور اشتباه است.")
        } else {
          setErrors({ submit: "خطا در ورود. دوباره تلاش کنید." });
          toast.error("خطا در ورود دوباره تلاش کنید.")
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="w-[60%] flex flex-col gap-7 bg-gray4 shadow-3xl rounded-xl px-10 pt-6 pb-4 max-w-md backdrop-filter backdrop-blur-lg bg-opacity-40">
      {/* {formik.errors.submit && (
        <div className="w-full text-center bg-tint7 text-white p-3 rounded-md">
          {formik.errors.submit}
        </div>
      )} */}
      <h2 className="text-center text-3xl text-gray11 font-bold">ورود</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label
            className="block text-gray11 text-base font-bold mb-2"
            htmlFor="username"
          >
            نام کاربری
          </label>
          <div className="flex justify-between bg-white shadow  border rounded w-full p-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input
              className="border-none focus:outline-none w-full text-sm"
              id="username"
              name="username"
              placeholder="نام کاربری خود را وارد کنید"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            <img src="./src/assets/Icons/user.svg" alt="user" />
          </div>
          {formik.touched.username && formik.errors.username ? (
            <div className="text-primary text-sm mt-1">
              {formik.errors.username}
            </div>
          ) : null}
        </div>

        <div className="mb-3">
          <label
            htmlFor="password"
            className="block text-gray11 text-base font-bold mb-2"
          >
            رمز عبور
          </label>
          <div className="flex justify-between bg-white shadow  border rounded w-full p-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input
              className="border-none focus:outline-none w-full text-sm"
              id="password"
              name="password"
              placeholder="رمز عبور خود را وارد کنید"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <img src="./src/assets/Icons/key.svg" alt="key" />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-primary text-sm mt-1">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className="flex justify-between mb-8">
          <div className="flex justify-center items-center gap-1">
            <input
              type="checkbox"
              className="w-4 h-4"
              name="forgetPassword"
              id="forgetPassword"
            />
            <label htmlFor="forgetPassword" className="text-sm text-gray11">
              مرا به خاطر بسپار
            </label>
          </div>
          <Link to="/tt" className="text-sm text-gray11">
            فراموشی رمز عبور
          </Link>
        </div>
        <div className="mb-3">
          <button
            className="w-full bg-tint6 hover:bg-tint7 transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
            type="submit"
            disabled={formik.isSubmitting}
          >
            ورود
          </button>
        </div>
        <div className="flex justify-center gap-1 mt-3">
          <span className="text-sm text-gray11">هنوز ثبت نام نکرده اید؟</span>
          <Link to="/signup" className="text-sm text-primaryShade1">
            ثبت نام
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
