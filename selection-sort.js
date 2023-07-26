// numbers [100,40,30,60,50,10] 
// index   [  0, 1, 2, 3, 4, 5 ] 
function selectionSort(nums){
    // outer loop
 for(let i = 0; i < nums.length-1; i++){
    let minIndex = i;

    // inner loop
  for(let j = i; j < nums.length; j++){
        if(nums[j] < nums[minIndex]) {
            minIndex = j;
        }
    //if the value at index 'j': (nums[j])
    //is less than value at current: nums[minIndex],
    //j becomes the minIndex: minIndex =j
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    //array destructuring (left)
    //nums[i] element at current unsorted position (left)
   //nums[minIndex] smallest element in the unsorted part (left)
   //[nums[minIndex], nums[i]], value of the smallest element and (right)
   //current unsorted element (right)
   //(left becomes right)
}
 return nums; 
}
console.log(selectionSort([100,40,30,60,50,10]))