const modeButton = document.querySelector('#mode');
const body = document.querySelector('body');
const main = document.querySelector('main');
const nav = document.querySelector('nav');

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('☑️')) {
        body.style.background = '#0D1B2A';
        main.style.color = '#E0E1DD';
        modeButton.textContent = '❎';
        nav.style.background = '#415A77';
    }
    else {
        body.style.background = '#9AE0F1';
        main.style.color = '#0D1B2A';
        modeButton.textContent = '☑️';
        nav.style.background = '#0D1B2A';
    }
});