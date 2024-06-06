// React ...
import React from "react";
import Header from "../layouts/Header";
import Help from "../components/Help";
import Category from "../components/Category";
import Services from "../components/Services";
import LatestNews from "../components/LatestNews";
import Footer from "../layouts/Footer";


// My Components...

const Home = () => {
  return (
    <>
      <Header />

      <main className="flex flex-col  gap-20 m-10 md:m-24">
        <Help />
        <Category />
        <Services />
        <LatestNews />
      </main>

      <Footer />
    </>
  );
};

export default Home;
