// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    // stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    // stringB = stringB.replace(/[^\w]/g, "").toLowerCase();


    // let stringA_map = new Map();


    // for (let char of stringA) {
    //     // if (!stringA_map[char])
    //     //     stringA_map.set(char, 1);
    //     // else
    //     //     stringA_map[char] += 1;
    //     stringA_map.set(char, stringA_map.get(char) + 1 || 1);
    // }

    // // console.log(stringA_map, stringA_map.size);

    // for (let char of stringB) {
    //     if (stringA_map.has(char)) {
    //         stringA_map.set(char, stringA_map.get(char) - 1);

    //         if (stringA_map.get(char) < 1)
    //             stringA_map.delete(char);

    //     } else if (!stringA_map.has(char))
    //         return false;
    // }

    // //console.log(Object.keys(stringA_map).length, stringA_map.size);
    // if (stringA_map.size !== 0)
    //     return false;

    // return true;

    return cleanUp(stringA) === cleanUp(stringB);

}

function cleanUp(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;