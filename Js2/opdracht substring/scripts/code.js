const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtInput = document.getElementById("txtInput");
    let string = txtInput.value;
    let index1 = document.getElementById("firstIndex");
    let index2 = document.getElementById("lastIndex");
    let i1 = index1.value;
    let i2 = index2.value;
    let substring= string.substring(i1, i2);
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML = "= " + substring;
}
window.addEventListener("load", setup);