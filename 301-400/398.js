const Solution = function(nums) {
    this.nums = nums;
};

Solution.prototype.pick = function(target) {
    const nums = this.nums;
    let indexes = [];

    for(let i = 0; i< nums.length; i++) {
        if (nums[i] === target) {
            indexes.push(i);
        }
    }

    return indexes[Math.floor(Math.random() * indexes.length)];
};
