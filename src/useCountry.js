import { useState, useEffect } from 'react';

const countryCodeToPaymentFlags = {
  MX: {
    currency: 'Peso Mexicano',
    currencyCode: 'MXN',
    paymentMethods: [
      { name: 'OXXO', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/OXXO_logo.svg/1280px-OXXO_logo.svg.png', bg: 'bg-white' },
      { name: 'Mercado Pago', src: 'https://cdn.simpleicons.org/mercadopago', bg: 'bg-white' },
      { name: 'SPEI', src: 'https://www.airwallex.com/docs/assets/contentful/images.ctfassets.net/c3n7jozh84hr/TNlgL2sXeD99jMhN6uoo6/5236e36ed62f428cc561402c7e7efdd3/spei.png', bg: 'bg-white' },
    ],
  },
  CO: {
    currency: 'Peso Colombiano',
    currencyCode: 'COP',
    paymentMethods: [
      { name: 'Efecty', src: 'https://logovtor.com/wp-content/uploads/2023/05/efecty-logo-vector-2023.png', bg: 'bg-white' },
      { name: 'Nequi', src: 'https://logowik.com/content/uploads/images/nequi8774.logowik.com.webp', bg: 'bg-white' },
      { name: 'PSE', src: 'https://edge.pse.com.ph/clogo/478/cl5aa63481r629.png', bg: 'bg-white' },
      { name: 'Bancolombia', src: 'https://bogota.gov.co/sites/default/files/styles/1050px/public/2020-04/logo-bancolombia-2.jpg', bg: 'bg-white' },
      { name: 'PayPal', src: 'https://cdn.simpleicons.org/paypal', bg: 'bg-white' },
    ],
  },
  AR: {
    currency: 'Peso Argentino',
    currencyCode: 'ARS',
    paymentMethods: [
      { name: 'Mercado Pago', src: 'https://cdn.simpleicons.org/mercadopago', bg: 'bg-white' },
      { name: 'PayPal', src: 'https://cdn.simpleicons.org/paypal', bg: 'bg-white' },
    ],
  },
  PE: {
    currency: 'Sol Peruano',
    currencyCode: 'PEN',
    paymentMethods: [
      { name: 'Yape', src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Yape_peru_logotype.svg', bg: 'bg-white' },
      { name: 'Pago Efectivo', src: 'https://images.seeklogo.com/logo-png/44/1/pago-efectivo-2020-logo-png_seeklogo-441048.png', bg: 'bg-white' },
      { name: 'PayPal', src: 'https://cdn.simpleicons.org/paypal', bg: 'bg-white' },
    ],
  },
  CL: {
    currency: 'Peso Chileno',
    currencyCode: 'CLP',
    paymentMethods: [
      { name: 'Sencillito', src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Sencillito_logo.svg', bg: 'bg-white' },
      { name: 'PayPal', src: 'https://cdn.simpleicons.org/paypal', bg: 'bg-white' },
    ],
  },
  UY: {
    currency: 'Peso Uruguayo',
    currencyCode: 'UYU',
    paymentMethods: [
      { name: 'PayPal', src: 'https://cdn.simpleicons.org/paypal', bg: 'bg-white' },
    ],
  },
  BR: {
    currency: 'Real Brasileño',
    currencyCode: 'BRL',
    paymentMethods: [
      { name: 'PIX', src: 'https://images.seeklogo.com/logo-png/38/1/pix-banco-central-logo-png_seeklogo-388843.png', bg: 'bg-white' },
    ],
  },
};

const countryNames = {
  AR: 'Argentina', BO: 'Bolivia', BR: 'Brasil', CL: 'Chile',
  CO: 'Colombia', CR: 'Costa Rica', CU: 'Cuba', DO: 'República Dominicana',
  EC: 'Ecuador', SV: 'El Salvador', GT: 'Guatemala', HN: 'Honduras',
  MX: 'México', NI: 'Nicaragua', PA: 'Panamá', PY: 'Paraguay',
  PE: 'Perú', PR: 'Puerto Rico', UY: 'Uruguay', VE: 'Venezuela',
  ES: 'España', US: 'Estados Unidos', PT: 'Portugal', GB: 'Reino Unido', CA: 'Canadá',
};

let cachedResult = null;
let fetchPromise = null;
const listeners = new Set();

function notify() {
  listeners.forEach(fn => fn(cachedResult));
}

function fetchCountry() {
  if (fetchPromise) return fetchPromise;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);

  fetchPromise = fetch('https://api.ipdata.co?api-key=63d72f8354d59c5444f4e2d113115b4e3ec28ad066f32f5588cf07ac', { signal: controller.signal })
    .then(res => {
      clearTimeout(timeout);
      if (!res.ok) throw new Error('fetch failed');
      return res.json();
    })
    .then(data => {
      const code = data.country_code;
      const countryData = countryCodeToPaymentFlags[code];
      cachedResult = {
        countryCode: code,
        name: countryNames[code] || data.country_name || '',
        currency: countryData ? countryData.currency : '',
        currencyCode: countryData ? countryData.currencyCode : '',
        paymentMethods: countryData ? countryData.paymentMethods : [],
      };
      notify();
      return cachedResult;
    })
    .catch(() => {
      clearTimeout(timeout);
      if (!cachedResult) {
        cachedResult = { countryCode: '', name: '', currency: '', currencyCode: '', paymentMethods: [] };
      }
      notify();
      return cachedResult;
    });

  return fetchPromise;
}

fetchCountry();

export function useCountry() {
  const [country, setCountry] = useState(() => {
    if (cachedResult) return cachedResult;
    return { countryCode: '', name: '', currency: '', currencyCode: '', paymentMethods: [] };
  });

  useEffect(() => {
    if (cachedResult) {
      setCountry(cachedResult);
      return;
    }
    const handler = (data) => { if (data) setCountry(data); };
    listeners.add(handler);
    return () => { listeners.delete(handler); };
  }, []);

  return country;
}
