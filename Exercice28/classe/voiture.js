import { Vehicule } from "./vehicule.js";

export class Voiture extends Vehicule{
    
    constructor(marque, modele, kilométrage, annee, clim){
        super(marque, modele, kilométrage, annee);
        this.clim = clim;
    }

    display(){
        return "Auto : " + super.display() + " Clim : " + this.clim;
    }

}