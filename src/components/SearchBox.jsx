import React, { useState, useRef } from "react";

const SearchBox = () => {
  
  // Define state for active rent or purchase
  const [activeLink, setActiveLink] = useState("rent");
  // Define UseRef for handle searchclick 
  const inputRef = useRef(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center p-7 w-[75%] h-36 bg-white rounded-xl">
      <div className="flex ">
        <div
          className={`w-[50%] h-10 flex justify-center items-center border-b-2 cursor-pointer ${
            activeLink === "rent" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("rent")}
        >
          اجاره
        </div>
        <div
          className={`w-[50%] h-10 flex justify-center items-center border-b-2 cursor-pointer ${
            activeLink === "purchase" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("purchase")}
        >
          خرید
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="flex justify-center items-center bg-tint4 hover:bg-tint6 transition w-10 rounded"
          onClick={handleSearchClick}
        >
          <img
            src="./src/assets/Icons/search-normal.svg"
            className="cursor-pointer"
          />
        </button>
        <input
          name="search"
          type="search"
          ref={inputRef}
          className="w-full text-gray11 focus:bottom-0 focus:outline-tint4 p-2"
          placeholder="شهر مورد نظر را جست‌وجو کنید"
        />
      </div>
    </div>
  );
};

export default SearchBox;
