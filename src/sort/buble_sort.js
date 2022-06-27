const visiting = require('../visiting');

class BubleSort {

    constructor() {
        this.visit = new visiting();
    }

    sort(inputArray) {
        this.array = [...inputArray];
        let sorted = false;
        while (!sorted) {
            sorted = true;
            for (let i = 0; i < this.array.length - 1; i += 1) {
                if (this.array[i] > this.array[i + 1]) {
                    const tmp = this.array[i];
                    this.array[i] = this.array[i + 1];
                    this.array[i + 1] = tmp;
                    sorted = false;
                }
            }
            console.log(this.array.join(', '));
        }
        return this.array;
    }

    description() {
        console.log(`
            * Bubble Sort
            * Time complexity: O(N^2).
            * Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm
            * that repeatedly steps through the list to be sorted, compares each pair of adjacent
            * items and swaps them if they are in the wrong order. The pass through the list
            * is repeated until no swaps are needed, which indicates that the list is sorted.
        `);
    }

    getVisited() {
        return this.visit.getRegistered();
    }

    getArray() {
        return this.array;
    }
}

module.exports = BubleSort;