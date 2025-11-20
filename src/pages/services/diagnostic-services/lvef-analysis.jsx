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

function LVEFAnalysisService() {
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
                  <h2>Doorstep LVEF Analysis</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">LVEF Analysis</li>
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
                                src="/assets/images/services/lvef.JPG"
                                alt="#"
                              />
                            </div>
                          </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              LVEF Analysis by ECG at Your Doorstep
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              LVEF (Left Ventricular Ejection Fraction) is a
                              crucial measure of how well your heart is pumping
                              blood. It represents the percentage of blood the
                              left ventricle pumps out with each heartbeat.
                            </p>
                            <p>A normal LVEF is usually 50–70%.</p>
                            <p>
                              A low LVEF indicates weakened heart pumping
                              function, which may suggest heart failure or
                              cardiomyopathy.
                            </p>
                            <p>
                              A high LVEF may point toward certain heart
                              conditions like hypertrophic cardiomyopathy.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              Traditionally, LVEF is measured using
                              echocardiography, but advanced ECG-based analysis
                              algorithms can provide reliable screening of
                              cardiac performance. This allows non-invasive,
                              quick, and cost-effective LVEF estimation at your
                              doorstep.
                            </p>
                            <p>
                              At Winbri Life Science, we provide LVEF analysis
                              by ECG, with reports certified by cardiologists
                              and supported by tele-consultation services.
                            </p>
                            <p>
                              <b>Indications – When is LVEF Analysis Needed?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>
                                    1. Symptoms Suggesting Heart Dysfunction
                                  </b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Shortness of breath (especially on
                                      exertion or at night)
                                    </li>
                                    <li>Fatigue, weakness, or dizziness</li>
                                    <li>
                                      Swelling in ankles, legs, or abdomen
                                    </li>
                                    <li>Persistent cough or wheezing</li>
                                    <li>Palpitations or irregular heartbeat</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Clinical Conditions</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Suspected or confirmed heart failure
                                    </li>
                                    <li>
                                      Cardiomyopathy (dilated, hypertrophic, or
                                      restrictive)
                                    </li>
                                    <li>
                                      Coronary artery disease (after heart
                                      attack or angina)
                                    </li>
                                    <li>Hypertension-related heart damage</li>
                                    <li>Valvular heart disease</li>
                                    <li>
                                      Monitoring patients after pacemaker or ICD
                                      placement
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Monitoring & Risk Stratification</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Assessing effectiveness of heart failure
                                      treatment
                                    </li>
                                    <li>
                                      Monitoring patients on chemotherapy
                                      (certain drugs affect heart function)
                                    </li>
                                    <li>Pre-surgical cardiac assessment</li>
                                    <li>
                                      Routine cardiac evaluation in high-risk
                                      patients (diabetics, hypertensives,
                                      elderly)
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why LVEF Analysis is Important?</b>
                            </p>
                            <p>
                              <b>Heart Health Indicator:</b> LVEF is a key
                              measure of how strong and efficient the heart is.
                            </p>
                            <p>
                              <b>Early Detection:</b> Identifies early stages of
                              heart failure before symptoms worsen.
                            </p>
                            <p>
                              <b>Treatment Guidance:</b> Helps cardiologists
                              decide on medications, devices, or surgical
                              intervention.
                            </p>
                            <p>
                              <b>Prognostic Value:</b> LVEF levels predict risk
                              of hospitalization, arrhythmias, or cardiac
                              arrest.
                            </p>
                            <p>
                              <b>Monitoring Therapy:</b> Ensures treatments like
                              ACE inhibitors, beta-blockers, or cardiac devices
                              are working effectively.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science LVEF Service?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we make advanced cardiac
                              performance assessment accessible at your
                              doorstep.
                            </p>
                            <p>
                              🕑 24 × 7 × 365 Service – Always available,
                              anytime, anywhere.
                            </p>
                            <p>
                              🏠 Doorstep Testing – LVEF analysis by ECG at
                              home, office, clinic, hospital, or diagnostic
                              centre.
                            </p>
                            <p>
                              👨‍⚕ Cardiologist-Certified Reports – Every LVEF
                              analysis is reviewed and validated by experienced
                              cardiologists.
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Discuss your
                              results directly with a heart specialist.
                            </p>
                            <p>
                              ⚡ Non-Invasive & Quick – No radiation, no
                              injections, just an advanced ECG-based analysis.
                            </p>
                            <p>
                              🔒 Confidential & Secure – Reports safely handled
                              and shared with you.
                            </p>
                            <p>
                              ❤ Patient-Centered Care – No hospital visits, no
                              waiting – advanced heart care at your convenience.
                            </p>
                            <p>
                              <b>How Our LVEF Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Package:</b> Call or book online
                              for LVEF analysis by ECG.
                            </p>
                            <p>
                              <b>2. Doorstep Setup:</b> Our trained technician
                              arrives with a portable ECG device and sets it up.
                            </p>
                            <p>
                              <b>3. ECG Recording:</b> A standard 12-lead ECG is
                              performed, capturing detailed heart rhythm and
                              electrical activity.
                            </p>
                            <p>
                              <b>4. LVEF Estimation:</b> The ECG is processed
                              using advanced algorithms that analyze heart
                              performance and estimate LVEF.
                            </p>
                            <p>
                              <b>5. Specialist Review:</b> Report is validated
                              and certified by a cardiologist.
                            </p>
                            <p>
                              <b>6. Report Delivery:</b> Results are delivered
                              via WhatsApp, Email, or printed copy.
                            </p>
                            <p>
                              <b>7. Tele-Consultation:</b> Discuss your LVEF
                              findings with a cardiologist for treatment or
                              lifestyle guidances.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Advanced Heart Performance
                                Testing at Your Doorstep
                              </b>
                            </p>
                            <p>
                              With 24/7 doorstep LVEF analysis,
                              cardiologist-certified reports, and
                              tele-consultation support, Winbri Life Science
                              ensures accurate detection and management of heart
                              function – anytime, anywhere.
                            </p>
                            <p>
                              💙 Measure Your Heart’s Strength – With Winbri
                              Life Science. 💙
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
                                  Traditionally, LVEF is measured using
                                  echocardiography, but advanced ECG-based
                                  analysis algorithms can provide reliable
                                  screening of cardiac performance. This allows
                                  non-invasive, quick, and cost-effective LVEF
                                  estimation at your doorstep.
                                </p>
                                <p>
                                  At Winbri Life Science, we provide LVEF
                                  analysis by ECG, with reports certified by
                                  cardiologists and supported by
                                  tele-consultation services.
                                </p>
                                <p>
                                  <b>
                                    Indications – When is LVEF Analysis Needed?
                                  </b>
                                </p>
                                <div className="row">
                                  <div className="col-md-4">
                                    <p>
                                      <b>
                                        1. Symptoms Suggesting Heart Dysfunction
                                      </b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Shortness of breath (especially on
                                          exertion or at night)
                                        </li>
                                        <li>Fatigue, weakness, or dizziness</li>
                                        <li>
                                          Swelling in ankles, legs, or abdomen
                                        </li>
                                        <li>Persistent cough or wheezing</li>
                                        <li>
                                          Palpitations or irregular heartbeat
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>2. Clinical Conditions</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Suspected or confirmed heart failure
                                        </li>
                                        <li>
                                          Cardiomyopathy (dilated, hypertrophic,
                                          or restrictive)
                                        </li>
                                        <li>
                                          Coronary artery disease (after heart
                                          attack or angina)
                                        </li>
                                        <li>
                                          Hypertension-related heart damage
                                        </li>
                                        <li>Valvular heart disease</li>
                                        <li>
                                          Monitoring patients after pacemaker or
                                          ICD placement
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>3. Monitoring & Risk Stratification</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Assessing effectiveness of heart
                                          failure treatment
                                        </li>
                                        <li>
                                          Monitoring patients on chemotherapy
                                          (certain drugs affect heart function)
                                        </li>
                                        <li>Pre-surgical cardiac assessment</li>
                                        <li>
                                          Routine cardiac evaluation in
                                          high-risk patients (diabetics,
                                          hypertensives, elderly)
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why LVEF Analysis is Important?</b>
                                </p>
                                <p>
                                  <b>Heart Health Indicator:</b> LVEF is a key
                                  measure of how strong and efficient the heart
                                  is.
                                </p>
                                <p>
                                  <b>Early Detection:</b> Identifies early
                                  stages of heart failure before symptoms
                                  worsen.
                                </p>
                                <p>
                                  <b>Treatment Guidance:</b> Helps cardiologists
                                  decide on medications, devices, or surgical
                                  intervention.
                                </p>
                                <p>
                                  <b>Prognostic Value:</b> LVEF levels predict
                                  risk of hospitalization, arrhythmias, or
                                  cardiac arrest.
                                </p>
                                <p>
                                  <b>Monitoring Therapy:</b> Ensures treatments
                                  like ACE inhibitors, beta-blockers, or cardiac
                                  devices are working effectively.
                                </p>
                                <p>
                                  <b>
                                    Why Choose Winbri Life Science LVEF Service?
                                  </b>
                                </p>
                                <p>
                                  At Winbri Life Science, we make advanced
                                  cardiac performance assessment accessible at
                                  your doorstep.
                                </p>
                                <p>
                                  🕑 24 × 7 × 365 Service – Always available,
                                  anytime, anywhere.
                                </p>
                                <p>
                                  🏠 Doorstep Testing – LVEF analysis by ECG at
                                  home, office, clinic, hospital, or diagnostic
                                  centre.
                                </p>
                                <p>
                                  👨‍⚕ Cardiologist-Certified Reports – Every
                                  LVEF analysis is reviewed and validated by
                                  experienced cardiologists.
                                </p>
                                <p>
                                  📞 Tele-Consultation Support – Discuss your
                                  results directly with a heart specialist.
                                </p>
                                <p>
                                  ⚡ Non-Invasive & Quick – No radiation, no
                                  injections, just an advanced ECG-based
                                  analysis.
                                </p>
                                <p>
                                  🔒 Confidential & Secure – Reports safely
                                  handled and shared with you.
                                </p>
                                <p>
                                  ❤ Patient-Centered Care – No hospital visits,
                                  no waiting – advanced heart care at your
                                  convenience.
                                </p>
                                <p>
                                  <b>How Our LVEF Service Works?</b>
                                </p>
                                <p>
                                  <b>1. Book Your Package:</b> Call or book
                                  online for LVEF analysis by ECG.
                                </p>
                                <p>
                                  <b>2. Doorstep Setup:</b> Our trained
                                  technician arrives with a portable ECG device
                                  and sets it up.
                                </p>
                                <p>
                                  <b>3. ECG Recording:</b> A standard 12-lead
                                  ECG is performed, capturing detailed heart
                                  rhythm and electrical activity.
                                </p>
                                <p>
                                  <b>4. LVEF Estimation:</b> The ECG is
                                  processed using advanced algorithms that
                                  analyze heart performance and estimate LVEF.
                                </p>
                                <p>
                                  <b>5. Specialist Review:</b> Report is
                                  validated and certified by a cardiologist.
                                </p>
                                <p>
                                  <b>6. Report Delivery:</b> Results are
                                  delivered via WhatsApp, Email, or printed
                                  copy.
                                </p>
                                <p>
                                  <b>7. Tele-Consultation:</b> Discuss your LVEF
                                  findings with a cardiologist for treatment or
                                  lifestyle guidances.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science – Advanced Heart
                                    Performance Testing at Your Doorstep
                                  </b>
                                </p>
                                <p>
                                  With 24/7 doorstep LVEF analysis,
                                  cardiologist-certified reports, and
                                  tele-consultation support, Winbri Life Science
                                  ensures accurate detection and management of
                                  heart function – anytime, anywhere.
                                </p>
                                <p>
                                  💙 Measure Your Heart’s Strength – With Winbri
                                  Life Science. 💙
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

        <AllServices service={"lvef"} />
      </>

      <HomeFooter />
    </>
  );
}

export default LVEFAnalysisService;
