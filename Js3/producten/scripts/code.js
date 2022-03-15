const setup = () => {
    let herbereken = document.getElementById("herbereken");
    herbereken.addEventListener("click", formule);
}
const formule = () => {
    let price = document.getElementsByClassName("price");
    let aantallen = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let prijs = document.getElementsByClassName("prijs");
    let totalePrijs = document.getElementById("prijsTotaal");


    let price1 = parseFloat(price[1].textContent).toFixed(2);
    let price2 = parseFloat(price[2].textContent).toFixed(2);
    let price3 = parseFloat(price[3].textContent).toFixed(2);
    let aantal1 = aantallen[1].value;
    let aantal2 = aantallen[2].value;
    let aantal3 = aantallen[3].value;
    let btw1 = parseFloat(btw[1].textContent).toFixed(2);
    let btw2 = parseFloat(btw[2].textContent).toFixed(2);
    let btw3 = parseFloat(btw[3].textContent).toFixed(2);
    let prijs1 = parseFloat((price1 * aantal1) * ((btw1 + 100) / 100) + (price1 * aantal1)).toFixed(2);
    let prijs2 = parseFloat((price2 * aantal2) * ((btw2 + 100) / 100) + (price2 * aantal2)).toFixed(2);
    let prijs3 = parseFloat((price3 * aantal3) * ((btw3 + 100) / 100) + (price3 * aantal3)).toFixed(2);

    prijs[1].textContent = prijs1 + " Eur";
    prijs[2].textContent = prijs2 + " Eur";
    prijs[3].textContent = prijs3 + " Eur";
    totalePrijs.textContent = (parseFloat(prijs1)+parseFloat(prijs2)+parseFloat(prijs3)).toFixed(2);


}
window.addEventListener("load", setup);