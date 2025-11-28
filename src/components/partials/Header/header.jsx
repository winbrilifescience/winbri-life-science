function HomeHeader() {
  return (
    <>
      <header className="header">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                <ul className="top-link">
                  <li>
                    <a href="about-us">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="contact">Contact</a>
                  </li>
                  <li>
                    <a href="contact">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-7 col-12 d-md-block d-none">
                <ul className="top-contact">
                  <li>
                    <i className="fa fa-phone" />
                    <a href="tel:+919510175747" className="mt-0">+91 95101 75747</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <a href="mailto:winbrilifescience@gmail.com">
                      winbrilifescience@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12 logo-main">
                  <div className="w-80">
                    <div className="logo mt-0 d-flex align-items-center justify-content-between">
                      <a href="/">
                        <img src="/assets/images/logo.webp" alt="#" />
                      </a>
                    </div>
                  </div>
                  <div className="w-20 mobile-nav" />
                </div>
                <div className="col-lg-7 col-md-9 col-12 pb-md-5 mb-md-4">
                  {/* <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li className="active">
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="#">
                            Services <i className="icofont-rounded-down" />
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="ecg-test">ECG</a>
                            </li>
                            <li>
                              <a href="pft-test">PFT</a>
                            </li>
                            <li>
                              <a href="x-ray-test">X-Ray</a>
                            </li>
                            <li>
                              <a href="blood-test">Lab Test</a>
                            </li>
                            <li>
                              <a href="full-body-test">Full Body CheckUp</a>
                            </li>
                            <li>
                              <a href="ambulatory-test">Ambulatory Test</a>
                            </li>
                            <li>
                              <a href="holter-monitoring-test">
                                Holter Monitoring
                              </a>
                            </li>
                            <li>
                              <a href="audiometry-test">Audiometry Test</a>
                            </li>
                            <li>
                              <a href="sleep-study-test">Sleep Study</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog">Blogs</a>
                        </li>
                        <li>
                          <a href="about-us">About Us</a>
                        </li>
                        <li>
                          <a href="contact">Contact Us</a>
                        </li>
                        <li className="border-md-none border-top mt-md-0 mt-2 pt-md-0 pt-2 d-lg-none d-block">
                          <div>
                            <ul>
                              <li className="d-md-none d-flex align-items-center">
                                <i className="fa fa-phone ps-2" />
                                <a href="#">+91 95101 75747</a>
                              </li>
                              <li className="d-md-none d-flex align-items-center">
                                <i className="fa fa-envelope ps-2" />
                                <a href="mailto:winbrilifescience@gmail.com">
                                  winbrilifescience@gmail.com
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div> */}
                </div>
                <div className="col-lg-2 col-md-12 col-12">
                  <div className="get-quote">
                    <a
                      href="https://wa.me/918200788099?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment."
                      target="_blank"
                      className="btn"
                    >
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HomeHeader;
