const insertionSort = require('./sort/insertion_sort');
const bubleSort = require('./sort/buble_sort');
const SelectionSort = require('./sort/selection_sort');
const MergeSort = require('./sort/merge_sort');
const QuickSort = require('./sort/quick_sort');
const ShellSort = require('./sort/shell_sort');
const arrData = require('./array_data');

const Insertion = new insertionSort();
const Buble = new bubleSort();
const selectionSort = new SelectionSort();
const mergeSort = new MergeSort();
const quickSort = new QuickSort();
const shellSort = new ShellSort();

Insertion.description();
const arr = arrData.fillRandom(40);
console.log('input array', `[${arr.join(', ')}]`);
console.log('input array length', arr.length);
const sorted = Insertion.sort(arr);
console.log('sorted array', `[${sorted.join(', ')}]`);
console.log('number of visiting', Insertion.getVisited());

Buble.description();
const arr3 = arrData.fillRandom(40);
console.log('input array', `[${arr3.join(', ')}]`);
console.log('input array length', arr3.length);
const sorted3 = Buble.sort(arr3);
console.log('sorted array', `[${sorted3.join(', ')}]`);
console.log('number of visiting', Buble.getVisited());

selectionSort.description();
const arr4 = arrData.fillRandom(40);
console.log('input array', `[${arr4.join(', ')}]`);
console.log('input array length', arr4.length);
const sorted4 = selectionSort.sort(arr4);
console.log('sorted array', `[${sorted4.join(', ')}]`);
console.log('number of visiting', selectionSort.getVisited());

mergeSort.description();
const arr5 = arrData.fillRandom(40);
console.log('input array', `[${arr5.join(', ')}]`);
console.log('input array length', arr5.length);
const sorted5 = mergeSort.sort(arr5);
console.log('sorted array', `[${sorted5.join(', ')}]`);
// console.log('number of visiting', selectionSort.getVisited());

quickSort.description();
const arr6 = arrData.fillRandom(40);
console.log('input array', `[${arr6.join(', ')}]`);
console.log('input array length', arr6.length);
const sorted6 = quickSort.sort(arr6);
console.log('sorted array', `[${sorted6.join(', ')}]`);

shellSort.description();
const arr7 = arrData.fillRandom(40);
console.log('input array', `[${arr7.join(', ')}]`);
console.log('input array length', arr7.length);
const sorted7 = shellSort.sort(arr7);
console.log('sorted array', `[${sorted7.join(', ')}]`);