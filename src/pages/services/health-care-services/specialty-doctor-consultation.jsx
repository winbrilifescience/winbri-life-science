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

function SpecialtyDoctorConsultationService() {
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
                  <h2>Doorstep Specialty Doctor Consultation</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Specialty Doctor Consultation</li>
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
                              Specialty Doctor Consultation at Home
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              At Winbri Life Science, we believe expert healthcare should not be limited to hospitals. That is why we bring specialist doctors directly to your doorstep – ensuring timely, comfortable, and expert medical care for you and your loved ones.
                            </p>
                            <p>
                              Our Specialist Doctor Home Consultation service connects patients with highly qualified doctors across various fields of medicine, supported by 24 × 7 × 365 availability, diagnostic services at home, and tele-consultation for follow-ups.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>What is Specialty Doctor Consultation at Home?</b>
                              <ul className="list-style-unset pl-3">
                                <li>Comprehensive evaluation</li>
                                <li>Accurate diagnosis</li>
                                <li>Personalized treatment</li>
                                <li>Lifestyle and preventive guidance</li>
                                <li>
                                  Follow-up and long-term care
                                </li>
                              </ul>
                            </p>
                            <p>
                              This makes it ideal for patients who need focused care but want to avoid hospital visits due to mobility issues, age, chronic illness, or convenience.
                            </p>
                            <p>
                              <b>Types of Specialist Doctors Available at Home:</b>
                            </p>
                            <p>
                              Winbri Life Science offers a wide panel of doctors covering all major specialties:
                            </p>
                            <p>
                              <b>1. Cardiologist:</b> For chest pain, palpitations, hypertension, heart attack follow-up.
                            </p>
                            <p>
                              <b>2. Neurologist:</b> For headache, epilepsy, stroke, memory loss, Parkinson’s disease.
                            </p>
                            <p>
                              <b>3. Pulmonologist:</b> For asthma, COPD, chronic cough, sleep apnea.
                            </p>
                            <p>
                              <b>4. Orthopedic Specialist:</b> For fractures, arthritis, back pain, joint problems.
                            </p>
                            <p>
                              <b>5. Dermatologist:</b> For skin allergies, acne, psoriasis, hair fall, nail disorders.
                            </p>
                            <p>
                              <b>6. Endocrinologist:</b> For diabetes, thyroid, obesity, hormonal imbalance.
                            </p>
                            <p>
                              <b>7. Gastroenterologist:</b> For acidity, ulcers, liver disease, indigestion.
                            </p>
                            <p>
                              <b>8. Gynecologist:</b> For women’s health, menstrual issues, pregnancy care, menopause.
                            </p>
                            <p>
                              <b>9. Nephrologist:</b> For kidney disease, high BP, dialysis care, electrolyte imbalance.
                            </p>
                            <p>
                              <b>10. Oncologist:</b> For cancer screening, diagnosis, and ongoing management.
                            </p>
                            <p>
                              <b>11. Psychiatrist / Psychologist:</b> For depression, anxiety, stress, insomnia.
                            </p>
                            <p>
                              <b>12. ENT Specialist:</b> For ear infections, sinusitis, throat problems, hearing loss.
                            </p>
                            <p>
                              <b>13. Ophthalmologist:</b> For vision care, eye infections, glaucoma, diabetic eye disease.
                            </p>
                            <p>
                              <b>14. Rheumatologist:</b> For autoimmune disorders, arthritis, chronic pain.
                            </p>
                            <p>
                              <b>15. Pediatric Specialist:</b> For children’s health, growth monitoring, infections.
                            </p>
                            <p>
                              <b>16. Geriatric Specialist:</b> For elderly care, dementia, chronic illness management.
                            </p>
                            <p>
                              …and many more based on patient requirements.
                            </p>
                            <p>
                              <b>
                                Indications – When Should You Call a Specialist Doctor at Home?
                              </b>
                            </p>
                            <p>
                              ✔ Persistent or unexplained symptoms (chest pain, chronic cough, severe headaches, joint pain, skin rashes).
                            </p>
                            <p>
                              ✔ Chronic diseases requiring regular expert supervision (diabetes, asthma, kidney disease, hypertension).
                            </p>
                            <p>
                              ✔ Post-hospitalization care (heart surgery recovery, stroke rehabilitation, fracture healing).
                            </p>
                            <p>
                              ✔ Preventive & routine check-ups (women’s health, cancer screening, elderly check-ups).
                            </p>
                            <p>
                              ✔ Emergency evaluation when immediate access to a specialist is required but hospital visit is difficult.
                            </p>
                            <p>
                              <b>
                                Importance & Benefits of Specialist Consultation at Home:
                              </b>
                            </p>
                            <p>
                              ✅ <b>Accurate Diagnosis:</b> Specialists detect complex conditions early.
                            </p>
                            <p>
                              ✅ <b>Targeted Treatment:</b> Focused expertise for faster recovery.
                            </p>
                            <p>
                              ✅ <b>Convenience & Comfort:</b> No waiting lines or hospital travel.
                            </p>
                            <p>
                              ✅ <b>Continuity of Care:</b> Regular follow-ups at home ensure better disease control.
                            </p>
                            <p>
                              ✅ <b>Ideal for Elderly & Bedridden Patients:</b> Saves them from stressful travel.
                            </p>
                            <p>
                              ✅ <b>Integrated with Diagnostics:</b> ECG, X-ray, pathology, and scans available at home for complete care.
                            </p>
                            <p>
                              ✅ <b>Safe & Private:</b> Care is provided in the comfort of your home with full confidentiality.
                            </p>
                            <p>
                              <b>
                                Why Winbri Life Science Specialty Consultation is Better?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we go beyond simple doctor visits – we provide end-to-end healthcare solutions at your doorstep:
                            </p>
                            <p>
                              🕑 24 × 7 × 365 Availability – Specialists available anytime, including emergencies.
                            </p>
                            <p>
                              👨‍⚕ Certified & Experienced Doctors – Highly qualified doctors across all specialties.
                            </p>
                            <p>
                              🏠 Doorstep Healthcare – Expert care without the hassle of travel.
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Quick follow-ups and second opinions online.
                            </p>
                            <p>
                              🤝 Complete Medical Ecosystem – Backed with physiotherapy, nursing, dietician, and lab tests at home.
                            </p>
                            <p>
                              ⚡ Fast & Reliable Service – Same-day appointments, minimal waiting.
                            </p>
                            <p>
                              ❤ Patient-Centric Approach – Comfort, privacy, and compassion come first.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book an Appointment:</b> Call or book online for your required specialist.
                            </p>
                            <p>
                              <b>2. Home Visit:</b> Doctor arrives at your home, office, or preferred location.
                            </p>
                            <p>
                              <b>3. Evaluation & Diagnosis:</b> Complete medical history review, examination, and necessary tests.
                            </p>
                            <p>
                              <b>4. Certified Reports:</b> Diagnostic reports are reviewed by specialists for accuracy.
                            </p>
                            <p>
                              <b>5. Treatment Plan:</b> Get prescriptions, lifestyle advice, and care recommendations.
                            </p>
                            <p>
                              <b>6. Follow-Up Support:</b> Tele-consultation, nursing care, or physiotherapy as needed.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Hospital-Level Care, Right at Your Doorstep
                              </b>
                            </p>
                            <p>
                              With specialty consultations, general practitioner visits, nursing care, physiotherapy, dietician support, and diagnostics at home, Winbri Life Science is your complete healthcare partner – available anytime, anywhere.
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
                              <b>What is Specialty Doctor Consultation at Home?</b>
                              <ul className="list-style-unset pl-3">
                                <li>Comprehensive evaluation</li>
                                <li>Accurate diagnosis</li>
                                <li>Personalized treatment</li>
                                <li>Lifestyle and preventive guidance</li>
                                <li>
                                  Follow-up and long-term care
                                </li>
                              </ul>
                            </p>
                            <p>
                              This makes it ideal for patients who need focused care but want to avoid hospital visits due to mobility issues, age, chronic illness, or convenience.
                            </p>
                            <p>
                              <b>Types of Specialist Doctors Available at Home:</b>
                            </p>
                            <p>
                              Winbri Life Science offers a wide panel of doctors covering all major specialties:
                            </p>
                            <p>
                              <b>1. Cardiologist:</b> For chest pain, palpitations, hypertension, heart attack follow-up.
                            </p>
                            <p>
                              <b>2. Neurologist:</b> For headache, epilepsy, stroke, memory loss, Parkinson’s disease.
                            </p>
                            <p>
                              <b>3. Pulmonologist:</b> For asthma, COPD, chronic cough, sleep apnea.
                            </p>
                            <p>
                              <b>4. Orthopedic Specialist:</b> For fractures, arthritis, back pain, joint problems.
                            </p>
                            <p>
                              <b>5. Dermatologist:</b> For skin allergies, acne, psoriasis, hair fall, nail disorders.
                            </p>
                            <p>
                              <b>6. Endocrinologist:</b> For diabetes, thyroid, obesity, hormonal imbalance.
                            </p>
                            <p>
                              <b>7. Gastroenterologist:</b> For acidity, ulcers, liver disease, indigestion.
                            </p>
                            <p>
                              <b>8. Gynecologist:</b> For women’s health, menstrual issues, pregnancy care, menopause.
                            </p>
                            <p>
                              <b>9. Nephrologist:</b> For kidney disease, high BP, dialysis care, electrolyte imbalance.
                            </p>
                            <p>
                              <b>10. Oncologist:</b> For cancer screening, diagnosis, and ongoing management.
                            </p>
                            <p>
                              <b>11. Psychiatrist / Psychologist:</b> For depression, anxiety, stress, insomnia.
                            </p>
                            <p>
                              <b>12. ENT Specialist:</b> For ear infections, sinusitis, throat problems, hearing loss.
                            </p>
                            <p>
                              <b>13. Ophthalmologist:</b> For vision care, eye infections, glaucoma, diabetic eye disease.
                            </p>
                            <p>
                              <b>14. Rheumatologist:</b> For autoimmune disorders, arthritis, chronic pain.
                            </p>
                            <p>
                              <b>15. Pediatric Specialist:</b> For children’s health, growth monitoring, infections.
                            </p>
                            <p>
                              <b>16. Geriatric Specialist:</b> For elderly care, dementia, chronic illness management.
                            </p>
                            <p>
                              …and many more based on patient requirements.
                            </p>
                            <p>
                              <b>
                                Indications – When Should You Call a Specialist Doctor at Home?
                              </b>
                            </p>
                            <p>
                              ✔ Persistent or unexplained symptoms (chest pain, chronic cough, severe headaches, joint pain, skin rashes).
                            </p>
                            <p>
                              ✔ Chronic diseases requiring regular expert supervision (diabetes, asthma, kidney disease, hypertension).
                            </p>
                            <p>
                              ✔ Post-hospitalization care (heart surgery recovery, stroke rehabilitation, fracture healing).
                            </p>
                            <p>
                              ✔ Preventive & routine check-ups (women’s health, cancer screening, elderly check-ups).
                            </p>
                            <p>
                              ✔ Emergency evaluation when immediate access to a specialist is required but hospital visit is difficult.
                            </p>
                            <p>
                              <b>
                                Importance & Benefits of Specialist Consultation at Home:
                              </b>
                            </p>
                            <p>
                              ✅ <b>Accurate Diagnosis:</b> Specialists detect complex conditions early.
                            </p>
                            <p>
                              ✅ <b>Targeted Treatment:</b> Focused expertise for faster recovery.
                            </p>
                            <p>
                              ✅ <b>Convenience & Comfort:</b> No waiting lines or hospital travel.
                            </p>
                            <p>
                              ✅ <b>Continuity of Care:</b> Regular follow-ups at home ensure better disease control.
                            </p>
                            <p>
                              ✅ <b>Ideal for Elderly & Bedridden Patients:</b> Saves them from stressful travel.
                            </p>
                            <p>
                              ✅ <b>Integrated with Diagnostics:</b> ECG, X-ray, pathology, and scans available at home for complete care.
                            </p>
                            <p>
                              ✅ <b>Safe & Private:</b> Care is provided in the comfort of your home with full confidentiality.
                            </p>
                            <p>
                              <b>
                                Why Winbri Life Science Specialty Consultation is Better?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we go beyond simple doctor visits – we provide end-to-end healthcare solutions at your doorstep:
                            </p>
                            <p>
                              🕑 24 × 7 × 365 Availability – Specialists available anytime, including emergencies.
                            </p>
                            <p>
                              👨‍⚕ Certified & Experienced Doctors – Highly qualified doctors across all specialties.
                            </p>
                            <p>
                              🏠 Doorstep Healthcare – Expert care without the hassle of travel.
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Quick follow-ups and second opinions online.
                            </p>
                            <p>
                              🤝 Complete Medical Ecosystem – Backed with physiotherapy, nursing, dietician, and lab tests at home.
                            </p>
                            <p>
                              ⚡ Fast & Reliable Service – Same-day appointments, minimal waiting.
                            </p>
                            <p>
                              ❤ Patient-Centric Approach – Comfort, privacy, and compassion come first.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book an Appointment:</b> Call or book online for your required specialist.
                            </p>
                            <p>
                              <b>2. Home Visit:</b> Doctor arrives at your home, office, or preferred location.
                            </p>
                            <p>
                              <b>3. Evaluation & Diagnosis:</b> Complete medical history review, examination, and necessary tests.
                            </p>
                            <p>
                              <b>4. Certified Reports:</b> Diagnostic reports are reviewed by specialists for accuracy.
                            </p>
                            <p>
                              <b>5. Treatment Plan:</b> Get prescriptions, lifestyle advice, and care recommendations.
                            </p>
                            <p>
                              <b>6. Follow-Up Support:</b> Tele-consultation, nursing care, or physiotherapy as needed.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Hospital-Level Care, Right at Your Doorstep
                              </b>
                            </p>
                            <p>
                              With specialty consultations, general practitioner visits, nursing care, physiotherapy, dietician support, and diagnostics at home, Winbri Life Science is your complete healthcare partner – available anytime, anywhere.
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

export default SpecialtyDoctorConsultationService;
