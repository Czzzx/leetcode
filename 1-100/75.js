/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let whiteIndexL = -1;
    let whiteIndexR = -1;
    let whiteLengthL = 0;
    let whiteLengthR = 0;

    if (nums.length === 1) return nums;

    while (left <= right) {
        if (nums[left] === 0) {
            if (whiteLengthL) {
                nums[whiteIndexL - whiteLengthL + 1] = 0;
                nums[left] = 1;
                whiteIndexL = left;
            }
            left ++;
        } else if (nums[left] === 1) {
            whiteIndexL = left;
            whiteLengthL ++;
            left ++;
        } else {
            let temp = nums[right];

            if (whiteLengthR) {
                nums[whiteIndexR + whiteLengthR - 1] = 2;
                nums[left] = 1;
                whiteIndexL = left;
                whiteLengthL ++;
                whiteLengthR --;
                left ++;
            } else {
                nums[right] = 2;
                nums[left] = temp;
                right --;
            }
        }
        if (left > right) break;
        if (nums[right] === 0) {
            let temp = nums[left];

            if (whiteLengthL) {
                nums[whiteIndexL - whiteLengthL + 1] = 0;
                nums[right] = 1;
                whiteLengthL --;
                whiteLengthR ++;
                whiteIndexR = right;
                right--;
            } else {
                nums[left] = 0;
                nums[right] = temp;
                left ++;
            }
        } else if (nums[right] === 1) {
            whiteLengthR ++;
            whiteIndexR = right;
            right --;
        } else if (nums[right] === 2) {
            if (whiteLengthR) {
                nums[whiteIndexR + whiteLengthR - 1] = 2;
                nums[right] = 1;
                whiteIndexR = right;
            }
            right --;
        }
    }

    return nums;
};

const nums = [2,0,2,1,1,0];

console.log(sortColors(nums));