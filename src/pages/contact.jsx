import { Helmet } from "react-helmet";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import BookAppointmentButton from "../components/book-appointment-button";
import AllServices from "../components/all-services";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function ContactPage() {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Helmet>
        <title>
          One-Stop Solution For All Your Fitness Needs - Winbri Life Science
        </title>
        <meta
          name="description"
          content="Winbri Life Science Solely Works In The Health & Fitness Sector. We Provide Diet & Exercise Plans As Well As Health And Fitness Courses. We Also Offer Digital Marketing Courses For Fitness Professionals, And Ready-Made Meals For Healthy Living."
        />
        <meta
          name="keywords"
          content="best dietitian in surat, online dietitian consultation, gyms in surat, personal training gyms near me, certified nutritionist course, fitness trainer course in india, online fitness courses, nutritionist course online india, certification for fitness trainer, nutritionist online course, best digital marketing course, best digital marketing course online"
        />
      </Helmet>

      <HomeHeader />

      <>
        {/* Breadcrumbs */}
        <div className="breadcrumbs overlay">
          <div className="container">
            <div className="bread-inner">
              <div className="row">
                <div className="col-12">
                  <h2>Contact Us</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single News */}
        <section className="schedule contact">
          <div className="container">
            <div className="my-5">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-schedule first">
                    <div className="inner">
                      <div className="icon">
                        {/* <i className="fa fa-ambulance mirrored-icon" /> */}
                        <i class="fa-solid fa-location-dot mirrored-icon"></i>
                      </div>
                      <div className="single-content">
                        <h4>Address</h4>
                        <p>
                          401, Jivandeep Doctor House, Unapani Rd, LalDarwaja,
                          Lal Darwaja, Varachha, Surat, Gujarat 395003
                        </p>
                        {/* <a href="#">
                          LEARN MORE
                          <i className="fa fa-long-arrow-right" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-schedule middle">
                    <div className="inner">
                      <div className="icon">
                        <i class="fa-brands fa-wpforms"></i>
                      </div>
                      <div className="single-content">
                        <h4>Book Appointment Now</h4>
                        <ul className="time-sidual">
                          <li className="day">
                            <a href="tel:+919979960020" className="mt-0">99799 60020</a>
                          </li>
                          <li className="day">
                            <a href="tel:+919510175747" className="mt-0">95101 75747</a>
                          </li>
                          <li className="day">
                            <a href="tel:+918200788099" className="mt-0">82007 88099</a>
                          </li>
                        </ul>
                        {/* <a href="#">
                          LEARN MORE
                          <i className="fa fa-long-arrow-right" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  <div className="single-schedule last">
                    <div className="inner">
                      <div className="icon">
                        <i class="fa-regular fa-clock"></i>
                      </div>
                      <div className="single-content">
                        <h4>Opening Hours</h4>
                        <ul className="time-sidual opening-hours">
                          <li className="day">
                            Monday - Sunday <span>24 Hours</span>
                          </li>
                          <li className="day">
                            Open <span>365 Days</span>
                          </li>
                        </ul>
                        {/* <a href="#">
                          LEARN MORE
                          <i className="fa fa-long-arrow-right" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      {/* <HomeFooter /> */}
    </>
  );
}

export default ContactPage;
