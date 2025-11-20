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

function DieticianService() {
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
                  <h2>Doorstep Dietician Consultation</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Dietician Consultation</li>
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
                              Dietician Consultation at Home
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              At Winbri Life Science, we believe that nutrition is the foundation of good health. Whether you are aiming for weight management, recovering from illness, managing chronic diseases, or improving overall lifestyle, our Dietician at Home service ensures you receive personalized nutrition guidance in the comfort of your home.
                            </p>
                            <p>
                              With certified dieticians and nutrition experts, we design tailor-made diet plans based on your medical condition, lifestyle, and health goals. Supported by our team of doctors, physiotherapists, and nursing staff, our dietician services bring holistic health care directly to your doorstep.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>Indications – When Do You Need a Dietician at Home?</b>
                            </p>
                            <p>
                              A dietician consultation is essential in the following cases:
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <p>
                                  <b>1. Medical Nutrition Therapy:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Diabetes, hypertension, thyroid, and cholesterol management</li>
                                    <li>Kidney disease, liver disorders, digestive problems</li>
                                    <li>Heart disease and post-cardiac surgery recovery</li>
                                    <li>Cancer care and nutritional support during treatment</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>2. Weight & Lifestyle Management:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Obesity, overweight, or underweight issues</li>
                                    <li>Healthy weight gain or loss programs</li>
                                    <li>Balanced diet planning for fitness and athletes</li>
                                    <li>Lifestyle disorders due to stress, sedentary habits, or poor eating</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>3. Special Needs:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Pregnancy and lactation nutrition</li>
                                    <li>Pediatric nutrition for growth & development</li>
                                    <li>Geriatric nutrition for elderly patients</li>
                                    <li>Food allergies and intolerance (gluten, lactose, etc.)</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>4. Recovery & Preventive Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Post-surgery recovery diets</li>
                                    <li>Post-COVID or chronic illness nutrition support</li>
                                    <li>Preventive health check-ups and long-term wellness</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>
                                Importance of Dietician at Home:
                              </b>
                            </p>
                            <p>
                              ✔ <b>Personalized Approach:</b> Every body is different, so diet must be tailored to the individual.
                            </p>
                            <p>
                              ✔ <b>Disease Management:</b> Nutrition can control and even reverse chronic lifestyle conditions.
                            </p>
                            <p>
                              ✔ <b>Faster Recovery:</b> Correct nutrition accelerates healing post-illness or surgery.
                            </p>
                            <p>
                              ✔ <b>Preventive Health:</b> Balanced diets reduce the risk of future diseases.
                            </p>
                            <p>
                              ✔ <b>Sustainable Lifestyle:</b> Practical meal plans for long-term health improvement.
                            </p>
                            <p>
                              <b>
                                Benefits of Winbri Life Science Dietician Services:
                              </b>
                            </p>
                            <p>
                              ✅ <b>Certified Dieticians:</b> Experienced in clinical and lifestyle nutrition.
                            </p>
                            <p>
                              ✅ <b>Doorstep Service:</b> No need to travel; consultations at home save time and effort.
                            </p>
                            <p>
                              ✅ <b>Holistic Healthcare:</b> Backed by doctors, physiotherapists, and nursing team.
                            </p>
                            <p>
                              ✅ <b>Customized Meal Plans:</b> Designed according to medical reports, lifestyle, and preferences.
                            </p>
                            <p>
                              ✅ <b>Convenience & Privacy:</b> One-on-one sessions in your own space.
                            </p>
                            <p>
                              ✅ <b>Continuous Support:</b> Follow-up via tele-consultation for progress tracking.
                            </p>
                            <p>
                              ✅ <b>24 × 7 Availability:</b> Appointments as per your schedule.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book Appointment:</b> Call or book online for a dietician home visit.
                            </p>
                            <p>
                              <b>2. Health & Lifestyle Assessment:</b> Dietician reviews medical history, reports, eating habits, and lifestyle.
                            </p>
                            <p>
                              <b>3. Customized Nutrition Plan:</b> Personalized diet chart designed as per goals and conditions.
                            </p>
                            <p>
                              <b>4. Guidance & Education:</b> Counseling on food choices, portion control, and practical meal planning.
                            </p>
                            <p>
                              <b>5. Follow-Up Support:</b> Regular monitoring, plan adjustments, and tele-consultation as needed.
                            </p>
                            <p>
                              <b>6. Holistic Care Integration:</b> Coordination with doctors, physiotherapists, or nursing care for comprehensive treatment.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science?
                              </b>
                            </p>
                            <p>
                              Unlike generic diet advice or online apps, Winbri Life Science provides clinical, evidence-based nutrition guidance combined with doorstep healthcare support. Our strength lies in:
                              <ul className="list-style-unset pl-3">
                                <li><b>24/7 service availability:</b> at home, office, or clinic</li>
                                <li><b>Certified dieticians</b> with clinical expertise</li>
                                <li><b>Integrated healthcare team:</b> doctors, diagnostics, nursing, physiotherapy</li>
                                <li><b>Patient-centered care:</b> focus on comfort, privacy, and long-term results</li>
                                <li><b>Convenience & reliability:</b> professional service at your doorstep</li>
                              </ul>
                            </p>
                            <p>
                              💙 Winbri Life Science – Because the Right Nutrition is the First Step to Better Health. 💙
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
                              <b>Indications – When Do You Need a Dietician at Home?</b>
                            </p>
                            <p>
                              A dietician consultation is essential in the following cases:
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <p>
                                  <b>1. Medical Nutrition Therapy:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Diabetes, hypertension, thyroid, and cholesterol management</li>
                                    <li>Kidney disease, liver disorders, digestive problems</li>
                                    <li>Heart disease and post-cardiac surgery recovery</li>
                                    <li>Cancer care and nutritional support during treatment</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>2. Weight & Lifestyle Management:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Obesity, overweight, or underweight issues</li>
                                    <li>Healthy weight gain or loss programs</li>
                                    <li>Balanced diet planning for fitness and athletes</li>
                                    <li>Lifestyle disorders due to stress, sedentary habits, or poor eating</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>3. Special Needs:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Pregnancy and lactation nutrition</li>
                                    <li>Pediatric nutrition for growth & development</li>
                                    <li>Geriatric nutrition for elderly patients</li>
                                    <li>Food allergies and intolerance (gluten, lactose, etc.)</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>4. Recovery & Preventive Care:</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Post-surgery recovery diets</li>
                                    <li>Post-COVID or chronic illness nutrition support</li>
                                    <li>Preventive health check-ups and long-term wellness</li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>
                                Importance of Dietician at Home:
                              </b>
                            </p>
                            <p>
                              ✔ <b>Personalized Approach:</b> Every body is different, so diet must be tailored to the individual.
                            </p>
                            <p>
                              ✔ <b>Disease Management:</b> Nutrition can control and even reverse chronic lifestyle conditions.
                            </p>
                            <p>
                              ✔ <b>Faster Recovery:</b> Correct nutrition accelerates healing post-illness or surgery.
                            </p>
                            <p>
                              ✔ <b>Preventive Health:</b> Balanced diets reduce the risk of future diseases.
                            </p>
                            <p>
                              ✔ <b>Sustainable Lifestyle:</b> Practical meal plans for long-term health improvement.
                            </p>
                            <p>
                              <b>
                                Benefits of Winbri Life Science Dietician Services:
                              </b>
                            </p>
                            <p>
                              ✅ <b>Certified Dieticians:</b> Experienced in clinical and lifestyle nutrition.
                            </p>
                            <p>
                              ✅ <b>Doorstep Service:</b> No need to travel; consultations at home save time and effort.
                            </p>
                            <p>
                              ✅ <b>Holistic Healthcare:</b> Backed by doctors, physiotherapists, and nursing team.
                            </p>
                            <p>
                              ✅ <b>Customized Meal Plans:</b> Designed according to medical reports, lifestyle, and preferences.
                            </p>
                            <p>
                              ✅ <b>Convenience & Privacy:</b> One-on-one sessions in your own space.
                            </p>
                            <p>
                              ✅ <b>Continuous Support:</b> Follow-up via tele-consultation for progress tracking.
                            </p>
                            <p>
                              ✅ <b>24 × 7 Availability:</b> Appointments as per your schedule.
                            </p>
                            <p>
                              <b>How It Works?</b>
                            </p>
                            <p>
                              <b>1. Book Appointment:</b> Call or book online for a dietician home visit.
                            </p>
                            <p>
                              <b>2. Health & Lifestyle Assessment:</b> Dietician reviews medical history, reports, eating habits, and lifestyle.
                            </p>
                            <p>
                              <b>3. Customized Nutrition Plan:</b> Personalized diet chart designed as per goals and conditions.
                            </p>
                            <p>
                              <b>4. Guidance & Education:</b> Counseling on food choices, portion control, and practical meal planning.
                            </p>
                            <p>
                              <b>5. Follow-Up Support:</b> Regular monitoring, plan adjustments, and tele-consultation as needed.
                            </p>
                            <p>
                              <b>6. Holistic Care Integration:</b> Coordination with doctors, physiotherapists, or nursing care for comprehensive treatment.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science?
                              </b>
                            </p>
                            <p>
                              Unlike generic diet advice or online apps, Winbri Life Science provides clinical, evidence-based nutrition guidance combined with doorstep healthcare support. Our strength lies in:
                              <ul className="list-style-unset pl-3">
                                <li><b>24/7 service availability:</b> at home, office, or clinic</li>
                                <li><b>Certified dieticians</b> with clinical expertise</li>
                                <li><b>Integrated healthcare team:</b> doctors, diagnostics, nursing, physiotherapy</li>
                                <li><b>Patient-centered care:</b> focus on comfort, privacy, and long-term results</li>
                                <li><b>Convenience & reliability:</b> professional service at your doorstep</li>
                              </ul>
                            </p>
                            <p>
                              💙 Winbri Life Science – Because the Right Nutrition is the First Step to Better Health. 💙
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

export default DieticianService;
