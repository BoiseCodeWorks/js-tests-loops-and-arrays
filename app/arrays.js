// 0. Given an array, move the element at index 0 to the last position in the array. Return the modified array.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: ['is', 'a', 'split', 'sentence.', 'This']

function rearranger(arr) {
    // arr.push(arr.splice(0, 1)[0])
    // return arr

    arr.push(arr.shift())
    return arr
}



// ------------------------------------------


// 1. Given an array of numbers, return the largest number in the array.
// Example:
// input: [6, 4, 8, 33, 42, 10]
// output: 42

function largestNum(arr) {
    // return arr.reduce((prevLargestNum, currLargestNum) => {
    //     return (currLargestNum > prevLargestNum) ? currLargestNum : prevLargestNum;
    // })
    // let out = 0
    // for (i = 0; i < arr.length; i++) {
    //     let num = arr[i]
    //     if (num > out) {
    //         out = num
    //     }
    // }
    // return out;
}


// ------------------------------------------


// 2. Given an array of numbers, return an array where every element in the given array is multiplied by the length of the given array.
// Example:
// input:  [4, 2, 1, 7]
// output: [16, 8, 4, 28]

function elemsTimesLength(arr) {
    // return arr.map(el => el * arr.length)
    // let out = []
    // for (i = 0; i < arr.length; i++) {
    //     let num = arr[i]
    //     out.push(num * arr.length)
    // }
    // return out
}


// ------------------------------------------


// 3. Given a multidimensional array, return a single dimension array with all of the primitive data elements within the multidimensional array.
// Example:
// input:  [[['legume'], 3, []], 2, ['tree', [{}, [5]]]]
// output: ['legume', 3, 2, 'tree', 5]

function arrayFlattener(arr) {
    return arr.flat(Number.MAX_SAFE_INTEGER).filter(el => typeof (el) !== "object")
}

