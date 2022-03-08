const inputUrl = document.querySelector('.shorten-link').value || undefined;
const btn = document.querySelector('.shorten-btn');

btn.addEventListener('click', () => {
    const req = fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`, {
        method: 'POST'
    })

    .then(response => response.json())
    .then(json => mostrarUrl(json));

    return req;
})

function mostrarUrl(json) {
    console.log(json.result.short_link);
}