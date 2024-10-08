const urlApi = "https://pokeapi.co/api/v2/pokemon";
const btnSearch = document.getElementById("btnSearch");
const btnBefore = document.getElementById("before");
const btnAfter = document.getElementById("after");
const infoId = document.getElementById("id");
const img = document.getElementById("img");
const nom = document.getElementById("nom");
const poids = document.getElementById("poids");
const taille = document.getElementById("taille");
const types = document.getElementById("types");
const capacites = document.getElementById("capacites");
const idAffichage = document.getElementById("id");
const search = document.getElementById("search").value;
const result = document.getElementById("result");
const btnCapture = document.getElementById("capturer");
const listCapture = document.getElementById("capture");
const btnListCapture = document.getElementById("pokemonCapture");

let id = 0;

const affichage = (data) => {
    result.classList.remove("hidden");
    let capture = false;
    for (let key in localStorage) {
        if (key == data.id) {
            btnCapture.textContent = "Capturé";
            btnCapture.classList = "btn btn-success"
            btnCapture.disabled = true;
            capture = true;
        }
    }
    if (capture == false) {
        btnCapture.textContent = "Capturer";
        btnCapture.classList = "btn btn-primary"
        btnCapture.disabled = false;
    }
    types.textContent = "";
    capacites.textContent = "";
    img.innerHTML = "<img src=\"" + data.sprites.front_default + "\">"
    nom.innerHTML = "<b> Nom : </b>" + data.name;
    poids.innerHTML = "<b> Poids : </b>" + data.weight;
    taille.innerHTML = "<b> Taille </b>: " + data.height;
    for (let i = 0; i < data.types.length; i++) {
        const newType = document.createElement("p");
        newType.innerHTML = "<b> Type " + (i + 1) + " : </b>" + data.types[i].type.name; //plusieurs*
        types.appendChild(newType);
    }

    for (let j = 0; j < data.abilities.length; j++) {
        const newCapacite = document.createElement("p");
        newCapacite.innerHTML = "<b> Capacité " + (j + 1) + " : </b>" + data.abilities[j].ability.name; //plusieurs
        capacites.appendChild(newCapacite)
    }
    idAffichage.innerHTML = "<b> Id : </b>" + data.id
    id = data.id;
};

btnSearch.addEventListener("click", async () => {
    if (search) {
        try {
            const response = await fetch(`${urlApi}/${search}`);
            const data = await response.json();
            affichage(data)
        } catch (error) {
            affichage({ error: `${search}` });
        }
    }
});

btnBefore.addEventListener("click", async () => {
    if (id > 1) {
        try {
            const response = await fetch(`${urlApi}/${id - 1}`);
            const data = await response.json();
            affichage(data);
        } catch (error) {
            affichage({ error: `${id - 1}` });
        }

    }
})

btnAfter.addEventListener("click", async () => {

    if (id < 1025) {
        try {
            const response = await fetch(`${urlApi}/${(id + 1)}`);
            const data = await response.json();
            affichage(data);
        } catch (error) {
            affichage({ error: `${(id + 1)}` });
        }
    }

})

async function getName(id) {
    const response = await fetch(`${urlApi}/${id}`);
    const data = await response.json();
    return await data.name
}

btnCapture.addEventListener("click", async () => {
    btnCapture.textContent = "Capturé";
    btnCapture.classList = "btn btn-success"
    btnCapture.disabled = true;
    const name = await getName(id);
    localStorage.setItem(id, name);
})


btnListCapture.addEventListener("click", async () => {
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            console.log(key);
            const response = await fetch(`${urlApi}/${key}`);
            const data = await response.json();
            const liste = document.createElement("p");
            liste.textContent += data.name;
        }
    }
})