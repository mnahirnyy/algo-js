class Visiting {
    constructor() {
        this.array = [];
    }

    register(elm) {
        this.array.push(elm);
        return true;
    }

    getRegistered() {
        return this.array.length;
    }
}

module.exports = Visiting;