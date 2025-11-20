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

function NursingCareService() {
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
                  <h2>Doorstep Nursing Care</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Nursing Care</li>
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
                              Nursing Care at Home
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              At Winbri Life Science, we bring compassionate and professional nursing care to your doorstep. Whether you need short-term medical assistance, long-term patient care, or post-hospitalization support, our trained and certified nursing staff provide hospital-quality care in the comfort of your home.
                            </p>
                            <p>
                              Our services are available 24 × 7 × 365 to ensure that patients and families receive timely, safe, and reliable healthcare support.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>Indications – When Do You Need a Nurse at Home?</b>
                            </p>
                            <p>
                              Home nursing care is required in many situations, including:
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Post-Hospitalization Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Post-surgery wound care, dressing, and infection prevention</li>
                                    <li>Monitoring vitals and recovery after hospitalization</li>
                                    <li>Assistance in mobility and rehabilitation</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Chronic Disease Management:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Diabetes, hypertension, heart disease monitoring</li>
                                    <li>Neurological conditions like stroke, Parkinson’s, dementia care</li>
                                    <li>Cancer patient care and palliative support</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Elderly & Bedridden Patient Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Assistance with daily living (feeding, bathing, mobility)</li>
                                    <li>Bedsore prevention and management</li>
                                    <li>Long-term care for geriatric patients</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>4. Specialized Medical Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>IV infusion, injections, and medication administration</li>
                                    <li>Catheter care, stoma care, tracheostomy care</li>
                                    <li>Oxygen therapy and ventilator support</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>5. Maternal & Child Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Newborn care and mother care post-delivery</li>
                                    <li>Vaccination support and child growth monitoring</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>
                                Importance of Nursing Care at Home:
                              </b>
                            </p>
                            <p>
                              ✔ Brings hospital-quality care to home – avoids unnecessary readmissions.
                            </p>
                            <p>
                              ✔ Ensures continuity of treatment after hospital discharge.
                            </p>
                            <p>
                              ✔ Improves patient comfort by providing care in a familiar environment.
                            </p>
                            <p>
                              ✔ Reduces hospital-acquired infection risks.
                            </p>
                            <p>
                              ✔ Provides emotional support to patients and families.
                            </p>
                            <p>
                              ✔ Cost-effective compared to prolonged hospital stays.
                            </p>
                            <p>
                              <b>
                                Benefits of Winbri Life Science Nursing Services:
                              </b>
                            </p>
                            <p>
                              ✅ <b>Qualified & Experienced Nurses:</b> Trained in clinical and home care practices.
                            </p>
                            <p>
                              ✅ <b>24 × 7 Availability:</b> Anytime support for patients and families.
                            </p>
                            <p>
                              ✅ <b>Comprehensive Care:</b> From basic nursing to critical care support.
                            </p>
                            <p>
                              ✅ <b>Doorstep Service:</b> No need to shift patients unnecessarily to hospitals.
                            </p>
                            <p>
                              ✅ <b>Integrated Healthcare Support:</b> Backed by doctors, physiotherapists, dieticians, and diagnostics at home.
                            </p>
                            <p>
                              ✅ <b>Personalized Care Plans:</b> Tailored to patient condition and family requirements.
                            </p>
                            <p>
                              ✅ <b>Safe & Reliable:</b> Hygienic practices, confidentiality, and compassionate approach.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book Appointment:</b> Call us anytime for a nursing service request.
                            </p>
                            <p>
                              <b>2. Assessment:</b> Our medical team reviews the patient’s condition and needs.
                            </p>
                            <p>
                              <b>3. Nurse Allocation:</b> A trained nurse is assigned (basic care, ICU-trained, or specialized).
                            </p>
                            <p>
                              <b>4. Home Visit:</b> Nurse provides medical care, assistance, and monitoring at home.
                            </p>
                            <p>
                              <b>5. Treatment & Monitoring:</b> Regular care, medication administration, wound management, and vitals monitoring.
                            </p>
                            <p>
                              <b>6. Follow-Up & Support:</b> Continuous coordination with doctors and tele-consultation as required.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science Nursing Care at Home?
                              </b>
                              <ul className="list-style-unset pl-3">
                                <li><b>Complete healthcare ecosystem:</b> doctors, diagnostics, physiotherapy, dietician, and nursing, all under one roof.</li>
                                <li><b>24/7 dedicated support:</b> emergency or routine, we are always available.</li>
                                <li><b>Hospital-level expertise at home:</b> safe, professional, and patient-focused.</li>
                                <li><b>Trusted by families:</b> for elderly care, post-surgical recovery, and critical support.</li>
                                <li><b>Patient-first approach:</b> dignity, privacy, and comfort are our top priorities.</li>
                              </ul>
                            </p>
                            <p>
                              💙 Winbri Life Science – Compassionate Nursing Care at Your Doorstep. Anytime. Anywhere. Always. 💙
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
                              <b>Indications – When Do You Need a Nurse at Home?</b>
                            </p>
                            <p>
                              Home nursing care is required in many situations, including:
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Post-Hospitalization Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Post-surgery wound care, dressing, and infection prevention</li>
                                    <li>Monitoring vitals and recovery after hospitalization</li>
                                    <li>Assistance in mobility and rehabilitation</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Chronic Disease Management:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Diabetes, hypertension, heart disease monitoring</li>
                                    <li>Neurological conditions like stroke, Parkinson’s, dementia care</li>
                                    <li>Cancer patient care and palliative support</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Elderly & Bedridden Patient Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Assistance with daily living (feeding, bathing, mobility)</li>
                                    <li>Bedsore prevention and management</li>
                                    <li>Long-term care for geriatric patients</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>4. Specialized Medical Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>IV infusion, injections, and medication administration</li>
                                    <li>Catheter care, stoma care, tracheostomy care</li>
                                    <li>Oxygen therapy and ventilator support</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>5. Maternal & Child Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Newborn care and mother care post-delivery</li>
                                    <li>Vaccination support and child growth monitoring</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>
                                Importance of Nursing Care at Home:
                              </b>
                            </p>
                            <p>
                              ✔ Brings hospital-quality care to home – avoids unnecessary readmissions.
                            </p>
                            <p>
                              ✔ Ensures continuity of treatment after hospital discharge.
                            </p>
                            <p>
                              ✔ Improves patient comfort by providing care in a familiar environment.
                            </p>
                            <p>
                              ✔ Reduces hospital-acquired infection risks.
                            </p>
                            <p>
                              ✔ Provides emotional support to patients and families.
                            </p>
                            <p>
                              ✔ Cost-effective compared to prolonged hospital stays.
                            </p>
                            <p>
                              <b>
                                Benefits of Winbri Life Science Nursing Services:
                              </b>
                            </p>
                            <p>
                              ✅ <b>Qualified & Experienced Nurses:</b> Trained in clinical and home care practices.
                            </p>
                            <p>
                              ✅ <b>24 × 7 Availability:</b> Anytime support for patients and families.
                            </p>
                            <p>
                              ✅ <b>Comprehensive Care:</b> From basic nursing to critical care support.
                            </p>
                            <p>
                              ✅ <b>Doorstep Service:</b> No need to shift patients unnecessarily to hospitals.
                            </p>
                            <p>
                              ✅ <b>Integrated Healthcare Support:</b> Backed by doctors, physiotherapists, dieticians, and diagnostics at home.
                            </p>
                            <p>
                              ✅ <b>Personalized Care Plans:</b> Tailored to patient condition and family requirements.
                            </p>
                            <p>
                              ✅ <b>Safe & Reliable:</b> Hygienic practices, confidentiality, and compassionate approach.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book Appointment:</b> Call us anytime for a nursing service request.
                            </p>
                            <p>
                              <b>2. Assessment:</b> Our medical team reviews the patient’s condition and needs.
                            </p>
                            <p>
                              <b>3. Nurse Allocation:</b> A trained nurse is assigned (basic care, ICU-trained, or specialized).
                            </p>
                            <p>
                              <b>4. Home Visit:</b> Nurse provides medical care, assistance, and monitoring at home.
                            </p>
                            <p>
                              <b>5. Treatment & Monitoring:</b> Regular care, medication administration, wound management, and vitals monitoring.
                            </p>
                            <p>
                              <b>6. Follow-Up & Support:</b> Continuous coordination with doctors and tele-consultation as required.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science Nursing Care at Home?
                              </b>
                              <ul className="list-style-unset pl-3">
                                <li><b>Complete healthcare ecosystem:</b> doctors, diagnostics, physiotherapy, dietician, and nursing, all under one roof.</li>
                                <li><b>24/7 dedicated support:</b> emergency or routine, we are always available.</li>
                                <li><b>Hospital-level expertise at home:</b> safe, professional, and patient-focused.</li>
                                <li><b>Trusted by families:</b> for elderly care, post-surgical recovery, and critical support.</li>
                                <li><b>Patient-first approach:</b> dignity, privacy, and comfort are our top priorities.</li>
                              </ul>
                            </p>
                            <p>
                              💙 Winbri Life Science – Compassionate Nursing Care at Your Doorstep. Anytime. Anywhere. Always. 💙
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

export default NursingCareService;
