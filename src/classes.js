class Color {
    constructor() {
        this.hex = getRandomHex();
        this.locked = false;
    }

    toggleLock() {
        this.locked = !this.locked;
    }
}

class Palette {
    constructor() {
        this.colors = [new Color(),new Color(),new Color(),new Color(),new Color()];
        this.id = Date.now();
    }
    
    replaceColors() {
        for(var i = 0; i < this.colors.length; i++) {
            if(!this.colors[i].locked) {
                this.colors[i] = new Color();
            }
        }
    }
}
