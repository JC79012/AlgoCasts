// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    let chunky = [];
    let i = 0;

    // while (i < array.length) {

    //     if (i + size > array.length) {
    //         if (array.slice(i, -1).length != 0)
    //             chunky.push(array.slice(i));
    //     } else
    //         chunky.push(array.slice(i, i + size));

    //     i += size;

    // }

    // return chunky;
    //for(let val of array)

    while (i < array.length) {
        if (chunky.length == 0 || chunky[chunky.length - 1].length == size) {
            chunky.push([array[i]]);
        } else {
            chunky[chunky.length - 1].push(array[i]);
        }
        i++;
    }
    return chunky;
}

module.exports = chunk;