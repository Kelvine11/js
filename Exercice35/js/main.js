let nbrNote = 0;
let nbrEtudiant = 0;
class Note {
    constructor(matiere, note) {
        this.id = nbrNote++;
        this.matiere = matiere;
        this.note = note;
    }
    getMatiere() {
        return this.matiere;
    }
    getNote() {
        return this.note;
    }
}
class Etudiant {
    constructor(nom, prenom) {
        this.notes = [];
        this.id = nbrEtudiant++;
        this.nom = nom;
        this.prenom = prenom;
    }
    getPrenom() {
        return this.prenom;
    }
    getNom() {
        return this.nom;
    }
    getNotes() {
        return this.notes;
    }
    addNote(note) {
        this.notes.push(note);
    }
}
class Classe {
    constructor() {
        this.etudiants = [];
    }
    addEtudiant(etudiant) {
        this.etudiants.push(etudiant);
    }
    affichage() {
        this.etudiants.forEach(etudiant => {
            console.log("######### Début étudiant #########");
            console.log("Etudiant : " + etudiant.getNom() + " " + etudiant.getPrenom());
            let moyenne = 0;
            let nbr = 0;
            etudiant.getNotes().forEach(note => {
                console.log(note.getMatiere() + " : " + note.getNote() + "/20");
                moyenne += note.getNote();
                nbr++;
            });
            console.log("La moyenne est de : " + moyenne / nbr);
            console.log("######### Fin étudiant #########");
        });
    }
}
let classe1 = new Classe();
let etudiant1 = new Etudiant("José", "Garcia");
let etudiant2 = new Etudiant("Antoine", "De Caunes");
let note1 = new Note("français", 16);
let note2 = new Note("anglais", 7);
let note3 = new Note("humour", 14);
let note4 = new Note("anglais", 6);
let note5 = new Note("français", 15);
let note6 = new Note("informatique", 4);
etudiant1.addNote(note1);
etudiant1.addNote(note2);
etudiant1.addNote(note3);
etudiant2.addNote(note4);
etudiant2.addNote(note5);
etudiant2.addNote(note6);
classe1.addEtudiant(etudiant1);
classe1.addEtudiant(etudiant2);
classe1.affichage();
// let etudiants = [
//     {
//         prenom: "José",
//         nom: "Garcia",
//         matieres: {
//             francais: 16,
//             anglais: 7,
//             humour: 14
//         }
//     },
//     {
//         prenom: "Antoine",
//         nom: "De Caunes",
//         matieres: {
//             francais: 15,
//             anglais: 6,
//             humour: 16,
//             informatique: 4,
//             sport: 10
//         }
//     },
//     {
//         prenom: "Toto",
//         nom: "Tata",
//         matieres: {
//             francais: 12,
//             anglais: 5,
//         }
//     },
//     {
//         prenom: "Lulu",
//         nom: "Lili",
//         matieres: {
//             francais: 18,
//             anglais: 14,
//         }
//     }
// ];
