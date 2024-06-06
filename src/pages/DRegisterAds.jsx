import RegisterAdForm from "../components/RegisterAdForm";
import DashboardMenu from "../components/DashboardMenu";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const DRegisterAds = () => {
  return (
    <main className="flex flex-col items-center bg-tint2 pt-10 gap-20">
      <Navbar />
      <div className="w-full md:w-[90%] flex justify-center md:justify-between">
        <DashboardMenu />
        <RegisterAdForm />
      </div>
      <Footer />
    </main>
  );
};
export default DRegisterAds;