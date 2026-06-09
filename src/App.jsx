import { useEffect } from 'react';
import legacyMarkup from './legacy/body.html?raw';
import utmScript from './legacy/utm.js?raw';
import paymentFlagsScript from './legacy/payment-flags.js?raw';

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
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement('script');
  script.id = id;
  script.textContent = code;
  document.body.appendChild(script);
}

function appendExternalScript({ id, src, attributes }) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement('script');
  script.id = id;
  script.src = src;

  Object.entries(attributes).forEach(([name, value]) => {
    script.setAttribute(name, value);
  });

  document.body.appendChild(script);
}

export default function App() {
  useEffect(() => {
    inlineScripts.forEach(({ id, code }) => {
      appendInlineScript(id, code);
    });

    externalScripts.forEach(appendExternalScript);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: legacyMarkup }} />;
}
