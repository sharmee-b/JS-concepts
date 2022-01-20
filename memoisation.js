function memoisedAdd10() {
    var cache = {};
    return function (num) {
        if (num in cache) {
            console.log("cached value: num :", num, cache[num]);
            return cache.num
        } else {
            console.log("calculated value: num :", num, num + 10);
            cache[num] = num + 10;
            return cache[num]
        }
    }
}
var memoizedFuncAdd10 = memoisedAdd10();
memoizedFuncAdd10(10);
memoizedFuncAdd10(10);
memoizedFuncAdd10(20);
memoizedFuncAdd10(30);
memoizedFuncAdd10(20);

// ----------------------------------------------
function memoizedAddTo256() {
    var cache = {};

    return function (num) {
        if (num in cache) {
            console.log("cached value");
            return cache[num]

        } else {
            cache[num] = num + 256;
            return cache[num];
        }
    }
}

var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return