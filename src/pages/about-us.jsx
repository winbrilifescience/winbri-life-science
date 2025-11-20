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

function AboutUs() {
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
        <BookAppointmentButton />
        {/* Breadcrumbs */}
        <div className="breadcrumbs overlay">
          <div className="container">
            <div className="bread-inner">
              <div className="row">
                <div className="col-12">
                  <h2>About Us</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single News */}
        <section className="news-single section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="single-main">
                      <div className="row">
                        <div className="col-md-12">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              About Us – Winbri Life Science
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              Established in 2017, Winbri Life Science is a leading Doorstep Diagnostic and Healthcare Service Provider dedicated to bringing quality medical care directly to individuals, families, and organizations. Our mission is simple — to make healthcare accessible, reliable, and patient-friendly anytime, anywhere.
                            </p>
                            <p>
                              We began our journey in 2017 with a single specialized services.
                            </p>
                            <p>
                              ECG testing at doorstep, accompanied by Cardiology Certified Reports and 24×7 Tele-Consultation support. Year after year, with growing trust and patient demand, we expanded our diagnostic capabilities and added multiple essential healthcare services to serve communities better.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-2">
                              <b>Today, Winbri Life Science proudly offers a complete spectrum of clinical diagnostics and healthcare services at your doorstep, including:</b>
                              <ul className="list-style-unset pl-3">
                                <li>Full Body Health Checkups</li>
                                <li>ECG, X-ray, PFT, EMG, EEG, ABPM, Holter & more</li>
                                <li>Specialist Doctor Certified Reports</li>
                                <li>24×7 Tele-Consultation Support</li>
                                <li>Home Sample Collection</li>
                                <li>Clinic, Office, Hospital & On-Site Diagnostic Services</li>
                              </ul>
                            </p>
                            <p>
                              <b>Recently, we have expanded beyond diagnostics and introduced Doorstep Healthcare Services, including:</b>
                              <ul className="list-style-unset pl-3">
                                <li>Doctor Consultation at Home</li>
                                <li>Physiotherapy at Home</li>
                                <li>Nursing & Patient Care at Home</li>
                              </ul>
                            </p>
                            <p>
                              This expansion reflects our growing commitment to deliver comprehensive medical care at the comfort of your home, ensuring convenience, quality, and continuity of care.
                            </p>
                            <p>
                              With a vision to become India’s most trusted home-healthcare partner, we are continuously working on launching many more innovative healthcare services and products at doorstep in the near future.
                            </p>
                            <p>
                              At Winbri Life Science, every test, every visit, and every consultation is guided by our core promise:
                            </p>
                            <p>
                              <b>“Your Health, Our Responsibility.”</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <HomeFooter />
    </>
  );
}

export default AboutUs;
