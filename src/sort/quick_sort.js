const visiting = require('../visiting');
const { swap } = require('../helper');

class QuickSort {

    constructor () {
        this.visit = new visiting();
    }

    sort (array, left = 0, right = array.length - 1) {
        if (array.length) {
            const pivot = this.partitionHoare(array, left, right);
            if (left < pivot - 1) {
                this.sort(array, left, pivot - 1);
            }
            if (right > pivot) {
                this.sort(array, pivot, right);
            }
        }
        return array;
    }
        
    partitionHoare(array, left, right) {
        const pivot = Math.floor((left + right) / 2);
        while(left <= right) {
            while (array[left] < array[pivot]) {
                left++;
            }
            while (array[right] > array[pivot]) {
                right--;
            }
            if (left <= right) {
                swap(array, left, right);
                left++;
                right--;
            }
        }
        return left;
    }

    partitionLomuto(array, left, right) {
        const pivot = right;
        let i = left;

        for (let j = left; j < right; j++) {
            if (array[j] <= array[pivot]) {
                swap(array, i , j);
                i = i + 1;
            }
        }
        swap(array, i, j);
        return i;
    }

    description() {
        console.log(`
            *
            * Quick Sort
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

module.exports = QuickSort;