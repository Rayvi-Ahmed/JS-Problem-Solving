function romanToInt(romanNumeral) {

    const romanIntStatus = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let getInt = 0;
    for (let i = 0; i < romanNumeral.length; i++) {
        const currentValue = romanIntStatus[romanNumeral[i]];
        const nextValue = romanIntStatus[romanNumeral[i + 1]];

        if (nextValue > currentValue) {
            getInt += nextValue - currentValue;
            i++;
        } else {
            getInt += currentValue;
        }
    }

    return getInt;
}
const romanNumeral = "XXI";
const getIntValue = romanToInt(romanNumeral)
console.log(getIntValue)

