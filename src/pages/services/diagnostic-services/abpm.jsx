import { Helmet } from "react-helmet";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomeHeader from "../../../components/partials/Header/header";
import HomeFooter from "../../../components/partials/Footer/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import BookAppointmentButton from "../../../components/book-appointment-button";
import AllServices from "../../../components/all-services";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function ABPMService() {
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
        {/* <link
          rel="preload"
          href={`${process.env.PUBLIC_URL}/assets/images/img/website_intro_video1.mp4`}
          as="fetch"
          type="video/mp4"
        /> */}
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
                  <h2>Doorstep Ambulatory Blood Pressure Monitoring Test</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">
                      Ambulatory Blood Pressure Monitoring Test
                    </li>
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
                        <div className="col-md-6">
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
                                items: 1,
                              },
                              1000: {
                                items: 1,
                              },
                            }}
                          >
                            <div className="news-head">
                              <img
                                src="/assets/images/services/abpm.JPG"
                                alt="#"
                              />
                            </div>
                            <div className="news-head">
                              <img
                                src="/assets/images/services/abpm-2.JPG"
                                alt="#"
                              />
                            </div>
                            <div className="news-head">
                              <img
                                src="/assets/images/services/abpm-3.JPG"
                                alt="#"
                                className="service-img"
                              />
                            </div>
                          </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              Ambulatory Blood Pressure Monitoring (ABPM) at
                              Your Doorstep
                            </a>
                          </h1>
                          <div className="news-text">
                            <p className="mt-3">
                              Ambulatory Blood Pressure Monitoring (ABPM) is an
                              advanced, non-invasive diagnostic test that
                              measures your blood pressure continuously over 24
                              hours (and sometimes up to 48 hours) while you
                              carry on with your normal daily activities and
                              sleep.
                            </p>
                            <p className="mt-3">
                              Unlike a regular clinic or home BP check, which
                              gives a single reading, ABPM provides a
                              comprehensive picture of blood pressure changes
                              throughout the day and night, helping doctors
                              identify hidden or fluctuating blood pressure
                              problems.
                            </p>
                            <p className="mt-3">
                              This makes ABPM the gold standard test for
                              diagnosing and managing hypertension (high blood
                              pressure).
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>Indications – When is ABPM Needed?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Suspected or Confirmed Hypertension</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      To confirm a diagnosis of high blood
                                      pressure
                                    </li>
                                    <li>
                                      To detect “white coat hypertension” (high
                                      BP only at clinic due to stress)
                                    </li>
                                    <li>
                                      To detect “masked hypertension” (normal in
                                      clinic but high at home or during
                                      activities)
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Monitoring & Risk Assessment</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      To check how well BP medications are
                                      working throughout the day
                                    </li>
                                    <li>
                                      To detect nocturnal hypertension (high BP
                                      during sleep)
                                    </li>
                                    <li>
                                      To evaluate BP fluctuations in diabetic or
                                      kidney patients
                                    </li>
                                    <li>
                                      To assess cardiovascular risk in patients
                                      with obesity, smoking, or family history
                                      of heart disease
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Special Clinical Needs</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Resistant hypertension (high BP despite
                                      multiple medicines)
                                    </li>
                                    <li>
                                      Hypertensive patients with dizziness,
                                      fainting, or palpitations
                                    </li>
                                    <li>
                                      Pre-surgical evaluation and long-term
                                      monitoring in cardiac patients
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why ABPM is Important?</b>
                            </p>
                            <p>
                              <b>Accurate Diagnosis:</b> Provides 24-hour blood
                              pressure trends, not just single readings.
                            </p>
                            <p>
                              <b>Early Detection:</b> Identifies hidden
                              hypertension before complications develop.
                            </p>
                            <p>
                              <b>Better Treatment:</b> Helps doctors adjust
                              medications according to day/night BP patterns.
                            </p>
                            <p>
                              <b>Prevention:</b> Reduces risk of stroke, heart
                              attack, kidney disease, and other
                              hypertension-related problems.
                            </p>
                            <p>
                              <b>Lifestyle Correlation:</b> Shows how work,
                              stress, activity, and sleep affect BP.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science ABPM Service?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we provide advanced ABPM
                              testing at your doorstep with expert-certified
                              reporting and specialist support.
                            </p>
                            <p>
                              🕑 24 × 7 Service – Anytime, anywhere – no need to
                              visit clinics or hospitals.
                            </p>
                            <p>
                              🏠 Doorstep Convenience – ABPM setup at home,
                              office, clinic, hospital, or diagnostic centre.
                            </p>
                            <p>
                              👨‍⚕ Cardiologist Certified Reports – Every ABPM
                              result is analyzed and validated by an expert
                              cardiologist.
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Direct guidance
                              from a doctor after your test.
                            </p>
                            <p>
                              ⚡ Portable & Comfortable Devices – Lightweight,
                              easy-to-wear monitors that don’t interfere with
                              daily routine.
                            </p>
                            <p>
                              🔒 Confidential & Trusted – Secure data handling
                              and report sharing.
                            </p>
                            <p>
                              ❤ Patient-Centered Care – No travel, no waiting,
                              just accurate results from the comfort of your
                              home.
                            </p>
                            <p>
                              <b>How Our ABPM Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Test:</b> Call or book online for
                              ABPM at your preferred location.
                            </p>
                            <p>
                              <b>2. Doorstep Visit:</b> Our trained technician
                              fits a portable BP monitor to your arm, connected
                              to a small recording device.
                            </p>
                            <p>
                              <b>3. Continuous Monitoring:</b> The device
                              automatically records your BP at regular intervals
                              (every 15–30 minutes during the day, every 30–60
                              minutes at night) over 24 hours.
                            </p>
                            <p>
                              <b>4. Data Collection:</b> After the monitoring
                              period, the device is collected by our team.
                            </p>
                            <p>
                              <b>5. Specialist Review:</b> The data is analyzed
                              and certified by a cardiologist.
                            </p>
                            <p>
                              <b>6. Report Delivery:</b> Certified report is
                              delivered via WhatsApp, Email, or as a printed
                              copy.
                            </p>
                            <p>
                              <b>6. Tele-Consultation:</b> Discuss your results
                              with a specialist doctor for interpretation and
                              treatment advice.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Redefining Blood Pressure
                                Care
                              </b>
                            </p>
                            <p>
                              With 24/7 doorstep ABPM testing,
                              cardiologist-certified reports, and
                              tele-consultation support, Winbri Life Science
                              ensures accurate hypertension diagnosis and
                              management – anytime, anywhere.
                            </p>
                            <p>
                              💙 Track Better. Treat Better. Live Better – With
                              Winbri Life Science. 💙
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-md-none d-block mb-3">
                        {showMore ? (
                          <div className="news-text">
                            <div className="row">
                              <div className="col-12">
                                <p className="mt-3">
                                  <b>Indications – When is ABPM Needed?</b>
                                </p>
                                <div className="row">
                                  <div className="col-md-4">
                                    <p>
                                      <b>
                                        1. Suspected or Confirmed Hypertension
                                      </b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          To confirm a diagnosis of high blood
                                          pressure
                                        </li>
                                        <li>
                                          To detect “white coat hypertension”
                                          (high BP only at clinic due to stress)
                                        </li>
                                        <li>
                                          To detect “masked hypertension”
                                          (normal in clinic but high at home or
                                          during activities)
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>2. Monitoring & Risk Assessment</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          To check how well BP medications are
                                          working throughout the day
                                        </li>
                                        <li>
                                          To detect nocturnal hypertension (high
                                          BP during sleep)
                                        </li>
                                        <li>
                                          To evaluate BP fluctuations in
                                          diabetic or kidney patients
                                        </li>
                                        <li>
                                          To assess cardiovascular risk in
                                          patients with obesity, smoking, or
                                          family history of heart disease
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>3. Special Clinical Needs</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Resistant hypertension (high BP
                                          despite multiple medicines)
                                        </li>
                                        <li>
                                          Hypertensive patients with dizziness,
                                          fainting, or palpitations
                                        </li>
                                        <li>
                                          Pre-surgical evaluation and long-term
                                          monitoring in cardiac patients
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why ABPM is Important?</b>
                                </p>
                                <p>
                                  <b>Accurate Diagnosis:</b> Provides 24-hour
                                  blood pressure trends, not just single
                                  readings.
                                </p>
                                <p>
                                  <b>Early Detection:</b> Identifies hidden
                                  hypertension before complications develop.
                                </p>
                                <p>
                                  <b>Better Treatment:</b> Helps doctors adjust
                                  medications according to day/night BP
                                  patterns.
                                </p>
                                <p>
                                  <b>Prevention:</b> Reduces risk of stroke,
                                  heart attack, kidney disease, and other
                                  hypertension-related problems.
                                </p>
                                <p>
                                  <b>Lifestyle Correlation:</b> Shows how work,
                                  stress, activity, and sleep affect BP.
                                </p>
                                <p>
                                  <b>
                                    Why Choose Winbri Life Science ABPM Service?
                                  </b>
                                </p>
                                <p>
                                  At Winbri Life Science, we provide advanced
                                  ABPM testing at your doorstep with
                                  expert-certified reporting and specialist
                                  support.
                                </p>
                                <p>
                                  🕑 24 × 7 Service – Anytime, anywhere – no
                                  need to visit clinics or hospitals.
                                </p>
                                <p>
                                  🏠 Doorstep Convenience – ABPM setup at home,
                                  office, clinic, hospital, or diagnostic
                                  centre.
                                </p>
                                <p>
                                  👨‍⚕ Cardiologist Certified Reports – Every
                                  ABPM result is analyzed and validated by an
                                  expert cardiologist.
                                </p>
                                <p>
                                  📞 Tele-Consultation Support – Direct guidance
                                  from a doctor after your test.
                                </p>
                                <p>
                                  ⚡ Portable & Comfortable Devices –
                                  Lightweight, easy-to-wear monitors that don’t
                                  interfere with daily routine.
                                </p>
                                <p>
                                  🔒 Confidential & Trusted – Secure data
                                  handling and report sharing.
                                </p>
                                <p>
                                  ❤ Patient-Centered Care – No travel, no
                                  waiting, just accurate results from the
                                  comfort of your home.
                                </p>
                                <p>
                                  <b>How Our ABPM Service Works?</b>
                                </p>
                                <p>
                                  <b>1. Book Your Test:</b> Call or book online
                                  for ABPM at your preferred location.
                                </p>
                                <p>
                                  <b>2. Doorstep Visit:</b> Our trained
                                  technician fits a portable BP monitor to your
                                  arm, connected to a small recording device.
                                </p>
                                <p>
                                  <b>3. Continuous Monitoring:</b> The device
                                  automatically records your BP at regular
                                  intervals (every 15–30 minutes during the day,
                                  every 30–60 minutes at night) over 24 hours.
                                </p>
                                <p>
                                  <b>4. Data Collection:</b> After the
                                  monitoring period, the device is collected by
                                  our team.
                                </p>
                                <p>
                                  <b>5. Specialist Review:</b> The data is
                                  analyzed and certified by a cardiologist.
                                </p>
                                <p>
                                  <b>6. Report Delivery:</b> Certified report is
                                  delivered via WhatsApp, Email, or as a printed
                                  copy.
                                </p>
                                <p>
                                  <b>6. Tele-Consultation:</b> Discuss your
                                  results with a specialist doctor for
                                  interpretation and treatment advice.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science – Redefining Blood
                                    Pressure Care
                                  </b>
                                </p>
                                <p>
                                  With 24/7 doorstep ABPM testing,
                                  cardiologist-certified reports, and
                                  tele-consultation support, Winbri Life Science
                                  ensures accurate hypertension diagnosis and
                                  management – anytime, anywhere.
                                </p>
                                <p>
                                  💙 Track Better. Treat Better. Live Better –
                                  With Winbri Life Science. 💙
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                        <span
                          onClick={toggleReadMore}
                          id="myBtnrb"
                          className="readMore text-primary fs-1"
                        >
                          {showMore ? "Read less" : "Read more"}
                        </span>
                      </div>

                      <div className="row mt-md-3" id="book-appointment">
                        <div className="col-lg-6 col-12">
                          <div className="form-col">
                            <div className="inner-form">
                              <h2>We are Here to Help!</h2>
                              <p>Get instant call back in few mins</p>
                              <form
                                action="https://www.healthians.com/callBackLead"
                                id="getACallBackModal_form"
                                name="add_address_form"
                                className="form-horizontal"
                                method="post"
                              >
                                <input
                                  type="text"
                                  placeholder="Full Name*"
                                  name="name"
                                  id="name"
                                  className="form-control"
                                  required=""
                                />
                                <input
                                  type="tel"
                                  placeholder="Enter 10-digit mobile no.*"
                                  minLength={10}
                                  maxLength={10}
                                  name="mobile"
                                  id="mobile"
                                  className="form-control"
                                  required=""
                                />
                                <input
                                  type="text"
                                  placeholder="City*"
                                  name="city"
                                  id="city"
                                  className="form-control"
                                  required=""
                                />
                                <div className="form-group">
                                  <textarea
                                    name="message"
                                    className="form-control"
                                    placeholder="Write Your Message Here....."
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="doctor-fee">
                                  <div className="book-appoint">
                                    <button className="book_consult_btn">
                                      Book an Appointment
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-12 d-md-block d-none">
                          <div className="appointment-image">
                            <img
                              src="/assets/images/contact-img.webp"
                              alt="#"
                            />
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

        <AllServices service={"abpm"} />
      </>

      <HomeFooter />
    </>
  );
}

export default ABPMService;
