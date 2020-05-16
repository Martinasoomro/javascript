//CLASSWORK 2020-04-08
//1 Write a function which accepts an argument and returns the type of the argument.

function typeOfArg(inputVariable) {
    let returnVariable = typeof inputVariable;
    return returnVariable;
    }
    let stringResult = typeOfArg(“Hello World”);
    let numberResult = typeOfArg(12345);
    let undefinedResult = typeOfArg();
    console.log(stringResult);
    console.log(numberResult);
    console.log(undefinedResult);
    //Write a function that accept two integers and returns the larger one.
    function returnLargestNumber(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
    return firstNumber;
    } else {
    return secondNumber;
    }
    }
    let inputFirstNumber = Number(prompt(“Type in a number”));
    let inputSecondNumber = Number(prompt(“Type in a second number”));
    console.log(returnLargestNumber(inputFirstNumber, inputSecondNumber));

//2 Write a function that accept two integers and returns the larger one

function largest(x, y) {
    if (x > y) {
    console.log(x);
    } else y > x;
    {
    console.log(y);
    }
    }
    largest (10, 5);

//3 Write a function that show how old a dog in human years, it should take one argument
// - puppy’s age. 1 human year is 7 dog years. The function should return a string like 
// “Your doggie is NN years old in dog years!”

function countOccurrences(inputString, inputCharacter) {
    let sum = 0;
    for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === inputCharacter) {
    sum += 1;
    }
    }
    return sum;
    }
    let sum = countOccurrences("Occurrences", "c");
    console.log(sum);

// 4 Write a function that accepts a string as a parameter and counts the number of vowels within 
// the string.

//-----------------------------------------------------

//PART 2 of classwork

1 Write a function that accepts a string as a parameter and counts the number of 
vowels within the string.

function countVowels(inputString) {
    let sumVowels = 0;
    for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "e") {
    sumVowels += 1;
    } else if (inputString[i] === "o") {
    sumVowels += 1;
    }
    }
    return sumVowels;
    }
    let sumVowels = countVowels("Hello World");
    console.log(sumVowels);

2 Write a function that accepts hours, minutes, and seconds and returns 
that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.

function count (hours, minutes, seconds) {
    let hour = 3600;
    let minute = 60;
    let second = 1;
    for (let i = 0 <arguments.length; i++) {
    result += 
    }
    }
    count (1, 25, 43)

3 Write a function that accepts two arguments: a string and a character. The function has 
to count the number of occurrences of the specified character within the string. For example, 
there are 2 occurrences of a character “o” in the string “Hello world”.

function countOccurrences(inputString, inputCharacter) {
    let sum = 0;
    for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === inputCharacter) {
    sum += 1;
    }
    }
    return sum;
    }
    let sum = countOccurrences("Occurrences", "c");
    console.log(sum);

//--------------------------------------------------------------------------------------

//Homework 3

// 1. Create a function that takes an integer number as an argument and returns “Even” for even numbers 
// or “Odd” for odd numbers.

// 2. Trolls are attacking your comment section! Create a function that takes a string and returns a new string 
// with all vowels removed. For example, “This website is for losers LOL!” returns “Ths wbst s fr lsrs LL!“.

// 3. Write a function which repeats the given string exact number of times. For example, repeatString("Hello", 5) 
// returns “HelloHelloHelloHelloHello”.