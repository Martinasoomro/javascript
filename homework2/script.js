// Classwork exercise 1
// Request a user’s age and define whether
// he/she is an infant (0–2), a child (3-11),
// a teen (12–18), an adult (19-60) or a senior citizen (60– ...)
// Display the result in the console

// let age = prompt("Enter your age: ");

if (age <= 2) {
  alert("You are an infant");
} else if (age <= 11) {
  alert("You are a child");
} else if (age <= 18) {
  alert("You are a teen");
} else if (age <= 60) {
  alert("You are an adult");
} else {
  alert("You are a senior citizen");
}

// Classwork exercise 2
// Request a number from 0 to 9 from a user and display the symbol
// that is placed on that keyboard button
// Display a result in the console

let number = prompt("Enter a number from 0-9");

if (number == 0) {
  alert("=");
} else if (number == 1) {
  alert("!");
} else if (number == 2) {
  alert('"');
} else if (number == 3) {
  alert("#");
} else if (number == 4) {
  alert("¤");
} else if (number == 5) {
  alert("%");
}

// Classwork exercise 3
// Ask a user 3 questions, each with 3 answer options
// Write these options also in the prompt window, after
// a question. The user gets 2 points for each correct answer.
// Show the earned points after the test

let points = 0;

let answer1 = prompt("What is 1 - 1?")
let answer2 =
let answer3 = 

if (answer1 == 0) {
  points += 2; // points = points + 2
}

// Classwork exercise 4
// Request a number from a user, and define whether it is positive,
// negative, or zero
// Display a resulting message as an alert

let number = prompt("Enter a number");

if (number == 0) {
  alert("Number is 0");
} else if (number > 0) {
  alert("Number is positive");
} else {
  alert("Number is negative");
} 


// Classwork exercise 5
// Request a user’s age and check whether it is realistic (0-120 y.o.)
// display a message ‘Hi! You are # years old’, otherwise – ‘Hm… Is it even possible?’

let age = prompt("How old are you?");

if (age >= 0 && age <= 120) {
  alert("Hi! You are " + age + " years old");
} else {
  alert("Hm, is it even possible?");
}  

// -------------------------------------------------------

// Classwork One task to do using switch:
// Request a number of a month from a user. Print the name of the month
// to the webpage as a paragraph using document.write()

let number = prompt("Write a number of a month!");
let month;

switch (number) {
  case 1:
    month = "January"
    break;
  case 2:
    month = "February"
    break;
  case 3:
    month = "March"
    break;
    case 4:
    month = "April"
    break;
    case 5:
    month = "May"
    break;
    case 6:
    month = "June"
    break;
    case 7:
    month = "July"
    break;
    case 8:
    month = "August"
    break;
    case 9:
    month = "September"
    break;
    case 10:
    month = "October"
    break;
    case 11:
    month = "November"
    break;
    case 12:
    month = "December"
    break;
}

//-------------------------------------------------

//HOMEWORK 2