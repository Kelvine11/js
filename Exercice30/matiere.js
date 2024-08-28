export class Matiere{
    static count = 0;
    constructor(nom){
        Matiere.count++;
        this.id = Matiere.count;
        this.nom = nom;
    }
}