const setup = () => {
const lijst = voegGemeentenToe();
weergaveGemeenten(lijst);
}
window.addEventListener("load", setup);

const voegGemeentenToe = () => {
    const lijst = [];
    let input = " ";
    let gestopt = false;

    while(!gestopt){

        let input = window.prompt("Typ hier een gemeente in");
        lijst.push(input);

        if(input === "stop"){
            gestopt = true;
           lijst.pop(input);
        }
    }
    return lijst;
}

const weergaveGemeenten = (lijst) => {
    let nieuweLijst = lijst.sort();
    for (let i = 0; i < nieuweLijst.length; i++) {
        let select = document.getElementById("gemeenten");
        select.innerHTML += '<option value="' + nieuweLijst[i] + '">' + nieuweLijst[i] + '</option>';
    }
}