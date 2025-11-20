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

function TwoDEchoTestService() {
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
                  <h2>2D Echocardiography (2D Echo) Test at Center</h2>
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
                      2D Echocardiography (2D Echo) Test
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
                                src="/assets/images/services/2d-echo.JPG"
                                alt="#"
                              />
                            </div>
                          </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              2D Echocardiography (2D Echo) Test
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              2D Echocardiography (2D Echo) is a non-invasive,
                              ultrasound-based imaging test used to visualize
                              the heart in real-time. It produces
                              two-dimensional moving images of the heart that
                              allow doctors to assess:
                            </p>
                            <p>
                              <ul className="list-style-unset pl-3">
                                <li>
                                  The size and structure of heart chambers
                                </li>
                                <li>
                                  Pumping function (how well the heart contracts
                                  and relaxes)
                                </li>
                                <li>
                                  Valves – movement, opening, and closing
                                  efficiency
                                </li>
                                <li>Blood flow patterns inside the heart</li>
                                <li>
                                  Presence of clots, fluid, or congenital
                                  defects
                                </li>
                              </ul>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              It is considered a gold standard diagnostic tool
                              for evaluating heart health and detecting early
                              signs of cardiovascular disease.
                            </p>
                            <p>
                              At Winbri Life Science, we provide 2D
                              Echocardiography with cardiologist-certified
                              reports and in-person consultation with an expert
                              cardiologist at our center.
                            </p>
                            <p>
                              <b>
                                Indications – When is 2D Echocardiography
                                Needed?
                              </b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Cardiac Symptoms</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Chest pain or discomfort</li>
                                    <li>
                                      Shortness of breath (especially during
                                      exertion or lying down)
                                    </li>
                                    <li>Palpitations or irregular heartbeat</li>
                                    <li>
                                      Swelling in legs, ankles, or abdomen
                                    </li>
                                    <li>
                                      Unexplained fatigue, dizziness, or
                                      fainting
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Medical Conditions</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Coronary Artery Disease (heart attack,
                                      angina)
                                    </li>
                                    <li>
                                      Heart Failure (to assess pumping function
                                      / ejection fraction)
                                    </li>
                                    <li>
                                      Valvular Heart Disease (narrowing or
                                      leakage of heart valves)
                                    </li>
                                    <li>
                                      Cardiomyopathy (weakened or thickened
                                      heart muscle)
                                    </li>
                                    <li>Congenital Heart Defects</li>
                                    <li>
                                      Pericardial Effusion (fluid around the
                                      heart)
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Monitoring & Follow-up</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      After cardiac surgery or stent placement
                                    </li>
                                    <li>
                                      Monitoring patients with pacemakers or
                                      implanted devices
                                    </li>
                                    <li>
                                      Regular follow-up for hypertensive or
                                      diabetic patients
                                    </li>
                                    <li>
                                      Cancer patients receiving chemotherapy (to
                                      check for heart damage)
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why 2D Echocardiography is Important?</b>
                            </p>
                            <p>
                              <b>Non-Invasive & Safe:</b> No radiation exposure,
                              simple ultrasound technique.
                            </p>
                            <p>
                              <b>Early Detection:</b> Identifies heart disease
                              before severe complications.
                            </p>
                            <p>
                              <b>Comprehensive Cardiac Evaluation:</b> Provides
                              real-time visualization of heart structures and
                              function.
                            </p>
                            <p>
                              <b>Guides Treatment:</b> Helps cardiologists
                              decide on medication, surgery, or lifestyle
                              modifications.
                            </p>
                            <p>
                              <b>Prognosis Monitoring:</b> Tracks disease
                              progression and treatment effectiveness.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science 2D Echo Service?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we provide high-quality
                              cardiac imaging and expert consultation under one
                              roof:
                            </p>
                            <p>
                              🩺 Expert Cardiologists – Every test is performed
                              and interpreted by experienced cardiologists.
                            </p>
                            <p>
                              🏥 Comprehensive Service – 2D Echo + Certified
                              Report + Cardiologist Consultation in one visit.
                            </p>
                            <p>
                              ⚡ Advanced Equipment – High-resolution ultrasound
                              systems for accurate imaging.
                            </p>
                            <p>
                              👨‍⚕ Doctor-Certified Reports – No automated or
                              technician-only reporting – only
                              specialist-verified results.
                            </p>
                            <p>
                              📞 Personalized Guidance – Consultation with
                              cardiologist to explain findings and suggest
                              treatment.
                            </p>
                            <p>
                              🕑 Quick & Hassle-Free – Same-day report and
                              consultation, no long waiting times.
                            </p>
                            <p>
                              ❤ Patient-Centric Care – Safe, comfortable, and
                              reliable testing environment.
                            </p>
                            <p>
                              <b>How Our 2D Echocardiography Service Works?</b>
                            </p>
                            <p>
                              <b>1. Booking & Preparation:</b> Schedule an
                              appointment at our center. No special preparation
                              is usually required.
                            </p>
                            <p>
                              <b>2. 2D Echo Procedure:</b> You lie comfortably
                              on an examination table. A gel is applied to the
                              chest, and a handheld probe (transducer) is moved
                              over the area. Sound waves create real-time images
                              of your heart on the screen. The test is painless
                              and usually takes 20–30 minutes.
                            </p>
                            <p>
                              <b>3. Cardiologist Review:</b> The test is
                              reviewed by a specialist cardiologist, who
                              prepares a certified report.
                            </p>
                            <p>
                              <b>4. Consultation:</b> Immediately after the
                              test, you meet the cardiologist to discuss
                              findings, diagnosis, and next steps.
                            </p>
                            <p>
                              <b>5. Follow-Up:</b> Based on results, further
                              tests, medications, or lifestyle advice may be
                              recommended.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Your Trusted Partner in
                                Cardiac Care
                              </b>
                            </p>
                            <p>
                              With specialist-certified 2D Echocardiography and
                              on-site cardiologist consultation, Winbri Life
                              Science ensures accurate diagnosis, expert
                              guidance, and complete heart care – all under one
                              roof.
                            </p>
                            <p>
                              💙 See Your Heart. Know Your Heart. Protect Your
                              Heart – with Winbri Life Science. 💙
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
                                  It is considered a gold standard diagnostic
                                  tool for evaluating heart health and detecting
                                  early signs of cardiovascular disease.
                                </p>
                                <p>
                                  At Winbri Life Science, we provide 2D
                                  Echocardiography with cardiologist-certified
                                  reports and in-person consultation with an
                                  expert cardiologist at our center.
                                </p>
                                <p>
                                  <b>
                                    Indications – When is 2D Echocardiography
                                    Needed?
                                  </b>
                                </p>
                                <div className="row">
                                  <div className="col-md-4">
                                    <p>
                                      <b>1. Cardiac Symptoms</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>Chest pain or discomfort</li>
                                        <li>
                                          Shortness of breath (especially during
                                          exertion or lying down)
                                        </li>
                                        <li>
                                          Palpitations or irregular heartbeat
                                        </li>
                                        <li>
                                          Swelling in legs, ankles, or abdomen
                                        </li>
                                        <li>
                                          Unexplained fatigue, dizziness, or
                                          fainting
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>2. Medical Conditions</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Coronary Artery Disease (heart attack,
                                          angina)
                                        </li>
                                        <li>
                                          Heart Failure (to assess pumping
                                          function / ejection fraction)
                                        </li>
                                        <li>
                                          Valvular Heart Disease (narrowing or
                                          leakage of heart valves)
                                        </li>
                                        <li>
                                          Cardiomyopathy (weakened or thickened
                                          heart muscle)
                                        </li>
                                        <li>Congenital Heart Defects</li>
                                        <li>
                                          Pericardial Effusion (fluid around the
                                          heart)
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>3. Monitoring & Follow-up</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          After cardiac surgery or stent
                                          placement
                                        </li>
                                        <li>
                                          Monitoring patients with pacemakers or
                                          implanted devices
                                        </li>
                                        <li>
                                          Regular follow-up for hypertensive or
                                          diabetic patients
                                        </li>
                                        <li>
                                          Cancer patients receiving chemotherapy
                                          (to check for heart damage)
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why 2D Echocardiography is Important?</b>
                                </p>
                                <p>
                                  <b>Non-Invasive & Safe:</b> No radiation
                                  exposure, simple ultrasound technique.
                                </p>
                                <p>
                                  <b>Early Detection:</b> Identifies heart
                                  disease before severe complications.
                                </p>
                                <p>
                                  <b>Comprehensive Cardiac Evaluation:</b>{" "}
                                  Provides real-time visualization of heart
                                  structures and function.
                                </p>
                                <p>
                                  <b>Guides Treatment:</b> Helps cardiologists
                                  decide on medication, surgery, or lifestyle
                                  modifications.
                                </p>
                                <p>
                                  <b>Prognosis Monitoring:</b> Tracks disease
                                  progression and treatment effectiveness.
                                </p>
                                <p>
                                  <b>
                                    Why Choose Winbri Life Science 2D Echo
                                    Service?
                                  </b>
                                </p>
                                <p>
                                  At Winbri Life Science, we provide
                                  high-quality cardiac imaging and expert
                                  consultation under one roof:
                                </p>
                                <p>
                                  🩺 Expert Cardiologists – Every test is
                                  performed and interpreted by experienced
                                  cardiologists.
                                </p>
                                <p>
                                  🏥 Comprehensive Service – 2D Echo + Certified
                                  Report + Cardiologist Consultation in one
                                  visit.
                                </p>
                                <p>
                                  ⚡ Advanced Equipment – High-resolution
                                  ultrasound systems for accurate imaging.
                                </p>
                                <p>
                                  👨‍⚕ Doctor-Certified Reports – No automated
                                  or technician-only reporting – only
                                  specialist-verified results.
                                </p>
                                <p>
                                  📞 Personalized Guidance – Consultation with
                                  cardiologist to explain findings and suggest
                                  treatment.
                                </p>
                                <p>
                                  🕑 Quick & Hassle-Free – Same-day report and
                                  consultation, no long waiting times.
                                </p>
                                <p>
                                  ❤ Patient-Centric Care – Safe, comfortable,
                                  and reliable testing environment.
                                </p>
                                <p>
                                  <b>
                                    How Our 2D Echocardiography Service Works?
                                  </b>
                                </p>
                                <p>
                                  <b>1. Booking & Preparation:</b> Schedule an
                                  appointment at our center. No special
                                  preparation is usually required.
                                </p>
                                <p>
                                  <b>2. 2D Echo Procedure:</b> You lie
                                  comfortably on an examination table. A gel is
                                  applied to the chest, and a handheld probe
                                  (transducer) is moved over the area. Sound
                                  waves create real-time images of your heart on
                                  the screen. The test is painless and usually
                                  takes 20–30 minutes.
                                </p>
                                <p>
                                  <b>3. Cardiologist Review:</b> The test is
                                  reviewed by a specialist cardiologist, who
                                  prepares a certified report.
                                </p>
                                <p>
                                  <b>4. Consultation:</b> Immediately after the
                                  test, you meet the cardiologist to discuss
                                  findings, diagnosis, and next steps.
                                </p>
                                <p>
                                  <b>5. Follow-Up:</b> Based on results, further
                                  tests, medications, or lifestyle advice may be
                                  recommended.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science – Your Trusted Partner
                                    in Cardiac Care
                                  </b>
                                </p>
                                <p>
                                  With specialist-certified 2D Echocardiography
                                  and on-site cardiologist consultation, Winbri
                                  Life Science ensures accurate diagnosis,
                                  expert guidance, and complete heart care – all
                                  under one roof.
                                </p>
                                <p>
                                  💙 See Your Heart. Know Your Heart. Protect
                                  Your Heart – with Winbri Life Science. 💙
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

        <AllServices service={"eco"} />
      </>

      <HomeFooter />
    </>
  );
}

export default TwoDEchoTestService;
