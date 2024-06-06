import DashboardMenu from "../components/DashboardMenu";
import SavedAdsList from "../components/SavedAdsList";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const DSavedAds = () => {
    return (
      <main className="flex flex-col items-center bg-tint2 pt-10 gap-20">
        <Navbar />
        <div className="w-full md:w-[90%] flex justify-center md:justify-between">
          <DashboardMenu />
          <SavedAdsList />
        </div>
        <Footer />
      </main>
    );
}
export default DSavedAds