let title: string = "Sai";
title = "Kumar";
//title = 10;
title.toUpperCase();

let num_of: number = 10;
num_of += 1;
//num_of = "Zero"


let gameOver: boolean = false;
gameOver = true;
//gameOver = "true";

let nothing: null = null;
let foo: undefined = undefined;


//Type Inference
let tvShow = "Olive";
tvShow = "the OtherTwo";
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "false"


//the any type
let thing: any = "Hello";
thing = 1;
thing = false;
thing()
thing.toUpperCase()


const movies = ["F5", "F6", "F8", "F9"];
let foundMovies;

for (let movie of movies) {
    if (movie === "F9") {
        foundMovies = "F9"
    }
}
