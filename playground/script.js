let arr = [1, 2, 3, 4]

// Polyfill for reduce
{
    console.log("Polyfill for reduce");

    let result = arr.reduce((a, b) => a + b)

    console.log(result);

    Array.prototype.myReduce = function (fn, initial) {
        let values = this;
        values.forEach(val => {
            initial = initial !== undefined ? fn(val, initial) : val;
        });
        return initial;
    }

    let result1 = arr.myReduce((a, b) => a + b);
    console.log("result1", result1)
}

// Polyfill for map
{
    console.log("Polyfill for map");

    let result = arr.map(val => val + 1);
    console.log("result - map()", result);

    Array.prototype.myMap = function (fn) {
        let values = this;
        let newArr = [];
        values.forEach(val => {
            newArr.push(fn(val))
        });
        return newArr;
    }

    let result1 = arr.myMap(val => val + 1);
    console.log("result - myMap()", result1)
}

// Polyfill for filter
{
    console.log("Polyfill for filter");

    let result = arr.filter(val => val % 2 === 0);
    console.log("result - filter()", result);

    Array.prototype.myFilter = function (fn) {
        let values = this;
        let newArr = [];
        values.forEach(val => {
            let fv = fn(val);
            if (fv)
                newArr.push(val)
        });
        return newArr;
    }

    let result1 = arr.myFilter(val => val % 2 === 0);
    console.log("result - myFilter()", result1)
}

// Polyfill for bind
{
    console.log("Polyfill for bind");

    const person = {
        fname: "Sharmee",
        lname: "Biswas"
    };

    let printName = function (hometown, state) {
        console.log(this.fname + this.lname + "," + hometown + "," + state)
    }

    let result = printName.bind(person, "JSR");
    result("Jharkhand");

    Function.prototype.myBind = function (...args) {
        let fn = this;
        let params = args.slice(1);
        return function (...args2) {
            fn.apply(args[0], [...params, ...args2]);
        }
    }

    let result1 = printName.myBind(person, "JSR");
    result1("Jharkhand");
}