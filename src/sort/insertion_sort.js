const visiting = require('../visiting');
const { swap } = require('../helper');

class InsertionSort {

    constructor() {
        this.visit = new visiting();
    }

    sort(inputArray) {
        this.array = [...inputArray];

        for (let i = 1; i < this.array.length; i += 1) {
            for (let k = i; k > 0 && this.array[k] < this.array[k - 1]; k -= 1) {
                swap(this.array, k, k - 1);
                this.visit.register(this.array[k]);
            }
            console.log(this.array.join(', '));
        }
    
        // for (let i = 1; i < this.array.length; i += 1) {
        //     let currentIndex = i;

        //     // Add to the visiting
        //     this.visit.register(this.array[i]);

        //     // Go and check if previous elements are greater then current one.
        //     // If this is the case then swap that elements.
        //     while (
        //         this.array[currentIndex - 1] &&
        //         (this.array[currentIndex] < this.array[currentIndex - 1])
        //     ) {
        //         // Add to the visiting
        //         this.visit.register(this.array[currentIndex - 1]);

        //         // Swap the elements.
        //         const tmp = this.array[currentIndex - 1];
        //         this.array[currentIndex - 1] = this.array[currentIndex];
        //         this.array[currentIndex] = tmp;

        //         // Shift current index left.
        //         currentIndex -= 1;
        //     }

        //     console.log(this.array.join(', '));
        // }

        return this.array;
    }

    description() {
        console.log(`
            *
            * Insertion Sort
            * Time complexity: O(N^2).
            * Insertion sort is a simple sorting algorithm that builds the final sorted array (or list)
            * one item at a time. It is much less efficient on large lists than more advanced algorithms
            * such as quicksort, heapsort, or merge sort.
        `);
    }

    getVisited() {
        return this.visit.getRegistered();
    }

    getArray() {
        return this.array;
    }
}

module.exports = InsertionSort;