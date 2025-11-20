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

function AudiometryService() {
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
                  <h2>Doorstep Audiometry Test</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Audiometry Test</li>
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
                                src="/assets/images/services/audiometry.JPG"
                                alt="#"
                              />
                            </div>
                            <div className="news-head">
                              <img
                                src="/assets/images/services/audiometry-2.JPG"
                                alt="#"
                              />
                            </div>
                            <div className="news-head">
                              <img
                                src="/assets/images/services/audiometry-3.JPG"
                                alt="#"
                              />
                            </div>
                          </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              Audiometry Test at Your Doorstep
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              An Audiometry Test is a painless and non-invasive
                              diagnostic procedure that evaluates a person’s
                              hearing ability. It measures how well you can hear
                              sounds at different pitches (frequencies) and
                              loudness levels (intensity).
                            </p>
                            <p>
                              This test helps detect hearing loss, determine its
                              type (conductive, sensorineural, or mixed), and
                              guide doctors in recommending proper treatment or
                              hearing aids if required.
                            </p>
                            <p>
                              With Winbri Life Science, you can undergo a
                              specialist-certified audiometry test at your
                              doorstep, without the need to visit a clinic or
                              hospital.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>Indications – When is Audiometry Needed?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Hearing-Related Symptoms</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Difficulty in hearing conversations,
                                      especially in noisy places
                                    </li>
                                    <li>
                                      Asking people to repeat themselves often
                                    </li>
                                    <li>
                                      Trouble hearing soft voices or
                                      high-pitched sounds
                                    </li>
                                    <li>
                                      Ringing or buzzing in the ears (Tinnitus)
                                    </li>
                                    <li>
                                      Feeling that sounds are muffled or unclear
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Medical & Risk Conditions</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Sudden hearing loss</li>
                                    <li>Chronic ear infections</li>
                                    <li>
                                      Exposure to loud noise at work or through
                                      music devices
                                    </li>
                                    <li>
                                      Age-related hearing decline (Presbycusis)
                                    </li>
                                    <li>Family history of hearing disorders</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Clinical & Preventive Uses</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Pre-employment and occupational health
                                      check-ups
                                    </li>
                                    <li>
                                      Routine screening in elderly or high-risk
                                      individuals
                                    </li>
                                    <li>
                                      Assessing suitability and effectiveness of
                                      hearing aids
                                    </li>
                                    <li>
                                      Monitoring patients taking medications
                                      that may affect hearing
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why Audiometry Test is Important?</b>
                            </p>
                            <p>
                              <b>Early Detection:</b> Identifies hearing loss
                              before it significantly affects daily life.
                            </p>
                            <p>
                              <b>Accurate Diagnosis:</b> Helps distinguish
                              between conductive and sensorineural hearing loss.
                            </p>
                            <p>
                              <b>Treatment Guidance:</b> Assists ENT specialists
                              in planning surgery, hearing aids, or medical
                              treatment.
                            </p>
                            <p>
                              <b>Improved Quality of Life:</b> Timely detection
                              and intervention improves communication,
                              confidence, and social interaction.
                            </p>
                            <p>
                              <b>Preventive Care:</b> Protects long-term ear
                              health in people at risk (factory workers,
                              elderly, musicians, etc.).
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science Audiometry
                                Service?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we provide audiometry
                              testing that is accurate, convenient, and
                              specialist-certified.
                            </p>
                            <p>
                              🕑 24 × 7 Service – Available anytime, anywhere.
                            </p>
                            <p>
                              🏠 Doorstep Testing – Conducted at home, office,
                              clinic, hospital, or diagnostic centre.
                            </p>
                            <p>
                              👨‍⚕ Specialist Certified Reports – Reviewed and
                              validated by qualified ENT/audiology specialists.
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Discuss your
                              results directly with a hearing care expert.
                            </p>
                            <p>
                              ⚡ Portable & Advanced Equipment – Modern
                              audiometers for precise and reliable results.
                            </p>
                            <p>
                              🔒 Confidential & Secure – Safe handling and
                              delivery of your health reports.
                            </p>
                            <p>
                              ❤ Patient Comfort First – No hospital visits, no
                              long waits, testing done at your convenience.
                            </p>
                            <p>
                              <b>How Our Audiometry Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Test:</b> Call or book online for
                              audiometry at your preferred time and location.
                            </p>
                            <p>
                              <b>2. Doorstep Setup:</b> Our trained technician
                              arrives with a portable audiometer and headphones.
                            </p>
                            <p>
                              <b>3. Hearing Assessment:</b> You will be asked to
                              listen to sounds of different pitches and volumes
                              and respond when you hear them.
                            </p>
                            <p>
                              <b>4. Data Recording:</b> Results are recorded as
                              an audiogram (a graph showing hearing ability
                              across frequencies).
                            </p>
                            <p>
                              <b>5. Specialist Review:</b> The audiogram is
                              analyzed and certified by an ENT/audiology
                              specialist.
                            </p>
                            <p>
                              <b>6. Report Delivery:</b> Certified reports are
                              shared via WhatsApp, Email, or printed copy.
                            </p>
                            <p>
                              <b>7. Tele-Consultation:</b> Discuss results with
                              a specialist doctor for further treatment or
                              hearing aid advice.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Hear Better. Live Better
                              </b>
                            </p>
                            <p>
                              With doorstep audiometry testing,
                              specialist-certified reports, and
                              tele-consultation support, Winbri Life Science
                              ensures timely detection and management of hearing
                              loss – anytime, anywhere.
                            </p>
                            <p>
                              💙 Healthy Hearing = Better Living. Trust Winbri
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
                                  <b>
                                    Indications – When is Audiometry Needed?
                                  </b>
                                </p>
                                <div className="row">
                                  <div className="col-md-4">
                                    <p>
                                      <b>1. Hearing-Related Symptoms</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Difficulty in hearing conversations,
                                          especially in noisy places
                                        </li>
                                        <li>
                                          Asking people to repeat themselves
                                          often
                                        </li>
                                        <li>
                                          Trouble hearing soft voices or
                                          high-pitched sounds
                                        </li>
                                        <li>
                                          Ringing or buzzing in the ears
                                          (Tinnitus)
                                        </li>
                                        <li>
                                          Feeling that sounds are muffled or
                                          unclear
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>2. Medical & Risk Conditions</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>Sudden hearing loss</li>
                                        <li>Chronic ear infections</li>
                                        <li>
                                          Exposure to loud noise at work or
                                          through music devices
                                        </li>
                                        <li>
                                          Age-related hearing decline
                                          (Presbycusis)
                                        </li>
                                        <li>
                                          Family history of hearing disorders
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>3. Clinical & Preventive Uses</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Pre-employment and occupational health
                                          check-ups
                                        </li>
                                        <li>
                                          Routine screening in elderly or
                                          high-risk individuals
                                        </li>
                                        <li>
                                          Assessing suitability and
                                          effectiveness of hearing aids
                                        </li>
                                        <li>
                                          Monitoring patients taking medications
                                          that may affect hearing
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why Audiometry Test is Important?</b>
                                </p>
                                <p>
                                  <b>Early Detection:</b> Identifies hearing
                                  loss before it significantly affects daily
                                  life.
                                </p>
                                <p>
                                  <b>Accurate Diagnosis:</b> Helps distinguish
                                  between conductive and sensorineural hearing
                                  loss.
                                </p>
                                <p>
                                  <b>Treatment Guidance:</b> Assists ENT
                                  specialists in planning surgery, hearing aids,
                                  or medical treatment.
                                </p>
                                <p>
                                  <b>Improved Quality of Life:</b> Timely
                                  detection and intervention improves
                                  communication, confidence, and social
                                  interaction.
                                </p>
                                <p>
                                  <b>Preventive Care:</b> Protects long-term ear
                                  health in people at risk (factory workers,
                                  elderly, musicians, etc.).
                                </p>
                                <p>
                                  <b>
                                    Why Choose Winbri Life Science Audiometry
                                    Service?
                                  </b>
                                </p>
                                <p>
                                  At Winbri Life Science, we provide audiometry
                                  testing that is accurate, convenient, and
                                  specialist-certified.
                                </p>
                                <p>
                                  🕑 24 × 7 Service – Available anytime,
                                  anywhere.
                                </p>
                                <p>
                                  🏠 Doorstep Testing – Conducted at home,
                                  office, clinic, hospital, or diagnostic
                                  centre.
                                </p>
                                <p>
                                  👨‍⚕ Specialist Certified Reports – Reviewed
                                  and validated by qualified ENT/audiology
                                  specialists.
                                </p>
                                <p>
                                  📞 Tele-Consultation Support – Discuss your
                                  results directly with a hearing care expert.
                                </p>
                                <p>
                                  ⚡ Portable & Advanced Equipment – Modern
                                  audiometers for precise and reliable results.
                                </p>
                                <p>
                                  🔒 Confidential & Secure – Safe handling and
                                  delivery of your health reports.
                                </p>
                                <p>
                                  ❤ Patient Comfort First – No hospital visits,
                                  no long waits, testing done at your
                                  convenience.
                                </p>
                                <p>
                                  <b>How Our Audiometry Service Works?</b>
                                </p>
                                <p>
                                  <b>1. Book Your Test:</b> Call or book online
                                  for audiometry at your preferred time and
                                  location.
                                </p>
                                <p>
                                  <b>2. Doorstep Setup:</b> Our trained
                                  technician arrives with a portable audiometer
                                  and headphones.
                                </p>
                                <p>
                                  <b>3. Hearing Assessment:</b> You will be
                                  asked to listen to sounds of different pitches
                                  and volumes and respond when you hear them.
                                </p>
                                <p>
                                  <b>4. Data Recording:</b> Results are recorded
                                  as an audiogram (a graph showing hearing
                                  ability across frequencies).
                                </p>
                                <p>
                                  <b>5. Specialist Review:</b> The audiogram is
                                  analyzed and certified by an ENT/audiology
                                  specialist.
                                </p>
                                <p>
                                  <b>6. Report Delivery:</b> Certified reports
                                  are shared via WhatsApp, Email, or printed
                                  copy.
                                </p>
                                <p>
                                  <b>7. Tele-Consultation:</b> Discuss results
                                  with a specialist doctor for further treatment
                                  or hearing aid advice.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science – Hear Better. Live
                                    Better
                                  </b>
                                </p>
                                <p>
                                  With doorstep audiometry testing,
                                  specialist-certified reports, and
                                  tele-consultation support, Winbri Life Science
                                  ensures timely detection and management of
                                  hearing loss – anytime, anywhere.
                                </p>
                                <p>
                                  💙 Healthy Hearing = Better Living. Trust
                                  Winbri Life Science. 💙
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

        <AllServices service={"audiometry"} />
      </>

      <HomeFooter />
    </>
  );
}

export default AudiometryService;
