const h = new Date();
document.getElementById('currentYear').textContent = h.getFullYear();

let lastModif = new Date(document.lastModified);
let currentDate = lastModif.toLocaleDateString();
let hours = lastModif.getHours();
let min = lastModif.getMinutes();
let sec = lastModif.getSeconds();

if (min < 10) {
    min = "0"+min;
}
if (sec < 10) {
    sec = "0"+sec;
}

document.getElementById('lastModified').textContent = `: ${currentDate} ${hours}:${min}:${sec} `;
