class Color {
    constructor() {
        this.hex = getRandomHex();
        this.locked = false;
    }
}

class Palette {
    constructor(paletteColors) {
        this.colors = paletteColors || [new Color(),new Color(),new Color(),new Color(),new Color()];
        this.id = Date.now();
    }
    
    replaceColors() {
        for(var i = 0; i < this.colors.length; i++) {
            if(!this.colors[i].locked) {
                this.colors[i] = new Color();
            }
        }
    }

    toggleColorLock(colorIndex) {
        this.colors[colorIndex].locked = !this.colors[colorIndex].locked;
    }
}