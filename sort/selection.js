// 选择最小/大的放在未排序部分的末端
// 用数组实现的选择排序是不稳定的，用链表实现的选择排序是稳定的。
// 不过，一般提到排序算法时，大家往往会默认是数组实现，所以选择排序是不稳定的。
const selection = (arr) => {
    let minIndex;

    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const temp = arr[minIndex];

            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

console.log(selection([2, 5, 23, 7, 3, 45, 9]));
