import { Voiture } from "./classe/voiture.js";
import { Moto } from "./classe/moto.js";

const voiture = new Voiture("Merceddes", "GLB", 289, 2004, false);
const moto = new Moto("Toto", "Tata", 364, 2015);


const vehicules = document.getElementById("vehicules");

const affichageVoiture = document.createElement("p");
affichageVoiture.textContent = voiture.display();
vehicules.appendChild(affichageVoiture);

const affichageMoto= document.createElement("p");
affichageMoto.textContent = moto.display();
vehicules.appendChild(affichageMoto);