import { Ticket } from "./ticket.js";

const succes = document.getElementById("successBox");
succes.classList.add("hidden");

const danger = document.getElementById("alertBox");
danger.classList.add("hidden");

const warning = document.getElementById("messageBox");
warning.classList.add("hidden");

let cpt = 1;
//let tickets = [];

const ticket = document.getElementById("enterBtn");
ticket.addEventListener("click", (e) => {
    const immatriculation = document.getElementById("licencePlate").value;
    const newTicket = new Ticket(immatriculation, new Date(), null);
    //tickets.push(newTicket);
    localStorage.setItem(cpt, JSON.stringify(newTicket));
    cpt++;
    succes.classList.remove("hidden");
    const texte = document.createElement("p");
    texte.textContent = "Ticket pour le véhicule " + immatriculation;
    succes.appendChild(texte);
    setTimeout(() => {
        texte.remove();
        succes.classList.add("hidden");
    }, 5000);
})


const payement = document.getElementById("paymentBtn");
payement.addEventListener("click", (e) => {
    const immatriculation = document.getElementById("licencePlate").value;
    let exist = false;

    for (let key in localStorage) {
        let ligne = JSON.parse(localStorage.getItem(key));
        if (ligne.immatriculation == immatriculation && ligne.dateSortie == null) {
            // tickets.forEach(element => {
            //     if (element.immatriculation == immatriculation) {
            exist = true;
            // let temps = new Date() - element.date;
            ligne.dateSortie =  new Date();
            let temps = new Date() - new Date(JSON.parse(localStorage.getItem(key)).dateEntree); 
            let prix = 0;
            switch (true) {
                case temps <= 900000:
                    prix = 0.8;
                    break;
                case temps <= (900000 * 2):
                    prix = 1.30;
                    break;
                case temps <= (900000 * 3):
                    prix = 1.70;
                    break;
                case temps > (900000 * 3):
                    prix = 6;
                    break;

            }

            warning.classList.remove("hidden");
            const texte = document.createElement("p");
            texte.textContent = "Le prix pour " + immatriculation + " est : " + prix + "€";
            warning.appendChild(texte);
            //delete tickets[tickets.indexOf(element)];
            localStorage.setItem(key, JSON.stringify(ligne));
            setTimeout(() => {
                texte.remove();
                warning.classList.add("hidden");
            }, 5000);

        }
    };

    if (!exist) {
        danger.classList.remove("hidden");
        const texte = document.createElement("p");
        texte.textContent = "Le véhicule " + immatriculation + " n'existe pas";
        danger.appendChild(texte);
        setTimeout(() => {
            texte.remove();
            danger.classList.add("hidden");
        }, 5000);
    }
})


const buttonLogs = document.getElementById("logs");

buttonLogs.addEventListener("click", () =>{
    const recherche = document.getElementById("licencePlate").value;
    for(let key in localStorage){
        if (recherche == "" || JSON.parse(localStorage.getItem(key)).immatriculation == recherche){
        console.log(JSON.parse(localStorage.getItem(key)));
        }
    }
})
