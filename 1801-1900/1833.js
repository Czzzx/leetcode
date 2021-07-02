/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    costs.sort((a, b) => a - b);
    let num = 0;
    let sum = 0;

    for (let i = 0; i < costs.length; i++) {
        if (costs[i] + sum <= coins) {
            num++;
            sum += costs[i];
        }
    }

    return num;
};
