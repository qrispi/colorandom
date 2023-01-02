function getRandomHex() {
    var characters = 'ABCDEF0123456789'.split('');
    var hexCode = '#'
    for (var i = 0; i < 6; i++) {
        var randomNum = Math.floor(Math.random() * characters.length)
        hexCode += characters[randomNum]
    }
    return hexCode
}
