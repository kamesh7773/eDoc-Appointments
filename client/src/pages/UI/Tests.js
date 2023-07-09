import React from "react";
import "../../CSS/Tests.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Navigation , Autoplay , Mousewheel } from "swiper";
// Images
import one from "../../Images/Tests/img_1.jpg";
import two from "../../Images/Tests/img_2.jpg";
import three from "../../Images/Tests/img_3.jpg";
import four from "../../Images/Tests/img_4.jpg";
import five from "../../Images/Tests/img_5.jpg";
import six from "../../Images/Tests/img_6.svg";
import seven from "../../Images/Tests/img_7.webp";
import eight from "../../Images/Tests/img_8.png";
import nine from "../../Images/Tests/img_9.svg";
import ten from "../../Images/Tests/img_10.jpg";
import CommanNavbar from "./CommanNavbar";

function Tests() {
  return (
    <>
    <CommanNavbar/>

      <div className="container">
        <h1 className="heading">Available Tests for Bookings</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={true}
          mousewheel={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation , Autoplay , Mousewheel ]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div class="profile-card">
              <div class="profile-content">
                <div class="profile-image">
                  <img src={one} alt="" class="img" />
                </div>
                <div class="description">
                  <h2 class="headd">MRI</h2>
                  <p class="paraa">
                    Magnetic resonance imaging (MRI) is a type of scan that uses
                    strong magnetic fields and radio waves to produce detailed
                    images of the inside of the body.
                  </p>
                </div>
                <div class="btn-div">
                <Link to="/apply-for-test"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="profile-card">
              <div class="profile-content">
                <div class="profile-image">
                  <img src={two} alt="" class="img" />
                </div>
                <div class="description">
                  <h2 class="headd">BLOOD TEST</h2>
                  <p class="paraa">
                    blood test is a lab analysis of things that may be found in
                    your blood. You may have blood tests to keep track of how
                    well you are managing a condition such as diabetes or high
                    cholesterol.
                  </p>
                </div>
                <div class="btn-div">
                  <Link to="/apply-for-test"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="profile-card">
              <div class="profile-content">
                <div class="profile-image">
                  <img src={three} alt="" class="img" />
                </div>
                <div class="description">
                  <h2 class="headd">URINE PH TEST</h2>
                  <p class="paraa">
                    The pH scale is used to measure the acid and alkaline
                    present in various fluids. The pH scale ranges from 0 to 14.
                    A pH of 7 is neutral, whereas a pH result below 7 is acidic
                    and above 7 is alkaline.
                  </p>
                </div>
                <div class="btn-div">
                  <Link to="/apply-for-test"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="profile-card">
              <div class="profile-content">
                <div class="profile-image">
                  <img src={four} alt="" class="img" />
                </div>
                <div class="description">
                  <h2 class="headd">LIVER TEST</h2>
                  <p class="paraa">
                  Liver function tests (also known as a liver panel) are blood tests that measure different enzymes, proteins, and other substances made by the liver. These tests check the overall health of your liver.
                  </p>
                </div>
                <div class="btn-div">
                  <Link to="/apply-for-test"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="profile-card">
              <div class="profile-content">
                <div class="profile-image">
                  <img src={five} alt="" class="img" />
                </div>
                <div class="description">
                  <h2 class="headd">CT SCAN</h2>
                  <p class="paraa">
                  A computed tomography (CT) scan, also known as a computerized axial tomography (CAT) scan, is a procedure that takes X-ray images of certain areas of your and body structures and systems.
                  </p>
                </div>
                <div class="btn-div">
                  <Link to="/apply-for-test"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="profile-card">
              <div class="profile-content">
                <div class="profile-image">
                  <img src={six} alt="" class="img" />
                </div>
                <div class="description">
                  <h2 class="headd">SONOGRAPHY</h2>
                  <p class="paraa">
                  Diagnostic ultrasound, also called sonography or diagnostic medical sonography, is an imaging method that uses sound waves to produce images of structures within your body.
                  </p>
                </div>
                <div class="btn-div">
                  <Link to="/apply-for-test"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="profile-card">
              <div class="profile-content">
                <div class="profile-image">
                  <img src={seven} alt="" class="img" />
                </div>
                <div class="description">
                  <h2 class="headd">HEART TESTS</h2>
                  <p class="paraa">
                  Heart tests give you and your doctor more information about the condition of your heart and can help you find out which treatment(s) may be best for you.
                  </p>
                </div>
                <div class="btn-div">
                  <Link to="/apply-for-test"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="profile-card">
              <div class="profile-content">
                <div class="profile-image">
                  <img src={eight} alt="" class="img" />
                </div>
                <div class="description">
                  <h2 class="headd">COVID TEST</h2>
                  <p class="paraa">
                  COVID-19 testing involves analyzing samples to assess the current or past presence of SARS-CoV-2. The two main types of tests detect either the presence of the virus or antibodies produced in response to infection.
                  </p>
                </div>
                <div class="btn-div">
                  <Link to="/apply-for-test"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="profile-card">
              <div class="profile-content">
                <div class="profile-image">
                  <img src={nine} alt="" class="img" />
                </div>
                <div class="description">
                  <h2 class="headd">LUNG TEST</h2>
                  <p class="paraa">
                  Pulmonary function testing is a complete evaluation of the respiratory system including patient history, physical examinations, and tests of pulmonary function. 
                  </p>
                </div>
                <div class="btn-div">
                  <Link to="/apply-for-test"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="profile-card">
              <div class="profile-content">
                <div class="profile-image">
                  <img src={ten} alt="" class="img" />
                </div>
                <div class="description">
                  <h2 class="headd">X-RAY</h2>
                  <p class="paraa">
                  X-rays are higher energy and can pass through most objects, including the body. Medical x-rays are used to generate images of tissues and structures inside the body.
                  </p>
                </div>
                <div class="btn-div">
                  <Link to="/apply-for-test"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <FontAwesomeIcon className="FontAwesomeIcon" icon={faArrowLeft} />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FontAwesomeIcon
                className="FontAwesomeIcon"
                icon={faArrowRight}
              />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Tests;
