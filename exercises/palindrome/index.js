// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    //my solution
    //return str == str.split("").reverse().join("");

    //my second solution

    // let rev = ""
    // for (let i of str) {
    //     rev = i + rev;
    // }

    // return str == rev;

    //my third possible solution
    // let str_arr = str.split("");
    // let start = 0;
    // let end = str_arr.length - 1;

    // while (start < end) {
    //     if (str_arr[start] != str_arr[end])
    //         return false;
    //     start += 1;
    //     end -= 1;
    // }

    //return true;
    //------------------------udemy solution--------------

    //solution 1
    // let arr = str.split("").reverse().join("");

    // return str == arr;

    //solution 2 
    //not ideal solution bc it does twice the work
    // this is to tell the interviewer that this is not an ideal solution but one way to solve it
    // and then provide a better solution like the one i did above w/ start and end values 
    return str.split("").every((char, i) => { return char == str[str.length - 1 - i] });
}

module.exports = palindrome;