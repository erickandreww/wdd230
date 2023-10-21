const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url); 
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = `<section class='card' >
                <h2>${prophet.name} ${prophet.lastname}</h2>
                <p class='birth'>Date of Birth:${prophet.birthdate}</p> <p class='place'>Place of Birth: ${prophet.birthplace}</p></div>
                <img src='${prophet.imageurl}' alt='Prophet picture' loading='lazy' width='340' heigth='440'>
            </section>`;
        cards.innerHTML += card;
    });
}

getProphetData();