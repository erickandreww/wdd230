const sURL = 'https://erickandreww.github.io/wdd230/chamber/members.json';

const cards = document.querySelector('#spotlight-cards');

let counter = 0;

async function getMemberData() {
    const response = await fetch(sURL); 
    const data = await response.json();
    displayMember(data.members);
}

const displayMember = (members) => {
    members.forEach((member) => {
        if (counter < 2) {
            let card = `<section class='member-card'>
                    <h3>${member.name}</h3>
                    <img src='${member.icon}' alt='${member.name} icon' loading='lazy' width='250' heigth='250'>
                    <div class="member-info">
                        <a href="${member.website}">${member.website}</a>
                        <p>Address:<br> ${member.address}</p><p>Phone: ${member.phone}</p>
                        <p>Email: ${member.email}</p>
                        <p>Membership: ${member.membership}</p>
                    </div>
                </section>`;
            cards.innerHTML += card;
        }
        counter += 1;
    })
}

getMemberData();
