/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        if (functions.length === 0) return x;
        functions.reverse();
        for (let func of functions) {
            x = func(x);
        }
        return x;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */