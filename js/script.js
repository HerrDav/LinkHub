import { shortCleanuri } from  './cleanuri.js';
import { shortOwo } from './owo.js';
import { shortRebrandly } from './rebrandly.js';
import { shortUrlbae } from './urlbae.js';

document.getElementById("shortenForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém a URL de origem
    const originalUrl = document.getElementById("originalUrl").value;

    // Obtém os encurtadores selecionados
    const shorteners = Array.from(document.getElementById("shorteners").selectedOptions).map(option => option.value);

    // Limpa a lista de URLs curtas
    const shortUrlsList = document.getElementById("shortUrls");
    shortUrlsList.innerHTML = "";

    // Itera sobre os encurtadores selecionados
    shorteners.forEach(shortener => {
        // Chama a função apropriada com base no encurtador selecionado
        let promise;

        if (shortener === 'cleanuri') {         promise = shortCleanuri(originalUrl);
        } else if (shortener === 'owo') {       promise = shortOwo(originalUrl);
        } else if (shortener === 'rebrandly') { promise = shortRebrandly(originalUrl);
        } else if (shortener === 'urlbae') {    promise = shortUrlbae(originalUrl);
        }
        
        // Adiciona a URL curta à lista
        promise.then(shortUrl => {
            const listItem = document.createElement("li");
            //listItem.textContent = `${shortener.toUpperCase()}: ${shortUrl}`;
            listItem.innerHTML = `<strong>${shortener.toUpperCase()}:</strong> ${shortUrl}`;
            shortUrlsList.appendChild(listItem);
        }).catch(error => console.error(`Erro ao encurtar URL com ${shortener}:`, error));
    });
});
