import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-gray11 text-xl text-center md:text-right">
        آخرین اخبار املاک را از سقفینو دنبال کنید
      </h1>
      <div className="flex items-center justify-center w-full gap-4 flex-wrap">
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to="\"
            className="w-72 h-96 flex flex-col items-center gap-7 border border-gray5 bg-gray2 hover:bg-tint1 rounded-lg hover:shadow-3xl transition"
          >
            <img
              src="./src/assets/Img/houseCat.png"
              alt="houseCat"
              className="rounded-t-lg"
            />
            <h2 className="text-gray10 px-4 py-2">
              رکود بازار مسکن؛ فروشندگان در انتظار خریداران و خریداران در انتظار
              شکست نرخ فروشندگان و ...
            </h2>
            
          </Link>
          <Link
            to="\"
            className="w-72 h-96 flex flex-col items-center gap-7 border border-gray5 bg-gray2 hover:bg-tint1 rounded-lg hover:shadow-3xl transition"
          >
            <img
              src="./src/assets/Img/apartmentCat.png"
              alt="apartmentCat"
              className="rounded-t-lg"
            />
            <h2 className="text-gray10 px-4 py-2">
              خطر ویرانی زلزله در آسمان‌خراش‌ها بیشتر است یا در آپارتمان‌های
              کم‌ ارتفاع و یا خانه‌های و ...
            </h2>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row  gap-4">
          <Link
            to="\"
            className="w-72 h-96 flex flex-col items-center gap-7 border border-gray5 bg-gray2 hover:bg-tint1 rounded-lg hover:shadow-3xl transition"
          >
            <img
              src="./src/assets/Img/villaCat.png"
              alt="villaCat"
              className="rounded-t-lg"
            />
            <h2 className="text-gray10 px-4 py-2">
              بازار کساد کسب و کار معماران داخلی در پی بالا رفتن قیمت مواد و
              متریال اولیه و مصالح خارجی و ...
            </h2>
          </Link>
          <Link
            to="\"
            className="w-72 h-96 flex flex-col items-center gap-7 border border-gray5 bg-gray2 hover:bg-tint1 rounded-lg hover:shadow-3xl transition"
          >
            <img
              src="./src/assets/Img/commercialCat.png"
              alt="commercialCat"
              className="rounded-t-lg"
            />
            <h2 className="text-gray10 px-4 py-2">
              شهرک ساحلی زمزم در منطقه نور استان مازندران از سوم شهریور وارد
              بازار مزایده شده است... 
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LatestNews;
