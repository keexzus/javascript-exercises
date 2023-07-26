
function bubbleSort(nums) {

    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = 0; j < nums.length-i; j++) {
            if(nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[ j + 1], nums[j]];
                // If nums[j] is greater than nums[j + 1], 
                // it means the elements are in the wrong order, 
                // so they need to be swapped to correct their positions.
        }
      }
    }
return nums;

}

console.log(bubbleSort([3, 2, 4, 1, 6, 5]))

// first iteration [2, 3, 4, 1, 6, 5]
// second iteration [2, 3, 4, 1, 6, 5]
// third iteration []
// Time Complexity 
// T:O(n^2)
//S:O(1)