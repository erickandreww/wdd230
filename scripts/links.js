const baseURL = 'https://erickandreww.github.io/wdd230/';

const linksURL = "https://erickandreww.github.io/wdd230/data/links.json";

const weekDisplay = document.querySelector('#week-act');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks)
}
  
const displayLinks = (weeks) => {
    weeks.forEach((line) => {
        let wk = document.createElement('ul');
        let li = document.createElement('li');
        li.textContent = `${line.week}: `;
        let counter = 1;
        line.links.forEach((link) => {
            if (counter >= line.links.length) {
                li.innerHTML += `<a href="${link.url}">${link.title}</a>`;
            }
            else {
                li.innerHTML += `<a href="${link.url}">${link.title}</a> | `;
            }
            counter += 1;
        })
        wk.appendChild(li);
        weekDisplay.appendChild(wk);
    } )
}


getLinks();