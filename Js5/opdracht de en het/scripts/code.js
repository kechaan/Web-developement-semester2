const setup = () => {
let button = document.getElementById("button");
button.addEventListener("click", vervanging);
}
window.addEventListener("load", setup);

const vervanging = () => {
    let inputTxt = document.getElementById("inputTxt").value;
    let newTxt = inputTxt.trim().split(" ");

    for (let i = 0; i < newTxt.length; i++) {
        if(newTxt[i] === "de"){
            newTxt[i] = "het";
        } else if(newTxt[i] === "De"){
            newTxt[i] = "Het";
        }
    }
    console.log(newTxt.join(" "));
}