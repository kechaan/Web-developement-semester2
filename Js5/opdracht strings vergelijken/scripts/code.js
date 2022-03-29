const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let string1 = "string";
    let string2 = "string";
    let string3 = "geenstring";
    let string4 = "str";
    let string5 = "ing";
    if(string1 == string2){
        console.log(true)
    } else {
        console.log(false)
    }
    if(string1 === string2){
        console.log(true)
    } else {
        console.log(false)
    }
    if(string1 == string3.slice(4, 10)){
        console.log(true)
    } else {
        console.log(false)
    }
    if(string1 === string3.slice(4, 10)){
        console.log(true)
    } else {
        console.log(false)
    }
    if(string3.slice(4, 10) == string4 + string5){
        console.log(true)
    } else {
        console.log(false)
    }
    if(string3.slice(4, 10) === string4 + string5){
        console.log(true)
    } else {
        console.log(false)
    }
}
window.addEventListener("load", setup);