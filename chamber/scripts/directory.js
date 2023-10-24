const url = 'https://erickandreww.github.io/wdd230/chamber/members.json';

const cards = document.querySelector('#members-cards');

async function getMemberData() {
    const response = await fetch(url); 
    const data = await response.json();
    displayMember(data.members);
}

const displayMember = (members) => {
    members.forEach((member) => {
        let card = `<section class='member-card'>
                <h3>${member.name}</h3>
                <img src='images/hero.webp' alt='${member.name} icon' loading='lazy' width='250' heigth='250'>
                <div class="member-info">
                    <a href="${member.website}">${member.website}</a>
                    <p>Address:<br> ${member.address}</p><p>Phone: ${member.phone}</p>
                    <p>Email: ${member.email}</p>
                    <p>Membership: ${member.membership}</p>
                </div>
            </section>`;
        cards.innerHTML += card;
    })
}

getMemberData();


// Icon info

//     ABC Electronics Ltda. - An icon with a circuit board pattern, symbolizing electronics and technology.

// XYZ Solutions S.A. - An icon with a puzzle piece fitting into a larger puzzle, representing solutions and innovation.

// Brazilian Textiles Inc. - An icon with a stylized fabric or textile pattern, showcasing the textile industry.

// Global Imports Ltda. - An icon with a globe or world map, indicating global trade and imports.

// Eco Foods S.A. - An icon with a stylized leaf or plant, signifying environmentally friendly and organic food products.

// Best Pharmaceuticals Inc. - An icon with a pill or medical cross, symbolizing pharmaceuticals and healthcare.

// São Paulo Tours & Travels - An icon with a stylized airplane or landmark representing the travel and tourism industry.