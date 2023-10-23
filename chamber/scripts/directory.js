const url = 'https://github.com/erickandreww/wdd230/blob/main/chamber/members.json';

const cards = document.querySelector('#members-cards');

async function getMemberData() {
    const response = await fetch(url); 
    const data = await response.json();
    displayMember(data.member);
}

const displayMember = (members) => {
    members.forEach((member) => {
        let card = `<section class='member-card'>
        <h3>${member.name}</h3>
        <img src='${member.icon}' alt='member icon' loading='lazy' width='200' heigth='200'>
        <div id="member-info">
            <a href="#">${member.website}</a>
            <p>${member.address}</p><p>${member.phone}</p><p>${member.email}</p>
            <p>${member.membership}</p>
        </div>
    </section>`;
    })
}