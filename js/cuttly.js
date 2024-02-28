// https://cutt.ly/api-documentation/regular-api

export function shortenWithCuttly(url) {
    return fetch(`https://cutt.ly/api/api.php?key=YOUR_CUTTLY_API_KEY&short=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => data.url.shortLink);
}