const setup = () => {
let button = document.getElementById("button");
button.addEventListener("click", output)
}
window.addEventListener("load", setup);

const output = () => {
    let output = "";

    const checkbox = document.getElementById("checkbox");
    if(checkbox.checked){
        output += "Is een roker"
    } else {
        output += "Is geen roker"
    }


    const radiobox = document.getElementsByName("moedertaal");
    for (let i = 0; i < radiobox.length; i++) {
        if(radiobox[i].checked){
            output += "\nmoedertaal is " + radiobox[i].value;
        }
    }

    const buurland = document.getElementById("buurland").value;
    output += "\nfavoriete buurland is " + buurland;

    const bestelling = document.getElementById("bestelling").options;
    output += "\nbestelling bestaat uit ";
    for (let i = 0; i < bestelling.length; i++) {
        if(bestelling[i].selected){
            output += bestelling[i].value + " ";
        }
    }

    console.log(output)
}