// Object
const data = {
    "Name": "Sai",
    "No": 20
};

console.log(data.Name);


//function 

function printName(person: {first: string; last: string}): void {
    console.log(`${person.first} ${person.last}`);
}

console.log(printName({first: "Sai", last: "Mani"}));
console.log(printName({first: "Sai", last: "Mani",  age: 28})); // we can not pass the Argument which is nor assigned. 

const person1 = {first: "Kumar", last: "Mani", age: 28, isAlive: true} // but there is no error while passing a new variable. 
console.log(printName(person1))

//object data type

let coordinate: {x: number; y:number} = {x:38, y:48};

function randomCoordinate(): {x: number; y: number} {
    return {x: Math.random(), y:Math.random()};
}

console.log(randomCoordinate());

//Aliases 

type Point = {
    x: number;
    y: number;
}

let coordinates: Point = {x:10, y: 20};

function randomCoordinates(): Point {
    return {x: Math.random(), y:Math.random()};
}

console.log(randomCoordinates());

function doublePoint(point: Point): Point {
    return {x: point.x * 2 , y:point.y *2};
}

// console.log(doublePoint())


//Optional Properties
type Points = {
    x: number;
    y: number;
    z?: number; // by ? we can make the Properties as Optional.
}

let myPoint1: Points = {x:11, y:15, z:50}
let myPoint: Points = {x:10, y: 20}


//readonly Modifier

type User = {
    readonly id: number;
    username: string;
};

const user1: User = {
    id: 1,
    username: "Sai"
};

console.log(user1.id);
user1.id = 5 // Cannot assign to 'id' because it is a read-only property.