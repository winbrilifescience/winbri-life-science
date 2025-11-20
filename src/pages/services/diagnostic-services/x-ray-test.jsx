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

function XRayService() {
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
                  <h2>Doorstep X-Ray Test</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">X-Ray Test</li>
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
                            <img src="/assets/images/services/x-ray.JPG" alt="#" />
                          </div>
                          <div className="news-head">
                            <img src="/assets/images/services/x-ray-2.JPG" alt="#" />
                          </div>
                        </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              Digital X-Ray Test at Your Doorstep
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              An X-Ray is a fast, safe, and widely used imaging
                              test that helps doctors visualize the inside of
                              the body. Using controlled amounts of radiation,
                              it creates images of bones, chest, joints, and
                              soft tissues
                            </p>
                            <p>
                              <b>
                                X-Rays are one of the most common and important
                                diagnostic tools in medicine. They are used to:
                              </b>
                              <ul className="list-style-unset pl-3">
                                <li>
                                  Detect bone fractures and joint problems
                                </li>
                                <li>
                                  Identify chest and lung diseases (pneumonia,
                                  TB, COVID-related lung issues)
                                </li>
                                <li>Examine abdomen for blockages or stones</li>
                                <li>
                                  Assess injuries, arthritis, or degenerative
                                  conditions
                                </li>
                                <li>
                                  Aid in diagnosis of infections, cancers, and
                                  other medical conditions
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
                              At Winbri Life Science, we bring portable digital
                              X-Ray testing to your doorstep – with reports
                              certified by radiologists and supported by
                              tele-consultation services
                            </p>
                            <p>
                              <b>Indications – When is an X-Ray Needed?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <p>
                                  <b>1. Bone and Joint Conditions</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Fractures, dislocations, or bone injuries
                                    </li>
                                    <li>Arthritis and joint degeneration</li>
                                    <li>Bone infections or tumors</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>2. Chest and Lung Conditions</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Persistent cough, chest pain, or breathing
                                      problems
                                    </li>
                                    <li>
                                      Suspected pneumonia, TB, lung infections,
                                      or asthma complications
                                    </li>
                                    <li>COVID-19 related lung assessment</li>
                                    <li>
                                      Detection of fluid around the lungs
                                      (pleural effusion)
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>3. Abdomen & Other Areas</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Kidney or gallbladder stones</li>
                                    <li>Abdominal pain or obstruction</li>
                                    <li>Swallowed objects (in children)</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <b>4. Clinical & Preventive Needs</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Pre-surgical assessment</li>
                                    <li>Monitoring of chronic conditions</li>
                                    <li>
                                      Follow-up after accidents, injuries, or
                                      hospital treatment
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why X-Ray is Important?</b>
                            </p>
                            <p>
                              <b>Quick & Reliable:</b> Provides immediate images
                              for rapid diagnosis.
                            </p>
                            <p>
                              <b>First-Line Investigation:</b> Often the first
                              test ordered in emergencies and general medicine.
                            </p>
                            <p>
                              <b>Guides Treatment:</b> Helps doctors plan
                              surgeries, treatments, and follow-ups.
                            </p>
                            <p>
                              <b>Wide Applications:</b> Useful across
                              orthopedics, pulmonology, gastroenterology, and
                              emergency medicine.
                            </p>
                            <p>
                              <b>Safe & Simple:</b> Painless, non-invasive, and
                              performed within minutes.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science X-Ray Service?
                              </b>
                            </p>
                            <p>
                              Unlike traditional diagnostic centres where
                              patients need to travel and wait, Winbri Life
                              Science makes diagnostics accessible, convenient,
                              and reliable at your doorstep.
                            </p>
                            <p>
                              🕑 24 × 7 × 365 Availability – Anytime, anywhere –
                              emergency or routine.
                            </p>
                            <p>
                              🏠 Doorstep Service – X-Ray at home, office,
                              clinic, hospital, or diagnostic centre.
                            </p>
                            <p>
                              👨‍⚕ Radiologist Certified Reports – Every X-Ray
                              reviewed and validated by a qualified radiologist.
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Discuss your
                              results with a doctor instantly after your test.
                            </p>
                            <p>
                              ⚡ Portable Digital X-Ray Machines – High-quality
                              imaging with minimal radiation exposure.
                            </p>
                            <p>
                              🔒 Confidential & Secure – Your health data and
                              reports are handled with utmost privacy.
                            </p>
                            <p>
                              ❤ Patient-Centered Care – No travel, no queues, no
                              stress – comfort and safety first.
                            </p>
                            <p>
                              <b>How Our X-Ray Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Test:</b> Call us anytime or book
                              online for an X-Ray at your convenience.
                            </p>
                            <p>
                              <b>2. Doorstep Visit:</b> Our trained radiology
                              technician arrives with a portable digital X-Ray
                              machine.
                            </p>
                            <p>
                              <b>3. X-Ray Procedure:</b> The required part of
                              the body is positioned, and the X-Ray is taken
                              within 5–10 minutes. It is painless and safe.
                            </p>
                            <p>
                              <b>4. Specialist Review:</b> The images are
                              reviewed and certified by a radiologist.
                            </p>
                            <p>
                              <b>5. Report Delivery:</b> Reports are shared
                              quickly via WhatsApp, Email, or as a printed copy.
                            </p>
                            <p>
                              <b>6. Tele-Consultation:</b> Speak with a
                              specialist doctor to understand your results and
                              get medical guidance.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Advanced X-Ray at Your
                                Convenience
                              </b>
                            </p>
                            <p>
                              With 24/7 doorstep X-Ray services,
                              radiologist-certified reports, and
                              tele-consultation support, Winbri Life Science
                              ensures you get world-class diagnostic care
                              without leaving your home.
                            </p>
                            <p>
                              💙 Your Health. Our Mission. Anytime. Anywhere.
                              Always. 💙
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
                                  At Winbri Life Science, we bring portable
                                  digital X-Ray testing to your doorstep – with
                                  reports certified by radiologists and
                                  supported by tele-consultation services
                                </p>
                                <p>
                                  <b>Indications – When is an X-Ray Needed?</b>
                                </p>
                                <div className="row">
                                  <div className="col-md-6">
                                    <p>
                                      <b>1. Bone and Joint Conditions</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Fractures, dislocations, or bone
                                          injuries
                                        </li>
                                        <li>
                                          Arthritis and joint degeneration
                                        </li>
                                        <li>Bone infections or tumors</li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p>
                                      <b>2. Chest and Lung Conditions</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Persistent cough, chest pain, or
                                          breathing problems
                                        </li>
                                        <li>
                                          Suspected pneumonia, TB, lung
                                          infections, or asthma complications
                                        </li>
                                        <li>
                                          COVID-19 related lung assessment
                                        </li>
                                        <li>
                                          Detection of fluid around the lungs
                                          (pleural effusion)
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p>
                                      <b>3. Abdomen & Other Areas</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>Kidney or gallbladder stones</li>
                                        <li>Abdominal pain or obstruction</li>
                                        <li>Swallowed objects (in children)</li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p>
                                      <b>4. Clinical & Preventive Needs</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>Pre-surgical assessment</li>
                                        <li>
                                          Monitoring of chronic conditions
                                        </li>
                                        <li>
                                          Follow-up after accidents, injuries,
                                          or hospital treatment
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why X-Ray is Important?</b>
                                </p>
                                <p>
                                  <b>Quick & Reliable:</b> Provides immediate
                                  images for rapid diagnosis.
                                </p>
                                <p>
                                  <b>First-Line Investigation:</b> Often the
                                  first test ordered in emergencies and general
                                  medicine.
                                </p>
                                <p>
                                  <b>Guides Treatment:</b> Helps doctors plan
                                  surgeries, treatments, and follow-ups.
                                </p>
                                <p>
                                  <b>Wide Applications:</b> Useful across
                                  orthopedics, pulmonology, gastroenterology,
                                  and emergency medicine.
                                </p>
                                <p>
                                  <b>Safe & Simple:</b> Painless, non-invasive,
                                  and performed within minutes.
                                </p>
                                <p>
                                  <b>
                                    Why Choose Winbri Life Science X-Ray
                                    Service?
                                  </b>
                                </p>
                                <p>
                                  Unlike traditional diagnostic centres where
                                  patients need to travel and wait, Winbri Life
                                  Science makes diagnostics accessible,
                                  convenient, and reliable at your doorstep.
                                </p>
                                <p>
                                  🕑 24 × 7 × 365 Availability – Anytime,
                                  anywhere – emergency or routine.
                                </p>
                                <p>
                                  🏠 Doorstep Service – X-Ray at home, office,
                                  clinic, hospital, or diagnostic centre.
                                </p>
                                <p>
                                  👨‍⚕ Radiologist Certified Reports – Every
                                  X-Ray reviewed and validated by a qualified
                                  radiologist.
                                </p>
                                <p>
                                  📞 Tele-Consultation Support – Discuss your
                                  results with a doctor instantly after your
                                  test.
                                </p>
                                <p>
                                  ⚡ Portable Digital X-Ray Machines –
                                  High-quality imaging with minimal radiation
                                  exposure.
                                </p>
                                <p>
                                  🔒 Confidential & Secure – Your health data
                                  and reports are handled with utmost privacy.
                                </p>
                                <p>
                                  ❤ Patient-Centered Care – No travel, no
                                  queues, no stress – comfort and safety first.
                                </p>
                                <p>
                                  <b>How Our X-Ray Service Works?</b>
                                </p>
                                <p>
                                  <b>1. Book Your Test:</b> Call us anytime or
                                  book online for an X-Ray at your convenience.
                                </p>
                                <p>
                                  <b>2. Doorstep Visit:</b> Our trained
                                  radiology technician arrives with a portable
                                  digital X-Ray machine.
                                </p>
                                <p>
                                  <b>3. X-Ray Procedure:</b> The required part
                                  of the body is positioned, and the X-Ray is
                                  taken within 5–10 minutes. It is painless and
                                  safe.
                                </p>
                                <p>
                                  <b>4. Specialist Review:</b> The images are
                                  reviewed and certified by a radiologist.
                                </p>
                                <p>
                                  <b>5. Report Delivery:</b> Reports are shared
                                  quickly via WhatsApp, Email, or as a printed
                                  copy.
                                </p>
                                <p>
                                  <b>6. Tele-Consultation:</b> Speak with a
                                  specialist doctor to understand your results
                                  and get medical guidance.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science – Advanced X-Ray at Your
                                    Convenience
                                  </b>
                                </p>
                                <p>
                                  With 24/7 doorstep X-Ray services,
                                  radiologist-certified reports, and
                                  tele-consultation support, Winbri Life Science
                                  ensures you get world-class diagnostic care
                                  without leaving your home.
                                </p>
                                <p>
                                  💙 Your Health. Our Mission. Anytime.
                                  Anywhere. Always. 💙
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

        <AllServices service={"x-ray"} />
      </>

      <HomeFooter />
    </>
  );
}

export default XRayService;
