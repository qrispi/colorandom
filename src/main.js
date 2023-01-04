var colorWidgetParent = document.querySelector('.color-widget-parent');
var newPaletteButton = document.querySelector('#new-palette')

var currentPalette = new Palette();

window.addEventListener('load', reloadPalette);
newPaletteButton.addEventListener('click', generateNewPalette)

function getRandomHex() {
    var characters = 'ABCDEF0123456789'.split('');
    var hexCode = '#'
    for (var i = 0; i < 6; i++) {
        var randomNum = Math.floor(Math.random() * characters.length)
        hexCode += characters[randomNum]
    }
    return hexCode
}

function reloadPalette() {
    colorWidgetParent.innerHTML = ''
    for (var i = 0; i < 5; i++) {
        var imgString = 'Unlock.png'
        if (currentPalette.colors[i].locked) {
            imgString = 'Lock.png'
        }
        colorWidgetParent.innerHTML +=
            `<article class="color-widget">
                <div style="background-color:${currentPalette.colors[i].hex}" class="color-box"></div>
                <div class="color-box-footer">
                    <p>${currentPalette.colors[i].hex}</p>
                    <img id="${i}" src="./assets/${imgString}">
                </div>
            </article>`           
    }
}

function generateNewPalette() {
    currentPalette.replaceColors()
    reloadPalette()
}
