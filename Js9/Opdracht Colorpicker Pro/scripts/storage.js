

const storeSliderValues = () => {
    const sliderRed = document.getElementById("sldRed").value;
    const sliderGreen = document.getElementById("sldGreen").value;
    const sliderBlue = document.getElementById("sldBlue").value;

const global = {
    red: sliderRed,
    green: sliderGreen,
    blue: sliderBlue
}

    const json = JSON.stringify(global);
    localStorage.setItem("sliderValues", json);
};

const restoreSliderValues = () => {
    const json = localStorage.getItem("sliderValues");
    const sliderValues = JSON.parse(json);

    const red = sliderValues.red;
    const green = sliderValues.green;
    const blue = sliderValues.blue;

    document.getElementById("sldRed").value = red;
    document.getElementById("sldGreen").value = green;
    document.getElementById("sldBlue").value = blue;

    update();
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    const array = [];
    const swatches = document.getElementById("swatchComponents").children;
    for (const swatch of swatches) {
        const swatchRed = swatch.getAttribute("data-red");
        const swatchGreen = swatch.getAttribute("data-green");
        const swatchBlue = swatch.getAttribute("data-blue");

        const global = {
            red: swatchRed,
            green: swatchGreen,
            blue: swatchBlue
        }

        const json = JSON.stringify(global);
        array.push(json);
    }
    const json2 = JSON.stringify(array);
    localStorage.setItem("favoriteColors", json2);
};

const restoreSwatches = () => {
    const json = localStorage.getItem("favoriteColors");
    const array = JSON.parse(json);
    for (let i = 0; i < array.length; i++) {
        const global = JSON.parse(array[i]);
        const red = global.red;
        const green = global.green;
        const blue = global.blue;
        addSwatchComponent(red, green, blue);
    }
};
