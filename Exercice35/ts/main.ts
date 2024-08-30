let nbrNote: number = 0;
let nbrEtudiant: number = 0;

class Note {
    private id : number;
    private matiere: string;
    private note: number;

    constructor(matiere: string, note: number){
        this.id = nbrNote++;
        this.matiere = matiere;
        this.note = note;
    }

    getMatiere(): string{
        return this.matiere;
    }

    getNote(): number{
        return this.note;
    }

}

class Etudiant {

    private id: number;
    private prenom: string;
    private nom: string;
    private notes: Note[] = [];

    constructor(nom: string, prenom: string){
        this.id = nbrEtudiant++;
        this.nom = nom;
        this.prenom = prenom;
    }

    getPrenom(): string{
        return this.prenom;
    }

    getNom(): string{
        return this.nom;
    }

    getNotes(): Note[]{
        return this.notes;
    }


    addNote(note: Note): void {
        this.notes.push(note);
    }

}

class Classe {
    private etudiants: Etudiant[] = [];

    addEtudiant(etudiant: Etudiant): void {
        this.etudiants.push(etudiant);
    }

    affichage(): void{

        this.etudiants.forEach(etudiant => {
            console.log("######### Début étudiant #########")
            console.log("Etudiant : " + etudiant.getNom() + " " + etudiant.getPrenom());
            let moyenne: number = 0;
            let nbr: number = 0;
            etudiant.getNotes().forEach(note => {
                console.log(note.getMatiere() + " : " + note.getNote() + "/20")
                moyenne += note.getNote();
                nbr++;
            
            });
            console.log("La moyenne est de : " + moyenne / nbr);
            console.log("######### Fin étudiant #########")        
        });
    }

}

let classe1 = new Classe();

let etudiant1 = new Etudiant("José","Garcia");
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
classe1.addEtudiant(etudiant2)

classe1.affichage();
