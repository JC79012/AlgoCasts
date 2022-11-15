// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    //old solution
    //if (n < 0)
    //n*=-1
    //return -1 * Number(n.toString().split("").reverse().join(""))
    //return Number(n.toString().split("").reverse().join("")


    //parseInt returns a whole number ignoring the negative sign since it is behind the number when reversed
    // if the negative sign was in front of the number it would return a negative number
    // the Number() function would register the negative sign behind and see it as NaN <-- not a number

    // Math.sign() --> returns 1 or -1 depending on if the number is positive or negative

    return Math.sign(n) * parseInt(n.toString().split("").reverse().join(""));
}

module.exports = reverseInt;