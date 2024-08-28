let nbNote = prompt("Nombre de note ?");
let notes = new Array(nbNote);
for (let i = 0; i < nbNote; i++) {
    notes[i] = prompt("Saisir la note " + (i + 1));
}


function moyenne(tab) {
    let somme = 0;
    for (let i = 0; i < tab.length; i++) {
        somme += tab[i];
    }
    return somme / tab.length;
}

const div = document.getElementById("notes");

const nbNotes = document.createElement("h1");
nbNotes.textContent = "La série contient " + nbNote + " notes :";
div.appendChild(nbNotes);

for (let j = 0; j < nbNote; j++) {
    const note = document.createElement("li");
    note.textContent = "En note " + (j + 1) + " , vous avez saisi " + notes[j] + "/20.";
    div.appendChild(note);
}

const moyennes = document.getElementById("moyennes");

const ensemble = document.createElement("p");
ensemble.textContent = "Sur l'ensemble des " + nbNote + " notes :";
moyennes.appendChild(ensemble);

const grande = document.createElement("p");
grande.textContent = "La meilleure note est de " + Math.max(...notes) + "/20";
moyennes.appendChild(grande);


const petite = document.createElement("p");
petite.textContent = "La moins bonne note est de " + Math.min(...notes) + "/20";
moyennes.appendChild(petite);

const moy = document.createElement("p");
moy.textContent = "La moyenne des notes est de " + moyenne(notes) + "/20";
moyennes.appendChild(moy);

// Math.max(...notes);
// let petite = Math.min(... notes);
// let moyenne = moyenne(notes);