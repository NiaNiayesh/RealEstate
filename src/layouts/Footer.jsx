// React ...
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray2 flex flex-col items-center ">
      <div className="w-[90%] flex justify-center p-10  border-b border-gray5">
        <h1 className="text-gray12 text-2xl">
          سقفینو؛ سقفی ایده‌آل برای زندگی
        </h1>
      </div>
      <div className="w-full flex gap-20 px-16 py-10 flex-wrap">
        <div className="flex flex-col gap-3 w-72 h-72">
          <img src="./src/assets/Logo/Logo.svg" alt="Logo" className="w-44" />
          <h1 className="text-sm text-gray11">
            تجربه لذت خانه‌دار شدن سریع و آسان
          </h1>
          <p>
            سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو کنید.
          </p>
          <p>
            ملک مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن، با مشاورین
            املاک معتمد و متخصص شهرتان در ارتباط باشید.
          </p>
        </div>
        <div>
          <h2 className="text-gray11 mb-3">خدمات</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                اجاره
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                خرید
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                ثبت رایگان آگهی ملک
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                املاک و مستغلات
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                مشاورین
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                اخبار روز املاک
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                سوال ملکی دارید؟
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-gray11 mb-3">اطلاعات</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                دانلود اپلیکشن سقفینو
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                تماس با ما
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                داستان ‌سقفینو
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                پرسش‌های پرتکرار
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                یک سقف؛ بلاگ سقفینو
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                حریم شخصی شما
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                تعهدات ما و شما
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-gray11 mb-3">حساب کاربری</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                پروفایل من
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                ملک‌های نشان‌شده
              </Link>
            </li>
            <li>
              <Link to="\" className="text-gray9 hover:text-primary">
                آگهی‌های من
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-gray11 mb-3">با ما در ارتباط باشد</h2>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2">
              <img src="./src/assets/Icons/call.svg" alt="call" />
              <Link to="\" className="text-gray9 hover:text-primary">
                تلفن
              </Link>
            </li>
            <li className="flex gap-2">
              <img src="./src/assets/Icons/instagram.svg" alt="instagram" />
              <Link to="\" className="text-gray9 hover:text-primary">
                اینستاگرام
              </Link>
            </li>
            <li className="flex gap-2">
              <img src="./src/assets/Icons/Telegram.svg" alt="Telegram" />

              <Link to="\" className="text-gray9 hover:text-primary">
                تلگرام
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src="./src/assets/Img/FooterPic.png" alt="FooterPic" />
      </div>
      <div className="w-full h-14 flex justify-center items-center text-gray8 bg-gray3">
        حقوق این سایت متعلق به سقفینو است
      </div>
    </footer>
  );
};

export default Footer;
