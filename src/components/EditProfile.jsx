import React, { useState, useEffect, useRef } from "react";
import { useUser } from "../context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import api from "../services/axiosConfig";

const EditProfile = () => {
  const [filePicture, setFilePicture] = useState(null);
  const fileInputRef = useRef(null);

  const { user, setUser } = useUser();

  const handleUploadPic = (e) => {
    console.log(e.target.files);
    setFilePicture(e.target.files[0]);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("لطفا نام خود را وارد کنید."),
      lastName: Yup.string().required("لطفا نام خانوادگی خود را وارد کنید."),
      phone: Yup.string().required("لطفا شماره موبایل خود را وارد کنید."),
      email: Yup.string()
        .email("ایمیل نامعتبر است")
        .required("لطفا ایمیل خود را وارد کنید."),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const token = Cookies.get("access_token");
        console.log(token);
        if (token) {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          
          const formData = new FormData();
          formData.append("fullname", `${values.firstName} ${values.lastName}`);
          formData.append("phone", values.phone);
          formData.append("email", values.email);
          if (filePicture) {
            formData.append("profile_pic", filePicture);
          }

          const response = await api.post(
            "/account/api/profiles/edit_profile/",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          console.log(response);

          if (response.status === 200) {
            const updatedUser = response.data;
            setUser(updatedUser);
          } else {
            console.error("Failed to create profile:", response.data);
          }
        }
      } catch (error) {
        console.error(error);
        console.error(
          "Error details:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (user) {
      formik.setValues({
        firstName: user.first_name || "",
        lastName: user.last_name || "",
        phone: user.phone || "",
        email: user.email || "",
      });
    }
  }, [user]);

  return (
    <div className="w-[70%] bg-white rounded-2xl flex flex-col gap-10 py-10 px-8">
      <h1 className="text-gray11">ویرایش اطلاعات</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center md:items-start gap-5 px-10 lg:px-20"
      >
        <div className="w-24 h-24 flex justify-center items-center rounded-lg relative">
          <img
            src={
              filePicture
                ? URL.createObjectURL(filePicture)
                : "./src/assets/Icons/profile-circle3.svg"
            }
            alt="profile"
            className="w-20 h-20 rounded-full"
          />
          <div
            className="absolute bottom-2 right-2 cursor-pointer w-8 h-8 flex justify-center items-center bg-gray3 rounded-2xl"
            onClick={handleClick}
          >
            <img
              src="./src/assets/Icons/gallery-add.svg"
              alt="gallery-add"
              className="w-5 h-5"
            />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleUploadPic}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 border border-gray7 items-center py-1 px-3 rounded-xl">
              <img
                src="./src/assets/Icons/user.svg"
                alt="user"
                className="w-5 h-5"
              />
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="w-full p-2 border-none focus:outline-none rounded"
                placeholder={user ? `${user.first_name}` : "نام"}
              />
            </div>
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 border border-gray7 items-center py-1 px-3 rounded-xl">
              <img
                src="./src/assets/Icons/user.svg"
                alt="user"
                className="w-5 h-5"
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="w-full p-2 border-none focus:outline-none rounded"
                placeholder={user ? `${user.last_name}` : "نام خانوادگی"}
              />
            </div>
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 border border-gray7 items-center py-1 px-3 rounded-xl">
              <img
                src="./src/assets/Icons/call2.svg"
                alt="call"
                className="w-5 h-5"
              />
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className="w-full p-2 border-none focus:outline-none rounded"
                placeholder="شماره موبایل"
              />
            </div>
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500">{formik.errors.phone}</div>
            ) : null}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-2 border border-gray7 items-center py-1 px-3 rounded-xl">
              <img
                src="./src/assets/Icons/sms.svg"
                alt="email"
                className="w-5 h-5"
              />
              <input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full p-2 border-none focus:outline-none rounded"
                placeholder="ایمیل"
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row-reverse gap-5 mt-5">
          <button
            type="submit"
            className="bg-tint7 hover:bg-primary text-white transition px-4 py-2 rounded-lg"
          >
            ذخیره اطلاعات
          </button>
          <button
            type="button"
            className="border border-primary  text-primary hover:bg-tint2 transition px-4 py-2 rounded-lg"
          >
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
