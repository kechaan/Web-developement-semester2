const setup = () => {

    let slider = document.getElementsByClassName("slider");
    for(let i = 0; i < slider.length; i++) {
        slider[i] = window.addEventListener("change", update);
        slider[i] = window.addEventListener("input", update);
    }
}

const update = () => {
    let r = document.getElementById("sliderRed").value;
    let g = document.getElementById("sliderGreen").value;
    let b = document.getElementById("sliderBlue").value;

    const blokje = document.getElementById("swatch");
    blokje.style.backgroundColor="rgb(" + r + ", " + g + ", " + b + ")";

    let valRed = document.getElementById("valRed");
    valRed.innerHTML = r;b
    let valGreen = document.getElementById("valGreen");
    valGreen.inGreennerHTML = g;
    let valBlue = document.getElementById("valBlue");
    valBlue.innerHTML = b;
}
window.addEventListener("load", setup);