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

function HealthCheckUpService() {
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
                  <h2>Doorstep Health Check-Up Test</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">Home</a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Health Check-Up Test</li>
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
                            <img src="/assets/images/services/health-check-up.JPG" alt="#" />
                          </div>
                          <div className="news-head">
                            <img src="/assets/images/services/ecg.JPG" alt="#" />
                          </div>
                          <div className="news-head">
                            <img src="/assets/images/services/pft.JPG" alt="#" />
                          </div>
                                                    </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              Health Check-Up Test at Your Doorstep
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              A Health Check-Up Test is a comprehensive package of diagnostic tests designed to evaluate your overall health status, detect hidden medical conditions, and prevent future health risks.
                            </p>
                            <p>
                              These check-ups usually include a combination of blood tests, urine tests, imaging, ECG, and other screenings depending on age, gender, lifestyle, and risk factors.
                            </p>
                            <p>
                              At Winbri Life Science, we provide complete health check-up packages at your doorstep, with specialist doctor–certified reports and tele-consultation support to help you take charge of your health without leaving your home.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>Indications – Who Should Get a Health Check-Up?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Preventive & Routine Screening</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Adults above 30 years for early detection of lifestyle diseases</li>
                                    <li>
                                      Annual health check-ups for men and women
                                    </li>
                                    <li>
                                      Pre-employment or corporate health screening
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. High-Risk Individuals</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Family history of diabetes, hypertension, heart disease, or cancer
                                    </li>
                                    <li>
                                      People with obesity, sedentary lifestyle, or unhealthy diet
                                    </li>
                                    <li>
                                      Smokers and alcohol consumers
                                    </li>
                                    <li>
                                      Elderly individuals above 50 years
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Symptom-Based Needs</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Fatigue, weakness, or unexplained weight changes
                                    </li>
                                    <li>
                                      Recurrent infections or poor immunity
                                    </li>
                                    <li>
                                      Frequent headaches, digestive problems, or chest discomfort
                                    </li>
                                    <li>
                                      Monitoring after surgery, chronic disease, or long-term medication use
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why Health Check-Up Tests are Important?</b>
                            </p>
                            <p>
                              <b>Early Detection:</b> Identifies hidden conditions like diabetes, hypertension, thyroid disorders, or cancers before symptoms appear.
                            </p>
                            <p>
                              <b>Prevention:</b> Helps avoid serious complications with timely intervention.
                            </p>
                            <p>
                              <b>Treatment Guidance:</b> Assists doctors in personalizing lifestyle and medication plans.
                            </p>
                            <p>
                              <b>Health Monitoring:</b> Tracks progress and effectiveness of ongoing treatments.
                            </p>
                            <p>
                              <b>Peace of Mind:</b> Ensures you and your family stay healthy and stress-free.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science Health Check-Up Service?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we believe in bringing preventive healthcare closer to you.
                            </p>
                            <p>
                              🕑 24 × 7 × 365 Service – Anytime, anywhere.
                            </p>
                            <p>
                              🏠 Doorstep Testing – Health check-up at your home, office, clinic, hospital, or diagnostic centre.
                            </p>
                            <p>
                              👨‍⚕ Specialist Doctor–Certified Reports – Reviewed and validated by experts (physicians, cardiologists, endocrinologists, etc.).
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Get expert guidance on your health check-up results.
                            </p>
                            <p>
                              ⚡ Customizable Packages – From basic to advanced full-body check-ups tailored to your age, gender, and health needs.
                            </p>
                            <p>
                              🔒 Confidential & Secure – Safe handling and delivery of reports.
                            </p>
                            <p>
                              ❤ Patient-Friendly Care – Hassle-free, no long queues, no travel – health management made simple.
                            </p>
                            <p>
                              <b>How Our Health Check-Up Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Package:</b> Choose a health check-up package (basic, executive, senior citizen, women’s health, or customized) and book your slot.
                            </p>
                            <p>
                              <b>2. Doorstep Visit:</b> Our trained team collects blood, urine, and other required samples at your chosen location. ECG, X-ray, and other add-ons can also be done at home if included in the package.
                            </p>
                            <p>
                              <b>3. Sample Analysis:</b> Tests are processed in certified labs with advanced technology.
                            </p>
                            <p>
                              <b>4. Specialist Review:</b> Reports are validated by relevant specialist doctors (pathologists, cardiologists, endocrinologists, etc.).
                            </p>
                            <p>
                              <b>5. Report Delivery:</b> Certified reports are delivered via WhatsApp, Email, or printed copy.
                            </p>
                            <p>
                              <b>6. Tele-Consultation:</b> Discuss your results with a specialist doctor for further advice, treatment, or lifestyle changes.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Preventive Health at Your Doorstep
                              </b>
                            </p>
                            <p>
                              With comprehensive health check-up packages, doctor-certified reports, and tele-consultation support, Winbri Life Science helps you detect, prevent, and manage health risks conveniently and effectively.
                            </p>
                            <p>
                              💙 Stay Ahead of Diseases – Choose Winbri Life Science Health Check-Up. 💙
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
                              <b>Indications – Who Should Get a Health Check-Up?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Preventive & Routine Screening</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Adults above 30 years for early detection of lifestyle diseases</li>
                                    <li>
                                      Annual health check-ups for men and women
                                    </li>
                                    <li>
                                      Pre-employment or corporate health screening
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. High-Risk Individuals</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Family history of diabetes, hypertension, heart disease, or cancer
                                    </li>
                                    <li>
                                      People with obesity, sedentary lifestyle, or unhealthy diet
                                    </li>
                                    <li>
                                      Smokers and alcohol consumers
                                    </li>
                                    <li>
                                      Elderly individuals above 50 years
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Symptom-Based Needs</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Fatigue, weakness, or unexplained weight changes
                                    </li>
                                    <li>
                                      Recurrent infections or poor immunity
                                    </li>
                                    <li>
                                      Frequent headaches, digestive problems, or chest discomfort
                                    </li>
                                    <li>
                                      Monitoring after surgery, chronic disease, or long-term medication use
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why Health Check-Up Tests are Important?</b>
                            </p>
                            <p>
                              <b>Early Detection:</b> Identifies hidden conditions like diabetes, hypertension, thyroid disorders, or cancers before symptoms appear.
                            </p>
                            <p>
                              <b>Prevention:</b> Helps avoid serious complications with timely intervention.
                            </p>
                            <p>
                              <b>Treatment Guidance:</b> Assists doctors in personalizing lifestyle and medication plans.
                            </p>
                            <p>
                              <b>Health Monitoring:</b> Tracks progress and effectiveness of ongoing treatments.
                            </p>
                            <p>
                              <b>Peace of Mind:</b> Ensures you and your family stay healthy and stress-free.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science Health Check-Up Service?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we believe in bringing preventive healthcare closer to you.
                            </p>
                            <p>
                              🕑 24 × 7 × 365 Service – Anytime, anywhere.
                            </p>
                            <p>
                              🏠 Doorstep Testing – Health check-up at your home, office, clinic, hospital, or diagnostic centre.
                            </p>
                            <p>
                              👨‍⚕ Specialist Doctor–Certified Reports – Reviewed and validated by experts (physicians, cardiologists, endocrinologists, etc.).
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Get expert guidance on your health check-up results.
                            </p>
                            <p>
                              ⚡ Customizable Packages – From basic to advanced full-body check-ups tailored to your age, gender, and health needs.
                            </p>
                            <p>
                              🔒 Confidential & Secure – Safe handling and delivery of reports.
                            </p>
                            <p>
                              ❤ Patient-Friendly Care – Hassle-free, no long queues, no travel – health management made simple.
                            </p>
                            <p>
                              <b>How Our Health Check-Up Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Package:</b> Choose a health check-up package (basic, executive, senior citizen, women’s health, or customized) and book your slot.
                            </p>
                            <p>
                              <b>2. Doorstep Visit:</b> Our trained team collects blood, urine, and other required samples at your chosen location. ECG, X-ray, and other add-ons can also be done at home if included in the package.
                            </p>
                            <p>
                              <b>3. Sample Analysis:</b> Tests are processed in certified labs with advanced technology.
                            </p>
                            <p>
                              <b>4. Specialist Review:</b> Reports are validated by relevant specialist doctors (pathologists, cardiologists, endocrinologists, etc.).
                            </p>
                            <p>
                              <b>5. Report Delivery:</b> Certified reports are delivered via WhatsApp, Email, or printed copy.
                            </p>
                            <p>
                              <b>6. Tele-Consultation:</b> Discuss your results with a specialist doctor for further advice, treatment, or lifestyle changes.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Preventive Health at Your Doorstep
                              </b>
                            </p>
                            <p>
                              With comprehensive health check-up packages, doctor-certified reports, and tele-consultation support, Winbri Life Science helps you detect, prevent, and manage health risks conveniently and effectively.
                            </p>
                            <p>
                              💙 Stay Ahead of Diseases – Choose Winbri Life Science Health Check-Up. 💙
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

        <AllServices service={"health-check-up"} />
      </>

      <HomeFooter />
    </>
  );
}

export default HealthCheckUpService;
