const findSymmetryNumber = (min, max) => {
    const ret = [];

    for (let i = min; i <= max; i++) {
        if (i.toString() === i.toString().split('').reverse().join('')) {
            ret.push(i);
        }
    }

    return ret;
}

console.log(findSymmetryNumber(1, 10000));
