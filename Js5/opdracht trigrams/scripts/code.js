const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", trigram);
}
window.addEventListener("load", setup);

const trigram = () => {
    let woord = document.getElementById("woord").value;
    for(let i = 0;i<woord.length;i++){
        if(i+3 <= woord.length){
            console.log(woord.substring(i, i+3))
        }
    }
}