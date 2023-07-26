var generate = function(numRows) {
    let res = [];

    if (numRows >= 1)
        res.push([1]);

    if (numRows >= 2)
        res.push([1, 1]);

    // Logic to generate Pascal's Triangle rows
    for (let i = 2; i < numRows; i++) {
        let row = [];
        let prevArray = res[i - 1];

        row.push(1); // First element in the row is always 1

        for (let j = 1; j < prevArray.length; j++) {
            // Calculate the middle elements in the row as the sum of adjacent elements from the previous row
            row.push(prevArray[j - 1] + prevArray[j]);
        }

        row.push(1); // Last element in the row is always 1

        res.push(row);
    }

    return res;
};

console.log(generate(5));




// var generate = function(numRows) {
// let res = [ ]

// if (numRows >= 1 )
//     res.push([1])
// if (numRows >= 2 )
//     res.push([1,1])

// //logic
// for(let i = 2; i < numRows; i++) {
//     let first = 1
//     let last = 1

//     let prevArray = res[i - 1]
//     if(prevArray.length === 2) {
//         res.push([first, first + last, last])
//     } else {
//         let left = 0
//         let right = 0
//         let add = []

//         while(right < prevArray.length) {
//             add.push(prevArray[left] + prevArray[right])
//             left++
//             right++
//         }
//         res.push([first, ...add, last])
//     }
// }
// return res;

// }
// console.log(generate(5))

// // T = O(n^2)
// // S = O(n)