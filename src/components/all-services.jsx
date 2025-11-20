/* eslint-disable jsx-a11y/iframe-has-title */

import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function AllServices({ service }) {
  return (
    <>
      <section className="services section" style={{ padding: "0px 0px 50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Diagnostic services at Doorstep</h2>
                <img
                  src="/assets/images/section-img.webp"
                  alt="Health Services"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <OwlCarousel
              loop
              autoplay
              dots={false}
              id="carouselExampleControls"
              className="owl-carousel owl-theme"
              responsive={{
                0: {
                  items: 2,
                },
                600: {
                  items: 6,
                },
                1000: {
                  items: 6,
                },
              }}
            >
              {service !== "ecg" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/ecg-test">
                    <img
                      src="/assets/images/service/ecg.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">ECG</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "pft" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/pft-test">
                    <img
                      src="/assets/images/service/pft.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">PFT</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "x-ray" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/x-ray-test">
                    <img
                      src="/assets/images/service/x-ray.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">X-ray</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "holter" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/holter-monitoring-test">
                    <img
                      src="/assets/images/service/holter.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Holter Monitoring</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "sleep-study" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/sleep-study-test">
                    <img
                      src="/assets/images/service/sleep-study.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Sleep Study</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "abpm" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/abpm-test">
                    <img
                      src="/assets/images/service/abpm.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">ABPM</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "audiometry" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/audiometry-test">
                    <img
                      src="/assets/images/service/audiometry.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Audiometry</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "bone-density" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/bone-density-test">
                    <img
                      src="/assets/images/service/bone-density.jpg"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Bone Density</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "eeg" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/eeg-test">
                    <img
                      src="/assets/images/service/eeg.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">EEG</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "emg" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/emg-test">
                    <img
                      src="/assets/images/service/emg.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">EMG</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "health-check-up" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/health-check-up-test">
                    <img
                      src="/assets/images/service/pft.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Health Check-Up</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "lvef" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/lvef-analysis">
                    <img
                      src="/assets/images/service/lvef.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">LVEF Analysis</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "pathology" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/pathology-test">
                    <img
                      src="/assets/images/service/blood-report.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Pathology / Lab Test</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "tmt" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/treadmill-test">
                    <img
                      src="/assets/images/service/tmt.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">Treadmill</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
              {service !== "eco" && (
                <div className="col-12 mb-md-0 mb-3 text-center service">
                  <a alt="Winbri" href="/2d-echo-test">
                    <img
                      src="/assets/images/service/eco.JPG"
                      width="100%"
                      alt=""
                    />
                    <p className="text-center mt-1">2D Echocardiography</p>
                    <button className="text-center read-btn mb-1">
                      READ MORE
                    </button>
                    <button className="text-center book-btn">
                      BOOK NOW
                    </button>
                  </a>
                </div>
              )}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllServices;
