/**
 * @function findIndexByBinarySearch Implements Binary search algorithm.
 * Binary search Implementation*/

function findIndexByBinarySearch(arr = [], el = 0) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end){
        let mid = Math.floor((start + end)/2);
        if (arr[mid] < el){
            start = mid + 1;
        }else if (arr[mid] > el){
            end = mid - 1;
        }else {
            console.log(mid);
            return mid;
        }
    }

}

findIndexByBinarySearch([2, 4, 5, 8, 9, 12, 16, 18, 21, 23], 4);

/**
 * @function mergeSort Implements Merge Sort algorithm.
 * Merge Sort Implementation */

function mergeSort (arr = []) {
    if (arr.length === 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge (left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++
        } else {
            result.push(right[indexRight]);
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

console.log(mergeSort([2, 15, 1, 37, 7, 2, 33, 8, 61, 93]));