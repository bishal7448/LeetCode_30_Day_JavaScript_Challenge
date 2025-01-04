/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    const cache = new Map();
    return function (...args) {
        const getKey = JSON.stringify(args);
        if (cache.has(getKey)) {
            return cache.get(getKey);
        } else {
            let result = fn(...args);
            cache.set(getKey, result);
            return result;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */