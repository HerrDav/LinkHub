
import accessTokens from './accessTokens.js';
export function shortenWithShrtlnkDev(url) {
    const apiKey = accessTokens.shrtlnk;
    const requestOptions = {
        method: 'POST',
        headers: {
            'api-key': apiKey,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
    };
    return fetch('https://shrtlnk.dev/api/v2/link', requestOptions)
        .then(response => response.json())
        .then(data => data.shortenedUrl);
}
