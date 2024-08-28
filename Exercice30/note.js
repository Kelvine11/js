export class Note{
    static count = 0;
    constructor(eleve, note, matiere){
        Note.count++;
        this.id = Note.count;
        this.eleve = eleve;
        this.note = note;
        this.matiere = matiere;
    }
}