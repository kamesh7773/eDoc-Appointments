import React from "react";
import "../../CSS/Tests.css";
import "../../CSS/DoctorInfo.css";
import "../../CSS/Navbars/CommanNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Navigation, Autoplay , Mousewheel} from "swiper";
import CommanNavbar from "./CommanNavbar";
// Images
import first from "../../Images/DoctorInfo/Oneorg.jpeg";
import Second from "../../Images/DoctorInfo/Twoorg.jpeg";
import Thrird from "../../Images/DoctorInfo/Threeorg.jpeg";
import Fourth from "../../Images/DoctorInfo/pdaveji.jpg";
import Fifth from "../../Images/DoctorInfo/kameshdoc.png";
import Sixth from "../../Images/DoctorInfo/Sixorg.jpeg";
import Seventh from "../../Images/DoctorInfo/Senventhorg.jpg";
import Eight from "../../Images/DoctorInfo/Eighthorg.jpg";
import Nineth from "../../Images/DoctorInfo/bhartiya.jpg";
import Tenth from "../../Images/DoctorInfo/Thenthorg.jpg";
import Eleventh from "../../Images/DoctorInfo/Eleventhorg.jpg";
import Twelth from "../../Images/DoctorInfo/kapil.jpg";

function DoctorInfo() {
  return (
    <>
      <CommanNavbar />

      <div className="container">
        <h1 className="headinG">OUR HEROS</h1>
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
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay , Mousewheel]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className="profile-carD">
              <div className="profile-content">
                <div className="profile-image">
                  <img src={first} alt="" className="img" />
                </div>
                <div className="description">
                  <h2 className="headD">Dr. Sandeep Attawar</h2>
                  <p className="paraA">
                    Cardiologists <br />
                    MBBS, MS, MCh, 10 years of experience <br />
                    Two times award winner by Government of India
                    <br />
                    Timings : 11:00AM - 17:00PM from Mon-Fri
                  </p>
                </div>
                <div className="btn-div">
                  <Link to="/available-doctors"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-carD">
              <div className="profile-content">
                <div className="profile-image">
                  <img src={Second} alt="" className="img" />
                </div>
                <div className="description">
                  <h2 className="headD">Dr. Ajay Kaul</h2>
                  <p className="paraA">
                    Cardiac Surgeon <br />
                    MBBS,MS,MCh,Fellowship,15 years of experience <br />
                    3 times Cardiology award winner <br />
                    Timings : 11:00AM - 17:00PM from Mon-Sat
                  </p>
                </div>
                <div className="btn-div">
                  <Link to="/available-doctors"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-carD">
              <div className="profile-content">
                <div className="profile-image">
                  <img src={Thrird} alt="" className="img" />
                </div>
                <div className="description">
                  <h2 className="headD">Dr. Samit Chaturvedi</h2>
                  <p className="paraA">
                    Urology
                    <br />
                    MCh,MS,MBBS,17 years of experience <br />
                    2017 and 2023 Urology award winner <br />
                    Timings : 11:00AM - 17:00PM from Mon-Sat
                  </p>
                </div>
                <div className="btn-div">
                  <Link to="/available-doctors"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-carD">
              <div className="profile-content">
                <div className="profile-image">
                  <img src={Fourth} alt="" className="img" />
                </div>
                <div className="description">
                  <h2 className="headD">Dr. P Dave</h2>
                  <p className="paraA">
                    Orthopedic Surgeon (62 years of experience)
                    <br />
                    MS-Orthopaedics,MBBS <br />
                    Orthopedist Joint Replacement Surgeon
                    <br />
                    Timings : 11:00AM - 17:00PM from Mon-Sat
                  </p>
                </div>
                <div className="btn-div">
                  <Link to="/available-doctors"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-carD">
              <div className="profile-content">
                <div className="profile-image">
                  <img src={Fifth} alt="" className="img" />
                </div>
                <div className="description">
                  <h2 className="headD">Dr kamesh singh</h2>
                  <p className="paraA">
                    Dentists <br />
                    BDS and MDS <br />
                    An Endodontist, Dental Surgeon and Dentist
                    <br />
                    Currently practicing in our hospital
                    <br />
                    Timings : 11:00AM - 17:00PM from Mon-Sat
                  </p>
                </div>
                <div className="btn-div">
                  <Link to="/available-doctors"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-carD">
              <div className="profile-content">
                <div className="profile-image">
                  <img src={Sixth} alt="" className="img" />
                </div>
                <div className="description">
                  <h2 className="headD">Dr.Aradhana Singh</h2>
                  <p className="paraA">
                    Gynaecologist and Obstetrician <br />
                    Senior Consultant , MBBS, MS, FICMCH <br />
                    Won FOGSI North zone J&J award <br />
                    Timings : 11:00AM - 17:00PM from Mon-Sat
                  </p>
                </div>
                <div className="btn-div">
                  <Link to="/available-doctors"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-carD">
              <div className="profile-content">
                <div className="profile-image">
                  <img src={Seventh} alt="" className="img" />
                </div>
                <div className="description">
                  <h2 className="headD">Dr. Shanti Talwar </h2>
                  <p className="paraA">
                    Pediatrician <br />
                    MBBS, MS (General Surgery), MCh (Paediatrics), NNAMS, FAMS
                    (Pediatrics) <br />
                    15 years of experience
                    <br />
                    Timings : 11:00AM - 17:00PM from Mon-Sat
                  </p>
                </div>
                <div className="btn-div">
                  <Link to="/available-doctors"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-carD">
              <div className="profile-content">
                <div className="profile-image">
                  <img src={Eight} alt="" className="img" />
                </div>
                <div className="description">
                  <h2 className="headD">Dr. Deepashree</h2>
                  <p className="paraA">
                    Radiologists <br />
                    Educational Commision of Foriegn Medical Graduated,(ECFMG),
                    USA
                    <br />
                    SC,18 years of experience <br />
                    Timings : 11:00AM - 17:00PM from Mon-Sat
                  </p>
                </div>
                <div className="btn-div">
                  <Link to="/available-doctors"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-carD">
              <div className="profile-content">
                <div className="profile-image">
                  <img src={Nineth} alt="" className="img" />
                </div>
                <div className="description">
                  <h2 className="headD">Dr. Bharat Chandak</h2>
                  <p className="paraA">
                    Oncology and Oncosurgery <br />
                    SC - Medical Oncology, Hemato Oncology MBBS, Diploma, MD,
                    DM, 16 years of experience
                    <br />
                    Timings : 11:00AM - 17:00PM from Mon-Sat
                  </p>
                </div>
                <div className="btn-div">
                  <Link to="/available-doctors"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-carD">
              <div className="profile-content">
                <div className="profile-image">
                  <img src={Tenth} alt="" className="img" />
                </div>
                <div className="description">
                  <h2 className="headD">Dr.Savita Malhotra</h2>
                  <p className="paraA">
                    {" "}
                    Psychiatrist
                    <br />
                    MBBS, MD,PhD,Senior Psychiatrist │ Addiction Psychiatrist
                    <br />
                    NITI AYOG award winner in his catagory
                    <br />
                    Timings : 11:00AM - 17:00PM from Mon-Sat
                  </p>
                </div>
                <div className="btn-div">
                  <Link to="/available-doctors"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-carD">
              <div className="profile-content">
                <div className="profile-image">
                  <img src={Eleventh} alt="" className="img" />
                </div>
                <div className="description">
                  <h2 className="headD">Dr.Murli Prasad</h2>
                  <p className="paraA">
                    ENT Surgeon
                    <br />
                    BSc,MBBS,DLO,MS,DSC
                    <br />
                    16 Years of experience
                    <br />
                    Awarded by GovernmentOf India for best ENT specialist <br />
                    Timings : 11:00AM - 17:00PM from Mon-Sat
                  </p>
                </div>
                <div className="btn-div">
                  <Link to="/available-doctors"><button class="btn">Book Now</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="profile-carD">
              <div className="profile-content">
                <div className="profile-image">
                  <img src={Twelth} alt="" className="img" />
                </div>
                <div className="description">
                  <h2 className="headD">Dr.Kapil Banjara</h2>
                  <p className="paraA">
                    Neurologist <br />
                    ENT Surgeon SC,MD,DM,MBBS,28 years of experience <br />
                    Best Paper Award At Kerala Chapter Of Neurological Society
                    <br />
                    Timings : 11:00AM - 17:00PM from Mon-Sat
                  </p>
                </div>
                <div className="btn-div">
                  <Link to="/available-doctors"><button class="btn">Book Now</button></Link>
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

export default DoctorInfo;
