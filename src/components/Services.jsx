import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-gray11 text-3xl text-center md:text-right">
          همه به شما مشاوره می‌دهند!
        </h1>
        <p className="text-gray12">
          اما در سقفینو مشاوران املاک کِنار شما می‌مانند
        </p>
      </div>

      <div className="w-[75%] h-60 flex justify-start md:justify-around gap-5 md:gap-4 lg:gap-0">
        <div className="w-48 h-full rounded-2xl flex flex-col items-center gap-6 p-5 shadow-4xl bg-tint1">
          <img src="./src/assets/Img/service1.png" alt="service1" />
          <p className="text-center text-sm md:text-base">
            امکان خرید و اجاره ملک در اکثر نقاط کشور
          </p>
        </div>
        <div className="w-48 h-full rounded-2xl flex flex-col  items-center gap-6 p-5 shadow-4xl bg-tint1">
          <img src="./src/assets/Img/service2.png" alt="service2" />
          <p className="text-center text-sm md:text-base">
            مقایسه و بررسی صدها ملک براحتی و در کمترین زمان{" "}
          </p>
        </div>
        <div className="w-48 h-full rounded-2xl hidden md:flex flex-col  items-center gap-6 p-5 shadow-4xl bg-tint1">
          <img src="./src/assets/Img/service3.png" alt="service3" />
          <p className="text-center text-sm md:text-base">
            ارتباط آسان با برترین املاک و مشاورین کشور
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
