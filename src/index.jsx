import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useLocation, useNavigate, BrowserRouter } from "react-router-dom";
import "./assets/css/home.css";
import "./assets/css/bootstrap.css";
import "./assets/css/slicknav.min.css";
import "./assets/css/owl-carousel.css";
import "./assets/css/normalize.css";
import "./assets/css/responsive.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
const App = lazy(() => import("./App"));


window.BASE_URL = process.env.PUBLIC_URL;
window.$ = $;
window.jQuery = $;
window.BASE_URL = process.env.PUBLIC_URL;

const RedirectFromHtml = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const cleanPath = location.pathname.replace(/\.html$/, "");

    if (location.pathname !== cleanPath) {
      navigate(cleanPath);
    }

    if (cleanPath.startsWith("/nutrition")) {
      window.location.href = "https://www.gomzilifesciences.in/";
    }
  }, [location, navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=UA-209915471-2";
      script.async = true; // Ensure async loading
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "UA-209915471-2");
      };
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return children;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RedirectFromHtml>
        <Suspense
          fallback={
            <div>
              <div className="main-loading-logo">
                <div className="d-flex align-items-center">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/logo.webp"
                    }
                    className="img-fluid"
                    width={200}
                    height="auto"
                    alt="Winbri"
                  />
                  {/* <b className="fs-24">Winbri</b> */}
                </div>
              </div>
            </div>
          }
        >
          <App />
        </Suspense>
      </RedirectFromHtml>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
