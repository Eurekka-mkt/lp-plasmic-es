(() => {
        const commonPaymentMethods = [
            {
                name: 'Visa',
                src: 'https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg'
            },
            {
                name: 'Mastercard',
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png'
            }
        ];

        const countryCodeToPaymentFlags = {
            MX: [
                {
                    name: 'OXXO',
                    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/40/OXXO_logo.svg/1280px-OXXO_logo.svg.png'
                },
                {
                    name: 'Mercado Pago',
                    src: 'https://cdn.simpleicons.org/mercadopago'
                },
                {
                    name: 'SPEI',
                    src: 'https://www.airwallex.com/docs/assets/contentful/images.ctfassets.net/c3n7jozh84hr/TNlgL2sXeD99jMhN6uoo6/5236e36ed62f428cc561402c7e7efdd3/spei.png'
                }
            ],
            CO: [
                {
                    name: 'Efecty',
                    src: 'https://logovtor.com/wp-content/uploads/2023/05/efecty-logo-vector-2023.png'
                },
                {
                    name: 'Nequi',
                    src: 'https://logowik.com/content/uploads/images/nequi8774.logowik.com.webp'
                },
                {
                    name: 'PSE',
                    src: 'https://edge.pse.com.ph/clogo/478/cl5aa63481r629.png'
                },
                {
                    name: 'Bancolombia',
                    src: 'https://bogota.gov.co/sites/default/files/styles/1050px/public/2020-04/logo-bancolombia-2.jpg'
                },
                {
                    name: 'PayPal',
                    src: 'https://cdn.simpleicons.org/paypal'
                }
            ],
            AR: [
                {
                    name: 'Mercado Pago',
                    src: 'https://cdn.simpleicons.org/mercadopago'
                },
                {
                    name: 'PayPal',
                    src: 'https://cdn.simpleicons.org/paypal'
                }
            ],
            PE: [
                {
                    name: 'Yape',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Yape_peru_logotype.svg'
                },
                {
                    name: 'Pago Efectivo',
                    src: 'https://images.seeklogo.com/logo-png/44/1/pago-efectivo-2020-logo-png_seeklogo-441048.png'
                },
                {
                    name: 'PayPal',
                    src: 'https://cdn.simpleicons.org/paypal'
                }
            ],
            CL: [
                {
                    name: 'Sencillito',
                    src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Sencillito_logo.svg'
                },
                {
                    name: 'PayPal',
                    src: 'https://cdn.simpleicons.org/paypal'
                }
            ],
            UY: [
                {
                    name: 'PayPal',
                    src: 'https://cdn.simpleicons.org/paypal'
                }
            ],
            BR: [
                {
                    name: 'PIX',
                    src: 'https://images.seeklogo.com/logo-png/38/1/pix-banco-central-logo-png_seeklogo-388843.png'
                }
            ]
        };

        const renderPaymentFlags = (methods) => {
            const paymentMessage = document.querySelector('#prices .ρd36M2');
            if (!paymentMessage || document.getElementById('payment-flags-section')) {
                return;
            }

            const section = document.createElement('div');
            section.id = 'payment-flags-section';

            const title = document.createElement('p');
            title.className = 'payment-flags-title';
            title.textContent = 'Formas de pago aceptadas';
            section.appendChild(title);

            const list = document.createElement('div');
            list.className = 'payment-flags-list';
            list.setAttribute('aria-label', 'Formas de pago aceptadas');

            methods.forEach((method) => {
                const item = document.createElement('div');
                item.className = 'payment-flag-item';
                item.title = method.name;

                const image = document.createElement('img');
                image.src = method.src;
                image.alt = method.name;
                image.loading = 'lazy';

                item.appendChild(image);
                list.appendChild(item);
            });

            section.appendChild(list);
            paymentMessage.insertAdjacentElement('afterend', section);
        };

        const baseMethods = [...commonPaymentMethods];
        renderPaymentFlags(baseMethods);

        fetch('https://api.ipdata.co?api-key=63d72f8354d59c5444f4e2d113115b4e3ec28ad066f32f5588cf07ac')
            .then((response) => response.json())
            .then((data) => {
                const countryCode = data && data.country_code;
                const extraMethods = countryCode ? (countryCodeToPaymentFlags[countryCode] || []) : [];
                if (!extraMethods.length) {
                    return;
                }

                const list = document.querySelector('#payment-flags-section .payment-flags-list');
                if (!list) {
                    return;
                }

                [...baseMethods, ...extraMethods].forEach((method, index) => {
                    const existing = list.children[index];
                    if (existing) {
                        return;
                    }

                    const item = document.createElement('div');
                    item.className = 'payment-flag-item';
                    item.title = method.name;

                    const image = document.createElement('img');
                    image.src = method.src;
                    image.alt = method.name;
                    image.loading = 'lazy';

                    item.appendChild(image);
                    list.appendChild(item);
                });
            })
            .catch(() => {});
    })();
