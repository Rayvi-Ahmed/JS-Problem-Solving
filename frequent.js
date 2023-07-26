function getFrequentNum(arr) {
    const sortAryy = arr.slice().sort()
    let result = [];

    for (let i = 0; i < sortAryy.length - 1; i++) {
        if (sortAryy[i + 1] === sortAryy[i]) {
            result.push(sortAryy[i])
        }
    }
    return result;
}

const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5]
const frequentNumber = getFrequentNum(arr)
console.log(frequentNumber)