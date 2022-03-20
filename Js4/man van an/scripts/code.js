const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let zin = "De man van An geeft geen hand aan ambetante verwanten";
    zin.toLowerCase()
    console.log(sequentie(zin));
    console.log(alternatief(zin));
}
window.addEventListener("load", setup);

const sequentie = (inputText) => {
    let tekst = inputText.indexOf("an");
    //eerste index wordt overgeslaan
    let teller = 1;
    while(tekst >= 0){
        teller++;
        tekst++;
        tekst = inputText.indexOf("an", tekst);
    }
    return teller;
}
const alternatief = (inputText) => {
    let tekst = inputText.lastIndexOf("an");
    //eerste index wordt overgeslaan
    let teller = 1;
    while(tekst >= 0){
        teller++;
        tekst--;
        tekst = inputText.lastIndexOf("an", tekst);
    }
    return teller;
}