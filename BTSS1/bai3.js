let number = [1, 2, 3, 2, 4, 1, 5, 4, 6];

function ptNumber(data) {

    return [...new Set(data)]
}
console.log(ptNumber(number));