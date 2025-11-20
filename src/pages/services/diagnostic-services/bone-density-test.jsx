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

function BoneDensityService() {
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
                  <h2>Doorstep Bone Density Test</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Bone Density Test</li>
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
                            {/* <div className="news-head">
                              <img
                                src="/assets/images/services/bone-density.JPG"
                                alt="#"
                              />
                            </div> */}
                            <div className="news-head">
                              <img
                                src="/assets/images/services/bone-density-2.JPG"
                                alt="#"
                                className="service-img"
                              />
                            </div>
                          </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              Bone Density Test at Your Doorstep
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              A Bone Density Test, also known as a Bone Mineral
                              Density (BMD) test or DEXA scan, measures the
                              strength and density of your bones. It helps
                              determine whether you have osteoporosis,
                              osteopenia, or normal bone health.
                            </p>
                            <p>
                              This test is especially important because
                              osteoporosis often develops silently without
                              symptoms until a fracture occurs. By checking bone
                              density, doctors can predict fracture risk,
                              monitor bone health, and guide treatment
                              decisions.
                            </p>
                            <p>
                              At Winbri Life Science, we provide Bone Density
                              Testing at your doorstep, with Orthopedic
                              doctor–certified reports and tele-consultation
                              support – making preventive bone care more
                              accessible and convenient.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>
                                Indications – When is Bone Density Testing
                                Needed?
                              </b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Symptoms & Risk Factors</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Frequent bone or joint pain</li>
                                    <li>
                                      History of fractures with minor falls or
                                      injuries
                                    </li>
                                    <li>
                                      Loss of height or change in posture
                                      (stooping, humpback)
                                    </li>
                                    <li>Weak or brittle bones</li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. High-Risk Groups</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Women above 40 (especially
                                      post-menopausal)
                                    </li>
                                    <li>Men above 50 with risk factors</li>
                                    <li>
                                      People with a family history of
                                      osteoporosis
                                    </li>
                                    <li>
                                      Individuals on long-term steroid use
                                    </li>
                                    <li>
                                      Patients with chronic illnesses (thyroid
                                      disorders, kidney disease, rheumatoid
                                      arthritis)
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Preventive & Monitoring Uses</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Routine screening for osteoporosis and
                                      osteopenia
                                    </li>
                                    <li>
                                      Monitoring effectiveness of osteoporosis
                                      treatment
                                    </li>
                                    <li>
                                      Pre-surgical evaluation for bone-related
                                      procedures
                                    </li>
                                    <li>
                                      Preventive check-ups in elderly or
                                      high-risk populations
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why Bone Density Test is Important?</b>
                            </p>
                            <p>
                              <b>Early Detection:</b> Identifies osteoporosis
                              before fractures occur.
                            </p>
                            <p>
                              <b>Fracture Prevention:</b> Predicts risk of
                              spine, hip, and wrist fractures.
                            </p>
                            <p>
                              <b>Treatment Guidance:</b> Helps orthopedic
                              doctors decide on medication, supplements, or
                              lifestyle changes.
                            </p>
                            <p>
                              <b>Health Monitoring:</b> Tracks bone strength
                              over time in patients under treatment.
                            </p>
                            <p>
                              <b>Quality of Life:</b> Maintains mobility,
                              independence, and reduces disability from
                              fractures.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science Bone Density
                                Service?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we make bone health
                              screening easy, accurate, and convenient.
                            </p>
                            <p>🕑 24 × 7 × 365 Service – Anytime, anywhere.</p>
                            <p>
                              🏠 Doorstep Convenience – Bone density testing at
                              home, office, clinic, hospital, or diagnostic
                              centre.
                            </p>
                            <p>
                              👨‍⚕ Orthopedic Doctor–Certified Reports – Every
                              test reviewed by a bone & joint specialist.
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Discuss your
                              results with an orthopedic doctor.
                            </p>
                            <p>
                              ⚡ Portable & Advanced Machines – Safe, reliable,
                              and painless testing devices.
                            </p>
                            <p>
                              🔒 Confidential & Secure – Your reports are
                              private and safely delivered.
                            </p>
                            <p>
                              ❤ Patient-Centered Care – No travel, no waiting –
                              preventive bone health at your comfort.
                            </p>
                            <p>
                              <b>How Our Bone Density Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Test:</b> Call or book online for
                              a Bone Density test at your location.
                            </p>
                            <p>
                              <b>2. Doorstep Setup:</b> Our trained technician
                              arrives with a portable bone density scanner.
                            </p>
                            <p>
                              <b>3. Quick & Painless Test:</b> The scan is
                              performed on specific bones (hip, wrist, spine, or
                              heel) and takes only a few minutes.
                            </p>
                            <p>
                              <b>4. Data Collection:</b> Results are recorded as
                              T-scores and Z-scores, showing bone strength
                              compared to healthy standards.
                            </p>
                            <p>
                              <b>5. Specialist Review:</b> Report is certified
                              by an Orthopedic doctor for accurate diagnosis.
                            </p>
                            <p>
                              <b>6. Report Delivery:</b> Reports are delivered
                              via WhatsApp, Email, or printed copy.
                            </p>
                            <p>
                              <b>7. Tele-Consultation:</b> You can consult an
                              orthopedic doctor for treatment advice, lifestyle
                              changes, or medications.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Strong Bones. Strong Life
                              </b>
                            </p>
                            <p>
                              With doorstep bone density testing,
                              orthopedic-certified reports, and
                              tele-consultation support, Winbri Life Science
                              ensures early detection, prevention, and
                              management of osteoporosis – anytime, anywhere.
                            </p>
                            <p>
                              💙 Protect Your Bones Today for a Healthier
                              Tomorrow – With Winbri Life Science. 💙
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
                                    Indications – When is Bone Density Testing
                                    Needed?
                                  </b>
                                </p>
                                <div className="row">
                                  <div className="col-md-4">
                                    <p>
                                      <b>1. Symptoms & Risk Factors</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>Frequent bone or joint pain</li>
                                        <li>
                                          History of fractures with minor falls
                                          or injuries
                                        </li>
                                        <li>
                                          Loss of height or change in posture
                                          (stooping, humpback)
                                        </li>
                                        <li>Weak or brittle bones</li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>2. High-Risk Groups</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Women above 40 (especially
                                          post-menopausal)
                                        </li>
                                        <li>Men above 50 with risk factors</li>
                                        <li>
                                          People with a family history of
                                          osteoporosis
                                        </li>
                                        <li>
                                          Individuals on long-term steroid use
                                        </li>
                                        <li>
                                          Patients with chronic illnesses
                                          (thyroid disorders, kidney disease,
                                          rheumatoid arthritis)
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>3. Preventive & Monitoring Uses</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Routine screening for osteoporosis and
                                          osteopenia
                                        </li>
                                        <li>
                                          Monitoring effectiveness of
                                          osteoporosis treatment
                                        </li>
                                        <li>
                                          Pre-surgical evaluation for
                                          bone-related procedures
                                        </li>
                                        <li>
                                          Preventive check-ups in elderly or
                                          high-risk populations
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why Bone Density Test is Important?</b>
                                </p>
                                <p>
                                  <b>Early Detection:</b> Identifies
                                  osteoporosis before fractures occur.
                                </p>
                                <p>
                                  <b>Fracture Prevention:</b> Predicts risk of
                                  spine, hip, and wrist fractures.
                                </p>
                                <p>
                                  <b>Treatment Guidance:</b> Helps orthopedic
                                  doctors decide on medication, supplements, or
                                  lifestyle changes.
                                </p>
                                <p>
                                  <b>Health Monitoring:</b> Tracks bone strength
                                  over time in patients under treatment.
                                </p>
                                <p>
                                  <b>Quality of Life:</b> Maintains mobility,
                                  independence, and reduces disability from
                                  fractures.
                                </p>
                                <p>
                                  <b>
                                    Why Choose Winbri Life Science Bone Density
                                    Service?
                                  </b>
                                </p>
                                <p>
                                  At Winbri Life Science, we make bone health
                                  screening easy, accurate, and convenient.
                                </p>
                                <p>
                                  🕑 24 × 7 × 365 Service – Anytime, anywhere.
                                </p>
                                <p>
                                  🏠 Doorstep Convenience – Bone density testing
                                  at home, office, clinic, hospital, or
                                  diagnostic centre.
                                </p>
                                <p>
                                  👨‍⚕ Orthopedic Doctor–Certified Reports –
                                  Every test reviewed by a bone & joint
                                  specialist.
                                </p>
                                <p>
                                  📞 Tele-Consultation Support – Discuss your
                                  results with an orthopedic doctor.
                                </p>
                                <p>
                                  ⚡ Portable & Advanced Machines – Safe,
                                  reliable, and painless testing devices.
                                </p>
                                <p>
                                  🔒 Confidential & Secure – Your reports are
                                  private and safely delivered.
                                </p>
                                <p>
                                  ❤ Patient-Centered Care – No travel, no
                                  waiting – preventive bone health at your
                                  comfort.
                                </p>
                                <p>
                                  <b>How Our Bone Density Service Works?</b>
                                </p>
                                <p>
                                  <b>1. Book Your Test:</b> Call or book online
                                  for a Bone Density test at your location.
                                </p>
                                <p>
                                  <b>2. Doorstep Setup:</b> Our trained
                                  technician arrives with a portable bone
                                  density scanner.
                                </p>
                                <p>
                                  <b>3. Quick & Painless Test:</b> The scan is
                                  performed on specific bones (hip, wrist,
                                  spine, or heel) and takes only a few minutes.
                                </p>
                                <p>
                                  <b>4. Data Collection:</b> Results are
                                  recorded as T-scores and Z-scores, showing
                                  bone strength compared to healthy standards.
                                </p>
                                <p>
                                  <b>5. Specialist Review:</b> Report is
                                  certified by an Orthopedic doctor for accurate
                                  diagnosis.
                                </p>
                                <p>
                                  <b>6. Report Delivery:</b> Reports are
                                  delivered via WhatsApp, Email, or printed
                                  copy.
                                </p>
                                <p>
                                  <b>7. Tele-Consultation:</b> You can consult
                                  an orthopedic doctor for treatment advice,
                                  lifestyle changes, or medications.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science – Strong Bones. Strong
                                    Life
                                  </b>
                                </p>
                                <p>
                                  With doorstep bone density testing,
                                  orthopedic-certified reports, and
                                  tele-consultation support, Winbri Life Science
                                  ensures early detection, prevention, and
                                  management of osteoporosis – anytime,
                                  anywhere.
                                </p>
                                <p>
                                  💙 Protect Your Bones Today for a Healthier
                                  Tomorrow – With Winbri Life Science. 💙
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

        <AllServices service={"bone-density"} />
      </>

      <HomeFooter />
    </>
  );
}

export default BoneDensityService;
