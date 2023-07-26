function sumPositive(arr) {
    const findPosive = arr.filter(positive => positive > 0)
    const sumPositiveArray = findPosive.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)

    return sumPositiveArray

}

const arr = [2, -5, 10, -3, 7]
const getPositiveSum = sumPositive(arr)
console.log(getPositiveSum)