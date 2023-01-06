var counter = -1;
var fonts = ["'Barrio', cursive", "'Bungee Shade', cursive", "'Cabin Sketch', cursive", "'Monoton', cursive", "'Moo Lah Lah', cursive", "'Schoolbell', cursive"];
var colors = ["#ef3550", "#f48fb1", "#7e57c2", "#2196f3", "#26c6da", "#43a047", "#00ff80", "#e6d847", "#f9a825", "#ff5722"];
var titleLetters = 'COLORANDOM'.split('');

function displayRandomTitleFonts() {   
    var header = document.querySelector('h1');
    header.innerHTML = '';
    for (var i = 0; i < titleLetters.length; i++) {
        var randomNum = Math.floor(Math.random() * fonts.length);
        header.innerHTML += `<span data-font-index="${randomNum}" style="font-family: ${fonts[randomNum]}; color: ${colors[i]};">${titleLetters[i]}</span>`;
    }
}

function animateTitleFonts() {
    counter++;
    if (counter > 9) {
        counter = 0;
    }
    var spans = document.querySelectorAll('span');
    var currentFontIndex = spans[counter].dataset.fontIndex;
    var randomFont = getRandomFont(currentFontIndex);
    var fontIndex = fonts.indexOf(randomFont);
    spans[counter].outerHTML = `<span data-font-index="${fontIndex}" style="font-family: ${randomFont}; color: ${colors[counter]};">${titleLetters[counter]}</span>`;
}

function getRandomFont(fontIndex) {
    var newFonts = [...fonts];
    newFonts.splice(fontIndex, 1);
    var randomFont = newFonts[Math.floor(Math.random() * newFonts.length)];
    return randomFont;
}