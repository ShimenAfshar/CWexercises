// Task
// Define a function which takes 3 arguments: the length a, width b, and height c of the bug's "world", and finds the shortest distance needed to walk from start to finish. The dimensions will be positive numbers.

// Note: The bug cannot fly and has to maintain contact with a surface at all times but can walk up walls.


// my solution


function shortestDistance(a, b, c) {
    return Math.min(
        Math.hypot((a + b), c),
        Math.hypot((a + c), b),
        Math.hypot((c + b), a),
    );
}