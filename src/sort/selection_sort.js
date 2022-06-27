const visiting = require('../visiting');

class SelectionSort {

    constructor() {
        this.visit = new visiting();
    }

    sort(inputArray) {
        this.array = [...inputArray];

        let min, minidx = 0;

        for (let i = 0; i < this.array.length - 1; i += 1) {
            min = this.array[i];
            minidx = i;

            for (let j = i + 1; j < this.array.length; j += 1) {
                if (this.array[j] < min) {
                    min = this.array[j];
                    minidx = j;
                }
            }

            if (min < this.array[i]) { // swap values, if we have a new minimum
                const tmp = this.array[i];
                this.array[i] = min;
                this.array[minidx] = tmp;
                this.visit.register(this.array[i]);
            }
            
            console.log(this.array.join(', '));
        }

        return this.array;
    }

    description() {
        console.log(`
            *
            * Selection Sort
            * Time complexity: O(N^2).
            * 1. Знаходить у списку найменше значення
            * 2. Міняє його місцями із першим значеннями у списку
            * 3. Повторює два попередніх кроки, починаючи з наступної позиції
        `);
    }

    getVisited() {
        return this.visit.getRegistered();
    }

    getArray() {
        return this.array;
    }
}

module.exports = SelectionSort;