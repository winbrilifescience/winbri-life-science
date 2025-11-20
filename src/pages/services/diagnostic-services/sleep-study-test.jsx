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

function SleepStudyService() {
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
                  <h2>Doorstep Sleep Study Test</h2>
                  <ul className="bread-list">
                    <li>
                      <a alt="Winbri" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="icofont-simple-right" />
                    </li>
                    <li className="active">Sleep Study Test</li>
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
                                src="/assets/images/services/sleep-study.JPG"
                                alt="#"
                              />
                            </div>
                            <div className="news-head">
                              <img
                                src="/assets/images/services/sleep-study-2.JPG"
                                alt="#"
                              />
                            </div>
                            <div className="news-head">
                              <img
                                src="/assets/images/services/sleep-study-3.JPG"
                                alt="#"
                              />
                            </div>
                          </OwlCarousel>
                        </div>
                        <div className="col-md-6">
                          <h1 className="news-title">
                            <a href="news-single.html">
                              Sleep Study Test at Your Doorstep
                            </a>
                          </h1>
                          <div className="news-text">
                            <p>
                              A Sleep Study (Polysomnography) is a specialized
                              diagnostic test that records your sleep patterns,
                              breathing, heart activity, oxygen levels, brain
                              activity, and body movements during sleep.
                            </p>
                            <p>
                              It helps doctors identify sleep disorders that
                              affect overall health, daytime performance, and
                              increase the risk of serious medical conditions.
                            </p>
                            <p>
                              With Winbri Life Science, you can undergo a
                              complete sleep study test at your doorstep, with
                              reports certified by sleep medicine specialists
                              and access to tele-consultation support.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="news-text d-md-block d-none">
                        <div className="row">
                          <div className="col-12">
                            <p className="mt-3">
                              <b>Indications - When is a Sleep Study Needed?</b>
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <p>
                                  <b>1. Sleep-Related Symptoms</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>Loud snoring</li>
                                    <li>
                                      Breathing pauses during sleep (reported by
                                      family/partner)
                                    </li>
                                    <li>
                                      Waking up choking, gasping, or with
                                      shortness of breath
                                    </li>
                                    <li>
                                      Excessive daytime sleepiness or fatigue
                                      despite sleeping at night
                                    </li>
                                    <li>
                                      Difficulty falling asleep or staying
                                      asleep
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>2. Suspected Sleep Disorders</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Obstructive Sleep Apnea (OSA): Airway
                                      blockage during sleep causing repeated
                                      breathing pauses
                                    </li>
                                    <li>
                                      Central Sleep Apnea: Brain not sending
                                      proper signals to breathing muscles
                                    </li>
                                    <li>
                                      Insomnia: Difficulty initiating or
                                      maintaining sleep
                                    </li>
                                    <li>
                                      Restless Leg Syndrome / Periodic Limb
                                      Movement Disorder
                                    </li>
                                    <li>
                                      Narcolepsy: Sudden and uncontrollable
                                      sleep attacks
                                    </li>
                                    <li>
                                      REM Sleep Disorders: Acting out dreams
                                      during deep sleep
                                    </li>
                                  </ul>
                                </p>
                              </div>
                              <div className="col-md-4">
                                <p>
                                  <b>3. Medical & Risk Conditions</b>
                                  <ul className="list-style-unset pl-3">
                                    <li>
                                      Hypertension (especially uncontrolled or
                                      night-time high BP)
                                    </li>
                                    <li>
                                      Diabetes, obesity, and metabolic syndrome
                                    </li>
                                    <li>
                                      Heart disease, arrhythmias, or history of
                                      stroke
                                    </li>
                                    <li>
                                      Chronic fatigue, memory loss, or poor
                                      concentration
                                    </li>
                                    <li>
                                      Pre-surgical assessment in high-risk
                                      patients
                                    </li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                            <p>
                              <b>Why Sleep Study is Important?</b>
                            </p>
                            <p>
                              <b>Accurate Diagnosis:</b> Detects sleep apnea and
                              other hidden disorders that can’t be identified in
                              a routine check-up.
                            </p>
                            <p>
                              <b>Prevention of Complications:</b> Untreated
                              sleep apnea increases risk of hypertension,
                              stroke, heart attack, and diabetes.
                            </p>
                            <p>
                              <b>Better Quality of Life:</b> Improves sleep,
                              energy levels, memory, and mood.
                            </p>
                            <p>
                              <b>Guides Treatment:</b> Helps doctors decide if
                              you need CPAP therapy, medication, or lifestyle
                              modifications.
                            </p>
                            <p>
                              <b>Safe & Non-Invasive:</b> No injections or pain
                              – only monitoring while you sleep naturally.
                            </p>
                            <p>
                              <b>
                                Why Choose Winbri Life Science Sleep Study
                                Service?
                              </b>
                            </p>
                            <p>
                              At Winbri Life Science, we make advanced sleep
                              diagnostics accessible, convenient, and reliable.
                            </p>
                            <p>
                              🕑 24 × 7 × 365 Service – Available anytime,
                              anywhere.
                            </p>
                            <p>
                              🏠 Doorstep Testing – Sleep study at home, office,
                              clinic, hospital, or diagnostic centre.
                            </p>
                            <p>
                              👨‍⚕ Specialist Certified Reports – Every test
                              reviewed and validated by sleep medicine experts.
                            </p>
                            <p>
                              📞 Tele-Consultation Support – Discuss your
                              results directly with a specialist doctor.
                            </p>
                            <p>
                              ⚡ Comfortable Setup – Portable, patient-friendly
                              devices for natural sleep in your own bed.
                            </p>
                            <p>
                              🔒 Confidential & Secure – Private and safe
                              handling of all your health data.
                            </p>
                            <p>
                              ❤ Holistic Care – Not just testing, but also
                              guidance for further treatment and lifestyle
                              changes.
                            </p>
                            <p>
                              Unlike hospital-based sleep labs where patients
                              may feel uncomfortable, Winbri Life Science allows
                              you to sleep naturally at home, ensuring more
                              accurate and realistic results.
                            </p>
                            <p>
                              <b>How Our Sleep Study Service Works?</b>
                            </p>
                            <p>
                              <b>1. Book Your Test:</b> Call or book online for
                              a home sleep study.
                            </p>
                            <p>
                              <b>2. Doorstep Setup:</b> A trained technician
                              arrives and attaches the sleep monitoring device
                              with sensors for breathing, oxygen, heart rate,
                              and brain activity.
                            </p>
                            <p>
                              <b>3. Overnight Monitoring:</b> The device records
                              your sleep throughout the night while you sleep in
                              your own bed.
                            </p>
                            <p>
                              <b>4. Data Collection:</b> The device is collected
                              the next morning by our team.
                            </p>
                            <p>
                              <b>5. Specialist Review:</b> Data is analyzed and
                              certified by a sleep medicine specialist.
                            </p>
                            <p>
                              <b>6. Report Delivery:</b> Report is delivered via
                              WhatsApp, Email, or hard copy.
                            </p>
                            <p>
                              <b>7. Tele-Consultation:</b> Discuss your results
                              with a specialist doctor to plan the right
                              treatment.
                            </p>
                            <p>
                              <b>
                                Winbri Life Science – Sleep Better. Live
                                Healthier
                              </b>
                            </p>
                            <p>
                              With doorstep sleep study services,
                              expert-certified reports, and tele-consultation
                              support, Winbri Life Science ensures that quality
                              sleep diagnostics are accessible anytime,
                              anywhere.
                            </p>
                            <p>
                              💙 Better Sleep = Better Health. Trust Winbri Life
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
                                  <b>
                                    Indications - When is a Sleep Study Needed?
                                  </b>
                                </p>
                                <div className="row">
                                  <div className="col-md-4">
                                    <p>
                                      <b>1. Sleep-Related Symptoms</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>Loud snoring</li>
                                        <li>
                                          Breathing pauses during sleep
                                          (reported by family/partner)
                                        </li>
                                        <li>
                                          Waking up choking, gasping, or with
                                          shortness of breath
                                        </li>
                                        <li>
                                          Excessive daytime sleepiness or
                                          fatigue despite sleeping at night
                                        </li>
                                        <li>
                                          Difficulty falling asleep or staying
                                          asleep
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>2. Suspected Sleep Disorders</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Obstructive Sleep Apnea (OSA): Airway
                                          blockage during sleep causing repeated
                                          breathing pauses
                                        </li>
                                        <li>
                                          Central Sleep Apnea: Brain not sending
                                          proper signals to breathing muscles
                                        </li>
                                        <li>
                                          Insomnia: Difficulty initiating or
                                          maintaining sleep
                                        </li>
                                        <li>
                                          Restless Leg Syndrome / Periodic Limb
                                          Movement Disorder
                                        </li>
                                        <li>
                                          Narcolepsy: Sudden and uncontrollable
                                          sleep attacks
                                        </li>
                                        <li>
                                          REM Sleep Disorders: Acting out dreams
                                          during deep sleep
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p>
                                      <b>3. Medical & Risk Conditions</b>
                                      <ul className="list-style-unset pl-3">
                                        <li>
                                          Hypertension (especially uncontrolled
                                          or night-time high BP)
                                        </li>
                                        <li>
                                          Diabetes, obesity, and metabolic
                                          syndrome
                                        </li>
                                        <li>
                                          Heart disease, arrhythmias, or history
                                          of stroke
                                        </li>
                                        <li>
                                          Chronic fatigue, memory loss, or poor
                                          concentration
                                        </li>
                                        <li>
                                          Pre-surgical assessment in high-risk
                                          patients
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                                <p>
                                  <b>Why Sleep Study is Important?</b>
                                </p>
                                <p>
                                  <b>Accurate Diagnosis:</b> Detects sleep apnea
                                  and other hidden disorders that can’t be
                                  identified in a routine check-up.
                                </p>
                                <p>
                                  <b>Prevention of Complications:</b> Untreated
                                  sleep apnea increases risk of hypertension,
                                  stroke, heart attack, and diabetes.
                                </p>
                                <p>
                                  <b>Better Quality of Life:</b> Improves sleep,
                                  energy levels, memory, and mood.
                                </p>
                                <p>
                                  <b>Guides Treatment:</b> Helps doctors decide
                                  if you need CPAP therapy, medication, or
                                  lifestyle modifications.
                                </p>
                                <p>
                                  <b>Safe & Non-Invasive:</b> No injections or
                                  pain – only monitoring while you sleep
                                  naturally.
                                </p>
                                <p>
                                  <b>
                                    Why Choose Winbri Life Science Sleep Study
                                    Service?
                                  </b>
                                </p>
                                <p>
                                  At Winbri Life Science, we make advanced sleep
                                  diagnostics accessible, convenient, and
                                  reliable.
                                </p>
                                <p>
                                  🕑 24 × 7 × 365 Service – Available anytime,
                                  anywhere.
                                </p>
                                <p>
                                  🏠 Doorstep Testing – Sleep study at home,
                                  office, clinic, hospital, or diagnostic
                                  centre.
                                </p>
                                <p>
                                  👨‍⚕ Specialist Certified Reports – Every test
                                  reviewed and validated by sleep medicine
                                  experts.
                                </p>
                                <p>
                                  📞 Tele-Consultation Support – Discuss your
                                  results directly with a specialist doctor.
                                </p>
                                <p>
                                  ⚡ Comfortable Setup – Portable,
                                  patient-friendly devices for natural sleep in
                                  your own bed.
                                </p>
                                <p>
                                  🔒 Confidential & Secure – Private and safe
                                  handling of all your health data.
                                </p>
                                <p>
                                  ❤ Holistic Care – Not just testing, but also
                                  guidance for further treatment and lifestyle
                                  changes.
                                </p>
                                <p>
                                  Unlike hospital-based sleep labs where
                                  patients may feel uncomfortable, Winbri Life
                                  Science allows you to sleep naturally at home,
                                  ensuring more accurate and realistic results.
                                </p>
                                <p>
                                  <b>How Our Sleep Study Service Works?</b>
                                </p>
                                <p>
                                  <b>1. Book Your Test:</b> Call or book online
                                  for a home sleep study.
                                </p>
                                <p>
                                  <b>2. Doorstep Setup:</b> A trained technician
                                  arrives and attaches the sleep monitoring
                                  device with sensors for breathing, oxygen,
                                  heart rate, and brain activity.
                                </p>
                                <p>
                                  <b>3. Overnight Monitoring:</b> The device
                                  records your sleep throughout the night while
                                  you sleep in your own bed.
                                </p>
                                <p>
                                  <b>4. Data Collection:</b> The device is
                                  collected the next morning by our team.
                                </p>
                                <p>
                                  <b>5. Specialist Review:</b> Data is analyzed
                                  and certified by a sleep medicine specialist.
                                </p>
                                <p>
                                  <b>6. Report Delivery:</b> Report is delivered
                                  via WhatsApp, Email, or hard copy.
                                </p>
                                <p>
                                  <b>7. Tele-Consultation:</b> Discuss your
                                  results with a specialist doctor to plan the
                                  right treatment.
                                </p>
                                <p>
                                  <b>
                                    Winbri Life Science – Sleep Better. Live
                                    Healthier
                                  </b>
                                </p>
                                <p>
                                  With doorstep sleep study services,
                                  expert-certified reports, and
                                  tele-consultation support, Winbri Life Science
                                  ensures that quality sleep diagnostics are
                                  accessible anytime, anywhere.
                                </p>
                                <p>
                                  💙 Better Sleep = Better Health. Trust Winbri
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

        <AllServices service={"sleep-study"} />
      </>

      <HomeFooter />
    </>
  );
}

export default SleepStudyService;
