// core: 相邻位置两两对比
// 在相邻元素相等时，它们并不会交换位置，所以，冒泡排序是稳定排序。
const bubble = (arr) => {
    let temp;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
}

console.log(bubble([2, 5, 23, 7, 3, 45, 9]));
