const groupNumber = (str) => {
    const arr = str.split(', ');
    let start = 0;
    let end = 0;
    let ret = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] === 1) {
            end++;
        } else {
            if (start === end) {
                ret.push(arr[start]);
            } else {
                ret.push(`${arr[start]}~${arr[end]}`);
            }
            start = i + 1;
            end = i + 1;
        }

        if (end === arr.length - 1) {
            if (start === end) {
                ret.push(arr[start]);
            } else {
                ret.push(`${arr[start]}~${arr[end]}`);
            }
        }
    }

    return ret.join(', ');
}

console.log(groupNumber('1, 2, 3, 5, 7, 8, 10'));
