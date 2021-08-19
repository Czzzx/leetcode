const rotateArr = (arr, k) => {
    const len = arr.length;
    const realK = k % len;
    const needRotateArr = arr.splice(len - realK, realK);

    return needRotateArr.concat(arr);
}
const rotate = (arr, k) => {
    const realK = k % arr.length;
    for (let i = 0; i < realK; i++) {
        arr.unshift(arr.pop());
    }

    return arr;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
