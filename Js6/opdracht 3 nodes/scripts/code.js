const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let push = document.getElementsByTagName("button");
    push[0].addEventListener('click', functie);
}

const functie = () => {

    let div = document.getElementById('myDIV');
    let paragraph = document.createElement("p");
    let text = document.createTextNode("This is text");
    paragraph.appendChild(text);
    div.appendChild(paragraph);
    console.log(div);
}
window.addEventListener("load", setup);