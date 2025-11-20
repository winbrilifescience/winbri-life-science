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

function GPDoctorService() {
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
                  <h2>Doorstep General Practitioner</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">General Practitioner</li>
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
                              General Practitioner (GP) Home Visit
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              At Winbri Life Science, we understand that health issues can arise anytime and traveling to a hospital or clinic is not always easy. Our General Practitioner (GP) Doctors are available to visit you at your home, office, clinic, hospital, or diagnostic center, ensuring quality primary healthcare at your doorstep.
                            </p>
                            <p>
                              Our GP services are supported by 24 × 7 × 365 availability, tele-consultation follow-ups, and specialist referral network, making us your first point of contact for all healthcare needs.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>Indications – When to Call a General Practitioner at Home?</b>
                            </p>
                            <p>
                              A General Practitioner (MBBS Doctor) is the primary care physician who manages a wide range of health conditions. Call a GP at home for:
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Common Illnesses:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Fever, cold, cough, flu, infections</li>
                                    <li>Headache, body ache, weakness, fatigue</li>
                                    <li>Gastrointestinal problems – acidity, diarrhea, constipation, vomiting</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Chronic Disease Management:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Diabetes, hypertension, asthma, thyroid disorders</li>
                                    <li>Regular follow-ups and medication adjustments</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Preventive Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Routine health check-ups</li>
                                    <li>Vaccinations and immunizations</li>
                                    <li>Lifestyle guidance for diet, exercise, and stress</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>4. Elderly & Palliative Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Geriatric care for age-related conditions</li>
                                    <li>At-home monitoring and comfort care for bedridden patients</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>5. Pre & Post-Hospital Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Medical fitness evaluation before surgery</li>
                                    <li>Follow-up care after hospitalization</li>
                                    <li>Wound care, prescription management, and monitoring recovery</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>
                                Importance of GP Home Visits:
                              </b>
                            </p>
                            <p>
                              ✔ <b>First Line of Care:</b> GPs diagnose, treat, and guide patients for most medical concerns.
                            </p>
                            <p>
                              ✔ <b>Continuity of Care:</b> Regular monitoring and follow-up prevent complications.
                            </p>
                            <p>
                              ✔ <b>Early Diagnosis:</b> Identifies health issues before they become serious.
                            </p>
                            <p>
                              ✔ <b>Family Physician Role:</b> A GP provides holistic care for individuals and families.
                            </p>
                            <p>
                              ✔ <b>Reduced Hospital Visits:</b> Timely home care reduces the need for emergency admissions.
                            </p>
                            <p>
                              <b>
                                Benefits of Winbri Life Science GP Services:
                              </b>
                            </p>
                            <p>
                              ✅ <b>24 × 7 Availability:</b> Anytime medical care at your doorstep.
                            </p>
                            <p>
                              ✅ <b>Comfort & Convenience:</b> No travel, no waiting, no exposure to hospital infections.
                            </p>
                            <p>
                              ✅ <b>Certified & Experienced Doctors:</b> MBBS-trained practitioners with patient-first approach.
                            </p>
                            <p>
                              ✅ <b>Comprehensive Support:</b> Backed by specialists, pathology, ECG, X-ray, and nursing at home.
                            </p>
                            <p>
                              ✅ <b>Continuity of Care:</b> Tele-consultation support for ongoing treatment.
                            </p>
                            <p>
                              ✅ <b>Patient-Centered Care:</b> Tailored solutions for every age group, from children to elderly.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Appointment:</b> Call or book online for a GP home visit.
                            </p>
                            <p>
                              <b>2. Home Visit:</b> A qualified GP arrives at your preferred location.
                            </p>
                            <p>
                              <b>3. Consultation & Examination:</b> Detailed evaluation of symptoms and history.
                            </p>
                            <p>
                              <b>4. Diagnosis & Prescription:</b> Treatment plan, medicines, and advice provided.
                            </p>
                            <p>
                              <b>5. Follow-Up:</b> Tele-consultation or in-person revisit if needed.
                            </p>
                            <p>
                              <b>6. Referral:</b> GP coordinates with specialist doctors for advanced care.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science?
                              </b>
                            </p>
                            <p>
                              Unlike traditional clinics or hospitals, Winbri Life Science brings healthcare directly to you. Our GP services are designed for:
                              <ul className="list-style-unset pl-3">
                                <li>Busy professionals who cannot spare time for hospital visits</li>
                                <li>Elderly patients who require ongoing monitoring at home</li>
                                <li>Families looking for a trusted family physician</li>
                                <li>Patients recovering post-surgery or illness needing at-home follow-ups</li>
                              </ul>
                            </p>
                            <p>
                              We combine medical expertise, advanced diagnostics, and patient convenience to deliver hospital-level care at your doorstep.
                            </p>
                            <p>
                              💙 Winbri Life Science – Your Trusted Family Doctor at Home. Anytime. Anywhere. Always. 💙
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
                              <b>Indications – When to Call a General Practitioner at Home?</b>
                            </p>
                            <p>
                              A General Practitioner (MBBS Doctor) is the primary care physician who manages a wide range of health conditions. Call a GP at home for:
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Common Illnesses:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Fever, cold, cough, flu, infections</li>
                                    <li>Headache, body ache, weakness, fatigue</li>
                                    <li>Gastrointestinal problems – acidity, diarrhea, constipation, vomiting</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Chronic Disease Management:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Diabetes, hypertension, asthma, thyroid disorders</li>
                                    <li>Regular follow-ups and medication adjustments</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Preventive Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Routine health check-ups</li>
                                    <li>Vaccinations and immunizations</li>
                                    <li>Lifestyle guidance for diet, exercise, and stress</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>4. Elderly & Palliative Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Geriatric care for age-related conditions</li>
                                    <li>At-home monitoring and comfort care for bedridden patients</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>5. Pre & Post-Hospital Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Medical fitness evaluation before surgery</li>
                                    <li>Follow-up care after hospitalization</li>
                                    <li>Wound care, prescription management, and monitoring recovery</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>
                                Importance of GP Home Visits:
                              </b>
                            </p>
                            <p>
                              ✔ <b>First Line of Care:</b> GPs diagnose, treat, and guide patients for most medical concerns.
                            </p>
                            <p>
                              ✔ <b>Continuity of Care:</b> Regular monitoring and follow-up prevent complications.
                            </p>
                            <p>
                              ✔ <b>Early Diagnosis:</b> Identifies health issues before they become serious.
                            </p>
                            <p>
                              ✔ <b>Family Physician Role:</b> A GP provides holistic care for individuals and families.
                            </p>
                            <p>
                              ✔ <b>Reduced Hospital Visits:</b> Timely home care reduces the need for emergency admissions.
                            </p>
                            <p>
                              <b>
                                Benefits of Winbri Life Science GP Services:
                              </b>
                            </p>
                            <p>
                              ✅ <b>24 × 7 Availability:</b> Anytime medical care at your doorstep.
                            </p>
                            <p>
                              ✅ <b>Comfort & Convenience:</b> No travel, no waiting, no exposure to hospital infections.
                            </p>
                            <p>
                              ✅ <b>Certified & Experienced Doctors:</b> MBBS-trained practitioners with patient-first approach.
                            </p>
                            <p>
                              ✅ <b>Comprehensive Support:</b> Backed by specialists, pathology, ECG, X-ray, and nursing at home.
                            </p>
                            <p>
                              ✅ <b>Continuity of Care:</b> Tele-consultation support for ongoing treatment.
                            </p>
                            <p>
                              ✅ <b>Patient-Centered Care:</b> Tailored solutions for every age group, from children to elderly.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Appointment:</b> Call or book online for a GP home visit.
                            </p>
                            <p>
                              <b>2. Home Visit:</b> A qualified GP arrives at your preferred location.
                            </p>
                            <p>
                              <b>3. Consultation & Examination:</b> Detailed evaluation of symptoms and history.
                            </p>
                            <p>
                              <b>4. Diagnosis & Prescription:</b> Treatment plan, medicines, and advice provided.
                            </p>
                            <p>
                              <b>5. Follow-Up:</b> Tele-consultation or in-person revisit if needed.
                            </p>
                            <p>
                              <b>6. Referral:</b> GP coordinates with specialist doctors for advanced care.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science?
                              </b>
                            </p>
                            <p>
                              Unlike traditional clinics or hospitals, Winbri Life Science brings healthcare directly to you. Our GP services are designed for:
                              <ul className="list-style-unset pl-3">
                                <li>Busy professionals who cannot spare time for hospital visits</li>
                                <li>Elderly patients who require ongoing monitoring at home</li>
                                <li>Families looking for a trusted family physician</li>
                                <li>Patients recovering post-surgery or illness needing at-home follow-ups</li>
                              </ul>
                            </p>
                            <p>
                              We combine medical expertise, advanced diagnostics, and patient convenience to deliver hospital-level care at your doorstep.
                            </p>
                            <p>
                              💙 Winbri Life Science – Your Trusted Family Doctor at Home. Anytime. Anywhere. Always. 💙
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

export default GPDoctorService;
