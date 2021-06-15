/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let prev = 0;
    let curr = 1;
    let next = 2;
    let index= 0;

    while (next < arr.length) {
        if (arr[prev] < arr[curr] && arr[curr] > arr[next]) {
            index = curr;
            break;
        }
        prev++;
        curr++;
        next++;
    }

    return index;
};
