import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-gray11 text-xl text-center md:text-right">
        در سقفینو دنبال چه نوع ملکی هستید
      </h1>
      <div className="flex items-center justify-center w-full gap-4 flex-wrap">
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to="\"
            className="w-72 h-80 flex flex-col items-center gap-7 border border-gray5 bg-gray2 hover:bg-tint1 rounded-lg hover:shadow-3xl transition"
          >
            <img
              src="./src/assets/Img/houseCat.png"
              alt="houseCat"
              className="rounded-t-lg"
            />
            <h2 className="text-gray10">خانه مسکونی</h2>
          </Link>
          <Link
            to="\"
            className="w-72 h-80 flex flex-col items-center gap-7 border border-gray5 bg-gray2 hover:bg-tint1 rounded-lg hover:shadow-3xl transition"
          >
            <img
              src="./src/assets/Img/apartmentCat.png"
              alt="apartmentCat"
              className="rounded-t-lg"
            />
            <h2 className="text-gray10">آپارتمان و برج</h2>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row  gap-4">
          <Link
            to="\"
            className="w-72 h-80 flex flex-col items-center gap-7 border border-gray5 bg-gray2 hover:bg-tint1 rounded-lg hover:shadow-3xl transition"
          >
            <img
              src="./src/assets/Img/villaCat.png"
              alt="villaCat"
              className="rounded-t-lg"
            />
            <h2 className="text-gray10">ویلا</h2>
          </Link>
          <Link
            to="\"
            className="w-72 h-80 flex flex-col items-center gap-7 border border-gray5 bg-gray2 hover:bg-tint1 rounded-lg hover:shadow-3xl transition"
          >
            <img
              src="./src/assets/Img/commercialCat.png"
              alt="commercialCat"
              className="rounded-t-lg"
            />
            <h2 className="text-gray10">تجاری و اداری</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Category;
