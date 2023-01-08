function getCohesivePalette() {
    var color1 = getRandomHSL();
    var color2 = getRotatedHueColor(color1, 90);
    var color3 = getRotatedHueColor(color1, 180);
    var color4 = getRotatedHueColor(color1, 270);
    var color5 = adjustLightness(color4);
  
    return [
        new Color(HSLToHex(color1)),
        new Color(HSLToHex(color2)),
        new Color(HSLToHex(color3)),
        new Color(HSLToHex(color4)),
        new Color(HSLToHex(color5))
    ]
}
  
function getRandomHSL() {
    var h = Math.floor(Math.random() * 360);
    var maxS = 90;
    var minS = 20;
    var s = Math.floor(Math.random() * (maxS - minS + 1)) + minS;
    var maxL = 90;
    var minL = 20;
    var l = Math.floor(Math.random() * (maxL - minL + 1)) + minL;
    return [h,s,l];
}
  
function getRotatedHueColor(color, degrees) {
    var newColor = [...color];

    var newAngle = color[0] + degrees;
    if(newAngle > 359) {
        newAngle = newAngle - 359;
    }
    newColor[0] = newAngle;

    return newColor;
}

function adjustLightness(color) {
    var newColor = [...color];
    var L = color[2];

    if(L > 50){
        L -= 35;
    }else{
        L += 35;
    }

    newColor[2] = L;
    return newColor;
}


function HSLToHex(color) {
    var h = color[0];
    var s = color[1];
    var l = color[2];

    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0, 
        b = 0; 

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}
