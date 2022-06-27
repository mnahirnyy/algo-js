const visiting = require('../visiting');
const { swap } = require('../helper');
const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

class ShellSort {

    constructor () {
        this.visit = new visiting();
    }

    sort (array) {
        for (let h = 0; h < gaps.length; h++) {
            const gap = gaps[h];
            for (let i = gap; i < array.length; i++) {
                const temp = array[i];
                for (let j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                    array[j] = array[j - gap];
                }
                array[j] = temp;
            }
        }
        return array;
    }
    
    description() {
        console.log(`
            *
            * Shell Sort
            * Time complexity: O(n log n).
        `);
    }

    getVisited() {
        return this.visit.getRegistered();
    }

    getArray() {
        return this.array;
    }
}

module.exports = ShellSort;