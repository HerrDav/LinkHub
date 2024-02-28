//https://owo.vc/api.html

export function shortOwo(url) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'HerrDav'
        },
        body: JSON.stringify({ link: url, generator: 'owo', metadata: 'OWOIFY'})
    };
    
    return fetch(`https://owo.vc/api/v2/link`, requestOptions)
        .then(response => response.json())
        .then(data => data.id);

    
}