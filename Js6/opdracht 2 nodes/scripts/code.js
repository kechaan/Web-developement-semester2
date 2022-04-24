const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let list = document.querySelectorAll("li");
    for(let i =0; i < list.length; i++) {
        list[i].setAttribute("class", "listItem");
        list[i].setAttribute("style", "color:red;");
        console.log(list[i]);
    }
    let element = document.createElement("img");
    element.setAttribute("src", "1.jpg" );
    element.setAttribute("style", "width:100px; margin-left:10px;")

    document.body.appendChild(element);

}
window.addEventListener("load", setup);