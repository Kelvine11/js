let nbContact = 0;
const contactForm = document.getElementById('contactForm');
const nomInput = document.getElementById('nom');
const prenomInput = document.getElementById('prenom');
const dateInput = document.getElementById('date');
const telephoneInput = document.getElementById('telephone');
const emailInput = document.getElementById('email');
const photoInput = document.getElementById('photo');
const liste = document.getElementById('liste');
const contactAffichage = document.getElementById('contactAffichage');
class Personne {
    constructor(nom, prenom, dateDeNaissance, telephone, email, photo) {
        this.id = nbContact++;
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
        this.telephone = telephone;
        this.email = email;
        this.photo = photo;
    }
    getId() {
        return this.id;
    }
    getNom() {
        return this.nom;
    }
    getPrenom() {
        return this.prenom;
    }
    getDate() {
        return this.dateDeNaissance;
    }
    getTelephone() {
        return this.telephone;
    }
    getEmail() {
        return this.email;
    }
    getPhoto() {
        return this.photo;
    }
    affichagePersonne() {
    }
}
class Annuaire {
    constructor() {
        this.personnes = [];
    }
    addPersonne(personne) {
        this.personnes.push(personne);
    }
    affichageListe() {
        let cpt = 0;
        this.personnes.forEach(personne => {
            const affichage = document.createElement("button");
            affichage.id = personne.getId() + "";
            affichage.textContent = personne.getPrenom() + " " + personne.getNom();
            liste.appendChild(affichage);
            cpt++;
        });
    }
}
let annuaire1 = new Annuaire();
let personne = new Personne("toto", "toto", "25-09-2015", "0123456789", "toto@toto", "test");
annuaire1.addPersonne(personne);
annuaire1.affichageListe();
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nomValue = nomInput.value.trim();
    const prenomValue = prenomInput.value.trim();
    const dateValue = dateInput.value.trim();
    const telephoneValue = telephoneInput.value.trim();
    const emailValue = emailInput.value.trim();
    const photoValue = photoInput.value.trim();
    if (nomValue && prenomValue && dateValue && telephoneValue && emailValue && photoValue) {
        let personne = new Personne(nomValue, prenomValue, dateValue, telephoneValue, emailValue, photoValue);
        annuaire1.addPersonne(personne);
        contactForm.reset();
    }
    else {
        alert('Champs manquants');
    }
    annuaire1.affichageListe();
    console.log(annuaire1.personnes);
});
const button0 = document.getElementById(annuaire1.personnes[0].getId() + "");
;
button0.addEventListener("click", (e) => {
    const contactNom = document.getElementById("contactNom");
    const contactPrenom = document.getElementById("contactPrenom");
    const contactDate = document.getElementById("contactDate");
    const contactTelephone = document.getElementById("contactTelephone");
    const contactEmail = document.getElementById("contactEmail");
    const contactPhoto = document.getElementById("contactPhoto");
    contactNom.value = annuaire1.personnes[0].getNom();
    contactPrenom.value = annuaire1.personnes[0].getPrenom();
    contactDate.value = annuaire1.personnes[0].getDate();
    contactTelephone.value = annuaire1.personnes[0].getTelephone();
    contactEmail.value = annuaire1.personnes[0].getEmail();
    contactPhoto.value = annuaire1.personnes[0].getPhoto();
});
