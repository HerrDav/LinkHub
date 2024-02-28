
//https://developers.rebrandly.com/reference/createlink

import accessTokens from './accessTokens.js';
export function shortRebrandly(url) {
    const apiKey = accessTokens.rebrandly;
    const requestOptions = {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json',apikey: apiKey},
        body: JSON.stringify({ destination: url })
    };
    
    return fetch(`https://api.rebrandly.com/v1/links`, requestOptions)
        .then(response => response.json())
        .then(data => data.shortUrl);

    
}