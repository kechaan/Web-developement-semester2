const setup = () => {
let button = document.getElementById("button")
    button.addEventListener("click", stringOpdelen);
}
window.addEventListener("load", setup);

const stringOpdelen = () => {
    let tekst = document.getElementById("textarea").value;
    let beginIndex = document.getElementById("beginIndex").value;
    let eindIndex = document.getElementById("eindIndex").value;

    if(beginIndex >= 0 && eindIndex <= tekst.length){
        console.log(tekst.slice(beginIndex, eindIndex));
    } else {
        console.log("Index mag niet buiten de grens gaan.")
    }
}