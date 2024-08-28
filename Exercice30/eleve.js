export class Eleve{
    static count = 0;
    constructor(nom, prenom){
        Eleve.count++;
        this.id = Eleve.count;
        this.nom = nom;
        this.prenom = prenom;
    }
}