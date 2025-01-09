import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import WebDevelopment from './pages/services/WebDevelopment';
import ERPCRM from './pages/services/ERPCRM';
import CloudSolutions from './pages/services/CloudSolutions';
import TechnologyConsulting from './pages/services/TechnologyConsulting';
import DigitalTransformation from './pages/services/DigitalTransformation';
import DesignServices from './pages/services/DesignServices';
import GetStarted from './pages/GetStarted';
// import ECommerce from './pages/services/ECommerce';
// import SEODigitalMarketing from './pages/services/SEODigitalMarketing';
// import CustomDevelopment from './pages/services/CustomDevelopment';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/erp-crm" element={<ERPCRM />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/technology-consulting" element={<TechnologyConsulting />} />
            <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/services/design-services" element={<DesignServices />} />
            {/* <Route path="/services/e-commerce" element={<ECommerce />} />
            <Route path="/services/seo-digital-marketing" element={<SEODigitalMarketing />} />
            <Route path="/services/custom-development" element={<CustomDevelopment />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
