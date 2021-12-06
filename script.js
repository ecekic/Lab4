var URL = "https://dog.ceo/api/breeds/image/random";

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function getDogData() {
    const data = await fetchData(URL);
    const dogData = {
        pic: data.message
    };
    return dogData;
}

function updateDataOnDOM(pic) {
    document.getElementById('pic').textContent = 'Getting picture...';
    document.getElementById('image').src = pic;
}
function init() {
    updateDataOnDOM('Getting picture...');
}

setInterval(() => {
    const promise = getDogData();
    promise.then(dogData => {
        const image = { pic: dogData.message };
updateDataOnDOM(dogData.pic);
    });
}, 2000);

window.onload = () => init();