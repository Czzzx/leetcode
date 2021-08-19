// const getSaleNum = (saleObj) => {
//     const saleArr = Array(12).fill(null);

//     Object.keys(saleObj).forEach((month) => {
//         saleArr[month - 1] = saleObj[month];
//     })

//     return saleArr;
// }
const getSaleNum = (saleObj) => {
    const saleArr = [];

    for(let i = 0; i < 12; i++) {
        if (saleObj[i + 1]) {
            saleArr.push(saleObj[i + 1])
        } else {
            saleArr.push(null);
        }
    }

    return saleArr;
}

console.log(getSaleNum({1:222, 2:123, 5:888}));
