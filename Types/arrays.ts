// const activeUsers: [] = [];
// activeUsers.push("hi"); // Error Argument of type 'string' is not assignable to parameter of type 'never'

const activeUsers: string[] = [];
activeUsers.push("hi");

const ageList: number[] = [1,2,3,4];
ageList[0] = 100;
// ageList[1] = "string"  //Error Type 'string' is not assignable to type 'number'

// const bools: Array<boolean> = []
const bools: boolean[] = [] //both are same


type Point = {
    x: number,
    y: number
};

const coords: Point[] = []
coords.push({x:5, y:10})
coords.push({x:10}) //Argument of type '{ x: number; }' is not assignable to parameter of type 'Point'. Property 'y' is missing in type '{ x: number; }' but required in type 'Point'.
coords.push({x:5, y:"string"}) //Type 'string' is not assignable to type 'number'

//Multidimensional Arrays
                                    
const board: string[][] = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];

const boards: number[][][] = [[[1]]]