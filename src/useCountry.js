const countryCodeToPaymentFlags = {
  MX: {
    currency: 'Mexican Peso',
    currencyCode: 'MXN',
    paymentMethods: [
      {
        name: 'OXXO',
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/OXXO_logo.svg/1280px-OXXO_logo.svg.png',
        bg: 'bg-white',
      },
      {
        name: 'Mercado Pago',
        src: 'https://cdn.simpleicons.org/mercadopago',
        bg: 'bg-white',
      },
      {
        name: 'SPEI',
        src: 'https://www.airwallex.com/docs/assets/contentful/images.ctfassets.net/c3n7jozh84hr/TNlgL2sXeD99jMhN6uoo6/5236e36ed62f428cc561402c7e7efdd3/spei.png',
        bg: 'bg-white',
      },
    ],
  },

  CO: {
    currency: 'Colombian Peso',
    currencyCode: 'COP',
    paymentMethods: [
      {
        name: 'Efecty',
        src: 'https://logovtor.com/wp-content/uploads/2023/05/efecty-logo-vector-2023.png',
        bg: 'bg-white',
      },
      {
        name: 'Nequi',
        src: 'https://logowik.com/content/uploads/images/nequi8774.logowik.com.webp',
        bg: 'bg-white',
      },
      {
        name: 'PSE',
        src: 'https://edge.pse.com.ph/clogo/478/cl5aa63481r629.png',
        bg: 'bg-white',
      },
      {
        name: 'Bancolombia',
        src: 'https://bogota.gov.co/sites/default/files/styles/1050px/public/2020-04/logo-bancolombia-2.jpg',
        bg: 'bg-white',
      },
      {
        name: 'PayPal',
        src: 'https://cdn.simpleicons.org/paypal',
        bg: 'bg-white',
      },
    ],
  },

  AR: {
    currency: 'Argentine Peso',
    currencyCode: 'ARS',
    paymentMethods: [
      {
        name: 'Mercado Pago',
        src: 'https://cdn.simpleicons.org/mercadopago',
        bg: 'bg-white',
      },
      {
        name: 'PayPal',
        src: 'https://cdn.simpleicons.org/paypal',
        bg: 'bg-white',
      },
    ],
  },

  PE: {
    currency: 'Peruvian Sol',
    currencyCode: 'PEN',
    paymentMethods: [
      {
        name: 'Yape',
        src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Yape_peru_logotype.svg',
        bg: 'bg-white',
      },
      {
        name: 'Pago Efectivo',
        src: 'https://images.seeklogo.com/logo-png/44/1/pago-efectivo-2020-logo-png_seeklogo-441048.png',
        bg: 'bg-white',
      },
      {
        name: 'PayPal',
        src: 'https://cdn.simpleicons.org/paypal',
        bg: 'bg-white',
      },
    ],
  },

  CL: {
    currency: 'Chilean Peso',
    currencyCode: 'CLP',
    paymentMethods: [
      {
        name: 'Sencillito',
        src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Sencillito_logo.svg',
        bg: 'bg-white',
      },
      {
        name: 'PayPal',
        src: 'https://cdn.simpleicons.org/paypal',
        bg: 'bg-white',
      },
    ],
  },

  UY: {
    currency: 'Uruguayan Peso',
    currencyCode: 'UYU',
    paymentMethods: [
      {
        name: 'PayPal',
        src: 'https://cdn.simpleicons.org/paypal',
        bg: 'bg-white',
      },
    ],
  },

  BR: {
    currency: 'Brazilian Real',
    currencyCode: 'BRL',
    paymentMethods: [
      {
        name: 'PIX',
        src: 'https://images.seeklogo.com/logo-png/38/1/pix-banco-central-logo-png_seeklogo-388843.png',
        bg: 'bg-white',
      },
    ],
  },
};
export const useCountry = () => {
  const [countryCode, setCountryCode] =
    useState<keyof typeof countryCodeToPaymentFlags>()
const [currency,setCurrency] = useState()

  useEffect(() => {
    const url = "https://api.ipdata.co?api-key=63d72f8354d59c5444f4e2d113115b4e3ec28ad066f32f5588cf07ac"
        axios.get(url).then(resp => {
            setCountryCode(resp.data.country_code)
          setCurrency(countryCodeToPaymentFlags[resp.data.country_code].currency)
        })
  }, [])

  return {countryCode, currency}
}