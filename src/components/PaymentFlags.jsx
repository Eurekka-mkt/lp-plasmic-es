import { useCountry } from '../useCountry';

const commonPaymentMethods = [
  {
    name: 'Visa',
    src: 'https://cdn.simpleicons.org/visa/1A1F71',
    bg: '#fff',
  },
  {
    name: 'Mastercard',
    src: 'https://cdn.simpleicons.org/mastercard',
    bg: '#fff',
  },
  {
    name: 'American Express',
    src: 'https://cdn.simpleicons.org/americanexpress/2E77BC',
    bg: '#fff',
  },
];

const countryCodeToPaymentFlags = {
  MX: [
    { name: 'OXXO', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/OXXO_logo.svg/1280px-OXXO_logo.svg.png', bg: '#fff' },
    { name: 'Mercado Pago', src: 'https://cdn.simpleicons.org/mercadopago', bg: '#fff' },
    { name: 'SPEI', src: 'https://www.airwallex.com/docs/assets/contentful/images.ctfassets.net/c3n7jozh84hr/TNlgL2sXeD99jMhN6uoo6/5236e36ed62f428cc561402c7e7efdd3/spei.png', bg: '#fff' },
  ],
  CO: [
    { name: 'Efecty', src: 'https://logovtor.com/wp-content/uploads/2023/05/efecty-logo-vector-2023.png', bg: '#fff' },
    { name: 'Nequi', src: 'https://logowik.com/content/uploads/images/nequi8774.logowik.com.webp', bg: '#fff' },
    { name: 'PSE', src: 'https://edge.pse.com.ph/clogo/478/cl5aa63481r629.png', bg: '#fff' },
    { name: 'Bancolombia', src: 'https://bogota.gov.co/sites/default/files/styles/1050px/public/2020-04/logo-bancolombia-2.jpg', bg: '#fff' },
    { name: 'PayPal', src: 'https://cdn.simpleicons.org/paypal', bg: '#fff' },
  ],
  AR: [
    { name: 'Mercado Pago', src: 'https://cdn.simpleicons.org/mercadopago', bg: '#fff' },
    { name: 'PayPal', src: 'https://cdn.simpleicons.org/paypal', bg: '#fff' },
  ],
  PE: [
    { name: 'Yape', src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Yape_peru_logotype.svg', bg: '#fff' },
    { name: 'Pago Efectivo', src: 'https://images.seeklogo.com/logo-png/44/1/pago-efectivo-2020-logo-png_seeklogo-441048.png', bg: '#fff' },
    { name: 'PayPal', src: 'https://cdn.simpleicons.org/paypal', bg: '#fff' },
  ],
  CL: [
    { name: 'Sencillito', src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Sencillito_logo.svg', bg: '#fff' },
    { name: 'PayPal', src: 'https://cdn.simpleicons.org/paypal', bg: '#fff' },
  ],
  UY: [
    { name: 'PayPal', src: 'https://cdn.simpleicons.org/paypal', bg: '#fff' },
  ],
  BR: [
    { name: 'PIX', src: 'https://images.seeklogo.com/logo-png/38/1/pix-banco-central-logo-png_seeklogo-388843.png', bg: '#fff' },
  ],
};

export default function PaymentFlags() {
  const { code } = useCountry();

  const paymentMethods = [
    ...commonPaymentMethods,
    ...(code && countryCodeToPaymentFlags[code] ? countryCodeToPaymentFlags[code] : []),
  ];

  return (
    <div style={styles.wrapper}>
      <p style={styles.label}>Formas de pago aceptadas</p>
      <div style={styles.grid}>
        {paymentMethods.map((method) => (
          <div key={method.name} style={{ ...styles.flag, background: method.bg }} title={method.name}>
            <img src={method.src} alt={method.name} style={styles.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  label: {
    textAlign: 'center',
    fontSize: '0.85rem',
    color: '#bfa7c5',
    marginBottom: '16px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
  },
  flag: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    padding: '8px 12px',
    height: '40px',
    width: '72px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  },
  img: {
    maxHeight: '24px',
    maxWidth: '56px',
    width: 'auto',
    objectFit: 'contain',
  },
};
