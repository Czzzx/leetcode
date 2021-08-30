Array.prototype.myFlat = function(deep) {
    let flattenArr = [];
    let n = 0;

    const flatten = (arr) => {
        for(let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && n < deep) {
                n++;
                flatten(arr[i]);
            } else {
                n = 0;
                flattenArr.push(arr[i]);
            }
        }
    }

    flatten(this);

    return flattenArr;
}

// console.log([1, [1, 2], [[1, 2, 3]]].myFlat(1));
console.log([1, [1, 2], [[1, 2, 3]]].myFlat(Infinity));
