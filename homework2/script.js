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

// 1. Write a calculator. Request 2 numbers and an operation as a symbol (+ - * /). 
// The program solves it depending on the operation and shows the result.

let numberOne = prompt('Write your first number!');
let numberTwo = prompt('Write your second number!');

Let operation = 
prompt('Choose operation');

switch(operation) {
  case '+':
    let answer = numberOne + numberTwo;
    break;
  case '-':
    let answer = numberOne - numberTwo;
    break;
  case '*':
    let answer = numberOne * numberTwo;
    break:
  case '/':
    let answer = numberOne / numberTwo;
    break:
}

alert answer;

//OR

let numberOne = prompt('Write your first number!');
let numberTwo = prompt('Write your second number!');
Let operation = prompt('Choose operation');

if (operation == '+');
alert (numberOne + numberTwo);
else if (operation == '-');
alert (numberOne - numberTwo);
else if (operation == '*');
alert (numberOne * numberTwo);
else if (operation == '/');
alert (numberOne / numberTwo);
else alert ('Error');

// 2. Count the factorial of the number given by a user. 
// For example, 4! is 1 * 2 * 3 * 4 = 24, or 6! is 1 * 2 * 3 * 4 * 5 * 6 =  720.

let number = prompt('Write a number you want to count the factorial of!');

function countTheFactorial(number) {
  if (number < 0)
  return -1;
  else if (number == 0)
  return 1;
  else {
    return (number * countTheFactorial(number - 1));
  }

countTheFactorial(6);
}

// 3. Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: 
// "1 sheep...2 sheep...3 sheep..." to the page as a paragraph. If a user types a negative number in, 
// alert an error.

let number = prompt('Write a non-negative integer!');

const countSheep = function(number) {
  let result = '';
  for (let i = 1; i <= number; i++) {
    result += i.toString() + ' sheep...';
  }
  if (number <= 0)
  return result;
  else {
    alert ('Error!');
  }
}

// 4. Show a user the prompt where they have to write a correct answer for 2 + 2 * 2. 
// Show the prompt as many times until the user answers correctly.

let answer = prompt('Write the correct answer for 2 + 2 * 2');

if (answer == 6)
alert ('Correct!');
else {
  alert ('Incorrect!');
}