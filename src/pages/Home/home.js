import React from "react";
// Import Swiper React components
import "./home.css";
import { Entrance, Services, References, Blog } from '../../components/Swiper/index' ;

 export const HomeSlider = () => {
  return (
      <div className="home-container">
        <Entrance/>
        <Services/>
        <References/>
        <Blog/>
        {/* <Footer/> */}
      </div>
  );
}
