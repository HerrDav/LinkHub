//https://cleanuri.com/docs

export function shortCleanuri(url) {

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ url: url })
    };
    
    return fetch(`https://cleanuri.com/api/v1/shorten`, requestOptions)
        .then(response => response.json())
        .then(data => data.result_url);

    
}