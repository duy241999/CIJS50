let number = [1, 2, 3, 2, 4, 1, 5, 4, 6];

function dupNumber(data) {

    return [...new Set(data)]
}