const setup = () => {
let dateVerjaardag = new Date(2000, 9, 25);
let dateVandaag = new Date();
let aantalDagen = dateVandaag - dateVerjaardag;
let newDate = aantalDagen/1000/3600/24;
console.log(Math.floor(newDate));
}
window.addEventListener("load", setup);