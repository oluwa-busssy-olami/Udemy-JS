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
