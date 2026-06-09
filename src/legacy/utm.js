(function() {
        const urlParams = new URLSearchParams(window.location.search);

        let utmValues = [];
        for (const [key, value] of urlParams.entries()) {
            if (value && value !== 'undefined' && value !== 'null') {
                if (key.startsWith('utm_')) {
                    const cleanKey = key.replace('utm_', '');
                    utmValues.push(`${cleanKey}_${value}`);
                } else if (key === 'source') {
                    utmValues.push(value);
                }
            }
        }
        const baseValue = [...new Set(utmValues)].join('+');
		
		let proxyHostname = window.location.hostname;
		try {
			const dataEl = document.getElementById('__eurekka_data__');
			if (dataEl) {
				const data = JSON.parse(dataEl.textContent);
				proxyHostname = data.proxyUrl.replace(/^https?:\/\//, '').split('/')[0];
			}
		} catch (e) {}

		let cleanUrl = proxyHostname + window.location.pathname;
		if(cleanUrl.endsWith('/') && cleanUrl.length > 1) {
			cleanUrl = cleanUrl.slice(0, -1) 
		}
        
        let newValue;
        
        if (!baseValue) {
            newValue = cleanUrl;
        } else if (baseValue === cleanUrl || baseValue.endsWith('+' + cleanUrl)) {
            newValue = baseValue;
        } else {
            newValue = baseValue + '+' + cleanUrl;
        }
        
        if (urlParams.get('utm_source') !== newValue || urlParams.get('source') !== newValue) {
            urlParams.set('utm_source', newValue);
            urlParams.set('source', newValue);
            const newSearch = urlParams.toString();
            window.history.replaceState(null, '', window.location.pathname + (newSearch ? '?' + newSearch : '') + window.location.hash);
        }

        const updateButtons = () => {
            const currentParams = new URLSearchParams(window.location.search);
            let newValue = currentParams.get('utm_source');
            if (!newValue || newValue === 'undefined' || newValue === 'null') return;

            document.querySelectorAll('a').forEach(el => {
                try {
                    let href = el.getAttribute('href');
                    if (!href || href.startsWith('javascript:')) return;
                    
                    const updateUrlWithParams = (urlString) => {
                        let [path, search] = urlString.split('?');
                        let params = new URLSearchParams(search || '');
                        let changed = false;
                        
                        ['utm_source', 'source'].forEach(key => {
                            let val = params.get(key);
                            if (val) {
                                if (!val.includes(newValue)) {
                                    params.set(key, val + '+' + newValue);
                                    changed = true;
                                }
                            } else {
                                params.set(key, newValue);
                                changed = true;
                            }
                        });
                        return changed ? path + '?' + params.toString() : urlString;
                    };

                    let [mainPart, hashPart] = href.split('#');
                    let newMainPart = updateUrlWithParams(mainPart);
                    let newHashPart = hashPart;
                    
                    if (hashPart && hashPart.includes('?')) {
                        newHashPart = updateUrlWithParams(hashPart);
                    }

                    if (newMainPart !== mainPart || (hashPart !== undefined && newHashPart !== hashPart)) {
                        el.setAttribute('href', newMainPart + (hashPart !== undefined ? '#' + newHashPart : ''));
                    }
                } catch (e) {}
            });
        };
        setInterval(updateButtons, 500);
    })();
