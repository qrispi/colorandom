var colorWidgetParent = document.querySelector('.color-widget-parent');
var newPaletteButton = document.querySelector('#new-palette');
var savePaletteButton = document.querySelector('#save-palette');

var currentPalette = new Palette();
var savedPalettes = [];

window.addEventListener('load', displayCurrentPalette);
newPaletteButton.addEventListener('click', changePaletteColors);
savePaletteButton.addEventListener('click', );

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

function changePaletteColors() {
    currentPalette.replaceColors();
    displayCurrentPalette();
}
