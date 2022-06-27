const min = (items = []) => {
    let tmin = items[0];
    let tid = 0;
    for (let i = 1; i <= items.length - 1; i++) {
        if (items[i] < tmin) {
           tmin = items[i];
           tid = i;
        }
    }
    return {
        min: tmin,
        pos: tid,
    };   
};

const max = (items = []) => {
    let tmax = items[0];
    let tid = 0;
    for (let i = 1; i <= items.length - 1; i++) {
        if (items[i] > tmax) {
           tmax = items[i];
           tid = i;
        }
    }
    return {
        max: tmax,
        pos: tid,
    };   
};

const swap = (array, a, b) => {
    const tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
};

module.exports = {
    min,
    max,
    swap,
};