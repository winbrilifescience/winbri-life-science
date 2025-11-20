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

function ECGService() {
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
                  <h2>Doorstep ECG Test</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">ECG Test</li>
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
                                src="/assets/images/services/ecg.JPG"
                                alt="#"
                              />
                            </div>
                            <div className="news-head">
                              <img
                                src="/assets/images/services/ecg-2.JPG"
                                alt="#"
                              />
                            </div>
                          </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              Our Doorstep ECG Service
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              An Electrocardiogram (ECG or EKG) is a painless,
                              non-invasive test that records the electrical
                              activity of the heart. Each heartbeat is triggered
                              by an electrical impulse, and an ECG captures
                              these signals to create a graphical chart.
                            </p>
                            <p>
                              <b>This chart allows doctors to assess:</b>
                              <ul className="list-style-unset pl-3">
                                <li>Heart rate and rhythm</li>
                                <li>Blood supply to the heart</li>
                                <li>Enlargement of heart chambers</li>
                                <li>Past or ongoing heart attack</li>
                                <li>
                                  Effect of medications or pacemaker devices
                                </li>
                              </ul>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-2">
                              It is one of the most important first-line
                              diagnostic tools in cardiology and is often the
                              first step in evaluating chest pain or
                              heart-related symptoms.
                            </p>
                            <p>
                              <b>Indications - When Should You Get an ECG?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Symptoms that Require ECG</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Chest pain, heaviness, or pressure</li>
                                    <li>Palpitations or irregular heartbeat</li>
                                    <li>
                                      Shortness of breath or unexplained
                                      tiredness
                                    </li>
                                    <li>Dizziness, fainting, or weakness</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Risk Factors & Preventive Screening</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Hypertension, diabetes, high cholesterol
                                    </li>
                                    <li>Family history of heart disease</li>
                                    <li>Obesity and sedentary lifestyle</li>
                                    <li>
                                      Heavy smoking, alcohol use, or chronic
                                      stress
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Medical Needs</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Pre-surgical heart check-up</li>
                                    <li>
                                      Monitoring during or after hospital
                                      treatment
                                    </li>
                                    <li>
                                      Regular follow-up for known heart patients
                                    </li>
                                    <li>
                                      Suspected heart attack or emergency casess
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why ECG is Important?</b>
                            </p>
                            <p>
                              <b>Early Detection:</b> Helps diagnose heart
                              rhythm disturbances, blocked arteries, or damage
                              to heart muscle.
                            </p>
                            <p>
                              <b>Life-Saving in Emergencies:</b> Quick test
                              during chest pain or suspected heart attack.
                            </p>
                            <p>
                              <b>Monitoring Treatment:</b> Tracks the effect of
                              medicines or pacemaker devices.
                            </p>
                            <p>
                              <b>Prevention:</b> Identifies hidden heart issues
                              before they become severe.
                            </p>
                            <p>
                              <b>Safe & Easy:</b> No injections, no pain, no
                              radiation - safe for all age groups.
                            </p>
                            <p>
                              <b>
                                Why Winbri Life Science ECG Service is Better?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we bring advanced
                              healthcare directly to your doorstep, ensuring
                              comfort, speed, and accuracy.
                            </p>
                            <p>
                              🕑 Always Available - 24 × 7 × 365 days, anytime,
                              anywhere.
                            </p>
                            <p>
                              🏠 Doorstep Service - ECG at your home, office,
                              clinic, hospital, or diagnostic centre
                            </p>
                            <p>
                              👨‍⚕ Certified by Cardiologists - Reports reviewed
                              and validated by experienced specialists.
                            </p>
                            <p>
                              📞 Tele-Consultation Support - Direct online
                              consultation with doctors after your test.
                            </p>
                            <p>
                              ⚡ Quick & Reliable - Test completed in just 10-15
                              minutes with fast report delivery.
                            </p>
                            <p>
                              🔒 Secure & Confidential - Patient reports handled
                              with utmost privacy.
                            </p>
                            <p>
                              ❤ Patient-Centric Care - No travel, no waiting, no
                              stress - healthcare at your convenience.
                            </p>
                            <p>
                              Unlike standard diagnostic centres, Winbri Life
                              Science combines doorstep testing with
                              cardiology-certified reporting and
                              teleconsultation, offering complete heart care in
                              one service.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Test:</b> Call us anytime or book
                              online for an ECG at your preferred time and
                              place.
                            </p>
                            <p>
                              <b>2. Doorstep Visit:</b> A trained healthcare
                              technician arrives with a portable ECG machine.
                            </p>
                            <p>
                              <b>3. ECG Test:</b> Electrodes are placed on the
                              chest, arms, and legs. The test is painless and
                              takes about 10-15 minutes.
                            </p>
                            <p>
                              <b>4. Specialist Review:</b> The ECG recording is
                              reviewed and certified by a cardiologist.
                            </p>
                            <p>
                              <b>5. Report Delivery:</b> Reports are delivered
                              quickly via WhatsApp, Email, or printed copy.
                            </p>
                            <p>
                              <b>6. Tele-Consultation:</b> Speak to a specialist
                              doctor online for interpretation and next steps.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science - Your Heart in Safe Hands
                              </b>
                            </p>
                            <p>
                              With round-the-clock ECG services,
                              cardiologist-certified reports, and
                              teleconsultation support, Winbri Life Science
                              ensures that top-quality heart care is always
                              available at your doorstep.
                            </p>
                            <p>
                              💙 Your health, our mission - Anytime. Anywhere.
                              Always. 💙
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-md-none d-block mb-3">
                        {showMore ? (
                          <div className="news-text">
                            <div className="row">
                              <div className="col-12">
                                <p className="mt-2">
                                  It is one of the most important first-line
                                  diagnostic tools in cardiology and is often
                                  the first step in evaluating chest pain or
                                  heart-related symptoms.
                                </p>
                                <p>
                                  <b>
                                    Indications - When Should You Get an ECG?
                                  </b>
                                </p>
                                <div className="row">
                                  <div className="col-md-4">
                                    <p>
                                      <b>1. Symptoms that Require ECG</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Chest pain, heaviness, or pressure
                                        </li>
                                        <li>
                                          Palpitations or irregular heartbeat
                                        </li>
                                        <li>
                                          Shortness of breath or unexplained
                                          tiredness
                                        </li>
                                        <li>
                                          Dizziness, fainting, or weakness
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>
                                        2. Risk Factors & Preventive Screening
                                      </b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Hypertension, diabetes, high
                                          cholesterol
                                        </li>
                                        <li>Family history of heart disease</li>
                                        <li>Obesity and sedentary lifestyle</li>
                                        <li>
                                          Heavy smoking, alcohol use, or chronic
                                          stress
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>3. Medical Needs</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>Pre-surgical heart check-up</li>
                                        <li>
                                          Monitoring during or after hospital
                                          treatment
                                        </li>
                                        <li>
                                          Regular follow-up for known heart
                                          patients
                                        </li>
                                        <li>
                                          Suspected heart attack or emergency
                                          casess
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why ECG is Important?</b>
                                </p>
                                <p>
                                  <b>Early Detection:</b> Helps diagnose heart
                                  rhythm disturbances, blocked arteries, or
                                  damage to heart muscle.
                                </p>
                                <p>
                                  <b>Life-Saving in Emergencies:</b> Quick test
                                  during chest pain or suspected heart attack.
                                </p>
                                <p>
                                  <b>Monitoring Treatment:</b> Tracks the effect
                                  of medicines or pacemaker devices.
                                </p>
                                <p>
                                  <b>Prevention:</b> Identifies hidden heart
                                  issues before they become severe.
                                </p>
                                <p>
                                  <b>Safe & Easy:</b> No injections, no pain, no
                                  radiation - safe for all age groups.
                                </p>
                                <p>
                                  <b>
                                    Why Winbri Life Science ECG Service is
                                    Better?
                                  </b>
                                </p>
                                <p>
                                  At Winbri Life Science, we bring advanced
                                  healthcare directly to your doorstep, ensuring
                                  comfort, speed, and accuracy.
                                </p>
                                <p>
                                  🕑 Always Available - 24 × 7 × 365 days,
                                  anytime, anywhere.
                                </p>
                                <p>
                                  🏠 Doorstep Service - ECG at your home,
                                  office, clinic, hospital, or diagnostic centre
                                </p>
                                <p>
                                  👨‍⚕ Certified by Cardiologists - Reports
                                  reviewed and validated by experienced
                                  specialists.
                                </p>
                                <p>
                                  📞 Tele-Consultation Support - Direct online
                                  consultation with doctors after your test.
                                </p>
                                <p>
                                  ⚡ Quick & Reliable - Test completed in just
                                  10-15 minutes with fast report delivery.
                                </p>
                                <p>
                                  🔒 Secure & Confidential - Patient reports
                                  handled with utmost privacy.
                                </p>
                                <p>
                                  ❤ Patient-Centric Care - No travel, no
                                  waiting, no stress - healthcare at your
                                  convenience.
                                </p>
                                <p>
                                  Unlike standard diagnostic centres, Winbri
                                  Life Science combines doorstep testing with
                                  cardiology-certified reporting and
                                  teleconsultation, offering complete heart care
                                  in one service.
                                </p>
                                <p>
                                  <b>How It Works?</b>
                                </p>
                                <p>
                                  <b>1. Book Your Test:</b> Call us anytime or
                                  book online for an ECG at your preferred time
                                  and place.
                                </p>
                                <p>
                                  <b>2. Doorstep Visit:</b> A trained healthcare
                                  technician arrives with a portable ECG
                                  machine.
                                </p>
                                <p>
                                  <b>3. ECG Test:</b> Electrodes are placed on
                                  the chest, arms, and legs. The test is
                                  painless and takes about 10-15 minutes.
                                </p>
                                <p>
                                  <b>4. Specialist Review:</b> The ECG recording
                                  is reviewed and certified by a cardiologist.
                                </p>
                                <p>
                                  <b>5. Report Delivery:</b> Reports are
                                  delivered quickly via WhatsApp, Email, or
                                  printed copy.
                                </p>
                                <p>
                                  <b>6. Tele-Consultation:</b> Speak to a
                                  specialist doctor online for interpretation
                                  and next steps.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science - Your Heart in Safe
                                    Hands
                                  </b>
                                </p>
                                <p>
                                  With round-the-clock ECG services,
                                  cardiologist-certified reports, and
                                  teleconsultation support, Winbri Life Science
                                  ensures that top-quality heart care is always
                                  available at your doorstep.
                                </p>
                                <p>
                                  💙 Your health, our mission - Anytime.
                                  Anywhere. Always. 💙
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

                      {/* <div className="row">
                        <div className="sortorder px-3">
                          <h2>Top Cardiology Doctors available</h2>
                          <div className="clearfix" />
                        </div>
                        <div className="col-lg-8 col-12">
                          <div className="minLeftSide">
                            <div className="">
                              <div className="clearfix" />
                              <div className="doctor-main-card">
                                <div className="row">
                                  <div className="col-md-8">
                                    <div className="head-doctor">
                                      <ul className="d-flex">
                                        <li>
                                          <div className="doc-imgrat text-center">
                                            <div className="doc-img">
                                              <img
                                                src="/assets/images/doctor/63cf67be55b85.jpg"
                                                alt="doctor"
                                                width="100%"
                                                height="100%"
                                              />
                                            </div>
                                            <div className="rating-div">
                                              15 Year of Exp.
                                            </div>
                                          </div>
                                        </li>
                                        <li className="doctor-desc">
                                          <a
                                            className="save_speciality"
                                            data-link_rewrite="Cardiology"
                                            href="https://www.healthians.com/online-doctor-consultation/dr-anandmanaklal-chopda-cardiology"
                                          >
                                            <h2>Dr. Anand Manaklal Chopda</h2>
                                          </a>
                                          <p className="rating_digit">
                                            3.5{" "}
                                            <span className="fa fa-star star-checked" />
                                          </p>
                                          <p>
                                            <span>
                                              M.B.B.S, DM - Cardiology
                                            </span>
                                          </p>
                                          <div className="language_known">
                                            <span>Language known:</span> Hindi,
                                            English
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-md-4 col-xs-12 doctor-consult-div">
                                    <div className="doctor-fee">
                                      <p className="consult_title">
                                        Consultation Fee
                                      </p>
                                      <p className="sale-price">
                                        ₹589 <span> ₹ 1098</span>
                                      </p>
                                      <div className="view-profile">
                                        <a
                                          className="save_speciality"
                                          data-symptom_link="cardiology"
                                          data-link_rewrite="Cardiology"
                                          href="https://www.healthians.com/online-doctor-consultation/dr-anandmanaklal-chopda-cardiology"
                                        >
                                          View Profile
                                        </a>
                                      </div>
                                      <div className="book-appoint">
                                        <button
                                          className="book_consult_btn"
                                          data-link_rewrite="dr-anandmanaklal-chopda-cardiology"
                                          data-price={589}
                                          data-doc_name="Dr. Anand Manaklal Chopda"
                                          data-mrp={1098}
                                          data-doc_id={2250}
                                          data-speciality="cardiology"
                                          data-symptom="cardiology"
                                          data-doc_degree="M.B.B.S, DM - Cardiology"
                                        >
                                          Book an Appointment
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      id="term-doctor-modal"
                                      className="modal fade"
                                      role="dialog"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              �
                                            </button>
                                          </div>
                                          <div className="modal-body">
                                            <div className="package-term">
                                              <h5>Terms &amp; Conditions</h5>
                                              1) You have to book a pathology
                                              test within 7 days of doctor
                                              consultation scheduled date to
                                              avail the cashback.
                                              <br />
                                              2) Cashback will be equal to
                                              Rs.199 or the doctor consultation
                                              charges whichever is lower.
                                              <br />
                                              3) Cashback will be credited to
                                              the
                                              <b>Healthians Wallet</b> post
                                              pathology (excluding Scans, COVID
                                              &amp; CGHS) report generation.
                                              <br />
                                              4) Cashback will be given only on
                                              the doctor consultation. (Not
                                              Dietitian Consultation)
                                              <br />
                                              5) Minimum order amount of
                                              pathology test should be Rs.1000
                                              (after tax and not including
                                              addon) to get the cashback. No
                                              pending amount should be there.
                                              <br />
                                              6) There is no restriction on the
                                              number of times a user can avail
                                              cashback.
                                              <br />
                                              7) Cashback will be credited based
                                              on customer phone number and not
                                              members.
                                              <br />
                                              8) This offer can be withdrawn
                                              anytime at sole discretion of the
                                              company with retrospective effect.
                                              <br />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="doctor-main-card">
                                <div className="row">
                                  <div className="col-md-8">
                                    <div className="head-doctor">
                                      <ul className="d-flex">
                                        <li>
                                          <div className="doc-imgrat text-center">
                                            <img
                                              src="/assets/images/doctor/6482b343cfee5.jpg"
                                              alt="doctor"
                                            />
                                            <div className="rating-div">
                                              32 Year of Exp.
                                            </div>
                                          </div>
                                        </li>
                                        <li className="doctor-desc">
                                          <a
                                            className="save_speciality"
                                            data-link_rewrite="Cardiology"
                                            href="https://www.healthians.com/online-doctor-consultation/dr-bhaskar-banik-cardiology"
                                          >
                                            <h2>Dr. Bhaskar Banik</h2>
                                          </a>
                                          <p className="rating_digit">
                                            5.0{" "}
                                            <span className="fa fa-star star-checked" />
                                          </p>
                                          <p>
                                            <span>
                                              M.B.B.S, Thyroid Disorders
                                            </span>
                                          </p>
                                          <div className="language_known">
                                            <span>Language known:</span> Hindi,
                                            English, Bengali
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-md-4 col-xs-12 doctor-consult-div">
                                    <div className="doctor-fee">
                                      <p className="consult_title">
                                        Consultation Fee
                                      </p>
                                      <p className="sale-price">
                                        ₹349 <span> ₹ 698</span>
                                      </p>
                                      <div className="view-profile">
                                        <a
                                          className="save_speciality"
                                          data-symptom_link="cardiology"
                                          data-link_rewrite="Cardiology"
                                          href="https://www.healthians.com/online-doctor-consultation/dr-bhaskar-banik-cardiology"
                                        >
                                          View Profile
                                        </a>
                                      </div>
                                      <div className="book-appoint">
                                        <button
                                          className="book_consult_btn"
                                          data-link_rewrite="dr-bhaskar-banik-cardiology"
                                          data-price={349}
                                          data-doc_name="Dr. Bhaskar Banik"
                                          data-mrp={698}
                                          data-doc_id={6153}
                                          data-speciality="cardiology"
                                          data-symptom="cardiology"
                                          data-doc_degree="M.B.B.S, Thyroid Disorders Management (Certificate Course), PGD, Diabetes Management (Certificate Course)"
                                        >
                                          Book an Appointment
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      id="term-doctor-modal"
                                      className="modal fade"
                                      role="dialog"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              �
                                            </button>
                                          </div>
                                          <div className="modal-body">
                                            <div className="package-term">
                                              <h5>Terms &amp; Conditions</h5>
                                              1) You have to book a pathology
                                              test within 7 days of doctor
                                              consultation scheduled date to
                                              avail the cashback.
                                              <br />
                                              2) Cashback will be equal to
                                              Rs.199 or the doctor consultation
                                              charges whichever is lower.
                                              <br />
                                              3) Cashback will be credited to
                                              the
                                              <b>Healthians Wallet</b> post
                                              pathology (excluding Scans, COVID
                                              &amp; CGHS) report generation.
                                              <br />
                                              4) Cashback will be given only on
                                              the doctor consultation. (Not
                                              Dietitian Consultation)
                                              <br />
                                              5) Minimum order amount of
                                              pathology test should be Rs.1000
                                              (after tax and not including
                                              addon) to get the cashback. No
                                              pending amount should be there.
                                              <br />
                                              6) There is no restriction on the
                                              number of times a user can avail
                                              cashback.
                                              <br />
                                              7) Cashback will be credited based
                                              on customer phone number and not
                                              members.
                                              <br />
                                              8) This offer can be withdrawn
                                              anytime at sole discretion of the
                                              company with retrospective effect.
                                              <br />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="doctor-main-card">
                                <div className="row">
                                  <div className="col-md-8">
                                    <div className="head-doctor">
                                      <ul className="d-flex">
                                        <li>
                                          <div className="doc-imgrat text-center">
                                            <img
                                              src="/assets/images/doctor/6412c88e80c8c.jpg"
                                              alt="doctor"
                                            />
                                            <div className="rating-div">
                                              26 Year of Exp.
                                            </div>
                                          </div>
                                        </li>
                                        <li className="doctor-desc">
                                          <a
                                            className="save_speciality"
                                            data-link_rewrite="Cardiology"
                                            href="https://www.healthians.com/online-doctor-consultation/dr-gautam-singh-cardiology"
                                          >
                                            <h2>Dr. Gautam Singh</h2>
                                          </a>
                                          <p>
                                            <span>M.B.B.S, M.D.</span>
                                          </p>
                                          <div className="language_known">
                                            <span>Language known:</span> Hindi,
                                            English
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-md-4 col-xs-12 doctor-consult-div">
                                    <div className="doctor-fee">
                                      <p className="consult_title">
                                        Consultation Fee
                                      </p>
                                      <p className="sale-price">
                                        ₹2199 <span> ₹ 4398</span>
                                      </p>
                                      <div className="view-profile">
                                        <a
                                          className="save_speciality"
                                          data-symptom_link="cardiology"
                                          data-link_rewrite="Cardiology"
                                          href="https://www.healthians.com/online-doctor-consultation/dr-gautam-singh-cardiology"
                                        >
                                          View Profile
                                        </a>
                                      </div>
                                      <div className="book-appoint">
                                        <button
                                          className="book_consult_btn"
                                          data-link_rewrite="dr-gautam-singh-cardiology"
                                          data-price={2199}
                                          data-doc_name="Dr. Gautam Singh"
                                          data-mrp={4398}
                                          data-doc_id={5681}
                                          data-speciality="cardiology"
                                          data-symptom="cardiology"
                                          data-doc_degree="M.B.B.S, M.D."
                                        >
                                          Book an Appointment
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      id="term-doctor-modal"
                                      className="modal fade"
                                      role="dialog"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                            >
                                              �
                                            </button>
                                          </div>
                                          <div className="modal-body">
                                            <div className="package-term">
                                              <h5>Terms &amp; Conditions</h5>
                                              1) You have to book a pathology
                                              test within 7 days of doctor
                                              consultation scheduled date to
                                              avail the cashback.
                                              <br />
                                              2) Cashback will be equal to
                                              Rs.199 or the doctor consultation
                                              charges whichever is lower.
                                              <br />
                                              3) Cashback will be credited to
                                              the
                                              <b>Healthians Wallet</b> post
                                              pathology (excluding Scans, COVID
                                              &amp; CGHS) report generation.
                                              <br />
                                              4) Cashback will be given only on
                                              the doctor consultation. (Not
                                              Dietitian Consultation)
                                              <br />
                                              5) Minimum order amount of
                                              pathology test should be Rs.1000
                                              (after tax and not including
                                              addon) to get the cashback. No
                                              pending amount should be there.
                                              <br />
                                              6) There is no restriction on the
                                              number of times a user can avail
                                              cashback.
                                              <br />
                                              7) Cashback will be credited based
                                              on customer phone number and not
                                              members.
                                              <br />
                                              8) This offer can be withdrawn
                                              anytime at sole discretion of the
                                              company with retrospective effect.
                                              <br />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="recommended-packages"
                                style={{ display: "none" }}
                              >
                                <h2>Fever Package recommended for you</h2>
                                <p>Full body health checkups in Gurgaon</p>
                              </div>
                              <div
                                className="owl-slider-wrapper"
                                style={{ display: "none" }}
                              >
                                <div
                                  id="suggestedpackages"
                                  className="owl-carousel"
                                >
                                  <div className="package-slider-item">
                                    <ul>
                                      <li>
                                        <h3>
                                          Healthy India 2022 Full Body Checkup
                                        </h3>
                                      </li>
                                      <li className="discount-div">
                                        <p className="discount-slider text-light-discount">
                                          50% off
                                        </p>
                                      </li>
                                    </ul>
                                    <p>Includes :46 Parameters</p>
                                    <p>
                                      Blood Glucose Fasting, Amylase Enzymatic,
                                      Serum, Complete Blood Count, Typhoid,
                                      Diabetes Screening...
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="sale_price">
                                          <span>₹599</span>₹380
                                        </p>
                                      </li>
                                      <li className="slider-book">
                                        <a href="javascript:void(0)">
                                          Book Now
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="package-slider-item">
                                    <ul>
                                      <li>
                                        <h3>
                                          Healthy India 2022 Full Body Checkup
                                        </h3>
                                      </li>
                                      <li className="discount-div">
                                        <p className="discount-slider text-light-discount">
                                          50% off
                                        </p>
                                      </li>
                                    </ul>
                                    <p>Includes :46 Parameters</p>
                                    <p>
                                      Blood Glucose Fasting, Amylase Enzymatic,
                                      Serum, Complete Blood Count, Typhoid,
                                      Diabetes Screening...
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="sale_price">
                                          <span>₹599</span>₹380
                                        </p>
                                      </li>
                                      <li className="slider-book">
                                        <a href="javascript:void(0)">
                                          Book Now
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="package-slider-item">
                                    <ul>
                                      <li>
                                        <h3>
                                          Healthy India 2022 Full Body Checkup
                                        </h3>
                                      </li>
                                      <li className="discount-div">
                                        <p className="discount-slider text-light-discount">
                                          50% off
                                        </p>
                                      </li>
                                    </ul>
                                    <p>Includes :46 Parameters</p>
                                    <p>
                                      Blood Glucose Fasting, Amylase Enzymatic,
                                      Serum, Complete Blood Count, Typhoid,
                                      Diabetes Screening...
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="sale_price">
                                          <span>₹599</span>₹380
                                        </p>
                                      </li>
                                      <li className="slider-book">
                                        <a href="javascript:void(0)">
                                          Book Now
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="package-slider-item">
                                    <ul>
                                      <li>
                                        <h3>
                                          Healthy India 2022 Full Body Checkup
                                        </h3>
                                      </li>
                                      <li className="discount-div">
                                        <p className="discount-slider text-light-discount">
                                          50% off
                                        </p>
                                      </li>
                                    </ul>
                                    <p>Includes :46 Parameters</p>
                                    <p>
                                      Blood Glucose Fasting, Amylase Enzymatic,
                                      Serum, Complete Blood Count, Typhoid,
                                      Diabetes Screening...
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="sale_price">
                                          <span>₹599</span>₹380
                                        </p>
                                      </li>
                                      <li className="slider-book">
                                        <a href="javascript:void(0)">
                                          Book Now
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="package-slider-item">
                                    <ul>
                                      <li>
                                        <h3>
                                          Healthy India 2022 Full Body Checkup
                                        </h3>
                                      </li>
                                      <li className="discount-div">
                                        <p className="discount-slider text-light-discount">
                                          50% off
                                        </p>
                                      </li>
                                    </ul>
                                    <p>Includes :46 Parameters</p>
                                    <p>
                                      Blood Glucose Fasting, Amylase Enzymatic,
                                      Serum, Complete Blood Count, Typhoid,
                                      Diabetes Screening...
                                    </p>
                                    <ul>
                                      <li>
                                        <p className="sale_price">
                                          <span>₹599</span>₹380
                                        </p>
                                      </li>
                                      <li className="slider-book">
                                        <a href="javascript:void(0)">
                                          Book Now
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-12">
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
                                  type="hidden"
                                  id="gclid_field"
                                  name="gclid_field"
                                  defaultValue=""
                                />
                                <input
                                  type="hidden"
                                  name="_token"
                                  defaultValue="6U9xUe1s2hb1WSCWuD4ES9DjqQZxSjpAX7neRDML"
                                  autoComplete="off"
                                />
                                <input
                                  type="text"
                                  placeholder="Full Name*"
                                  name="gacb_name"
                                  id="gacb_name"
                                  maxLength={40}
                                  className="form-control"
                                  required=""
                                />
                                <input
                                  type="tel"
                                  placeholder="Enter 10-digit mobile no.*"
                                  minLength={10}
                                  maxLength={10}
                                  name="gacb_mobile"
                                  id="gacb_mobile"
                                  className="form-control"
                                  required=""
                                />
                                <select
                                  className="form-control"
                                  name="gacb_city"
                                  id="gacb_city"
                                >
                                  <option value={1724}>Surat</option>
                                  <option value={1974}>Ahemdabad</option>
                                </select>

                                <div className="doctor-fee">
                                  <div className="book-appoint">
                                    <button className="book_consult_btn">
                                      Book an Appointment
                                    </button>
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  name="utm_id"
                                  id="utm_id"
                                  defaultValue="vdoc_at_home_callback"
                                />
                                <input
                                  type="hidden"
                                  name="source"
                                  defaultValue="web"
                                />
                                <input
                                  type="hidden"
                                  name="remarks"
                                  id="vdoc_remarks"
                                  defaultValue="VDoc@Home Callback (Book an Appointment-Get instant call back in few mins)"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="col-12">
                    <div className="single-main industries-details__tab">
                      <div className="row">
                        <div className="col-lg-6">
                          <ul
                            className="list-unstyled nav nav-tabs industries-details__tab-list"
                            id="serviceTabs"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link active"
                                data-bs-toggle="tab"
                                href="#service-1"
                                role="tab"
                              >
                                Call Us at 99799-60020/30
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#service-2"
                                role="tab"
                              >
                                Technician Reach with ECG kit on-time
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#service-3"
                                role="tab"
                              >
                                Take Patient's Complete ECG
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#service-4"
                                role="tab"
                              >
                                Upload ECG at Cloud-Based Sol.
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#service-5"
                                role="tab"
                              >
                                Expert Cardiologist will Check ECG
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#service-6"
                                role="tab"
                              >
                                Reports on Email, Text or Message
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div className="tab-content" id="serviceTabsContent">
                            <div
                              className="tab-pane fade show active"
                              id="service-1"
                              role="tabpanel"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  Call us at 99799-60020 | 99799-60030 |
                                  82007-88099 to book an immediate Appointment
                                  for ECG Test at Home.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="service-2"
                              role="tabpanel"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  Our ECG Technician will reach on time with the
                                  ECG Kit at your home.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="service-3"
                              role="tabpanel"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  We take a complete ECG test to detect abnormal
                                  heart rhythm, poor blood flow (ischemia), or
                                  to monitor medicine/pacemaker impact.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="service-4"
                              role="tabpanel"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  ECG data is uploaded to a cloud-based system
                                  where expert cardiologists review it for
                                  faster, accurate reports.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="service-5"
                              role="tabpanel"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  Expert cardiologists will verify your ECG
                                  report and send results with a verified
                                  signature.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="service-6"
                              role="tabpanel"
                            >
                              <div className="industries-details__tab-box">
                                <img
                                  src="/assets/images/15.webp"
                                  alt="Awesome Image"
                                />
                                <p>
                                  You will receive the accurate report via
                                  Email, Text, or WhatsApp message.
                                </p>
                                <a href="#">
                                  Read More{" "}
                                  <i className="icofont-rounded-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <div className="col-lg-4 col-12">
                <div className="main-sidebar">
                  <div className="single-widget recent-post">
                    <h3 className="title">Our Services</h3>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="ecg-test.html">ECG Test</a>
                        </h5>
                        <div>
                          <a href="ecg-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="pft-test.html">PFT Test</a>
                        </h5>
                        <div>
                          <a href="pft-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="x-ray-test.html">X-Ray Test</a>
                        </h5>
                        <div>
                          <a href="x-ray-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="blood-test.html">Blood Test</a>
                        </h5>
                        <div>
                          <a href="blood-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="full-body-test.html">Full Body Checkup</a>
                        </h5>
                        <div>
                          <a href="full-body-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="ambulatory-test.html">Ambulatory Test</a>
                        </h5>
                        <div>
                          <a href="ambulatory-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="holter-monitoring-test.html">
                            Holter Monitoring Test
                          </a>
                        </h5>
                        <div>
                          <a href="holter-monitoring-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="audiometry-test.html">Audiometry Test</a>
                        </h5>
                        <div>
                          <a href="audiometry-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-post">
                      <div className="image">
                        <img src="/assets/images/blog3.webp" alt="#" />
                      </div>
                      <div
                        className="content d-flex flex-column justify-content-center pl-0"
                        style={{ height: 80 }}
                      >
                        <h5>
                          <a href="sleep-study-test.html">Sleep Study Test</a>
                        </h5>
                        <div>
                          <a href="sleep-study-test.html">
                            Read More <i className="icofont-rounded-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <AllServices service={"ecg"} />
      </>

      <HomeFooter />
    </>
  );
}

export default ECGService;
