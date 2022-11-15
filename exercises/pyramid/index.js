// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//      '  #  '
//      ' ### '
//      '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'


function pyramid(n) {

    // if (n === 1) {
    //     return "#";
    // }

    const blank = " ";
    const hash = "#";
    const last_row = n + (n - 1);
    //row == n 
    //Number of blank spaces
    curr_row = Math.floor(last_row / 2);

    // hash_count = 1;

    // for (let i = 1; i <= n; i++) {
    //     console.log(blank.repeat(curr_row) + hash.repeat(hash_count) + blank.repeat(curr_row));
    //     hash_count += 2;
    //     curr_row -= 1
    // }


    // for (let row = 0; row < n; row++) {
    //     pyr = "";

    //     for (let column = 0; column < last_row; column++) {
    //         if ((pyr.length >= curr_row - row) && (pyr.length <= curr_row + row)) {
    //             pyr += "#";
    //         } else {
    //             pyr += " ";
    //         }


    //     }
    //     console.log(pyr);
    // }

    //recur(n, last_row, curr_row);
    build(n);

}

function recur(n, end, mid) {
    if (mid < 0) {
        return
    }

    console.log(" ".repeat(mid) + "#".repeat(end - (2 * mid)) + " ".repeat(mid));

    recur(n, end, mid - 1);

}

function build(n, row = 0, pyr = "") {
    if (row === n) {
        return;
    }
    if (pyr.length == 2 * n - 1) {
        console.log(pyr);
        return build(n, row + 1);
    } else if (pyr.length <= Math.floor((2 * n - 1) / 2) + row && pyr.length >= Math.floor((2 * n - 1) / 2) - row) {
        pyr += "#";
    } else {
        pyr += " ";
    }
    build(n, row, pyr);

}

module.exports = pyramid;