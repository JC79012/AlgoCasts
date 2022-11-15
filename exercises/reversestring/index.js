// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    //My solution
    /*let start = 0;

    let str_Array = str.split('');

    let end = str_Array.length - 1

    while (start < end) {
        [str_Array[start], str_Array[end]] = [str_Array[end], str_Array[start]];

        start += 1;
        end -= 1;
    }

    return str_Array.join(""); */

    //solution using reverse funtion
    /*let strArray = str.split("");
    strArray.reverse();
    return strArray.join(''); */


    //solution using for loop
    // let arr = str.split("");
    let rev = ""

    //option 1
    // for (let chr = arr.length - 1; chr >= 0; chr--) {
    //     rev += arr[chr];
    // }
    // return rev;

    //option 2
    //iterates through every character, adds the string character in front of the current value 
    //ex: a --> pa --> ppa --> lppa --> elppa
    for (let chr of str) {
        rev = chr + rev;

        // debugger;
    }
    return rev;


    //option 3 
    // array helper --> reduce
    //reduce simple example to understand
    //vconst array1 = [1, 2, 3, 4];
    // 0 + 1 + 2 + 3 + 4
    // const initialValue = 0;
    // const sumWithInitial = array1.reduce(
    // (previousValue, currentValue) => previousValue + currentValue,
    // initialValue
    // );
    // console.log(sumWithInitial);


    // return str.split("").reduce((rev, chr) => chr + rev, "");
}


// reverse("asdf");
module.exports = reverse;