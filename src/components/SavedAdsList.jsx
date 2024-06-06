import { Link } from "react-router-dom";

const SavedAdsList = () => {
    return (
      <div className="w-[70%] bg-white rounded-2xl flex flex-col gap-10 py-10 px-8">
        <h1 className="text-gray11">آگهی های ذخیره شده</h1>
        <div className="flex flex-col justify-center items-center gap-7">
          <img src="./src/assets/Img/lottie.png" alt="pana" />
          <div className="flex flex-col justify-center items-center  gap-3">
            <h1 className="text-gray10">هنوز آگهی‌ای ذخیره نکردید!</h1>
            <p className="text-gray9">
              صفحه املاک اجاره‌ای سقفینو را ببینید و از میان آن‌ها آگهی‌های
              دلخواه را ذخیره کنید
            </p>
          </div>
          <Link to="\">
            <button
              type="button"
              className="bg-tint7 hover:bg-primary text-white transition px-4 py-2 rounded-lg w-64"
            >
              املاک اجاره ای
            </button>
          </Link>
        </div>
      </div>
    );
}
export default SavedAdsList;