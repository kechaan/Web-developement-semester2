const setup = () => {
    let button = document.getElementsByTagName("button");
    button[0].addEventListener('click', knop);
}

const knop = () => {

    let div = document.getElementById('myDIV');
    let paragraph = document.createElement("p");
    let text = document.createTextNode("This is text");
    paragraph.appendChild(text);
    div.appendChild(paragraph);

    console.log(div);
}
window.addEventListener("load", setup);
