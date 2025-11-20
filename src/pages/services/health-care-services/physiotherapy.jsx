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

function PhysiotherapyService() {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Helmet>
        <title>One-Stop Solution For All Your Fitness Needs - Winbri Life Science</title>
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
                  <h2>Doorstep Physiotherapy</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Physiotherapy</li>
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
                          <div className="news-head">
                            <img src="/assets/images/blog3.webp" alt="#" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              Physiotherapy at Home
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              At Winbri Life Science, we believe recovery and mobility should never be restricted by hospital visits. Our Physiotherapy at Home service provides expert rehabilitation, pain relief, and mobility improvement in the comfort of your home, guided by highly trained and certified physiotherapists.
                            </p>
                            <p>
                              Whether you are recovering from surgery, managing a chronic illness, or dealing with pain and stiffness, our physiotherapy services are designed to restore function, improve quality of life, and help patients regain independence.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>Indications – When Do You Need Physiotherapy at Home?</b>
                            </p>
                            <p>
                              Physiotherapy plays a vital role in both treatment and recovery. You may require physiotherapy if you have:
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Musculoskeletal Issues:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Back pain, neck pain, shoulder pain, joint stiffness</li>
                                    <li>Arthritis, osteoporosis, or posture-related problems</li>
                                    <li>Sports injuries and sprains</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Neurological Conditions:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Stroke rehabilitation</li>
                                    <li>Parkinson’s disease, multiple sclerosis</li>
                                    <li>Nerve injuries or paralysis</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Post-Surgical Recovery:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Joint replacement (knee, hip, shoulder)</li>
                                    <li>Spine surgeries</li>
                                    <li>Cardiac and thoracic surgeries</li>
                                    <li>Orthopedic rehabilitation</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>4. Pediatric & Geriatric Needs:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Developmental delay or cerebral palsy in children</li>
                                    <li>Balance training and fall prevention in elderly</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>5. Respiratory & Cardiac Conditions:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Post-COVID rehabilitation</li>
                                    <li>Chronic obstructive pulmonary disease (COPD)</li>
                                    <li>Cardiac rehabilitation after heart procedures</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>
                                Importance of Physiotherapy at Home:
                              </b>
                            </p>
                            <p>
                              ✔ <b>Pain Relief:</b> Reduces dependence on painkillers.
                            </p>
                            <p>
                              ✔ <b>Faster Recovery:</b> Promotes healing after surgeries or injuries.
                            </p>
                            <p>
                              ✔ <b>Mobility Improvement:</b> Restores movement and flexibility.
                            </p>
                            <p>
                              ✔ <b>Neurological Rehabilitation:</b> Helps regain strength and coordination.
                            </p>
                            <p>
                              ✔ <b>Prevention:</b> Prevents worsening of chronic conditions.
                            </p>
                            <p>
                              ✔ <b>Quality of Life:</b> Supports independence and daily activity.
                            </p>
                            <p>
                              <b>
                                Benefits of Winbri Life Science Physiotherapy Services:
                              </b>
                            </p>
                            <p>
                              ✅ <b>Expert Physiotherapists:</b> Certified and experienced in various specialties (orthopedic, neuro, cardio, pediatric, geriatric).
                            </p>
                            <p>
                              ✅ <b>Personalized Treatment:</b> Tailored exercises and therapy plans designed for each patient.
                            </p>
                            <p>
                              ✅ <b>Doorstep Convenience:</b> No need to travel to clinics or hospitals.
                            </p>
                            <p>
                              ✅ <b>24 × 7 Availability:</b> Therapy sessions scheduled as per your comfort and time.
                            </p>
                            <p>
                              ✅ <b>Integrated Care:</b> Backed by doctors, nursing, diagnostics, and tele-consultation support.
                            </p>
                            <p>
                              ✅ <b>Home Safety:</b> Reduced risk of hospital-acquired infections.
                            </p>
                            <p>
                              ✅ <b>Holistic Rehabilitation:</b> Focus on both physical and emotional well-being.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book Appointment:</b> Call us or book online for physiotherapy at home.
                            </p>
                            <p>
                              <b>2. Assessment:</b> A physiotherapist visits your home, reviews your medical history, and performs a detailed assessment.
                            </p>
                            <p>
                              <b>3. Customized Therapy Plan:</b> Tailored exercises, manual therapy, or electrotherapy as per condition.
                            </p>
                            <p>
                              <b>4. Regular Sessions:</b> Scheduled therapy at your convenience (daily/weekly).
                            </p>
                            <p>
                              <b>5. Monitoring & Adjustment:</b> Progress tracked and therapy modified as needed.
                            </p>
                            <p>
                              <b>6. Follow-Up Support:</b> Tele-consultation and coordination with doctors for comprehensive care.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science for Physiotherapy at Home?
                              </b>
                              <ul className="list-style-unset pl-3">
                                <li><b>Comprehensive healthcare under one roof:</b> from physiotherapy to doctors, diagnostics, and nursing</li>
                                <li><b>Round-the-clock service:</b> available 24 × 7 × 365</li>
                                <li><b>Specialist-backed care:</b> therapy guided by physiotherapists with support from orthopedic, neuro, and cardiac doctors</li>
                                <li><b>Patient-first approach:</b> care at your comfort, with privacy and dignity</li>
                                <li><b>Trusted outcomes:</b> faster recovery, better mobility, and improved quality of life</li>
                              </ul>
                            </p>
                            <p>
                              💙 Winbri Life Science – Restoring Strength, Mobility, and Confidence at Your Doorstep. 💙
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
                              <b>Indications – When Do You Need Physiotherapy at Home?</b>
                            </p>
                            <p>
                              Physiotherapy plays a vital role in both treatment and recovery. You may require physiotherapy if you have:
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Musculoskeletal Issues:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Back pain, neck pain, shoulder pain, joint stiffness</li>
                                    <li>Arthritis, osteoporosis, or posture-related problems</li>
                                    <li>Sports injuries and sprains</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Neurological Conditions:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Stroke rehabilitation</li>
                                    <li>Parkinson’s disease, multiple sclerosis</li>
                                    <li>Nerve injuries or paralysis</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Post-Surgical Recovery:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Joint replacement (knee, hip, shoulder)</li>
                                    <li>Spine surgeries</li>
                                    <li>Cardiac and thoracic surgeries</li>
                                    <li>Orthopedic rehabilitation</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>4. Pediatric & Geriatric Needs:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Developmental delay or cerebral palsy in children</li>
                                    <li>Balance training and fall prevention in elderly</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>5. Respiratory & Cardiac Conditions:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Post-COVID rehabilitation</li>
                                    <li>Chronic obstructive pulmonary disease (COPD)</li>
                                    <li>Cardiac rehabilitation after heart procedures</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>
                                Importance of Physiotherapy at Home:
                              </b>
                            </p>
                            <p>
                              ✔ <b>Pain Relief:</b> Reduces dependence on painkillers.
                            </p>
                            <p>
                              ✔ <b>Faster Recovery:</b> Promotes healing after surgeries or injuries.
                            </p>
                            <p>
                              ✔ <b>Mobility Improvement:</b> Restores movement and flexibility.
                            </p>
                            <p>
                              ✔ <b>Neurological Rehabilitation:</b> Helps regain strength and coordination.
                            </p>
                            <p>
                              ✔ <b>Prevention:</b> Prevents worsening of chronic conditions.
                            </p>
                            <p>
                              ✔ <b>Quality of Life:</b> Supports independence and daily activity.
                            </p>
                            <p>
                              <b>
                                Benefits of Winbri Life Science Physiotherapy Services:
                              </b>
                            </p>
                            <p>
                              ✅ <b>Expert Physiotherapists:</b> Certified and experienced in various specialties (orthopedic, neuro, cardio, pediatric, geriatric).
                            </p>
                            <p>
                              ✅ <b>Personalized Treatment:</b> Tailored exercises and therapy plans designed for each patient.
                            </p>
                            <p>
                              ✅ <b>Doorstep Convenience:</b> No need to travel to clinics or hospitals.
                            </p>
                            <p>
                              ✅ <b>24 × 7 Availability:</b> Therapy sessions scheduled as per your comfort and time.
                            </p>
                            <p>
                              ✅ <b>Integrated Care:</b> Backed by doctors, nursing, diagnostics, and tele-consultation support.
                            </p>
                            <p>
                              ✅ <b>Home Safety:</b> Reduced risk of hospital-acquired infections.
                            </p>
                            <p>
                              ✅ <b>Holistic Rehabilitation:</b> Focus on both physical and emotional well-being.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book Appointment:</b> Call us or book online for physiotherapy at home.
                            </p>
                            <p>
                              <b>2. Assessment:</b> A physiotherapist visits your home, reviews your medical history, and performs a detailed assessment.
                            </p>
                            <p>
                              <b>3. Customized Therapy Plan:</b> Tailored exercises, manual therapy, or electrotherapy as per condition.
                            </p>
                            <p>
                              <b>4. Regular Sessions:</b> Scheduled therapy at your convenience (daily/weekly).
                            </p>
                            <p>
                              <b>5. Monitoring & Adjustment:</b> Progress tracked and therapy modified as needed.
                            </p>
                            <p>
                              <b>6. Follow-Up Support:</b> Tele-consultation and coordination with doctors for comprehensive care.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science for Physiotherapy at Home?
                              </b>
                              <ul className="list-style-unset pl-3">
                                <li><b>Comprehensive healthcare under one roof:</b> from physiotherapy to doctors, diagnostics, and nursing</li>
                                <li><b>Round-the-clock service:</b> available 24 × 7 × 365</li>
                                <li><b>Specialist-backed care:</b> therapy guided by physiotherapists with support from orthopedic, neuro, and cardiac doctors</li>
                                <li><b>Patient-first approach:</b> care at your comfort, with privacy and dignity</li>
                                <li><b>Trusted outcomes:</b> faster recovery, better mobility, and improved quality of life</li>
                              </ul>
                            </p>
                            <p>
                              💙 Winbri Life Science – Restoring Strength, Mobility, and Confidence at Your Doorstep. 💙
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

                      <div className="row mt-md-3">
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
      </>

      <HomeFooter />
    </>
  );
}

export default PhysiotherapyService;
