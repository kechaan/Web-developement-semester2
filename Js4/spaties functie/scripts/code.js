const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("button");
    button.addEventListener("click", spaties);
}
window.addEventListener("load", setup);

const spaties = () => {
    let txtInput = document.getElementById("txtInput").value;
    let txtInputSpaties = maakMetSpaties(txtInput);
    console.log(txtInputSpaties);
}
const maakMetSpaties = (inputText) => {
    let consoleOutput="";
    for(let i = 0;i < inputText.length;i++){
        consoleOutput += inputText.charAt(i) + " "
    }
    return consoleOutput;
}