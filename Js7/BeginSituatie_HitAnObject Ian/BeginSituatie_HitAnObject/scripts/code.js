let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    let image = document.getElementById("image");
    let playField = document.getElementById("playField");
    let button = document.getElementById("button");
    button.addEventListener("click", knop);

}

const alert = () => {
    let image = document.getElementById("image");
    if(image.getAttribute('src') === global.IMAGE_PATH_PREFIX + '0' + global.IMAGE_PATH_SUFFIX){
        window.alert("Game over!");
    }
}

const moveImage = () => {
    let image = document.getElementById("image");
    let playField = document.getElementById("playField");

    let maxLeft = playField.clientWidth - image.offsetWidth;
    let maxHeight = playField.clientHeight - image.offsetHeight;

    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxHeight);

    image.style.left = left + "px";
    image.style.top = top + "px";
}

const changePic = () => {
    let image = document.getElementById("image");
    let imageNumber = Math.floor(Math.random() * global.IMAGE_COUNT);
    image.setAttribute("src", global.IMAGE_PATH_PREFIX + imageNumber + global.IMAGE_PATH_SUFFIX);

}

const knop = () => {
    let image = document.getElementById("image");
    let button = document.getElementById("button");
    button.classList.add("hidden");

    image.addEventListener("click", moveImage);
    image.addEventListener("click", changePic);
    image.addEventListener("click", alert);
    setInterval(moveImage, global.MOVE_DELAY);
    setInterval(changePic,global.MOVE_DELAY);

}

window.addEventListener("load", setup);


