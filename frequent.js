function findMostFrequentElement(arr) {
    const frequencyMap = {};

    arr.forEach((num) => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });

    let mostFrequentElement;
    let maxFrequency = 0;

    for (const num in frequencyMap) {
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(findMostFrequentElement(array));
