const moveZeros = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            let j = i + 1;

            while(j < arr.length) {
                if (arr[j] !== 0) {
                    const temp = arr[j];

                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                } else {
                    break;
                }
                j++;
            }
        }
    }

    return arr;
}

console.log(moveZeros([0,1,0,3,12]));
