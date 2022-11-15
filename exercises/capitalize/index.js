// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// slice() extracts a part of a string and returns the extracted part in a new string.

function capitalize(str) {

    //solution 1
    // arr = str.split(' ');

    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    // }

    // return arr.join(" ");


    // ----------------------------------------------solution 2 
    // let cap = "";

    // for (let i = 0; i < str.length; i++) {

    //     if (i === 0)
    //         cap += str[i].toUpperCase();
    //     // else if (str[i] === " ") {
    //     //     cap = cap + " " + str[i + 1].toUpperCase();
    //     //     i += 1;
    //     // } 
    //     else if (i != 0 && str[i - 1] === " ")
    //         cap += str[i].toUpperCase();
    //     else
    //         cap += str[i];

    // }

    //-------------solution 3

    let cap = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === " ")
            cap += str[i].toUpperCase();

        else
            cap += str[i]
    }


    return cap;


}

module.exports = capitalize;