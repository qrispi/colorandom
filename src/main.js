var colorWidgetParent = document.querySelector('.color-widget-parent');
var newPaletteButton = document.querySelector('#new-palette');
var savePaletteButton = document.querySelector('#save-palette');
var savedSection = document.querySelector('aside');

var currentPalette = new Palette();
var savedPalettes = [];
var counter = -1;
var fonts = ["'Barrio', cursive", "'Bungee Shade', cursive", "'Cabin Sketch', cursive", "'Monoton', cursive", "'Moo Lah Lah', cursive", "'Schoolbell', cursive"];
var colors = ["#ef3550", "#f48fb1", "#7e57c2", "#2196f3", "#26c6da", "#43a047", "#00ff80", "#e6d847", "#f9a825", "#ff5722"];
var titleLetters = 'COLORANDOM'.split('');

window.addEventListener('load', loadPage);
newPaletteButton.addEventListener('click', changePaletteColors);
savePaletteButton.addEventListener('click', savePalette);
colorWidgetParent.addEventListener('click', toggleColorLock);
savedSection.addEventListener('click', deleteSavedPalette);

function loadPage() {
    displayRandomTitleFonts();
    displayCurrentPalette();
    var timer = setInterval(animateTitleFonts, 1000)
}

function displayCurrentPalette() {
    colorWidgetParent.innerHTML = '';
    for (var i = 0; i < 5; i++) {
        var imgString = 'Unlock-White.png';
        if (currentPalette.colors[i].locked) {
            imgString = 'Lock-White.png';
        }
        colorWidgetParent.innerHTML +=
            `<article class="color-widget">
                <div data-index-number="${i}" style="background-color:${currentPalette.colors[i].hex}" class="color-box"></div>
                <div class="color-box-footer">
                    <p style="color: white; font-size: 3vmin;">${currentPalette.colors[i].hex}</p>
                    <img src="./assets/${imgString}">
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
            <img src="./assets/Delete-White.png">
        </article>`
    }
}

function displayRandomTitleFonts() {   
    var header = document.querySelector('h1');
    header.innerHTML = '';
    for (var i = 0; i < titleLetters.length; i++) {
        var randomNum = Math.floor(Math.random() * fonts.length);
        header.innerHTML += `<span data-font-index="${randomNum}" style="font-family: ${fonts[randomNum]}; color: ${colors[i]};">${titleLetters[i]}</span>`
    }
}

function animateTitleFonts() {
    counter++
    if (counter > 9) {
        counter = 0
    }
    var spans = document.querySelectorAll('span')
    // console.log("span index font", spans[counter].dataset.fontIndex)
    var currentFontIndex = spans[counter].dataset.fontIndex
    var randomFont = getRandomFont(currentFontIndex)
    var fontIndex = fonts.indexOf(randomFont)
    // console.log('new font index: ', fontIndex)
    spans[counter].outerHTML = `<span data-font-index="${fontIndex}" style="font-family: ${randomFont}; color: ${colors[counter]};">${titleLetters[counter]}</span>`
}

function changePaletteColors() {
    currentPalette.replaceColors();
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

function getRandomFont(fontIndex) {
    var newFonts = [...fonts]
    // console.log("font array copy", newFonts)
    newFonts.splice(fontIndex, 1)
    // console.log("font array copy after splice", newFonts)
    var randomFont = newFonts[Math.floor(Math.random() * newFonts.length)];
    return randomFont
}


// Changed yellow letter color to be more readable

// 

// create 'party-mode' button that toggles between white and black themes
// p text is not scaling or inheriting CSS due to not having a class
// Seems like items without classes do not inherit certain properties