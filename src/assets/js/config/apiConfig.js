const hostname = window.location.hostname.trim(); // Trimming whitespace from the hostname

let baseUrl = "http://localhost";
let fwgBaseUrl = "http://localhost:82";
let razorpayMerchantId = "rzp_test_F0TUZmabOwKkhe";
let environment = "development";

if (hostname === "winbri.com" || hostname === "www.winbri.com") {
  baseUrl = "https://api.winbri.com";
  fwgBaseUrl = 'https://app-api.winbri.com';
  environment = 'production'
  razorpayMerchantId = "rzp_live_tdfTCMm8C9gJNN";
} else if (hostname === "test.winbri.com") {
  baseUrl = "https://dev-api.winbri.com";
  fwgBaseUrl = 'https://fg-app-dev-api.winbri.com';
} else {
  baseUrl = "https://dev-api.winbri.com";
  // baseUrl = 'http://localhost';
  fwgBaseUrl = 'https://fg-app-dev-api.winbri.com';
  // fwgBaseUrl = 'http://localhost:82';
}

const apiConfig = {
  BASE_URL: baseUrl,
  FWG_BASE_URL: fwgBaseUrl,
  RAZORPAY_MERCHANT_ID: razorpayMerchantId,
  environment
};

export default apiConfig;
