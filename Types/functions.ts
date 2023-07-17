// Functions
function square_of_number(num: number) {
    return num * num;
}

console.log(square_of_number(3));

function greet(person: string) {
    return `Hi ${person}`;
}

console.log(greet("Sai"));


// Parameter Annotation
const doSomething = (person: string, age: number, isFunny: boolean) => {} 

console.log(doSomething("Sai",28 , true));

// Function with default value
function test_fun(name: string = "Default") {
    return `Name is ${name}`;
}

console.log(test_fun());
console.log(test_fun("sai"));


//Return type Annotations

function square(num: number): number {
    return num * num;
}

console.log(square(5));

// Anonymous function
const add = (x: number, y:number): number => {
    return x + y;
}

console.log(add(10, 20))


// return both string and number
function rando(num: number) {
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num;
};

// map
const colors = ["red", "black", "blue"];

colors.map(color => {
    return color.toUpperCase();
})

//void

function printTwice(msg :string): void {
    console.log(msg);
    console.log(msg);
}


// function printTwice(msg :string): void {
//     console.log(msg);
//     console.log(msg);
//     return(msg)
// }


// Never Type (it will never run this function)

function makeError(msg :string): never {
    throw new Error(msg);
    // return msg
}

function gameLoop(): never {
    while (true) {
        console.log("Game Loop Running");
    }
    // return true
}

