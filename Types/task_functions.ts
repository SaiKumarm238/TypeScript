//Task 1

function twoFer(person: string = "you"): string {
    return `One for ${person}, one for me.`;
}

console.log(twoFer());
console.log(twoFer("Sai"));


// Task 2
// Leap year

const isLeapYear = (year:number): boolean => {
    if(year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if(year % 400 === 0) {
        return true;
    }
    return false;
};

console.log(isLeapYear(2012))
console.log(isLeapYear(2023))

const is_LeapYear = (year: number): boolean => {
    return (year % 4 ===0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(is_LeapYear(2012))
console.log(is_LeapYear(2023))