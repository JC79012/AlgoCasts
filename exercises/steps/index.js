// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {


    //--------solution 1
    // const step = "#";
    // const blank = " ";
    // let stair = "";

    // for (let num = 1; num <= n; num++) {
    //     stair = step.repeat(num) + blank.repeat(n - num);
    //     console.log(stair);
    // }

    //solution 2
    // for (let row = 0; row < n; row++) {
    //     string = "";
    //     for (let column = 0; column < n; column++) {
    //         if (column <= row)
    //             string += "#";
    //         else
    //             string += " ";
    //     }
    //     console.log(string);
    // }

    //-------------solution 3--------
    //recurse(1, n);

    //------solution 4 <-- not working

    buil(n);
    // if (row === n)
    //     return;


    // if (stair.length === n) {
    //     console.log(stair);
    //     return steps(n, row + 1);
    // } else if (stair.length <= row) {
    //     stair = '#'.repeat(row);
    // } else {
    //     stair += ' '.repeat(n - row);
    // }
    // return steps(n, row + 1, stair);



}

function recurse(start = 1, end) {

    if (start > end)
        return;
    else {
        console.log("#".repeat(start) + " ".repeat(end - start));
        //return recurse(start + 1, end);
    }

    return recurse(start + 1, end);
}

function buil(n, row = 0, str = '') {


    if (n === row)
        return;

    if (str.length === n) {
        console.log(str);
        return buil(n, row + 1);
    } else if (str.length <= row) {
        str += "#";
        //console.log(str);
    } else {
        str += ' ';
        //console.log(str);
    }
    buil(n, row, str);

}

module.exports = steps;