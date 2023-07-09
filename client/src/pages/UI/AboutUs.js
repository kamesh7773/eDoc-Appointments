import React, { Component } from "react";
import "../../CSS/Navbars/CommanNavbar.css";
import "../../CSS/AboutUs.css";
import img from "../../Images/fifthteen_years.svg";
import CommanNavbar from "./CommanNavbar";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <CommanNavbar />
        <header class="about">
          <div class="content">
            <img src={img} alt=""></img>
            <div class="text">
              <h1>About Us</h1>
              <br />
              <h3>Why Choose eDoc Healthcare</h3>
              <br />
              <br />
              <p>
                eDoc is a user-friendly MERN stack
                application that simplifies the process of booking doctor
                appointments and medical tests. Our platform aims to enhance
                healthcare access by providing a comprehensive database of
                doctors, easy appointment scheduling, seamless communication
                between patients and doctors, and convenient booking of medical
                tests.
              </p>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Navbar;
