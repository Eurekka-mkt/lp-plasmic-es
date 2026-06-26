import React, { useEffect, useState } from "react"
import axios from "axios"
import {useCountry} from 'useCountry'

export default function PaymentFlags() {

  const {countryCode} = useCountry()
  
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
