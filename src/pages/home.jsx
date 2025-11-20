import { Helmet } from "react-helmet";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import BookAppointmentButton from "../components/book-appointment-button";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CountUp from "react-countup";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const gallerySettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
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
        {/* <link
          rel="preload"
          href={`${process.env.PUBLIC_URL}/assets/images/img/website_intro_video1.mp4`}
          as="fetch"
          type="video/mp4"
        /> */}
      </Helmet>

      <HomeHeader />
      {/* <BookAppointmentButton /> */}

      <>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Site keywords here" />
        <meta name="description" content="" />
        <meta name="copyright" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>
          Mediplus - Free Medical and Doctor Directory HTML Template.
        </title>
        {/* <div className="preloader">
          <div className="loader">
            <div className="loader-outter" />
            <div className="loader-inner" />
            <div className="indicator">
              <svg width="16px" height="12px">
                <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
                <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
              </svg>
            </div>
          </div>
        </div> */}
        <header className="header">
          <div className="topbar">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-5 col-12">
                  <ul className="top-link">
                    <li>
                      <a href="about-us">About</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    {/* <li>
                      <a href="contact">Contact</a>
                    </li>
                    <li>
                      <a href="contact">FAQ</a>
                    </li> */}
                  </ul>
                </div>
                <div className="col-lg-6 col-md-7 col-12 d-md-block d-none">
                  <ul className="top-contact">
                    <li>
                      <i className="fa fa-phone" />
                      +91 95101 75747
                    </li>
                    <li>
                      <i className="fa fa-envelope" />
                      <a href="mailto:winbrilifescience@gmail.com">
                        winbrilifescience@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header-inner">
            <div className="container">
              <div className="inner">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-12 logo-main">
                    <div className="w-80">
                      <div className="logo mt-0 d-flex align-items-center justify-content-between">
                        <a href="index">
                          <img src="/assets/images/logo.webp" alt="#" />
                        </a>
                      </div>
                    </div>
                    <div className="w-20 mobile-nav" />
                  </div>
                  <div className="col-lg-7 col-md-9 col-12">
                    <div className="main-menu">
                      <nav className="navigation">
                        <ul className="nav menu">
                          <li className="active">
                            <a href="index">Home</a>
                          </li>
                          <li>
                            <a href="#">
                              Services <i className="icofont-rounded-down" />
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="ecg-test">ECG</a>
                              </li>
                              <li>
                                <a href="pft-test">PFT</a>
                              </li>
                              <li>
                                <a href="x-ray-test">X-Ray</a>
                              </li>
                              <li>
                                <a href="blood-test">Lab Test</a>
                              </li>
                              <li>
                                <a href="full-body-test">Full Body CheckUp</a>
                              </li>
                              <li>
                                <a href="ambulatory-test">Ambulatory Test</a>
                              </li>
                              <li>
                                <a href="holter-monitoring-test">
                                  Holter Monitoring
                                </a>
                              </li>
                              <li>
                                <a href="audiometry-test">Audiometry Test</a>
                              </li>
                              <li>
                                <a href="sleep-study-test">Sleep Study</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="blog">Blogs</a>
                          </li>
                          <li>
                            <a href="about-us">About Us</a>
                          </li>
                          <li>
                            <a href="contact">Contact Us</a>
                          </li>
                          <li className="border-md-none border-top mt-md-0 mt-2 pt-md-0 pt-2 d-lg-none d-block">
                            <div>
                              <ul>
                                <li className="d-md-none d-flex align-items-center">
                                  <i className="fa fa-phone ps-2" />
                                  <a href="#">+91 95101 75747</a>
                                </li>
                                <li className="d-md-none d-flex align-items-center">
                                  <i className="fa fa-envelope ps-2" />
                                  <a href="mailto:winbrilifescience@gmail.com">
                                    winbrilifescience@gmail.com
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-12 col-12">
                    <div className="get-quote">
                      <a
                        href="https://wa.me/918200788099?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment."
                        target="_blank"
                        className="btn"
                      >
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Slider Area */}
        {/* <section className="slider d-md-block d-none"> */}
        <section className="slider">
          <div className="hero-slider d-md-block d-none">
            <Slider {...settings}>
              <div className="single-slider d-md-block d-none">
                <div
                  style={{
                    backgroundImage:
                      'url("/assets/images/diagnostic-slider.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "600px",
                  }}
                ></div>
              </div>
              <div className="single-slider d-md-block d-none">
                <div
                  style={{
                    backgroundImage:
                      'url("/assets/images/healthcare-slider.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "600px",
                  }}
                ></div>
              </div>
              {/* <div className="single-slider">
                <div
                  style={{
                    backgroundImage: 'url("/assets/images/slider-2.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "600px",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="text">
                          <h1>
                            We Provide <span>Medical</span> Services That You
                            Can
                            <span>Trust!</span>
                          </h1>
                          <p>
                            Book Appointment for Emergency{" "}
                            <span>Diagnostic services</span> at Doorstep
                          </p>
                          <div className="button">
                            <a href="#" className="btn">
                              Book Now
                            </a>
                            <a href="#" className="btn primary">
                              Know More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider">
                <div
                  style={{
                    backgroundImage: 'url("/assets/images/slider-4.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "600px",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="text">
                          <h1>
                            We Provide <span>Medical</span> Services That You
                            Can
                            <span>Trust!</span>
                          </h1>
                          <p>
                            Book Appointment for Emergency{" "}
                            <span>Health Care Services</span> At Doorstep
                          </p>
                          <div className="button">
                            <a href="#" className="btn">
                              Get Appointment
                            </a>
                            <a href="#" className="btn primary">
                              Know More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </Slider>
          </div>
          <div className="hero-slider d-md-none d-block">
            <Slider {...settings}>
              <div className="single-slider d-md-none d-block">
                <div
                  style={{
                    backgroundImage:
                      'url("/assets/images/diagnostic-slider-mobile.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "600px",
                  }}
                ></div>
              </div>
              <div className="single-slider d-md-none d-block">
                <div
                  style={{
                    backgroundImage:
                      'url("/assets/images/healthcare-slider-mobile.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "600px",
                  }}
                ></div>
              </div>
              {/* <div className="single-slider">
                <div
                  style={{
                    backgroundImage: 'url("/assets/images/slider-2.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "600px",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="text">
                          <h1>
                            We Provide <span>Medical</span> Services That You
                            Can
                            <span>Trust!</span>
                          </h1>
                          <p>
                            Book Appointment for Emergency{" "}
                            <span>Diagnostic services</span> at Doorstep
                          </p>
                          <div className="button">
                            <a href="#" className="btn">
                              Book Now
                            </a>
                            <a href="#" className="btn primary">
                              Know More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider">
                <div
                  style={{
                    backgroundImage: 'url("/assets/images/slider-4.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "600px",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="text">
                          <h1>
                            We Provide <span>Medical</span> Services That You
                            Can
                            <span>Trust!</span>
                          </h1>
                          <p>
                            Book Appointment for Emergency{" "}
                            <span>Health Care Services</span> At Doorstep
                          </p>
                          <div className="button">
                            <a href="#" className="btn">
                              Get Appointment
                            </a>
                            <a href="#" className="btn primary">
                              Know More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </Slider>
          </div>
        </section>
        {/* <section className="slider d-md-none d-block">
          <div className="hero-slider">
            <div
              className="single-slider d-flex align-items-end pb-4"
              style={{
                backgroundImage: 'url("/assets/images/slider-2-mobile.webp")',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>
                        We Provide <span>Medical</span> Services That You Can
                        <span>Trust!</span>
                      </h1>
                      <p>
                        Book Appointment for Emergency <span>ECG</span> or
                        <span>Routine ECG</span>
                      </p>
                      <div className="button">
                        <a href="#" className="btn">
                          Book Now
                        </a>
                        <a href="#" className="btn primary">
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider d-flex align-items-end pb-4"
              style={{
                backgroundImage: 'url("/assets/images/slider-1-mobile.webp")',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>
                        We Provide <span>Medical</span> Services That You Can
                        <span>Trust!</span>
                      </h1>
                      <p>
                        Book Appointment for Emergency <span>PFT</span> or
                        <span>Routine PFT</span>
                      </p>
                      <div className="button">
                        <a href="#" className="btn">
                          Get Appointment
                        </a>
                        <a href="#" className="btn primary">
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider d-flex align-items-end pb-4"
              style={{
                backgroundImage: 'url("/assets/images/slider-3-mobile.webp")',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>
                        We Provide <span>Medical</span> Services That You Can
                        <span>Trust!</span>
                      </h1>
                      <p>
                        Book Appointment for Emergency <span>X-Ray</span> or
                        <span>Routine X-Ray</span>
                      </p>
                      <div className="button">
                        <a href="#" className="btn">
                          Get Appointment
                        </a>
                        <a href="#" className="btn primary">
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider d-flex align-items-end pb-4"
              style={{
                backgroundImage: 'url("/assets/images/slider-4-mobile.webp")',
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>
                        We Provide <span>Medical</span> Services That You Can
                        <span>Trust!</span>
                      </h1>
                      <p>
                        Book Appointment for Emergency <span>Blood Test</span>{" "}
                        or
                        <span>Routine Blood Test</span>
                      </p>
                      <div className="button">
                        <a href="#" className="btn">
                          Get Appointment
                        </a>
                        <a href="#" className="btn primary">
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Schedule Area */}
        <section className="schedule">
          <div className="container">
            <div className="schedule-inner">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-schedule first">
                    <div className="inner">
                      <div className="icon">
                        <i className="fa fa-ambulance mirrored-icon" />
                      </div>
                      <div className="single-content">
                        <h4>Emergency Cases</h4>
                        <p>
                          We provides ECG testing services at-home, offering
                          critical care in emergency situations.
                        </p>
                        <a href="#">
                          LEARN MORE
                          <i className="fa fa-long-arrow-right" />
                        </a>
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
                        <h4>Call Us at 99799-60020</h4>
                        <p>
                          Call us at 99799-60020 | 99799-60030 | 82007-88099 to
                          book immediate Appointment for ECG, PFT, X-Ray ...
                        </p>
                        <a href="#">
                          LEARN MORE
                          <i className="fa fa-long-arrow-right" />
                        </a>
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
                        <a href="#">
                          LEARN MORE
                          <i className="fa fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service */}
        <section
          className="services section"
          style={{ padding: "0px 0px 50px" }}
          id="services"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Diagnostic services at Doorstep</h2>
                  <img
                    src="/assets/images/section-img.webp"
                    alt="Health Services"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-center d-md-flex d-none">
              <OwlCarousel
                loop
                autoplay
                dots={false}
                id="carouselExampleControls"
                className="owl-carousel owl-theme"
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 6,
                  },
                  1000: {
                    items: 6,
                  },
                }}
              >
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/ecg-test">
                    <img
                      src="/assets/images/service/ecg.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">ECG</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/pft-test">
                    <img
                      src="/assets/images/service/pft.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">PFT</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/x-ray-test">
                    <img
                      src="/assets/images/service/x-ray.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">X-ray</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/holter-monitoring-test">
                    <img
                      src="/assets/images/service/holter.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Holter Monitoring</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/sleep-study-test">
                    <img
                      src="/assets/images/service/sleep-study.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Sleep Study</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/abpm-test">
                    <img
                      src="/assets/images/service/abpm.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">ABPM</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/audiometry-test">
                    <img
                      src="/assets/images/service/audiometry.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Audiometry</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/bone-density-test">
                    <img
                      src="/assets/images/service/bone-density.jpg"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Bone Density</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/eeg-test">
                    <img
                      src="/assets/images/service/eeg.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">EEG</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/emg-test">
                    <img
                      src="/assets/images/service/emg.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">EMG</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/health-check-up-test">
                    <img
                      src="/assets/images/service/health-check-up.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Health Check-Up</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/lvef-analysis">
                    <img
                      src="/assets/images/service/lvef.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">LVEF Analysis</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/pathology-test">
                    <img
                      src="/assets/images/service/blood-report.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Pathology / Lab Test</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              </OwlCarousel>
            </div>
            <div className="row justify-content-center d-md-none d-flex">
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/ecg-test">
                  <img
                    src="/assets/images/service/ecg.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">ECG</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/pft-test">
                  <img
                    src="/assets/images/service/pft.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">PFT</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/x-ray-test">
                  <img
                    src="/assets/images/service/x-ray.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">X-ray</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/holter-monitoring-test">
                  <img
                    src="/assets/images/service/holter.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">Holter Monitoring</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/sleep-study-test">
                  <img
                    src="/assets/images/service/sleep-study.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">Sleep Study</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/abpm-test">
                  <img
                    src="/assets/images/service/abpm.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">ABPM</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service mt-md-3 mt-0">
                <a alt="Winbri" href="/audiometry-test">
                  <img
                    src="/assets/images/service/audiometry.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">Audiometry</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service mt-md-3 mt-0">
                <a alt="Winbri" href="/bone-density-test">
                  <img
                    src="/assets/images/service/bone-density.jpg"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">Bone Density</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service mt-md-3 mt-0">
                <a alt="Winbri" href="/eeg-test">
                  <img
                    src="/assets/images/service/eeg.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">EEG</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service mt-md-3 mt-0">
                <a alt="Winbri" href="/emg-test">
                  <img
                    src="/assets/images/service/emg.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">EMG</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service mt-md-3 mt-0">
                <a alt="Winbri" href="/health-check-up-test">
                  <img
                    src="/assets/images/service/health-check-up.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">Health Check-Up</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service mt-md-3 mt-0">
                <a alt="Winbri" href="/lvef-analysis">
                  <img
                    src="/assets/images/service/lvef.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">LVEF Analysis</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service mt-md-3 mt-0">
                <a alt="Winbri" href="/pathology-test">
                  <img
                    src="/assets/images/service/blood-report.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">Pathology / Lab Test</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service">
                  <i class="fa-brands fa-wpforms"></i>
                  <h4>
                    <a
                      style={{ textDecoration: "underline" }}
                      href="ecg-test"
                    >
                      ECG
                    </a>
                  </h4>
                  <p>
                    An ECG records the heart's electrical activity to help
                    detect heart conditions like arrhythmias.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service">
                  <i class="fa-solid fa-tooth"></i>
                  <h4>
                    <a
                      style={{ textDecoration: "underline" }}
                      href="pft-test"
                    >
                      PFT
                    </a>
                  </h4>
                  <p>
                    Pulmonary function tests assess lung capacity and diagnose
                    conditions like asthma and COPD.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service">
                  <i class="fa-solid fa-heart"></i>
                  <h4>
                    <a
                      style={{ textDecoration: "underline" }}
                      href="x-ray-test"
                    >
                      X-ray
                    </a>
                  </h4>
                  <p>
                    X-rays help detect fractures, infections, and abnormalities
                    in bones and organs.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service">
                  <i class="fa-solid fa-droplet"></i>
                  <h4>
                    <a
                      style={{ textDecoration: "underline" }}
                      href="blood-test"
                    >
                      Blood Tests
                    </a>
                  </h4>
                  <p>
                    Blood tests help identify conditions such as diabetes,
                    anemia, and infections.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service">
                  <i class="fa-solid fa-eye"></i>
                  <h4>
                    <a
                      style={{ textDecoration: "underline" }}
                      href="sleep-study-test"
                    >
                      Sleep Study
                    </a>
                  </h4>
                  <p>
                    A sleep study helps diagnose sleep disorders like apnea and
                    insomnia.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service">
                  <i class="fa-solid fa-prescription-bottle-medical"></i>
                  <h4>
                    <a
                      style={{ textDecoration: "underline" }}
                      href="holter-monitoring-test"
                    >
                      Holter Monitoring
                    </a>
                  </h4>
                  <p>
                    Holter monitoring tracks heart rhythm over 24-48 hours to
                    detect arrhythmias.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        {/* service */}
        <section
          className="services section"
          style={{ padding: "0px 0px 50px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Diagnostic services at center</h2>
                  <img
                    src="/assets/images/section-img.webp"
                    alt="Health Services"
                  />
                  {/* <p>
                    We offer a variety of diagnostic services to help you
                    maintain your health and well-being with advanced medical
                    technology and expert care.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/treadmill-test">
                  <img
                    src="/assets/images/service/tmt.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">Treadmill</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/2d-echo-test">
                  <img
                    src="/assets/images/service/eco.JPG"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">2D Echocardiography</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* service */}
        <section
          className="services section"
          style={{ padding: "0px 0px 50px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Health Care Services At Doorstep</h2>
                  <img
                    src="/assets/images/section-img.webp"
                    alt="Health Services"
                  />
                  {/* <p>
                    We offer a variety of diagnostic services to help you
                    maintain your health and well-being with advanced medical
                    technology and expert care.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/specialty-doctor-consultation">
                  <img
                    src="/assets/images/health-care-service/specialty-doctor-consultation.jpg"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">Specialty Doctor</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/specialist-consultation">
                  <img
                    src="/assets/images/health-care-service/specialist-consultations.jpg"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">Specialist</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/gp-doctor-consultation">
                  <img
                    src="/assets/images/health-care-service/general-practitioner.jpg"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">General Practitioner</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/physiotherapy-consultation">
                  <img
                    src="/assets/images/health-care-service/physiotherapy.jpg"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">Physiotherapy</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/dietician-consultation">
                  <img
                    src="/assets/images/health-care-service/dietician-consultation.jpg"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">Dietician</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
              <div className="col-md-2 col-6 mb-md-0 mb-3 text-center service">
                <a alt="Winbri" href="/nursing-care">
                  <img
                    src="/assets/images/health-care-service/nursing-care.jpg"
                    width="100%"
                    alt=""
                  />
                  <p className="text-center mt-1">Nursing Care</p>
                  <button className="text-center read-btn mb-1">
                    READ MORE
                  </button>
                  <button className="text-center book-btn">
                    BOOK NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Feautes */}
        <section className="Feautes section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Are Always Ready to Help You &amp; Your Family</h2>
                  <img src="/assets/images/section-img.webp" alt="#" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="single-features">
                  <div className="signle-icon">
                    <i class="fa-solid fa-truck-medical"></i>
                  </div>
                  <h3>Emergency Help</h3>
                  <p>
                    Winbri Life Science offers ECG tests at-home for quick
                    diagnosis and immediate access to emergency care.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-features">
                  <div className="signle-icon">
                    <i class="fa-solid fa-prescription-bottle-medical"></i>
                  </div>
                  <h3>Enriched Pharmacy</h3>
                  <p>
                    Access essential medications right at your doorstep,
                    especially during emergencies.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-features last">
                  <div className="signle-icon">
                    <i class="fa-solid fa-stethoscope"></i>
                  </div>
                  <h3>Medical Treatment</h3>
                  <p>
                    At-home ECG, PFT, X-ray, and blood tests for fast and
                    comprehensive health monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Fun-facts */}
        <div id="fun-facts" className="fun-facts section overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="single-fun">
                  <i class="fa-solid fa-house"></i>
                  <div className="content">
                    <div className="d-flex justify-content-md-start justify-content-center">
                      <span className="counter">
                        <CountUp
                          start={0}
                          end={2000}
                          duration={10}
                          separator=","
                        />
                      </span>
                      <span>+</span>
                    </div>
                    <p>Clinics & Hospitals</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="single-fun">
                  <i class="fa-solid fa-user-doctor"></i>
                  <div className="content">
                    <div className="d-flex justify-content-md-start justify-content-center">
                      <span className="counter">
                        <CountUp
                          start={0}
                          end={2000}
                          duration={10}
                          separator=","
                        />
                      </span>
                      <span>+</span>
                    </div>
                    <p>Doctors</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 pt-md-0 pt-3">
                <div className="single-fun">
                  <i class="fa-regular fa-face-smile"></i>
                  {/* <i class="fa-solid fa-face-smile"></i> */}
                  <div className="content">
                    <div className="d-flex justify-content-md-start justify-content-center">
                      <span className="counter">
                        <CountUp
                          start={0}
                          end={25715}
                          duration={10}
                          separator=","
                        />
                      </span>
                      <span>+</span>
                    </div>
                    <p>Happy Patients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6 pt-md-0 pt-3">
                <div className="single-fun">
                  <i class="fa-regular fa-calendar"></i>
                  <div className="content">
                    <div className="d-flex justify-content-md-start justify-content-center">
                      <span className="counter">
                        <CountUp
                          start={0}
                          end={7}
                          duration={10}
                          separator=","
                        />
                      </span>
                      <span>+</span>
                    </div>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Why choose */}
        <section className="why-choose section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>7 YEARS OF LEGACY IN DIAGNOSIS</h2>
                  <img src="/assets/images/section-img.webp" alt="#" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="choose-left">
                  <h3>We Understand. We Care...</h3>
                  <p>
                    With a legacy of 7 years, Winbri Life Science, being the
                    best Doorstep ECG, PFT, X-Ray and Laboratory Service in
                    Surat, has become the epicenter of happiness for thousands
                    of patients from generation to generation.
                  </p>
                  <p>
                    The warm welcome and assistance by the hospital staff, a
                    friendly and supportive consultation by our team of skilled
                    diagnosis doctors, and an equally competent guiding approach
                    help our patients gain confidence in positively dealing with
                    their health.
                  </p>
                  <div className="row">
                    <div className="col-lg-12">
                      <ul className="list under-email m-0 p-0">
                        <li>
                          Get Free Assessment:{" "}
                          <a href="">winbrilifescience@gmail.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="choose-right">
                  <div className="video-image">
                    <div className="promo-video">
                      <div className="waves-block">
                        <div className="waves wave-1" />
                        <div className="waves wave-2" />
                        <div className="waves wave-3" />
                      </div>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
                      className="video video-popup mfp-iframe"
                    >
                      <i className="fa fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call to action */}
        <section
          className="call-action overlay"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="content">
                  <h2>
                    Do you need Emergency Medical Care? Call @ 95101 75747
                  </h2>
                  <p>
                    Winbri Life Science offers ECG tests at-home for quick
                    diagnosis and immediate access to emergency care.
                  </p>
                  <div className="button">
                    <a href="#" className="btn">
                      Contact Now
                    </a>
                    <a href="#" className="btn second">
                      Learn More
                      <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* portfolio */}
        <section className="portfolio section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Our Latest Projects and Solutions</h2>
                  <img src="/assets/images/section-img.webp" alt="#" />
                  {/* <p>
                    Discover our diverse services and successful collaborations,
                    from innovative designs to custom solutions, all reflecting
                    our commitment to excellence.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-6 px-1">
                <img src="/assets/images/10.webp" alt="10" className="w-100" />
              </div>
              <div className="col-md-3 col-6 px-1">
                <img src="/assets/images/11.webp" alt="11" className="w-100" />
              </div>
              <div className="col-md-3 col-6 px-1 pt-md-0 pt-2">
                <img src="/assets/images/12.webp" alt="12" className="w-100" />
              </div>
              <div className="col-md-3 col-6 px-1 pt-md-0 pt-2">
                <img src="/assets/images/13.webp" alt="13" className="w-100" />
              </div>
              <div className="col-md-3 col-6 px-1 pt-2">
                <img src="/assets/images/31.webp" alt="31" className="w-100" />
              </div>
              <div className="col-md-3 col-6 px-1 pt-2">
                <img src="/assets/images/37.webp" alt="37" className="w-100" />
              </div>
              <div className="col-md-3 col-6 px-1 pt-2">
                <img src="/assets/images/06.webp" alt="06" className="w-100" />
              </div>
              <div className="col-md-3 col-6 px-1 pt-2">
                <img src="/assets/images/25.webp" alt="25" className="w-100" />
              </div>
            </div>
          </div>
        </section>
        {/* Blog Area */}
        {/* <section
          className="blog section"
          style={{ padding: "50px 0px" }}
          id="blog"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title" style={{ marginBottom: 0 }}>
                  <h2>Blogs</h2>
                  <img src="/assets/images/section-img.webp" alt="#" />
                </div>
              </div>
            </div>
            <div className="row news-single">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-main">
                  <div className="news-head">
                    <img src="/assets/images/blog3.webp" alt="#" />
                  </div>
                  <h1 className="news-title">
                    <a href="news-single">
                      ECG is the only test to rule out exact cause of
                      Palpitations
                    </a>
                  </h1>
                  <div className="meta">
                    <div className="meta-left">
                      <span className="author">
                        <a href="#">
                          <img
                            src="/assets/images/user-icon-trendy-flat-style-600nw-418179856.webp"
                            alt="#"
                          />
                          Admin
                        </a>
                      </span>
                      <span className="date">
                        <i className="fa fa-clock-o" />
                        24 jan 2024
                      </span>
                    </div>
                  </div>
                  <div className="news-text">
                    <p>
                      The feeling of a pounding, fluttering, inadequately
                      beating heart is called heart palpitation. Heart
                      palpitations don't come under the most serious of heart
                      problems as they can also be caused by work anxiety,
                      unnecessary stress, physical exercise, various medical
                      conditions, etc.
                    </p>
                  </div>
                  <div className="blog-bottom d-flex justify-content-end">
                    <ul className="social-share">
                      <li className="facebook">
                        <a
                          href="ecg-blog"
                          style={{ backgroundColor: "#133050", color: "#fff" }}
                          className="btn"
                        >
                          <span>Read More</span>
                          <i className="fa fa-long-arrow-right ml-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-main">
                  <div className="news-head">
                    <img src="/assets/images/blog1.webp" alt="#" />
                  </div>
                  <h1 className="news-title">
                    <a href="news-single">
                      High Cholesterol is responsible factor for Heart Attack
                    </a>
                  </h1>
                  <div className="meta">
                    <div className="meta-left">
                      <span className="author">
                        <a href="#">
                          <img
                            src="/assets/images/user-icon-trendy-flat-style-600nw-418179856.webp"
                            alt="#"
                          />
                          Admin
                        </a>
                      </span>
                      <span className="date">
                        <i className="fa fa-clock-o" />
                        23 jan 2024
                      </span>
                    </div>
                  </div>
                  <div className="news-text">
                    <p>
                      High cholesterol is responsible factor for Heart attack or
                      coronary artery diseases but do you know what is
                      Cholesterol? Cholesterol present in all the cells in the
                      human body, cholesterol is an organic molecule made by the
                      liver and is a fat-like substance that has a waxy,
                      yellowish crystalline structure. Our body generates...
                    </p>
                  </div>
                  <div className="blog-bottom d-flex justify-content-end">
                    <ul className="social-share">
                      <li className="facebook">
                        <a
                          href="high-cholesterol"
                          style={{ backgroundColor: "#133050", color: "#fff" }}
                          className="btn"
                        >
                          <span>Read More</span>
                          <i className="fa fa-long-arrow-right ml-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-main">
                  <div className="news-head">
                    <img src="/assets/images/blog2.webp" alt="#" />
                  </div>
                  <h1 className="news-title">
                    <a href="news-single">What is a Heart Attack?</a>
                  </h1>
                  <div className="meta">
                    <div className="meta-left">
                      <span className="author">
                        <a href="#">
                          <img
                            src="/assets/images/user-icon-trendy-flat-style-600nw-418179856.webp"
                            alt="#"
                          />
                          Admin
                        </a>
                      </span>
                      <span className="date">
                        <i className="fa fa-clock-o" />
                        25 jan 2024
                      </span>
                    </div>
                  </div>
                  <div className="news-text">
                    <p className="pb-2">
                      Myocardial infarction, commonly known as a heart attack,
                      is the condition when a part of the heart doesn't receive
                      an adequate supply of blood. The need for oxygen-rich
                      blood to reach the heart and to flow through all the
                      organs of the body properly is highly essential for a
                      human body's survival. While ‘cardial' refers to the
                      heart, ‘myo' depicts muscles, and infarction is basically
                      when tissue dies due to a lack of...
                    </p>
                  </div>
                  <div className="blog-bottom d-flex justify-content-end">
                    <ul className="social-share pb-1">
                      <li className="facebook">
                        <a
                          href="heart-attack"
                          style={{ backgroundColor: "#133050", color: "#fff" }}
                          className="btn"
                        >
                          <span>Read More</span>
                          <i className="fa fa-long-arrow-right ml-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Start clients */}
        {/* <div class="clients overlay">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-12">
                <div class="owl-carousel clients-slider">
                  <div class="single-clients">
                    <img src="/assets/images/client1.webp" alt="#" />
                  </div>
                  <div class="single-clients">
                    <img src="/assets/images/client2.webp" alt="#" />
                  </div>
                  <div class="single-clients">
                    <img src="/assets/images/client3.webp" alt="#" />
                  </div>
                  <div class="single-clients">
                    <img src="/assets/images/client4.webp" alt="#" />
                  </div>
                  <div class="single-clients">
                    <img src="/assets/images/client5.webp" alt="#" />
                  </div>
                  <div class="single-clients">
                    <img src="/assets/images/client1.webp" alt="#" />
                  </div>
                  <div class="single-clients">
                    <img src="/assets/images/client2.webp" alt="#" />
                  </div>
                  <div class="single-clients">
                    <img src="/assets/images/client3.webp" alt="#" />
                  </div>
                  <div class="single-clients">
                    <img src="/assets/images/client4.webp" alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Appointment */}
        <section className="appointment" style={{ paddingTop: 50 }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                  <img src="/assets/images/section-img.webp" alt="#" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <form className="form" action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="name" type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="email" type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input name="phone" type="text" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <div
                          className="nice-select form-control wide"
                          tabIndex={0}
                        >
                          <span className="current">Department</span>
                          <ul className="list">
                            <li data-value={1} className="option selected">
                              Department
                            </li>
                            <li data-value={2} className="option">
                              Cardiac Clinic
                            </li>
                            <li data-value={3} className="option">
                              Neurology
                            </li>
                            <li data-value={4} className="option">
                              Dentistry
                            </li>
                            <li data-value={5} className="option">
                              Gastroenterology
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <div
                          className="nice-select form-control wide"
                          tabIndex={0}
                        >
                          <span className="current">Doctor</span>
                          <ul className="list">
                            <li data-value={1} className="option selected">
                              Doctor
                            </li>
                            <li data-value={2} className="option">
                              Dr. Akther Hossain
                            </li>
                            <li data-value={3} className="option">
                              Dr. Dery Alex
                            </li>
                            <li data-value={4} className="option">
                              Dr. Jovis Karon
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Date" id="datepicker" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Write Your Message Here....."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-md-4 col-12">
                      <div className="form-group">
                        <div className="button">
                          <button type="submit" className="btn form-submit-btn">
                            Book An Appointment
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-8 col-12">
                      <p>( We will be confirm by an Text Message )</p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="appointment-image">
                  <img src="/assets/images/contact-img.webp" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer id="footer" className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>About Us</h2>
                    <p>
                      401, Jivandeep Doctor House, Unapani Rd, LalDarwaja, Lal Darwaja, Varachha, Surat, Gujarat 395003
                    </p>
                    <ul className="social ps-0">
                      <li>
                        <a href="https://www.facebook.com/DOORSTEP.MEDICALandHEALTHCARE.SERVICE">
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/maps/place/Winbri+Life+Science+(Medical+Services)/@21.2061061,72.8363258,2603m/data=!3m1!1e3!4m6!3m5!1s0x3be04f3ff9ea5873:0x698681e40250539e!8m2!3d21.2058962!4d72.8363626!16s%2Fg%2F11qn099nty?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                          <i class="fa-brands fa-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/winbrilifescience/">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/@Winbrilifescience">
                          <i class="fa-brands fa-youtube"></i>
                        </a>
                      </li>
                      <li />
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h2>Quick Links</h2>
                    <div>
                      <ul>
                        <li>
                          <a href="index">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="about-us">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="blog">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Blogs
                          </a>
                        </li>
                        <li>
                          <a href="contact">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h2>Services</h2>
                    <div className="d-flex">
                      <div className="">
                        <ul className="ps-2">
                          <li>
                            <a href="ecg-test">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              ECG
                            </a>
                          </li>
                          <li>
                            <a href="pft-test">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              PFT
                            </a>
                          </li>
                          <li>
                            <a href="x-ray-test">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              X-Ray
                            </a>
                          </li>
                          <li>
                            <a href="blood-test">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Lab Test
                            </a>
                          </li>
                          <li>
                            <a href="full-body-test">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Full Body CheckUp
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="">
                        <ul>
                          <li>
                            <a href="ambulatory-test">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Ambulatory Test
                            </a>
                          </li>
                          <li>
                            <a href="holter-monitoring-test">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Holter Monitoring
                            </a>
                          </li>
                          <li>
                            <a href="audiometry-test">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Audiometry Test
                            </a>
                          </li>
                          <li>
                            <a href="sleep-study-test">
                              <i
                                className="fa fa-caret-right"
                                aria-hidden="true"
                              />
                              Sleep Study
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer">
                    <h2>Open Hours</h2>
                    <ul className="time-sidual">
                      <li className="day">
                        Monday - Sunday <span>24 Hours</span>
                      </li>
                      <li className="day">
                        Open <span>365 Days</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="copyright-content">
                    <p>
                      © Copyright 2018 | All Rights Reserved by
                      <a href="https://www.wpthemesgrid.com" target="_blank">
                        wpthemesgrid.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>

      <HomeFooter />
    </>
  );
}

export default Home;
