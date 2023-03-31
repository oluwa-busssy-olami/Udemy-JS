// === & !=
let total = 1 + 3;
console.log(total);

let rating = 3;
if (rating === 3) {
  console.log("rating is equal to 3");
} else {
  console.log("rating is not 3");
}

let age = 16;
let citizen = "Nigerian";
if (age >= 18 && citizen === "Nigerian") {
  console.log("You are eligible to vote");
} else {
  console.log("sorry you have to be above 18 or Nigrian citizen to vote");
}

// const dayOfWeek = prompt('ENTER A DAY') {
//     if (dayOfWeek === "monday") {
//         console.log("I hate mondays")
//     } else if {

//     }
// }

// const password = prompt("please enter a new password");
// if (password.length >= 6) {
//   // console.log("Long Enough Password");
//   if (password.indexOf(" ") === -1) {
//     console.log("valid Password");
//   } else {
//     console.log("password cannot include space");
//   }
// } else {
//   console.log("Password too short  much be 6+ characters");
// }

// const userInput = prompt("Enter something!");
// if (userInput) {
//   console.log("TRUTHY!");
// } else {
//   console.log("FALSY!");
// }

// let firstName = prompt("enter your first name");
// if (!firstName) {
//   firstName = prompt("Try Again!");
// }

const ageGroup = 0;
if (!((ageGroup >= 0 && ageGroup < 5) || ageGroup >= 65)) {
  console.log("YOU AR NOT A BABY BUT A SENIOR");
}
//Truthy and falsy values
//False value ncludes; False; 0, -(empty string ), null, underfined, Nan,
const day = 9;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THRUSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  case 7:
    console.log("SUNDAY");
    break;

  default:
    console.log("NOT A DAY OF THE WEEK");
    break;
}
//Arrays
//push - add to end
//pop remove from end
//shift remov from start
// unshift -add to start
let moveLine = ["tom", "nancy"];
moveLine[2] = "pablo";
moveLine.push("Oliver");
console.log(moveLine);

//concat - merge arrays
//includes- look for a value
// indexof = just like string.indexof
//join creates a string from an array
// slice - copies a portion on an array
//splice remove/ replacs element
//sort -sorts an array
let nmaes = ["simi", "tobi", "tope"];

console.log(nmaes.includes("bunmi"));
console.log(nmaes);

//slice
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(colors.slice(2, 6));
//splice
const month = ["jan", "feb", "mar", "april", "may", "june"];
//remove june
console.log(month.splice(5, 1));
//remove feb march
console.log(month.splice(1, 2));
//add month
console.log(month.splice(4, 0, "november"));
//multiply month
console.log(month.splice(3, 0, "july", "august", "september", "october"));
console.log(month);
//delete multiply
console.log(month.splice(2, 2, "DELETED!!"));
console.log(month);

//sort
let scores = [1, 30, 60, 45, 26, 98, 76, 0, 56, 100, -23];
console.log(scores.sort());

//Equality in terms of arrays

//nestd arrays ; we can store arrays inside other arrays
const board = [
  ["O", null, "X"],
  [null, "X", "O"],
  ["X", "O", null],
];

console.log(board);
const secondBoard = board[2];
console.log(secondBoard);
console.log(secondBoard.splice(2, 2, "O"));
console.log(secondBoard);

//Object literal
//Data  struture, similar to an array in the sence that it stores data , combine type or piece of data;
// our data  is stored using a key-value pair, rather than accessing dT using an index we use custom keys
//object literal
const person = {
  firstName: "Oluwabusolami",
  lastName: "Oluwabi",
  age: 21,
};
console.log(person);
const kitchenSink = {
  favNum: 5677,
  isFunny: true,
  colors: ["red", "green"],
};
console.log(kitchenSink);

//How to acesss an array
console.log(person["firstName"]);
//second way
console.log(person.age);

const years = {
  1999: "Good",
  2020: "Bad",
};
console.log(years["1999"]);
//N.B all key are converted to strings

//different btween the dot and the square synax
//the square won't run unless the " " isn't present

//Adding new object

const midTerm = {
  olubunmi: 87,
  thomas: 75,
};
midTerm.thomas = 79;
console.log(midTerm.thomas);
midTerm.thomas = "C+";
midTerm["olubunmi"] = "B+";
midTerm.lekan = "B+";
midTerm["antonio"] = "A-";
console.log(midTerm);

//nesting Arrays and Object
const comments = [
  {
    userName: "Tammy",
    text: "Loolll",
    votes: 65,
  },
  {
    userName: "Mo'believe",
    text: "Glitch Africa",
    votes: 456,
  },
  {
    userName: "lammy_the-Smart_kid",
    text: "Finally a Graduate",
    votes: 324,
  },
];
console.log(comments[1].text);
//for loop synax
// for (
//     [initialExpression];
//     [condition]; console.log this
//     [incrementExpression]
// )
//  start at 0  stop at 10 add 1 each time
for (let i = 0; i <= 10; i++) {
  console.log("I'M IN A LOOP BODY!!!");
  console.log(i);
}
//make a loop that even number from 0 to 20

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//or
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

//countdown
for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}
//looping over arrays

const animal = [
  "antelope",
  "bat",
  "cat",
  "dog",
  "elephant",
  "fish",
  "gorilla",
  "homo sapien",
  "iguna",
  "jungle animals",
  "kangaroo",
  "lion",
  "mammals",
  "nest",
  "organism",
  "parrot",
  "quake",
  "rat",
  "snake",
  "tortoise",
  "unicorn",
  "vampire",
  "whale",
  "xanophobia",
  "yal",
  "zebra",
];
for (let i = 0; i < animal.length; i++) {
  console.log(i, animal[i]);
}
for (let i = animal.length - 1; i; i--) {
  console.log(i, animal[i]);
}

//nested loops
for (let i = 1; i <= 10; i++) {
  console.log(`i is: ${i}`);
  for (let j = 0; j < 4; j++) {
    console.log(`   j is ${j}`);
  }
}

const seatingchart = [
  ["Kristen", "Erika", "Namita"],
  ["Geoffrey", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];
for (let i = 0; i < seatingchart.length; i++) {
  const row = seatingchart[i];
  console.log(row);
  console.log(`ROW is ${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
// for (let rows of seatingchart) {
//   console.log(rows);
// }
const animalGroups = [
  ["antelope", "bat", "cat", "dog"],
  ["elephant", "fish", "gorilla", "homo sapien"],
  ["iguna", "jungle animals", "kangaroo", "lion", "mammals"],
  ["nest", "organism", "parrot", "quake"],
];

for (let i = 0; i < animalGroups.length; i++) {
  // console.log(animalGroups[i]);
  const rowCall = animalGroups[i];
  for (let j = 0; j < rowCall.length; j++) {
    console.log(rowCall[j]);
  }
}

//while loop
// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }
// const secretCode = "BabyHippo";
// let guess = prompt("enter secret code....");
// while (guess !== secretCode) {
//   guess = prompt("enter secret code....");
// }
// console.log("CONGRATS YOU GOT THE SECRET");

//the break keyword4 is a way of exscaping a loop
// let input = prompt("hey, say something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me") {
//     break;
//   }
// }
// console.log("OK YOU WIN");

for (let i = 0; i < 100; i++) {
  console.log(i);
  if (i === 55) break;
}

//write a guess name
// let maxNum = parseInt(prompt("Enter the maximum number!"));
// //if there's not a maxnum maxnum is falsy
// while (!maxNum) {
//   maxNum = parseInt(prompt("Enter a valid number"));
// }
// const targetNum = Math.floor(Math.random() * maxNum) + 1;
// // console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess"));
// let attempts = 1;
// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   attempts++;
//   if (guess > targetNum) {
//     guess = prompt("Too high! Enter a new guess:");
//   } else {
//     guess = prompt("Too low! Enter a new guess:");
//   }
// }
// if (guess === "q") {
//   console.log("OK, YOU QUITT!!");
// } else {
//   console.log("CONGRATULATION YOU WIN");
//   console.log(`You got it! It took you ${attempts} guesses`);
// }

//for of
const friendsNames = [
  "Fadekemi",
  "Damola",
  "Gift",
  "Blessing",
  "Marve",
  "Oluwabisimi",
  "Opeyemi",
  "Turah",
];
for (let i = 0; i < friendsNames.length; i++) {
  console.log(`visit reddit.com/r/${friendsNames[i]}`);
}

for (let names of friendsNames) {
  console.log(`visit google.com/${names}`);
}

const groupsNames = [
  ["Bunmi", "Nike", "Adeola", "Azeezat", "Oyin"],
  ["Busolami", "Gift", "Marve", "Blessing"],
  ["Mo", "Babyboi", "Dotun", "Bunmi Africa", "Oluchi", "Damilare"],
  ["Tomiwa", "Dapo", "Olumba", "Artiste"],
];
// for (let i = 0; i < groupsNames.length; i++) {
//   const rows = groupsNames[i];

//   for (let i = 0; i < rows.length; i++) {
//     console.log(rows[i]);
//   }
// }

for (let rows of groupsNames) {
  for (let student of rows) {
    console.log(student);
  }
}

for (let chat of "Hello World") {
  console.log(chat);
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!
for (let num of number) {
  console.log(num ** 2);
}

// const correctPassword = "BusolamiOluwabi";
// let loginPassword = prompt("Enter a correct password");
// while (loginPassword !== correctPassword) {
//   loginPassword = prompt("Enter a correct password");
// }
// console.log("YOU'VE SUCCESFULLY LOG IN");

//itering over object
const testScore = {
  math: 60,
  phy: 56,
  eng: 65,
  chem: 76,
};
for (let subject in testScore) {
  console.log(`${subject} scored ${testScore[subject]}`);
}

let totalscores = 0;
for (let score of Object.values(testScore)) {
  console.log((total += score));
}
let scorer = 0;
let jambScore = Object.values(testScore);
for (let scoress of jambScore) {
  scorer += jambScore;
}
console.log(total / scorer.length);
//TO DO LIST
// let input = prompt("What do you want to accomplish for the day?");
// const todos = ["collect chicke eggs", "clean the house"];
// while (input !== "quit" && input !== "q") {
//   if (input === "list") {
//     console.log("************");
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i}: ${todos[i]}`);
//     }
//   } else if (input === "new") {
//     const newTodo = prompt("Okay what is the new todo");
//     todos.push(newTodo);
//     console.log(`${newTodo} added to the list `);
//   } else if (input === "delete") {
//     const index = parseInt(
//       prompt("What are you trying to delete, enter index to delete")
//     );
//     if (Number.isNaN(index)) {
//       const deleted = todos.splice(index, 1);
//       console.log(`ok, deleted ${deleted[0]}`);
//     } else {
//       console.log("unknown Index");
//     }
//   }
//   input = prompt("What do you want to accomplish for the day?");
// }
// console.log("quit the app");

//Functions
//Working with Argument (The last of the big topics)
function greet() {
  console.log("Good Morning Ma");
}
greet();
//step 1(Define)
function singSong() {
  console.log("Miracle no dey tire Jesus");
  console.log("To bless people no dey tire Jesus");
  console.log("E don do am before");
  console.log("E still dey do am again! chaii!");
  console.log("Miracle no dey tire Jesus");
}

//step 2(Run / Call/ Execute)
singSong();

//Arguments; in JS is a basic way of sayimg input to a function;
//Any thing inside the parameter is an argument
function greeting(name) {
  console.log(`Hi, ${name}!!`);
}
//when we call greet and past a value in it it's called an argument
greeting("Busolami");

//Multiple Argument
function greetings(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}
//when we call greet and past a value in it it's called an argument
greetings("Busolami", "Oluwabi");

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}
repeat("I love jesus ", 10);

//Return statementends function execution and specifies the value to be returned by that function
function multiple(num1, num2) {
  return num1 * num2;
}
console.log(multiple(2, 5));
//return is how we get value out of a function so that we can save them and caption them
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  let sum = x + y;
  return sum;
}

function rant(message) {
  console.log(`${message}`);
  console.log(`${message}`);
  console.log(`${message}`);
}
rant("I hate beef".toUpperCase());

function isSnakeEyes(number1, number2) {
  if (number1 === 1 && number2 === 1) {
    console.log("Snake Eye!");
  } else {
    console.log("Not snake Eyes!");
  }
  //console.log(isSnakeEyes(6, 6));
}

//Higher Order Function
//Function scope; variable "Visibility". The location where a variable is defined dictates where we have access to the variable
/* function helpMe{}
let msg = 'I'm on fire!
msg;
}
msg//undefines meaning msg is scoped to thhe helpMe function*/
let totalEggs = 0;

function collectChickenEggs() {
  totalEggs = 6;
}
console.log(totalEggs);
collectChickenEggs();

let bird = "Scarlet Macaw";

function birdWatch() {
  let bird = "Great Blue Heron";
  console.log(bird);
}
console.log(bird);

//what is printed to the console when this code runs
let animals = "blue Whale";

function observe() {
  let animal = "Pajamas squid";
  console.log(animal);
}
observe();

//Another type of scope (block scope)
let radius = 8;
if (radius < 0) {
  const PI = 3.14159;
  let msg = "HIII";
}
console.log(radius);
//PI & CIRC are scoped to block
//for (let i = 0; i < array.length; i++) {
//let msg = "I LOVE JESUS";
// }
//note that this only i and msg can only exist in the curly bracketand not outside

//Lexical Scope;our function are access to the same stuffas the parent or grandparent
function bankRobbery() {
  const heroes = ["spiderman", "Batman", "Wolverine", "Black Panther"];

  function cryForHelp() {
    function inner() {
      for (let hero of heroes) {
        console.log(`Please help me ${hero.toUpperCase()}`);
      }
    }
    inner();
  }
  cryForHelp();
}

function theOluwabiFamily() {
  const familyName = [
    "Dad",
    "Mom",
    "Mo'beleve",
    "Tomiwa",
    "Olubunmi",
    "Busolami",
    "Olamilekan",
  ];

  function familyMeeting() {
    for (let meeting of familyName) {
      console.log(
        `THE MEETING IS DUE FOR THIS SATURDAY ${meeting.toUpperCase()}`
      );
    }
  }
  familyMeeting();
}

//function Expression is a way of defining a function
//function expression is a way of storing a function in a variable
//functions are values in JS you can store them, pass number
const square = function (num) {
  return num * num;
};

square(7);

//HIGHER ORDER FUNCTION; is  fancy way of saying a functions that works with other functions;
//they can: Accept ther functions as argument or Return a function
let greets = function () {
  console.log("HI");
};
greets();

function callTwices(func) {
  func();
  func(); // invokinf a function / call
}
// callTwices();
function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

function rollDies() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}
console.log(callTwices(rollDies));

// Returning Function
function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("CONGRATS I'M  A GOOD FUNCTION");
      console.log("YOU WIN A MILLION DOLLARS");
    };
  } else {
    return function () {
      alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS");
      alert("STOP TRYING TO CLOSE THIS WINDOW");
      alert("STOP TRYING TO CLOSE THIS WINDOW");
      alert("STOP TRYING TO CLOSE THIS WINDOW");
      alert("STOP TRYING TO CLOSE THIS WINDOW");
    };
  }
}

//Function that generate a function
function isBetweenFun(num) {
  return num >= 50 && num <= 100;
}

function isBetween(num) {
  if (num >= 45 && num <= 100) {
    return true;
  } else {
    return false;
  }
}
//factory function make a function
function makeBetweenFunc(min, max) {
  return function (nums) {
    return nums >= min && nums <= max;
  };
}

//  const testRange = function (nums) {
//     return nums >= 100 && nums <= 200;
// }

//defining methods; we can add funtions as properties on objects.
//we call them methods2; every mehod is a function
//Every Method is a function and Every function is not a method
const myMath = {
  PI: 3.14159,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
};
// or

const math = {
  blah: "Hi",
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  },
};
math.add(50, 60);

//This in methods
const dog = {
  name: "oldy",
  color: "grey",
  breed: "scottish fold",
  bark() {
    console.log(`${this.name} BARKSS`);
  },
};

const dog2 = dog.bark;

//Try/catch deal with errors in JS specificially catching errors and preventing them from breaking
try {
  hello.toUpperCase();
} catch {
  console.log("EROORRR!!!");
}

function yelll(msg) {
  return msg.toUpperCase().repeat(3);
}

const squares = function (num) {
  return num * Math.pow();
};

const squar = function (num) {
  return num * num;
};
