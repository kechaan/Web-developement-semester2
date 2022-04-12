const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("button");
    button[0].addEventListener('click', save)

    let sliders = document.getElementsByClassName("slider")
    sliders[0].addEventListener("input", update);

    sliders[1].addEventListener("input", update);

    sliders[2].addEventListener("input", update);
}
window.addEventListener("load", setup);

const save = () => {
    let safeSpace = document.getElementById('saved');
    let chosenColor = document.getElementsByClassName('colorDemo');
    let savedColor = chosenColor[0].cloneNode();
    let removeButton = document.createElement("button");
    let x = document.createTextNode('X');

    removeButton.appendChild(x);
    removeButton.setAttribute('style', 'float:right;');
    removeButton.setAttribute('class', 'delete')

    savedColor.appendChild(removeButton);
    safeSpace.appendChild(savedColor);

    let remove = document.getElementsByClassName('delete');
    for(let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', function() {
            this.parentElement.style.display = 'none';
        });
    }

}

const update = () => {
    let slidersRed = document.getElementById("slider red");
    let r = slidersRed.value;

    let slidersGreen = document.getElementById("slider green");
    let g = slidersGreen.value;

    let slidersBlue = document.getElementById("slider blue");
    let b = slidersBlue.value;

    let colorDemo = document.getElementsByClassName("colorDemo");
    red.innerHTML = r;
    green.innerHTML = g;
    blue.innerHTML = b;

    let color = 'rgb('+r+', ' + g + ', '+b+')';
    console.log(color);
    colorDemo[0].style.background = color;

}

window.addEventListener("load", update);