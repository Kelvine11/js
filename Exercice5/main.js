// let temp = prompt("Saisir la température");
// console.log(temp<0?"SOLIDE":temp>100?"GAZEUX":"LIQUIDE");


// let age = prompt("Saisir age");
// let salaire = prompt("Saisir salaire");
// let exp = prompt("Saisir expérience");
// let message;
// if(age<30){
//     message = "Problème d'age";
// }
// if(salaire>40000){
//     message += " Problème de salaire";
// }
// if(exp<5){
//     message += "Problème d'expérience";
// }
// console.log(message);


// console.log("For : Je commence à compter :");
// for(let i=1; i<11; i++){
// console.log(i);
// }
// console.log("Fin du compte");
// console.log("While : Je commence à compter :");
// let i = 1;
// while(i < 11){
//     console.log(i);
//     i++
// }
// console.log("Fin du compte");



// console.log("Table des matières :");
// for(let i = 1; i<4; i++){
//     console.log("Chapitre " + i + ":");
//     for(let j = 1; j<4; j++){
//         console.log("Partie " + i + "." + j);
//     }
// }


// let nbr = parseInt(prompt("Saisir nommbre"));
// for(let i = 1; i<nbr+1; i++){
//     console.log("Table des " + i + " :");
//     for(let j =1; j<11; j++){
//         console.log(i +" x " + j + " = " + i*j);
//     }
// }

// let tab = [];
// for(let i = 0; i<nbr; i++){
//     tab[i] = [];
//     for(let j = 0; j<10; j++){
//         tab[i][j] = (i+1)*(j+1);
//     }
// }
// console.log(tab[0]);
// console.log("---------------------------------");
// console.log(...tab);


// let taille = parseInt(prompt("Saisir taille"));
// let nbrTotal = taille*2-1;
// let nbr = -1;
// for(let i = 0; i<taille; i++){
// nbr = nbr +2;
// let ligne = " ";
// for(let j = 0; j<(nbrTotal-nbr)/2; j++){
//     ligne += "-";
// }
// for(let k = 0; k<nbr; k++){
//     ligne+="*";
// }
// for(let l = 0; l<(nbrTotal-nbr)/2; l++){
//     ligne += "-";
// }
// console.log(ligne);
// }



// let epaisseur = 0.1;
// let compteur = 0;
// while(epaisseur<400){
// compteur ++;
// epaisseur *= 2;
// }
// console.log(compteur);

// let epaisseur = 400;
// let compteur = 0;
// while(epaisseur>0.1){
// compteur ++;
// epaisseur /= 2;
// }
// console.log(compteur);



// let population = prompt("Saisir population");
// let taux = prompt("Saisir taux");
// let but = prompt("Saisir but");
// let annee = 0;
// while(population<but){
//     annee++;
//     population = population*(1+taux/100);
// }
// console.log(annee);




// let nbr = prompt("Saisir nombre");
// console.log("Les sommes consécutives sont :");
// for (let j = 1; j < nbr + 1; j++) {
//     let somme = 0;
//     let liste = nbr + " = ";
//     for (let i = j; i < nbr; i++) {
//         somme += i;
//         liste += i + " + ";
//         if (somme == nbr) {
//             console.log(liste.substring(0, liste.length - 2));
//         }
//     }
// }

// function nomEntier(nom, prenom){
//     return nom + " " + prenom;
// }
// console.log(nomEntier("toto", "tata"));



// function soustraire (a, b){
//     console.log("Je soustrais " + a + " et " + b);
//     return a-b;
// }
// console.log(soustraire(2,1));



// function quelleHeure(heure = "12h00"){
//     console.log("Il est " + heure);
// }
// quelleHeure();
// quelleHeure("14h00");



// let ask = (question, yes, no) =>{
//     if (confirm(question))
//     yes();
// else 
//     no();
// };

// ask(
//     "Do you agree?",
//     function () {
//         alert("You agreed.");
//     },
//     function () {
//         alert("You canceled the execution.");
//     }
// );


// function palindrome(mot){
//     let result = true;
//     for(let i =0; i<mot.length/2; i++){
//         if(mot.substring(i,i+1) != mot.substring(mot.length-(i+1), mot.length-i)){
//             result = false;
//             break
//         }
//     }
//     return result;
// }
// console.log(palindrome("toto"));



// function compterLettreA(mot){
//     let nbr = 0;
//     for(let i = 0; i<mot.length; i++){
//         if (mot[i] == "a"){
//             nbr ++;
//         }
//     }
//     return nbr
// }
// console.log(compterLettreA("kayak"));


// function verificationAdn(chaine) {
//     let valide = true;
//     for (let i = 0; i < chaine.length; i++) {
//         if (chaine[i] != "a" && chaine[i] != "c" && chaine[i] != "g" && chaine[i] != "t") {
//             console.log("Erreur de saisie");
//             valide = false;
//             break;
//         }
//     }
//     return valide;
// }

// function saisieChaineAdn() {
//     let saisie = "false";
//     while (verificationAdn(saisie) == false) {
//         saisie = prompt("Saisir une chaine");
//     }
//     return saisie;
// }


// function saisieSequenceAdn() {
//     let saisie = "false";
//     while (verificationAdn(saisie) == false) {
//         saisie = prompt("Saisir une séquence");
//     }
//     return saisie;
// }


// function proportion(chaine, sequence){
//     let nbr = 0;
//     for(let i = 0; i<sequence.length; i++){
//         if(chaine[i] == sequence[i]){
//             nbr ++;
//         }
//     }
//     return nbr * 100 / chaine.length;
// }
// console.log("Il y a " + proportion(saisieChaineAdn(), saisieSequenceAdn()) + "%");



// let nbrs = [];
// for (let i = 0; i < 10; i++) {
//     nbrs[i] = parseInt(prompt("Saisisr un nombre"));
// }
// for (let j = 0; j < nbrs.length; j++) {
//     console.log(" ".repeat(j) + nbrs[j]);
// }

// let nbrs2 = [];
// for (let i = 0; i < 10; i++) {
//     nbrs2[i] = nbrAleatoire(100);
// }
// for (let j = 0; j < nbrs2.length; j++) {
//     console.log(" ".repeat(j) + nbrs2[j]);
// }

// function nbrAleatoire(max) {
//     return Math.floor(Math.random() * max);
// }



// let taille = parseInt(prompt("Taille du tableau"));
// let tab = new Array(taille);
// for (let i = 0; i < taille; i++) {
//     tab[i] = nbrAleatoire(1, 50);
// }
// for (let j = 0; j < taille; j++) {
//     if (tab[j] % 2 == 0) {
//         console.log("Le nombre " + tab[j] + " est pair");
//     } else {
//         console.log("Le nombre " + tab[j] + " est impair");
//     }
// }

// function nbrAleatoire(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;;
// }




// function saisieAvecNbr() {
//     let nbr = parseInt(prompt("Nombre de notes ?"));
//     let tab = new Array(nbr);
//     for (let i = 0; i < nbr; i++) {
//         tab[i] = parseInt(prompt("Saisir note"));
//     }
//     return tab;
// }

// function saisieSansNbr() {
//     let positif = true;
//     let cpt = 0;
//     let tab = [];
//     while (positif) {
//         let saisie = parseInt(prompt("Saisir note"));
//         if (saisie < 0) {
//             positif = false;
//         } else {
//             tab[cpt] = saisie;
//             cpt++;
//         }
//     }
//     return tab;
// }

// function moyenne(tab) {
//     let somme = 0;
//     for (let i = 0; i < tab.length; i++) {
//         somme += tab[i];
//     }
//     return somme / tab.length;
// }

// function methode() {
//     console.log("1 - Saisir le nombre de note");
//     console.log("2 - Arret avec nombre négatif");

//     let choix = parseInt(prompt("Choix ?"));
//     let tab = [];

//     switch (choix) {
//         case 1:
//             tab = saisieAvecNbr();
//             break;
//         case 2:
//             tab = saisieSansNbr();
//             break;
//     }
//     return tab;
// }


// function menu(tab) {
//     console.log("1 - Note max");
//     console.log("2 - Note min");
//     console.log("3 - Moyenne");
//     let choix = parseInt(prompt("Choix ?"));

//     switch (choix) {
//         case 1:
//             console.log("La note maximale est de " + Math.max(...tab));
//             break;
//         case 2:
//             console.log("La note minimale est de " + Math.min(...tab));
//             break;
//         case 3:
//             console.log("La moyenne est de " + moyenne(tab));
//             break;
//     }
// }

// menu(methode());






// function saisir(tab) {
//     for (let i = 0; i < tab.length; i++) {
//         let contact;
//         do { contact = prompt("Nom du contact"); }
//         while (tab.indexOf(contact) != -1);
//         tab[i] = contact;
//     }
// }

// function afficher(tab) {
//     console.log(...tab);
// }

// function trier(tab) {
//     tab.sort();
//     afficher(tab);
// }

// function melanger(tab) {
//     let numbers = new Array(tab.length);
//     let number = Math.floor(Math.random() * (tab.length));
//     let newTab = [];
//     for (let i = 0; i < tab.length; i++) {
//         do { number = Math.floor(Math.random() * (tab.length)) }
//         while (numbers.indexOf(number) != -1);
//         newTab[number] = tab[i];
//         numbers[i] = number;
//     }
//     tab = newTab;
//     afficher(tab);
// }

// function supprimer(tab) {
//     let index = tab.indexOf(prompt("élément à supprimer"));
//     tab.splice(index, 1);
//     afficher(tab);
// }

// function rechercher(tab) {
//     let recherche = prompt("élément à chercher");
//     let result = [];
//     for (let i = 0; i < tab.length; i++) {
//         if (tab[i].includes(recherche)) {
//             result.push(tab[i]);
//         }
//     }
//     console.log(...result);
// }


// function menu() {
//     console.log("1 - Saisir les contacts");
//     console.log("2 - Afficher");
//     console.log("3 - Ordre alphabétique")
//     console.log("4 - Mélanger")
//     console.log("5 - Supprimer")
//     console.log("6 - Chercher")
//     console.log("0 - Quitter");
//     let choix = parseInt(prompt("Choix ?"));

//     switch (choix) {
//         case 1:
//             saisir(tab);
//             break;
//         case 2:
//             afficher(tab);
//             break;
//         case 3:
//             trier(tab);
//             break;
//         case 4:
//             melanger(tab);
//             break;
//         case 5:
//             supprimer(tab);
//             break;
//         case 6:
//             rechercher(tab);
//             break;
//         default:
//             return;
//     }
//     menu();
// }

// let nbrContact = parseInt(prompt("Nombre de contact ?"));
// let tab = new Array(nbrContact);
// menu();


let etudiants = [
    {
        prenom: "José",
        nom: "Garcia",
        matieres: {
            francais: 16,
            anglais: 7,
            humour: 14
        }
    },
    {
        prenom: "Antoine",
        nom: "De Caunes",
        matieres: {
            francais: 15,
            anglais: 6,
            humour: 16,
            informatique: 4,
            sport: 10
        }
    },
    {
        prenom: "Toto",
        nom: "Tata",
        matieres: {
            francais: 12,
            anglais: 5,
        }
    },
    {
        prenom: "Lulu",
        nom: "Lili",
        matieres: {
            francais: 18,
            anglais: 14,
        }
    }
];

let classement = [];
etudiants.forEach(etudiant => {
    console.log("######### Début étudiant #########")
    console.log("Etudiant : " + etudiant.nom + " " + etudiant.prenom);
    let moyenne = 0;
    let nbr = 0;
    for (const key in etudiant.matieres) {
        console.log(" " + `${key} : ${etudiant.matieres[key]}` + " /20")
        moyenne += etudiant.matieres[key];
        nbr++;
    }
    classement[etudiant] = moyenne/nbr; 
    console.log("La moyenne est de : " + moyenne / nbr);
    console.log("######### Fin étudiant #########")
    console.log(classement);

});
console.log(classement);
