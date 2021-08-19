const intersection = (arr1, arr2) => {
    const ret = [];

    arr1.forEach(val => {
        if (arr2.includes(val)) {
            ret.push(val);
        }
    });

    return ret;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
