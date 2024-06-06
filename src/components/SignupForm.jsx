import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import api from "../services/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(
          /^[a-zA-Z0-9]+$/,
          "نام کاربری خود را با حروف انگلیسی وارد کنید."
        )
        .required("نام کاربری الزامی است."),
      firstName: Yup.string().required("نام الزامی است."),
      lastName: Yup.string().required("نام خانوادگی الزامی است."),

      password: Yup.string()
        .min(6, "رمز عبور باید حداقل 6 کاراکتر باشد")
        .required("رمز عبور الزامی است."),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await api.post("/account/api/users/register/", {
          username: values.username,
          first_name: values.firstName,
          last_name: values.lastName,
          password: values.password,
        });
        toast.success("ثبت نام موفقیت آمیز بود.");
        navigate("/login");
        console.log("Response Data: ", response);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrors({ submit: "نام کاربری تکراری است." });
            toast.error("نام کاربری تکراری است.");
        } else {
          setErrors({ submit: "خطای سرور" });
           toast.error("خطا در ثبت نام دوباره تلاش کنید.");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="w-[60%] flex flex-col gap-6 bg-gray4 shadow-3xl rounded-xl px-10 pt-5  pb-4 my-6 max-w-md backdrop-filter backdrop-blur-lg bg-opacity-40">
      {/* {formik.errors.submit && (
        // <div className="w-full text-center bg-tint7 text-white p-3 rounded-md">
        //   {formik.errors.submit}
        // </div>
      )} */}

      <h2 className="text-center text-3xl text-gray11 font-bold">ثبت نام</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="username"
            className="block text-gray11 text-base font-bold mb-2"
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
            htmlFor="firstName"
            className="block text-gray11 text-base font-bold mb-2"
          >
            نام
          </label>
          <div className="flex justify-between bg-white shadow  border rounded w-full p-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input
              className="border-none focus:outline-none w-full text-sm"
              id="firstName"
              name="firstName"
              placeholder="نام خود را وارد کنید"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            <img src="./src/assets/Icons/user.svg" alt="user" />
          </div>
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-primary text-sm mt-1">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <label
            htmlFor="lastName"
            className="block text-gray11 text-base font-bold mb-2"
          >
            نام خانوادگی
          </label>
          <div className="flex justify-between bg-white shadow  border rounded w-full p-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input
              className="border-none focus:outline-none w-full text-sm"
              id="lastName"
              name="lastName"
              placeholder="نام خانوادگی خود را وارد کنید"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            <img src="./src/assets/Icons/user.svg" alt="user" />
          </div>
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-primary text-sm mt-1">
              {formik.errors.lastName}
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
        <div className="mb-3">
          <button
            className="w-full bg-tint6 hover:bg-tint7 transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
            type="submit"
            disabled={formik.isSubmitting}
          >
            ثبت نام
          </button>
        </div>

        <div className="flex justify-center gap-1 mt-3">
          <span className="text-sm text-gray11">قبلاً ثبت نام کرده‌اید؟</span>

          <Link to="/login" className="text-sm text-primaryShade1">
            ورود
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
