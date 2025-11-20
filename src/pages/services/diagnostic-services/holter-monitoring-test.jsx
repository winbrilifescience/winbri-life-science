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

function HolterMonitoringService() {
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
                  <h2>Doorstep Holter Monitoring Test</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Holter Monitoring Test</li>
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
                            <img src="/assets/images/services/holter.JPG" alt="#" />
                          </div>
                          <div className="news-head">
                            <img src="/assets/images/services/holter-2.JPG" alt="#" />
                          </div>
                                                    </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              Holter Monitoring Test at Your Doorstep
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              A Holter Monitor is a small, wearable device that
                              records your heart’s electrical activity (ECG)
                              continuously for 24 hours, 48 hours, 72 hours, or
                              even up to 7 days.
                            </p>
                            <p>
                              Unlike a standard ECG, which records heart
                              activity for just a few seconds, a Holter monitor
                              tracks your heart rhythm over a longer period –
                              helping to detect irregularities that may not
                              appear during a short test.
                            </p>
                            <p>
                              It is especially useful for diagnosing
                              intermittent or hidden heart rhythm problems that
                              occur occasionally throughout the day or during
                              sleep.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>
                                Indications – When is Holter Monitoring Needed?
                              </b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>
                                    1. Symptoms Suggestive of Heart Rhythm
                                    Problems
                                  </b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Palpitations (fast, irregular, or skipped
                                      beats)
                                    </li>
                                    <li>
                                      Dizziness, fainting spells, or unexplained
                                      blackouts
                                    </li>
                                    <li>
                                      Chest pain or discomfort not explained by
                                      regular ECG
                                    </li>
                                    <li>
                                      Shortness of breath or unexplained fatigue
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Clinical Conditions</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Arrhythmias (irregular heartbeat)</li>
                                    <li>Atrial fibrillation/flutter</li>
                                    <li>Heart block or conduction disorders</li>
                                    <li>
                                      Unexplained stroke or mini-stroke (to
                                      check for hidden arrhythmias)
                                    </li>
                                    <li>
                                      Monitoring after pacemaker or
                                      defibrillator placement
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Monitoring and Preventive Use</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Evaluating treatment effectiveness for
                                      heart rhythm disorders
                                    </li>
                                    <li>
                                      Assessing patients with high blood
                                      pressure, diabetes, or heart disease risk
                                    </li>
                                    <li>
                                      Routine cardiac screening for elderly or
                                      high-risk individuals
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why Holter Monitoring is Important?</b>
                            </p>
                            <p>
                              <b>Extended Observation:</b> Detects heart
                              problems that a routine ECG might miss.
                            </p>
                            <p>
                              <b>Accurate Diagnosis:</b> Helps doctors identify
                              arrhythmias, silent ischemia, and conduction
                              blocks.
                            </p>
                            <p>
                              <b>Symptom Correlation:</b> Matches heart rhythm
                              with symptoms like dizziness or palpitations.
                            </p>
                            <p>
                              <b>Treatment Guidance:</b> Assists cardiologists
                              in adjusting medications or planning further
                              procedures.
                            </p>
                            <p>
                              <b>Preventive Health:</b> Early detection reduces
                              risk of stroke, heart failure, or sudden cardiac
                              events.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science Holter Monitoring
                                Service?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we provide advanced Holter
                              monitoring at your doorstep – making heart care
                              convenient, safe, and reliable.
                            </p>
                            <p>
                              🕑 24 × 7 × 365 Service – Always available,
                              anytime, anywhere.
                            </p>
                            <p>
                              🏠 Doorstep Convenience – Test at your home,
                              office, clinic, hospital, or diagnostic centre.
                            </p>
                            <p>
                              👨‍⚕ Cardiologist Certified Reports – Every test
                              reviewed and validated by experienced
                              cardiologists.
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Discuss your
                              results directly with a heart specialist.
                            </p>
                            <p>
                              ⚡ Flexible Duration – Choose monitoring for 24
                              hrs, 48 hrs, 72 hrs, or up to 7 days.
                            </p>
                            <p>
                              🎯 Accurate & Reliable Devices – Portable, modern
                              Holter monitors for precise readings.
                            </p>
                            <p>
                              🔒 Confidential & Secure – Strict protection of
                              your medical data and reports.
                            </p>
                            <p>
                              ❤ Patient-Centered Care – No travel, no waiting –
                              advanced cardiac testing from the comfort of home.
                            </p>
                            <p>
                              <b>How Our Holter Monitoring Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Test:</b> Call or book online for
                              Holter monitoring at your preferred time.
                            </p>
                            <p>
                              <b>2. Doorstep Visit:</b> A trained technician
                              arrives and attaches the Holter device with
                              electrodes on your chest.
                            </p>
                            <p>
                              <b>3. Continuous Recording:</b> The device records
                              your heart’s rhythm continuously for 24 hrs, 48
                              hrs, 72 hrs, or 7 days – while you go about your
                              daily routine.
                            </p>
                            <p>
                              <b>4. Data Collection & Removal:</b> After the
                              test period, the device is collected by our team.
                            </p>
                            <p>
                              <b>5. Specialist Review:</b> Data is analyzed and
                              certified by an expert cardiologist.
                            </p>
                            <p>
                              <b>6. Report Delivery:</b> Reports are delivered
                              via WhatsApp, Email, or printed copy.
                            </p>
                            <p>
                              <b>7. Tele-Consultation:</b> You can consult a
                              specialist doctor online to discuss your results
                              and treatment plan.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Advanced Heart Monitoring
                                at Your Doorstep
                              </b>
                            </p>
                            <p>
                              With 24/7 doorstep Holter monitoring,
                              cardiologist-certified reports, and
                              teleconsultation support, Winbri Life Science
                              ensures accurate detection and management of
                              hidden heart problems – anytime, anywhere.
                            </p>
                            <p>
                              💙 Your Heart Health, Our Priority – Always with
                              You. 💙
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
                                    Indications – When is Holter Monitoring
                                    Needed?
                                  </b>
                                </p>
                                <div className="row">
                                  <div className="col-md-4">
                                    <p>
                                      <b>
                                        1. Symptoms Suggestive of Heart Rhythm
                                        Problems
                                      </b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Palpitations (fast, irregular, or
                                          skipped beats)
                                        </li>
                                        <li>
                                          Dizziness, fainting spells, or
                                          unexplained blackouts
                                        </li>
                                        <li>
                                          Chest pain or discomfort not explained
                                          by regular ECG
                                        </li>
                                        <li>
                                          Shortness of breath or unexplained
                                          fatigue
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>2. Clinical Conditions</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Arrhythmias (irregular heartbeat)
                                        </li>
                                        <li>Atrial fibrillation/flutter</li>
                                        <li>
                                          Heart block or conduction disorders
                                        </li>
                                        <li>
                                          Unexplained stroke or mini-stroke (to
                                          check for hidden arrhythmias)
                                        </li>
                                        <li>
                                          Monitoring after pacemaker or
                                          defibrillator placement
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>3. Monitoring and Preventive Use</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Evaluating treatment effectiveness for
                                          heart rhythm disorders
                                        </li>
                                        <li>
                                          Assessing patients with high blood
                                          pressure, diabetes, or heart disease
                                          risk
                                        </li>
                                        <li>
                                          Routine cardiac screening for elderly
                                          or high-risk individuals
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why Holter Monitoring is Important?</b>
                                </p>
                                <p>
                                  <b>Extended Observation:</b> Detects heart
                                  problems that a routine ECG might miss.
                                </p>
                                <p>
                                  <b>Accurate Diagnosis:</b> Helps doctors
                                  identify arrhythmias, silent ischemia, and
                                  conduction blocks.
                                </p>
                                <p>
                                  <b>Symptom Correlation:</b> Matches heart
                                  rhythm with symptoms like dizziness or
                                  palpitations.
                                </p>
                                <p>
                                  <b>Treatment Guidance:</b> Assists
                                  cardiologists in adjusting medications or
                                  planning further procedures.
                                </p>
                                <p>
                                  <b>Preventive Health:</b> Early detection
                                  reduces risk of stroke, heart failure, or
                                  sudden cardiac events.
                                </p>
                                <p>
                                  <b>
                                    Why Choose Winbri Life Science Holter
                                    Monitoring Service?
                                  </b>
                                </p>
                                <p>
                                  At Winbri Life Science, we provide advanced
                                  Holter monitoring at your doorstep – making
                                  heart care convenient, safe, and reliable.
                                </p>
                                <p>
                                  🕑 24 × 7 × 365 Service – Always available,
                                  anytime, anywhere.
                                </p>
                                <p>
                                  🏠 Doorstep Convenience – Test at your home,
                                  office, clinic, hospital, or diagnostic
                                  centre.
                                </p>
                                <p>
                                  👨‍⚕ Cardiologist Certified Reports – Every
                                  test reviewed and validated by experienced
                                  cardiologists.
                                </p>
                                <p>
                                  📞 Tele-Consultation Support – Discuss your
                                  results directly with a heart specialist.
                                </p>
                                <p>
                                  ⚡ Flexible Duration – Choose monitoring for
                                  24 hrs, 48 hrs, 72 hrs, or up to 7 days.
                                </p>
                                <p>
                                  🎯 Accurate & Reliable Devices – Portable,
                                  modern Holter monitors for precise readings.
                                </p>
                                <p>
                                  🔒 Confidential & Secure – Strict protection
                                  of your medical data and reports.
                                </p>
                                <p>
                                  ❤ Patient-Centered Care – No travel, no
                                  waiting – advanced cardiac testing from the
                                  comfort of home.
                                </p>
                                <p>
                                  <b>
                                    How Our Holter Monitoring Service Works?
                                  </b>
                                </p>
                                <p>
                                  <b>1. Book Your Test:</b> Call or book online
                                  for Holter monitoring at your preferred time.
                                </p>
                                <p>
                                  <b>2. Doorstep Visit:</b> A trained technician
                                  arrives and attaches the Holter device with
                                  electrodes on your chest.
                                </p>
                                <p>
                                  <b>3. Continuous Recording:</b> The device
                                  records your heart’s rhythm continuously for
                                  24 hrs, 48 hrs, 72 hrs, or 7 days – while you
                                  go about your daily routine.
                                </p>
                                <p>
                                  <b>4. Data Collection & Removal:</b> After the
                                  test period, the device is collected by our
                                  team.
                                </p>
                                <p>
                                  <b>5. Specialist Review:</b> Data is analyzed
                                  and certified by an expert cardiologist.
                                </p>
                                <p>
                                  <b>6. Report Delivery:</b> Reports are
                                  delivered via WhatsApp, Email, or printed
                                  copy.
                                </p>
                                <p>
                                  <b>7. Tele-Consultation:</b> You can consult a
                                  specialist doctor online to discuss your
                                  results and treatment plan.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science – Advanced Heart
                                    Monitoring at Your Doorstep
                                  </b>
                                </p>
                                <p>
                                  With 24/7 doorstep Holter monitoring,
                                  cardiologist-certified reports, and
                                  teleconsultation support, Winbri Life Science
                                  ensures accurate detection and management of
                                  hidden heart problems – anytime, anywhere.
                                </p>
                                <p>
                                  💙 Your Heart Health, Our Priority – Always
                                  with You. 💙
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

        <AllServices service={"holter"} />
      </>

      <HomeFooter />
    </>
  );
}

export default HolterMonitoringService;
