//https://urlbae.com/developers
import accessTokens from './accessTokens.js';
export function shortUrlbae(url) {
    const apiKey = accessTokens.urlbae;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    };
    return fetch('https://urlbae.com/api/url/add', requestOptions)
        .then(response => response.json())
        .then(data => data.shorturl);
}
