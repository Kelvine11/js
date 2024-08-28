import { Eleve } from "./eleve.js";
import { Matiere } from "./matiere.js";
import { Note } from "./note.js";

let eleves = [];
const eleve1 = new Eleve("toto", "toto");
const eleve2 = new Eleve("tata", "tata");
eleves.push(eleve1);
eleves.push(eleve2);

let matieres = [];
const matiere1 = new Matiere("Histoire");
const matiere2 = new Matiere("Maths");
matieres.push(matiere1);
matieres.push(matiere2);

let notes = [];
const note1 = new Note(eleves[0], 12, matieres[0]);
const note2 = new Note(eleves[1], 13, matieres[1]);
const note3 = new Note(eleves[0], 7, matieres[1]);
notes.push(note1);
notes.push(note2);
notes.push(note3);


const selectEleve = document.getElementById("grade-student");
const selectEleveChoix = document.getElementById("student-choice");

const eleveSelect = (selecteur) => {
    selecteur.innerHTML = '<option value="0">Sélectionnez un élève</option>'
    eleves.forEach((eleve, index) => {
        let newOption = document.createElement('option');
        newOption.value = index + 1;
        newOption.textContent = eleve.prenom + " " + eleve.nom;
        selecteur.appendChild(newOption);
    })
}

const selectMatiere = document.getElementById("grade-field");
const selectMatiereChoix = document.getElementById("lessonfield-choice");
const matiereSelect = (selecteur) => {
    selecteur.innerHTML = '<option value="0">Sélectionnez une matière</option>'
    matieres.forEach((matiere, index) => {
        let newOption = document.createElement('option');
        newOption.value = index + 1;
        newOption.textContent = matiere.nom;
        selecteur.appendChild(newOption);
    })
}
eleveSelect(selectEleve);
eleveSelect(selectEleveChoix);
matiereSelect(selectMatiere);
matiereSelect(selectMatiereChoix);

const formEleve = document.getElementById("add-student-form");
const buttonStudent = document.getElementById("add-student-visibility");
buttonStudent.addEventListener("click", () => {
    if (formEleve.classList.contains("hidden")) {
        formEleve.classList.remove("hidden");
    } else {
        formEleve.classList.add("hidden");
    }
})
const buttonAddStudent = document.getElementById("btnajoutstudent");
buttonAddStudent.addEventListener("click", (e) => {
    e.preventDefault();
    const eleve = new Eleve();
    eleve.nom = document.getElementById("student-lastname").value;
    eleve.prenom = document.getElementById("student-firstname").value;
    eleves.push(eleve);
    eleveSelect(selectEleve);
    eleveSelect(selectEleveChoix);
})

const buttonMatiere = document.getElementById("add-lessonfield-visibility");
const formMatiere = document.getElementById("add-lessonfield-form");
buttonMatiere.addEventListener("click", () => {
    if (formMatiere.classList.contains("hidden")) {
        formMatiere.classList.remove("hidden");
    } else {
        formMatiere.classList.add("hidden");
    }
})
const buttonAddMatiere = document.getElementById("btnajoutmatiere");
buttonAddMatiere.addEventListener("click", (e) => {
    e.preventDefault();
    const matiere = new Matiere();
    matiere.nom = document.getElementById("lesson-field").value;
    matieres.push(matiere);
    matiereSelect(selectMatiere);
    matiereSelect(selectMatiereChoix);
})

const buttonNote = document.getElementById("add-grade-visibility");
const formNote = document.getElementById("add-grade-form");
buttonNote.addEventListener("click", () => {
    if (formNote.classList.contains("hidden")) {
        formNote.classList.remove("hidden");
    } else {
        formNote.classList.add("hidden");
    }
});
const buttonAddNote = document.getElementById("btnajoutnote");
buttonAddNote.addEventListener("click", (e) => {
    e.preventDefault();
    const note = new Note();
    note.eleve = eleves[(document.getElementById("grade-student").value) - 1];
    note.note = document.getElementById("grade").value;
    note.matiere = matieres[(document.getElementById("grade-field").value) - 1]
    notes.push(note);
})



selectEleveChoix.addEventListener("change", (e) => {
    e.preventDefault();
    affichage();

})

selectMatiereChoix.addEventListener("change", (e) => {
    e.preventDefault();
    affichage();

})

function affichage() {

    const eleveChoix = document.getElementById("student-choice").value;
    const matiereChoix = document.getElementById("lessonfield-choice").value;

    const table = document.querySelector("table");
    const oldTbody = document.querySelector("tbody")
    if (oldTbody !== null) {
        oldTbody.remove();
    }
    const tbody = document.createElement("tbody");
    const moyenne = document.getElementById("average-grade");

    let results = [];
    let moyenneNom;
    if (eleveChoix != 0 && matiereChoix != 0) {
        notes.forEach(element => {
            if (element.eleve == eleves[(eleveChoix - 1)] && element.matiere == matieres[matiereChoix - 1]) {
                results.push(element);
                moyenneNom = "La moyenne de " + element.eleve.nom + " " + element.eleve.prenom + " en " + element.matiere.nom;

            }
        });
    } else if (eleveChoix != 0 && matiereChoix == 0) {
        notes.forEach(element => {
            if (element.eleve == eleves[(eleveChoix - 1)]) {
                results.push(element);
                moyenneNom = "La moyenne générale de " + element.eleve.nom + " " + element.eleve.prenom;
            }
        });
    } else if (matiereChoix != 0 && eleveChoix == 0) {
        notes.forEach(element => {
            if (element.matiere != matieres[(matiereChoix - 1)]) {
                results.push(element);
                moyenneNom = "La moyenne de la classe en " + element.matiere.nom
            }
        })
    } else {
        results = notes;
        moyenneNom = "La moyenne générale de la classe";
    }

    let calMoyenne = 0;

    results.forEach(note => {

        calMoyenne += note.note;

        tbody.innerHTML += `<tr>
    <td>${note.eleve.nom}</td>
    <td>${note.eleve.prenom}</td>
    <td>${note.matiere.nom}</td>
    <td>${note.note}</td>

</tr>`

    });
    const oldMoyenne = document.querySelector("p")
    if (oldMoyenne !== null) {
        oldMoyenne.remove();
    }
    const texte = document.createElement("p");
    texte.textContent = " " + moyenneNom + " est de " + (calMoyenne / results.length);
    moyenne.appendChild(texte);
    table.appendChild(tbody);
}