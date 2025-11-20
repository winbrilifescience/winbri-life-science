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

function EMGService() {
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
                  <h2>Doorstep EMG Test</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">EMG Test</li>
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
                                src="/assets/images/services/emg.JPG"
                                alt="#"
                              />
                            </div>
                          </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              EMG Test at Your Doorstep
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              An Electromyography (EMG) test is a safe,
                              painless, and highly effective diagnostic
                              procedure that measures the electrical activity of
                              your muscles and the nerves that control them.
                              During the test, small electrodes are placed on or
                              near the muscles to record how well your muscles
                              and nerves communicate.
                            </p>
                            <p>
                              EMG helps neurologists and physicians evaluate the
                              health of muscles and motor nerves, and it plays a
                              vital role in diagnosing neuromuscular disorders,
                              nerve compression, and muscle diseases.
                            </p>
                            <p>
                              At Winbri Life Science, we provide EMG testing at
                              your doorstep with Neurologist-certified reports
                              and tele-consultation support — combining
                              accuracy, safety, and convenience without the need
                              to visit hospitals.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>Indications – When is EMG Needed?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Neurological or Muscular Symptoms</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Persistent numbness, tingling, or weakness
                                      in arms or legs
                                    </li>
                                    <li>Muscle pain, twitching, or cramps</li>
                                    <li>Unexplained weakness in limbs</li>
                                    <li>
                                      Back pain or neck pain with radiation to
                                      arms or legs
                                    </li>
                                    <li>
                                      Loss of coordination or fatigue in muscles
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Clinical Conditions</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Nerve compression (e.g., carpal tunnel
                                      syndrome, sciatica)
                                    </li>
                                    <li>
                                      Peripheral neuropathy (due to diabetes,
                                      injury, or infection)
                                    </li>
                                    <li>
                                      Muscle disorders (e.g., muscular
                                      dystrophy, polymyositis)
                                    </li>
                                    <li>Motor neuron diseases (e.g., ALS)</li>
                                    <li>
                                      Radiculopathy (nerve root damage from
                                      spine problems)
                                    </li>
                                    <li>Post-traumatic nerve injuries</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Monitoring & Special Uses</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Evaluating nerve recovery after injury or
                                      surgery
                                    </li>
                                    <li>
                                      Monitoring progress of neuromuscular
                                      conditions
                                    </li>
                                    <li>
                                      Differentiating between nerve vs. muscle
                                      problems
                                    </li>
                                    <li>
                                      Assisting in pre- and post-surgical
                                      neurological evaluations
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why EMG Test is Important?</b>
                            </p>
                            <p>
                              <b>Accurate Diagnosis:</b> Detects nerve and
                              muscle dysfunction not visible on CT or MRI scans.
                            </p>
                            <p>
                              <b>Guides Treatment:</b> Helps neurologists tailor
                              therapy, medications, or physiotherapy plans.
                            </p>
                            <p>
                              <b>Non-Invasive & Safe:</b> Minimal discomfort, no
                              radiation, suitable for all ages.
                            </p>
                            <p>
                              <b>Early Detection:</b> Identifies nerve
                              compression and muscle damage early.
                            </p>
                            <p>
                              <b>Functional Assessment:</b> Monitors nerve
                              recovery and treatment response over time.
                            </p>
                            <p>
                              <b>Why Choose Winbri Life Science EMG Service?</b>
                            </p>
                            <p>
                              At Winbri Life Science, we bring advanced
                              neuro-muscular diagnostics right to your doorstep.
                            </p>
                            <p>🕑 24 × 7 × 365 Service – Anytime, anywhere.</p>
                            <p>
                              🏠 Doorstep Testing – EMG at your home, office,
                              clinic, or hospital.
                            </p>
                            <p>
                              👨‍⚕ Neurologist-Certified Reports – Each test is
                              reviewed by an expert neurologist
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Discuss your report
                              and next steps directly with a specialist.
                            </p>
                            <p>
                              ⚡ Portable & Advanced EMG Machines – Accurate,
                              comfortable, and reliable testing.
                            </p>
                            <p>
                              🔒 Confidential & Secure – Reports handled with
                              full privacy and care.
                            </p>
                            <p>
                              ❤ Patient Comfort First – No hospital visits, no
                              waiting – done in your comfort zone.
                            </p>
                            <p>
                              <b>How Our EMG Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Test:</b> Call or book online for
                              EMG at your preferred location.
                            </p>
                            <p>
                              <b>2. Doorstep Setup:</b> A trained technician
                              places small surface or needle electrodes on
                              targeted muscles.
                            </p>
                            <p>
                              <b>3. Recording Session:</b> Muscle and nerve
                              activity are recorded during rest and movement.
                            </p>
                            <p>
                              <b>4. Data Collection:</b> Electrical patterns are
                              analyzed to assess nerve and muscle function.
                            </p>
                            <p>
                              <b>5. Specialist Review:</b> A neurologist
                              interprets and certifies the EMG report for
                              accuracy.
                            </p>
                            <p>
                              <b>6. Report Delivery:</b> Receive your report via
                              WhatsApp, Email, or in printed form.
                            </p>
                            <p>
                              <b>7. Tele-Consultation:</b> Discuss your EMG
                              results directly with a neurologist for diagnosis
                              and treatment planning.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Advanced Neuro-Muscular
                                Diagnostics at Your Doorstep
                              </b>
                            </p>
                            <p>
                              With neurologist-certified EMG reports, 24/7
                              doorstep testing, and tele-consultation support,
                              Winbri Life Science ensures accurate and
                              accessible nerve–muscle evaluation — anytime,
                              anywhere.
                            </p>
                            <p>
                              💙 Strong Nerves, Strong You – Trust Winbri Life
                              Science. 💙
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
                                  <b>Indications – When is EMG Needed?</b>
                                </p>
                                <div className="row">
                                  <div className="col-md-4">
                                    <p>
                                      <b>
                                        1. Neurological or Muscular Symptoms
                                      </b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Persistent numbness, tingling, or
                                          weakness in arms or legs
                                        </li>
                                        <li>
                                          Muscle pain, twitching, or cramps
                                        </li>
                                        <li>Unexplained weakness in limbs</li>
                                        <li>
                                          Back pain or neck pain with radiation
                                          to arms or legs
                                        </li>
                                        <li>
                                          Loss of coordination or fatigue in
                                          muscles
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>2. Clinical Conditions</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Nerve compression (e.g., carpal tunnel
                                          syndrome, sciatica)
                                        </li>
                                        <li>
                                          Peripheral neuropathy (due to
                                          diabetes, injury, or infection)
                                        </li>
                                        <li>
                                          Muscle disorders (e.g., muscular
                                          dystrophy, polymyositis)
                                        </li>
                                        <li>
                                          Motor neuron diseases (e.g., ALS)
                                        </li>
                                        <li>
                                          Radiculopathy (nerve root damage from
                                          spine problems)
                                        </li>
                                        <li>Post-traumatic nerve injuries</li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>3. Monitoring & Special Uses</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Evaluating nerve recovery after injury
                                          or surgery
                                        </li>
                                        <li>
                                          Monitoring progress of neuromuscular
                                          conditions
                                        </li>
                                        <li>
                                          Differentiating between nerve vs.
                                          muscle problems
                                        </li>
                                        <li>
                                          Assisting in pre- and post-surgical
                                          neurological evaluations
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why EMG Test is Important?</b>
                                </p>
                                <p>
                                  <b>Accurate Diagnosis:</b> Detects nerve and
                                  muscle dysfunction not visible on CT or MRI
                                  scans.
                                </p>
                                <p>
                                  <b>Guides Treatment:</b> Helps neurologists
                                  tailor therapy, medications, or physiotherapy
                                  plans.
                                </p>
                                <p>
                                  <b>Non-Invasive & Safe:</b> Minimal
                                  discomfort, no radiation, suitable for all
                                  ages.
                                </p>
                                <p>
                                  <b>Early Detection:</b> Identifies nerve
                                  compression and muscle damage early.
                                </p>
                                <p>
                                  <b>Functional Assessment:</b> Monitors nerve
                                  recovery and treatment response over time.
                                </p>
                                <p>
                                  <b>
                                    Why Choose Winbri Life Science EMG Service?
                                  </b>
                                </p>
                                <p>
                                  At Winbri Life Science, we bring advanced
                                  neuro-muscular diagnostics right to your
                                  doorstep.
                                </p>
                                <p>
                                  🕑 24 × 7 × 365 Service – Anytime, anywhere.
                                </p>
                                <p>
                                  🏠 Doorstep Testing – EMG at your home,
                                  office, clinic, or hospital.
                                </p>
                                <p>
                                  👨‍⚕ Neurologist-Certified Reports – Each test
                                  is reviewed by an expert neurologist
                                </p>
                                <p>
                                  📞 Tele-Consultation Support – Discuss your
                                  report and next steps directly with a
                                  specialist.
                                </p>
                                <p>
                                  ⚡ Portable & Advanced EMG Machines –
                                  Accurate, comfortable, and reliable testing.
                                </p>
                                <p>
                                  🔒 Confidential & Secure – Reports handled
                                  with full privacy and care.
                                </p>
                                <p>
                                  ❤ Patient Comfort First – No hospital visits,
                                  no waiting – done in your comfort zone.
                                </p>
                                <p>
                                  <b>How Our EMG Service Works?</b>
                                </p>
                                <p>
                                  <b>1. Book Your Test:</b> Call or book online
                                  for EMG at your preferred location.
                                </p>
                                <p>
                                  <b>2. Doorstep Setup:</b> A trained technician
                                  places small surface or needle electrodes on
                                  targeted muscles.
                                </p>
                                <p>
                                  <b>3. Recording Session:</b> Muscle and nerve
                                  activity are recorded during rest and
                                  movement.
                                </p>
                                <p>
                                  <b>4. Data Collection:</b> Electrical patterns
                                  are analyzed to assess nerve and muscle
                                  function.
                                </p>
                                <p>
                                  <b>5. Specialist Review:</b> A neurologist
                                  interprets and certifies the EMG report for
                                  accuracy.
                                </p>
                                <p>
                                  <b>6. Report Delivery:</b> Receive your report
                                  via WhatsApp, Email, or in printed form.
                                </p>
                                <p>
                                  <b>7. Tele-Consultation:</b> Discuss your EMG
                                  results directly with a neurologist for
                                  diagnosis and treatment planning.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science – Advanced
                                    Neuro-Muscular Diagnostics at Your Doorstep
                                  </b>
                                </p>
                                <p>
                                  With neurologist-certified EMG reports, 24/7
                                  doorstep testing, and tele-consultation
                                  support, Winbri Life Science ensures accurate
                                  and accessible nerve–muscle evaluation —
                                  anytime, anywhere.
                                </p>
                                <p>
                                  💙 Strong Nerves, Strong You – Trust Winbri
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

        <AllServices service={"emg"} />
      </>

      <HomeFooter />
    </>
  );
}

export default EMGService;
