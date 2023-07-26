// numbers [100,40,30,60,50,10] 
// index   [  0, 1, 2, 3, 4, 5 ] 
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function selectionSort(nums){
    // outer loop
 for(let i = 0; i < nums.length-1; i++){
    let minIndex = i;

    // inner loop
  for(let j = i; j < nums.length; j++){
        if(nums[j] < nums[minIndex]) {
            minIndex = j;
        }
        // i and j are used as indices to navigate through the array, 
        // while (nums[j] < nums[minIndex]) is an expression 
        // that compares the values of elements at those indices.
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
 
}
 return nums; 
}
console.log(selectionSort([100,40,30,60,50,10]))  

