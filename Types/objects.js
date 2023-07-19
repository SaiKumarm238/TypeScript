// Object
var data = {
    "Name": "Sai",
    "No": 20
};
console.log(data.Name);
//function 
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
console.log(printName({ first: "Sai", last: "Mani" }));
console.log(printName({ first: "Sai", last: "Mani", age: 28 })); // we can not pass the Argument which is nor assigned. 
var person1 = { first: "Kumar", last: "Mani", age: 28, isAlive: true }; // but there is no error while passing a new variable. 
console.log(printName(person1));
//object data type
var coordinate = { x: 38, y: 48 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
console.log(randomCoordinate());
var coordinates = { x: 10, y: 20 };
function randomCoordinates() {
    return { x: Math.random(), y: Math.random() };
}
console.log(randomCoordinates());
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var myPoint1 = { x: 11, y: 15, z: 50 };
var myPoint = { x: 10, y: 20 };
var user1 = {
    id: 1,
    username: "Sai"
};
console.log(user1.id);
// user1.id = 5 // Cannot assign to 'id' because it is a read-only property.
