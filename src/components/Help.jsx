const Help = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-gray11 text-xl text-center md:text-right">
        سقفینو چطور به خانه‌دار شدن شما کمک می‌کند
      </h1>
      <div className="flex justify-center md:justify-between items-center w-full h-[511px] md:gap-4">
        <div className="flex flex-col justify-between w-96 h-full bg-gray2 border border-gray4 rounded-2xl p-8">
          <div className="flex flex-col gap-6 items-center">
            <img src="./src/assets/Img/Illustration1.png" alt="Illustration1" />
            <h2 className="text-gray11">به آسانی یک خانه اجاره کنید</h2>
            <p className="text-gray10 sm:text-sm lg:text-base">
              در میان صدها آگهی که روزانه به وب‌سایت سقفینو افزوده می‌شود، با
              استفاده از بیش از ۲۸ فیلتر کاربردی تلاش کرده‌ایم خانه‌ای که در
              جست‌وجوی آن هستید را هر چه سریعتر پیدا و اجاره کنید.
            </p>
          </div>
          <button className="w-full h-10 rounded-lg text-white bg-primary hover:bg-tint6 transition">
            اجاره خانه
          </button>
        </div>
        <div className="hidden md:flex md:flex-col md:justify-between gap-3 w-96 h-full bg-gray2 border border-gray4 rounded-2xl p-8  ">
          <div className="flex flex-col gap-6 items-center">
            <img src="./src/assets/Img/Illustration2.png" alt="Illustration2" />
            <h2 className="text-gray11">خانه مورد علاقه‌تان را بخرید</h2>
            <p className="text-gray10 sm:text-sm lg:text-base">
              بالای ۱ میلیون آگهی فروش در وب‌سایت سقفینو وجود دارد. ما علاوه بر
              آگهی‌های فراوان با به‌کارگیری املاک و مشاورین متخصص در هر شهر،
              تلاش می‌کنیم در تجربه لذت یک خرید آسان با شما سهیم باشد.
            </p>
          </div>
          <button className="w-full h-10 rounded-lg text-white bg-primary hover:bg-tint6 transition">
            خرید خانه
          </button>
        </div>
        <div className="hidden md:flex md:flex-col md:justify-between gap-3 w-96 h-full bg-gray2 border border-gray4 rounded-2xl p-8  ">
          <div className="flex flex-col gap-6 items-center">
            <img src="./src/assets/Img/Illustration3.png" alt="Illustration3" />
            <h2 className="text-gray11">مالک هستید؟</h2>
            <p className="text-gray10 sm:text-sm lg:text-base">
              آیا می‌دانید میانگین بازدید از وب‌سایت به‌طور متوسط روزانه بالای
              هزاران نفر است؟ پس به‌سادگی و با چند کلیک ساده، ملک‌تان را به‌صورت
              رایگان در سقفینو آگهی و در سریع‌ترین زمان ممکن معامله کنید.
            </p>
          </div>
          <button className="w-full h-10 rounded-lg text-white bg-primary hover:bg-tint6 transition">
            ثبت آگهی
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
