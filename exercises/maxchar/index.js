// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let strMap = new Map();

    for (let char of str)
        strMap.set(char, strMap.get(char) + 1 || 1);

    let key = "";
    let max = 0;

    for (let k in strMap) {
        if (strMap.get(k) > max) {
            max = strMap.get(k);
            key = k;
        }
    }

    return key;

    // for (let i of str) {
    //     if (!strMap[i])
    //         strMap[i] = 1;

    //     else {
    //         strMap[i]++;
    //     }
    // }

    // // console.log(strMap);
    // let maxCharVal = 0;
    // let maxVal = "";

    // for (let keys in strMap) {
    //     if (strMap[keys] > maxCharVal) {
    //         maxCharVal = strMap[keys];
    //         maxVal = keys;
    //     }
    // }

    // return maxVal;

}

module.exports = maxChar;