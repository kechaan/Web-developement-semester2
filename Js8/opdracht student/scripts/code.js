const student1 = {
    voornaam: 'Ian',
    familienaam: 'Catry',
    geboorteDatum: new Date("2000-10-25")
}

const setup = () => {
let button1 = document.getElementById("stringify");
button1.addEventListener("click", stringOmzetten);
let button2 = document.getElementById("parsen");
button2.addEventListener("click", parsen);

}

const stringOmzetten = () => {
    let json = JSON.stringify(student1);
    console.log(json);
}

const parsen = () => {
    let json2 = JSON.parse('{"voornaam":"Ian","familienaam":"Catry","geboorteDatum":"2000-10-25T00:00:00.000Z"}');
    console.log(json2.voornaam);
}
window.addEventListener("load", setup);