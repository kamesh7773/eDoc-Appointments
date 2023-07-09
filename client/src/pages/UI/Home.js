import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/Home.css";
import HomeNavbar from "./HomeNavbar";


export const Home = () => {


  
  

  return (
    <>
      <div className="home-header">
        <HomeNavbar/>
        <div className="title">
            <h1 className="title-h1">Avoid Hassles & Delays.</h1>
            <p className="title-p">How is health today, Sounds like not good!<br/>
                Don't worry. Find your doctor online Book as you wish with eDoc.<br/>
                We offer you a free doctor channeling service, Make your appointment now.
            </p>
        </div>
        
        <div className="button">
            <Link to="/available-doctors">Book Your Slot Here</Link>
        </div>
    </div>
    </>
  );
};

export default Home;