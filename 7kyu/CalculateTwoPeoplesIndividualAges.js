// DESCRIPTION:
// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values(oldest age first) if those exist or null / None or { -1, -1 } in C if:

//     sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

function getAges(sum, difference) {
    if (sum < 0 || difference < 0)
        return null;

    var x = (sum + difference) / 2;
    var y = sum - x;

    if (x < 0 || y < 0) return null;

    return [x, y];
};