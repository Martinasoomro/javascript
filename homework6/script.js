//CLASSWORK EXAMPLE

// function Person(name, age) {
//     //   this.name = name;
//     //   this.age = age;
//     //   // ...
//     //   this.greet = function() {
//     //     console.log(this.name);
//     //   }
//     // }
//     ​
//     // let obj = {
//       // properties
//     // };
//     ​
//     class Person {
//       constructor(name, age, interests) {
//         this.name = name;
//         this.age = age;
//         this.interests = interests;
//       }
//     ​
//       greet() {
//         console.log(this.name);
//       }
//     ​
//       addHobby(hobby) {
//         this.interests.push(hobby);
//       }
//     }
//     ​
//     let person = new Person('Jane', 38, ['football', 'drawing']);
//     // person.greet();
//     // console.log(person);
//     // person.addHobby('hiking');
//     // person.interests.push('hiking');
//     ​
//     class Student extends Person {
//       constructor(name, age, interests, faculty, lastname) {
//         super(name, age, interests); // Super keyword calls constructor of a parent class
//         this.faculty = faculty;
//         this.lastname = lastname;
//       }
//       // Computed property
//       get fullname() {
//         return `${this.name} ${this.lastname}`;
//       }
//     ​
//       set fullname(fullname) {
//         // this.name = fullname.split(' ')[0];
//         // this.lastname = fullname.split(' ')[1];
//         [this.name, this.lastname] = fullname.split(' '); // ['Joe', 'Doe']
//       }
//     ​
//       greet() {
//         super.greet(); // With super we can call methods of a parent class
//         console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
//       }
//     }
//     ​
//     let student = new Student('Alex', 23, ['rugby', 'drawing'], 'computer science', 'Wood');
//     // student.greet();
//     // console.log(`${student.name} ${student.lastname}`);
//     // console.log(student.fullname);
//     // student.faculty = 'arts';
//     // student.name = 'Joe';
//     // student.lastname = 'Doe';
//     student.fullname = 'Joe Doe';
//     console.log(student.fullname);
//-----------------------------------------------------------------

/*
We can create a person using constructor function.
*/
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   // ...
//   this.greet = function() {
//     console.log(this.name);
//   }
// }

//-------------------------------------------------------------
​
// /*
// But classes provide more features and are easier in syntax.
// */
// class Person {
//   constructor(name, age, interests) {
//     this.name = name;
//     this.age = age;
//     this.interests = interests;
//   }
// ​
//   greet() {
//     console.log(this.name);
//   }
// ​
//   addHobby(hobby) {
//     this.interests.push(hobby);
//   }
// }
// ​
// let person = new Person('Jane', 38, ['football', 'drawing']);
// // person.greet();
// // console.log(person);
// // person.addHobby('hiking');
// ​
// class Student extends Person {
//   constructor(name, age, interests, faculty, lastname) {
//     super(name, age, interests); // Super keyword calls constructor of a parent class
//     this.faculty = faculty;
//     this.lastname = lastname;
//   }
//   // Computed property
//   get fullname() {
//     return `${this.name} ${this.lastname}`;
//   }
// ​
//   set fullname(fullname) {
//     // this.name = fullname.split(' ')[0];
//     // this.lastname = fullname.split(' ')[1];
//     [this.name, this.lastname] = fullname.split(' '); // ['Joe', 'Doe']
//   }
// ​
//   greet() {
//     super.greet(); // With super we can call methods of a parent class
//     console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
//   }
// }
// ​
// let student = new Student('Alex', 23, ['rugby', 'drawing'], 'computer science', 'Wood');
// // student.greet();
// // console.log(`${student.name} ${student.lastname}`);
// // console.log(student.fullname);
// // student.faculty = 'arts';
// // student.name = 'Joe';
// // student.lastname = 'Doe';
// student.fullname = 'Joe Doe';
// console.log(student.fullname);
// ​
// // class Student2 {
// //   constructor(name, lastname, age) {
// //     this.name = name;
// //     this.lastname = lastname;
// //     this.age = age;
// //   }
// ​
// //   get fullname() {
// //     return `${this.name} ${this.lastname}`;
// //   }
// ​
// //   set fullname(fullname) { // fullname = 'Jane Doe'
// //     this.name = fullname.split(' ')[0]; // ['Jane', 'Doe']
// //     this.lastname = fullname.split(' ')[1];
// //     // this.name = fullname.name
// //   }
// ​
// //   // get age() {
// //   //   return this.age;
// //   // }
// ​
// //   // set age(number) {
// //   //   this.age = number;
// //   // }
// // }
// ​
// // let studentObj = new Student2('Bob', 'Smith', 55);
// // console.log(studentObj.age); // Getter (implicitly)
// // console.log(studentObj.fullname); // Don't need to write parentheses
// // studentObj.age = 23; // Setter (implicitly)
// // studentObj.fullname = 'Jane Doe';
// // studentObj.fullname = ['Jane', 'Doe'];
// // studentObj.fullname = {name: 'Jane', lastname: 'Doe'}
// ​
// // Date
// let now = new Date();
// console.log(now);
// ​
// // 1st Jan 1970 - Unix Epoch
// let date2 = new Date(0); // milliseconds
// console.log(date2);
// ​
// let date3 = new Date(-10000);
// console.log(date3);
// ​
// // year, month, date, hours, minutes, milliseconds
// // year and month - required parameters
// // months are counted starting from 0
// let date4 = new Date(1944, 0, 13);
// console.log(date4);
// ​
// // DD-MM-YYYY
// // getFullYear - gets a year
// // getMonth - gets a month. 0-11 (Jan-Dec)
// // getDate - returns a day of a month
// // getDay - returns a day of a week. Sunday is the beginning. 0-6
// // getHours
// // getMinutes
// // getMilliseconds
// // console.log(date4.getFullYear());
// // console.log(date4.getMonth());
// let year = date4.getFullYear();
// let month = date4.getMonth() + 1; // 0
// // `${month}`
// // '0' -> '00'
// // '1' -> '01'
// // padStart - adds 'missing' characters to the beginning of a string
// // padEnd - adds 'missing' character to the end of a string
// let fixedMonth = month.toString().padStart(2, '0'); // '00'
// let date = date4.getDate();
// let fixedDate = date.toString().padStart(2, '0');
// let result = `${fixedDate}-${fixedMonth}-${year}`;
// ​
// let date5 = new Date('2004-01-23'); // YYYY-MM-DD, 12 am - 0
// // setFullYear - sets a year
// // setMonth - sets a month. 0-11 (Jan-Dec)
// // setDate - set a day of a month
// // setDay - set a day of a week. Sunday is the beginning. 0-6
// // setHours
// // setMinutes
// // setMilliseconds
// date5.setFullYear(2020);
// ​
// console.log(date5.getHours()); // Hours corrected to the timezone in which I'm situated
// console.log(date5.getUTCHours()); // UTC - Universal Timezone Coordinated

//------------------------------------------------------------------

// 1. Create a PrintMaсhine class that consists of font size, font color, font-family, and print() method that accepts text and prints it to the webpage using document.write(). The text should be displayed using the font properties of the class. Create an instance of that class and call the print() method.

class PrintMaсhine {
    constructor(fontSize, fontColor, fontFamily) {
      this.fontSize = fontSize;
      this.fontColor = fontColor;
      this.fontFamily = fontFamily;
    }
    print(text) {
      document.write(
        <p style = "font-size: ${this.fontSize}; color: ${this.fontColor}; font-family: ${this.fontFamily} ">${text}</p>
      );
    }
  }
  let printer = new PrintMaсhine(“40px”, “black”, “Times New Roman”);
  printer.print(“Hello World”);

// 2. Create a Shape class that consists of name, number of sides, and side length. Add getter that returns the shape perimeter. Create a new instance of Shape called square. Get the perimeter to check whether it works correctly. Create a new instance of Shape called triangle, get the perimeter to check that it works OK.

class
// 3. Create a Square class that inherits from the Shape class you created in the last assignment. Add calculateArea() method that calculates the square’s area. Also set up the constructor so that the name property of Square class is automatically set to “square”, and the “sides” property is automatically set to 4. When invoking the constructor, you should therefore just need to provide the side length property.
class Shape {
    constructor(name, numberOfSides, sideLength) {
      this.name = name;
      this.numberOfSides = numberOfSides;
      this.sideLength = sideLength;
    }
    get perimeter() {
      return this.numberOfSides * this.sideLength;
    }
  }
  let square = new Shape(“square”, 4, 10);
  console.log(square.perimeter);
  let triangel = new Shape(“triangel”, 3, 15);
  console.log(triangel.perimeter);
  20:04
  class Square extends Shape {
    constructor(sideLength) {
      super(“square”, 4, sideLength);
    }
    calculateArea() {
      return this.sideLength * this.sideLength;
    }
  }
  let square1 = new Square(5);
  console.log(square1.calculateArea());

// 4. Create an Animal class. Animal has a name and can eat. The eat() method should display a string “The animal called NAME is eating”. Create a Bird class that inherits from the Animal class. Bird accepts a number of wings and has a method fly() that just displays some message. Create an instance of Bird class and call eat() and fly() methods of it.

class Animal {
    constructor(name, food) {
      this.name = name;
      this.food = food;
    }
    eat() {
      return The animal called ${this.name} is eating;
    }
  }
  class Bird extends Animal {
    constructor(name, food, numberOfWings) {
      super(name, food);
      this.numberOfWings = numberOfWings;
    }
    fly() {
      return ${this.name} can fly with ${this.numberOfWings} wings;
    }
  }
  let bird = new Bird(“seagull”, “chips”, 2);
  console.log(bird.eat());
  console.log(bird.fly());

// So you should also use Date object here. To calculate the difference between two dates you can find the difference in milliseconds. Like date1.getMilliseconds() - date2.getMilliseconds
// Create a class that describes an article (heading, short description, tags array, date of publication in format YYYY-MM-DD). Create a method of the class that will print all the article information to the webpage using document.write(). If the date of publication was less than a day ago, it is displayed as “today”, if less than a week ago - “N days ago”, and otherwise it is shown as the full date format dd:mm:yyyy.

//------------------------------------------------------------------------------

// HOMEWORK

// Create a class that describes a regular marker. It should contain the following components: 
// A field that stores the color of the marker;
// A field that stores the amount of ink in the marker (in percentage);
// A method for input. The method takes a string and displays the text in the given color on the webpage. The text appears as long as the marker has ink. One non-space character takes 0,5% ink from the marker.
// Create a class that describes a refillable marker. The class should inherit from the regular marker. Also add a method that refills the marker. Demonstrate the work of these methods.
{}
