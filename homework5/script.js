//CLASSWORK

//1. Suppose we have an array of people.
// let people = ["Mary", "Greg", "Jane", "James"];
// Using the splice() function, remove “Jane” from the array and add “Elizabeth” and “Artie”.
// Then the array should look like this [“Mary”, “Greg”, “Elizabeth”, “Artie”, “James”].

let people = ["Mary", "Greg", "Jane", "James"];
people.splice(people.indexOf("Jane"), 1, "Elizabeth", "Artie");
console.log(people);

//--------------------------------------------------------------------------------

// 2. Suppose we have an array of objects.
// books = [
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//   },
//   {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//   }
// ];
// Using forEach() function, print each element to the webpage in the following way:
// 1. Book ‘The Road Ahead’ is written by ‘Bill Gates’
// 2. Book ‘Walter Isaacson’ is written by ‘Steve Jobs’

books = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
  },
];
books.forEach(function (book, i) {
  document.write(
    `<p> ${i + 1} Book ${book.title} is written by ${book.author}</p>`
  );
});

//--------------------------------------------------------------------------------

// 3. Suppose we have an array of numbers.
// let numbers = [112, -20, 52, 0, -1, 944];
// Using filter() function, create a new array consisting only positive numbers.

let numbers = [112, -20, 52, 0, -1, 944];
let numbers2 = numbers.filter(function (number) {
  return number > 0;
});
console.log(numbers2);

//---------------------------------------------------------------------------------

// 4. Suppose we have an array of objects.
// let keyValueArray = [
//   {
//     key: 'name',
//     value: 'James'
//   },
//   {
//     key: 'age',
//     value: 27
//   },
//   {
//     key: 'surname',
//     value: 'Doe'
//   }
// ];

// Using map() function, create a new array consisting reformatted objects
// like this:
// [
//   {
//     name: 'James'
//   },
//   {
//     age: 27
//   },
//   {
//     surname: 'Doe'
//   }
// ]

let keyValueArray = [
  {
    key: "name",
    value: "James",
  },
  {
    key: "age",
    value: 27,
  },
  {
    key: "surname",
    value: "Doe",
  },
];
let reformattedArray = keyValueArray.map(function (item) {
  let newObject = {};
  newObject[item.key] = item.value;
  return newObject;
});
//-----------------------------------------------------------------------------

//CLASSWORK

// 1. Create a constructor function called Video. The function should accept arguments of title
// (a string), uploader (a string, the person who uploaded it), and seconds (a number, the duration),
// and it should save them as properties of the object. Create a method of the Video constructor called watch()
// which should log a string to the console like “You watched all 1800 seconds of Walking with Dinosaurs!”
// Create a new object using the Video constructor and call the watch() method of it.

function Video(title, uploader, seconds) {
  this.title = title;
  this.uploader = uploader;
  this.seconds = seconds;
  this.watch = function () {
    console.log(`You watched all ${this.seconds} seconds of ${this.title}`);
  };
}
let movie = new Video("Bamse", "Nora", 3600);
let movie2 = new Video(3600, "Nora", "nalle puh"); //fel
movie.watch();
movie2.watch();

// 2. Suppose we have a student object:
// let student = {
//   name: 'Alex',
//   lastname: 'Wood'
// };
// Write a function called displayStudentInfo which accepts an object and returns the string
// “Your full name is NAME LASTNAME”. Use object destructuring to create “name” and “lastname”
// variables.

let student = {
  name: "Alex",
  lastname: "Wood",
};
function displayStudentInfo(student) {
  let { name, lastname } = student;
  let result = `Your full namne is ${name} ${lastname}`;
  return result;
}
//------------------------------------------------------------------------------

//HOMEWORK

// 1. Create a “groceries list” array. Each element of the array is an object that contains
// the name of a product, an amount needed and a property saying whether it is bought or not.
// Write a few functions for working with this array: 1) Function for displaying the entire list;
// 2) Function for adding a purchase to the list. Note that if a product already exists in the
// array, the amount needs to be increased in the existing purchase, not in a new one;
// 3) Function for purchasing a product. The function accepts the name of a product and marks it
// as bought.

let groceryList = [
  {
    name: "Milk",
    amount: 1,
    purchased: false,
  },
  {
    name: "Bread",
    amount: 2,
    purchased: false,
  },
  {
    name: "Apple",
    amount: 3,
    purchased: false,
  },
];

function displayGroceryList() {
  console.log(groceryList);
}

function addProduct(item) {
  const productNames = groceryList.map(function (item) {
    return item.name;
  });

  const index = productNames.indexOf(item.name);

  if (index > -1) {
    groceryList[index].amount += item.amount;
  } else {
    groceryList.push(item);
  }
}

addProduct({
  name: "Egg",
  amount: 6,
  purchased: false,
});

addProduct({
  name: "Milk",
  amount: 1,
  purchased: false,
});

function purchaseProduct(name) {
  for (let i = 0; i < groceryList.length; i++) {
    const product = groceryList[i];

    if (product.name == name) {
      product.purchased = true;
    }
  }
}

purchaseProduct("Milk");
purchaseProduct("Egg");

// 2. Create an array of classrooms. A classroom object consists of a name,
// a number of seats (10 to 20) and the faculty it is meant for. Write a few functions
// for working with it: 1) Display all the classrooms; 2) Display all the classrooms for
// a given faculty; 3) Display only the classrooms that would fit a given group. A group
// object contains a name, the number of students, and the faculty name.

let classrooms = [
  {
    name: "Vangogh",
    seats: 10,
    faculty: "Art",
  },
  {
    name: "DaVinci",
    seats: 12,
    faculty: "Art",
  },
  {
    name: "Darwin",
    seats: 15,
    faculty: "Biology",
  },
  {
    name: "Selma",
    seats: 20,
    faculty: "Swedish",
  },
];

function displayClassrooms() {
  console.log(classrooms);
}

displayClassrooms();

function displayFacultyClassrooms(faculty) {
  let foundClassrooms = [];
  for (let i = 0; i < classrooms.length; i++) {
    const classroom = classrooms[i];

    if (classroom.faculty == faculty) {
      foundClassrooms.push(classroom);
    }
  }
  console.log(foundClassrooms);
}

displayFacultyClassrooms("Art");

function sufficientSeats(numberOfSeats) {
  let foundClassrooms = [];
  for (let i = 0; i < classrooms.length; i++) {
    const classroom = classrooms[i];
    if (classroom.seats >= numberOfSeats) {
      foundClassrooms.push(classroom);
    }
  }
  console.log(foundClassrooms);
}

sufficientSeats(17);
sufficientSeats(11);
