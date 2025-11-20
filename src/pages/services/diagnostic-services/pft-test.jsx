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

function PFTService() {
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
                  <h2>Doorstep PFT (Pulmonary Function Test)</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">PFT (Pulmonary Function Test)</li>
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
                            <img src="/assets/images/services/pft.JPG" alt="#" />
                          </div>
                        </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              PFT (Pulmonary Function Test) at Your Doorstep
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              <b>
                                A Pulmonary Function Test (PFT) is a group of
                                simple, non-invasive breathing tests that
                                measure how well your lungs work. It helps
                                doctors evaluate:
                              </b>
                              <ul className="list-style-unset pl-3">
                                <li>How much air your lungs can hold?</li>
                                <li>
                                  How quickly you can move air in and out?
                                </li>
                                <li>
                                  How efficiently your lungs exchange oxygen and
                                  carbon dioxide?
                                </li>
                              </ul>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>Indications - When Do You Need a PFT?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Respiratory Symptoms</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Persistent cough or wheezing</li>
                                    <li>
                                      Shortness of breath or difficulty
                                      breathing
                                    </li>
                                    <li>
                                      Chest tightness or unexplained fatigue
                                    </li>
                                    <li>Chronic phlegm or mucus production</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Medical Conditions</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Asthma</li>
                                    <li>
                                      Chronic Obstructive Pulmonary Disease
                                      (COPD)
                                    </li>
                                    <li>Interstitial lung disease</li>
                                    <li>Pulmonary fibrosis</li>
                                    <li>Bronchitis or emphysema</li>
                                    <li>Post-COVID breathing issues</li>
                                    <li>
                                      Occupational lung diseases (dust, smoke,
                                      chemical exposure)
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Preventive & Clinical Needs</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Pre-surgical assessment (especially for
                                      chest/heart surgeries)
                                    </li>
                                    <li>Monitoring lung health in smokers</li>
                                    <li>
                                      Regular check-up in patients with
                                      long-term lung conditions
                                    </li>
                                    <li>
                                      Assessing treatment response in
                                      respiratory patients
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why PFT is Important?</b>
                            </p>
                            <p>
                              <b>Early Detection:</b> Identifies lung diseases
                              before symptoms become severe.
                            </p>
                            <p>
                              <b>Monitoring Progress:</b> Tracks effectiveness
                              of treatment in asthma, COPD, and other
                              conditions.
                            </p>
                            <p>
                              <b>Prevention:</b> Helps at-risk individuals
                              (smokers, industrial workers, post-COVID patients)
                              prevent complications.
                            </p>
                            <p>
                              <b>Surgical Safety:</b> Ensures lung function is
                              adequate before major surgeries.
                            </p>
                            <p>
                              <b>Improved Quality of Life:</b> Guides doctors in
                              making better treatment decisions.
                            </p>
                            <p>
                              <b>Why Choose Winbri Life Science PFT Service?</b>
                            </p>
                            <p>
                              At Winbri Life Science, we combine convenience,
                              accuracy, and expert-certified reporting to bring
                              respiratory care closer to you.
                            </p>
                            <p>
                              🕑 24 × 7 Availability - Anytime, anywhere - no
                              waiting, no hassle.
                            </p>
                            <p>
                              🏠 Doorstep Service - PFT at your home, office,
                              clinic, hospital, or diagnostic centre.
                            </p>
                            <p>
                              👨‍⚕ Pulmonologist Certified Reports - Every PFT
                              is reviewed and validated by an expert lung
                              specialist.
                            </p>
                            <p>
                              📞 Tele-Consultation Support - Direct discussion
                              with a pulmonologist after your test.
                            </p>
                            <p>
                              ⚡ Fast & Comfortable - Non-invasive, simple
                              breathing test with immediate reporting.
                            </p>
                            <p>
                              🔒 Confidential & Trusted - Secure handling of
                              your medical data and reports.
                            </p>
                            <p>
                              ❤ Patient Comfort First - No travel, no stress -
                              we bring advanced lung testing to you.
                            </p>
                            <p>
                              Unlike routine labs, Winbri Life Science ensures
                              your PFT results are interpreted by qualified
                              pulmonologists, providing you with a complete
                              diagnostic + consultation package.
                            </p>
                            <p>
                              <b>How Our PFT Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Test:</b> Call us anytime or book
                              online for a PFT at your convenience.
                            </p>
                            <p>
                              <b>2. Doorstep Visit:</b> A trained healthcare
                              professional arrives with a portable PFT device.
                            </p>
                            <p>
                              <b>3. PFT Test:</b> You’ll be asked to breathe in
                              and out through a device in specific ways. The
                              test is safe, painless, and takes 15-20 minutes.
                            </p>
                            <p>
                              <b>4. Specialist Review:</b> Results are reviewed
                              and certified by an experienced pulmonologist.
                            </p>
                            <p>
                              <b>5. Report Delivery:</b> Certified report
                              delivered via WhatsApp, Email, or hard copy.
                            </p>
                            <p>
                              <b>6. Tele-Consultation:</b> Discuss your results
                              directly with a lung specialist for guidance and
                              treatment advice.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science - Breathing Care Made Easy
                              </b>
                            </p>
                            <p>
                              With round-the-clock doorstep PFT services,
                              pulmonologist-certified reports, and
                              teleconsultation support, Winbri Life Science
                              ensures that quality respiratory care is always
                              within your reach.
                            </p>
                            <p>
                              💙 Breathe Better. Live Better - With Winbri Life
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
                                  <b>Indications - When Do You Need a PFT?</b>
                                </p>
                                <div className="row">
                                  <div className="col-md-4">
                                    <p>
                                      <b>1. Respiratory Symptoms</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>Persistent cough or wheezing</li>
                                        <li>
                                          Shortness of breath or difficulty
                                          breathing
                                        </li>
                                        <li>
                                          Chest tightness or unexplained fatigue
                                        </li>
                                        <li>
                                          Chronic phlegm or mucus production
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>2. Medical Conditions</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>Asthma</li>
                                        <li>
                                          Chronic Obstructive Pulmonary Disease
                                          (COPD)
                                        </li>
                                        <li>Interstitial lung disease</li>
                                        <li>Pulmonary fibrosis</li>
                                        <li>Bronchitis or emphysema</li>
                                        <li>Post-COVID breathing issues</li>
                                        <li>
                                          Occupational lung diseases (dust,
                                          smoke, chemical exposure)
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>3. Preventive & Clinical Needs</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Pre-surgical assessment (especially
                                          for chest/heart surgeries)
                                        </li>
                                        <li>
                                          Monitoring lung health in smokers
                                        </li>
                                        <li>
                                          Regular check-up in patients with
                                          long-term lung conditions
                                        </li>
                                        <li>
                                          Assessing treatment response in
                                          respiratory patients
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why PFT is Important?</b>
                                </p>
                                <p>
                                  <b>Early Detection:</b> Identifies lung
                                  diseases before symptoms become severe.
                                </p>
                                <p>
                                  <b>Monitoring Progress:</b> Tracks
                                  effectiveness of treatment in asthma, COPD,
                                  and other conditions.
                                </p>
                                <p>
                                  <b>Prevention:</b> Helps at-risk individuals
                                  (smokers, industrial workers, post-COVID
                                  patients) prevent complications.
                                </p>
                                <p>
                                  <b>Surgical Safety:</b> Ensures lung function
                                  is adequate before major surgeries.
                                </p>
                                <p>
                                  <b>Improved Quality of Life:</b> Guides
                                  doctors in making better treatment decisions.
                                </p>
                                <p>
                                  <b>
                                    Why Choose Winbri Life Science PFT Service?
                                  </b>
                                </p>
                                <p>
                                  At Winbri Life Science, we combine
                                  convenience, accuracy, and expert-certified
                                  reporting to bring respiratory care closer to
                                  you.
                                </p>
                                <p>
                                  🕑 24 × 7 Availability - Anytime, anywhere -
                                  no waiting, no hassle.
                                </p>
                                <p>
                                  🏠 Doorstep Service - PFT at your home,
                                  office, clinic, hospital, or diagnostic
                                  centre.
                                </p>
                                <p>
                                  👨‍⚕ Pulmonologist Certified Reports - Every
                                  PFT is reviewed and validated by an expert
                                  lung specialist.
                                </p>
                                <p>
                                  📞 Tele-Consultation Support - Direct
                                  discussion with a pulmonologist after your
                                  test.
                                </p>
                                <p>
                                  ⚡ Fast & Comfortable - Non-invasive, simple
                                  breathing test with immediate reporting.
                                </p>
                                <p>
                                  🔒 Confidential & Trusted - Secure handling of
                                  your medical data and reports.
                                </p>
                                <p>
                                  ❤ Patient Comfort First - No travel, no stress
                                  - we bring advanced lung testing to you.
                                </p>
                                <p>
                                  Unlike routine labs, Winbri Life Science
                                  ensures your PFT results are interpreted by
                                  qualified pulmonologists, providing you with a
                                  complete diagnostic + consultation package.
                                </p>
                                <p>
                                  <b>How Our PFT Service Works?</b>
                                </p>
                                <p>
                                  <b>1. Book Your Test:</b> Call us anytime or
                                  book online for a PFT at your convenience.
                                </p>
                                <p>
                                  <b>2. Doorstep Visit:</b> A trained healthcare
                                  professional arrives with a portable PFT
                                  device.
                                </p>
                                <p>
                                  <b>3. PFT Test:</b> You’ll be asked to breathe
                                  in and out through a device in specific ways.
                                  The test is safe, painless, and takes 15-20
                                  minutes.
                                </p>
                                <p>
                                  <b>4. Specialist Review:</b> Results are
                                  reviewed and certified by an experienced
                                  pulmonologist.
                                </p>
                                <p>
                                  <b>5. Report Delivery:</b> Certified report
                                  delivered via WhatsApp, Email, or hard copy.
                                </p>
                                <p>
                                  <b>6. Tele-Consultation:</b> Discuss your
                                  results directly with a lung specialist for
                                  guidance and treatment advice.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science - Breathing Care Made
                                    Easy
                                  </b>
                                </p>
                                <p>
                                  With round-the-clock doorstep PFT services,
                                  pulmonologist-certified reports, and
                                  teleconsultation support, Winbri Life Science
                                  ensures that quality respiratory care is
                                  always within your reach.
                                </p>
                                <p>
                                  💙 Breathe Better. Live Better - With Winbri
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

        <AllServices service={"pft"} />
      </>

      <HomeFooter />
    </>
  );
}

export default PFTService;
