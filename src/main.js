var colorWidgetParent = document.querySelector('.color-widget-parent');
var newPaletteButton = document.querySelector('#new-palette');
var savePaletteButton = document.querySelector('#save-palette');
var savedSection = document.querySelector('aside');

var currentPalette = new Palette();
var savedPalettes = [];

window.addEventListener('load', displayCurrentPalette);
newPaletteButton.addEventListener('click', changePaletteColors);
savePaletteButton.addEventListener('click', savePalette);

function getRandomHex() {
    var characters = 'ABCDEF0123456789'.split('');
    var hexCode = '#';
    for (var i = 0; i < 6; i++) {
        var randomNum = Math.floor(Math.random() * characters.length);
        hexCode += characters[randomNum];
    }
    return hexCode;
}

function displayCurrentPalette() {
    colorWidgetParent.innerHTML = '';
    for (var i = 0; i < 5; i++) {
        var imgString = 'Unlock.png';
        if (currentPalette.colors[i].locked) {
            imgString = 'Lock.png';
        }
        colorWidgetParent.innerHTML +=
            `<article class="color-widget">
                <div style="background-color:${currentPalette.colors[i].hex}" class="color-box"></div>
                <div class="color-box-footer">
                    <p>${currentPalette.colors[i].hex}</p>
                    <img data-index-number="${i}" src="./assets/${imgString}">
                </div>
            </article>`           
    }
}

function displaySavedPalettes() {
    //set inner html to h3
    //loop through saved colors array
        //change each div background color to be each palette, create a single saved palette
        // add single saved palette to inner html with palette id  
    savedSection.innerHTML = `<h3>Saved Palettes</h3>`;
    for (var i = 0; i < savedPalettes.length; i++) {
        savedSection.innerHTML += 
        `<article class="single-saved-palette" id="${savedPalettes[i].id}">
            <div class="mini-color-box" style="background-color: ${savedPalettes[i].colors[0].hex}"></div>
            <div class="mini-color-box" style="background-color: ${savedPalettes[i].colors[1].hex}"></div>
            <div class="mini-color-box" style="background-color: ${savedPalettes[i].colors[2].hex}"></div>
            <div class="mini-color-box" style="background-color: ${savedPalettes[i].colors[3].hex}"></div>
            <div class="mini-color-box" style="background-color: ${savedPalettes[i].colors[4].hex}"></div>
            <img src="./assets/Delete.png">
        </article>`
    }
}

function changePaletteColors() {
    currentPalette.replaceColors();
    displayCurrentPalette();
}

function savePalette() {
    // create a new palette with colors from current palette
    // add new palette to saved palettes array 
    // call function to display saved palettes
    // call change palette colors 
    var newColors = [currentPalette.colors[0], 
    currentPalette.colors[1], currentPalette.colors[2], currentPalette.colors[3], currentPalette.colors[4]]; 
    var newSavedPalette = new Palette(newColors);
    savedPalettes.push(newSavedPalette);
    displaySavedPalettes();
    changePaletteColors();
}