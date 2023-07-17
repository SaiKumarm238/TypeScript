// Functions
function square_of_number(num) {
    return num * num;
}
console.log(square_of_number(3));
function greet(person) {
    return "Hi ".concat(person);
}
console.log(greet("Sai"));
// Parameter Annotation
var doSomething = function (person, age, isFunny) { };
console.log(doSomething("Sai", 28, true));
// Function with default value
function test_fun(name) {
    if (name === void 0) { name = "Default"; }
    return "Name is ".concat(name);
}
console.log(test_fun());
console.log(test_fun("sai"));
//Return type Annotations
function square(num) {
    return num * num;
}
console.log(square(5));
// Anonymous function
var add = function (x, y) {
    return x + y;
};
console.log(add(10, 20));
// return both string and number
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
;
// map
var colors = ["red", "black", "blue"];
colors.map(function (color) {
    return color.toUpperCase();
});
//void
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
// function printTwice(msg :string): void {
//     console.log(msg);
//     console.log(msg);
//     return(msg)
// }
// Never Type (it will never run this function)
function makeError(msg) {
    throw new Error(msg);
    // return msg
}
function gameLoop() {
    while (true) {
        console.log("Game Loop Running");
    }
    // return true
}
