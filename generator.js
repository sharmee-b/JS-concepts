function* genFunc() {
    yield 3;
    yield 4;
}
console.log(genFunc().next());

function* iteratorFunc() {
    let count = 0;
    for (let i = 0; i < 2; i++) {
        count++;
        yield i;
    }
    return count;
}

let iterator = iteratorFunc();
console.log(iterator.next()); // {value:0,done:false}
console.log(iterator.next()); // {value:1,done:false}
console.log(iterator.next()); // {value:2,done:true}