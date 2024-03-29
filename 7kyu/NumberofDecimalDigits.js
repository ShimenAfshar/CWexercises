// DESCRIPTION:
// Determine the total number of digits in the integer(n >= 0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits.Be careful to avoid overflows / underflows.

// All inputs will be valid.

// MySolution:

function digits(n) {
    // code goes here
    var count = 0;
    if (n >= 0) count = 1;

    while (n / 10 >= 1) {

        n /= 10;
        count++;
    }

    return count;
}