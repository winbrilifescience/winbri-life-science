import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ECGService from "./pages/services/diagnostic-services/ecg-test";
import PFTService from "./pages/services/diagnostic-services/pft-test";
import XRayService from "./pages/services/diagnostic-services/x-ray-test";
import HolterMonitoringService from "./pages/services/diagnostic-services/holter-monitoring-test";
import ABPMService from "./pages/services/diagnostic-services/abpm";
import SleepStudyService from "./pages/services/diagnostic-services/sleep-study-test";
import AudiometryService from "./pages/services/diagnostic-services/audiometry-test";
import EEGService from "./pages/services/diagnostic-services/eeg-test";
import BoneDensityService from "./pages/services/diagnostic-services/bone-density-test";
import PathologyService from "./pages/services/diagnostic-services/pathology-test";
import HealthCheckUpService from "./pages/services/diagnostic-services/health-check-up-test";
import LVEFAnalysisService from "./pages/services/diagnostic-services/lvef-analysis";
import TwoDEchoTestService from "./pages/services/diagnostic-services/2d-echo-test";
import TreadmillTestService from "./pages/services/diagnostic-services/treadmill-test";
import SpecialtyDoctorConsultationService from "./pages/services/health-care-services/specialty-doctor-consultation";
import SpecialistConsultationService from "./pages/services/health-care-services/specialist-consultation";
import GPDoctorService from "./pages/services/health-care-services/gp-doctor";
import PhysiotherapyService from "./pages/services/health-care-services/physiotherapy";
import DieticianService from "./pages/services/health-care-services/dietician";
import NursingCareService from "./pages/services/health-care-services/nursing-care";
import EMGService from "./pages/services/diagnostic-services/emg-test";
import AboutUs from "./pages/about-us";
import ContactPage from "./pages/contact";
const NotFoundPage = lazy(() => import("./pages/404"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Diagnostic services */}
        <Route path="/ecg-test" element={<ECGService />} />
        <Route path="/pft-test" element={<PFTService />} />
        <Route path="/x-ray-test" element={<XRayService />} />
        <Route path="/holter-monitoring-test" element={<HolterMonitoringService />} />
        <Route path="/abpm-test" element={<ABPMService />} />
        <Route path="/sleep-study-test" element={<SleepStudyService />} />
        <Route path="/audiometry-test" element={<AudiometryService />} />
        <Route path="/eeg-test" element={<EEGService />} />
        <Route path="/emg-test" element={<EMGService />} />
        <Route path="/bone-density-test" element={<BoneDensityService />} />
        <Route path="/pathology-test" element={<PathologyService />} />
        <Route path="/health-check-up-test" element={<HealthCheckUpService />} />
        <Route path="/lvef-analysis" element={<LVEFAnalysisService />} />
        <Route path="/2d-echo-test" element={<TwoDEchoTestService />} />
        <Route path="/treadmill-test" element={<TreadmillTestService />} />
        {/* Health Care Services */}
        <Route path="/specialty-doctor-consultation" element={<SpecialtyDoctorConsultationService />} />
        <Route path="/specialist-consultation" element={<SpecialistConsultationService />} />
        <Route path="/gp-doctor-consultation" element={<GPDoctorService />} />
        <Route path="/physiotherapy-consultation" element={<PhysiotherapyService />} />
        <Route path="/dietician-consultation" element={<DieticianService />} />
        <Route path="/nursing-care" element={<NursingCareService />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
