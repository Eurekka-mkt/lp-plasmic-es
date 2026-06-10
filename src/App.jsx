import { useEffect } from 'react';
import './legacy/legacy.css';
import './legacy/payment-flags.css';
import HeroSection from './components/HeroSection';
import TherapistCarousel from './TherapistCarousel';
import DecoImageSection from './components/DecoImageSection';
import TherapySignalsSection from './components/TherapySignalsSection';
import WhyEurekkaSection from './components/WhyEurekkaSection';
import TherapyBenefitsSection from './components/TherapyBenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProcessSection from './components/ProcessSection';
import VideoSection from './components/VideoSection';
import StatsSection from './components/StatsSection';
import PricingSection from './components/PricingSection';
import FinalCTASection from './components/FinalCTASection';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';
import utmScript from './legacy/utm.js?raw';
import paymentFlagsScript from './legacy/payment-flags.js?raw';

const externalScripts = [
  {
    id: 'cloudflare-beacon',
    src: 'https://static.cloudflareinsights.com/beacon.min.js/v833ccba57c9e4d2798f2e76cebdd09a11778172276447',
    attributes: {
      defer: '',
      integrity: 'sha512-57MDmcccJXYtNnH+ZiBwzC4jb2rvgVCEokYN+L/nLlmO8rfYT/gIpW2A569iJ/3b+0UEasghjuZH/ma3wIs/EQ==',
      'data-cf-beacon': '{"version":"2024.11.0","token":"bc49fc8d7a9b47b19d31a7ecd746ca5c","server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}',
      crossorigin: 'anonymous',
    },
  },
];

function appendInlineScript(id, code) {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.textContent = code;
  document.body.appendChild(script);
}

function appendExternalScript({ id, src, attributes }) {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.src = src;
  Object.entries(attributes).forEach(([name, value]) => script.setAttribute(name, value));
  document.body.appendChild(script);
}

export default function App() {
  useEffect(() => {
    appendInlineScript('legacy-utm-script', utmScript);
    appendInlineScript('legacy-payment-flags-script', paymentFlagsScript);
    externalScripts.forEach(appendExternalScript);
  }, []);

  return (
    <div className="plasmic_page_wrapper">
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NDWWGXG"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="gtm"
        />
      </noscript>
      <div className="ρd__all ρd__div ρr-jrVUo ρdss ρmns ρtns-jrVUo ρtns-ohDid ρmi4J9">
        <HeroSection />
        <TherapistCarousel />
        <DecoImageSection />
        <TherapySignalsSection />
        <WhyEurekkaSection />
        <TherapyBenefitsSection />
        <TestimonialsSection />
        <ProcessSection />
        <VideoSection />
        <StatsSection />
        <PricingSection />
        <FinalCTASection />
        <ClosingSection />
        <Footer />
      </div>
      
    </div>
  );
}
