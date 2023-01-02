class Color {
    constructor(locked) {
        this.hex = getRandomHex();
        this.locked = locked || false;
    }
}
