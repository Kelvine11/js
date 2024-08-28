import { Contact } from "./classes/contact.js";

let contacts = [];

const contact1 = new Contact("Mr", "Dupont", "Jean", "08-10-1973", "0123456789", "jdupont@gmail.com");
const contact2 = new Contact("Mme", "Tata", "Tata", "08-10-1973", "0123456789", "jdupont@gmail.com");
contacts.push(contact1);
contacts.push(contact2);


function tab() {

    const table = document.querySelector("table");
    const oldTbody = document.querySelector("tbody")
    if (oldTbody !== null) {
        oldTbody.remove();
    }
    const tbody = document.createElement("tbody");

    for (let i = 0; i < contacts.length; i++) {
        const tr = document.createElement("tr");
        for (const [key, value] of Object.entries(contacts[i])) {
            const td = document.createElement("td");
            let texte = document.createTextNode(`${value}`);
            td.appendChild(texte)
            tr.appendChild(td);
        }
        tbody.appendChild(tr)
        table.appendChild(tbody)
    }
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const contact = new Contact();
    contact.titre = e.target[0].value;
    contact.nom = e.target[1].value;
    contact.prenom = e.target[2].value;
    contact.dateDeNaissance = e.target[3].value;
    contact.telephone = e.target[4].value;
    contact.email = e.target[5].value;
    contacts.push(contact);
    console.log(contacts)
    tab();
})
tab();
