class Voiture {

    constructor(marque, modele, vitesse){
        this.marque = marque;
        this.modele = modele;
        this.vitesse = vitesse;
    }
    
    accelerer(){
        this.vitesse += 10;
    }

    tourner(){
        this.vitesse -= 5;
    }

}

const voiture1 = new Voiture("BMW", "serie 1", 80);
const voiture2 = new Voiture("Mercedes", "GLB", 100);

voiture1.accelerer();
voiture1.accelerer();
voiture1.accelerer();
console.log("Vitesse de la voiture 1 : " + voiture1.vitesse + "km/h");

voiture2.accelerer();
voiture2.accelerer();
voiture2.tourner();
voiture2.tourner();
console.log("Vitesse de la voiture 2 : " + voiture2.vitesse + "km/h");