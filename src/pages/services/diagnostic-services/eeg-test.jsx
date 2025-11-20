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

function EEGService() {
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
                  <h2>Doorstep EEG Test</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">EEG Test</li>
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
                            <img src="/assets/images/services/eeg.JPG" alt="#" />
                          </div>
                          <div className="news-head">
                            <img src="/assets/images/services/eeg-2.JPG" alt="#" />
                          </div>
                                                    </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              EEG Test at Your Doorstep
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              An Electroencephalogram (EEG) is a safe, painless, and non-invasive diagnostic test that records the electrical activity of the brain using small electrodes placed on the scalp.
                            </p>
                            <p>
                              EEG helps neurologists understand how the brain is functioning and is essential in diagnosing conditions that affect brain activity such as epilepsy, seizures, sleep disorders, and brain function monitoring.
                            </p>
                            <p>
                              At Winbri Life Science, we provide EEG testing at your doorstep with Neurologist-certified reports and tele-consultation support – ensuring accurate diagnosis and convenience without the need to visit hospitals.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>Indications – When is EEG Needed?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Neurological Symptoms</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Unexplained fainting or blackouts</li>
                                    <li>
                                      Seizures or convulsions
                                    </li>
                                    <li>
                                      Sudden changes in behavior or confusion
                                    </li>
                                    <li>
                                      Memory loss or suspected dementia
                                    </li>
                                    <li>
                                      Headaches with neurological signs
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Clinical Conditions</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Epilepsy – diagnosis and monitoring
                                    </li>
                                    <li>
                                      Seizure disorders – identifying type and severity
                                    </li>
                                    <li>
                                      Brain infections (encephalitis, meningitis)
                                    </li>
                                    <li>
                                      Stroke, brain injury, or tumors – evaluating brain activity
                                    </li>
                                    <li>
                                      Sleep disorders – like narcolepsy or parasomnia
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Monitoring & Special Uses</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Monitoring response to epilepsy treatment
                                    </li>
                                    <li>
                                      Evaluating unexplained unconsciousness or coma
                                    </li>
                                    <li>
                                      Pre- and post-surgical neurological evaluations
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why EEG Test is Important?</b>
                            </p>
                            <p>
                              <b>Accurate Diagnosis:</b> Detects abnormal electrical activity in the brain not visible on CT or MRI scans.
                            </p>
                            <p>
                              <b>Guides Treatment:</b> Helps neurologists choose the right medications and treatment plans.
                            </p>
                            <p>
                              <b>Non-Invasive & Safe:</b> No radiation, no pain, suitable for all ages including children.
                            </p>
                            <p>
                              <b>Early Detection:</b> Identifies seizure disorders early to prevent complications.
                            </p>
                            <p>
                              <b>Brain Health Monitoring:</b> Useful for ongoing assessment in chronic neurological conditions.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science EEG Service?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we bring advanced neurodiagnostics to your doorstep.
                            </p>
                            <p>
                              🕑 24 × 7 × 365 Service – Available anytime, anywhere.
                            </p>
                            <p>
                              🏠 Doorstep Testing – EEG at your home, office, clinic, hospital, or diagnostic centre.
                            </p>
                            <p>
                              👨‍⚕ Neurologist-Certified Reports – Every EEG is analyzed and validated by an experienced neurologist.
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Discuss your results directly with a brain specialist.
                            </p>
                            <p>
                              ⚡ Portable & Advanced EEG Machines – Comfortable, reliable, and precise results.
                            </p>
                            <p>
                              🔒 Confidential & Secure – Safe handling and delivery of reports.
                            </p>
                            <p>
                              ❤ Patient Comfort First – No hospital visits, no waiting – testing done in the comfort of your environment.
                            </p>
                            <p>
                              <b>How Our EEG Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Test:</b> Call or book online for EEG at your preferred location.
                            </p>
                            <p>
                              <b>2. Doorstep Setup:</b> A trained technician places small electrodes on your scalp to measure brain activity.
                            </p>
                            <p>
                              <b>3. Recording Session:</b> Brain wave activity is recorded while you are awake, resting, or sometimes during sleep.
                            </p>
                            <p>
                              <b>4. Data Collection:</b> Results are captured as brain wave patterns for analysis.
                            </p>
                            <p>
                              <b>5. Specialist Review:</b> The EEG report is certified by a neurologist for accuracy.
                            </p>
                            <p>
                              <b>6. Report Delivery:</b> Reports are delivered via WhatsApp, Email, or printed copy.
                            </p>
                            <p>
                              <b>7. Tele-Consultation:</b> Discuss your EEG findings with a neurologist for treatment planning and next steps.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Advanced Brain Health at Your Doorstep
                              </b>
                            </p>
                            <p>
                              With neurologist-certified EEG reports, 24/7 doorstep testing, and tele-consultation support, Winbri Life Science ensures accurate brain diagnostics – anytime, anywhere.
                            </p>
                            <p>
                              💙 Healthy Brain, Healthy Life – Trust Winbri Life Science. 💙
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
                              <b>Indications – When is EEG Needed?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Neurological Symptoms</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Unexplained fainting or blackouts</li>
                                    <li>
                                      Seizures or convulsions
                                    </li>
                                    <li>
                                      Sudden changes in behavior or confusion
                                    </li>
                                    <li>
                                      Memory loss or suspected dementia
                                    </li>
                                    <li>
                                      Headaches with neurological signs
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Clinical Conditions</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Epilepsy – diagnosis and monitoring
                                    </li>
                                    <li>
                                      Seizure disorders – identifying type and severity
                                    </li>
                                    <li>
                                      Brain infections (encephalitis, meningitis)
                                    </li>
                                    <li>
                                      Stroke, brain injury, or tumors – evaluating brain activity
                                    </li>
                                    <li>
                                      Sleep disorders – like narcolepsy or parasomnia
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Monitoring & Special Uses</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Monitoring response to epilepsy treatment
                                    </li>
                                    <li>
                                      Evaluating unexplained unconsciousness or coma
                                    </li>
                                    <li>
                                      Pre- and post-surgical neurological evaluations
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why EEG Test is Important?</b>
                            </p>
                            <p>
                              <b>Accurate Diagnosis:</b> Detects abnormal electrical activity in the brain not visible on CT or MRI scans.
                            </p>
                            <p>
                              <b>Guides Treatment:</b> Helps neurologists choose the right medications and treatment plans.
                            </p>
                            <p>
                              <b>Non-Invasive & Safe:</b> No radiation, no pain, suitable for all ages including children.
                            </p>
                            <p>
                              <b>Early Detection:</b> Identifies seizure disorders early to prevent complications.
                            </p>
                            <p>
                              <b>Brain Health Monitoring:</b> Useful for ongoing assessment in chronic neurological conditions.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science EEG Service?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we bring advanced neurodiagnostics to your doorstep.
                            </p>
                            <p>
                              🕑 24 × 7 × 365 Service – Available anytime, anywhere.
                            </p>
                            <p>
                              🏠 Doorstep Testing – EEG at your home, office, clinic, hospital, or diagnostic centre.
                            </p>
                            <p>
                              👨‍⚕ Neurologist-Certified Reports – Every EEG is analyzed and validated by an experienced neurologist.
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Discuss your results directly with a brain specialist.
                            </p>
                            <p>
                              ⚡ Portable & Advanced EEG Machines – Comfortable, reliable, and precise results.
                            </p>
                            <p>
                              🔒 Confidential & Secure – Safe handling and delivery of reports.
                            </p>
                            <p>
                              ❤ Patient Comfort First – No hospital visits, no waiting – testing done in the comfort of your environment.
                            </p>
                            <p>
                              <b>How Our EEG Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Test:</b> Call or book online for EEG at your preferred location.
                            </p>
                            <p>
                              <b>2. Doorstep Setup:</b> A trained technician places small electrodes on your scalp to measure brain activity.
                            </p>
                            <p>
                              <b>3. Recording Session:</b> Brain wave activity is recorded while you are awake, resting, or sometimes during sleep.
                            </p>
                            <p>
                              <b>4. Data Collection:</b> Results are captured as brain wave patterns for analysis.
                            </p>
                            <p>
                              <b>5. Specialist Review:</b> The EEG report is certified by a neurologist for accuracy.
                            </p>
                            <p>
                              <b>6. Report Delivery:</b> Reports are delivered via WhatsApp, Email, or printed copy.
                            </p>
                            <p>
                              <b>7. Tele-Consultation:</b> Discuss your EEG findings with a neurologist for treatment planning and next steps.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Advanced Brain Health at Your Doorstep
                              </b>
                            </p>
                            <p>
                              With neurologist-certified EEG reports, 24/7 doorstep testing, and tele-consultation support, Winbri Life Science ensures accurate brain diagnostics – anytime, anywhere.
                            </p>
                            <p>
                              💙 Healthy Brain, Healthy Life – Trust Winbri Life Science. 💙
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

        <AllServices service={"eeg"} />
      </>

      <HomeFooter />
    </>
  );
}

export default EEGService;
