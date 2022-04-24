const setup = () => {
    let changeText = document.getElementById("button")
    changeText.addEventListener("click", change);
}
window.addEventListener("load", setup);

const change = () => {
    let elementen = document.querySelectorAll("p");
    let element = elementen[0];
    let tekst = document.createTextNode("Good Job!");
    element.removeChild(element.childNodes[0]);
    element.appendChild(tekst);
    console.log(element);
}

