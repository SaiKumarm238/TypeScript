type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 5,
    color: "yellow"
};

type Cat = {
    numLives: number;
};

type Dog = {
    breed: string;
};

type CatDog = Cat & Dog & {age: number};


const tommy: CatDog = {
    numLives: 7,
    breed: "some",
    age:5
}

console.log(tommy.breed)
console.log(tommy.age)