const visiting = require('../visiting');

class MergeSort {

    constructor () {
        this.visit = new visiting();
    }

    sort (arr) {
        if (arr.length === 1) {
            // return once we hit an array with a single item
            return arr;
        }
        
        const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
        const left = arr.slice(0, middle); // items on the left side
        const right = arr.slice(middle); // items on the right side
        
        return this.merge(
            this.sort(left),
            this.sort(right)
        );
    }
        
    // compare the arrays item by item and return the concatenated result
    merge (left, right) {
        const result = [];
        let indexLeft = 0;
        let indexRight = 0;
    
        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft])
                indexLeft = indexLeft + 1;
            } else {
                result.push(right[indexRight])
                indexRight = indexRight + 1;
            }
        }
        
        return result
            .concat(left.slice(indexLeft))
            .concat(right.slice(indexRight));
    }
    

    description() {
        console.log(`
            *
            * Merge Sort
            * Time complexity: O(N^2).
        `);
    }

    getVisited() {
        return this.visit.getRegistered();
    }

    getArray() {
        return this.array;
    }
}

module.exports = MergeSort;