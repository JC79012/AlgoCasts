// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    // const vowel = new Map([
    //     ["a", 1],
    //     ["e", 1],
    //     ["i", 1],
    //     ["o", 1],
    //     ["u", 1]
    // ]);


    // let vowel_count = 0;

    // for (let char of str.toLowerCase()) {
    //     if (vowel.has(char)) {
    //         vowel_count += 1;
    //     }
    // }

    // return vowel_count;

    return str.replace(/[^aeiouAEIOU]/g, "").length;
}

module.exports = vowels;