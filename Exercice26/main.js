let chiens = [
    {
        nom: "toto",
        race: "toto",
        age: "5"
    },
    {
        nom: "tata",
        race: "tata",
        age: "8"
    }
]


const button = document.querySelector("#btn-submit");

button.addEventListener("click", () => {
    const nom = document.querySelector("#dog-name").value;
    const race = document.querySelector("#dog-breed").value;
    const age = document.querySelector("#dog-age").value;
    let chien = {
        nom: nom,
        race: race,
        age: age
    }
    chiens.push = chien;

})

const select = document.querySelector("#dog-select");
for(let i = 0; i<chiens.length; i++){
    
}


