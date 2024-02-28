// bitly.js

import accessTokens from './accessTokens.js';
export function shortenWithBitly(url) {
    const apiKey = accessTokens.bitly;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ long_url: url })
    };
    return fetch('https://api-ssl.bitly.com/v4/shorten', requestOptions)
        .then(response => response.json())
        .then(data => data.link);
}
