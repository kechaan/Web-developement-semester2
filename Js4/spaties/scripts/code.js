const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("button");
    button.addEventListener("click", spaties);
}
window.addEventListener("load", setup);

const spaties = () => {
    let txtInput = document.getElementById("txtInput").value;
    let consoleOutput="";
    for(let i = 0;i < txtInput.length;i++){
        consoleOutput += txtInput.charAt(i) + " "
    }
    console.log(consoleOutput);
}