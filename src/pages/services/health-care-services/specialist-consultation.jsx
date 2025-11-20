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

function SpecialistConsultationService() {
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
                  <h2>Doorstep Specialist Consultations</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Specialist Consultations</li>
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
                              Specialist Consultations at Home
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              At Winbri Life Science, we bring hospital-level expertise right to your doorstep. With Specialty and General Physician consultations at home, patients can now receive world-class medical care without leaving the comfort of their homes.
                            </p>
                            <p>
                              We provide General Medicine Doctors (MBBS, MD), General Surgeons, and Gynecologists for personalized consultation, diagnosis, and treatment. This is supported by our 24 × 7 availability, diagnostic services at home, and tele-consultation follow-ups, ensuring seamless healthcare.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>1. General Medicine Doctor (MBBS, MD) – Consultation at Home:</b>
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <p>
                                  <b>📌 Indications – When to Call a General Physician?</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Fever, infections, cough, cold, flu</li>
                                    <li>Hypertension, diabetes, high cholesterol</li>
                                    <li>General weakness, loss of appetite, fatigue</li>
                                    <li>Gastrointestinal issues – acidity, indigestion, constipation, diarrhea</li>
                                    <li>Preventive health check-ups and chronic disease management</li>
                                    <li>Pre-operative medical fitness evaluation</li>
                                    <li>Elderly care and long-term follow-up</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>⭐ Importance & Benefits:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>First point of contact for most illnesses</li>
                                    <li>Broad expertise to diagnose and treat common conditions</li>
                                    <li>Chronic disease monitoring (BP, sugar, cholesterol)</li>
                                    <li>Referral to specialists if advanced care is needed</li>
                                    <li>Preventive medicine for long-term health</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>2. General Surgeon – Consultation at Home:</b>
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <p>
                                  <b>📌 Indications – When to Call a General Surgeon?</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Minor surgical issues such as abscess, cyst, or wound infections</li>
                                    <li>Hernia, piles, fissures, or fistula symptoms</li>
                                    <li>Gallbladder, appendix, or abdominal pain requiring evaluation</li>
                                    <li>Post-surgical care – dressing, wound monitoring, stitch removal</li>
                                    <li>Trauma and injury care (minor cuts, lacerations)</li>
                                    <li>Advice on elective surgeries and second opinions</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>⭐ Importance & Benefits:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Early surgical evaluation prevents complications</li>
                                    <li>Post-operative care at home reduces risk of infection and hospital visits</li>
                                    <li>Expert surgical guidance for both minor and major conditions</li>
                                    <li>Patient education about treatment and surgery options</li>
                                    <li>Continuity of care from diagnosis to recovery</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>3. Gynecologist – Consultation at Home:</b>
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <p>
                                  <b>📌 Indications – When to Call a Gynecologist?</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Menstrual irregularities, painful periods, heavy bleeding</li>
                                    <li>Pregnancy check-ups, antenatal and postnatal care</li>
                                    <li>Menopause symptoms and hormone-related issues</li>
                                    <li>Gynecological infections or pelvic pain</li>
                                    <li>Infertility evaluation and counseling</li>
                                    <li>Preventive screening – Pap smear, breast exam, women’s health check-ups</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>⭐ Importance & Benefits:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Comfort and privacy of home consultation for sensitive women’s health issues</li>
                                    <li>Safe maternal care during and after pregnancy</li>
                                    <li>Early diagnosis of gynecological conditions</li>
                                    <li>Personalized women’s health guidance</li>
                                    <li>Preventive care to avoid complications</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>
                                Why Winbri Life Science is Better??
                              </b>
                            </p>
                            <p>
                              ✅ <b>24 × 7 × 365 Availability:</b> Doctors available anytime, anywhere.
                            </p>
                            <p>
                              ✅ <b>Doorstep Service:</b> No need to travel or wait at hospitals.
                            </p>
                            <p>
                              ✅ <b>Certified & Experienced Doctors:</b> MBBS, MD, MS, DGO specialists.
                            </p>
                            <p>
                              ✅ <b>Integrated Support:</b> Backed with diagnostics, ECG, X-ray, pathology, nursing, and physiotherapy at home.
                            </p>
                            <p>
                              ✅ <b>Tele-Consultation:</b> Quick follow-up and second opinions online.
                            </p>
                            <p>
                              ✅ <b>Personalized Care:</b> Focus on patient comfort, privacy, and recovery.
                            </p>
                            <p>
                              ✅ <b>Comprehensive Approach:</b> From prevention to treatment to recovery.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book Appointment:</b> Call us or book online for your required doctor.
                            </p>
                            <p>
                              <b>2. Home Visit:</b> Doctor visits at your home, office, or clinic.
                            </p>
                            <p>
                              <b>3. Consultation & Examination:</b> Detailed history, physical exam, and medical advice.
                            </p>
                            <p>
                              <b>4. Diagnostics:</b> On-the-spot ECG, X-ray, pathology, or imaging at your doorstep.
                            </p>
                            <p>
                              <b>5. Certified Report & Treatment Plan:</b> Specialist-certified diagnosis and prescriptions.
                            </p>
                            <p>
                              <b>6. Follow-Up Support:</b> Tele-consultation, nursing, or physiotherapy as required.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Hospital-Level Care, Right at Your Doorstep
                              </b>
                            </p>
                            <p>
                              With our General Medicine doctors, General Surgeons, Gynecologists, and a wide range of specialists, Winbri Life Science ensures timely, safe, and expert medical care without the stress of hospital visits.
                            </p>
                            <p>
                              💙 Your Health, Our Mission – Anytime. Anywhere. Always. 💙
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
                              <b>1. General Medicine Doctor (MBBS, MD) – Consultation at Home:</b>
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <p>
                                  <b>📌 Indications – When to Call a General Physician?</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Fever, infections, cough, cold, flu</li>
                                    <li>Hypertension, diabetes, high cholesterol</li>
                                    <li>General weakness, loss of appetite, fatigue</li>
                                    <li>Gastrointestinal issues – acidity, indigestion, constipation, diarrhea</li>
                                    <li>Preventive health check-ups and chronic disease management</li>
                                    <li>Pre-operative medical fitness evaluation</li>
                                    <li>Elderly care and long-term follow-up</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>⭐ Importance & Benefits:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>First point of contact for most illnesses</li>
                                    <li>Broad expertise to diagnose and treat common conditions</li>
                                    <li>Chronic disease monitoring (BP, sugar, cholesterol)</li>
                                    <li>Referral to specialists if advanced care is needed</li>
                                    <li>Preventive medicine for long-term health</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>2. General Surgeon – Consultation at Home:</b>
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <p>
                                  <b>📌 Indications – When to Call a General Surgeon?</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Minor surgical issues such as abscess, cyst, or wound infections</li>
                                    <li>Hernia, piles, fissures, or fistula symptoms</li>
                                    <li>Gallbladder, appendix, or abdominal pain requiring evaluation</li>
                                    <li>Post-surgical care – dressing, wound monitoring, stitch removal</li>
                                    <li>Trauma and injury care (minor cuts, lacerations)</li>
                                    <li>Advice on elective surgeries and second opinions</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>⭐ Importance & Benefits:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Early surgical evaluation prevents complications</li>
                                    <li>Post-operative care at home reduces risk of infection and hospital visits</li>
                                    <li>Expert surgical guidance for both minor and major conditions</li>
                                    <li>Patient education about treatment and surgery options</li>
                                    <li>Continuity of care from diagnosis to recovery</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>3. Gynecologist – Consultation at Home:</b>
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <p>
                                  <b>📌 Indications – When to Call a Gynecologist?</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Menstrual irregularities, painful periods, heavy bleeding</li>
                                    <li>Pregnancy check-ups, antenatal and postnatal care</li>
                                    <li>Menopause symptoms and hormone-related issues</li>
                                    <li>Gynecological infections or pelvic pain</li>
                                    <li>Infertility evaluation and counseling</li>
                                    <li>Preventive screening – Pap smear, breast exam, women’s health check-ups</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>⭐ Importance & Benefits:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Comfort and privacy of home consultation for sensitive women’s health issues</li>
                                    <li>Safe maternal care during and after pregnancy</li>
                                    <li>Early diagnosis of gynecological conditions</li>
                                    <li>Personalized women’s health guidance</li>
                                    <li>Preventive care to avoid complications</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>
                                Why Winbri Life Science is Better??
                              </b>
                            </p>
                            <p>
                              ✅ <b>24 × 7 × 365 Availability:</b> Doctors available anytime, anywhere.
                            </p>
                            <p>
                              ✅ <b>Doorstep Service:</b> No need to travel or wait at hospitals.
                            </p>
                            <p>
                              ✅ <b>Certified & Experienced Doctors:</b> MBBS, MD, MS, DGO specialists.
                            </p>
                            <p>
                              ✅ <b>Integrated Support:</b> Backed with diagnostics, ECG, X-ray, pathology, nursing, and physiotherapy at home.
                            </p>
                            <p>
                              ✅ <b>Tele-Consultation:</b> Quick follow-up and second opinions online.
                            </p>
                            <p>
                              ✅ <b>Personalized Care:</b> Focus on patient comfort, privacy, and recovery.
                            </p>
                            <p>
                              ✅ <b>Comprehensive Approach:</b> From prevention to treatment to recovery.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book Appointment:</b> Call us or book online for your required doctor.
                            </p>
                            <p>
                              <b>2. Home Visit:</b> Doctor visits at your home, office, or clinic.
                            </p>
                            <p>
                              <b>3. Consultation & Examination:</b> Detailed history, physical exam, and medical advice.
                            </p>
                            <p>
                              <b>4. Diagnostics:</b> On-the-spot ECG, X-ray, pathology, or imaging at your doorstep.
                            </p>
                            <p>
                              <b>5. Certified Report & Treatment Plan:</b> Specialist-certified diagnosis and prescriptions.
                            </p>
                            <p>
                              <b>6. Follow-Up Support:</b> Tele-consultation, nursing, or physiotherapy as required.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Hospital-Level Care, Right at Your Doorstep
                              </b>
                            </p>
                            <p>
                              With our General Medicine doctors, General Surgeons, Gynecologists, and a wide range of specialists, Winbri Life Science ensures timely, safe, and expert medical care without the stress of hospital visits.
                            </p>
                            <p>
                              💙 Your Health, Our Mission – Anytime. Anywhere. Always. 💙
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

export default SpecialistConsultationService;
