const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let belangrijk = document.getElementsByClassName("belangrijk");
    for(let i = 0; i < belangrijk.length; i++){
        belangrijk[i].classList.add("opvallend");
    }
}
window.addEventListener("load", setup);