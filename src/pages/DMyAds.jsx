import DashboardMenu from "../components/DashboardMenu";
import MyAdsList from "../components/MyAdsList";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";


const DMyAds = () => {
    return (
      <main className="flex flex-col items-center bg-tint2 pt-10 gap-20">
        <Navbar />
        <div className="w-full md:w-[90%] flex justify-center md:justify-between">
          <DashboardMenu />
          <MyAdsList />
        </div>
        <Footer />
      </main>
    );
}
export default DMyAds