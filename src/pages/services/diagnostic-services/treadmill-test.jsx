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

function TreadmillTestService() {
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
                  <h2>Treadmill Test at Center</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Treadmill Test</li>
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
                                src="/assets/images/services/treadmill.JPG"
                                alt="#"
                              />
                            </div>
                            <div className="news-head">
                              <img
                                src="/assets/images/services/treadmill-2.JPG"
                                alt="#"
                                className="service-img"
                              />
                            </div>
                            <div className="news-head">
                              <img
                                src="/assets/images/services/treadmill-3.JPG"
                                alt="#"
                              />
                            </div>
                          </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              Treadmill Test (TMT) Service
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              A Treadmill Test (TMT), also called a Cardiac
                              Stress Test, is a diagnostic procedure that
                              evaluates how your heart responds to physical
                              activity. During the test, the patient walks on a
                              treadmill while their ECG, heart rate, and blood
                              pressure are continuously monitored.
                            </p>
                            <p>
                              The test helps detect reduced blood supply to the
                              heart muscle (ischemia) that may not be visible
                              when the heart is at rest. It is an essential tool
                              for diagnosing coronary artery disease (CAD),
                              assessing heart fitness, and planning treatment
                              strategies.
                            </p>
                            <p>
                              At Winbri Life Science, we provide TMT testing
                              with cardiologist-certified reports, followed by a
                              detailed consultation with a cardiologist at our
                              center.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>Indications – When is TMT Needed?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <p>
                                  <b>1. Suspected Heart Disease</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Chest pain, heaviness, or discomfort
                                      during exertion
                                    </li>
                                    <li>Shortness of breath on activity</li>
                                    <li>
                                      Abnormal resting ECG but unclear diagnosis
                                    </li>
                                    <li>Family history of heart disease</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>2. Known Heart Patients</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      To assess severity of coronary artery
                                      disease
                                    </li>
                                    <li>
                                      Post-angioplasty or post-bypass follow-up
                                    </li>
                                    <li>
                                      Monitoring effectiveness of treatment for
                                      angina
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>3. Risk Assessment</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      People with risk factors like diabetes,
                                      hypertension, obesity, smoking, or high
                                      cholesterol
                                    </li>
                                    <li>
                                      Pre-employment or executive health
                                      check-ups
                                    </li>
                                    <li>
                                      Fitness evaluation before starting
                                      vigorous exercise programs
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>4. Pre-Surgical Evaluation</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Assessing heart fitness before major
                                      surgery
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why TMT is Important?</b>
                            </p>
                            <p>
                              <b>Early Detection of CAD:</b> Identifies reduced
                              blood flow to the heart during exertion.
                            </p>
                            <p>
                              <b>Guides Treatment:</b> Helps doctors decide on
                              angiography, angioplasty, or medical therapy.
                            </p>
                            <p>
                              <b>Evaluates Fitness:</b> Determines exercise
                              tolerance and heart’s ability to handle stress.
                            </p>
                            <p>
                              <b>Prognostic Tool:</b> Predicts risk of heart
                              attack or cardiac complications.
                            </p>
                            <p>
                              <b>Safe & Non-Invasive:</b> Simple test without
                              radiation or injections.
                            </p>
                            <p>
                              <b>Why Choose Winbri Life Science TMT Service?</b>
                            </p>
                            <p>
                              At Winbri Life Science, we ensure accurate results
                              and expert-guided care:
                            </p>
                            <p>
                              🩺 Cardiologist-Supervised Testing – Conducted
                              under the supervision of experienced heart
                              specialists.
                            </p>
                            <p>
                              📃 Cardiologist-Certified Reports – Every TMT is
                              interpreted and validated by a cardiologist.
                            </p>
                            <p>
                              🏥 Complete Service in One Place – Test + Report +
                              Cardiologist Consultation.
                            </p>
                            <p>
                              ⚡ Advanced Equipment – Latest treadmill and
                              monitoring systems for precise results.
                            </p>
                            <p>
                              ❤ Patient Safety First – Continuous monitoring
                              with emergency support available.
                            </p>
                            <p>
                              🕑 Quick & Hassle-Free – Same-day testing and
                              consultation, no long waiting periods.
                            </p>
                            <p>
                              📞 Personalized Guidance – Direct consultation
                              with a cardiologist for next steps.
                            </p>
                            <p>
                              <b>How Our TMT Service Works?</b>
                            </p>
                            <p>
                              <b>1. Booking & Preparation:</b> Schedule an
                              appointment at our center. Patients are advised to
                              wear comfortable clothes and shoes. Fasting may be
                              required in some cases (as per doctor’s advice).
                            </p>
                            <p>
                              <b>2. Resting ECG & Baseline:</b> Before starting,
                              a resting ECG and blood pressure are recorded.
                            </p>
                            <p>
                              <b>3. Exercise Phase:</b> The patient walks on a
                              treadmill at gradually increasing speed and
                              incline. Continuous ECG, heart rate, and blood
                              pressure monitoring are done. The test continues
                              until target heart rate is achieved or symptoms
                              appear.
                            </p>
                            <p>
                              <b>4. Recovery Phase:</b> ECG and BP are monitored
                              as the patient rests after exercise. The test
                              usually takes 30–45 minutes.
                            </p>
                            <p>
                              <b>5. Cardiologist Review & Report:</b> The
                              results are analyzed by a cardiologist and a
                              certified report is prepared. A detailed
                              consultation with the cardiologist is provided on
                              the same day.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Trusted Cardiac
                                Diagnostics
                              </b>
                            </p>
                            <p>
                              With specialist-supervised TMT,
                              cardiologist-certified reports, and in-person
                              consultation, Winbri Life Science ensures accurate
                              diagnosis, safe testing, and expert-guided heart
                              care.
                            </p>
                            <p>
                              💙 Test Your Heart’s Strength – With Winbri Life
                              Science TMT. 💙
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
                                  <b>Indications – When is TMT Needed?</b>
                                </p>
                                <div className="row">
                                  <div className="col-md-6">
                                    <p>
                                      <b>1. Suspected Heart Disease</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Chest pain, heaviness, or discomfort
                                          during exertion
                                        </li>
                                        <li>Shortness of breath on activity</li>
                                        <li>
                                          Abnormal resting ECG but unclear
                                          diagnosis
                                        </li>
                                        <li>Family history of heart disease</li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p>
                                      <b>2. Known Heart Patients</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          To assess severity of coronary artery
                                          disease
                                        </li>
                                        <li>
                                          Post-angioplasty or post-bypass
                                          follow-up
                                        </li>
                                        <li>
                                          Monitoring effectiveness of treatment
                                          for angina
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p>
                                      <b>3. Risk Assessment</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          People with risk factors like
                                          diabetes, hypertension, obesity,
                                          smoking, or high cholesterol
                                        </li>
                                        <li>
                                          Pre-employment or executive health
                                          check-ups
                                        </li>
                                        <li>
                                          Fitness evaluation before starting
                                          vigorous exercise programs
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p>
                                      <b>4. Pre-Surgical Evaluation</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Assessing heart fitness before major
                                          surgery
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why TMT is Important?</b>
                                </p>
                                <p>
                                  <b>Early Detection of CAD:</b> Identifies
                                  reduced blood flow to the heart during
                                  exertion.
                                </p>
                                <p>
                                  <b>Guides Treatment:</b> Helps doctors decide
                                  on angiography, angioplasty, or medical
                                  therapy.
                                </p>
                                <p>
                                  <b>Evaluates Fitness:</b> Determines exercise
                                  tolerance and heart’s ability to handle
                                  stress.
                                </p>
                                <p>
                                  <b>Prognostic Tool:</b> Predicts risk of heart
                                  attack or cardiac complications.
                                </p>
                                <p>
                                  <b>Safe & Non-Invasive:</b> Simple test
                                  without radiation or injections.
                                </p>
                                <p>
                                  <b>
                                    Why Choose Winbri Life Science TMT Service?
                                  </b>
                                </p>
                                <p>
                                  At Winbri Life Science, we ensure accurate
                                  results and expert-guided care:
                                </p>
                                <p>
                                  🩺 Cardiologist-Supervised Testing – Conducted
                                  under the supervision of experienced heart
                                  specialists.
                                </p>
                                <p>
                                  📃 Cardiologist-Certified Reports – Every TMT
                                  is interpreted and validated by a
                                  cardiologist.
                                </p>
                                <p>
                                  🏥 Complete Service in One Place – Test +
                                  Report + Cardiologist Consultation.
                                </p>
                                <p>
                                  ⚡ Advanced Equipment – Latest treadmill and
                                  monitoring systems for precise results.
                                </p>
                                <p>
                                  ❤ Patient Safety First – Continuous monitoring
                                  with emergency support available.
                                </p>
                                <p>
                                  🕑 Quick & Hassle-Free – Same-day testing and
                                  consultation, no long waiting periods.
                                </p>
                                <p>
                                  📞 Personalized Guidance – Direct consultation
                                  with a cardiologist for next steps.
                                </p>
                                <p>
                                  <b>How Our TMT Service Works?</b>
                                </p>
                                <p>
                                  <b>1. Booking & Preparation:</b> Schedule an
                                  appointment at our center. Patients are
                                  advised to wear comfortable clothes and shoes.
                                  Fasting may be required in some cases (as per
                                  doctor’s advice).
                                </p>
                                <p>
                                  <b>2. Resting ECG & Baseline:</b> Before
                                  starting, a resting ECG and blood pressure are
                                  recorded.
                                </p>
                                <p>
                                  <b>3. Exercise Phase:</b> The patient walks on
                                  a treadmill at gradually increasing speed and
                                  incline. Continuous ECG, heart rate, and blood
                                  pressure monitoring are done. The test
                                  continues until target heart rate is achieved
                                  or symptoms appear.
                                </p>
                                <p>
                                  <b>4. Recovery Phase:</b> ECG and BP are
                                  monitored as the patient rests after exercise.
                                  The test usually takes 30–45 minutes.
                                </p>
                                <p>
                                  <b>5. Cardiologist Review & Report:</b> The
                                  results are analyzed by a cardiologist and a
                                  certified report is prepared. A detailed
                                  consultation with the cardiologist is provided
                                  on the same day.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science – Trusted Cardiac
                                    Diagnostics
                                  </b>
                                </p>
                                <p>
                                  With specialist-supervised TMT,
                                  cardiologist-certified reports, and in-person
                                  consultation, Winbri Life Science ensures
                                  accurate diagnosis, safe testing, and
                                  expert-guided heart care.
                                </p>
                                <p>
                                  💙 Test Your Heart’s Strength – With Winbri
                                  Life Science TMT. 💙
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

        <AllServices service={"tmt"} />
      </>

      <HomeFooter />
    </>
  );
}

export default TreadmillTestService;
