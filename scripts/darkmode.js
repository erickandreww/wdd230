let modeButton = document.querySelector('#mode');
let body = document.querySelector('main');
let main = document.querySelector('main');
let nav = document.querySelector('nav');
let header = document.querySelector('header');
let foot = document.querySelector('footer');
let card1 = document.querySelector('#card-1');
let card2 = document.querySelector('#card-2');
let h3Card1 = card1.querySelector('h3');
let h3Card2 = card2.querySelector('h3');
let card = document.querySelectorAll('.card');

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('☑️')) {
        body.style.background = '#0D1B2A';
        main.style.color = '#E0E1DD';
        modeButton.textContent = '❎';
        nav.style.background = '#1B263B';
        header.style.background = '#0D1B2A';
        foot.style.background = '#1B263B';
        foot.style.color = '#E0E1DD';
        card.forEach((item) => {
            item.style.background = '#84BFD3';
        });
        h3Card1.style.background = '#ACB7C3';
        h3Card1.style.color = '#1B263B';
        h3Card2.style.background = '#ACB7C3';
        h3Card2.style.color = '#1B263B';
    }
    else {
        body.style.background = '#9AE0F1';
        main.style.color = '#0D1B2A';
        modeButton.textContent = '☑️';
        nav.style.background = '#0D1B2A';
        header.style.background = '#1B263B';
        foot.style.background = '#E0E1DD';
        foot.style.color = '#0D1B2A';
        h3Card1.style.background = '#1B263B';
        h3Card1.style.color = '#E0E1DD'
        h3Card2.style.background = '#1B263B';
        h3Card2.style.color = '#E0E1DD';
        card.forEach((item) => {
            item.style.background = '#ACB7C3';
        });
    }
});