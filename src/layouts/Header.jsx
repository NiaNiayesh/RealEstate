// React ...
import React, { useState } from "react";

// Components
import Navbar from "./Navbar";
import SearchBox from "../components/SearchBox";

const Header = () => {
  return (
    <header className="bg-cover bg-center h-[690px] flex flex-col items-center justify-between py-9">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-8 text-white p-5">
        <h1 className="af:text-3xl sm:text-4xl md:text-5xl text-gray3">
          سقفینو، سقفی برای همه
        </h1>
        <h4 className="af:text-xl sm:text-2xl md:text-3xl text-center">
          آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه کنید{" "}
        </h4>
      </div>
      <SearchBox />
    </header>
  );
};

export default Header;
