function findSecondSmallest(arr) {
    // Used Ternary operator//
    return arr.length < 2
        ? "The array should contain at least two elements."
        : arr.sort((a, b) => a - b)[1];
}

const numbers = [5, 2, 8, 7, 9, 3];
const getSecendSmallest = findSecondSmallest(numbers)
console.log(getSecendSmallest)
