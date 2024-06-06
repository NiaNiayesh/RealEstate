import { Link } from "react-router-dom";

const RegisterAdForm = () => {
  return (
    <div className="w-[70%] bg-white rounded-2xl flex flex-col gap-10 py-10 px-8">
      <h1 className="text-gray11">ثبت آگهی جدید</h1>
      <div className="flex flex-col justify-center items-center gap-7">
        <img src="./src/assets/Img/pana.png" alt="pana" />
        <div className="flex flex-col justify-center items-center  gap-3">
          <h1 className="text-gray10">هنوز آگهی ای ثبت نکرده اید!</h1>
          <p className="text-gray9">
            با ثبت رایگان آگهی هر جا که هستید به‌سرعت ملک‌تان را معامله کنید
          </p>
        </div>
        <Link to="\">
          <button
            type="button"
            className="bg-tint7 hover:bg-primary text-white transition px-4 py-2 rounded-lg w-64"
          >
            ثبت آگهی
          </button>
        </Link>
      </div>
    </div>
  );
};
export default RegisterAdForm