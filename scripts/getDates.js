const h = new Date();
document.getElementById('currentYear').textContent = h.getFullYear();

let currentDate = new Date().toLocaleDateString();
let hours = new Date().toJSON().slice(11, 19);
document.getElementById('lastModified').textContent = `${currentDate} ${hours}`;
