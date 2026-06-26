import { useState, useEffect } from 'react';

const countryNames = {
  AR: 'Argentina',
  BO: 'Bolivia',
  BR: 'Brasil',
  CL: 'Chile',
  CO: 'Colombia',
  CR: 'Costa Rica',
  CU: 'Cuba',
  DO: 'República Dominicana',
  EC: 'Ecuador',
  SV: 'El Salvador',
  GT: 'Guatemala',
  HN: 'Honduras',
  MX: 'México',
  NI: 'Nicaragua',
  PA: 'Panamá',
  PY: 'Paraguay',
  PE: 'Perú',
  PR: 'Puerto Rico',
  UY: 'Uruguay',
  VE: 'Venezuela',
  ES: 'España',
  US: 'Estados Unidos',
  PT: 'Portugal',
  FR: 'Francia',
  DE: 'Alemania',
  IT: 'Italia',
  GB: 'Reino Unido',
  CA: 'Canadá',
};

const countryCurrencyMap = {
  AR: 'Peso Argentino (ARS)',
  BO: 'Boliviano (BOB)',
  BR: 'Real Brasileño (BRL)',
  CL: 'Peso Chileno (CLP)',
  CO: 'Peso Colombiano (COP)',
  CR: 'Colón Costarricense (CRC)',
  CU: 'Peso Cubano (CUP)',
  DO: 'Peso Dominicano (DOP)',
  EC: 'Dólar Estadounidense (USD)',
  SV: 'Dólar Estadounidense (USD)',
  GT: 'Quetzal (GTQ)',
  HN: 'Lempira (HNL)',
  MX: 'Peso Mexicano (MXN)',
  NI: 'Córdoba (NIO)',
  PA: 'Balboa / Dólar (PAB/USD)',
  PY: 'Guaraní (PYG)',
  PE: 'Sol Peruano (PEN)',
  PR: 'Dólar Estadounidense (USD)',
  UY: 'Peso Uruguayo (UYU)',
  VE: 'Bolívar (VES)',
  ES: 'Euro (EUR)',
  US: 'Dólar Estadounidense (USD)',
  PT: 'Euro (EUR)',
  FR: 'Euro (EUR)',
  DE: 'Euro (EUR)',
  IT: 'Euro (EUR)',
  GB: 'Libra Esterlina (GBP)',
  CA: 'Dólar Canadiense (CAD)',
};

export function useCountry() {
  const [country, setCountry] = useState({ name: '', currency: '', code: '' });

  useEffect(() => {
    async function detect() {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error('fetch failed');
        const data = await res.json();
        const code = data.country_code;
        setCountry({
          code,
          name: countryNames[code] || data.country_name || '',
          currency: countryCurrencyMap[code] || data.currency || '',
        });
      } catch {
        try {
          const langs = navigator.languages || [navigator.language];
          for (const lang of langs) {
            const parts = lang.split('-');
            if (parts.length > 1) {
              const c = parts[1].toUpperCase();
              if (countryNames[c]) {
                setCountry({
                  code: c,
                  name: countryNames[c],
                  currency: countryCurrencyMap[c] || '',
                });
                return;
              }
            }
          }
        } catch {
          // silent
        }
      }
    }
    detect();
  }, []);

  return country;
}
