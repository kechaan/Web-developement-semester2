

const voegNaamToe = () => {
    const naam = prompt("Voer een familienaam in", "");
    if (naam != null){
        array.push(naam);
        console.log(array.join());
    }
}
const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    const array = ['Joe', 'Jos', 'Johanna', 'Joeri', 'julie'];
console.log(array.length);
console.log(array[0], array[2], array[4]);
voegNaamToe();
console.log(array.join());
}

window.addEventListener("load", setup);