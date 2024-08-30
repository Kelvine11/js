let nbContact: number = 0;
const contactForm = document.getElementById('contactForm') as HTMLFormElement;
const nomInput = document.getElementById('nom') as HTMLInputElement;
const prenomInput = document.getElementById('prenom') as HTMLInputElement;
const dateInput = document.getElementById('date') as HTMLInputElement;
const telephoneInput = document.getElementById('telephone') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const photoInput = document.getElementById('photo') as HTMLInputElement;
const liste = document.getElementById('liste') as HTMLInputElement;
const contactAffichage = document.getElementById('contactAffichage') as HTMLFormElement;


class Personne {

    private id: number;
    private nom: string;
    private prenom: string;
    private dateDeNaissance: string;
    private telephone: string;
    private email: string;
    private photo: string

    constructor(nom: string, prenom: string, dateDeNaissance: string, telephone: string, email: string, photo: string) {
        this.id = nbContact++;
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
        this.telephone = telephone;
        this.email = email;
        this.photo = photo;
    }

    getId(): number {
        return this.id;
    }

    getNom(): string {
        return this.nom;
    }

    getPrenom(): string {
        return this.prenom;
    }

    getDate(): string {
        return this.dateDeNaissance;
    }

    getTelephone(): string {
        return this.telephone;
    }

    getEmail(): string {
        return this.email;
    }

    getPhoto(): string {
        return this.photo;
    }

    affichagePersonne(): void {

    }
}

class Annuaire {

    personnes: Personne[] = [];

    addPersonne(personne: Personne): void {
        this.personnes.push(personne);
    }


    affichageListe(): void {
        let cpt: number = 0;
        this.personnes.forEach(personne => {
            const affichage = document.createElement("button") as HTMLInputElement;
            affichage.id = personne.getId() + "";
            affichage.textContent = personne.getPrenom() + " " + personne.getNom();
            liste.appendChild(affichage);
            cpt++
        });
    }
}

let annuaire1 = new Annuaire()
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
    } else {
        alert('Champs manquants');
    }
    annuaire1.affichageListe();
    console.log(annuaire1.personnes);
})


const button0 = document.getElementById(annuaire1.personnes[0].getId() + "") as HTMLInputElement;;

button0.addEventListener("click", (e) => {

    
    const contactNom = document.getElementById("contactNom") as HTMLInputElement;
    const contactPrenom = document.getElementById("contactPrenom") as HTMLInputElement;
    const contactDate = document.getElementById("contactDate") as HTMLInputElement;
    const contactTelephone = document.getElementById("contactTelephone") as HTMLInputElement;
    const contactEmail = document.getElementById("contactEmail") as HTMLInputElement;
    const contactPhoto = document.getElementById("contactPhoto") as HTMLInputElement;

    contactNom.value = annuaire1.personnes[0].getNom();
    contactPrenom.value = annuaire1.personnes[0].getPrenom();
    contactDate.value = annuaire1.personnes[0].getDate();
    contactTelephone.value = annuaire1.personnes[0].getTelephone();
    contactEmail.value = annuaire1.personnes[0].getEmail();
    contactPhoto.value = annuaire1.personnes[0].getPhoto();


})

