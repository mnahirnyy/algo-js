const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function fillRandom(size) {
    let i = 0;
    const resArray = [];

    while (i < size) {
        const random = Math.floor((Math.random() * size) + 1);
        resArray.push(random);
        i += 1;
    }

    return resArray;
}

module.exports = {
    fillRandom,
    sortedArr,
    reverseArr,
    notSortedArr,
    equalArr,
}