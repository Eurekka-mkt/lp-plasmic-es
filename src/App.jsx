import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import legacyMarkup from './legacy/body.html?raw';
import utmScript from './legacy/utm.js?raw';
import paymentFlagsScript from './legacy/payment-flags.js?raw';
import TherapistCarousel from './TherapistCarousel';

const externalScripts = [
  {
    id: 'cloudflare-beacon',
    src: 'https://static.cloudflareinsights.com/beacon.min.js/v833ccba57c9e4d2798f2e76cebdd09a11778172276447',
    attributes: {
      defer: '',
      integrity:
        'sha512-57MDmcccJXYtNnH+ZiBwzC4jb2rvgVCEokYN+L/nLlmO8rfYT/gIpW2A569iJ/3b+0UEasghjuZH/ma3wIs/EQ==',
      'data-cf-beacon':
        '{"version":"2024.11.0","token":"bc49fc8d7a9b47b19d31a7ecd746ca5c","server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}',
      crossorigin: 'anonymous',
    },
  },
];

const inlineScripts = [
  { id: 'legacy-utm-script', code: utmScript },
  { id: 'legacy-payment-flags-script', code: paymentFlagsScript },
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
  Object.entries(attributes).forEach(([name, value]) => {
    script.setAttribute(name, value);
  });
  document.body.appendChild(script);
}

export default function App() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    inlineScripts.forEach(({ id, code }) => appendInlineScript(id, code));
    externalScripts.forEach(appendExternalScript);
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const firstSection = wrapperRef.current.querySelector('section');
    if (!firstSection) return;

    const mount = document.createElement('div');
    mount.id = 'therapist-carousel-mount';
    firstSection.insertAdjacentElement('afterend', mount);
    const root = createRoot(mount);
    root.render(<TherapistCarousel />);

    return () => {
      root.unmount();
      mount.remove();
    };
  }, []);

  return <div ref={wrapperRef} dangerouslySetInnerHTML={{ __html: legacyMarkup }} />;
}
