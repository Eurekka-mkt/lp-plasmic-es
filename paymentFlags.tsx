import React, { useEffect, useState } from "react"
import axios from "axios"
const commonPaymentMethods = [
  {
    name: 'Visa',
    src: 'https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg',
    bg: 'bg-white',
  },
  {
    name: 'Mastercard',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png',
    bg: 'bg-white',
  },
]

export default function PaymentFlags() {
  const countryCodeToPaymentFlags = {
    MX: [
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

    CO: [
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

    AR: [
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

    PE: [
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

    CL: [
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

    UY: [
      {
        name: 'PayPal',
        src: 'https://cdn.simpleicons.org/paypal',
        bg: 'bg-white',
      },
    ],

    BR: [
      {
        name: "PIX",
        src: "https://images.seeklogo.com/logo-png/38/1/pix-banco-central-logo-png_seeklogo-388843.png",
        bg: "bg-white"
      }
    ]
  }

  const [countryCode, setCountryCode] =
    useState<keyof typeof countryCodeToPaymentFlags>()

  useEffect(() => {
    const url = "https://api.ipdata.co?api-key=63d72f8354d59c5444f4e2d113115b4e3ec28ad066f32f5588cf07ac"
        axios.get(url).then(resp => {
            setCountryCode(resp.data.country_code)
        })
  }, [])

  
  const paymentMethods = [
    ...commonPaymentMethods,
    ... (countryCode ? countryCodeToPaymentFlags[countryCode] : []),
  ]

  return (
    <div className="mt-8 pt-6 border-t border-white/10">
      <p className="text-center text-sm text-brand-tertiary mb-4">
        Formas de pagamento aceitas
      </p>

      <div className="flex flex-wrap justify-center items-center gap-3">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className={`flex items-center justify-center rounded-lg px-3 py-2 h-10 w-[72px] ${method.bg} shadow-sm`}
            title={method.name}
          >
            <img
              src={method.src}
              alt={method.name}
              className="max-h-6 max-w-[56px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
