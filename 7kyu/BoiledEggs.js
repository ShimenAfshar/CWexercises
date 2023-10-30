// Implement a function, which takes a non - negative integer, representing the number of eggs to boil.It must return the time in minutes(integer), which it takes to have all the eggs boiled.


// my solution

function cookingTime(numberOfEggs) {
    var POT_CAPACITY = 8,
        MINUTES_PER_ROUND = 5;

    var rounds = Math.ceil(numberOfEggs / POT_CAPACITY);

    return MINUTES_PER_ROUND * rounds;
}