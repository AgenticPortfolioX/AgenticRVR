import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AgenticWorkflows from './pages/AgenticWorkflows';
import SpeedToLead from './pages/SpeedToLead';
import VideoMarketing from './pages/VideoMarketing';
import CustomVideoAds from './pages/CustomVideoAds';
import CinematicRealEstate from './pages/CinematicRealEstate';
import ThreeDGraphics from './pages/ThreeDGraphics';
import AgenticNodes from './pages/AgenticNodes';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Connect from './pages/Connect';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import OrderNode from './pages/OrderNode';
import AgenticReplies from './pages/AgenticReplies';
import OptInStory from './pages/OptInStory';
import BlogPost from './pages/BlogPost';
import AuthenticatedMediaProtocol from './pages/AuthenticatedMediaProtocol';
import AMPDemo from './pages/AMPDemo';

export default function App() {
  return (
    <Router basename="/AgenticRVR">
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workflows" element={<AgenticWorkflows />} />
            <Route path="/speed-to-lead" element={<SpeedToLead />} />
            <Route path="/replies" element={<AgenticReplies />} />
            <Route path="/video" element={<VideoMarketing />} />
            <Route path="/video/custom-ads" element={<CustomVideoAds />} />
            <Route path="/video/real-estate" element={<CinematicRealEstate />} />
            <Route path="/video/3d-graphics" element={<ThreeDGraphics />} />
            <Route path="/nodes" element={<AgenticNodes />} />
            <Route path="/order-node" element={<OrderNode />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/opt-in" element={<OptInStory />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/AMP" element={<AuthenticatedMediaProtocol />} />
            <Route path="/AMPDemo" element={<AMPDemo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
