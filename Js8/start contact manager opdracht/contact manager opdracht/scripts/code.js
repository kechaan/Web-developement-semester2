let personen = [];
const persoon = {
    voornaam: 0,
    familienaam: 0,
    geboortedatum: 0,
    email: 0,
    aantalKinderen: 0
}
let index = -1;
// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer()
        let txtVoornaam = document.getElementById("txtVoornaam").value;
        let txtFamilienaam =  document.getElementById("txtFamilienaam").value;
        let txtGeboortedatum =  document.getElementById("txtGeboorteDatum").value;
        let txtEmail =  document.getElementById("txtEmail").value;
        let txtAantalKinderen =  document.getElementById("txtAantalKinderen").value;

        persoon.voornaam = txtVoornaam;
        persoon.familienaam = txtFamilienaam;
        persoon.geboortedatum = txtGeboortedatum;
        persoon.email = txtEmail;
        persoon.aantalKinderen = txtAantalKinderen;

        const persoonArray = JSON.stringify(persoon);

        if(index === -1){
            personen.push(persoonArray);
            let lstPersonen = document.getElementById("lstPersonen");
            let newElement = document.createElement("option");
            let txtNode = document.createTextNode(persoon.voornaam + ' ' + persoon.familienaam);
            newElement.append(txtNode);
            lstPersonen.append(newElement);
            newElement.setAttribute("id", personen.indexOf(persoonArray).toString());
            newElement.addEventListener("click", optionLoad);
        } else {
            personen[index] = persoonArray;
            let element = document.getElementById(index);
            let txtNode = document.createTextNode(persoon.voornaam + ' ' + persoon.familienaam);
            let firstChild = element.firstChild
            element.removeChild(firstChild);
            element.append(txtNode);
        }



    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

const optionLoad = (event) => {
    let element = event.currentTarget;
    let i = element.getAttribute("id");
    index = parseInt(i);
    let object = JSON.parse(personen[index]);
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam =  document.getElementById("txtFamilienaam");
    let txtGeboortedatum =  document.getElementById("txtGeboorteDatum");
    let txtEmail =  document.getElementById("txtEmail");
    let txtAantalKinderen =  document.getElementById("txtAantalKinderen");

    txtVoornaam.value = object.voornaam;
    txtFamilienaam.value = object.familienaam;
    txtGeboortedatum.value = object.geboortedatum;
    txtEmail.value = object.email;
    txtAantalKinderen.value = object.aantalKinderen;
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    index = -1;
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam =  document.getElementById("txtFamilienaam");
    let txtGeboortedatum =  document.getElementById("txtGeboorteDatum");
    let txtEmail =  document.getElementById("txtEmail");
    let txtAantalKinderen =  document.getElementById("txtAantalKinderen");

    txtVoornaam.value = "";
    txtFamilienaam.value = "";
    txtGeboortedatum.value = "";
    txtEmail.value = "";
    txtAantalKinderen.value = "";
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier

};

window.addEventListener("load", setup);