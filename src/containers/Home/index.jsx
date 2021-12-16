import React from "react";
import MainPage from "../../components/MainPage";
import IconPageSection from "../../components/IconPageSection";
import Contact from "../../components/Contact";
import MainHotelPage from "../../components/MainHotelPage";

const Home = () => {
  return (
    <div>
      <MainPage />
      
      {/* <NotificationButton/> */}
      <MainHotelPage />
      <IconPageSection />
      <Contact />
    </div>
  );
};

export default Home;
