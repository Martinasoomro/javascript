// Assignment 1
// Request the length of a side of a square
// Display the perimeter of a square in the console

let sideOfSquare = prompt("Type the length of one side of a square:");
let perimeter = sideOfSquare * 4;
console.log(perimeter);

// --------------------------------------------

// Assignment 2
// Request a user’s year of birth and count their age
// Display the result to the console

const currentYear = 2020;
let yearOfBirth = prompt("When were you born?");

let age = currentYear - yearOfBirth;
console.log(age);

// --------------------------------------------

// Assignment 3
// Request a distance in kilometers between the two cities from a user,
// and the time they want to cover it within
// Count and display the speed needed to be on time

let distance = prompt("How far is the distance in kilometres?");
let timeInMinutes = prompt("How much time (in minutes) do you have?");

let speed = distance / (timeInMinutes / 60);
console.log(speed + " km/h");

// ---------------------------------------------

// Assignment 4
// Create a simple currency converter
// A user types in USD and the program converts them to EUR

const exchangeRate = 0.92;

let usd = prompt("How many USD do you want to convert to EUR?");
let eur = usd * exchangeRate;

console.log(eur + " EUR");

// -------------------------------------------------

// Assignment 5
// A user types in the values of a and b for the formula a * x + b = 0
// The program has to calculate the x
// Display the result in the console

let a = prompt("Type in a");
let b = prompt("Type in b");
// a * x = 0 - b => (a * x) / a = -b / a => x = -b/a
let x = -b / a;
console.log(x);

// ------------------------------------------------

// Assignment 6
// Request current time from a user in format HH:mm
// (HH is hour in a day from 00 to 23, mm are minutes in hour)
// Display how many hours and minutes are left until tomorrow

let currentTime = prompt("What time is it (HH:mm)?");

let hours = parseInt(currentTime.slice(0, 2));
let minutes = parseInt(currentTime.slice(3, 5));

let hoursUntilTomorrow = 24 - hours;
let minutesUntilTomorrow = 60 - minutes;

let timeUntilTomorrow = hoursUntilTomorrow + ":" + minutesUntilTomorrow;

console.log(timeUntilTomorrow + " until tomorrow");
