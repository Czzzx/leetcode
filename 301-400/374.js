const guess = (num, k) => {
    if (num === k) {
        return 0;
    }
    if (num < k) {
        return 1;
    }
    if (num > k) {
        return -1;
    }
}

const guessNumber = function(n, k) {
    let left = 1;
    let right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const result = guess(mid, k);

        if (result === 0) {
            return mid;
        } else if (result === -1) {
            right = mid - 1;
        } else if (result === 1) {
            left = mid + 1;
        }
    }
};

console.log(guessNumber(1, 1));