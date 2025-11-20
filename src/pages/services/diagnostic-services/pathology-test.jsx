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

function PathologyService() {
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
                  <h2>Doorstep Pathology / Lab Test</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Pathology / Lab Test</li>
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
                                src="/assets/images/services/pathology.JPG"
                                alt="#"
                              />
                            </div>
                            <div className="news-head">
                              <img
                                src="/assets/images/services/pathology-2.JPG"
                                alt="#"
                                className="service-img"
                              />
                            </div>
                          </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              Pathology / Lab Test at Your Doorstep
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              Pathology Tests are medical diagnostic tests
                              performed on blood, urine, stool, or body fluids
                              to help doctors detect, diagnose, and monitor
                              various health conditions.
                            </p>
                            <p>
                              From routine health check-ups to advanced
                              disease-specific investigations, pathology plays a
                              central role in understanding your body’s health
                              status, detecting illnesses early, and guiding
                              treatment decisions.
                            </p>
                            <p>
                              At Winbri Life Science, we provide pathology
                              sample collection at your doorstep with
                              Pathologist-certified reports and specialist
                              tele-consultation support.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>
                                Indications – When are Pathology Tests Needed?
                              </b>
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <p>
                                  <b>
                                    1. Routine & Preventive Health Check-ups
                                  </b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Annual or pre-employment health screenings
                                    </li>
                                    <li>
                                      Monitoring general wellness and organ
                                      function
                                    </li>
                                    <li>
                                      Lifestyle diseases screening (diabetes,
                                      hypertension, obesity)
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>2. Symptom-Based Investigations</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Fatigue, weakness, unexplained weight loss
                                    </li>
                                    <li>Fever, infections, or inflammation</li>
                                    <li>
                                      Persistent cough, digestive issues, or
                                      urinary complaints
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>3. Chronic Disease Monitoring</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Diabetes (HbA1c, blood sugar tests)</li>
                                    <li>
                                      Heart disease (lipid profile, cardiac
                                      markers)
                                    </li>
                                    <li>
                                      Kidney function (creatinine, urea,
                                      electrolytes)
                                    </li>
                                    <li>Liver function (LFT tests)</li>
                                    <li>
                                      Thyroid disorders (T3, T4, TSH tests)
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>4. Specialized Needs</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Cancer marker tests</li>
                                    <li>Allergy profiles</li>
                                    <li>Hormonal studies</li>
                                    <li>
                                      Pre-surgical and post-surgical
                                      investigations
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why Pathology Tests are Important?</b>
                            </p>
                            <p>
                              <b>Early Detection:</b> Identifies hidden diseases
                              before symptoms appear.
                            </p>
                            <p>
                              <b>Accurate Diagnosis:</b> Provides doctors with
                              essential insights for correct treatment.
                            </p>
                            <p>
                              <b>Monitoring Health:</b> Helps track ongoing
                              conditions and treatment effectiveness.
                            </p>
                            <p>
                              <b>Preventive Care:</b> Regular tests reduce risk
                              of complications in high-risk patients.
                            </p>
                            <p>
                              <b>Personalized Treatment:</b> Guides lifestyle
                              modifications and therapy adjustments.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science Pathology
                                Service?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we combine accuracy,
                              convenience, and expert-certified reporting for
                              your health.
                            </p>
                            <p>🕑 24 × 7 × 365 Service – Anytime, anywhere.</p>
                            <p>
                              🏠 Doorstep Sample Collection – At your home,
                              office, clinic, hospital, or diagnostic centre.
                            </p>
                            <p>
                              👨‍⚕ Pathologist-Certified Reports – Every test
                              result is reviewed by an experienced pathologist.
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Discuss your
                              reports with a qualified doctor.
                            </p>
                            <p>
                              ⚡ Wide Range of Tests – From routine blood sugar
                              to advanced diagnostic panels.
                            </p>
                            <p>
                              🔒 Confidential & Secure – Safe collection,
                              handling, and delivery of your results.
                            </p>
                            <p>
                              ❤ Patient-Centered Care – Hassle-free, no waiting
                              at labs, with reports directly shared digitally.
                            </p>
                            <p>
                              <b>How Our Pathology Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Test:</b> Call or book online for
                              pathology sample collection.
                            </p>
                            <p>
                              <b>2. Doorstep Setup:</b> Our trained phlebotomist
                              arrives at your location to collect blood, urine,
                              or other required samples.
                            </p>
                            <p>
                              <b>3. Sample Transport:</b> Collected samples are
                              safely transported under proper conditions to our
                              partner labs.
                            </p>
                            <p>
                              <b>4. Lab Analysis:</b> Tests are processed with
                              advanced equipment for accurate results.
                            </p>
                            <p>
                              <b>5. Specialist Review:</b> Reports are certified
                              by an experienced pathologist.
                            </p>
                            <p>
                              <b>6. Report Delivery:</b> Reports are delivered
                              via WhatsApp, Email, or printed copy.
                            </p>
                            <p>
                              <b>7. Tele-Consultation:</b> Discuss your test
                              results with a doctor for interpretation and next
                              steps.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Reliable Diagnostics at
                                Your Doorstep
                              </b>
                            </p>
                            <p>
                              With 24/7 doorstep pathology services,
                              pathologist-certified reports, and
                              tele-consultation support, Winbri Life Science
                              ensures timely diagnosis, preventive health care,
                              and expert guidance – anytime, anywhere.
                            </p>
                            <p>
                              💙 Right Test. Right Diagnosis. Right Care – With
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
                                  <b>
                                    Indications – When are Pathology Tests
                                    Needed?
                                  </b>
                                </p>
                                <div className="row">
                                  <div className="col-md-6">
                                    <p>
                                      <b>
                                        1. Routine & Preventive Health Check-ups
                                      </b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Annual or pre-employment health
                                          screenings
                                        </li>
                                        <li>
                                          Monitoring general wellness and organ
                                          function
                                        </li>
                                        <li>
                                          Lifestyle diseases screening
                                          (diabetes, hypertension, obesity)
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p>
                                      <b>2. Symptom-Based Investigations</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Fatigue, weakness, unexplained weight
                                          loss
                                        </li>
                                        <li>
                                          Fever, infections, or inflammation
                                        </li>
                                        <li>
                                          Persistent cough, digestive issues, or
                                          urinary complaints
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p>
                                      <b>3. Chronic Disease Monitoring</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Diabetes (HbA1c, blood sugar tests)
                                        </li>
                                        <li>
                                          Heart disease (lipid profile, cardiac
                                          markers)
                                        </li>
                                        <li>
                                          Kidney function (creatinine, urea,
                                          electrolytes)
                                        </li>
                                        <li>Liver function (LFT tests)</li>
                                        <li>
                                          Thyroid disorders (T3, T4, TSH tests)
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p>
                                      <b>4. Specialized Needs</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>Cancer marker tests</li>
                                        <li>Allergy profiles</li>
                                        <li>Hormonal studies</li>
                                        <li>
                                          Pre-surgical and post-surgical
                                          investigations
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why Pathology Tests are Important?</b>
                                </p>
                                <p>
                                  <b>Early Detection:</b> Identifies hidden
                                  diseases before symptoms appear.
                                </p>
                                <p>
                                  <b>Accurate Diagnosis:</b> Provides doctors
                                  with essential insights for correct treatment.
                                </p>
                                <p>
                                  <b>Monitoring Health:</b> Helps track ongoing
                                  conditions and treatment effectiveness.
                                </p>
                                <p>
                                  <b>Preventive Care:</b> Regular tests reduce
                                  risk of complications in high-risk patients.
                                </p>
                                <p>
                                  <b>Personalized Treatment:</b> Guides
                                  lifestyle modifications and therapy
                                  adjustments.
                                </p>
                                <p>
                                  <b>
                                    Why Choose Winbri Life Science Pathology
                                    Service?
                                  </b>
                                </p>
                                <p>
                                  At Winbri Life Science, we combine accuracy,
                                  convenience, and expert-certified reporting
                                  for your health.
                                </p>
                                <p>
                                  🕑 24 × 7 × 365 Service – Anytime, anywhere.
                                </p>
                                <p>
                                  🏠 Doorstep Sample Collection – At your home,
                                  office, clinic, hospital, or diagnostic
                                  centre.
                                </p>
                                <p>
                                  👨‍⚕ Pathologist-Certified Reports – Every
                                  test result is reviewed by an experienced
                                  pathologist.
                                </p>
                                <p>
                                  📞 Tele-Consultation Support – Discuss your
                                  reports with a qualified doctor.
                                </p>
                                <p>
                                  ⚡ Wide Range of Tests – From routine blood
                                  sugar to advanced diagnostic panels.
                                </p>
                                <p>
                                  🔒 Confidential & Secure – Safe collection,
                                  handling, and delivery of your results.
                                </p>
                                <p>
                                  ❤ Patient-Centered Care – Hassle-free, no
                                  waiting at labs, with reports directly shared
                                  digitally.
                                </p>
                                <p>
                                  <b>How Our Pathology Service Works?</b>
                                </p>
                                <p>
                                  <b>1. Book Your Test:</b> Call or book online
                                  for pathology sample collection.
                                </p>
                                <p>
                                  <b>2. Doorstep Setup:</b> Our trained
                                  phlebotomist arrives at your location to
                                  collect blood, urine, or other required
                                  samples.
                                </p>
                                <p>
                                  <b>3. Sample Transport:</b> Collected samples
                                  are safely transported under proper conditions
                                  to our partner labs.
                                </p>
                                <p>
                                  <b>4. Lab Analysis:</b> Tests are processed
                                  with advanced equipment for accurate results.
                                </p>
                                <p>
                                  <b>5. Specialist Review:</b> Reports are
                                  certified by an experienced pathologist.
                                </p>
                                <p>
                                  <b>6. Report Delivery:</b> Reports are
                                  delivered via WhatsApp, Email, or printed
                                  copy.
                                </p>
                                <p>
                                  <b>7. Tele-Consultation:</b> Discuss your test
                                  results with a doctor for interpretation and
                                  next steps.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science – Reliable Diagnostics
                                    at Your Doorstep
                                  </b>
                                </p>
                                <p>
                                  With 24/7 doorstep pathology services,
                                  pathologist-certified reports, and
                                  tele-consultation support, Winbri Life Science
                                  ensures timely diagnosis, preventive health
                                  care, and expert guidance – anytime, anywhere.
                                </p>
                                <p>
                                  💙 Right Test. Right Diagnosis. Right Care –
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

        <AllServices service={"pathology"} />
      </>

      <HomeFooter />
    </>
  );
}

export default PathologyService;
