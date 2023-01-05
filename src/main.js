var colorWidgetParent = document.querySelector('.color-widget-parent');
var newPaletteButton = document.querySelector('#new-palette');
var savePaletteButton = document.querySelector('#save-palette');
var savedSection = document.querySelector('aside');

var currentPalette = new Palette();
var savedPalettes = [];

window.addEventListener('load', loadPage);
newPaletteButton.addEventListener('click', changePaletteColors);
savePaletteButton.addEventListener('click', savePalette);
colorWidgetParent.addEventListener('click', toggleColorLock);
savedSection.addEventListener('click', deleteSavedPalette);

function loadPage() {
    displayRandomTitleFonts();
    displayCurrentPalette();
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
                <div data-index-number="${i}" style="background-color:${currentPalette.colors[i].hex}" class="color-box"></div>
                <div class="color-box-footer">
                    <p>${currentPalette.colors[i].hex}</p>
                    <img  src="./assets/${imgString}">
                </div>
            </article>`           
    }
}

function displaySavedPalettes() {
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

function displayRandomTitleFonts() {   
    var fonts = ["'Barrio', cursive;", "'Bungee Shade', cursive;", "'Cabin Sketch', cursive;", "'Monoton', cursive;", "'Moo Lah Lah', cursive;", "'Schoolbell', cursive;"];
    var colors = ["#ef3550", "#f48fb1", "#7e57c2", "#2196f3", "#26c6da", "#43a047", "#00ff80", "#eeff41", "#f9a825", "#ff5722"];
    var header = document.querySelector('h1');
    var titleLetters = 'COLORANDOM'.split('');
    header.innerHTML = '';
    for (var i = 0; i < titleLetters.length; i++) {
        var randomNum = Math.floor(Math.random() * fonts.length);
        header.innerHTML += `<span style="font-family: ${fonts[randomNum]}; color: ${colors[i]};">${titleLetters[i]}</span>`
    }
}

function changePaletteColors() {
    currentPalette.replaceColors();
    displayRandomTitleFonts();
    displayCurrentPalette();
}

function toggleColorLock(event) {
    if(event.target.className === 'color-box') {
        var selectedColorIndex = event.target.dataset.indexNumber;
        currentPalette.toggleColorLock(selectedColorIndex);
        displayCurrentPalette();
    }
}

function savePalette() {
    var newSavedPalette = new Palette([...currentPalette.colors]);
    savedPalettes.push(newSavedPalette);
    displayRandomTitleFonts();
    displaySavedPalettes();
    changePaletteColors();
}

function deleteSavedPalette(event) {
    if(event.target.tagName === 'IMG') {
        var clickedPaletteId = event.target.parentElement.id;
        for (var i = 0; i < savedPalettes.length; i++) {
            if (savedPalettes[i].id == clickedPaletteId) {
                savedPalettes.splice(i, 1);
            }
        }
        displaySavedPalettes();
    }
}

function getRandomHex() {
    var characters = 'ABCDEF0123456789'.split('');
    var hexCode = '#';
    for (var i = 0; i < 6; i++) {
        var randomNum = Math.floor(Math.random() * characters.length);
        hexCode += characters[randomNum];
    }
    return hexCode;
}
