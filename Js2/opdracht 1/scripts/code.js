const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    const confirm = window.confirm("Weet u het zeker");
    console.log(confirm);

    const prompt = window.prompt("Wat is uw naam", "onbekend");
    console.log(prompt)
}
window.addEventListener("load", setup);