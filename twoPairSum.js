function findTwoNumbersWithSum(arr, target) {
    let arrVal = 0;
    let targetVal = arr.length - 1;

    while (arrVal < targetVal) {
        const sum = arr[arrVal] + arr[targetVal];

        if (sum === target) {
            return [arrVal, targetVal];
        } else if (sum < target) {
            arrVal++;
        } else {
            targetVal--;
        }
    }

    return "No such pair found.";
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const getResult = findTwoNumbersWithSum(sortedArray, targetValue)
console.log(getResult)
