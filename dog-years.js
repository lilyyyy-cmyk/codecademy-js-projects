const myAge = 20; // my current age
let earlyYears = 2; // amount of years my age will go up by at a certain number
earlyYears = earlyYears * 10.5;
let laterYears = myAge - 2; // accounting for the later years in my life
laterYears *= 4; // calculate number of dog years account for by my later years
let myAgeInDogYears = earlyYears + laterYears; // addition between early years and later years in my life
let myName = 'Lily'.toLowerCase(); // my name converted to all lowercase
console.log(`My name is ${myName}. I am ${myAge} 
            years old in human years, which is 
            ${myAgeInDogYears} years old in dog years.`); // prints to the console my name, age in human years, and age in dog years
