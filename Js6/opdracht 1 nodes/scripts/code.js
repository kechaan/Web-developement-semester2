const setup = () => {
    let changeText = document.getElementById("button")
    changeText.addEventListener("click", change);
}
window.addEventListener("load", setup);

const change = () => {
    let elementen = document.querySelectorAll(".button");
    let element = elementen[0];
    let tekst = document.createTextNode("Good Job!");
    element.removeChild(element.childNodes);
    element.appendChild(tekst);
    console.log(element);
}

