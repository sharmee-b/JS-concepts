function snippet1() {
    let x = {},
        y = {
            name: "Ronny"
        },
        z = {
            name: "John"
        };

    x[y] = {
        name: "Vivek"
    };
    x[z] = {
        name: "Akki"
    };

    console.log(x[y]);
    console.log(x[z]);

}

snippet1();

function runFunc() {
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "World" + 78);
    console.log("Hello" + "78");
}

runFunc();