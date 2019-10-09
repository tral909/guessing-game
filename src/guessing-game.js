class GuessingGame {

    constructor() {
        this.prevAssumption = undefined;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.prevAssumption = Math.round((this.max - this.min) / 2 + this.min);
        return this.prevAssumption;
    }

    lower() {
        this.max = this.prevAssumption;
    }

    greater() {
        this.min = this.prevAssumption;
    }
}

module.exports = GuessingGame;
