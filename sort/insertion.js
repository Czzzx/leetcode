// 由于只需要找到不大于当前数的位置而并不需要交换，因此，直接插入排序是稳定的排序方法。
const insertion = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        let pos = i;

        while(pos > 0 && arr[pos - 1] > val) {
            arr[pos] = arr[pos - 1];
            pos--;
        }
        arr[pos] = val;
    }

    return arr;
}

console.log(insertion([2, 5, 23, 7, 3, 45, 9]));
